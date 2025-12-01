import type { NavLink, SocialLink } from './interfaces.ts';

export const NAVIGATION_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const FOOTER_ICON_PATH = '/icons/footer/';

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://www.linkedin.com/in/khavol/', label: 'LinkedIn profile', icon: `${FOOTER_ICON_PATH}linkedin.svg` },
  { href: 'https://t.me/khavol', label: 'Telegram messenger', icon: `${FOOTER_ICON_PATH}telegram.svg` },
  { href: 'https://github.com/Khavoleh', label: 'GitHub account', icon: `${FOOTER_ICON_PATH}github.svg` },
];
