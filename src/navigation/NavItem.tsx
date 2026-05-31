import { memo } from 'react';
import { motion } from 'framer-motion';
import { duration, ease } from '../lib/motion';
import type { NavItemConfig } from './navConfig';
import { useNavigation } from './NavigationContext';

interface NavItemProps {
  item: NavItemConfig;
  index: number;
  isActive: boolean;
}

function NavItem({ item, index, isActive }: NavItemProps) {
  const { navigateTo } = useNavigation();

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: duration.text, ease, delay: index * 0.1 },
        },
      }}
      className="list-none"
    >
      <motion.button
        type="button"
        onClick={() => navigateTo(item.id)}
        whileHover={{ x: 10, opacity: 1 }}
        transition={{ duration: duration.micro, ease }}
        className="group text-left w-full py-3 md:py-4"
        aria-current={isActive ? 'page' : undefined}
      >
        <span
          className={`font-display text-[clamp(2.5rem,8vw,5.5rem)] leading-none transition-colors duration-700 ${
            isActive ? 'text-white' : 'text-mist group-hover:text-white'
          }`}
        >
          {item.label}
        </span>
        <span className="block mt-3 text-[10px] tracking-scene uppercase text-whisper font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          {item.subtitle}
        </span>
      </motion.button>
    </motion.li>
  );
}

export default memo(NavItem);
