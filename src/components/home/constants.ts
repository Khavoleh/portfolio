import type { Skill } from '@shared/skill/interfaces.ts';
import type { Metric } from '@shared/metric/interfaces.ts';
import { SKILL_TYPES } from '@shared/skill/constants.ts';

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

export const METRICS: Metric[] = [
  { value: '3+', name: 'Years', description: 'Commercial Experience' },
  { value: '5x', name: 'Speed Boost', description: 'Performance Gain' },
  { value: '6', name: 'Developers', description: 'Team Leadership' },
  { value: '100%', name: 'Full-Cycle', description: 'End-to-End Delivery' },
];
