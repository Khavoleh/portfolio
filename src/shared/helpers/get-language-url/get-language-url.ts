import { DEFAULT_LANGUAGE, LANGUAGES_SHORT } from '@shared/constants';

export const getLanguageUrl = (url: URL, path: string): string => {
  const [, language] = url.pathname.split('/');

  const validLanguages = Object.values(LANGUAGES_SHORT);
  const selectedLanguage = validLanguages.includes(language) ? language : DEFAULT_LANGUAGE;

  return `/${selectedLanguage}${path}`;
};
