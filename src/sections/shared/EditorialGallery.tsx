import { Reveal } from '@/components/motion/Reveal'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/ui/Container'
import { Image } from '@/components/ui/Image'
import { Eyebrow, SectionTitle } from '@/components/ui/Typography'
import type { CuratedImage } from '@/lib/media'

interface EditorialGalleryProps {
  eyebrow: string
  title: string
  images: readonly CuratedImage[]
  background?: 'default' | 'ivory' | 'navy'
  columns?: 2 | 3
}

export function EditorialGallery({
  eyebrow,
  title,
  images,
  background = 'ivory',
  columns = 3,
}: EditorialGalleryProps) {
  const isNavy = background === 'navy'

  return (
    <Section spacing="lg" background={background}>
      <Container>
        <Reveal className="mb-14 max-w-2xl md:mb-20">
          <Eyebrow className={isNavy ? 'text-bronze-light' : 'text-bronze'}>
            {eyebrow}
          </Eyebrow>
          <SectionTitle
            as="h2"
            className={`mt-4 ${isNavy ? 'text-accent-secondary-foreground' : ''}`}
          >
            {title}
          </SectionTitle>
        </Reveal>

        <div
          className={
            columns === 2
              ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6'
              : 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6'
          }
        >
          {images.map((image, index) => (
            <Reveal key={image.src} delay={index * 70}>
              <Image
                src={image.src}
                alt={image.alt}
                aspect={index % 3 === 0 ? 'editorial' : 'landscape'}
                hoverZoom
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
