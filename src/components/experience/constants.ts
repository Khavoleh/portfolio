export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  challenge: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    details: string[];
  };
  frontend?: {
    title: string;
    details: string[];
  };
  leadership?: {
    title: string;
    description: string;
  };
  impact: {
    title: string;
    description: string;
  };
  stack: {
    title: string;
    technologies: string;
  };
  focus: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Full-Stack .NET Developer & Team Lead',
    company: 'Bliscore Software (Telecommunications Analytics Project)',
    period: '01/2023 – Current',
    challenge: {
      title: 'Optimizing Analytical System Performance',
      description:
        'The existing call analytics system suffered from slow data rendering. Initial Power BI dashboards lacked flexibility, and underlying SQL queries were inefficient.',
    },
    solution: {
      title: 'Architecture Redesign and Data Optimization',
      details: [
        'Data Access Layer (DAL) Refactoring: Switched to Dapper and Native SQL for performance-critical operations (over EF Core) for granular query control.',
        'Caching Strategy: Implemented Redis caching for frequently accessed datasets, drastically reducing the load on MS SQL Server.',
        'AI Integration: Implemented API integrations for AI-driven chatbots and real-time speaker emotion analysis.',
      ],
    },
    frontend: {
      title: 'UI Performance and UX',
      details: [
        'UI Migration: Replaced Power BI with custom React/Kendo UI components for optimization control and tailored rendering.',
        'State Management: Utilized Redux/Zustand for efficient state handling, ensuring a fast, modern user experience.',
      ],
    },
    leadership: {
      title: 'Team & Process Management',
      description:
        'Led a team of up to 6 developers: Introduced Scrum methodologies, conducted technical workshops, and established rigorous code review standards. Actively mentored junior staff on best practices.',
    },
    impact: {
      title: 'Measurable Results',
      description:
        'Achieved a 5x acceleration in the loading and rendering of key analytical dashboards. Improved delivery timelines through more accurate planning and collaboration.',
    },
    stack: {
      title: 'Key Technologies',
      technologies: 'C#, ASP.NET Web API, Redis, Dapper, React, Redux, Zustand, MS SQL Server',
    },
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
    challenge: {
      title: 'Digitization of Document Flow',
      description:
        'The existing administrative processes (e.g., student clearance forms) were paper-based, slow, and highly inefficient, requiring a reliable digital solution.',
    },
    solution: {
      title: 'Architecture & Security Implementation',
      details: [
        'Backend Architecture: Designed and implemented a clean, multi-layered (Clean/Onion Architecture) solution using ASP.NET Web API and EF Core.',
        'Security: Implemented a robust authentication system using JWT and Role-Based Access Control (RBAC).',
        'DevOps: Established full CI/CD pipeline using Docker and Azure Pipelines for automated build and deployment.',
      ],
    },
    frontend: {
      title: 'Client-Side Development',
      details: [
        'Developed a comprehensive client interface using Angular to provide an effective and intuitive user experience for both students and administrative staff.',
      ],
    },
    impact: {
      title: 'Implementation Results',
      description:
        'Successfully launched the automation system, replacing manual paper trails and significantly accelerating administrative workflows across the university.',
    },
    stack: {
      title: 'Key Technologies',
      technologies: 'C#, ASP.NET Web API, Angular, EF Core, JWT, Docker, Azure Pipelines, MS SQL Server',
    },
    focus: ['Zero-to-One Ownership', 'System Creation', 'DevOps & Clean Arch', 'E2E Skills', 'Reliability'],
  },
];
