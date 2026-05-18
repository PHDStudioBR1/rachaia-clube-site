import { Container } from '@/components/ui/Container'
import { usePageContent } from '@/hooks/usePageContent'
import { PageContentSection } from '@/sections/PageContentSection'

export function AluguelPage() {
  const content = usePageContent('aluguel-de-espaco')

  return (
    <Container as="article">
      <PageContentSection content={content} heading="Aluguel de Espaço" />
    </Container>
  )
}
