import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { motionTransition } from '@/lib/motion'

const LOADER_KEY = 'rachaia-brand-seen'

export function BrandLoader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return !sessionStorage.getItem(LOADER_KEY)
  })

  useEffect(() => {
    if (!visible) return
    const timer = window.setTimeout(() => {
      sessionStorage.setItem(LOADER_KEY, '1')
      setVisible(false)
    }, 1400)
    return () => window.clearTimeout(timer)
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={motionTransition.base}
          aria-hidden
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={motionTransition.slow}
          >
            <BrandLogo variant="vertical" context="loader" priority />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
