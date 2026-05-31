import { motion } from 'framer-motion';
import { memo } from 'react';
import { portfolioRepository } from '../../repositories/portfolioRepository';
import { staggerContainer, staggerItem } from '../../lib/motion';
import PortfolioCard from './PortfolioCard';

interface PortfolioListProps {
  limit?: number;
}

/** Single-column film strip — not a grid gallery */
function PortfolioList({ limit }: PortfolioListProps) {
  const projects = limit
    ? portfolioRepository.getAll().slice(0, limit)
    : portfolioRepository.getAll();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8%', amount: 0.12 }}
      className="flex flex-col gap-32 md:gap-48"
    >
      {projects.map((project) => (
        <motion.div key={project.slug} variants={staggerItem} className="w-full">
          <PortfolioCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default memo(PortfolioList);
