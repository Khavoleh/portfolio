import type { NavLink, SocialLink } from './interfaces.ts';
import LinkedInIcon from './icons/linkedin.svg';
import TelegramIcon from './icons/telegram.svg';
import GitHubIcon from './icons/github.svg';

export const NAVIGATION_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://www.linkedin.com/in/khavol/', label: 'LinkedIn profile', icon: LinkedInIcon },
  { href: 'https://t.me/khavol', label: 'Telegram messenger', icon: TelegramIcon },
  { href: 'https://github.com/Khavoleh', label: 'GitHub account', icon: GitHubIcon },
];
