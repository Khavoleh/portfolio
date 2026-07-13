import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';
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

test('theme selector follows the system preference when "system" is chosen', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto(`/${LANGUAGES_SHORT.EN}${PAGE_URLS.HOME}`, { waitUntil: 'load' });

  await page.getByRole('button', { name: THEME_TOGGLE_LABEL }).click();

  const systemOption = page.locator('ul.dropdown-content button[data-set-theme="system"]').first();
  await expect(systemOption).toBeVisible();
  await systemOption.click();

  await expect.poll(async () => page.evaluate(() => localStorage.getItem('theme'))).toBe('system');
  await expect.poll(async () => page.locator('html').getAttribute('data-theme')).toBe('portfolio-dark');
  await expect(page.locator('#theme-icon-system')).toBeVisible();

  await page.emulateMedia({ colorScheme: 'light' });
  await page.reload({ waitUntil: 'load' });
  await expect.poll(async () => page.locator('html').getAttribute('data-theme')).toBe('portfolio-light');
});
