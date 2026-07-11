import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '@shared/constants';

const isSupportedLanguage = (language: string | undefined): language is string =>
  Boolean(language) && SUPPORTED_LANGUAGES.includes(language as string);

export const getLanguageFromUrl = (url: URL): string => {
  const [, language] = url.pathname.split('/');

  return isSupportedLanguage(language) ? language : DEFAULT_LANGUAGE;
};
