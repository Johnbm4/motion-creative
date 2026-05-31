import { motion } from 'framer-motion';
import { memo } from 'react';
import { duration, ease } from '../../lib/motion';
import { useNavigation } from '../../navigation/NavigationContext';
import type { PortfolioProject } from '../../types/portfolio';

interface PortfolioCardProps {
  project: PortfolioProject;
}

function PortfolioCard({ project }: PortfolioCardProps) {
  const { openCaseStudy } = useNavigation();

  return (
    <motion.button
      type="button"
      onClick={() => openCaseStudy(project.slug)}
      whileHover={{ opacity: 1 }}
      transition={{ duration: duration.micro, ease }}
      className="group w-full text-left cursor-pointer"
    >
      <motion.div
        className="aspect-[16/10] overflow-hidden mb-8 md:mb-10"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: duration.scene, ease }}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-50 grayscale transition-all duration-[1.4s] ease-out group-hover:opacity-75 group-hover:grayscale-[0.4]"
        />
      </motion.div>
      <p className="text-[10px] tracking-scene uppercase text-whisper mb-3 font-sans">
        {project.category} · {project.year}
      </p>
      <h3 className="font-display text-2xl md:text-3xl text-white mb-3 group-hover:text-mist transition-colors duration-700">
        {project.title}
      </h3>
      <p className="text-mist text-sm md:text-base font-sans font-light max-w-lg">
        {project.description}
      </p>
    </motion.button>
  );
}

export default memo(PortfolioCard);
