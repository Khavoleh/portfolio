import { EXPERIENCE_INTRO_KEYS } from './constants';

interface ExperienceIntroText {
  description: string;
  highlight: string;
  subtitle: string;
  years: string;
}

type Translate = (key: string) => string;

export const getExperienceIntroText = (t: Translate): ExperienceIntroText => ({
  description: t(EXPERIENCE_INTRO_KEYS.description),
  highlight: t(EXPERIENCE_INTRO_KEYS.highlight),
  subtitle: t(EXPERIENCE_INTRO_KEYS.subtitle),
  years: t(EXPERIENCE_INTRO_KEYS.years),
});