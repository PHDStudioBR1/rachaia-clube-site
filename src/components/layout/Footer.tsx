import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Caption, Eyebrow, SectionTitle } from '@/components/ui/Typography'
import { FOOTER_LINKS, SITE_CONTACT, SITE_NAME, SITE_TAGLINE } from '@/lib/site'
import { cn } from '@/lib/utils'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-navy text-accent-secondary-foreground">
      <Container className="py-[var(--section-md)]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16 lg:gap-20">
          <div>
            <Eyebrow className="text-bronze-light/90">Instituição</Eyebrow>
            <SectionTitle as="p" className="mt-4 text-ivory">
              {SITE_NAME}
            </SectionTitle>
            <Caption className="mt-2 text-ivory/60">{SITE_TAGLINE}</Caption>
            <p className="mt-6 max-w-sm font-sans text-base leading-[var(--leading-relaxed)] text-ivory/75">
              Clube social e cultural fundado em 1936. Patrimônio vivo da
              comunidade libanesa em São Paulo — tradição, encontros e
              celebrações com elegância institucional.
            </p>
          </div>

          <div>
            <Eyebrow className="text-bronze-light/90">Navegação</Eyebrow>
            <ul className="mt-6 flex flex-col gap-3">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      'font-sans text-sm tracking-[var(--tracking-wide)] text-ivory/70',
                      'transition-[color,opacity] duration-[var(--transition-base)]',
                      'hover:text-bronze-light',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow className="text-bronze-light/90">Contato</Eyebrow>
            <address className="mt-6 flex flex-col gap-4 not-italic">
              <p className="font-sans text-sm leading-[var(--leading-relaxed)] text-ivory/75">
                {SITE_CONTACT.address}
              </p>
              <ul className="flex flex-col gap-2">
                {SITE_CONTACT.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\D/g, '')}`}
                      className="font-sans text-sm text-ivory transition-[color,opacity] duration-[var(--transition-base)] hover:text-bronze-light"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </address>
          </div>
        </div>

        <hr className="editorial-rule editorial-rule--accent mt-14 border-0 opacity-40" />

        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Caption className="text-ivory/50">
            © {currentYear} {SITE_NAME}. Todos os direitos reservados.
          </Caption>
          <Caption className="text-ivory/40">
            São Paulo — Brasil
          </Caption>
        </div>
      </Container>
    </footer>
  )
}
