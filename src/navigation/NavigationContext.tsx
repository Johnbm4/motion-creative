import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useLenis } from 'lenis/react';
import type { NavView } from './navConfig';

interface NavigationContextValue {
  view: NavView;
  projectSlug: string | null;
  routeKey: string;
  isOpen: boolean;
  openNav: () => void;
  closeNav: () => void;
  navigateTo: (view: NavView) => void;
  openCaseStudy: (slug: string) => void;
  goBack: () => void;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<NavView>('home');
  const [projectSlug, setProjectSlug] = useState<string | null>(null);
  const [returnView, setReturnView] = useState<NavView>('work');
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  const routeKey =
    view === 'case-study' && projectSlug
      ? `case-study-${projectSlug}`
      : view;

  const scrollToTop = useCallback(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [lenis]);

  const openNav = useCallback(() => {
    lenis?.stop();
    setIsOpen(true);
  }, [lenis]);

  const closeNav = useCallback(() => {
    setIsOpen(false);
    lenis?.start();
  }, [lenis]);

  const navigateTo = useCallback(
    (next: NavView) => {
      if (next === 'case-study') return;

      setIsOpen(false);
      lenis?.start();
      setProjectSlug(null);

      if (next !== view) {
        setView(next);
        scrollToTop();
      }
    },
    [lenis, scrollToTop, view],
  );

  const openCaseStudy = useCallback(
    (slug: string) => {
      setIsOpen(false);
      lenis?.start();
      setReturnView(view === 'home' ? 'home' : 'work');
      setProjectSlug(slug);
      setView('case-study');
      scrollToTop();
    },
    [lenis, scrollToTop, view],
  );

  const goBack = useCallback(() => {
    setProjectSlug(null);
    setView(returnView);
    scrollToTop();
  }, [returnView, scrollToTop]);

  const value = useMemo(
    () => ({
      view,
      projectSlug,
      routeKey,
      isOpen,
      openNav,
      closeNav,
      navigateTo,
      openCaseStudy,
      goBack,
    }),
    [
      view,
      projectSlug,
      routeKey,
      isOpen,
      openNav,
      closeNav,
      navigateTo,
      openCaseStudy,
      goBack,
    ],
  );

  return (
    <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}
