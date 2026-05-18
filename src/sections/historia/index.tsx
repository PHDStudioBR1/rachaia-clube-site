import { BrandSeal } from '@/components/brand/BrandSeal'
import { Reveal } from '@/components/motion/Reveal'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/ui/Container'
import { Image } from '@/components/ui/Image'
import { BodyText, Eyebrow, SectionTitle } from '@/components/ui/Typography'
import { EDITORIAL } from '@/lib/editorial'
import { MEDIA } from '@/lib/media'
import { PageCinematicHero } from '@/sections/shared/PageCinematicHero'
import { EditorialGallery } from '@/sections/shared/EditorialGallery'
import { EditorialSplit } from '@/sections/shared/EditorialSplit'
import { EditorialTimeline } from '@/sections/shared/EditorialTimeline'

const copy = EDITORIAL.historia

export function HistoriaPageSections() {
  return (
    <>
      <PageCinematicHero
        image={MEDIA.historia.hero}
        eyebrow={copy.hero.eyebrow}
        title={
          <>
            Quase um século de{' '}
            <span className="italic font-light">memória e pertencimento</span>
          </>
        }
        subtitle={copy.hero.subtitle}
        variant="tall"
      />

      <EditorialSplit
        eyebrow={copy.origem.eyebrow}
        title={copy.origem.title}
        paragraphs={copy.origem.paragraphs}
        image={MEDIA.historia.origem}
        imagePosition="right"
        background="default"
      />

      <EditorialSplit
        eyebrow={copy.fundacao.eyebrow}
        title={copy.fundacao.title}
        body={copy.fundacao.body}
        image={MEDIA.historia.fundacao}
        imagePosition="left"
        background="ivory"
      />

      <EditorialTimeline
        eyebrow="Trajetória"
        title="Linha do tempo"
        entries={copy.timeline}
      />

      <EditorialGallery
        eyebrow="Arquivo visual"
        title="Memórias em imagem"
        images={MEDIA.historia.gallery}
        background="navy"
        columns={3}
      />

      <Section spacing="lg" background="default">
        <Container>
          <BrandSeal className="mb-16 md:mb-20" />
          <div className="grid items-center gap-14 md:grid-cols-12 md:gap-20">
            <Reveal className="md:col-span-6">
              <Eyebrow className="text-bronze">{copy.legado.eyebrow}</Eyebrow>
              <SectionTitle as="h2" className="mt-5">
                {copy.legado.title}
              </SectionTitle>
              <BodyText large className="mt-6">
                {copy.legado.body}
              </BodyText>
            </Reveal>
            <Reveal delay={140} className="md:col-span-6">
              <Image
                src={MEDIA.historia.legado.src}
                alt={MEDIA.historia.legado.alt}
                aspect="landscape"
                hoverZoom
              />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}
