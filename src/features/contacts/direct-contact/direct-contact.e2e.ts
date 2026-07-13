import { expect, test } from '@playwright/test';
import { LANGUAGES_SHORT, PAGE_URLS, SOCIALS } from '@shared/constants';

test.beforeEach(async ({ page }) => {
  await page.goto(`/${LANGUAGES_SHORT.EN}${PAGE_URLS.CONTACTS}`, { waitUntil: 'load' });
});

test('renders a valid current Kyiv timezone offset', async ({ page }) => {
  await expect(page.locator('#ukraine-timezone')).toHaveText(/^UTC\+[23] \((EEST|EET)\)$/);
});

test('email link opens a mailto to the configured address', async ({ page }) => {
  const emailLink = page.getByRole('link', { name: SOCIALS.EMAIL });

  await expect(emailLink).toHaveAttribute('href', `mailto:${SOCIALS.EMAIL}`);
});

test('Telegram link points to the profile and opens safely in a new tab', async ({ page }) => {
  const telegramLink = page.getByRole('link', { name: '@khavol' });

  await expect(telegramLink).toHaveAttribute('href', SOCIALS.TELEGRAM);
  await expect(telegramLink).toHaveAttribute('target', '_blank');
  await expect(telegramLink).toHaveAttribute('rel', 'noopener noreferrer');
});
