import { expect, test } from '@playwright/test';
import { LANGUAGES_SHORT, PAGE_URLS } from '@shared/constants';

const UNKNOWN_PATH = `/${LANGUAGES_SHORT.EN}/this-route-does-not-exist`;

test('an unknown route serves the 404 page', async ({ page }) => {
  const response = await page.goto(UNKNOWN_PATH, { waitUntil: 'load' });

  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: '404' })).toBeVisible();
});

test('"Back to Home" returns to the home page', async ({ page }) => {
  await page.goto(UNKNOWN_PATH, { waitUntil: 'load' });

  await page.getByRole('link', { name: 'Back to Home' }).click();

  await expect(page).toHaveURL(`/${LANGUAGES_SHORT.EN}${PAGE_URLS.HOME}`);
});

test('"Go Back" returns to the previous page in history', async ({ page }) => {
  await page.goto(`/${LANGUAGES_SHORT.EN}${PAGE_URLS.HOME}`, { waitUntil: 'load' });
  await page.goto(UNKNOWN_PATH, { waitUntil: 'load' });

  await page.getByRole('button', { name: 'Go Back' }).click();

  await expect(page).toHaveURL(`/${LANGUAGES_SHORT.EN}${PAGE_URLS.HOME}`);
});
