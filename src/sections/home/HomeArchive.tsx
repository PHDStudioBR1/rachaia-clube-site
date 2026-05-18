import { Reveal } from '@/components/motion/Reveal'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/ui/Container'
import { Image } from '@/components/ui/Image'
import { Caption, Eyebrow, SectionTitle } from '@/components/ui/Typography'
import { MEDIA } from '@/lib/media'
import { cn } from '@/lib/utils'

const offsetClasses = {
  none: '',
  mid: 'md:mt-12',
  low: 'md:mt-24',
} as const

export function HomeArchive() {
  return (
    <Section spacing="lg" background="navy">
      <Container>
        <div className="mb-20 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow className="text-bronze-light">Arquivo histórico</Eyebrow>
            <SectionTitle
              as="h2"
              className="mt-4 italic text-accent-secondary-foreground"
            >
              A memória viva
            </SectionTitle>
          </Reveal>
          <Reveal delay={120}>
            <Caption className="text-ivory/50">
              Arquivos de 1936 — {new Date().getFullYear()}
            </Caption>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-14">
          {MEDIA.archive.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 120}
              className={cn('space-y-8', offsetClasses[card.offset ?? 'none'])}
            >
              <Image
                src={card.image.src}
                alt={card.image.alt}
                aspect="editorial"
                hoverZoom={false}
                className="opacity-95"
              />
              <p className="font-serif text-2xl italic text-bronze-light/90">
                {card.title}
              </p>
              <p className="max-w-[34ch] font-sans text-sm leading-relaxed text-ivory/55">
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
