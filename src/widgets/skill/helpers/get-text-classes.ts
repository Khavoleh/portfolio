import { SKILL_TYPES } from '../skill-types';

export const getTextClasses = (type: string): string => {
  switch (type) {
    case SKILL_TYPES.BACK_END:
      return 'text-primary-content';
    case SKILL_TYPES.FRONT_END:
      return 'text-primary';
    case SKILL_TYPES.DATABASE:
      return 'text-secondary-content';
    case SKILL_TYPES.DEV_OPS:
      return 'text-secondary';
    default:
      return 'text-neutral-content';
  }
};
