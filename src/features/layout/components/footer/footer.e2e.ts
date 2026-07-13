import { expect, test } from '@playwright/test';
import { LANGUAGES_SHORT, PAGE_URLS, SOCIALS } from '@shared/constants';

const SOCIAL_HREFS = [SOCIALS.LINKEDIN, SOCIALS.TELEGRAM, SOCIALS.GITHUB] as const;

test.beforeEach(async ({ page }) => {
  await page.goto(`/${LANGUAGES_SHORT.EN}${PAGE_URLS.HOME}`, { waitUntil: 'load' });
});

for (const href of SOCIAL_HREFS) {
  test(`footer social link for ${href} opens safely in a new tab`, async ({ page }) => {
    const link = page.locator(`footer a[href="${href}"]`);

    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
}

const LEGAL_LINKS = [
  { name: 'Privacy Policy', path: PAGE_URLS.PRIVACY_POLICY },
  { name: 'Terms & Conditions', path: PAGE_URLS.TERMS_AND_CONDITIONS },
] as const;

for (const legalLink of LEGAL_LINKS) {
  test(`footer "${legalLink.name}" link navigates to its page`, async ({ page }) => {
    await page.locator('footer').getByRole('link', { name: legalLink.name }).click();

    await expect(page).toHaveURL(`/${LANGUAGES_SHORT.EN}${legalLink.path}`);
  });
}
