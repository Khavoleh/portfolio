import { expect, test } from '@playwright/test';
import { LANGUAGES_SHORT, PAGE_URLS } from '@shared/constants';

const supportedLanguages = [LANGUAGES_SHORT.EN, LANGUAGES_SHORT.UK] as const;
const localizedPagePaths = [
  PAGE_URLS.HOME,
  PAGE_URLS.EXPERIENCE,
  PAGE_URLS.PROJECTS,
  PAGE_URLS.CONTACTS,
  PAGE_URLS.PRIVACY_POLICY,
  PAGE_URLS.TERMS_AND_CONDITIONS,
] as const;

const routesToTest = supportedLanguages.flatMap((language) => localizedPagePaths.map((path) => `/${language}${path}`));

test.describe('No console errors on any Astro page', () => {
  for (const path of routesToTest) {
    test(`logs no console or page errors on ${path}`, async ({ page }) => {
      const errors: string[] = [];

      page.on('console', (message) => {
        if (message.type() === 'error') {
          errors.push(`console.error: ${message.text()}`);
        }
      });
      page.on('pageerror', (error) => {
        errors.push(`pageerror: ${error.message}`);
      });

      await page.goto(path, { waitUntil: 'domcontentloaded' });
      await page.waitForLoadState('networkidle');

      expect(errors, `Console errors found on ${path}:\n${errors.join('\n')}`).toEqual([]);
    });
  }
});
