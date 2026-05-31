import { memo, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { duration, ease, fadeUp } from '../lib/motion';

interface WorldPageProps {
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
}

function WorldPage({ label, title, description, children }: WorldPageProps) {
  return (
    <div className="min-h-screen pb-32">
      <motion.header
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="min-h-[50vh] flex flex-col justify-end px-8 md:px-20 lg:px-32 max-w-5xl mx-auto pb-16 md:pb-24"
      >
        <p className="text-[10px] tracking-scene uppercase text-whisper mb-8 font-sans">
          {label}
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-white leading-tight">
          {title}
        </h1>
        {description ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: duration.text, ease, delay: 0.4 }}
            className="mt-8 text-mist text-sm md:text-base max-w-lg font-sans font-light leading-relaxed"
          >
            {description}
          </motion.p>
        ) : null}
      </motion.header>

      <div className="px-8 md:px-20 lg:px-32 max-w-5xl mx-auto">{children}</div>
    </div>
  );
}

export default memo(WorldPage);
