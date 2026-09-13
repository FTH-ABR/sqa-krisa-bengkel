'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const data = require('./data');
const rules = require('./rules');

const PORT = Number(process.env.PORT) || 3000;
const VERSION = '1.0.0';
const PUBLIC_DIR = path.join(__dirname, 'public');
const LOGIN_ATTEMPT_LIMIT = 5;
const LOCK_MINUTES = 15;
const TOKEN_TTL_SECONDS = 3600;

const products = data.products.map((p) => ({ ...p }));
const carts = new Map();
const orders = new Map();
const tokens = new Map();
const loginState = new Map();
let nextOrderNumber = 1001;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

class HttpError extends Error {
  constructor(status, code, message) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Session-Id');
}

function sendJson(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  });
  res.end(payload);
}

function sendError(res, status, code, message) {
  sendJson(res, status, { error: code, message });
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > 1024 * 1024) {
        reject(new HttpError(400, 'VALIDATION_ERROR', 'request body too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf8');
      if (!raw.trim()) {
        resolve({});
        return;
      }
      try {
        const parsed = JSON.parse(raw);
        if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
          reject(new HttpError(400, 'VALIDATION_ERROR', 'request body must be a JSON object'));
          return;
        }
        resolve(parsed);
      } catch (err) {
        reject(new HttpError(400, 'VALIDATION_ERROR', 'request body is not valid JSON'));
      }
    });
    req.on('error', reject);
  });
}

function requireSession(req) {
  const sessionId = req.headers['x-session-id'];
  if (typeof sessionId !== 'string' || !sessionId.trim()) {
    throw new HttpError(400, 'VALIDATION_ERROR', 'X-Session-Id header is required');
  }
  return sessionId.trim();
}

function getCart(sessionId) {
  if (!carts.has(sessionId)) {
    carts.set(sessionId, { items: [], discountCode: null });
  }
  return carts.get(sessionId);
}

function findProduct(productId) {
  return products.find((p) => p.id === productId);
}

function currentUser(req) {
  const auth = req.headers.authorization || '';
  const match = /^Bearer\s+(.+)$/i.exec(auth);
  if (!match) return null;
  const entry = tokens.get(match[1].trim());
  if (!entry || entry.expiresAt < Date.now()) return null;
  return data.users.find((u) => u.email === entry.email) || null;
}

function priceFor(req, cart) {
  const user = currentUser(req);
  return rules.priceCart(cart, data.promoCodes, Boolean(user && user.isMember));
}

function health(req, res) {
  sendJson(res, 200, { status: 'ok', version: VERSION });
}

function listProducts(req, res) {
  sendJson(res, 200, products.map((p) => ({ id: p.id, name: p.name, price: p.price, stock: p.stock })));
}

function showCart(req, res) {
  const sessionId = requireSession(req);
  sendJson(res, 200, priceFor(req, getCart(sessionId)));
}

async function addItem(req, res) {
  const sessionId = requireSession(req);
  const body = await readBody(req);
  const { productId, quantity } = body;

  if (typeof productId !== 'string' || !productId) {
    throw new HttpError(400, 'VALIDATION_ERROR', 'productId is required');
  }
  if (!rules.isValidQuantity(quantity)) {
    throw new HttpError(400, 'VALIDATION_ERROR', 'quantity must be between 1 and 10');
  }
  const product = findProduct(productId);
  if (!product) {
    throw new HttpError(400, 'UNKNOWN_PRODUCT', 'product ' + productId + ' does not exist');
  }

  const cart = getCart(sessionId);
  const existing = cart.items.find((item) => item.productId === productId);
  const newQuantity = (existing ? existing.quantity : 0) + quantity;

  if (product.stock <= 0 || newQuantity > product.stock) {
    throw new HttpError(400, 'OUT_OF_STOCK', product.name + ' does not have enough stock');
  }
  if (!rules.isValidQuantity(newQuantity)) {
    throw new HttpError(400, 'VALIDATION_ERROR', 'quantity must be between 1 and 10');
  }

  if (existing) {
    existing.quantity = newQuantity;
  } else {
    cart.items.push({ productId: product.id, name: product.name, unitPrice: product.price, quantity });
  }
  sendJson(res, 201, priceFor(req, cart));
}

function removeItem(req, res, params) {
  const sessionId = requireSession(req);
  const cart = getCart(sessionId);
  cart.items = cart.items.filter((item) => item.productId !== params.productId);
  sendJson(res, 200, priceFor(req, cart));
}

