import type { SKILL_TYPES } from './skill-types.ts';

export interface Skill {
  name: string;
  type:
    | typeof SKILL_TYPES.FRONT_END
    | typeof SKILL_TYPES.BACK_END
    | typeof SKILL_TYPES.DATABASE
    | typeof SKILL_TYPES.DEV_OPS;
}
