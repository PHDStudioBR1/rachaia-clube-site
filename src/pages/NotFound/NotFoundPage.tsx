import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { ROUTES } from '@/lib/routes'

export function NotFoundPage() {
  return (
    <Container as="article" className="py-20 md:py-28">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        404
      </p>
      <h1 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        O endereço solicitado não existe ou foi movido. Retorne à página
        inicial para continuar navegando.
      </p>
      <Link
        to={ROUTES.home}
        className="mt-8 inline-flex items-center border-b border-foreground pb-0.5 text-sm text-foreground transition-opacity hover:opacity-70"
      >
        Voltar ao início
      </Link>
    </Container>
  )
}
