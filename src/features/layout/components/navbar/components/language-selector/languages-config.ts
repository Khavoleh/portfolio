import { LANGUAGES, LANGUAGES_SHORT } from '@shared/constants';
import FlagEnIcon from './icons/flag-en.svg';
import FlagUkIcon from './icons/flag-uk.svg';
import type { Language } from './language';

export const LANGUAGES_CONFIG: Language[] = [
  { code: LANGUAGES_SHORT.EN, name: LANGUAGES.EN, icon: FlagEnIcon },
  { code: LANGUAGES_SHORT.UK, name: LANGUAGES.UK, icon: FlagUkIcon },
];
