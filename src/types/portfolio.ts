/** Shared status for ecosystem list items (Marketing, Production modules). */
export type PortfolioItemStatus = 'draft' | 'published' | 'archived';

export type PortfolioPillar = 'production' | 'events' | 'marketing' | 'technology';

export interface ContentCardMeta {
  label: string;
  value: string;
}

export type ProjectCategory = 'Production' | 'Events' | 'Marketing' | 'Technology';

export type CaseStudySectionKey = 'concept' | 'process' | 'execution' | 'outcome';

export interface CaseStudySection {
  key: CaseStudySectionKey;
  title: string;
  body: string;
  image?: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  /** Context — challenge or intent */
  intro: string;
  image: string;
  year: string;
  client?: string;
  sections: CaseStudySection[];
}
