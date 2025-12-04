import type { SvgComponent } from 'astro/types';

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink extends NavLink {
  icon: SvgComponent;
}
