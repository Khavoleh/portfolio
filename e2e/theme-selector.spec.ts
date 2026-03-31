import { expect, test } from '@playwright/test';
import type { Page } from '@playwright/test';
import { LANGUAGES_SHORT, PAGE_URLS } from '@shared/constants';

const THEME_TOGGLE_LABEL = 'Toggle theme';

const selectTheme = async (page: Page, themeId: 'dark' | 'light') => {
  await page.getByRole('button', { name: THEME_TOGGLE_LABEL }).click();

  const themeOption = page.locator(`ul.dropdown-content button[data-set-theme="${themeId}"]`).first();
  await expect(themeOption).toBeVisible();
  await themeOption.click();

  await expect.poll(async () => page.locator('html').getAttribute('data-theme')).toBe(`portfolio-${themeId}`);

  await expect.poll(async () => page.evaluate(() => localStorage.getItem('theme'))).toBe(themeId);

  await expect(page.locator(`#theme-icon-${themeId}`)).toBeVisible();
};

test('theme selector changes theme to dark and light', async ({ page }) => {
  await page.goto(`/${LANGUAGES_SHORT.EN}${PAGE_URLS.HOME}`, { waitUntil: 'load' });

  await selectTheme(page, 'dark');
  await selectTheme(page, 'light');
});
