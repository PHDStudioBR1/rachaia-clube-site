import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { DisplayTitle, Eyebrow } from '@/components/ui/Typography'
import type { CuratedImage } from '@/lib/media'
import { fadeReveal, motionTransition } from '@/lib/motion'
import { cn } from '@/lib/utils'

type HeroVariant = 'fullscreen' | 'tall' | 'compact'

interface PageCinematicHeroProps {
  image: CuratedImage
  eyebrow: string
  title: ReactNode
  subtitle?: string
  variant?: HeroVariant
  align?: 'center' | 'start'
}

const heightClasses: Record<HeroVariant, string> = {
  fullscreen: 'min-h-[100svh]',
  tall: 'min-h-[72vh]',
  compact: 'min-h-[52vh]',
}

export function PageCinematicHero({
  image,
  eyebrow,
  title,
  subtitle,
  variant = 'tall',
  align = 'center',
}: PageCinematicHeroProps) {
  const centered = align === 'center'

  return (
    <header
      className={cn(
        'relative flex w-full items-center justify-center overflow-hidden',
        heightClasses[variant],
        variant === 'compact' && 'min-h-[28rem]',
      )}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={motionTransition.cinematic}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover animate-slow-zoom"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-overlay hero-overlay--soft absolute inset-0" aria-hidden />
      </motion.div>

      <Container
        className={cn(
          'relative z-10',
          centered ? 'text-center' : 'text-left',
        )}
      >
        <motion.div
          variants={fadeReveal}
          initial="hidden"
          animate="visible"
          transition={motionTransition.slow}
          className={cn('max-w-4xl', centered && 'mx-auto')}
        >
          <Eyebrow className="text-ivory/85">{eyebrow}</Eyebrow>
          <DisplayTitle
            as="h1"
            className="mt-6 text-balance text-accent-secondary-foreground md:mt-8"
          >
            {title}
          </DisplayTitle>
          {subtitle && (
            <p
              className={cn(
                'mt-6 max-w-2xl font-sans text-base leading-relaxed text-ivory/80 md:text-lg',
                centered && 'mx-auto',
              )}
            >
              {subtitle}
            </p>
          )}
          <hr
            className={cn(
              'mt-10 h-px w-20 border-0 bg-bronze/70',
              centered && 'mx-auto',
            )}
            aria-hidden
          />
        </motion.div>
      </Container>
    </header>
  )
}
