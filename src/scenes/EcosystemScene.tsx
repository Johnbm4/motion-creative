import { motion } from 'framer-motion';
import { memo } from 'react';
import Scene from '../components/Scene';
import { ecosystem } from '../data/content';
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewport,
} from '../lib/motion';

function EcosystemScene() {
  return (
    <Scene id="ecosystem" variant="middle">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mb-20 md:mb-32"
      >
        <p className="text-[10px] tracking-scene uppercase text-whisper mb-8 font-sans">
          {ecosystem.label}
        </p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white leading-tight">
          {ecosystem.headline[0]}
          <br />
          {ecosystem.headline[1]}
        </h2>
      </motion.div>

      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="space-y-16 md:space-y-24 list-none"
      >
        {ecosystem.pillars.map((pillar, index) => (
          <motion.li
            key={pillar.name}
            variants={staggerItem}
            className="border-t border-whisper/40 pt-10 md:pt-12"
          >
            <span className="text-[10px] tracking-scene uppercase text-whisper block mb-6 font-sans">
              0{index + 1}
            </span>
            <h3 className="font-display text-3xl md:text-4xl text-white mb-3">
              {pillar.name}
            </h3>
            <p className="text-mist text-sm md:text-base font-sans font-light max-w-md">
              {pillar.description}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </Scene>
  );
}

export default memo(EcosystemScene);
