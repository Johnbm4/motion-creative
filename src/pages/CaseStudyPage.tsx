import { memo, useEffect, useState } from 'react';
import CaseStudyView from '../components/portfolio/CaseStudyView';
import { fetchPortfolioProjectBySlug } from '../services/portfolioService';
import { useNavigation } from '../navigation/NavigationContext';
import type { PortfolioProject } from '../types/portfolio';

function CaseStudyPage() {
  const { projectSlug, goBack } = useNavigation();
  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!projectSlug) {
      goBack();
      return;
    }

    let cancelled = false;

    (async () => {
      setLoading(true);
      const result = await fetchPortfolioProjectBySlug(projectSlug);
      if (cancelled) return;

      if (result.error || !result.data) {
        goBack();
        return;
      }

      setProject(result.data);
      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, [projectSlug, goBack]);

  if (loading || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-px bg-whisper animate-pulse" aria-hidden />
      </div>
    );
  }

  return <CaseStudyView project={project} />;
}

export default memo(CaseStudyPage);
