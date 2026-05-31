import { motion } from 'framer-motion';
import PortfolioItemCard from '../cards/PortfolioItemCard';
import type { MarketingItem } from '../../types/marketing';
import { listItemVariants, useMotionProfile } from '../../lib/motion';

interface MarketingCardProps {
  item: MarketingItem;
  index: number;
}

export default function MarketingCard({ item, index }: MarketingCardProps) {
  const { prefersReducedMotion } = useMotionProfile();

  return (
    <motion.li
      variants={prefersReducedMotion ? undefined : listItemVariants}
      className="list-none"
    >
      <PortfolioItemCard
        index={index}
        pillar="Marketing"
        title={item.title}
        category={item.category}
        description={item.description}
        imageUrl={item.image_url}
        status={item.status}
      />
    </motion.li>
  );
}
