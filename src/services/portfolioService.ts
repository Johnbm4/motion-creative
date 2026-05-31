import { portfolioRepository } from '../repositories/portfolioRepository';
import type { PortfolioProject } from '../types/portfolio';

export type PortfolioServiceResult<T> =
  | { data: T; error: null }
  | { data: null; error: string };

export async function fetchPortfolioProjects(): Promise<
  PortfolioServiceResult<PortfolioProject[]>
> {
  try {
    return { data: portfolioRepository.getAll(), error: null };
  } catch {
    return { data: null, error: 'Unable to load projects.' };
  }
}

export async function fetchPortfolioProjectBySlug(
  slug: string,
): Promise<PortfolioServiceResult<PortfolioProject>> {
  try {
    const project = portfolioRepository.getBySlug(slug);
    if (!project) {
      return { data: null, error: 'Project not found.' };
    }
    return { data: project, error: null };
  } catch {
    return { data: null, error: 'Unable to load project.' };
  }
}
