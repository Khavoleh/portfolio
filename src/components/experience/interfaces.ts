import type { SvgComponent } from 'astro/types';
import type { Skill } from '@shared/skill/interfaces.ts';

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
