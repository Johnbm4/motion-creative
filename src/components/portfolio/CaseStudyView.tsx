import { motion, useScroll, useTransform } from 'framer-motion';
import { memo, useRef } from 'react';
import { duration, ease, fadeUp, viewport, useMotionProfile } from '../../lib/motion';
import { useNavigation } from '../../navigation/NavigationContext';
import type { PortfolioProject } from '../../types/portfolio';
import CaseStudySection from './CaseStudySection';

interface CaseStudyViewProps {
  project: PortfolioProject;
}

function CaseStudyView({ project }: CaseStudyViewProps) {
  const { goBack } = useNavigation();
  const heroRef = useRef<HTMLElement>(null);
  const { disableParallax } = useMotionProfile();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    disableParallax ? ['0%', '0%'] : ['0%', '15%'],
  );

  return (
    <article className="bg-void">
      <button
        type="button"
        onClick={goBack}
        className="fixed top-10 left-8 md:left-14 z-50 text-[10px] tracking-scene uppercase text-whisper hover:text-white transition-colors duration-700 font-sans mix-blend-difference"
      >
        Back
      </button>

      {/* Opening scene — fullscreen media */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
          className="absolute inset-0 motion-layer"
        >
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.slow, ease, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 px-8 md:px-20 lg:px-32 pb-16 md:pb-24 max-w-5xl"
        >
          <p className="text-[10px] tracking-scene uppercase text-whisper mb-6 font-sans">
            {project.category} · {project.year}
            {project.client ? ` · ${project.client}` : ''}
          </p>
          <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] text-white leading-[0.9]">
            {project.title}
          </h1>
        </motion.div>
      </section>

      {/* Context */}
      <section className="min-h-[50vh] flex flex-col justify-center px-8 md:px-20 lg:px-32 py-28 md:py-40 max-w-5xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-[10px] tracking-scene uppercase text-whisper mb-10 font-sans"
        >
          Context
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: duration.slow, ease }}
          className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] text-mist leading-relaxed"
        >
          {project.intro}
        </motion.p>
      </section>

      {/* Narrative sections — vertical film flow */}
      <div className="px-8 md:px-20 lg:px-32 max-w-5xl mx-auto pb-32">
        {project.sections.map((section, index) => (
          <CaseStudySection key={section.key} section={section} index={index} />
        ))}
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: duration.scene, ease }}
        className="px-8 md:px-20 lg:px-32 max-w-5xl mx-auto pb-32 pt-8 border-t border-whisper/30 text-center"
      >
        <button
          type="button"
          onClick={goBack}
          className="text-[10px] tracking-scene uppercase text-mist hover:text-white transition-colors duration-700 font-sans"
        >
          Return to work
        </button>
      </motion.footer>
    </article>
  );
}

export default memo(CaseStudyView);
