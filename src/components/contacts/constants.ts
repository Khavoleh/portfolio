import type { SocialLink } from '@shared//interfaces.ts';
import { SOCIALS } from '@shared/constants.ts';
import LinkedInIcon from '@assets/linkedin.svg';
import GitHubIcon from '@assets/github.svg';

export const SOCIAL_LINKS: SocialLink[] = [
  { href: SOCIALS.LINKEDIN, label: 'LinkedIn', icon: LinkedInIcon },
  { href: SOCIALS.GITHUB, label: 'GitHub', icon: GitHubIcon },
];
