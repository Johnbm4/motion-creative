import { motion } from 'framer-motion';
import MarketingCard from './MarketingCard';
import { useMarketing } from '../../hooks/useMarketing';
import { listContainerVariants, useMotionProfile } from '../../lib/motion';

function MarketingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20" aria-busy="true">
      {[0, 1].map((key) => (
        <div key={key} className="space-y-6 animate-pulse">
          <div className="aspect-[4/3] border border-gray-900 bg-gray-950/50" />
          <div className="h-3 w-24 bg-gray-900" />
          <div className="h-6 w-3/4 bg-gray-900" />
        </div>
      ))}
    </div>
  );
}

function MarketingError({
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

function MarketingEmpty() {
  return (
    <p className="text-gray-600 text-sm text-center py-12 border border-dashed border-gray-900">
      No marketing projects yet.
    </p>
  );
}

export default function MarketingList() {
  const { items, loading, error, refetch } = useMarketing();
  const { prefersReducedMotion } = useMotionProfile();

  if (loading) {
    return <MarketingSkeleton />;
  }

  if (error) {
    return <MarketingError message={error} onRetry={refetch} />;
  }

  if (items.length === 0) {
    return <MarketingEmpty />;
  }

  return (
    <motion.ul
      role="list"
      className="grid grid-cols-1 md:grid-cols-2 gap-20"
      variants={prefersReducedMotion ? undefined : listContainerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px', amount: 0.15 }}
    >
      {items.map((item, index) => (
        <MarketingCard key={item.id} item={item} index={index} />
      ))}
    </motion.ul>
  );
}
