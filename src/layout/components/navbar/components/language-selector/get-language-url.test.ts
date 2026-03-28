import { describe, expect, it } from 'vitest';
import { getLanguageUrl } from './get-language-url';
import { LANGUAGES_CONFIG } from './languages-config';

describe('getLanguageUrl', () => {
  const makeUrl = (pathname: string) => new URL(`https://www.khavol.com${pathname}`);
  const defaultLang = LANGUAGES_CONFIG[0].code;
  const otherLang = LANGUAGES_CONFIG[1]?.code || 'fr';

  it('replaces existing language prefix', () => {
    const url = makeUrl(`/${defaultLang}/about`);
    expect(getLanguageUrl(url, otherLang)).toBe(`/${otherLang}/about/`);
  });

  it('adds language prefix to root path', () => {
    const url = makeUrl(`/`);
    expect(getLanguageUrl(url, otherLang)).toBe(`/${otherLang}/`);
  });

  it('adds language prefix to non-prefixed path', () => {
    const url = makeUrl(`/about/team`);
    expect(getLanguageUrl(url, otherLang)).toBe(`/${otherLang}/about/team/`);
  });

  it('handles already-correct language prefix', () => {
    const url = makeUrl(`/${otherLang}/projects`);
    expect(getLanguageUrl(url, otherLang)).toBe(`/${otherLang}/projects/`);
  });

  it('handles empty path', () => {
    const url = makeUrl('');
    expect(getLanguageUrl(url, otherLang)).toBe(`/${otherLang}/`);
  });

  it('handles trailing slash', () => {
    const url = makeUrl('/about/');
    expect(getLanguageUrl(url, otherLang)).toBe(`/${otherLang}/about/`);
  });

  it('handles path with only language prefix', () => {
    const url = makeUrl(`/${defaultLang}`);
    expect(getLanguageUrl(url, otherLang)).toBe(`/${otherLang}/`);
  });
});
