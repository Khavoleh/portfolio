import { DEFAULT_LANGUAGE, LANGUAGES_SHORT } from '@shared/constants';

export const getCurrentLanguage = (url: URL): string => {
  const [, language] = url.pathname.split('/');

  const langCodes = [LANGUAGES_SHORT.EN, LANGUAGES_SHORT.UK];
  if (language && langCodes.includes(language)) {
    return language;
  }

  return DEFAULT_LANGUAGE;
};
