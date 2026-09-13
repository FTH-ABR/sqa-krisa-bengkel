# Ujian API Automatik ShopFast

Skop: keperluan REQ-CHK-01 dan REQ-CHK-03 daripada SRS-ShopFast.md. Kes ujian TC-CHK-001 hingga TC-CHK-010 diambil daripada `outputs/m04-testcases.csv`.

## Pemetaan Ujian

| TC_ID | Keperluan | Kaedah dan Laluan | Badan Permintaan | Status Dijangka | Semakan Respons |
|---|---|---|---|---|---|
| TC-CHK-001 | REQ-CHK-01 | POST /api/cart/items | {"productId":"P001","quantity":1} | 201 | items[0].quantity = 1 |
| TC-CHK-002 | REQ-CHK-01 | POST /api/cart/items | {"productId":"P001","quantity":5} | 201 | items[0].quantity = 5 |
| TC-CHK-003 | REQ-CHK-01 | POST /api/cart/items | {"productId":"P001","quantity":0} | 400 | error = VALIDATION_ERROR |
| TC-CHK-004 | REQ-CHK-01 | POST /api/cart/items | {"productId":"P001","quantity":11} | 400 | error = VALIDATION_ERROR |
| TC-CHK-005 | REQ-CHK-01 | POST /api/cart/items | {"productId":"P001","quantity":1.5} | 400 | error = VALIDATION_ERROR |
| TC-CHK-006 | REQ-CHK-01 | POST /api/cart/items | {"productId":"P006","quantity":1} | 400 | error = OUT_OF_STOCK |
| TC-CHK-007 | REQ-CHK-03 | POST /api/cart/items; POST /api/discounts/apply; GET /api/cart | {"productId":"P003","quantity":2}; {"code":"RAYA15"} | 201; 200; 200 | subtotal 200.00; memberDiscount 20.00; promoDiscount 30.00; discount 50.00; shipping 0; total 150.00 |
| TC-CHK-008 | REQ-CHK-03 | POST /api/cart/items; GET /api/cart | {"productId":"P001","quantity":2} | 201; 200 | subtotal 179.80; discountCode null; discount 0; shipping 8.00; total 187.80 |
| TC-CHK-009 | REQ-CHK-03 | POST /api/cart/items; GET /api/cart | {"productId":"P003","quantity":1} | 201; 200 | subtotal 100.00; discount 10.00; shipping 8.00; total 98.00 |
| TC-CHK-010 | REQ-CHK-03 | POST /api/cart/items; POST /api/discounts/apply; GET /api/cart | {"productId":"P003","quantity":2}; {"code":"MEGA20"} | 201; 200; 200 | discount tidak melebihi 50.00 (25% x 200.00); shipping 0; total tidak kurang 150.00 |

Nota data ujian: m04-testcases.csv menetapkan P001 x 2 untuk TC-CHK-007 dan P002 x 2 untuk TC-CHK-009. P001 berharga RM89.90 (FR-03: P001 x 2 = 179.80), jadi P001 x 2 tidak mencapai subtotal RM200.00 yang dikehendaki, dan P002 berharga RM35.00 (subtotal RM70.00) bukan RM100.00. Maka data input diselaraskan kepada P003 supaya jangkaan daripada SRS (REQ-CHK-03) dan m04 kekal sah. [ANDAIAN: harga P003 ialah RM100.00 mengikut data aplikasi shopfast/app/data.js, kerana SRS dan openapi.yaml tidak menyatakan harga produk selain contoh P001 89.90 dan FR-03 (P001 x 2 = 179.80)]

## Kod Ujian

