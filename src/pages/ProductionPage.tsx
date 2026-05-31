import { lazy, memo, Suspense } from 'react';
import WorldPage from './WorldPage';

const ProductionList = lazy(
  () => import('../components/production/ProductionList'),
);

function ProductionPage() {
  return (
    <WorldPage
      label="Production"
      title="Cinematic storytelling"
      description="Film, motion, and visual narratives crafted with precision and intent."
    >
      <Suspense fallback={null}>
        <ProductionList />
      </Suspense>
    </WorldPage>
  );
}

export default memo(ProductionPage);
