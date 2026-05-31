import { useReducedMotion, type Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

/** Cinematic easing — slow, no bounce. */
export const ease = [0.25, 0.1, 0.25, 1] as const;

export const duration = {
  slow: 2.2,
  scene: 1.8,
  text: 1.4,
  micro: 1.0,
} as const;

export const parallax = {
  background: { from: '10%', to: '-10%' },
  foreground: { from: '-5%', to: '5%' },
} as const;

export const viewport = {
  once: true,
  margin: '-8%',
  amount: 0.25,
} as const;

export const pageTransition = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.015 },
  transition: { duration: duration.scene, ease },
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.scene, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.slow, ease },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.28,
      delayChildren: 0.4,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.text, ease },
  },
};

export const listContainerVariants = staggerContainer;
export const listItemVariants = staggerItem;

function detectLowEndDevice(): boolean {
  if (typeof window === 'undefined') return false;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const lowMemory =
    'deviceMemory' in navigator &&
    (navigator as Navigator & { deviceMemory?: number }).deviceMemory! <= 4;
  const lowCores = (navigator.hardwareConcurrency ?? 8) <= 4;

  return reducedMotion || (coarsePointer && (lowMemory || lowCores));
}

export function useMotionProfile() {
  const prefersReducedMotion = useReducedMotion();
  const [disableParallax, setDisableParallax] = useState(() =>
    typeof window === 'undefined' ? true : detectLowEndDevice(),
  );

  useEffect(() => {
    setDisableParallax(Boolean(prefersReducedMotion) || detectLowEndDevice());
  }, [prefersReducedMotion]);

  return {
    prefersReducedMotion: Boolean(prefersReducedMotion),
    disableParallax,
    staggerChildren: prefersReducedMotion ? 0 : 0.28,
    itemDuration: prefersReducedMotion ? 0 : duration.text,
    itemY: prefersReducedMotion ? 0 : 18,
  };
}

export function getSceneOpacityRange(variant: 'intro' | 'middle' | 'outro') {
  switch (variant) {
    case 'intro':
      return {
        input: [0, 0.08, 0.72, 1] as number[],
        output: [1, 1, 1, 0] as number[],
      };
    case 'outro':
      return {
        input: [0, 0.2, 0.92, 1] as number[],
        output: [0, 1, 1, 1] as number[],
      };
    default:
      return {
        input: [0, 0.16, 0.84, 1] as number[],
        output: [0, 1, 1, 0] as number[],
      };
  }
}
