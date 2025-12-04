import type { ProjectItem } from '../interfaces.ts';
import { SKILL_TYPES } from '@shared/skill/constants.ts';
import TargetIcon from '../icons/target.svg';
import SettingsIcon from '../icons/settings.svg';
import StarsIcon from '../icons/stars.svg';
import BusinessIcon from '../icons/business.svg';

export const PORTFOLIO: ProjectItem = {
  title: 'Portfolio',
  description:
    'A highly accessible, professional portfolio showcasing commitment to Core Web Vitals and superior web performance.',
  sections: [
    {
      title: 'The Goal',
      icon: TargetIcon,
      details: [
        'Create a portfolio that practices what I preach: optimal performance, accessibility, and modern development practices. The site needed to load instantly, work perfectly for all users, and demonstrate expertise in contemporary front-end tooling.',
      ],
    },
    {
      title: 'Technical Approach',
      icon: SettingsIcon,
      details: [
        'Built with Astro for zero client-side JavaScript by default (MPA strategy). Utilized Vercel for hosting and Continuous Delivery with automatic deployments. Implemented a component-driven architecture with React Islands for interactive elements.',
      ],
    },
    {
      title: 'Key Features',
      icon: StarsIcon,
      details: [
        'Dark mode/theme switch with system preference detection',
        'Component-driven architecture with reusable blocks',
        "Optimized images with Astro's Image component",
        'Fully responsive design with mobile-first approach',
      ],
    },
    {
      title: 'Why It Matters to Enterprise',
      icon: BusinessIcon,
      details: [
        'Demonstrates up-to-date knowledge of modern front-end performance optimization, familiarity with contemporary deployment practices, and commitment to UI/UX best practices. Shows ability to make strategic technology choices based on project requirements.',
      ],
    },
  ],
  skills: [
    { name: 'Astro', type: SKILL_TYPES.FRONT_END },
    { name: 'TypeScript', type: SKILL_TYPES.FRONT_END },
    { name: 'Tailwind CSS', type: SKILL_TYPES.FRONT_END },
    { name: 'Vercel', type: SKILL_TYPES.DEV_OPS },
  ],
};

export const PERFORMANCE_METRICS: string[] = ['Performance', 'Accessibility', 'Best Practices', 'SEO'];
