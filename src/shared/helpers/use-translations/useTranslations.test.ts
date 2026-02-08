import type { I18N } from '@shared/interfaces';
import { describe, expect, it } from 'vitest';
import { useTranslations } from './useTranslations';

const MOCK_TRANSLATIONS: I18N = {
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

const PARTIAL_TRANSLATIONS: I18N = {
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
      const url = new URL('https://www.khavol.com/en/');
      const t = useTranslations(url, MOCK_TRANSLATIONS);

      expect(t('greeting')).toBe('Hello');
      expect(t('welcome')).toBe('Welcome to the site');
      expect(t('button')).toBe('Click me');
    });

    it('should return English translation for English URL with path', () => {
      const url = new URL('https://www.khavol.com/en/contacts/');
      const t = useTranslations(url, MOCK_TRANSLATIONS);

      expect(t('greeting')).toBe('Hello');
    });
  });

  describe('Ukrainian translations', () => {
    it('should return Ukrainian translation for Ukrainian URL', () => {
      const url = new URL('https://www.khavol.com/uk/');
      const t = useTranslations(url, MOCK_TRANSLATIONS);

      expect(t('greeting')).toBe('Привіт');
      expect(t('welcome')).toBe('Ласкаво просимо на сайт');
      expect(t('button')).toBe('Натисни мене');
    });

    it('should return Ukrainian translation for Ukrainian URL with path', () => {
      const url = new URL('https://www.khavol.com/uk/experience/');
      const t = useTranslations(url, MOCK_TRANSLATIONS);

      expect(t('greeting')).toBe('Привіт');
    });
  });

  describe('Fallback behavior', () => {
    it('should return key if translation is missing in both languages', () => {
      const url = new URL('https://www.khavol.com/en/');
      const t = useTranslations(url, MOCK_TRANSLATIONS);

      expect(t('nonexistent_key')).toBe('nonexistent_key');
    });

    it('should fallback to English if Ukrainian translation is missing', () => {
      const url = new URL('https://www.khavol.com/uk/');
      const t = useTranslations(url, PARTIAL_TRANSLATIONS);

      expect(t('description')).toBe('Description');
    });

    it('should return Ukrainian translation when it exists', () => {
      const url = new URL('https://www.khavol.com/uk/');
      const t = useTranslations(url, PARTIAL_TRANSLATIONS);

      expect(t('title')).toBe('Заголовок');
    });

    it('should default to English for invalid language in URL', () => {
      const url = new URL('https://www.khavol.com/fr/');
      const t = useTranslations(url, MOCK_TRANSLATIONS);

      expect(t('greeting')).toBe('Hello');
    });

    it('should default to English for root URL', () => {
      const url = new URL('https://www.khavol.com/');
      const t = useTranslations(url, MOCK_TRANSLATIONS);

      expect(t('greeting')).toBe('Hello');
    });
  });

  describe('Edge cases', () => {
    it('should handle empty translations object', () => {
      const emptyTranslations: I18N = {
        en: {},
        uk: {},
      };
      const url = new URL('https://www.khavol.com/en/');
      const t = useTranslations(url, emptyTranslations);

      expect(t('any_key')).toBe('any_key');
    });

    it('should handle URL with query parameters', () => {
      const url = new URL('https://www.khavol.com/uk/?ref=google');
      const t = useTranslations(url, MOCK_TRANSLATIONS);

      expect(t('greeting')).toBe('Привіт');
    });

    it('should handle URL with hash', () => {
      const url = new URL('https://www.khavol.com/en/#section');
      const t = useTranslations(url, MOCK_TRANSLATIONS);

      expect(t('greeting')).toBe('Hello');
    });
  });
});
