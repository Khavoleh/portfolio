import { getLanguageFromUrl } from '../get-language/get-language';

export const getLanguageUrl = (url: URL, path: string): string => {
  return `/${getLanguageFromUrl(url)}${path}`;
};
