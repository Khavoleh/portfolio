import { DEFAULT_LANGUAGE } from '@shared/constants';
import { LANGUAGES_CONFIG } from '../../constants';

export const getCurrentLanguage = (url: URL): string => {
  const [, language] = url.pathname.split('/');

  const langCodes = LANGUAGES_CONFIG.map((l) => l.code);
  if (language && langCodes.includes(language)) {
    return language;
  }

  return DEFAULT_LANGUAGE;
};
