import { Reveal } from '@/components/motion/Reveal'
import { BrandSeal } from '@/components/brand/BrandSeal'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/ui/Container'
import { Image } from '@/components/ui/Image'
import {
  BodyText,
  Caption,
  DisplayTitle,
  Eyebrow,
  SectionTitle,
} from '@/components/ui/Typography'
import { EDITORIAL } from '@/lib/editorial'
import { MEDIA } from '@/lib/media'
import { SITE_CONTACT } from '@/lib/site'

const copy = EDITORIAL.contato

export function ContatoPageSections() {
  return (
    <>
      {/* Hero editorial — sem imagens antigas do Wix */}
      <Section
        spacing="md"
        background="ivory"
        className="pt-[calc(var(--header-height)+var(--space-10))]"
      >
        <Container variant="narrow" className="text-center">
          <Reveal>
            <BrandSeal className="mb-10 md:mb-12" />
            <Eyebrow className="text-bronze">{copy.hero.eyebrow}</Eyebrow>
            <DisplayTitle as="h1" className="mt-6 text-balance">
              {copy.hero.title}
            </DisplayTitle>
            <BodyText large className="mx-auto mt-6 max-w-xl">
              {copy.hero.subtitle}
            </BodyText>
            <hr className="editorial-rule editorial-rule--accent mx-auto mt-10 w-16 border-0" />
          </Reveal>
        </Container>
      </Section>

      <Section spacing="lg" background="default">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <Eyebrow className="text-bronze">Fale conosco</Eyebrow>
              <SectionTitle as="h2" className="mt-5">
                Estamos à disposição
              </SectionTitle>
              <BodyText large className="mt-6">
                {copy.formIntro}
              </BodyText>

              <address className="mt-12 space-y-8 not-italic">
                <div>
                  <Caption className="uppercase tracking-[var(--tracking-widest)]">
                    Endereço
                  </Caption>
                  <p className="mt-2 font-sans text-lg text-foreground">
                    Rua Tangará, 349
                    <br />
                    Vila Clementino — São Paulo — SP
                    <br />
                    CEP {copy.cep}
                  </p>
                </div>

                <div>
                  <Caption className="uppercase tracking-[var(--tracking-widest)]">
                    Telefone
                  </Caption>
                  <ul className="mt-2 space-y-2">
                    {SITE_CONTACT.phones.map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone.replace(/\D/g, '')}`}
                          className="font-sans text-lg text-foreground transition-opacity hover:opacity-70"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Caption className="uppercase tracking-[var(--tracking-widest)]">
                    E-mail
                  </Caption>
                  <a
                    href={`mailto:${copy.email}`}
                    className="mt-2 block font-sans text-lg text-foreground transition-opacity hover:opacity-70"
                  >
                    {copy.email}
                  </a>
                </div>
              </address>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-7">
              {/* Foto real do espaço — nunca assets de /contato (logos Wix) */}
              <Image
                src={MEDIA.espaco.hero.src}
                alt="Fachada e ambiente do Rachaia Clube — Vila Clementino"
                aspect="landscape"
                hoverZoom={false}
              />

              <div className="mt-10 overflow-hidden rounded-sm border border-border bg-ivory shadow-[var(--shadow-sm)]">
                <iframe
                  title="Localização do Rachaia Clube"
                  src="https://maps.google.com/maps?q=Rua+Tangará+349+Vila+Clementino+São+Paulo&output=embed"
                  className="h-72 w-full border-0 md:h-[28rem]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="border-t border-border-subtle px-6 py-4">
                  <a
                    href={copy.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm tracking-wide text-muted transition-colors hover:text-accent"
                  >
                    {copy.mapLabel} →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section spacing="md" background="navy">
        <Container variant="narrow" className="text-center">
          <Reveal>
            <Eyebrow className="text-bronze-light/90">Visita</Eyebrow>
            <p className="mt-6 font-serif text-2xl italic leading-snug text-accent-secondary-foreground text-balance md:text-3xl">
              Será um prazer recebê-lo na casa mais tradicional de São Paulo.
            </p>
            <hr className="editorial-rule editorial-rule--accent mx-auto mt-10 w-16 border-0 opacity-40" />
            <Caption className="mt-6 text-ivory/60">
              {copy.hero.eyebrow} — desde 1936
            </Caption>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
