import { motion } from 'framer-motion';
import { memo } from 'react';
import Scene from '../components/Scene';
import { identity } from '../data/content';
import { duration, ease, fadeUp, viewport } from '../lib/motion';

function IdentityScene() {
  return (
    <Scene id="identity" variant="middle">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <p className="text-[10px] tracking-scene uppercase text-whisper mb-16 md:mb-24 font-sans">
          {identity.label}
        </p>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.slow, ease, delay: 0.2 }}
          className="font-display text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.2] font-normal text-white max-w-3xl"
        >
          {identity.lines.map((line, index) => (
            <span key={line} className={index === 0 ? 'text-white' : 'text-mist'}>
              {line}
              {index < identity.lines.length - 1 ? <br /> : null}
            </span>
          ))}
        </motion.blockquote>
      </motion.div>
    </Scene>
  );
}

export default memo(IdentityScene);
