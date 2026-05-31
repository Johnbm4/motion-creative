import { memo, useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  getSceneOpacityRange,
  parallax,
  useMotionProfile,
} from '../lib/motion';

type SceneVariant = 'intro' | 'middle' | 'outro';

interface SceneProps {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: SceneVariant;
  ambient?: ReactNode;
}

const DefaultAmbient = memo(function DefaultAmbient({ label }: { label?: string }) {
  return (
    <>
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(70vw,32rem)] h-[min(70vw,32rem)] rounded-full bg-white/[0.015] blur-3xl" />
      {label ? (
        <span
          className="absolute bottom-16 right-8 md:right-24 font-display text-[clamp(5rem,18vw,14rem)] leading-none text-white/[0.025] select-none pointer-events-none"
          aria-hidden
        >
          {label}
        </span>
      ) : null}
    </>
  );
});

function Scene({
  id,
  children,
  className = '',
  variant = 'middle',
  ambient,
}: SceneProps) {
  const ref = useRef<HTMLElement>(null);
  const { disableParallax } = useMotionProfile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const { input, output } = getSceneOpacityRange(variant);
  const sceneOpacity = useTransform(scrollYProgress, input, output);

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    disableParallax ? ['0%', '0%'] : [parallax.background.from, parallax.background.to],
  );

  const fgY = useTransform(
    scrollYProgress,
    [0, 1],
    disableParallax ? ['0%', '0%'] : [parallax.foreground.from, parallax.foreground.to],
  );

  const ambientOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.2, 0.55, 0.55, 0.2]);

  const label = id ? id.charAt(0).toUpperCase() : undefined;

  return (
    <section
      ref={ref}
      id={id}
      className="scene-section relative h-[155vh] md:h-[175vh]"
    >
      <motion.div
        style={{ opacity: sceneOpacity }}
        className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden"
      >
        {/* Background layer — moves slower */}
        <motion.div
          style={{ y: bgY, opacity: ambientOpacity }}
          className="absolute inset-0 pointer-events-none motion-layer"
          aria-hidden
        >
          {ambient ?? <DefaultAmbient label={label} />}
        </motion.div>

        {/* Soft vignette for scene-to-scene dissolve */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-void/80 via-transparent to-void/80"
          aria-hidden
        />

        {/* Foreground layer — moves slightly faster */}
        <motion.div
          style={{ y: fgY }}
          className={`relative z-10 mx-auto w-full max-w-5xl px-8 md:px-20 lg:px-32 ${className}`}
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default memo(Scene);
