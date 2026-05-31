import { motion } from 'framer-motion';
import ProductionList from './ProductionList';

export default function ProductionSection() {
  return (
    <section
      id="production"
      className="py-32 px-6 sm:px-10 max-w-7xl mx-auto"
      aria-labelledby="production-heading"
    >
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="mb-16"
      >
        <p className="text-[10px] tracking-[0.2em] text-gray-700 uppercase mb-4">
          Ecosystem · Production
        </p>
        <h2
          id="production-heading"
          className="text-4xl sm:text-5xl font-light tracking-tight"
        >
          Cinematic Storytelling
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl leading-relaxed text-sm sm:text-base">
          Film, motion, and visual narratives crafted with precision and intent.
        </p>
      </motion.header>

      <ProductionList />
    </section>
  );
}