async function applyDiscount(req, res) {
  const sessionId = requireSession(req);
  const body = await readBody(req);
  const code = body.code;
  if (!rules.isWellFormedPromoCode(code)) {
    throw new HttpError(422, 'INVALID_CODE_FORMAT', 'code must be 6 to 10 uppercase letters or digits');
  }
  const promo = data.promoCodes[code];
  if (!promo) {
    throw new HttpError(422, 'INVALID_CODE', 'promo code ' + code + ' is not valid');
  }
  if (rules.isPromoExpired(promo)) {
    throw new HttpError(422, 'CODE_EXPIRED', 'promo code ' + code + ' has expired');
  }
  const cart = getCart(sessionId);
  cart.discountCode = code;
  sendJson(res, 200, priceFor(req, cart));
}

function publicOrder(order) {
  const { ownerSession, ownerEmail, ...rest } = order;
  return rest;
}

function isOrderOwner(req, order) {
  const sessionId = req.headers['x-session-id'];
  if (typeof sessionId === 'string' && sessionId.trim() && sessionId.trim() === order.ownerSession) {
    return true;
  }
  const user = currentUser(req);
  return Boolean(user && order.ownerEmail && user.email === order.ownerEmail);
}

async function checkout(req, res) {
  const sessionId = requireSession(req);
  const body = await readBody(req);
  const cart = getCart(sessionId);

  if (!cart.items) {
    throw new HttpError(400, 'CART_EMPTY', 'cart is empty');
  }

  const { errors, value } = rules.validateCheckout(body);
  if (errors.length > 0) {
    throw new HttpError(400, 'VALIDATION_ERROR', errors.join('; '));
  }
  if (value.paymentMethod === 'CARD') {
    const expiry = rules.checkCardExpiry(body.cardExpiry, new Date());
    if (expiry === 'INVALID') {
      throw new HttpError(400, 'VALIDATION_ERROR', 'cardExpiry must be in MM/YY format when paymentMethod is CARD');
    }
    if (expiry === 'EXPIRED') {
      throw new HttpError(400, 'CARD_EXPIRED', 'card has expired');
    }
  }

  const itemCount = cart.items.map((item) => item.quantity).reduce((a, b) => a + b);
  const priced = priceFor(req, cart);

  for (const item of priced.items) {
    const product = findProduct(item.productId);
    if (!product || product.stock < item.quantity) {
      throw new HttpError(400, 'OUT_OF_STOCK', item.name + ' does not have enough stock');
    }
  }
  for (const item of priced.items) {
    findProduct(item.productId).stock -= item.quantity;
  }

  const user = currentUser(req);
  const order = {
    orderId: 'SF-' + nextOrderNumber++,
    status: 'NEW',
    fullName: value.fullName,
    email: value.email,
    phone: value.phone,
    postcode: value.postcode,
    paymentMethod: value.paymentMethod,
    items: priced.items,
    itemCount,
    subtotal: priced.subtotal,
    discountCode: priced.discountCode,
    memberDiscount: priced.memberDiscount,
    promoDiscount: priced.promoDiscount,
    discount: priced.discount,
    shipping: priced.shipping,
    total: priced.total,
    createdAt: new Date().toISOString(),
    ownerSession: sessionId,
    ownerEmail: user ? user.email : null
  };
  orders.set(order.orderId, order);
  carts.set(sessionId, { items: [], discountCode: null });
  sendJson(res, 201, publicOrder(order));
}

async function login(req, res) {
  const body = await readBody(req);
  if (typeof body.email !== 'string' || typeof body.password !== 'string' || !body.email || !body.password) {
    throw new HttpError(400, 'VALIDATION_ERROR', 'email and password are required');
  }
  const email = body.email.trim().toLowerCase();
  const user = data.users.find((u) => u.email === email);
  if (!user) {
    throw new HttpError(401, 'INVALID_CREDENTIALS', 'email or password is incorrect');
  }

  const state = loginState.get(email) || { failures: 0, lockedUntil: 0 };
  loginState.set(email, state);

  if (state.lockedUntil > Date.now()) {
    throw new HttpError(423, 'ACCOUNT_LOCKED', 'account is locked, try again in ' + LOCK_MINUTES + ' minutes');
  }
  if (user.password !== body.password) {
    state.failures += 1;
    if (state.failures >= LOGIN_ATTEMPT_LIMIT) {
      state.failures = 0;
      state.lockedUntil = Date.now() + LOCK_MINUTES * 60 * 1000;
    }
    throw new HttpError(401, 'INVALID_CREDENTIALS', 'email or password is incorrect');
  }

  state.failures = 0;
  state.lockedUntil = 0;
  const token = crypto.randomBytes(24).toString('hex');
  tokens.set(token, { email, expiresAt: Date.now() + TOKEN_TTL_SECONDS * 1000 });
  sendJson(res, 200, { token, expiresIn: TOKEN_TTL_SECONDS, isMember: user.isMember });
}

