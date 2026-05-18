import type { Transition, Variants } from 'framer-motion'

/** Timing cinematográfico — lento, elegante, sem exagero tech */
export const motionTransition = {
  fast: { duration: 0.35, ease: [0.45, 0, 0.55, 1] } satisfies Transition,
  base: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } satisfies Transition,
  slow: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } satisfies Transition,
  cinematic: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } satisfies Transition,
} as const

export const fadeReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition.slow,
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: motionTransition.base,
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition.base,
  },
}

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition.cinematic,
  },
}

export const scaleSubtle: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: motionTransition.slow,
  },
}

/** Props padrão para reveal ao entrar na viewport */
export const viewportOnce = {
  once: true,
  margin: '-8% 0px -8% 0px' as const,
  amount: 0.2 as const,
}
