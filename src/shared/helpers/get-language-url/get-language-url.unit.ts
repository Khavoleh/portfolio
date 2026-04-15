import { describe, expect, it } from 'vitest';
import { getLanguageUrl } from './get-language-url';

describe('getLanguageUrl', () => {
  it('should construct URL with language prefix and path', () => {
    const url = new URL('https://www.khavol.com/en/');
    expect(getLanguageUrl(url, '/contacts/')).toBe('/en/contacts/');
  });

  it('should handle Ukrainian language', () => {
    const url = new URL('https://www.khavol.com/uk/');
    expect(getLanguageUrl(url, '/experience/')).toBe('/uk/experience/');
  });

  it('should handle root path', () => {
    const url = new URL('https://www.khavol.com/en/');
    expect(getLanguageUrl(url, '/')).toBe('/en/');
  });

  it('should default to English for invalid language', () => {
    const url = new URL('https://www.khavol.com/fr/');
    expect(getLanguageUrl(url, '/projects/')).toBe('/en/projects/');
  });

  it('should default to English for root URL', () => {
    const url = new URL('https://www.khavol.com/');
    expect(getLanguageUrl(url, '/contacts/')).toBe('/en/contacts/');
  });
});
