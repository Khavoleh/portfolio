import { PAGE_URLS } from '@shared/constants';
import type { NavLink } from '@shared/interfaces';
import ComputerIcon from './icons/computer.svg';
import MoonIcon from './icons/moon.svg';
import SunIcon from './icons/sun.svg';
import type { Theme } from './interfaces';

export const NAVIGATION_LINKS: NavLink[] = [
  { href: PAGE_URLS.HOME, label: 'home' },
  { href: PAGE_URLS.EXPERIENCE, label: 'experience' },
  { href: PAGE_URLS.PROJECTS, label: 'projects' },
  { href: PAGE_URLS.CONTACTS, label: 'contacts' },
];

const THEME_OPTIONS = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
};

export const THEMES: Theme[] = [
  { id: THEME_OPTIONS.LIGHT, icon: SunIcon },
  { id: THEME_OPTIONS.DARK, icon: MoonIcon },
  { id: THEME_OPTIONS.SYSTEM, icon: ComputerIcon },
];
