import type { ExperienceItem } from './types';

type Translate = (key: string) => string;

export const getTranslatedExperienceData = (data: ExperienceItem[], t: Translate): ExperienceItem[] =>
  data.map((experience) => ({
    ...experience,
    company: t(experience.company),
    period: t(experience.period),
    role: t(experience.role),
    sector: t(experience.sector),
    sections: experience.sections.map((section) => ({
      ...section,
      details: t(section.details),
      title: t(section.title),
    })),
  }));