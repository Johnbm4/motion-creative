import { memo } from 'react';
import { motion } from 'framer-motion';
import { duration, ease } from '../lib/motion';
import { useNavigation } from './NavigationContext';

function NavTrigger() {
  const { isOpen, openNav } = useNavigation();

  if (isOpen) return null;

  return (
    <motion.button
      type="button"
      onClick={openNav}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration.slow, ease, delay: 2.4 }}
      className="fixed bottom-10 right-8 md:bottom-14 md:right-14 z-40 group"
      aria-label="Open navigation"
    >
      <span className="flex items-center gap-3 text-[10px] tracking-scene uppercase text-whisper group-hover:text-white transition-colors duration-700 font-sans">
        <span className="block w-6 h-px bg-whisper group-hover:bg-white transition-colors duration-700" />
        Explore
      </span>
    </motion.button>
  );
}

export default memo(NavTrigger);
