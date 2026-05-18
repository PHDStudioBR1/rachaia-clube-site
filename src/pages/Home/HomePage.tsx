import { Container } from '@/components/ui/Container'
import { usePageContent } from '@/hooks/usePageContent'
import { PageContentSection } from '@/sections/PageContentSection'

export function HomePage() {
  const content = usePageContent('home')

  return (
    <Container as="article">
      <PageContentSection content={content} heading="Início" />
    </Container>
  )
}
