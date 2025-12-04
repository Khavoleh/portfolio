import type { SvgComponent } from 'astro/types';

export interface Theme {
  id: string;
  title: string;
  icon: SvgComponent;
}
