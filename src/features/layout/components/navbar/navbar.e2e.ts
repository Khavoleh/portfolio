import { expect, test } from '@playwright/test';
import { LANGUAGES_SHORT, PAGE_URLS } from '@shared/constants';

// The horizontal nav only renders at/above the `md` breakpoint (768px), so pin a
// desktop viewport regardless of which Playwright project runs the test.
test.use({ viewport: { width: 1280, height: 900 } });

const DESKTOP_NAV = 'nav[aria-label="Menu"]';

const NAV_ITEMS = [
  { name: 'Home', path: PAGE_URLS.HOME },
  { name: 'Experience', path: PAGE_URLS.EXPERIENCE },
  { name: 'Projects', path: PAGE_URLS.PROJECTS },
  { name: 'Contacts', path: PAGE_URLS.CONTACTS },
] as const;

test('each nav link navigates to its page and is marked as the current page', async ({ page }) => {
  await page.goto(`/${LANGUAGES_SHORT.EN}${PAGE_URLS.HOME}`, { waitUntil: 'load' });

  const nav = page.locator(DESKTOP_NAV);

  for (const item of NAV_ITEMS) {
    await nav.getByRole('link', { name: `Navigate to ${item.name} page` }).click();

    await expect(page).toHaveURL(`/${LANGUAGES_SHORT.EN}${item.path}`);

    const activeLink = nav.getByRole('link', { name: `Navigate to ${item.name} page` });
    await expect(activeLink).toHaveAttribute('aria-current', 'page');
    await expect(activeLink).toHaveClass(/active/);
  }
});
