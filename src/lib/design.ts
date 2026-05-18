/**
 * Constantes e presets do design system Rachaia Clube.
 * Fundação visual para composição modular e integração Lovable.
 */

export const LAYOUT = {
  containerMax: 'var(--container-max)',
  containerNarrow: 'var(--container-narrow)',
  containerProse: 'var(--container-prose)',
  containerWide: 'var(--container-wide)',
  headerHeight: 'var(--header-height)',
  gutter: 'var(--gutter)',
} as const

export const SECTION_SPACING = {
  sm: 'var(--section-sm)',
  md: 'var(--section-md)',
  lg: 'var(--section-lg)',
  xl: 'var(--section-xl)',
} as const

export type SectionSpacing = keyof typeof SECTION_SPACING

export const CONTAINER_VARIANTS = {
  default: 'var(--container-max)',
  narrow: 'var(--container-narrow)',
  prose: 'var(--container-prose)',
  wide: 'var(--container-wide)',
  full: '100%',
} as const

export type ContainerVariant = keyof typeof CONTAINER_VARIANTS

export const SECTION_BACKGROUNDS = {
  default: 'bg-background',
  ivory: 'bg-background-subtle',
  sand: 'bg-background-muted',
  navy: 'bg-navy text-accent-secondary-foreground',
  inset: 'bg-surface-inset',
} as const

export type SectionBackground = keyof typeof SECTION_BACKGROUNDS

export const TYPOGRAPHY_PRESETS = {
  display: 'font-serif text-[var(--text-display)] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)]',
  sectionTitle: 'font-serif text-3xl md:text-4xl leading-[var(--leading-tight)] tracking-[var(--tracking-tight)]',
  eyebrow: 'font-sans text-xs uppercase tracking-[var(--tracking-widest)] text-muted-foreground',
  body: 'font-sans text-base leading-[var(--leading-relaxed)] text-muted',
  bodyLarge: 'font-sans text-lg leading-[var(--leading-relaxed)] text-muted',
  caption: 'font-sans text-sm leading-[var(--leading-normal)] text-muted-foreground',
} as const

export const GRID_PRESETS = {
  editorial: 'grid grid-cols-1 gap-[var(--gutter)] md:grid-cols-12',
  gallery: 'grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4',
  asymmetric: 'grid grid-cols-1 gap-[var(--gutter)] md:grid-cols-12',
} as const

export const IMAGE_ASPECTS = {
  cinematic: 'aspect-[21/9]',
  landscape: 'aspect-[16/10]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  editorial: 'aspect-[4/5]',
} as const

export type ImageAspect = keyof typeof IMAGE_ASPECTS
