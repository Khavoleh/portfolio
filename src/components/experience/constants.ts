import type { ExperienceItem } from './interfaces.ts';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Full-Stack .NET Developer & Team Lead',
    company: 'Bliscore Software (Telecommunications Analytics Project)',
    period: '01/2023 – Current',
    sections: [
      {
        title: 'Optimizing Analytical System Performance',
        icon: '🎯',
        details: [
          'The existing call analytics system suffered from slow data rendering. Initial Power BI dashboards lacked flexibility, and underlying SQL queries were inefficient.',
        ],
      },
      {
        title: 'Architecture Redesign and Data Optimization',
        icon: '🔧',
        details: [
          'Data Access Layer (DAL) Refactoring: Switched to Dapper and Native SQL for performance-critical operations (over EF Core) for granular query control.',
          'Caching Strategy: Implemented Redis caching for frequently accessed datasets, drastically reducing the load on MS SQL Server.',
          'AI Integration: Implemented API integrations for AI-driven chatbots and real-time speaker emotion analysis.',
        ],
      },
      {
        title: 'UI Performance and UX',
        icon: '🎨',
        details: [
          'UI Migration: Replaced Power BI with custom React/Kendo UI components for optimization control and tailored rendering.',
          'State Management: Utilized Redux/Zustand for efficient state handling, ensuring a fast, modern user experience.',
        ],
      },
      {
        title: 'Team & Process Management',
        icon: '👥',
        details: [
          'Led a team of up to 6 developers: Introduced Scrum methodologies, conducted technical workshops, and established rigorous code review standards. Actively mentored junior staff on best practices.',
        ],
      },
      {
        title: 'Measurable Results',
        icon: '📈',
        details: [
          'Achieved a 5x acceleration in the loading and rendering of key analytical dashboards. Improved delivery timelines through more accurate planning and collaboration.',
        ],
      },
      {
        title: 'Key Technologies',
        icon: '⚙️',
        details: ['C#, ASP.NET Web API, Redis, Dapper, React, Redux, Zustand, MS SQL Server'],
      },
    ],
    focus: [
      'Leadership + Seniority',
      'Scaling & Bottlenecks',
      'Technical Depth (Backend/DB)',
      'Full Stack Impact (React/UX)',
      'Soft Skills',
      'Impact (Metrics)',
    ],
  },
  {
    role: 'Full-Stack .NET Developer',
    company: 'Lviv Polytechnic National University (Internal Workflow Automation System)',
    period: '09/2021 – 06/2025',
    sections: [
      {
        title: 'Digitization of Document Flow',
        icon: '🎯',
        details: [
          'The existing administrative processes (e.g., student clearance forms) were paper-based, slow, and highly inefficient, requiring a reliable digital solution.',
        ],
      },
      {
        title: 'Architecture & Security Implementation',
        icon: '🔧',
        details: [
          'Backend Architecture: Designed and implemented a clean, multi-layered (Clean/Onion Architecture) solution using ASP.NET Web API and EF Core.',
          'Security: Implemented a robust authentication system using JWT and Role-Based Access Control (RBAC).',
          'DevOps: Established full CI/CD pipeline using Docker and Azure Pipelines for automated build and deployment.',
        ],
      },
      {
        title: 'Client-Side Development',
        icon: '🎨',
        details: [
          'Developed a comprehensive client interface using Angular to provide an effective and intuitive user experience for both students and administrative staff.',
        ],
      },
      {
        title: 'Implementation Results',
        icon: '📈',
        details: [
          'Successfully launched the automation system, replacing manual paper trails and significantly accelerating administrative workflows across the university.',
        ],
      },
      {
        title: 'Key Technologies',
        icon: '⚙️',
        details: ['C#, ASP.NET Web API, Angular, EF Core, JWT, Docker, Azure Pipelines, MS SQL Server'],
      },
    ],
    focus: ['Zero-to-One Ownership', 'System Creation', 'DevOps & Clean Arch', 'E2E Skills', 'Reliability'],
  },
];
