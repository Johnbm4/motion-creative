import { motion } from 'framer-motion';
import EventList from './EventList';

export default function EventsSection() {
  return (
    <section
      id="events"
      className="py-32 px-6 sm:px-10 max-w-7xl mx-auto"
      aria-labelledby="events-heading"
    >
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="mb-12 sm:mb-16"
      >
        <p className="text-[10px] tracking-[0.2em] text-gray-700 uppercase mb-4">
          Ecosystem · Events
        </p>
        <h2
          id="events-heading"
          className="text-4xl sm:text-5xl font-light tracking-tight"
        >
          Immersive Experiences
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl leading-relaxed text-sm sm:text-base">
          Live activations connected to marketing and technology — one modular
          system across your portfolio.
        </p>
      </motion.header>

      <EventList />
    </section>
  );
}
