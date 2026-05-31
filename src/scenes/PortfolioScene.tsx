import { motion } from 'framer-motion';
import { memo } from 'react';
import PortfolioList from '../components/portfolio/PortfolioList';
import Scene from '../components/Scene';
import { portfolio } from '../data/content';
import { fadeUp, viewport } from '../lib/motion';

function PortfolioScene() {
  return (
    <Scene id="work" variant="middle">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mb-20 md:mb-28"
      >
        <p className="text-[10px] tracking-scene uppercase text-whisper mb-8 font-sans">
          {portfolio.label}
        </p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white">
          {portfolio.headline}
        </h2>
      </motion.div>

      <PortfolioList limit={portfolio.previewCount} />
    </Scene>
  );
}

export default memo(PortfolioScene);
