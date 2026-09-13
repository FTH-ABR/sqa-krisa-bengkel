// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('ShopFast checkout', () => {
  test.beforeEach(async ({ page }) => {
    await Promise.all([
      page.waitForResponse((res) => res.url().endsWith('/api/cart') && res.request().method() === 'GET'),
      page.goto('/')
    ]);
    await expect(page.getByTestId('add-P002')).toBeVisible();
  });

  test('customer can place an order for 2 x Songkok Baldu', async ({ page }) => {
    await page.getByTestId('qty-P002').fill('2');
    await page.getByTestId('add-P002').click();
    await expect(page.getByTestId('cart-subtotal')).toHaveText('RM 70.00');

    await page.getByTestId('input-fullName').fill('Aminah binti Ali');
    await page.getByTestId('input-email').fill('aminah@example.test');
    await page.getByTestId('input-phone').fill('0123456789');
    await page.getByTestId('input-postcode').fill('50480');
    await page.getByTestId('select-payment').selectOption('FPX');
    await page.getByTestId('checkout-submit').click();

    await expect(page.getByTestId('order-confirmation')).toBeVisible();
    await expect(page.getByTestId('order-id')).toHaveText(/SF-\d+/);
    await expect(page.getByTestId('order-status')).toHaveText('NEW');
  });

  test('cart total for 2 x Songkok Baldu includes RM 8.00 shipping', async ({ page }) => {
    await page.getByTestId('qty-P002').fill('2');
    await page.getByTestId('add-P002').click();

    await expect(page.getByTestId('cart-total')).toHaveText('RM 78.00');
  });
});
