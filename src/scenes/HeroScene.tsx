import { motion } from 'framer-motion';
import { memo } from 'react';
import Scene from '../components/Scene';
import { hero } from '../data/content';
import { duration, ease, fadeIn } from '../lib/motion';

function HeroScene() {
  return (
    <Scene id="hero" variant="intro" className="text-center">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-10 md:gap-14"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: duration.slow, ease, delay: 0.6 }}
          className="text-[10px] md:text-[11px] tracking-scene uppercase text-whisper font-sans"
        >
          {hero.label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.slow, ease, delay: 1.0 }}
          className="font-display text-[clamp(3rem,10vw,7.5rem)] leading-[0.95] tracking-tight text-white"
        >
          {hero.lines[0]}
          <br />
          {hero.lines[1]}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: duration.scene, ease, delay: 2.0 }}
          className="w-12 h-px bg-whisper origin-center"
          aria-hidden
        />
      </motion.div>
    </Scene>
  );
}

export default memo(HeroScene);
