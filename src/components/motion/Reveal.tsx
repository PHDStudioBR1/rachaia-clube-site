import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeReveal, motionTransition, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Atraso em milissegundos — ritmo editorial em cascata */
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={fadeReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{
        ...motionTransition.slow,
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  )
}
