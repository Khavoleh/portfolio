import { SKILL_TYPES } from '@shared/components';
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
    skills: [
      { name: '.NET', type: SKILL_TYPES.BACK_END },
      { name: 'C#', type: SKILL_TYPES.BACK_END },
      { name: 'ASP.NET Web API', type: SKILL_TYPES.BACK_END },
      { name: 'EF Core', type: SKILL_TYPES.BACK_END },
      { name: 'MongoDB', type: SKILL_TYPES.DATABASE },
      { name: 'Azure Cloud', type: SKILL_TYPES.DEV_OPS },
      { name: 'Docker', type: SKILL_TYPES.DEV_OPS },
    ],
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
