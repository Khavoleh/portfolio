import GitHubIcon from '@assets/github.svg';
import LinkedInIcon from '@assets/linkedin.svg';
import { SOCIALS } from '@shared/constants';
import type { SocialLink } from '@shared/interfaces';
import TelegramIcon from './telegram.svg';

export const SOCIAL_LINKS: SocialLink[] = [
  { href: SOCIALS.LINKEDIN, label: 'LinkedIn profile', icon: LinkedInIcon },
  { href: SOCIALS.TELEGRAM, label: 'Telegram messenger', icon: TelegramIcon },
  { href: SOCIALS.GITHUB, label: 'GitHub account', icon: GitHubIcon },
];
