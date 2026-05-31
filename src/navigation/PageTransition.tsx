import { AnimatePresence, motion } from 'framer-motion';
import { memo, type ReactNode } from 'react';
import { pageTransition } from '../lib/motion';
import { useNavigation } from './NavigationContext';

function PageTransition({ children }: { children: ReactNode }) {
  const { routeKey } = useNavigation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default memo(PageTransition);
