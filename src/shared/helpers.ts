import type { Translations } from './interfaces.ts';
import { LANGUAGES_SHORT, DEFAULT_LANGUAGE } from './constants.ts';

const getLangFromUrl = (url: URL, translations: Translations): keyof Translations => {
  const [, language] = url.pathname.split('/');

  if (language in translations) return language as keyof Translations;

  return DEFAULT_LANGUAGE as keyof Translations;
};

export const getLanguageUrl = (url: URL, path: string): string => {
  const [, language] = url.pathname.split('/');

  const validLanguages = Object.values(LANGUAGES_SHORT);
  const selectedLanguage = validLanguages.includes(language) ? language : DEFAULT_LANGUAGE;

  return `/${selectedLanguage}${path}`;
};

export const useTranslations = (url: URL, translations: Translations) => {
  const language: keyof Translations = getLangFromUrl(url, translations);

  return (key: string): string => {
    return translations[language]?.[key] ?? translations[DEFAULT_LANGUAGE as keyof Translations]?.[key] ?? key;
  };
};

export const getLanguageStaticPaths = () => {
  return [{ params: { lang: LANGUAGES_SHORT.EN } }, { params: { lang: LANGUAGES_SHORT.UK } }];
};
