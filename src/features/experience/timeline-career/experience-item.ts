import type { SvgComponent } from 'astro/types';

interface ExperienceSection {
  title: string;
  icon: SvgComponent;
  details: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  sector: string;
  period: string;
  skills: string[];
  sections: ExperienceSection[];
}
