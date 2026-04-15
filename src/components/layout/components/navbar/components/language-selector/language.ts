import type { SvgComponent } from 'astro/types';

export interface Language {
  code: string;
  name: string;
  icon: SvgComponent;
}
