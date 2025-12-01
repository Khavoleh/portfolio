import type { Skill } from '@shared/skill';
import { SKILL_TYPES } from '@shared/skill';

export const SKILLS: Skill[] = [
  { name: '.NET', type: SKILL_TYPES.BACK_END },
  { name: 'C#', type: SKILL_TYPES.BACK_END },
  { name: 'ASP.NET Web API', type: SKILL_TYPES.BACK_END },
  { name: 'React', type: SKILL_TYPES.FRONT_END },
  { name: 'Angular', type: SKILL_TYPES.FRONT_END },
  { name: 'Next.js', type: SKILL_TYPES.FRONT_END },
  { name: 'MS SQL Server', type: SKILL_TYPES.DATABASE },
  { name: 'Docker', type: SKILL_TYPES.DEV_OPS },
  { name: 'Azure DevOps', type: SKILL_TYPES.DEV_OPS },
];
