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
        'A portfolio that practices what I preach: optimal performance, accessibility, and modern development practices. The site needed to load instantly, work perfectly for all users, and demonstrate expertise in contemporary front-end tooling.',
      ],
    },
    {
      title: 'Technical Approach',
      icon: SettingsIcon,
      details: [
        'Built with Astro for zero client-side JavaScript. Utilized Vercel for hosting and Continuous Delivery with automatic deployments. Styled with Tailwind CSS and Flowbite components for rapid, consistent UI development.',
      ],
    },
    {
      title: 'Key Features',
      icon: StarsIcon,
      details: [
        'Dark mode/theme switch with system preference detection',
        'Component-driven architecture with reusable blocks',
        'I18N with 2 languages support',
        'Fully responsive design',
      ],
    },
    {
      title: 'Why It Matters to Enterprise',
      icon: BusinessIcon,
      details: [
        'Demonstrates up-to-date knowledge of modern front-end performance optimization, familiarity with contemporary deployment practices, and commitment to UI/UX best practices.',
      ],
    },
  ],
  skills: [
    { name: 'Astro', type: SKILL_TYPES.FRONT_END },
    { name: 'TypeScript', type: SKILL_TYPES.FRONT_END },
    { name: 'Tailwind CSS', type: SKILL_TYPES.FRONT_END },
    { name: 'Flowbite', type: SKILL_TYPES.FRONT_END },
    { name: 'GitHub', type: SKILL_TYPES.DEV_OPS },
    { name: 'Vercel', type: SKILL_TYPES.DEV_OPS },
  ],
};

export const PERFORMANCE_METRICS: string[] = ['Performance', 'Accessibility', 'Best Practices', 'SEO'];