function getOrder(req, res, params) {
  const order = orders.get(params.orderId);
  if (!order) {
    throw new HttpError(404, 'NOT_FOUND', 'order ' + params.orderId + ' not found');
  }
  sendJson(res, 200, publicOrder(order));
}

async function transitionOrder(req, res, params) {
  requireSession(req);
  const body = await readBody(req);
  const order = orders.get(params.orderId);
  if (!order || !isOrderOwner(req, order)) {
    throw new HttpError(404, 'NOT_FOUND', 'order ' + params.orderId + ' not found');
  }
  const action = body.action;
  const status = typeof action === 'string' ? rules.nextStatus(order.status, action) : null;
  if (!status) {
    throw new HttpError(409, 'INVALID_TRANSITION', 'cannot ' + String(action) + ' an order that is ' + order.status);
  }
  order.status = status;
  order.updatedAt = new Date().toISOString();
  sendJson(res, 200, publicOrder(order));
}

const routes = [
  { method: 'GET', pattern: /^\/api\/health$/, handler: health },
  { method: 'GET', pattern: /^\/api\/products$/, handler: listProducts },
  { method: 'GET', pattern: /^\/api\/cart$/, handler: showCart },
  { method: 'POST', pattern: /^\/api\/cart\/items$/, handler: addItem },
  { method: 'DELETE', pattern: /^\/api\/cart\/items\/([^/]+)$/, keys: ['productId'], handler: removeItem },
  { method: 'POST', pattern: /^\/api\/discounts\/apply$/, handler: applyDiscount },
  { method: 'POST', pattern: /^\/api\/checkout$/, handler: checkout },
  { method: 'POST', pattern: /^\/api\/auth\/login$/, handler: login },
  { method: 'GET', pattern: /^\/api\/orders\/([^/]+)$/, keys: ['orderId'], handler: getOrder },
  { method: 'POST', pattern: /^\/api\/orders\/([^/]+)\/transitions$/, keys: ['orderId'], handler: transitionOrder }
];

function serveStatic(req, res, pathname) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    sendError(res, 404, 'NOT_FOUND', 'resource not found');
    return;
  }
  let relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  try {
    relative = decodeURIComponent(relative);
  } catch (err) {
    sendError(res, 404, 'NOT_FOUND', 'resource not found');
    return;
  }
  const filePath = path.normalize(path.join(PUBLIC_DIR, relative));
  if (!filePath.startsWith(PUBLIC_DIR + path.sep)) {
    sendError(res, 404, 'NOT_FOUND', 'resource not found');
    return;
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      sendError(res, 404, 'NOT_FOUND', 'resource not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
    res.end(req.method === 'HEAD' ? undefined : content);
  });
}

async function handle(req, res) {
  setCors(res);
  const url = new URL(req.url, 'http://localhost');
  const pathname = url.pathname;

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (!pathname.startsWith('/api/')) {
    serveStatic(req, res, pathname);
    return;
  }

  for (const route of routes) {
    const match = route.pattern.exec(pathname);
    if (!match || route.method !== req.method) continue;
    const params = {};
    try {
      (route.keys || []).forEach((key, i) => {
        params[key] = decodeURIComponent(match[i + 1]);
      });
    } catch (err) {
      throw new HttpError(404, 'NOT_FOUND', 'resource not found');
    }
    await route.handler(req, res, params);
    return;
  }
  sendError(res, 404, 'NOT_FOUND', 'no route for ' + req.method + ' ' + pathname);
}

const server = http.createServer((req, res) => {
  const started = Date.now();
  res.on('finish', () => {
    console.log(new Date().toISOString() + ' ' + req.method + ' ' + req.url + ' ' + res.statusCode + ' ' + (Date.now() - started) + 'ms');
  });
  handle(req, res).catch((err) => {
    if (res.headersSent) {
      res.end();
      return;
    }
    if (err instanceof HttpError) {
      sendError(res, err.status, err.code, err.message);
      return;
    }
    sendError(res, 500, 'INTERNAL_ERROR', err.message);
  });
});

server.listen(PORT, () => {
  console.log('ShopFast API ' + VERSION + ' listening on http://localhost:' + PORT);
});

function shutdown() {
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 1000).unref();
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
