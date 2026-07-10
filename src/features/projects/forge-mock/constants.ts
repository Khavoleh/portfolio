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
    '.NET',
    'ASP.NET Web API',
    'EF Core',
    'Next.js',
    'TypeScript',
    'React Query',
    'React Aria',
    'PostgreSQL',
    'GitHub',
    'Docker',
    'Grafana',
  ],
};
