import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { DisplayTitle, Eyebrow } from '@/components/ui/Typography'
import { fadeReveal, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

type HeroSize = 'default' | 'compact' | 'tall'
type HeroAlign = 'start' | 'center'

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  children?: ReactNode
  imageSrc?: string
  imageAlt?: string
  size?: HeroSize
  align?: HeroAlign
  className?: string
  /** Slot para CTA minimalista futuro */
  actions?: ReactNode
}

const sizeClasses: Record<HeroSize, string> = {
  compact: 'min-h-[40vh]',
  default: 'min-h-[55vh]',
  tall: 'min-h-[70vh]',
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  children,
  imageSrc,
  imageAlt = '',
  size = 'default',
  align = 'start',
  className,
  actions,
}: HeroProps) {
  const isCentered = align === 'center'

  return (
    <section
      className={cn(
        'relative flex items-end overflow-hidden',
        sizeClasses[size],
        className,
      )}
    >
      {imageSrc && (
        <>
          <div className="absolute inset-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="hero-overlay absolute inset-0" aria-hidden />
        </>
      )}

      {!imageSrc && (
        <div
          className="absolute inset-0 bg-background-subtle"
          aria-hidden
        />
      )}

      <Container
        className={cn(
          'relative z-10 pb-[var(--section-sm)] pt-[calc(var(--header-height)+var(--space-12))]',
          isCentered && 'text-center',
        )}
      >
        <motion.div
          variants={fadeReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={cn('max-w-3xl', isCentered && 'mx-auto')}
        >
          {eyebrow && (
            <Eyebrow className={imageSrc ? 'text-ivory/90' : undefined}>
              {eyebrow}
            </Eyebrow>
          )}

          <DisplayTitle
            as="h1"
            className={cn(
              'mt-4',
              imageSrc && 'text-accent-secondary-foreground',
            )}
          >
            {title}
          </DisplayTitle>

          {subtitle && (
            <p
              className={cn(
                'mt-6 max-w-xl font-sans text-lg leading-relaxed',
                imageSrc ? 'text-ivory/85' : 'text-muted',
                isCentered && 'mx-auto',
              )}
            >
              {subtitle}
            </p>
          )}

          {actions && (
            <div
              className={cn(
                'mt-10 flex flex-wrap gap-4',
                isCentered && 'justify-center',
              )}
            >
              {actions}
            </div>
          )}

          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </Container>

      {!imageSrc && (
        <hr className="editorial-rule editorial-rule--accent absolute bottom-0 left-[var(--container-padding)] right-[var(--container-padding)]" />
      )}
    </section>
  )
}

/** CTA minimalista institucional */
interface HeroLinkProps {
  href: string
  children: ReactNode
  variant?: 'light' | 'dark'
}

export function HeroLink({ href, children, variant = 'dark' }: HeroLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center gap-2 border-b pb-1 font-sans text-sm tracking-wide transition-[border-color,color,opacity] duration-[var(--transition-base)]',
        variant === 'light'
          ? 'border-ivory/60 text-ivory hover:border-ivory'
          : 'border-bronze text-foreground hover:border-accent-hover hover:text-accent-hover',
      )}
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  )
}
