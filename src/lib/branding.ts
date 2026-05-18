/**
 * Identidade visual oficial — caminhos fixos em /public/branding
 */

export const BRAND = {
  logoHorizontal: '/branding/rachaia-logo-horizontal.png',
  logoVertical: '/branding/rachaia-logo-vertical.png',
  name: 'Rachaia Clube',
  alt: 'Rachaia Clube — Tradição, cultura e convivência — São Paulo, desde 1936',
} as const

/** Proporção aproximada do logo horizontal (largura / altura) */
export const LOGO_HORIZONTAL_RATIO = 4.2

export type BrandLogoContext =
  | 'nav'
  | 'navMobile'
  | 'footer'
  | 'seal'
  | 'loader'
