import type { PageContent } from '@/data/content'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/ui/Container'
import { Grid, GridItem } from '@/components/ui/Grid'
import {
  BodyText,
  Caption,
  Eyebrow,
  SectionTitle,
} from '@/components/ui/Typography'
import { getTextPreview } from '@/hooks/usePageContent'
interface PageContentSectionProps {
  content: PageContent
  heading: string
  className?: string
}

export function PageContentSection({
  content,
  heading,
  className,
}: PageContentSectionProps) {
  const preview = getTextPreview(content.text)

  return (
    <Section spacing="md" className={className}>
      <Container>
        <header className="max-w-2xl">
          <Eyebrow>Conteúdo em migração</Eyebrow>
          <SectionTitle as="h1" className="mt-4">
            {heading}
          </SectionTitle>
          <Caption className="mt-3">{content.title}</Caption>
        </header>

        <Grid preset="asymmetric" className="mt-14">
          <GridItem span={12} spanMd={7}>
            <BodyText large className="whitespace-pre-line">
              {preview}
            </BodyText>
          </GridItem>

          <GridItem span={12} spanMd={5}>
            <aside className="border-t border-border pt-8 md:border-t-0 md:border-l md:pl-12 md:pt-0">
              <Eyebrow className="text-bronze">Arquivo digital</Eyebrow>
              <dl className="mt-6 grid gap-6">
                <div>
                  <dt>
                    <Caption>Imagens</Caption>
                  </dt>
                  <dd className="mt-1 font-serif text-2xl text-foreground">
                    {content.images.length}
                  </dd>
                </div>
                <div>
                  <dt>
                    <Caption>Vídeos</Caption>
                  </dt>
                  <dd className="mt-1 font-serif text-2xl text-foreground">
                    {content.videos.length}
                  </dd>
                </div>
                <div>
                  <dt>
                    <Caption>PDFs</Caption>
                  </dt>
                  <dd className="mt-1 font-serif text-2xl text-foreground">
                    {content.pdfs.length}
                  </dd>
                </div>
              </dl>
            </aside>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  )
}
