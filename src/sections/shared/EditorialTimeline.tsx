import { Reveal } from '@/components/motion/Reveal'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/ui/Container'
import { Eyebrow, SectionTitle } from '@/components/ui/Typography'
import type { TimelineEntry } from '@/lib/editorial'

interface EditorialTimelineProps {
  eyebrow: string
  title: string
  entries: readonly TimelineEntry[]
}

export function EditorialTimeline({
  eyebrow,
  title,
  entries,
}: EditorialTimelineProps) {
  return (
    <Section spacing="lg" background="ivory">
      <Container variant="narrow">
        <Reveal className="text-center">
          <Eyebrow className="text-bronze">{eyebrow}</Eyebrow>
          <SectionTitle as="h2" className="mt-4">
            {title}
          </SectionTitle>
        </Reveal>

        <ol className="relative mt-16 md:mt-20">
          <div
            className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block"
            aria-hidden
          />

          {entries.map((entry, index) => (
            <Reveal key={entry.period} delay={index * 100}>
              <li
                className={`relative pb-14 md:grid md:grid-cols-2 md:gap-12 md:pb-20 ${
                  index % 2 === 0 ? '' : 'md:[&>div:first-child]:order-2'
                }`}
              >
                <div className="md:pr-12 md:text-right">
                  <span className="font-serif text-3xl text-bronze md:text-4xl">
                    {entry.period}
                  </span>
                </div>
                <div className="mt-4 md:mt-0 md:pl-12">
                  <h3 className="font-serif text-xl text-foreground md:text-2xl">
                    {entry.title}
                  </h3>
                  <p className="mt-3 font-sans text-base leading-relaxed text-muted">
                    {entry.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
