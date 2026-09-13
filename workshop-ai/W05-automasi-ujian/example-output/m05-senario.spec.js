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

