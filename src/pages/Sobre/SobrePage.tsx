import { Container } from '@/components/ui/Container'
import { usePageContent } from '@/hooks/usePageContent'
import { PageContentSection } from '@/sections/PageContentSection'

export function SobrePage() {
  const content = usePageContent('sobre')

  return (
    <Container as="article">
      <PageContentSection content={content} heading="História" />
    </Container>
  )
}
