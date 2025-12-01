import type { Skill } from '@shared/skill/interfaces.ts';
import type { Metric } from '@shared/metric/interfaces.ts';
import type { Review } from '@shared/review/interfaces.ts';
import { SKILL_TYPES } from '@shared/skill/constants.ts';
import viktoria from './images/viktoria-monastyrska.jpeg';
import mykola from './images/mykola-synhalevych.jpeg';
import pavlo from './images/pavlo-demskyi.png';

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

export const REVIEWS: Review[] = [
  {
    name: 'Viktoria Monastyrska',
    position: 'Front-End Developer',
    company: 'Bliscore Software',
    text: 'Working with Oleh was a great experience - he consistently demonstrated deep full-stack expertise and an exceptional understanding of system architecture. He quickly identifies weak spots, proposes meaningful improvements, and delivers clear guidance on backend design, data flow, and performance. Beyond his technical strengths, he shows mature leadership qualities, excellent communication, and reliably supports both teammates and cross-team collaboration.',
    image: viktoria,
  },
  {
    name: 'Mykola Synhalevych',
    position: 'Front-End Developer',
    company: 'Bliscore Software',
    text: 'I worked with Oleh for over a year and can confidently say he is one of the most skilled and well-rounded full-stack developers on our team. He tackled the most complex tasks, led critical refactoring that significantly improved our architecture, and actively contributed to reviews, estimations, and mentoring. Alongside his technical excellence, he demonstrated strong leadership, clear communication, and a supportive attitude that made collaboration highly effective.',
    image: mykola,
  },
  {
    name: 'Paul Demskyi',
    position: 'Full Stack Developer',
    company: 'Bliscore Software',
    text: 'I worked with Oleh on the same project area, and his contributions were essential to the project’s success. He rebuilt a poorly structured backend architecture into a clean, efficient system that significantly reduced development and deployment time, while also providing strong input during planning and estimations. Alongside his technical expertise, he naturally took on leadership responsibilities, guiding teammates, resolving blockers, and communicating effectively with both customers and technical stakeholders.',
    image: pavlo,
  },
];
