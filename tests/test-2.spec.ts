import { test, expect } from '@playwright/test';
test.use({ ignoreHTTPSErrors: true });
test('test', async ({ page }) => {
  await page.goto('https://localhost:7126/');
  await expect(page.getByRole('heading')).toContainText('Trending Today');
  await expect(page.locator('.swiper')).toBeVisible();
});