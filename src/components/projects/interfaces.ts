import type { Skill } from '@shared/skill/interfaces.ts';
import type { SvgComponent } from 'astro/types';

export interface ProjectSection {
  title: string;
  icon: SvgComponent;
  details: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  sections: ProjectSection[];
  skills: Skill[];
}
