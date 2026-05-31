import { lazy, memo, Suspense } from 'react';
import WorldPage from './WorldPage';

const MarketingList = lazy(
  () => import('../components/marketing/MarketingList'),
);

function MarketingPage() {
  return (
    <WorldPage
      label="Marketing"
      title="Strategic communication"
      description="Campaigns and brand narratives that connect story to audience."
    >
      <Suspense fallback={null}>
        <MarketingList />
      </Suspense>
    </WorldPage>
  );
}

export default memo(MarketingPage);
