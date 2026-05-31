import { portfolioProjects } from '../data/portfolioProjects';
import type { PortfolioProject } from '../types/portfolio';

/** Mock repository — swap implementation for Supabase/CMS later. */
export const portfolioRepository = {
  getAll(): PortfolioProject[] {
    return portfolioProjects;
  },

  getBySlug(slug: string): PortfolioProject | null {
    return portfolioProjects.find((p) => p.slug === slug) ?? null;
  },
};
