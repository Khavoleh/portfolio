import { SKILL_TYPES } from './constants.ts';

export const getStyleClasses = (type: string): string => {
  switch (type) {
    case SKILL_TYPES.FRONT_END:
      return 'border-2 border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400';
    case SKILL_TYPES.BACK_END:
      return 'bg-blue-500 font-medium text-white';
    case SKILL_TYPES.DATABASE:
      return 'bg-slate-700 text-white shadow-lg dark:bg-slate-600';
    case SKILL_TYPES.DEV_OPS:
      return 'bg-purple-600 text-white shadow-lg dark:bg-purple-700';
    case SKILL_TYPES.OTHER:
    default:
      return 'border-2 border-gray-400 text-gray-600 dark:border-gray-500 dark:text-gray-400';
  }
};
