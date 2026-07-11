import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { LANGUAGES_SHORT, PAGE_URLS } from '@shared/constants';

const THEMES = ['light', 'dark'] as const;

const supportedLanguages = [LANGUAGES_SHORT.EN, LANGUAGES_SHORT.UK] as const;
const localizedPagePaths = [
  PAGE_URLS.HOME,
  PAGE_URLS.EXPERIENCE,
  PAGE_URLS.PROJECTS,
  PAGE_URLS.CONTACTS,
  PAGE_URLS.PRIVACY_POLICY,
  PAGE_URLS.TERMS_AND_CONDITIONS,
] as const;

const routesToTest = [
  ...supportedLanguages.flatMap((language) =>
    localizedPagePaths.map((path) => ({
      label: `/${language}${path}`,
      path: `/${language}${path}`,
    }))
  ),
] as const;

test.describe('Accessibility: all Astro pages', () => {
  for (const theme of THEMES) {
    for (const route of routesToTest) {
      const descriptor = typeof route === 'string' ? route : route.label;
      const path = typeof route === 'string' ? route : route.path;

      test(`has no detectable axe violations for ${descriptor} (${theme} theme)`, async ({ page }) => {
        await page.addInitScript((themeToApply) => localStorage.setItem('theme', themeToApply), theme);

        const response = await page.goto(path, { waitUntil: 'domcontentloaded' });

        expect(response, `Expected route ${path} to return a response`).not.toBeNull();
        expect(response?.status(), `Expected route ${path} to be reachable`).toBeLessThan(500);

        await page.waitForLoadState('networkidle');

        await expect.poll(async () => page.locator('html').getAttribute('data-theme')).toBe(`portfolio-${theme}`);

        const accessibilityScanResults = await new AxeBuilder({
          page,
        }).analyze();

        expect(
          accessibilityScanResults.violations,
          `Accessibility violations found on ${path} (${theme} theme): ${JSON.stringify(accessibilityScanResults.violations, null, 2)}`
        ).toEqual([]);
      });
    }
  }
});
