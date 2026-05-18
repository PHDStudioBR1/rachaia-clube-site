import { BrandSeal } from '@/components/brand/BrandSeal'
import { Reveal } from '@/components/motion/Reveal'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/ui/Container'
import { Caption, Eyebrow } from '@/components/ui/Typography'

export function HomeClosing() {
  return (
    <Section spacing="lg" background="default">
      <Container variant="narrow">
        <Reveal className="mx-auto max-w-3xl text-center">
          <BrandSeal className="mb-12" />
          <Eyebrow className="text-bronze">Convite</Eyebrow>
          <blockquote className="mt-10 font-serif text-3xl italic leading-[1.35] text-foreground text-balance md:text-4xl">
            Preservar a memória é manter o coração aquecido pelas raízes — uma
            tradição que une gerações no coração de São Paulo.
          </blockquote>
          <hr className="editorial-rule editorial-rule--accent mx-auto mt-12 w-16 border-0" />
          <Caption className="mt-8">Rachaia Clube do Brasil</Caption>
        </Reveal>
      </Container>
    </Section>
  )
}
