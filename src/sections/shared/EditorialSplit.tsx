import { Reveal } from '@/components/motion/Reveal'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/ui/Container'
import { Image } from '@/components/ui/Image'
import { BodyText, Eyebrow, SectionTitle } from '@/components/ui/Typography'
import type { CuratedImage } from '@/lib/media'
import { cn } from '@/lib/utils'

interface EditorialSplitProps {
  eyebrow: string
  title: string
  paragraphs?: readonly string[]
  body?: string
  image: CuratedImage
  imagePosition?: 'left' | 'right'
  background?: 'default' | 'ivory' | 'sand'
  spacing?: 'md' | 'lg'
}

export function EditorialSplit({
  eyebrow,
  title,
  paragraphs,
  body,
  image,
  imagePosition = 'right',
  background = 'default',
  spacing = 'lg',
}: EditorialSplitProps) {
  return (
    <Section spacing={spacing} background={background}>
      <Container>
        <div className="grid items-center gap-14 md:grid-cols-12 md:gap-20">
          <Reveal
            className={cn(
              'md:col-span-5',
              imagePosition === 'left' ? 'md:order-1' : 'md:order-2',
            )}
            delay={imagePosition === 'left' ? 0 : 120}
          >
            <Image src={image.src} alt={image.alt} aspect="editorial" hoverZoom />
          </Reveal>

          <Reveal
            className={cn(
              'md:col-span-7',
              imagePosition === 'left' ? 'md:order-2' : 'md:order-1',
            )}
            delay={imagePosition === 'left' ? 120 : 0}
          >
            <Eyebrow className="text-bronze">{eyebrow}</Eyebrow>
            <SectionTitle as="h2" className="mt-5 text-balance">
              {title}
            </SectionTitle>
            {paragraphs?.map((p) => (
              <BodyText key={p.slice(0, 48)} large className="mt-6">
                {p}
              </BodyText>
            ))}
            {body && (
              <BodyText large className="mt-6">
                {body}
              </BodyText>
            )}
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
