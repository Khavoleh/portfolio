import GitHubIcon from '@assets/github.svg';
import LinkedInIcon from '@assets/linkedin.svg';
import { SOCIALS } from '@shared/constants.ts';
import type { SocialLink } from '@shared/interfaces.ts';

export const SOCIAL_LINKS: SocialLink[] = [
  { href: SOCIALS.LINKEDIN, label: 'LinkedIn', icon: LinkedInIcon },
  { href: SOCIALS.GITHUB, label: 'GitHub', icon: GitHubIcon },
];
