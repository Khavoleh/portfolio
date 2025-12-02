import type { SvgComponent } from 'astro/types';
import type { ImageMetadata } from 'astro';

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink extends NavLink {
  icon: SvgComponent | ImageMetadata;
}
