import { PAGE_URLS } from '@shared/constants';
import type { NavLink } from '@shared/interfaces';

export const NAVIGATION_LINKS: NavLink[] = [
  { href: PAGE_URLS.HOME, label: 'home' },
  { href: PAGE_URLS.EXPERIENCE, label: 'experience' },
  { href: PAGE_URLS.PROJECTS, label: 'projects' },
  { href: PAGE_URLS.CONTACTS, label: 'contacts' },
];
