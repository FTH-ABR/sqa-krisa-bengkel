'use strict';

const MIN_QTY = 1;
const MAX_QTY = 10;
const SHIPPING_FEE = 8.0;
const FREE_SHIPPING_THRESHOLD = 200.0;
const MEMBER_RATE = 0.1;
const MAX_DISCOUNT_RATE = 0.25;
const PROMO_CODE_PATTERN = /^[A-Z0-9]{6,10}$/;
const PAYMENT_METHODS = ['FPX', 'CARD', 'EWALLET'];

const ORDER_TRANSITIONS = {
  pay: { from: ['NEW'], to: 'PAID' },
  pack: { from: ['PAID'], to: 'PACKED' },
  ship: { from: ['PACKED'], to: 'SHIPPED' },
  receive: { from: ['SHIPPED'], to: 'COMPLETED' },
  fail: { from: ['NEW'], to: 'PAYMENT_FAILED' },
  cancel: { from: ['NEW', 'PAID', 'SHIPPED'], to: 'CANCELLED' }
};

function money(value) {
  const n = Number(value) || 0;
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

function isValidQuantity(quantity) {
  return Number.isInteger(quantity) && quantity >= MIN_QTY && quantity < MAX_QTY;
}

function isWellFormedPromoCode(code) {
  return typeof code === 'string' && PROMO_CODE_PATTERN.test(code);
}

function isPromoExpired(promo) {
  if (!promo.expires) return false;
  const today = new Date().toISOString().slice(0, 10);
  return today > promo.expires;
}

function priceCart(cart, promoCodes, isMember) {
  const items = cart.items.map((item) => ({
    productId: item.productId,
    name: item.name,
    unitPrice: money(item.unitPrice),
    quantity: item.quantity,
    lineTotal: money(item.unitPrice * item.quantity)
  }));
  const subtotal = money(items.reduce((sum, item) => sum + item.lineTotal, 0));

  const memberDiscount = isMember ? money(subtotal * MEMBER_RATE) : 0;
  const promo = cart.discountCode ? promoCodes[cart.discountCode] : null;
  let promoDiscount = promo ? money(subtotal * promo.rate) : 0;

  const maxDiscount = money(subtotal * MAX_DISCOUNT_RATE);
  if (promoDiscount > maxDiscount) {
    promoDiscount = maxDiscount;
  }
  const discount = money(memberDiscount + promoDiscount);

  let shipping = subtotal > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  if (items.length === 0) shipping = 0;

  return {
    items,
    subtotal,
    discountCode: cart.discountCode || null,
    memberDiscount,
    promoDiscount,
    discount,
    shipping,
    total: money(subtotal - discount + shipping)
  };
}

function checkCardExpiry(cardExpiry, now) {
  const match = /^(0[1-9]|1[0-2])\/([0-9]{2})$/.exec(typeof cardExpiry === 'string' ? cardExpiry : '');
  if (!match) {
    return 'INVALID';
  }
  const expiryYear = 2000 + Number(match[2]);
  if (expiryYear < now.getFullYear()) {
    return 'EXPIRED';
  }
  return 'OK';
}

function validateCheckout(body) {
  const errors = [];
  const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
  if (fullName.length < 3 || fullName.length > 80) {
    errors.push('fullName must be between 3 and 80 characters');
  }
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  if (!/^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(email)) {
    errors.push('email must be a valid email address');
  }
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  if (!/^01[0-9]{8,9}$/.test(phone)) {
    errors.push('phone must match ^01[0-9]{8,9}$');
  }
  const postcode = typeof body.postcode === 'string' ? body.postcode.trim() : '';
  if (!/^[0-9]{4,5}$/.test(postcode)) {
    errors.push('postcode must be 5 digits');
  }
  if (!PAYMENT_METHODS.includes(body.paymentMethod)) {
    errors.push('paymentMethod must be one of FPX, CARD, EWALLET');
  }
  return {
    errors,
    value: { fullName, email, phone, postcode, paymentMethod: body.paymentMethod }
  };
}

function nextStatus(currentStatus, action) {
  const rule = Object.prototype.hasOwnProperty.call(ORDER_TRANSITIONS, action) ? ORDER_TRANSITIONS[action] : null;
  if (!rule || !rule.from.includes(currentStatus)) {
    return null;
  }
  return rule.to;
}

module.exports = {
  money,
  isValidQuantity,
  isWellFormedPromoCode,
  isPromoExpired,
  priceCart,
  checkCardExpiry,
  validateCheckout,
  nextStatus
};
