import type { Skill } from '@shared/components';
import type { SvgComponent } from 'astro/types';

export interface ExperienceSection {
  title: string;
  icon: SvgComponent;
  details: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  sector: string;
  period: string;
  skills: Skill[];
  sections: ExperienceSection[];
}
