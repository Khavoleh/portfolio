import { DEFAULT_LANGUAGE } from '@shared/constants';
import type { I18N } from '@shared/interfaces';

const getLangFromUrl = (url: URL, translations: I18N): keyof I18N => {
  const [, language] = url.pathname.split('/');

  if (language in translations) return language as keyof I18N;

  return DEFAULT_LANGUAGE as keyof I18N;
};

export const useI18n = (url: URL, translations: I18N) => {
  const language: keyof I18N = getLangFromUrl(url, translations);

  return (key: string): string => {
    return translations[language]?.[key] ?? translations[DEFAULT_LANGUAGE as keyof I18N]?.[key] ?? key;
  };
};
