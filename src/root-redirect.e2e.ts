import { expect, test } from '@playwright/test';
import { LANGUAGES_SHORT } from '@shared/constants';

// The `/` route (src/pages/index.ts) is the only SSR route: it redirects to a
// localized home page based on the `preferred-language` cookie / Accept-Language.
const PREFERRED_LANGUAGE_COOKIE = 'preferred-language';

const expectRedirectTo = (location: string | undefined, lang: string) => {
  expect(location, `expected a redirect Location header`).toBeTruthy();
  expect(location?.endsWith(`/${lang}/`), `expected ${location} to redirect to /${lang}/`).toBe(true);
};

test('redirects to English when no cookie and an English Accept-Language', async ({ request }) => {
  const response = await request.get('/', {
    headers: { 'accept-language': 'en-US,en;q=0.9' },
    maxRedirects: 0,
  });

  expect(response.status(), 'expected a redirect status').toBeGreaterThanOrEqual(300);
  expect(response.status()).toBeLessThan(400);
  expectRedirectTo(response.headers().location, LANGUAGES_SHORT.EN);
});

test('redirects to Ukrainian when the Accept-Language prefers Ukrainian', async ({ request }) => {
  const response = await request.get('/', {
    headers: { 'accept-language': 'uk-UA,uk;q=0.9,en;q=0.8' },
    maxRedirects: 0,
  });

  expectRedirectTo(response.headers().location, LANGUAGES_SHORT.UK);
});

test('preferred-language cookie wins over the Accept-Language header', async ({ request }) => {
  const response = await request.get('/', {
    headers: {
      'accept-language': 'en-US,en;q=0.9',
      cookie: `${PREFERRED_LANGUAGE_COOKIE}=${LANGUAGES_SHORT.UK}`,
    },
    maxRedirects: 0,
  });

  expectRedirectTo(response.headers().location, LANGUAGES_SHORT.UK);
});

test('falls back to the Accept-Language header when the cookie is not a supported language', async ({ request }) => {
  const response = await request.get('/', {
    headers: {
      'accept-language': 'uk-UA,uk;q=0.9',
      cookie: `${PREFERRED_LANGUAGE_COOKIE}=fr`,
    },
    maxRedirects: 0,
  });

  expectRedirectTo(response.headers().location, LANGUAGES_SHORT.UK);
});
