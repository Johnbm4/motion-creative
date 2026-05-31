import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import { useTestimonials } from '../../hooks/useTestimonials';
import { listContainerVariants, useMotionProfile } from '../../lib/motion';

function TestimonialsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20" aria-busy="true">
      {[0, 1].map((key) => (
        <div key={key} className="border-t border-gray-900 pt-8 space-y-4 animate-pulse">
          <div className="h-3 w-8 bg-gray-900" />
          <div className="h-4 w-full bg-gray-900" />
          <div className="h-4 w-5/6 bg-gray-900" />
          <div className="h-10 w-32 bg-gray-900 mt-8" />
        </div>
      ))}
    </div>
  );
}

function TestimonialsError({
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

function TestimonialsEmpty() {
  return (
    <p className="text-gray-600 text-sm text-center py-12 border border-dashed border-gray-900">
      No testimonials yet.
    </p>
  );
}

export default function TestimonialList() {
  const { testimonials, loading, error, refetch } = useTestimonials();
  const { prefersReducedMotion } = useMotionProfile();

  if (loading) {
    return <TestimonialsSkeleton />;
  }

  if (error) {
    return <TestimonialsError message={error} onRetry={refetch} />;
  }

  if (testimonials.length === 0) {
    return <TestimonialsEmpty />;
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-20"
      variants={prefersReducedMotion ? undefined : listContainerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px', amount: 0.15 }}
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
      ))}
    </motion.div>
  );
}
