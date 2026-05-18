import { Reveal } from '@/components/motion/Reveal'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/ui/Container'
import { EditorialLink } from '@/components/ui/EditorialLink'
import { BodyText, Eyebrow, SectionTitle } from '@/components/ui/Typography'
import { EDITORIAL } from '@/lib/editorial'
import { MEDIA } from '@/lib/media'
import { ROUTES } from '@/lib/routes'
import { PageCinematicHero } from '@/sections/shared/PageCinematicHero'
import { EditorialGallery } from '@/sections/shared/EditorialGallery'
import { EditorialSplit } from '@/sections/shared/EditorialSplit'

const copy = EDITORIAL.espaco

export function EspacoPageSections() {
  return (
    <>
      <PageCinematicHero
        image={MEDIA.espaco.hero}
        eyebrow={copy.hero.eyebrow}
        title={
          <>
            Cenários para{' '}
            <span className="italic font-light">momentos que importam</span>
          </>
        }
        subtitle={copy.hero.subtitle}
        variant="tall"
      />

      <EditorialSplit
        eyebrow={copy.apresentacao.eyebrow}
        title={copy.apresentacao.title}
        paragraphs={copy.apresentacao.paragraphs}
        image={MEDIA.espaco.principal}
        imagePosition="right"
      />

      <Section spacing="md" background="ivory">
        <Container variant="wide" flush>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-px bg-border">
            <Reveal className="relative min-h-[22rem] md:min-h-[32rem]">
              <img
                src={MEDIA.espaco.secundaria.src}
                alt={MEDIA.espaco.secundaria.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={120} className="flex flex-col justify-center bg-ivory p-12 md:p-20">
              <Eyebrow className="text-bronze">{copy.experiencia.eyebrow}</Eyebrow>
              <SectionTitle as="h2" className="mt-6">
                {copy.experiencia.title}
              </SectionTitle>
              <BodyText large className="mt-6">
                {copy.experiencia.body}
              </BodyText>
              <div className="mt-10">
                <EditorialLink to={ROUTES.contato}>
                  Solicitar informações
                </EditorialLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <EditorialGallery
        eyebrow="Ambientes"
        title="Espaços do clube"
        images={MEDIA.espaco.gallery}
        background="default"
        columns={3}
      />
    </>
  )
}
