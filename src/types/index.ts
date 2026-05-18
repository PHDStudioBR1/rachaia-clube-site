export type PageSlug =
  | 'home'
  | 'sobre'
  | 'eventos'
  | 'aluguel-de-espaco'
  | 'contato'
  | 'publicacoes'

export interface NavItem {
  label: string
  href: string
  slug?: PageSlug
}

export interface SiteContact {
  address: string
  phones: string[]
}
