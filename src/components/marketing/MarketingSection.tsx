import { motion } from 'framer-motion';
import MarketingList from './MarketingList';

export default function MarketingSection() {
  return (
    <section
      id="marketing"
      className="py-32 px-6 sm:px-10 max-w-7xl mx-auto"
      aria-labelledby="marketing-heading"
    >
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="mb-16"
      >
        <p className="text-[10px] tracking-[0.2em] text-gray-700 uppercase mb-4">
          Ecosystem · Marketing
        </p>
        <h2
          id="marketing-heading"
          className="text-4xl sm:text-5xl font-light tracking-tight"
        >
          Strategic Communication
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl leading-relaxed text-sm sm:text-base">
          Campaigns and brand narratives that connect your story to the right
          audience.
        </p>
      </motion.header>

      <MarketingList />
    </section>
  );
}
