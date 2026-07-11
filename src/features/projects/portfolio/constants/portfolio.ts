import BusinessIcon from '../../icons/business.svg';
import SettingsIcon from '../../icons/settings.svg';
import StarsIcon from '../../icons/stars.svg';
import TargetIcon from '../../icons/target.svg';
import type { ProjectItem } from '../../project-item';

export const PORTFOLIO: ProjectItem = {
  title: 'portfolio_title',
  description: 'portfolio_description',
  sections: [
    {
      title: 'portfolio_section_0_title',
      icon: TargetIcon,
      details: ['portfolio_section_0_details_0'],
    },
    {
      title: 'portfolio_section_1_title',
      icon: SettingsIcon,
      details: ['portfolio_section_1_details_0'],
    },
    {
      title: 'portfolio_section_2_title',
      icon: StarsIcon,
      details: [
        'portfolio_section_2_details_0',
        'portfolio_section_2_details_1',
        'portfolio_section_2_details_2',
        'portfolio_section_2_details_3',
      ],
    },
    {
      title: 'portfolio_section_3_title',
      icon: BusinessIcon,
      details: ['portfolio_section_3_details_0'],
    },
  ],
  skills: ['Astro', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'GitHub', 'Cloudflare'],
};
