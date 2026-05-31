import { motion } from 'framer-motion';
import EventCard from './EventCard';
import { useEvents } from '../../hooks/useEvents';
import { listContainerVariants, useMotionProfile } from '../../lib/motion';

function EventsSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8" aria-busy="true">
      {[0, 1].map((key) => (
        <div
          key={key}
          className="h-64 sm:h-72 border border-gray-900 animate-pulse bg-gray-950/50"
        />
      ))}
    </div>
  );
}

function EventsError({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="border border-gray-900 p-8 text-center">
      <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-6 text-[10px] tracking-[0.2em] uppercase text-gray-400 border border-gray-800 px-6 py-3 hover:text-white hover:border-gray-600 transition-colors duration-300"
      >
        Retry
      </button>
    </div>
  );
}

function EventsEmpty() {
  return (
    <p className="text-gray-600 text-sm text-center py-12 border border-dashed border-gray-900">
      No events scheduled yet.
    </p>
  );
}

export default function EventList() {
  const { events, loading, error, refetch } = useEvents();
  const { prefersReducedMotion } = useMotionProfile();

  if (loading) {
    return <EventsSkeleton />;
  }

  if (error) {
    return <EventsError message={error} onRetry={refetch} />;
  }

  if (events.length === 0) {
    return <EventsEmpty />;
  }

  return (
    <motion.ul
      role="list"
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
      variants={prefersReducedMotion ? undefined : listContainerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px', amount: 0.15 }}
    >
      {events.map((event, index) => (
        <EventCard key={event.id} event={event} index={index} />
      ))}
    </motion.ul>
  );
}
