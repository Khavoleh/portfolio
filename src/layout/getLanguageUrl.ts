import { LANGUAGES_CONFIG } from './constants';

export const getLanguageUrl = (url: URL, targetLang: string): string => {
  const pathParts = url.pathname.split('/').filter(Boolean);

  const langCodes = LANGUAGES_CONFIG.map((l) => l.code);
  const hasLangPrefix = pathParts[0] && langCodes.includes(pathParts[0]);

  if (hasLangPrefix) {
    pathParts[0] = targetLang;
    return `/${pathParts.join('/')}/`;
  }

  if (pathParts.length === 0) {
    return `/${targetLang}/`;
  }

  return `/${targetLang}/${pathParts.join('/')}/`;
};
