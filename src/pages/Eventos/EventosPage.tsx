import { Container } from '@/components/ui/Container'
import { usePageContent } from '@/hooks/usePageContent'
import { PageContentSection } from '@/sections/PageContentSection'

export function EventosPage() {
  const content = usePageContent('eventos')

  return (
    <Container as="article">
      <PageContentSection content={content} heading="Eventos" />
    </Container>
  )
}
