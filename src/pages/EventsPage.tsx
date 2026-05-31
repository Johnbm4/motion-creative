import { lazy, memo, Suspense } from 'react';
import WorldPage from './WorldPage';

const EventList = lazy(() => import('../components/events/EventList'));

function EventsPage() {
  return (
    <WorldPage
      label="Events"
      title="Immersive experiences"
      description="Live activations that transform space into narrative."
    >
      <Suspense fallback={null}>
        <EventList />
      </Suspense>
    </WorldPage>
  );
}

export default memo(EventsPage);
