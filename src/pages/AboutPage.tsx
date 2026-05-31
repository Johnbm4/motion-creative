import { motion } from 'framer-motion';
import { memo } from 'react';
import { about, capabilities, philosophy } from '../data/company';
import {
  duration,
  ease,
  fadeUp,
  staggerContainer,
  staggerItem,
  viewport,
} from '../lib/motion';
import { useNavigation } from '../navigation/NavigationContext';
import type { NavView } from '../navigation/navConfig';

function AboutPage() {
  const { navigateTo } = useNavigation();

  const openCapability = (id: string) => {
    const map: Record<string, NavView> = {
      production: 'production',
      events: 'events',
      marketing: 'marketing',
      technology: 'work',
    };
    navigateTo(map[id] ?? 'work');
  };

  return (
    <div className="min-h-screen pb-32">
      <motion.header
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: duration.slow, ease }}
        className="min-h-[60vh] flex flex-col justify-end px-8 md:px-20 lg:px-32 max-w-5xl mx-auto pb-20 md:pb-28"
      >
        <p className="text-[10px] tracking-scene uppercase text-whisper mb-8 font-sans">
          {about.label}
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-white leading-tight mb-10">
          {about.headline}
        </h1>
        <p className="text-mist text-base md:text-lg leading-relaxed max-w-2xl font-sans font-light">
          {about.body}
        </p>
      </motion.header>

      <section className="px-8 md:px-20 lg:px-32 max-w-5xl mx-auto py-24 md:py-32 border-t border-whisper/30">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-20"
        >
          <p className="text-[10px] tracking-scene uppercase text-whisper mb-12 font-sans">
            Capabilities
          </p>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="space-y-16 md:space-y-20 list-none"
        >
          {capabilities.map((cap) => (
            <motion.li key={cap.id} variants={staggerItem}>
              <button
                type="button"
                onClick={() => openCapability(cap.id)}
                className="group text-left w-full"
              >
                <h2 className="font-display text-3xl md:text-4xl text-white mb-4 group-hover:text-mist transition-colors duration-700">
                  {cap.title}
                </h2>
                {cap.lines.map((line) => (
                  <p
                    key={line}
                    className="text-mist text-sm md:text-base font-sans font-light mb-1"
                  >
                    {line}
                  </p>
                ))}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section className="px-8 md:px-20 lg:px-32 max-w-5xl mx-auto py-24 md:py-32 border-t border-whisper/30">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="text-[10px] tracking-scene uppercase text-whisper mb-12 font-sans">
            {philosophy.label}
          </p>
          <div className="space-y-6">
            {philosophy.lines.map((line) => (
              <p
                key={line}
                className="font-display text-2xl md:text-3xl text-white leading-snug"
              >
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default memo(AboutPage);
