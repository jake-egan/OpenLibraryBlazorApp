import { test, expect } from '@playwright/test';
test.use({ ignoreHTTPSErrors: true });
test('test', async ({ page }) => {
  await page.goto('https://localhost:7126/book/OL8483260W');
  await expect(page.getByRole('heading')).toContainText('Diary of a Wimpy Kid');
  await expect(page.getByRole('main')).toContainText('Subjects:');
  await expect(page.getByRole('main')).toContainText('Product Description:');
  await expect(page.getByRole('img', { name: 'Book Cover' })).toBeVisible();
});