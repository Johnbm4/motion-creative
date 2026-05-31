import { motion } from 'framer-motion';
import { memo } from 'react';
import { duration, ease, fadeUp, viewport } from '../../lib/motion';
import type { CaseStudySection as Section } from '../../types/portfolio';

interface CaseStudySectionProps {
  section: Section;
  index: number;
}

function CaseStudySection({ section, index }: CaseStudySectionProps) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="py-28 md:py-40 border-t border-whisper/20 first:border-t-0"
    >
      <p className="text-[10px] tracking-scene uppercase text-whisper mb-10 md:mb-12 font-sans">
        0{index + 1} · {section.title}
      </p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: duration.text, ease, delay: 0.12 }}
        className="text-mist text-base md:text-xl leading-relaxed max-w-2xl font-sans font-light mb-16 md:mb-20"
      >
        {section.body}
      </motion.p>

      {section.image ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: duration.slow, ease, delay: 0.2 }}
          className="w-full aspect-[16/10] md:aspect-[2/1] overflow-hidden"
        >
          <img
            src={section.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-55 grayscale"
          />
        </motion.div>
      ) : null}
    </motion.section>
  );
}

export default memo(CaseStudySection);