```js
import test from 'node:test';
import assert from 'node:assert/strict';

const BASE = process.env.BASE_URL || 'http://localhost:3000';

let sessionCounter = 0;

function newSessionId() {
  sessionCounter += 1;
  return `m05-${Date.now()}-${sessionCounter}`;
}

function money(value) {
  return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
}

async function callApi(path, { method = 'GET', body, sessionId, token } = {}) {
  const headers = {};
  if (sessionId) headers['X-Session-Id'] = sessionId;
  if (token) headers['Authorization'] = `Bearer ${token}`;
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  const response = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined
  });
  const text = await response.text();
  let json = null;
  if (text) {
    try {
      json = JSON.parse(text);
    } catch {
      json = null;
    }
  }
  return { status: response.status, body: json };
}

async function loginMember() {
  const res = await callApi('/api/auth/login', {
    method: 'POST',
    body: { email: 'aminah@example.test', password: 'Latihan123!' }
  });
  assert.equal(res.status, 200, `Log masuk ahli sepatutnya 200, dapat ${res.status}`);
  assert.ok(res.body && res.body.token, 'Respons log masuk tiada token');
  return res.body.token;
}

async function addItem(sessionId, productId, quantity, token) {
  return callApi('/api/cart/items', {
    method: 'POST',
    body: { productId, quantity },
    sessionId,
    token
  });
}

async function applyCode(sessionId, code, token) {
  return callApi('/api/discounts/apply', {
    method: 'POST',
    body: { code },
    sessionId,
    token
  });
}

test('TC-CHK-001 Kuantiti minimum 1 diterima (REQ-CHK-01)', async () => {
  const sessionId = newSessionId();
  const res = await addItem(sessionId, 'P001', 1);
  assert.equal(res.status, 201, `Status sepatutnya 201, dapat ${res.status}`);
  assert.equal(res.body.items[0].quantity, 1, 'Items[0].quantity sepatutnya 1');
  assert.equal(res.body.items[0].productId, 'P001', 'Items[0].productId sepatutnya P001');
});

test('TC-CHK-002 Kuantiti 5 diterima (REQ-CHK-01)', async () => {
  const sessionId = newSessionId();
  const res = await addItem(sessionId, 'P001', 5);
  assert.equal(res.status, 201, `Status sepatutnya 201, dapat ${res.status}`);
  assert.equal(res.body.items[0].quantity, 5, 'Items[0].quantity sepatutnya 5');
});

test('TC-CHK-003 Kuantiti 0 ditolak (REQ-CHK-01)', async () => {
  const sessionId = newSessionId();
  const res = await addItem(sessionId, 'P001', 0);
  assert.equal(res.status, 400, `Status sepatutnya 400, dapat ${res.status}`);
  assert.equal(res.body.error, 'VALIDATION_ERROR', `error sepatutnya VALIDATION_ERROR, dapat ${res.body.error}`);
});

test('TC-CHK-004 Kuantiti 11 ditolak (REQ-CHK-01)', async () => {
  const sessionId = newSessionId();
  const res = await addItem(sessionId, 'P001', 11);
  assert.equal(res.status, 400, `Status sepatutnya 400, dapat ${res.status}`);
  assert.equal(res.body.error, 'VALIDATION_ERROR', `error sepatutnya VALIDATION_ERROR, dapat ${res.body.error}`);
});

test('TC-CHK-005 Kuantiti bukan nombor bulat ditolak (REQ-CHK-01)', async () => {
  const sessionId = newSessionId();
  const res = await addItem(sessionId, 'P001', 1.5);
  assert.equal(res.status, 400, `Status sepatutnya 400, dapat ${res.status}`);
  assert.equal(res.body.error, 'VALIDATION_ERROR', `error sepatutnya VALIDATION_ERROR, dapat ${res.body.error}`);
});

test('TC-CHK-006 Produk stok 0 ditolak (REQ-CHK-01)', async () => {
  const sessionId = newSessionId();
  const res = await addItem(sessionId, 'P006', 1);
  assert.equal(res.status, 400, `Status sepatutnya 400, dapat ${res.status}`);
  assert.equal(res.body.error, 'OUT_OF_STOCK', `error sepatutnya OUT_OF_STOCK, dapat ${res.body.error}`);
});

test('TC-CHK-007 Ahli dengan RAYA15 subtotal RM200 penghantaran percuma (REQ-CHK-03)', async () => {
  const token = await loginMember();
  const sessionId = newSessionId();
  let res = await addItem(sessionId, 'P003', 2, token);
  assert.equal(res.status, 201, `Tambah item sepatutnya 201, dapat ${res.status}`);
  res = await applyCode(sessionId, 'RAYA15', token);
  assert.equal(res.status, 200, `Guna RAYA15 sepatutnya 200, dapat ${res.status}`);
  res = await callApi('/api/cart', { sessionId, token });
  assert.equal(res.status, 200, `GET /api/cart sepatutnya 200, dapat ${res.status}`);
  assert.equal(res.body.discountCode, 'RAYA15', 'discountCode sepatutnya RAYA15');
  assert.equal(money(res.body.subtotal), 200.0, `subtotal sepatutnya 200.00, dapat ${res.body.subtotal}`);
  assert.equal(money(res.body.memberDiscount), 20.0, `memberDiscount sepatutnya 20.00, dapat ${res.body.memberDiscount}`);
  assert.equal(money(res.body.promoDiscount), 30.0, `promoDiscount sepatutnya 30.00, dapat ${res.body.promoDiscount}`);
  assert.equal(money(res.body.discount), 50.0, `discount sepatutnya 50.00, dapat ${res.body.discount}`);
  assert.equal(money(res.body.shipping), 0, `shipping sepatutnya 0, dapat ${res.body.shipping}`);
  assert.equal(money(res.body.total), 150.0, `total sepatutnya 150.00, dapat ${res.body.total}`);
});

test('TC-CHK-008 Bukan ahli tanpa kod promosi tidak mendapat diskaun (REQ-CHK-03)', async () => {
  const sessionId = newSessionId();
  let res = await addItem(sessionId, 'P001', 2);
  assert.equal(res.status, 201, `Tambah item sepatutnya 201, dapat ${res.status}`);
  res = await callApi('/api/cart', { sessionId });
  assert.equal(res.status, 200, `GET /api/cart sepatutnya 200, dapat ${res.status}`);
  assert.equal(money(res.body.subtotal), 179.8, `subtotal sepatutnya 179.80, dapat ${res.body.subtotal}`);
  assert.equal(res.body.discountCode, null, 'discountCode sepatutnya null bagi troli tanpa kod');
  assert.equal(money(res.body.memberDiscount), 0, `memberDiscount sepatutnya 0, dapat ${res.body.memberDiscount}`);
  assert.equal(money(res.body.discount), 0, `discount sepatutnya 0, dapat ${res.body.discount}`);
  assert.equal(money(res.body.shipping), 8.0, `shipping sepatutnya 8.00, dapat ${res.body.shipping}`);
  assert.equal(money(res.body.total), 187.8, `total sepatutnya 187.80, dapat ${res.body.total}`);
});

test('TC-CHK-009 Ahli tanpa kod promosi mendapat diskaun ahli sahaja (REQ-CHK-03)', async () => {
  const token = await loginMember();
  const sessionId = newSessionId();
  let res = await addItem(sessionId, 'P003', 1, token);
  assert.equal(res.status, 201, `Tambah item sepatutnya 201, dapat ${res.status}`);
  res = await callApi('/api/cart', { sessionId, token });
  assert.equal(res.status, 200, `GET /api/cart sepatutnya 200, dapat ${res.status}`);
  assert.equal(money(res.body.subtotal), 100.0, `subtotal sepatutnya 100.00, dapat ${res.body.subtotal}`);
  assert.equal(money(res.body.discount), 10.0, `discount sepatutnya 10.00, dapat ${res.body.discount}`);
  assert.equal(money(res.body.shipping), 8.0, `shipping sepatutnya 8.00, dapat ${res.body.shipping}`);
  assert.equal(money(res.body.total), 98.0, `total sepatutnya 98.00, dapat ${res.body.total}`);
});

test('TC-CHK-010 Ahli dengan MEGA20 diskaun tidak melebihi 25 peratus (REQ-CHK-03)', async () => {
  const token = await loginMember();
  const sessionId = newSessionId();
  let res = await addItem(sessionId, 'P003', 2, token);
  assert.equal(res.status, 201, `Tambah item sepatutnya 201, dapat ${res.status}`);
  res = await applyCode(sessionId, 'MEGA20', token);
  assert.equal(res.status, 200, `Guna MEGA20 sepatutnya 200, dapat ${res.status}`);
  res = await callApi('/api/cart', { sessionId, token });
  assert.equal(res.status, 200, `GET /api/cart sepatutnya 200, dapat ${res.status}`);
  assert.equal(money(res.body.subtotal), 200.0, `subtotal sepatutnya 200.00, dapat ${res.body.subtotal}`);
  const discountCap = money(res.body.subtotal * 0.25);
  assert.ok(money(res.body.discount) <= discountCap, `discount sepatutnya tidak melebihi 50.00, dapat ${res.body.discount}`);
  assert.equal(money(res.body.shipping), 0, `shipping sepatutnya 0, dapat ${res.body.shipping}`);
  assert.ok(money(res.body.total) >= 150.0, `total sepatutnya tidak kurang 150.00, dapat ${res.body.total}`);
});
```

