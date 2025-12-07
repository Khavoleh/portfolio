import type { ProjectItem } from '../interfaces.ts';
import { SKILL_TYPES } from '@shared/skill/constants.ts';
import TargetIcon from '../icons/target.svg';
import SettingsIcon from '../icons/settings.svg';
import StarsIcon from '../icons/stars.svg';
import BusinessIcon from '../icons/business.svg';

export const FORGE_MOCK: ProjectItem = {
  title: 'forgeMock.title',
  description: 'forgeMock.description',
  sections: [
    {
      title: 'forgeMock.section.0.title',
      icon: TargetIcon,
      details: ['forgeMock.section.0.details.0'],
    },
    {
      title: 'forgeMock.section.1.title',
      icon: SettingsIcon,
      details: ['forgeMock.section.1.details.0'],
    },
    {
      title: 'forgeMock.section.2.title',
      icon: StarsIcon,
      details: [
        'forgeMock.section.2.details.0',
        'forgeMock.section.2.details.1',
        'forgeMock.section.2.details.2',
        'forgeMock.section.2.details.3',
      ],
    },
    {
      title: 'forgeMock.section.3.title',
      icon: BusinessIcon,
      details: ['forgeMock.section.3.details.0'],
    },
  ],
  skills: [
    { name: '.NET', type: SKILL_TYPES.BACK_END },
    { name: 'ASP.NET Web API', type: SKILL_TYPES.BACK_END },
    { name: 'EF Core', type: SKILL_TYPES.BACK_END },
    { name: 'Next.js', type: SKILL_TYPES.FRONT_END },
    { name: 'TypeScript', type: SKILL_TYPES.FRONT_END },
    { name: 'React Query', type: SKILL_TYPES.FRONT_END },
    { name: 'React Aria', type: SKILL_TYPES.FRONT_END },
    { name: 'PostgreSQL', type: SKILL_TYPES.DATABASE },
    { name: 'GitHub', type: SKILL_TYPES.DEV_OPS },
    { name: 'Docker', type: SKILL_TYPES.DEV_OPS },
    { name: 'Grafana', type: SKILL_TYPES.DEV_OPS },
  ],
};
