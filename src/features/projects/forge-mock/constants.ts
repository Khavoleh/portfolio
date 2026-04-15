import { SKILL_TYPES } from '@shared/components';
import BusinessIcon from '../icons/business.svg';
import SettingsIcon from '../icons/settings.svg';
import StarsIcon from '../icons/stars.svg';
import TargetIcon from '../icons/target.svg';
import type { ProjectItem } from '../project-item';

export const FORGE_MOCK: ProjectItem = {
  title: 'forgeMock_title',
  description: 'forgeMock_description',
  sections: [
    {
      title: 'forgeMock_section_0_title',
      icon: TargetIcon,
      details: ['forgeMock_section_0_details_0'],
    },
    {
      title: 'forgeMock_section_1_title',
      icon: SettingsIcon,
      details: ['forgeMock_section_1_details_0'],
    },
    {
      title: 'forgeMock_section_2_title',
      icon: StarsIcon,
      details: [
        'forgeMock_section_2_details_0',
        'forgeMock_section_2_details_1',
        'forgeMock_section_2_details_2',
        'forgeMock_section_2_details_3',
      ],
    },
    {
      title: 'forgeMock_section_3_title',
      icon: BusinessIcon,
      details: ['forgeMock_section_3_details_0'],
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