Fail yang sama disediakan sebagai `outputs\m05-api-tests.test.mjs` supaya boleh dijalankan terus.

## Cara Menjalankan (PowerShell)

Terminal 1 (folder shopfast): `cd shopfast` kemudian `npm start`.

Terminal 2 (folder lab): simpan blok kod di atas sebagai `outputs\m05-api-tests.test.mjs`, kemudian `node --test outputs\m05-api-tests.test.mjs`.

Setiap ujian menggunakan `X-Session-Id` unik sendiri dan menyediakan troli sendiri melalui API, jadi ujian boleh dijalankan bersendirian dan dalam sebarang urutan.

Jika ujian gagal, sahkan secara manual dan laporkan dengan `/bug-report`.

## Rujukan
- [KRISAv2 Bab 5, 5.7 Pengujian Sistem](../../../references/krisa-v2-beta-2026/BAB5-FASA-PEMBANGUNAN.pdf#page=33)
- [KRISAv2 Bab 7, 7.9 Repositori dan Serahan Kod Sumber (CI/CD)](../../../references/krisa-v2-beta-2026/BAB7-FASA-PELAKSANAAN.pdf#page=17)

## Semak manusia / Human check
1. Setiap assertion menyemak nilai daripada SRS atau openapi.yaml, dan tiada nilai dijangka diubah supaya ujian lulus.
2. Jalankan ujian sendiri dan sahkan setiap kegagalan ialah kecacatan sebenar, bukan kesilapan skrip (sesi, data atau urutan).
3. Setiap ujian boleh dijalankan bersendirian dan dalam sebarang urutan dengan keputusan yang sama.