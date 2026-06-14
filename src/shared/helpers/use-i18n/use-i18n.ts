import { DEFAULT_LANGUAGE } from '@shared/constants';
import type { I18N } from '@shared/interfaces';
import { getLanguageFromUrl } from '../get-language/get-language';

export const useI18n = (url: URL, translations: I18N) => {
  const language = getLanguageFromUrl(url) as keyof I18N;

  return (key: string): string => {
    return translations[language]?.[key] ?? translations[DEFAULT_LANGUAGE as keyof I18N]?.[key] ?? key;
  };
};
