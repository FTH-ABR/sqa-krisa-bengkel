(function () {
  'use strict';

  var SESSION_KEY = 'shopfast.sessionId';
  var AUTH_KEY = 'shopfast.auth';

  function storageGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function storageSet(key, value) {
    try {
      if (value === null) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, value);
      }
    } catch (e) {
      return;
    }
  }

  function getSessionId() {
    var id = storageGet(SESSION_KEY);
    if (!id) {
      id = 'web-' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
      storageSet(SESSION_KEY, id);
    }
    return id;
  }

  function loadAuth() {
    try {
      var raw = storageGet(AUTH_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  var sessionId = getSessionId();
  var auth = loadAuth();

  function $(id) {
    return document.getElementById(id);
  }

  function formatRM(value) {
    return 'RM ' + Number(value || 0).toFixed(2);
  }

  function showError(message) {
    var box = $('error-message');
    box.textContent = message;
    box.hidden = false;
  }

  function clearError() {
    var box = $('error-message');
    box.textContent = '';
    box.hidden = true;
  }

  function api(method, url, body) {
    var options = {
      method: method,
      headers: { 'X-Session-Id': sessionId }
    };
    if (auth && auth.token) {
      options.headers.Authorization = 'Bearer ' + auth.token;
    }
    if (body !== undefined) {
      options.headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(body);
    }
    return fetch(url, options).then(function (res) {
      return res.text().then(function (text) {
        var data = null;
        try {
          data = text ? JSON.parse(text) : null;
        } catch (e) {
          data = { error: 'BAD_RESPONSE', message: text };
        }
        if (!res.ok) {
          var err = new Error((data && data.message) || ('HTTP ' + res.status));
          err.code = data && data.error;
          err.status = res.status;
          throw err;
        }
        return data;
      });
    });
  }

  function handleError(err) {
    var prefix = err.code ? '[' + err.code + '] ' : '';
    showError(prefix + err.message);
  }

  function renderLogin() {
    var status = $('login-status');
    if (auth && auth.token) {
      status.textContent = auth.isMember
        ? 'Log masuk sebagai ' + auth.email + ' (ahli, diskaun 10%)'
        : 'Log masuk sebagai ' + auth.email + ' (bukan ahli)';
      $('login-logout').hidden = false;
    } else {
      status.textContent = 'Tetamu (tiada diskaun ahli)';
      $('login-logout').hidden = true;
    }
  }

  function renderProducts(products) {
    var grid = $('product-grid');
    grid.innerHTML = '';
    products.forEach(function (p) {
      var card = document.createElement('article');
      card.className = 'product';
      card.setAttribute('data-testid', 'product-' + p.id);

      var name = document.createElement('h3');
      name.textContent = p.name;

      var meta = document.createElement('p');
      meta.className = 'muted small';
      meta.textContent = p.id + ' | Stok ' + p.stock;

      var price = document.createElement('p');
      price.className = 'price';
      price.setAttribute('data-testid', 'price-' + p.id);
      price.textContent = formatRM(p.price);

      var row = document.createElement('div');
      row.className = 'inline';

      var qty = document.createElement('input');
      qty.type = 'number';
      qty.value = '1';
      qty.min = '1';
      qty.step = '1';
      qty.className = 'qty';
      qty.setAttribute('aria-label', 'Kuantiti ' + p.name);
      qty.setAttribute('data-testid', 'qty-' + p.id);

      var add = document.createElement('button');
      add.type = 'button';
      add.className = 'primary';
      add.innerHTML = 'Tambah <span class="en">Add</span>';
      add.setAttribute('data-testid', 'add-' + p.id);
      add.addEventListener('click', function () {
        clearError();
        api('POST', '/api/cart/items', { productId: p.id, quantity: Number(qty.value) })
          .then(renderCart)
          .catch(handleError);
      });

      row.appendChild(qty);
      row.appendChild(add);
      card.appendChild(name);
      card.appendChild(meta);
      card.appendChild(price);
      card.appendChild(row);
      grid.appendChild(card);
    });
  }

  function renderCart(cart) {
    var list = $('cart-items');
    list.innerHTML = '';
    cart.items.forEach(function (item) {
      var li = document.createElement('li');
      li.setAttribute('data-testid', 'cart-item-' + item.productId);

      var label = document.createElement('span');
      label.textContent = item.name + ' x ' + item.quantity;

      var line = document.createElement('span');
      line.className = 'line-total';
      line.setAttribute('data-testid', 'line-total-' + item.productId);
      line.textContent = formatRM(item.lineTotal);

      var remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'link';
      remove.textContent = 'Buang';
      remove.setAttribute('aria-label', 'Buang ' + item.name);
      remove.setAttribute('data-testid', 'remove-' + item.productId);
      remove.addEventListener('click', function () {
        clearError();
        api('DELETE', '/api/cart/items/' + encodeURIComponent(item.productId))
          .then(renderCart)
          .catch(handleError);
      });

      li.appendChild(label);
      li.appendChild(line);
      li.appendChild(remove);
      list.appendChild(li);
    });

    $('cart-empty').hidden = cart.items.length > 0;
    $('cart-subtotal').textContent = formatRM(cart.subtotal);
    $('cart-member-discount').textContent = formatRM(cart.memberDiscount);
    $('cart-promo-discount').textContent = formatRM(cart.promoDiscount);
    $('cart-discount').textContent = formatRM(cart.discount);
    $('cart-shipping').textContent = formatRM(cart.shipping);
    $('cart-total').textContent = formatRM(cart.total);
    $('discount-applied').textContent = cart.discountCode ? 'Kod digunakan: ' + cart.discountCode : '';
  }

  function loadCart() {
    return api('GET', '/api/cart').then(renderCart).catch(handleError);
  }

  function toggleCardExpiry() {
    $('card-expiry-field').hidden = $('select-payment').value !== 'CARD';
  }

  $('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    clearError();
    var email = $('login-email').value;
    api('POST', '/api/auth/login', { email: email, password: $('login-password').value })
      .then(function (result) {
        auth = { token: result.token, isMember: result.isMember, email: email.trim().toLowerCase() };
        storageSet(AUTH_KEY, JSON.stringify(auth));
        $('login-password').value = '';
        renderLogin();
        return loadCart();
      })
      .catch(handleError);
  });

  $('login-logout').addEventListener('click', function () {
    auth = null;
    storageSet(AUTH_KEY, null);
    renderLogin();
    loadCart();
  });

  $('discount-apply').addEventListener('click', function () {
    clearError();
    api('POST', '/api/discounts/apply', { code: $('discount-input').value })
      .then(renderCart)
      .catch(handleError);
  });

  $('select-payment').addEventListener('change', toggleCardExpiry);

  $('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault();
    clearError();
    $('order-confirmation').hidden = true;
    var payload = {
      fullName: $('input-fullName').value,
      email: $('input-email').value,
      phone: $('input-phone').value,
      postcode: $('input-postcode').value,
      paymentMethod: $('select-payment').value
    };
    if (payload.paymentMethod === 'CARD') {
      payload.cardExpiry = $('input-cardExpiry').value;
    }
    api('POST', '/api/checkout', payload)
      .then(function (order) {
        $('order-id').textContent = order.orderId;
        $('order-status').textContent = order.status;
        $('order-total').textContent = formatRM(order.total);
        $('order-confirmation').hidden = false;
        $('order-confirmation').scrollIntoView({ block: 'nearest' });
        return loadCart();
      })
      .catch(handleError);
  });

  renderLogin();
  toggleCardExpiry();
  api('GET', '/api/products').then(renderProducts).catch(handleError);
  loadCart();
})();
