import type { SvgComponent } from 'astro/types';

export interface Theme {
  id: string;
  title: string;
  icon: SvgComponent;
}

export interface Language {
  code: string;
  name: string;
  icon: SvgComponent;
}
