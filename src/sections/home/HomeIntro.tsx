import { Reveal } from '@/components/motion/Reveal'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/ui/Container'
import { EditorialLink } from '@/components/ui/EditorialLink'
import { Image } from '@/components/ui/Image'
import { Eyebrow, SectionTitle } from '@/components/ui/Typography'
import { MEDIA } from '@/lib/media'
import { ROUTES } from '@/lib/routes'

export function HomeIntro() {
  const { intro } = MEDIA.home

  return (
    <Section spacing="lg" background="default">
      <Container>
        <div className="grid items-center gap-16 md:grid-cols-12 md:gap-20">
          <Reveal className="md:col-span-7">
            <Eyebrow className="text-bronze">A instituição</Eyebrow>
            <SectionTitle as="h2" className="mt-6 text-balance">
              Um refúgio de tradição onde a história libanesa encontra São Paulo
            </SectionTitle>
            <p className="mt-8 max-w-xl font-sans text-base leading-[var(--leading-relaxed)] text-muted md:text-lg">
              O Rachaia Clube preserva quase um século de memórias, encontros e
              celebrações. Venha conhecer o espaço mais tradicional da cidade —
              festas típicas, cultura e sabores que atravessam gerações.
            </p>
            <div className="mt-10">
              <EditorialLink to={ROUTES.sobre}>
                Conheça nossa história
              </EditorialLink>
            </div>
          </Reveal>

          <Reveal delay={180} className="md:col-span-5">
            <Image
              src={intro.src}
              alt={intro.alt}
              aspect="editorial"
              hoverZoom
              priority
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
