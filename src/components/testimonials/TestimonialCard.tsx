import { motion } from 'framer-motion';
import type { Testimonial } from '../../types/testimonial';
import { listItemVariants, useMotionProfile } from '../../lib/motion';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const { prefersReducedMotion } = useMotionProfile();
  const authorLine = [testimonial.author_role, testimonial.company]
    .filter(Boolean)
    .join(' · ');

  return (
    <motion.blockquote
      variants={prefersReducedMotion ? undefined : listItemVariants}
      className="border-t border-gray-900 pt-8 group"
    >
      <span className="text-[10px] tracking-[0.2em] text-gray-700 uppercase block mb-6">
        {String(index + 1).padStart(2, '0')}
      </span>

      <p className="text-lg sm:text-xl font-light leading-relaxed text-gray-300 group-hover:text-white transition-colors duration-500">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <footer className="mt-8 flex items-center gap-4">
        {testimonial.avatar_url ? (
          <img
            src={testimonial.avatar_url}
            alt=""
            className="h-10 w-10 rounded-full object-cover opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <div className="h-10 w-10 rounded-full border border-gray-900 flex items-center justify-center text-[10px] text-gray-600 uppercase">
            {testimonial.author_name.charAt(0)}
          </div>
        )}

        <div>
          <cite className="not-italic text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
            {testimonial.author_name}
          </cite>
          {authorLine ? (
            <p className="text-[10px] tracking-[0.15em] text-gray-600 uppercase mt-1">
              {authorLine}
            </p>
          ) : null}
        </div>
      </footer>
    </motion.blockquote>
  );
}
