import { expect, test } from '@playwright/test';
import { LANGUAGES_SHORT, PAGE_URLS } from '@shared/constants';

// The burger and drawer only exist below the `md` breakpoint (768px), so pin a
// mobile viewport regardless of which Playwright project runs the test.
test.use({ viewport: { width: 390, height: 844 } });

const BURGER = '#mobile-drawer-burger';
const DRAWER_TOGGLE = '#mobile-drawer';
const CLOSE_BUTTON = '#drawer-close-btn';
const OVERLAY = 'label.drawer-overlay';
const DRAWER_LINKS = '#drawer-nav-list a';

test.beforeEach(async ({ page }) => {
  await page.goto(`/${LANGUAGES_SHORT.EN}${PAGE_URLS.HOME}`, { waitUntil: 'load' });
});

test('burger opens the drawer and the close button dismisses it', async ({ page }) => {
  await page.locator(BURGER).click();
  await expect(page.locator(DRAWER_TOGGLE)).toBeChecked();

  await page.locator(CLOSE_BUTTON).click();
  await expect(page.locator(DRAWER_TOGGLE)).not.toBeChecked();
});

test('clicking the overlay closes the drawer', async ({ page }) => {
  await page.locator(BURGER).click();
  await expect(page.locator(DRAWER_TOGGLE)).toBeChecked();

  // The drawer menu (w-80 = 320px) sits on top of the overlay's left edge, so
  // click the exposed region to the right of it.
  await page.locator(OVERLAY).click({ position: { x: 360, y: 400 } });
  await expect(page.locator(DRAWER_TOGGLE)).not.toBeChecked();
});

test('activating the burger with the keyboard opens the drawer and focuses the close button', async ({ page }) => {
  await page.locator(BURGER).focus();
  await page.keyboard.press('Enter');

  await expect(page.locator(DRAWER_TOGGLE)).toBeChecked();
  await expect(page.locator(CLOSE_BUTTON)).toBeFocused();
});

test('focus stays trapped between the close button and the last nav link', async ({ page }) => {
  await page.locator(BURGER).click();
  await expect(page.locator(DRAWER_TOGGLE)).toBeChecked();

  const lastLink = page.locator(DRAWER_LINKS).last();

  await lastLink.focus();
  await page.keyboard.press('Tab');
  await expect(page.locator(CLOSE_BUTTON)).toBeFocused();

  await page.keyboard.press('Shift+Tab');
  await expect(lastLink).toBeFocused();
});

test('a drawer nav link navigates to its page', async ({ page }) => {
  await page.locator(BURGER).click();

  await page.locator(DRAWER_LINKS, { hasText: 'Experience' }).click();

  await expect(page).toHaveURL(`/${LANGUAGES_SHORT.EN}${PAGE_URLS.EXPERIENCE}`);
});
