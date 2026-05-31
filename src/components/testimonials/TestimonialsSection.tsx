import { motion } from 'framer-motion';
import TestimonialList from './TestimonialList';

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-32 px-6 sm:px-10 max-w-7xl mx-auto"
      aria-labelledby="testimonials-heading"
    >
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="mb-16"
      >
        <p className="text-[10px] tracking-[0.2em] text-gray-700 uppercase mb-4">
          Voices
        </p>
        <h2
          id="testimonials-heading"
          className="text-4xl sm:text-5xl font-light tracking-tight"
        >
          Testimonials
        </h2>
      </motion.header>

      <TestimonialList />
    </section>
  );
}
