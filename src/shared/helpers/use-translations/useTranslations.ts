import { DEFAULT_LANGUAGE } from '@shared/constants';
import type { Translations } from '@shared/interfaces';

const getLangFromUrl = (url: URL, translations: Translations): keyof Translations => {
  const [, language] = url.pathname.split('/');

  if (language in translations) return language as keyof Translations;

  return DEFAULT_LANGUAGE as keyof Translations;
};

export const useTranslations = (url: URL, translations: Translations) => {
  const language: keyof Translations = getLangFromUrl(url, translations);

  return (key: string): string => {
    return translations[language]?.[key] ?? translations[DEFAULT_LANGUAGE as keyof Translations]?.[key] ?? key;
  };
};
