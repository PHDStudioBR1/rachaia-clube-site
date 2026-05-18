import type { SiteContact } from '@/types'

export const SITE_NAME = 'Rachaia Clube'
export const SITE_TAGLINE = 'desde 1936'

export const SITE_CONTACT: SiteContact = {
  address: 'Rua Tangará, 349 — Vila Clementino — São Paulo — SP',
  phones: ['(11) 5549-7904', '(11) 94925-3855'],
}

export const SITE_EMAIL = 'contato@rachaiaclube.com.br'

export const NAV_ITEMS = [
  { label: 'Início', href: '/', slug: 'home' as const },
  { label: 'História', href: '/sobre', slug: 'sobre' as const },
  { label: 'Eventos', href: '/eventos', slug: 'eventos' as const },
  { label: 'Espaço', href: '/aluguel', slug: 'aluguel-de-espaco' as const },
  { label: 'Contato', href: '/contato', slug: 'contato' as const },
] as const

export const FOOTER_LINKS = NAV_ITEMS
