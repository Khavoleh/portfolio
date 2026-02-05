import { LANGUAGES_SHORT } from '@shared/constants/index';

export const getLanguageStaticPaths = () => {
  return [{ params: { lang: LANGUAGES_SHORT.EN } }, { params: { lang: LANGUAGES_SHORT.UK } }];
};
