import { motion } from 'framer-motion';
import { memo } from 'react';
import Scene from '../components/Scene';
import { philosophy } from '../data/company';
import { duration, ease, fadeUp, viewport } from '../lib/motion';

function PhilosophyScene() {
  return (
    <Scene id="philosophy" variant="middle" className="text-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex flex-col items-center"
      >
        <p className="text-[10px] tracking-scene uppercase text-whisper mb-16 md:mb-20 font-sans">
          {philosophy.label}
        </p>

        <div className="space-y-8 md:space-y-12">
          {philosophy.lines.map((line, index) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: duration.slow,
                ease,
                delay: index * 0.2,
              }}
              className="font-display text-[clamp(1.75rem,4vw,3rem)] text-white leading-snug"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </Scene>
  );
}

export default memo(PhilosophyScene);
