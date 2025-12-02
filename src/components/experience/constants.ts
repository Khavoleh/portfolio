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
    role: 'Full-Stack .NET/React Developer',
    company: 'Bliscore Software',
    sector: 'Telecommunications Analytics Project',
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
        title: 'Call Analysis Platform Architecture',
        icon: ArchitectureIcon,
        details:
          "I actively participated in the design and implementation of a new, scalable microservice architecture for the call analysis platform. This strategic decision significantly improved the platform's ability to handle large data volumes and simplified the integration of new analytical features.",
      },
      {
        title: '5x+ Dashboard Optimization',
        icon: GrowUpIcon,
        details:
          'I performed a complete migration of visualizations from Power BI to native charting components while simultaneously optimizing the database structure. This involved redesigning data retrieval using optimized, native SQL queries, which drastically improved query execution speed and reduced server load. Through front-end rendering optimizations, we achieved an overall 5x+ increase in dashboard responsiveness and efficiency.',
      },
      {
        title: 'Leadership & Workflow Organization',
        icon: TeamIcon,
        details:
          'I successfully led a team of up to 6 developers, ensuring clear organization of the workflow and strict adherence to project timelines. My responsibilities included writing detailed technical documentation and business requirements, which guaranteed the timely and high-quality delivery of the final product features.',
      },
    ],
  },
  {
    role: 'Full-Stack .NET/Angular Developer',
    company: 'Lviv Polytechnic National University',
    sector: 'Internal Workflow Automation System',
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
        title: 'Ground-Up Scalable System Architecture',
        icon: LightBulbIcon,
        details:
          'I designed the entire architecture for a new information system from scratch, prioritizing scalability and long-term maintainability. This ensures the system can efficiently handle growing user load and simplifies the future integration of new functional modules.',
      },
      {
        title: 'Scrum Framework Implementation',
        icon: SprintIcon,
        details:
          'I initiated the adoption of the Scrum framework and actively facilitated its use within the development team. This led to a significant improvement in feature delivery efficiency and enhanced internal team communication.',
      },
      {
        title: 'Full CI/CD Setup',
        icon: CiCdIcon,
        details:
          'Established the complete Continuous Integration/Continuous Delivery (CI/CD) infrastructure, leveraging Docker for containerization and Azure Pipelines for process automation. This enabled fast, reliable, and seamless code deployment across all environments.',
      },
    ],
  },
];
