import { expect, test } from '@playwright/test';
import { LANGUAGES_SHORT, PAGE_URLS, SOCIALS } from '@shared/constants';

// The social cards are the only anchors on the page carrying the `card` class,
// which keeps these assertions scoped to this section (not the footer links).
const SOCIAL_HREFS = [SOCIALS.LINKEDIN, SOCIALS.TELEGRAM, SOCIALS.GITHUB] as const;

test.beforeEach(async ({ page }) => {
  await page.goto(`/${LANGUAGES_SHORT.EN}${PAGE_URLS.CONTACTS}`, { waitUntil: 'load' });
});

for (const href of SOCIAL_HREFS) {
  test(`social card for ${href} opens safely in a new tab`, async ({ page }) => {
    const card = page.locator(`a.card[href="${href}"]`);

    await expect(card).toHaveAttribute('target', '_blank');
    await expect(card).toHaveAttribute('rel', 'noopener noreferrer');
  });
}
