import { PAGE_URLS, SOCIALS, LANGUAGES, LANGUAGES_SHORT } from '@shared/constants.ts';
import type { NavLink, SocialLink } from '@shared/interfaces.ts';
import GitHubIcon from '@assets/github.svg';
import LinkedInIcon from '@assets/linkedin.svg';
import TelegramIcon from './icons/telegram.svg';
import SunIcon from './icons/sun.svg';
import MoonIcon from './icons/moon.svg';
import ComputerIcon from './icons/computer.svg';
import FlagEnIcon from './icons/flag-en.svg';
import FlagUkIcon from './icons/flag-uk.svg';
import type { Theme, Language } from './interfaces.ts';

export const NAVIGATION_LINKS: NavLink[] = [
  { href: PAGE_URLS.HOME, label: 'home' },
  { href: PAGE_URLS.EXPERIENCE, label: 'experience' },
  { href: PAGE_URLS.PROJECTS, label: 'projects' },
  { href: PAGE_URLS.CONTACTS, label: 'contacts' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: SOCIALS.LINKEDIN, label: 'LinkedIn profile', icon: LinkedInIcon },
  { href: SOCIALS.TELEGRAM, label: 'Telegram messenger', icon: TelegramIcon },
  { href: SOCIALS.GITHUB, label: 'GitHub account', icon: GitHubIcon },
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

export const LANGUAGES_CONFIG: Language[] = [
  { code: LANGUAGES_SHORT.EN, name: LANGUAGES.EN, icon: FlagEnIcon },
  { code: LANGUAGES_SHORT.UK, name: LANGUAGES.UK, icon: FlagUkIcon },
];
