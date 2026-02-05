import { LANGUAGES_SHORT } from '../../constants';

export const getLanguageStaticPaths = () => {
  return [{ params: { lang: LANGUAGES_SHORT.EN } }, { params: { lang: LANGUAGES_SHORT.UK } }];
};
