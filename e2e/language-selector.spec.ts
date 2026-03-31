import { expect, test } from '@playwright/test';
import { LANGUAGES_SHORT, PAGE_URLS } from '@shared/constants';

const ENGLISH_LANGUAGE_BUTTON = 'button[aria-label="Change language"]';

test('language selector switches language and keeps current route', async ({ page }) => {
  await page.goto(`/${LANGUAGES_SHORT.EN}${PAGE_URLS.PROJECTS}`, { waitUntil: 'domcontentloaded' });

  await page.locator(ENGLISH_LANGUAGE_BUTTON).click();
  await page.locator('[data-language="uk"]').click();

  await expect(page).toHaveURL(`/${LANGUAGES_SHORT.UK}${PAGE_URLS.PROJECTS}`);

  await expect
    .poll(async () => {
      const cookies = await page.context().cookies([page.url()]);
      return cookies.find((cookie) => cookie.name === 'preferred-language')?.value;
    })
    .toBe(LANGUAGES_SHORT.UK);
});
