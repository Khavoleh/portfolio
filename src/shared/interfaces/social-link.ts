import type { SvgComponent } from 'astro/types';
import type { NavLink } from './nav-link';

export interface SocialLink extends NavLink {
  icon: SvgComponent;
  ariaKey?: string;
}
