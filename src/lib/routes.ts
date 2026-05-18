import type { PageSlug } from '@/types'

export const ROUTES = {
  home: '/',
  sobre: '/sobre',
  eventos: '/eventos',
  aluguel: '/aluguel',
  contato: '/contato',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]

export const ROUTE_TO_SLUG: Record<AppRoute, PageSlug> = {
  [ROUTES.home]: 'home',
  [ROUTES.sobre]: 'sobre',
  [ROUTES.eventos]: 'eventos',
  [ROUTES.aluguel]: 'aluguel-de-espaco',
  [ROUTES.contato]: 'contato',
}

export const SLUG_TO_ROUTE: Record<PageSlug, AppRoute> = {
  home: ROUTES.home,
  sobre: ROUTES.sobre,
  eventos: ROUTES.eventos,
  'aluguel-de-espaco': ROUTES.aluguel,
  contato: ROUTES.contato,
  publicacoes: ROUTES.home,
}
