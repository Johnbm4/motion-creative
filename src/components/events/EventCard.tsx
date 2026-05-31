import { motion } from 'framer-motion';
import ContentCard from '../cards/ContentCard';
import type { Event } from '../../types/event';
import { formatEventDate, formatStatusLabel } from '../../utils/format';
import { listItemVariants, useMotionProfile } from '../../lib/motion';

interface EventCardProps {
  event: Event;
  index: number;
}

const statusStyles: Record<Event['status'], string> = {
  upcoming: 'text-emerald-500/90 border-emerald-900/50',
  ongoing: 'text-amber-400/90 border-amber-900/50',
  completed: 'text-gray-500 border-gray-800',
  archived: 'text-gray-600 border-gray-900',
};

export default function EventCard({ event, index }: EventCardProps) {
  const { prefersReducedMotion } = useMotionProfile();

  return (
    <motion.li
      variants={prefersReducedMotion ? undefined : listItemVariants}
      className="list-none"
    >
      <ContentCard
        index={index}
        eyebrow="Events"
        title={event.title}
        description={event.description}
        meta={[
          { label: 'Date', value: formatEventDate(event.date) },
          { label: 'Location', value: event.location },
        ]}
        href={event.marketing_url}
        hrefLabel="Marketing"
        badge={
          <span
            className={`text-[10px] tracking-[0.15em] uppercase px-3 py-1 border ${statusStyles[event.status]}`}
          >
            {formatStatusLabel(event.status)}
          </span>
        }
      />
    </motion.li>
  );
}
