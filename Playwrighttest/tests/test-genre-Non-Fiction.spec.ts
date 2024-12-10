import { test, expect } from '@playwright/test';
test.use({ ignoreHTTPSErrors: true });
test('test', async ({ page }) => {
  await page.goto('https://localhost:7126/');
  await page.getByText('Genres').click();
  await page.getByRole('link', { name: 'Non-Fiction' }).click();
});