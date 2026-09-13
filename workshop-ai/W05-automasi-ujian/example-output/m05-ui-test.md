# Ujian UI Playwright ShopFast

## Senario

| TC_ID | Keperluan | Langkah Ringkas | Jangkaan |
|---|---|---|---|
| TC-CHK-004 | REQ-CHK-01 | Tambah P002 kuantiti 10 ke troli | Troli memaparkan P002 x 10, subtotal RM 350.00, jumlah RM 358.00 |

## data-testid Digunakan

| data-testid | Fail |
|---|---|
| `product-P002` | `app/public/app.js` (dicipta dinamik, baris 123) |
| `qty-P002` | `app/public/app.js` (dicipta dinamik, baris 147) |
| `add-P002` | `app/public/app.js` (dicipta dinamik, baris 153) |
| `cart-item-P002` | `app/public/app.js` (dicipta dinamik, baris 176) |
| `line-total-P002` | `app/public/app.js` (dicipta dinamik, baris 183) |
| `cart-subtotal` | `app/public/index.html` (baris 56) |
| `cart-shipping` | `app/public/index.html` (baris 60) |
| `cart-total` | `app/public/index.html` (baris 61) |

## Kod Ujian

```js
// @ts-check
const { test, expect } = require('@playwright/test');

test('TC-CHK-004 tambah P002 kuantiti 10 ke troli dan semak troli menerima kuantiti 10', async ({ page }) => {
  await Promise.all([
    page.waitForResponse((res) => res.url().endsWith('/api/cart') && res.request().method() === 'GET'),
    page.goto('/')
  ]);
  await expect(page.getByTestId('add-P002')).toBeVisible();

  await page.getByTestId('qty-P002').fill('10');
  await page.getByTestId('add-P002').click();

  await expect(page.getByTestId('cart-item-P002')).toContainText('x 10');
  await expect(page.getByTestId('line-total-P002')).toHaveText('RM 350.00');
  await expect(page.getByTestId('cart-subtotal')).toHaveText('RM 350.00');
  await expect(page.getByTestId('cart-shipping')).toHaveText('RM 8.00');
  await expect(page.getByTestId('cart-total')).toHaveText('RM 358.00');
});
```

## Cara Menjalankan (PowerShell)

Simpan blok kod di atas sebagai `tests\ui\m05-senario.spec.js` dalam folder `shopfast`, kemudian jalankan:

```powershell
cd shopfast
npx playwright test tests/ui/m05-senario.spec.js --headed
npx playwright show-report
```

## Rujukan

- [KRISAv2 Bab 5, 5.7 Pengujian Sistem](../../../references/krisa-v2-beta-2026/BAB5-FASA-PEMBANGUNAN.pdf#page=33)
- [KRISAv2 Bab 3, 3.5 Pemodelan Use Case dan Senario Use Case](../../../references/krisa-v2-beta-2026/BAB3-FASA-ANALISIS.pdf#page=5)

## Semak manusia / Human check

1. Setiap data-testid dalam kod wujud dalam index.html atau app.js; jalankan dengan --headed dan perhatikan setiap langkah berlaku.
2. Assertion menyemak hasil yang bermakna kepada pengguna (jumlah, mesej ralat, ID pesanan) mengikut SRS, bukan sekadar elemen kelihatan.
3. Ujian lulus atau gagal secara konsisten apabila dijalankan 3 kali berturut-turut dan tidak bergantung pada data ujian lain.
