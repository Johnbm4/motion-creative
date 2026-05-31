import { lazy, memo, Suspense } from 'react';
import { useNavigation } from '../navigation/NavigationContext';

const HomePage = lazy(() => import('./HomePage'));
const AboutPage = lazy(() => import('./AboutPage'));
const ProductionPage = lazy(() => import('./ProductionPage'));
const EventsPage = lazy(() => import('./EventsPage'));
const MarketingPage = lazy(() => import('./MarketingPage'));
const WorkPage = lazy(() => import('./WorkPage'));
const ContactPage = lazy(() => import('./ContactPage'));
const CaseStudyPage = lazy(() => import('./CaseStudyPage'));

function PageRouter() {
  const { view } = useNavigation();

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-px bg-whisper animate-pulse" aria-hidden />
        </div>
      }
    >
      {view === 'home' && <HomePage />}
      {view === 'about' && <AboutPage />}
      {view === 'production' && <ProductionPage />}
      {view === 'events' && <EventsPage />}
      {view === 'marketing' && <MarketingPage />}
      {view === 'work' && <WorkPage />}
      {view === 'contact' && <ContactPage />}
      {view === 'case-study' && <CaseStudyPage />}
    </Suspense>
  );
}

export default memo(PageRouter);
