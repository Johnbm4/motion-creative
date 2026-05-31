import { lazy, memo, Suspense } from 'react';
import HeroScene from './HeroScene';

const IdentityScene = lazy(() => import('./IdentityScene'));
const PhilosophyScene = lazy(() => import('./PhilosophyScene'));
const EcosystemScene = lazy(() => import('./EcosystemScene'));
const PortfolioScene = lazy(() => import('./PortfolioScene'));
const ClosingScene = lazy(() => import('./ClosingScene'));

function Home() {
  return (
    <>
      <HeroScene />
      <Suspense fallback={null}>
        <IdentityScene />
        <PhilosophyScene />
        <EcosystemScene />
        <PortfolioScene />
        <ClosingScene />
      </Suspense>
    </>
  );
}

export default memo(Home);
