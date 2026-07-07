import type { Skill } from '../skill';
import { SKILL_TYPES } from '../skill-types';

export interface SkillGroup {
  type: string;
  skills: Skill[];
}

const TYPE_ORDER: string[] = [SKILL_TYPES.FRONT_END, SKILL_TYPES.BACK_END, SKILL_TYPES.DATABASE, SKILL_TYPES.DEV_OPS];

export const groupSkillsByType = (skills: Skill[]): SkillGroup[] =>
  TYPE_ORDER.map((type) => ({ type, skills: skills.filter((skill) => skill.type === type) })).filter(
    (group) => group.skills.length > 0
  );
