import { describe, it, expect } from 'vitest';
import { useTranslations, getLanguageUrl, getLanguageStaticPaths } from './helpers';
import type { Translations } from './interfaces';

const mockTranslations: Translations = {
  en: {
    greeting: 'Hello',
    welcome: 'Welcome to the site',
    button: 'Click me',
  },
  uk: {
    greeting: 'Привіт',
    welcome: 'Ласкаво просимо на сайт',
    button: 'Натисни мене',
  },
};

const partialTranslations: Translations = {
  en: {
    title: 'Title',
    description: 'Description',
  },
  uk: {
    title: 'Заголовок',
    // description is missing - should fallback to English
  },
};

describe('useTranslations', () => {
  describe('English translations', () => {
    it('should return English translation for English URL', () => {
      const url = new URL('https://example.com/en/');
      const t = useTranslations(url, mockTranslations);

      expect(t('greeting')).toBe('Hello');
      expect(t('welcome')).toBe('Welcome to the site');
      expect(t('button')).toBe('Click me');
    });

    it('should return English translation for English URL with path', () => {
      const url = new URL('https://example.com/en/contacts/');
      const t = useTranslations(url, mockTranslations);

      expect(t('greeting')).toBe('Hello');
    });
  });

  describe('Ukrainian translations', () => {
    it('should return Ukrainian translation for Ukrainian URL', () => {
      const url = new URL('https://example.com/uk/');
      const t = useTranslations(url, mockTranslations);

      expect(t('greeting')).toBe('Привіт');
      expect(t('welcome')).toBe('Ласкаво просимо на сайт');
      expect(t('button')).toBe('Натисни мене');
    });

    it('should return Ukrainian translation for Ukrainian URL with path', () => {
      const url = new URL('https://example.com/uk/experience/');
      const t = useTranslations(url, mockTranslations);

      expect(t('greeting')).toBe('Привіт');
    });
  });

  describe('Fallback behavior', () => {
    it('should return key if translation is missing in both languages', () => {
      const url = new URL('https://example.com/en/');
      const t = useTranslations(url, mockTranslations);

      expect(t('nonexistent_key')).toBe('nonexistent_key');
    });

    it('should fallback to English if Ukrainian translation is missing', () => {
      const url = new URL('https://example.com/uk/');
      const t = useTranslations(url, partialTranslations);

      expect(t('description')).toBe('Description');
    });

    it('should return Ukrainian translation when it exists', () => {
      const url = new URL('https://example.com/uk/');
      const t = useTranslations(url, partialTranslations);

      expect(t('title')).toBe('Заголовок');
    });

    it('should default to English for invalid language in URL', () => {
      const url = new URL('https://example.com/fr/');
      const t = useTranslations(url, mockTranslations);

      expect(t('greeting')).toBe('Hello');
    });

    it('should default to English for root URL', () => {
      const url = new URL('https://example.com/');
      const t = useTranslations(url, mockTranslations);

      expect(t('greeting')).toBe('Hello');
    });
  });

  describe('Edge cases', () => {
    it('should handle empty translations object', () => {
      const emptyTranslations: Translations = {
        en: {},
        uk: {},
      };
      const url = new URL('https://example.com/en/');
      const t = useTranslations(url, emptyTranslations);

      expect(t('any_key')).toBe('any_key');
    });

    it('should handle URL with query parameters', () => {
      const url = new URL('https://example.com/uk/?ref=google');
      const t = useTranslations(url, mockTranslations);

      expect(t('greeting')).toBe('Привіт');
    });

    it('should handle URL with hash', () => {
      const url = new URL('https://example.com/en/#section');
      const t = useTranslations(url, mockTranslations);

      expect(t('greeting')).toBe('Hello');
    });
  });
});

describe('getLanguageUrl', () => {
  it('should construct URL with language prefix and path', () => {
    const url = new URL('https://example.com/en/');
    expect(getLanguageUrl(url, '/contacts/')).toBe('/en/contacts/');
  });

  it('should handle Ukrainian language', () => {
    const url = new URL('https://example.com/uk/');
    expect(getLanguageUrl(url, '/experience/')).toBe('/uk/experience/');
  });

  it('should handle root path', () => {
    const url = new URL('https://example.com/en/');
    expect(getLanguageUrl(url, '/')).toBe('/en/');
  });

  it('should default to English for invalid language', () => {
    const url = new URL('https://example.com/fr/');
    expect(getLanguageUrl(url, '/projects/')).toBe('/en/projects/');
  });

  it('should default to English for root URL', () => {
    const url = new URL('https://example.com/');
    expect(getLanguageUrl(url, '/contacts/')).toBe('/en/contacts/');
  });
});

describe('getLanguageStaticPaths', () => {
  it('should return static paths for all supported languages', () => {
    const paths = getLanguageStaticPaths();

    expect(paths).toHaveLength(2);
    expect(paths).toContainEqual({ params: { lang: 'en' } });
    expect(paths).toContainEqual({ params: { lang: 'uk' } });
  });

  it('should return paths in correct format for Astro', () => {
    const paths = getLanguageStaticPaths();

    paths.forEach((path) => {
      expect(path).toHaveProperty('params');
      expect(path.params).toHaveProperty('lang');
      expect(typeof path.params.lang).toBe('string');
    });
  });
});
