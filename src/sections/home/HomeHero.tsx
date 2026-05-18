import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { DisplayTitle, Eyebrow } from '@/components/ui/Typography'
import { MEDIA } from '@/lib/media'
import { fadeReveal, motionTransition } from '@/lib/motion'

export function HomeHero() {
  const { hero } = MEDIA.home

  return (
    <header className="relative flex h-[100svh] min-h-[32rem] w-full items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={motionTransition.cinematic}
      >
        <img
          src={hero.src}
          alt={hero.alt}
          className="h-full w-full object-cover animate-slow-zoom"
          loading="eager"
          fetchPriority="high"
        />
        <motion.div className="hero-overlay hero-overlay--soft absolute inset-0" aria-hidden />
      </motion.div>

      <Container className="relative z-10 text-center">
        <motion.div
          variants={fadeReveal}
          initial="hidden"
          animate="visible"
          transition={motionTransition.slow}
          className="mx-auto max-w-4xl"
        >
          <Eyebrow className="text-ivory/85">Fundado em 1936</Eyebrow>
          <DisplayTitle
            as="h1"
            className="mt-8 text-balance text-accent-secondary-foreground"
          >
            Tradição e{' '}
            <span className="italic font-light">memória viva</span>
          </DisplayTitle>
          <div className="mx-auto mt-12 h-px w-24 bg-bronze/70" aria-hidden />
          <p className="mx-auto mt-8 max-w-lg font-sans text-base leading-relaxed text-ivory/80 md:text-lg">
            O espaço mais tradicional de São Paulo — cultura, encontros e
            pertencimento da comunidade libanesa.
          </p>
        </motion.div>
      </Container>

      <p
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 font-sans text-[0.625rem] uppercase tracking-[var(--tracking-widest)] text-ivory/50"
        aria-hidden
      >
        Descer
      </p>
    </header>
  )
}
