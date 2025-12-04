import { PAGE_URLS, SOCIALS } from '@shared/constants.ts';
import type { NavLink, SocialLink } from '@shared/interfaces.ts';
import GitHubIcon from '@assets/github.svg';
import LinkedInIcon from '@assets/linkedin.svg';
import TelegramIcon from './icons/telegram.svg';

export const NAVIGATION_LINKS: NavLink[] = [
  { href: PAGE_URLS.HOME, label: 'Home' },
  { href: PAGE_URLS.EXPERIENCE, label: 'Experience' },
  { href: PAGE_URLS.PROJECTS, label: 'Projects' },
  { href: PAGE_URLS.CONTACTS, label: 'Contacts' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: SOCIALS.LINKEDIN, label: 'LinkedIn profile', icon: LinkedInIcon },
  { href: SOCIALS.TELEGRAM, label: 'Telegram messenger', icon: TelegramIcon },
  { href: SOCIALS.GITHUB, label: 'GitHub account', icon: GitHubIcon },
];
