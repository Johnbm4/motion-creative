import { motion } from 'framer-motion';
import { memo } from 'react';
import Scene from '../components/Scene';
import { closing } from '../data/content';
import { duration, ease, fadeIn, fadeUp, viewport } from '../lib/motion';
import { useNavigation } from '../navigation/NavigationContext';

function ClosingScene() {
  const { navigateTo } = useNavigation();

  return (
    <Scene id="closing" variant="outro" className="text-center pb-16">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex flex-col items-center gap-12 md:gap-16"
      >
        <motion.p
          variants={fadeIn}
          className="font-display text-[clamp(1.75rem,4vw,2.75rem)] text-white leading-snug max-w-lg"
        >
          {closing.line}
        </motion.p>

        <motion.button
          type="button"
          onClick={() => navigateTo('contact')}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: duration.text, ease, delay: 0.4 }}
          className="text-[10px] tracking-scene uppercase text-mist hover:text-white transition-colors duration-700 font-sans"
        >
          {closing.cta}
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: duration.text, ease, delay: 0.75 }}
          className="text-[10px] tracking-scene uppercase text-whisper font-sans"
        >
          {closing.location}
        </motion.p>
      </motion.div>
    </Scene>
  );
}

export default memo(ClosingScene);
