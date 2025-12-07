import type { ExperienceItem } from './interfaces.ts';
import { SKILL_TYPES } from '@shared/skill/constants.ts';
import ArchitectureIcon from './icons/architecture.svg';
import GrowUpIcon from './icons/grow-up.svg';
import TeamIcon from './icons/team.svg';
import LightBulbIcon from './icons/light-bulb.svg';
import SprintIcon from './icons/sprint.svg';
import CiCdIcon from './icons/ci-cd.svg';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'experience.0.role',
    company: 'experience.0.company',
    sector: 'experience.0.sector',
    period: '07/2024 - 11/2025',
    skills: [
      { name: '.NET', type: SKILL_TYPES.BACK_END },
      { name: 'C#', type: SKILL_TYPES.BACK_END },
      { name: 'ASP.NET Web API', type: SKILL_TYPES.BACK_END },
      { name: 'EF Core', type: SKILL_TYPES.BACK_END },
      { name: 'React', type: SKILL_TYPES.FRONT_END },
      { name: 'Next.js', type: SKILL_TYPES.FRONT_END },
      { name: 'JavaScript', type: SKILL_TYPES.FRONT_END },
      { name: 'React Query', type: SKILL_TYPES.FRONT_END },
      { name: 'Kendo UI', type: SKILL_TYPES.FRONT_END },
      { name: 'MS SQL Server', type: SKILL_TYPES.DATABASE },
      { name: 'Azure DevOps', type: SKILL_TYPES.DEV_OPS },
    ],
    sections: [
      {
        title: 'experience.0.section.0.title',
        icon: ArchitectureIcon,
        details: 'experience.0.section.0.details',
      },
      {
        title: 'experience.0.section.1.title',
        icon: GrowUpIcon,
        details: 'experience.0.section.1.details',
      },
      {
        title: 'experience.0.section.2.title',
        icon: TeamIcon,
        details: 'experience.0.section.2.details',
      },
    ],
  },
  {
    role: 'experience.1.role',
    company: 'experience.1.company',
    sector: 'experience.1.sector',
    period: '12/2023 - 06/2025',
    skills: [
      { name: '.NET', type: SKILL_TYPES.BACK_END },
      { name: 'C#', type: SKILL_TYPES.BACK_END },
      { name: 'ASP.NET Web API', type: SKILL_TYPES.BACK_END },
      { name: 'Dapper', type: SKILL_TYPES.BACK_END },
      { name: 'Angular', type: SKILL_TYPES.FRONT_END },
      { name: 'TypeScript', type: SKILL_TYPES.FRONT_END },
      { name: 'Angular Material', type: SKILL_TYPES.FRONT_END },
      { name: 'MS SQL Server', type: SKILL_TYPES.DATABASE },
      { name: 'Azure DevOps', type: SKILL_TYPES.DEV_OPS },
      { name: 'Azure Pipelines', type: SKILL_TYPES.DEV_OPS },
      { name: 'Docker', type: SKILL_TYPES.DEV_OPS },
    ],
    sections: [
      {
        title: 'experience.1.section.0.title',
        icon: LightBulbIcon,
        details: 'experience.1.section.0.details',
      },
      {
        title: 'experience.1.section.1.title',
        icon: SprintIcon,
        details: 'experience.1.section.1.details',
      },
      {
        title: 'experience.1.section.2.title',
        icon: CiCdIcon,
        details: 'experience.1.section.2.details',
      },
    ],
  },
];
