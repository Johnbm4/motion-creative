import { motion } from 'framer-motion';
import PortfolioItemCard from '../cards/PortfolioItemCard';
import type { ProductionItem } from '../../types/production';
import { listItemVariants, useMotionProfile } from '../../lib/motion';

interface ProductionCardProps {
  item: ProductionItem;
  index: number;
}

export default function ProductionCard({ item, index }: ProductionCardProps) {
  const { prefersReducedMotion } = useMotionProfile();

  return (
    <motion.li
      variants={prefersReducedMotion ? undefined : listItemVariants}
      className="list-none"
    >
      <PortfolioItemCard
        index={index}
        pillar="Production"
        title={item.title}
        category={item.category}
        description={item.description}
        imageUrl={item.image_url}
        status={item.status}
      />
    </motion.li>
  );
}
