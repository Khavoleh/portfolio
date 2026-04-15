import { SKILL_TYPES } from '../skill-types';

export const getStyleClasses = (type: string): string => {
  switch (type) {
    case SKILL_TYPES.BACK_END:
      return 'badge-primary';
    case SKILL_TYPES.FRONT_END:
      return 'badge-primary badge-outline';
    case SKILL_TYPES.DATABASE:
      return 'badge-secondary';
    case SKILL_TYPES.DEV_OPS:
      return 'badge-secondary badge-outline';
    default:
      return 'badge-neutral badge-outline';
  }
};
