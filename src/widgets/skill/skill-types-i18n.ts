import type { I18N } from '@shared/interfaces';
import { SKILL_TYPES } from './skill-types';

export const SKILL_TYPES_I18N: I18N = {
  en: {
    [SKILL_TYPES.FRONT_END]: 'Front-End',
    [SKILL_TYPES.BACK_END]: 'Back-End',
    [SKILL_TYPES.DATABASE]: 'Databases',
    [SKILL_TYPES.DEV_OPS]: 'DevOps',
  },
  uk: {
    [SKILL_TYPES.FRONT_END]: 'Front-End',
    [SKILL_TYPES.BACK_END]: 'Back-End',
    [SKILL_TYPES.DATABASE]: 'Бази даних',
    [SKILL_TYPES.DEV_OPS]: 'DevOps',
  },
};
