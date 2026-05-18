import { Container } from '@/components/ui/Container'
import { usePageContent } from '@/hooks/usePageContent'
import { PageContentSection } from '@/sections/PageContentSection'

export function ContatoPage() {
  const content = usePageContent('contato')

  return (
    <Container as="article">
      <PageContentSection content={content} heading="Contato" />
    </Container>
  )
}
