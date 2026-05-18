import { Reveal } from '@/components/motion/Reveal'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/ui/Container'
import { EditorialLink } from '@/components/ui/EditorialLink'
import { Eyebrow, SectionTitle } from '@/components/ui/Typography'
import { MEDIA } from '@/lib/media'
import { ROUTES } from '@/lib/routes'

export function HomeSpaces() {
  const spaces = MEDIA.espaco.principal

  return (
    <Section spacing="md" background="default">
      <Container variant="wide" flush>
        <div className="grid grid-cols-1 bg-border md:grid-cols-2 md:gap-px">
          <Reveal className="flex flex-col justify-center bg-background p-12 md:p-20 lg:p-24">
            <Eyebrow className="text-bronze">Espaços</Eyebrow>
            <SectionTitle as="h2" className="mt-6 leading-tight">
              Cenários para festas, celebrações e encontros memoráveis
            </SectionTitle>
            <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-muted">
              Faça seu evento conosco. Temos o espaço certo para festas,
              celebrações, reuniões, workshops e muito mais — com a tradição e
              o acolhimento do Rachaia Clube.
            </p>
            <div className="mt-12">
              <EditorialLink to={ROUTES.aluguel}>
                Conhecer o espaço
              </EditorialLink>
            </div>
          </Reveal>

          <Reveal delay={200} className="relative min-h-[22rem] md:min-h-[28rem]">
            <img
              src={spaces.src}
              alt={spaces.alt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
