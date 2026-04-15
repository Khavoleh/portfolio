import { DEFAULT_LANGUAGE, LANGUAGES_SHORT } from '@shared/constants';
import { describe, expect, it } from 'vitest';
import { getCurrentLanguage } from './get-current-language';

describe('getCurrentLanguage', () => {
  it('returns the language if it is valid', () => {
    for (const lang of [LANGUAGES_SHORT.EN, LANGUAGES_SHORT.UK]) {
      const url = new URL(`https://www.khavol.com/${lang}/some-page`);
      expect(getCurrentLanguage(url)).toBe(lang);
    }
  });

  it('returns DEFAULT_LANGUAGE if language is missing', () => {
    const url = new URL('https://www.khavol.com/');
    expect(getCurrentLanguage(url)).toBe(DEFAULT_LANGUAGE);
  });

  it('returns DEFAULT_LANGUAGE if language is invalid', () => {
    const url = new URL('https://www.khavol.com/xx/some-page');
    expect(getCurrentLanguage(url)).toBe(DEFAULT_LANGUAGE);
  });

  it('returns DEFAULT_LANGUAGE if path is just a slash', () => {
    const url = new URL('https://www.khavol.com/');
    expect(getCurrentLanguage(url)).toBe(DEFAULT_LANGUAGE);
  });

  it('returns DEFAULT_LANGUAGE if path is empty', () => {
    const url = new URL('https://www.khavol.com');
    expect(getCurrentLanguage(url)).toBe(DEFAULT_LANGUAGE);
  });
});
