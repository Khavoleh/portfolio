import type { SvgComponent } from 'astro/types';

type TranslationKeys = Record<string, string>;

export interface Translations {
  en: TranslationKeys;
  uk: TranslationKeys;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink extends NavLink {
  icon: SvgComponent;
}
