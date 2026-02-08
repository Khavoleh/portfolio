import { DEFAULT_LANGUAGE } from '@shared/constants';
import { describe, expect, it } from 'vitest';
import { LANGUAGES_CONFIG } from '../../constants';
import { getCurrentLanguage } from './getCurrentLanguage';

describe('getCurrentLanguage', () => {
  it('returns the language if it is valid', () => {
    for (const lang of LANGUAGES_CONFIG) {
      const url = new URL(`https://www.khavol.com/${lang.code}/some-page`);
      expect(getCurrentLanguage(url)).toBe(lang.code);
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
