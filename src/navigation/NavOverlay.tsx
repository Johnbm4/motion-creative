import { AnimatePresence, motion } from 'framer-motion';
import { memo, useEffect } from 'react';
import { duration, ease, staggerContainer } from '../lib/motion';
import { navItems } from './navConfig';
import { useNavigation } from './NavigationContext';
import NavItem from './NavItem';

function NavOverlay() {
  const { isOpen, closeNav, view } = useNavigation();

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeNav();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, closeNav]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          key="nav-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration.scene, ease }}
          className="fixed inset-0 z-50 flex flex-col justify-center px-8 md:px-20 lg:px-32 bg-void/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <motion.button
            type="button"
            onClick={closeNav}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.text, ease, delay: 0.2 }}
            className="absolute top-10 right-8 md:top-14 md:right-14 text-[10px] tracking-scene uppercase text-whisper hover:text-white transition-colors duration-700 font-sans"
          >
            Close
          </motion.button>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.text, ease, delay: 0.15 }}
            className="absolute top-10 left-8 md:top-14 md:left-14 text-[10px] tracking-scene uppercase text-whisper font-sans"
          >
            Motion Creative
          </motion.p>

          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-full max-w-4xl mx-auto"
            aria-label="Site navigation"
          >
            <ul className="space-y-2 md:space-y-4">
              {navItems.map((item, index) => (
                <NavItem
                  key={item.id}
                  item={item}
                  index={index}
                  isActive={
                    view === item.id ||
                    (view === 'case-study' && item.id === 'work')
                  }
                />
              ))}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: duration.scene, ease, delay: 0.5 }}
            className="absolute bottom-14 left-1/2 -translate-x-1/2 w-16 h-px bg-whisper/50 origin-center"
            aria-hidden
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default memo(NavOverlay);
