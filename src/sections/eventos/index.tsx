import { Link } from 'react-router-dom'
import { Reveal } from '@/components/motion/Reveal'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/ui/Container'
import { Image } from '@/components/ui/Image'
import { BodyText, Eyebrow, SectionTitle } from '@/components/ui/Typography'
import { EDITORIAL } from '@/lib/editorial'
import { MEDIA } from '@/lib/media'
import { ROUTES } from '@/lib/routes'
import { PageCinematicHero } from '@/sections/shared/PageCinematicHero'
import { EditorialGallery } from '@/sections/shared/EditorialGallery'
import { EditorialLink } from '@/components/ui/EditorialLink'

const copy = EDITORIAL.eventos

const experienciaImages = [
  MEDIA.eventos.gastronomia,
  MEDIA.eventos.convivencia,
  MEDIA.eventos.celebracao,
] as const

export function EventosPageSections() {
  return (
    <>
      <PageCinematicHero
        image={MEDIA.eventos.hero}
        eyebrow={copy.hero.eyebrow}
        title={
          <>
            Onde a comunidade{' '}
            <span className="italic font-light">se encontra</span>
          </>
        }
        subtitle={copy.hero.subtitle}
        variant="tall"
      />

      <Section spacing="md" background="ivory">
        <Container variant="narrow">
          <Reveal>
            <BodyText large className="text-center">
              {copy.intro.body}
            </BodyText>
          </Reveal>
        </Container>
      </Section>

      <Section spacing="lg" background="default">
        <Container>
          <div className="grid gap-16 md:grid-cols-3 md:gap-10">
            {copy.experiencias.map((block, index) => (
              <Reveal key={block.title} delay={index * 100}>
                <div className="flex flex-col">
                  <Image
                    src={experienciaImages[index].src}
                    alt={experienciaImages[index].alt}
                    aspect="landscape"
                    hoverZoom
                  />
                  <Eyebrow className="mt-8 text-bronze">{block.eyebrow}</Eyebrow>
                  <SectionTitle as="h3" className="mt-3 text-2xl">
                    {block.title}
                  </SectionTitle>
                  <BodyText className="mt-4">{block.body}</BodyText>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="default" bordered>
        <Container variant="narrow">
          <Reveal className="text-center">
            <Eyebrow className="text-bronze">Programação recorrente</Eyebrow>
            <SectionTitle as="h2" className="mt-4">
              Encontros que marcam o calendário da casa
            </SectionTitle>
          </Reveal>

          <div className="mt-16 divide-y divide-border">
            {copy.programacao.map((event, index) => (
              <Reveal key={event.title} delay={index * 90}>
                <article className="py-12">
                  <Eyebrow className="text-bronze">{event.schedule}</Eyebrow>
                  <SectionTitle as="h3" className="mt-4 text-2xl md:text-3xl">
                    {event.title}
                  </SectionTitle>
                  <BodyText className="mt-4 max-w-xl">{event.description}</BodyText>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-8 text-center">
              <BodyText>
                Para confirmar datas e reservas,{' '}
                <Link
                  to={ROUTES.contato}
                  className="border-b border-bronze text-foreground transition-colors hover:text-accent"
                >
                  fale conosco
                </Link>
                .
              </BodyText>
            </p>
          </Reveal>
        </Container>
      </Section>

      <EditorialGallery
        eyebrow="Galeria"
        title="Vida social em imagens"
        images={MEDIA.eventos.gallery}
        background="ivory"
        columns={3}
      />

      <Section spacing="md" background="default">
        <Container className="text-center">
          <Reveal>
            <EditorialLink to={ROUTES.contato}>Reservas e informações</EditorialLink>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
