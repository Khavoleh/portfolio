import GitHubIcon from '@assets/github.svg';
import LinkedInIcon from '@assets/linkedin.svg';
import TelegramIcon from '@assets/telegram.svg';
import { SOCIALS } from '@shared/constants';
import type { SocialLink } from '@shared/interfaces';

export const SOCIAL_LINKS: SocialLink[] = [
  { href: SOCIALS.LINKEDIN, label: 'LinkedIn', icon: LinkedInIcon, ariaKey: 'socialLinks_aria_linkedin' },
  { href: SOCIALS.TELEGRAM, label: 'Telegram', icon: TelegramIcon, ariaKey: 'socialLinks_aria_telegram' },
  { href: SOCIALS.GITHUB, label: 'GitHub', icon: GitHubIcon, ariaKey: 'socialLinks_aria_github' },
];
