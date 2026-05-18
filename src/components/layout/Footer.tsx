import { Link } from 'react-router-dom'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { Container } from '@/components/ui/Container'
import { Caption, Eyebrow } from '@/components/ui/Typography'
import { BRAND } from '@/lib/branding'
import { FOOTER_LINKS, SITE_CONTACT } from '@/lib/site'
import { cn } from '@/lib/utils'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-navy text-accent-secondary-foreground">
      <Container className="py-[var(--section-md)] md:py-[var(--section-lg)]">
        <div className="flex flex-col gap-14 lg:grid lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <div className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left">
            <Link
              to="/"
              className="inline-flex w-full max-w-[34rem] justify-center transition-opacity duration-[var(--transition-base)] hover:opacity-90 lg:justify-start"
              aria-label={`${BRAND.name} — Início`}
            >
              <BrandLogo
                variant="horizontal"
                context="footer"
                className="w-full justify-center lg:justify-start"
              />
            </Link>
            <p className="mt-10 max-w-md font-sans text-base leading-[var(--leading-relaxed)] text-ivory/75 md:text-lg">
              Clube social e cultural fundado em 1936. Patrimônio vivo da
              comunidade libanesa em São Paulo — tradição, encontros e
              celebrações com elegância institucional.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-7 lg:gap-16">
            <div>
              <Eyebrow className="text-center text-bronze-light/90 sm:text-left">
                Navegação
              </Eyebrow>
              <ul className="mt-6 flex flex-col items-center gap-3 sm:items-start">
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
              <Eyebrow className="text-center text-bronze-light/90 sm:text-left">
                Contato
              </Eyebrow>
              <address className="mt-6 flex flex-col items-center gap-4 not-italic sm:items-start">
                <p className="max-w-xs text-center font-sans text-sm leading-[var(--leading-relaxed)] text-ivory/75 sm:text-left">
                  {SITE_CONTACT.address}
                </p>
                <ul className="flex flex-col items-center gap-2 sm:items-start">
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
        </div>

        <hr className="editorial-rule editorial-rule--accent mt-14 border-0 opacity-40 md:mt-16" />

        <div className="mt-8 flex flex-col gap-3 md:mt-10 md:flex-row md:items-center md:justify-between">
          <Caption className="text-center text-ivory/50 md:text-left">
            © {currentYear} {BRAND.name}. Todos os direitos reservados.
          </Caption>
          <Caption className="text-center text-ivory/40 md:text-right">
            São Paulo — Brasil
          </Caption>
        </div>
      </Container>
    </footer>
  )
}
