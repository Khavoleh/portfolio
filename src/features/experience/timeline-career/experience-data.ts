import type { ExperienceItem } from './experience-item';
import ArchitectureIcon from './icons/architecture.svg';
import CiCdIcon from './icons/ci-cd.svg';
import GrowUpIcon from './icons/grow-up.svg';
import LightBulbIcon from './icons/light-bulb.svg';
import SprintIcon from './icons/sprint.svg';
import StudyIcon from './icons/study.svg';
import TeamIcon from './icons/team.svg';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'experience_2_role',
    company: 'experience_2_company',
    sector: 'experience_2_sector',
    period: 'experience_2_period',
    skills: ['.NET', 'C#', 'ASP.NET Web API', 'EF Core', 'MongoDB', 'Azure Cloud', 'Docker'],
    sections: [
      {
        title: 'experience_2_section_0_title',
        icon: StudyIcon,
        details: 'experience_2_section_0_details',
      },
    ],
  },
  {
    role: 'experience_1_role',
    company: 'experience_1_company',
    sector: 'experience_1_sector',
    period: 'experience_1_period',
    skills: [
      '.NET',
      'C#',
      'ASP.NET Web API',
      'EF Core',
      'React',
      'Next.js',
      'JavaScript',
      'React Query',
      'Kendo UI',
      'MS SQL Server',
      'Azure DevOps',
    ],
    sections: [
      {
        title: 'experience_1_section_0_title',
        icon: ArchitectureIcon,
        details: 'experience_1_section_0_details',
      },
      {
        title: 'experience_1_section_1_title',
        icon: GrowUpIcon,
        details: 'experience_1_section_1_details',
      },
      {
        title: 'experience_1_section_2_title',
        icon: TeamIcon,
        details: 'experience_1_section_2_details',
      },
    ],
  },
  {
    role: 'experience_0_role',
    company: 'experience_0_company',
    sector: 'experience_0_sector',
    period: 'experience_0_period',
    skills: [
      '.NET',
      'C#',
      'ASP.NET Web API',
      'Dapper',
      'Angular',
      'TypeScript',
      'Angular Material',
      'MS SQL Server',
      'Azure DevOps',
      'Azure Pipelines',
      'Docker',
    ],
    sections: [
      {
        title: 'experience_0_section_0_title',
        icon: LightBulbIcon,
        details: 'experience_0_section_0_details',
      },
      {
        title: 'experience_0_section_1_title',
        icon: SprintIcon,
        details: 'experience_0_section_1_details',
      },
      {
        title: 'experience_0_section_2_title',
        icon: CiCdIcon,
        details: 'experience_0_section_2_details',
      },
    ],
  },
];
