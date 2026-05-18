import { Reveal } from '@/components/motion/Reveal'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/ui/Container'
import { EditorialLink } from '@/components/ui/EditorialLink'
import { Eyebrow, SectionTitle } from '@/components/ui/Typography'
import { HOME_HIGHLIGHTS } from '@/lib/media'
import { ROUTES } from '@/lib/routes'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function HomeHighlights() {
  return (
    <Section spacing="lg" background="ivory">
      <Container variant="narrow">
        <Reveal>
          <Eyebrow className="text-center text-muted-foreground">
            Calendário institucional
          </Eyebrow>
        </Reveal>

        <div className="mt-16 divide-y divide-border">
          {HOME_HIGHLIGHTS.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <Link
                to={ROUTES.eventos}
                className="group flex flex-col justify-between gap-4 py-12 md:flex-row md:items-center"
              >
                <div>
                  <Eyebrow className="mb-3 text-bronze">{item.label}</Eyebrow>
                  <SectionTitle
                    as="h3"
                    className={cn(
                      'text-2xl transition-[font-style,color] duration-[var(--transition-slow)] md:text-3xl',
                      'group-hover:italic group-hover:text-accent',
                    )}
                  >
                    {item.title}
                  </SectionTitle>
                </div>
                <span className="font-sans text-xs uppercase tracking-[var(--tracking-widest)] text-muted-foreground transition-colors duration-[var(--transition-base)] group-hover:text-bronze">
                  {item.tag}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <EditorialLink to={ROUTES.eventos}>Ver eventos</EditorialLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
