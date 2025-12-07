import type { ProjectItem } from '../interfaces.ts';
import { SKILL_TYPES } from '@shared/skill/constants.ts';
import TargetIcon from '../icons/target.svg';
import SettingsIcon from '../icons/settings.svg';
import StarsIcon from '../icons/stars.svg';
import BusinessIcon from '../icons/business.svg';

export const PORTFOLIO: ProjectItem = {
  title: 'portfolio.title',
  description: 'portfolio.description',
  sections: [
    {
      title: 'portfolio.section.0.title',
      icon: TargetIcon,
      details: ['portfolio.section.0.details.0'],
    },
    {
      title: 'portfolio.section.1.title',
      icon: SettingsIcon,
      details: ['portfolio.section.1.details.0'],
    },
    {
      title: 'portfolio.section.2.title',
      icon: StarsIcon,
      details: [
        'portfolio.section.2.details.0',
        'portfolio.section.2.details.1',
        'portfolio.section.2.details.2',
        'portfolio.section.2.details.3',
      ],
    },
    {
      title: 'portfolio.section.3.title',
      icon: BusinessIcon,
      details: ['portfolio.section.3.details.0'],
    },
  ],
  skills: [
    { name: 'Astro', type: SKILL_TYPES.FRONT_END },
    { name: 'TypeScript', type: SKILL_TYPES.FRONT_END },
    { name: 'Tailwind CSS', type: SKILL_TYPES.FRONT_END },
    { name: 'Flowbite', type: SKILL_TYPES.FRONT_END },
    { name: 'GitHub', type: SKILL_TYPES.DEV_OPS },
    { name: 'Vercel', type: SKILL_TYPES.DEV_OPS },
  ],
};

export const PERFORMANCE_METRICS: string[] = [
  'portfolio.performance.metrics.0',
  'portfolio.performance.metrics.1',
  'portfolio.performance.metrics.2',
  'portfolio.performance.metrics.3',
];
