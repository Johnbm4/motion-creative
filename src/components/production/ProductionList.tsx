import { motion } from 'framer-motion';
import ProductionCard from './ProductionCard';
import { useProduction } from '../../hooks/useProduction';
import { listContainerVariants, useMotionProfile } from '../../lib/motion';

function ProductionSkeleton() {
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

function ProductionError({
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

function ProductionEmpty() {
  return (
    <p className="text-gray-600 text-sm text-center py-12 border border-dashed border-gray-900">
      No production projects yet.
    </p>
  );
}

export default function ProductionList() {
  const { items, loading, error, refetch } = useProduction();
  const { prefersReducedMotion } = useMotionProfile();

  if (loading) {
    return <ProductionSkeleton />;
  }

  if (error) {
    return <ProductionError message={error} onRetry={refetch} />;
  }

  if (items.length === 0) {
    return <ProductionEmpty />;
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
        <ProductionCard key={item.id} item={item} index={index} />
      ))}
    </motion.ul>
  );
}
