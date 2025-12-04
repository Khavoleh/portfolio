import type { ProjectItem } from '../interfaces.ts';
import { SKILL_TYPES } from '@shared/skill/constants.ts';
import TargetIcon from '../icons/target.svg';
import SettingsIcon from '../icons/settings.svg';
import StarsIcon from '../icons/stars.svg';
import BusinessIcon from '../icons/business.svg';

export const FORGE_MOCK: ProjectItem = {
  title: 'Forge Mock: Mock Data Platform (Architectural POC)',
  description:
    'A foundational project designed to serve as a comprehensive platform for decoupling front-end and back-end development teams while supporting integration testing in distributed environments. The initial development and architectural setup were completed, establishing a robust framework for future feature implementation.',
  sections: [
    {
      title: 'Problem & Design Rationale',
      icon: TargetIcon,
      details: [
        'This project addressed the need for modern development teams to work independently without waiting for API implementations. The architecture was specifically planned to support realistic data scenarios for integration tests and to provide a reliable mocking infrastructure for local development and CI/CD pipelines in distributed systems.',
      ],
    },
    {
      title: 'Technical Solution & Architecture',
      icon: SettingsIcon,
      details: [
        'A multi-repository architecture was defined and initially implemented, leveraging Next.js for the UI layer, ASP.NET Web API for the core mocking service logic, and a dedicated monitoring stack with Grafana and Prometheus was set up for future observability. Containerized deployment with Docker ensures consistency across environments.',
      ],
    },
    {
      title: 'Key Architectural Objectives',
      icon: StarsIcon,
      details: [
        'Schema-driven design for customizable data structures.',
        'Plan for static and dynamic API endpoint mocking with response templating.',
        'Initial setup for real-time monitoring and observability with metrics collection.',
        'Integration of Redis-based caching for high-performance data generation.',
      ],
    },
    {
      title: 'Value & Demonstrated Skill',
      icon: BusinessIcon,
      details: [
        'This project demonstrates expertise in: Distributed Systems Design, selecting a modern, scalable tech stack (Next.js, ASP.NET, Docker), and implementing DevOps best practices for monitoring and containerization. It showcases the ability to architect a solution for common microservices pain points: parallel development and integration testing complexity.',
      ],
    },
  ],
  skills: [
    { name: '.NET', type: SKILL_TYPES.BACK_END },
    { name: 'C#', type: SKILL_TYPES.BACK_END },
    { name: 'ASP.NET Web API', type: SKILL_TYPES.BACK_END },
    { name: 'EF Core', type: SKILL_TYPES.BACK_END },
    { name: 'React', type: SKILL_TYPES.FRONT_END },
    { name: 'Next.js', type: SKILL_TYPES.FRONT_END },
    { name: 'TypeScript', type: SKILL_TYPES.FRONT_END },
    { name: 'React Query', type: SKILL_TYPES.FRONT_END },
    { name: 'Aria', type: SKILL_TYPES.FRONT_END },
    { name: 'PostgreSQL', type: SKILL_TYPES.DATABASE },
    { name: 'Azure DevOps', type: SKILL_TYPES.DEV_OPS },
  ],
};
