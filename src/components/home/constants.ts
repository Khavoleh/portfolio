import type { Skill } from '@shared/skill/interfaces.ts';
import type { Metric } from '@shared/metric/interfaces.ts';
import type { Review } from '@shared/review/interfaces.ts';
import { SKILL_TYPES } from '@shared/skill/constants.ts';
import viktoria from './images/viktoria-monastyrska.jpeg';
import mykola from './images/mykola-synhalevych.jpeg';
import pavlo from './images/pavlo-demskyi.png';
import valerii from './images/valerii-inshyn.jpeg';

export const SKILLS: Skill[] = [
  { name: '.NET', type: SKILL_TYPES.BACK_END },
  { name: 'C#', type: SKILL_TYPES.BACK_END },
  { name: 'ASP.NET Web API', type: SKILL_TYPES.BACK_END },
  { name: 'React', type: SKILL_TYPES.FRONT_END },
  { name: 'Angular', type: SKILL_TYPES.FRONT_END },
  { name: 'Next.js', type: SKILL_TYPES.FRONT_END },
  { name: 'MS SQL Server', type: SKILL_TYPES.DATABASE },
  { name: 'Docker', type: SKILL_TYPES.DEV_OPS },
];

export const METRICS: Metric[] = [
  { value: '3+', name: 'metrics.0.name', description: 'metrics.0.description' },
  { value: '5x', name: 'metrics.1.name', description: 'metrics.1.description' },
  { value: '6', name: 'metrics.2.name', description: 'metrics.2.description' },
  { value: '100%', name: 'metrics.3.name', description: 'metrics.3.description' },
];

export const REVIEWS: Review[] = [
  {
    name: 'reviews.0.name',
    position: 'reviews.0.position',
    company: 'Bliscore Software',
    text: 'reviews.0.text',
    image: viktoria,
  },
  {
    name: 'reviews.1.name',
    position: 'reviews.1.position',
    company: 'Bliscore Software',
    text: 'reviews.1.text',
    image: mykola,
  },
  {
    name: 'reviews.2.name',
    position: 'reviews.2.position',
    company: 'Bliscore Software',
    text: 'reviews.2.text',
    image: pavlo,
  },
  {
    name: 'reviews.3.name',
    position: 'reviews.3.position',
    company: 'Bliscore Software',
    text: 'reviews.3.text',
    image: valerii,
  },
];
