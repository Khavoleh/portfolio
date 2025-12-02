export interface ExperienceSection {
  title: string;
  icon: string;
  details: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  sections: ExperienceSection[];
  focus: string[];
}
