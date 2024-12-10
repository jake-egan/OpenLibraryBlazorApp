import { test, expect } from '@playwright/test';
test.use({ ignoreHTTPSErrors: true });
test('test', async ({ page }) => {
  await page.goto('https://localhost:7126/');
  await page.getByRole('link', { name: 'Find a Book' }).click();
  await page.getByLabel('Search Type').selectOption('author');
  await page.getByPlaceholder('Enter book title or author').click();
  await page.getByPlaceholder('Enter book title or author').fill('jk');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('.relative > .relative').first().click();
});