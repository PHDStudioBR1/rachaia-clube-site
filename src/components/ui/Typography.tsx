import type { ElementType, ReactNode } from 'react'
import { TYPOGRAPHY_PRESETS } from '@/lib/design'
import { cn } from '@/lib/utils'

interface TypographyBaseProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function DisplayTitle({
  children,
  className,
  as: Component = 'h1',
}: TypographyBaseProps) {
  return (
    <Component className={cn(TYPOGRAPHY_PRESETS.display, 'text-foreground', className)}>
      {children}
    </Component>
  )
}

export function SectionTitle({
  children,
  className,
  as: Component = 'h2',
}: TypographyBaseProps) {
  return (
    <Component className={cn(TYPOGRAPHY_PRESETS.sectionTitle, 'text-foreground', className)}>
      {children}
    </Component>
  )
}

export function Eyebrow({
  children,
  className,
  as: Component = 'p',
}: TypographyBaseProps) {
  return (
    <Component className={cn(TYPOGRAPHY_PRESETS.eyebrow, className)}>
      {children}
    </Component>
  )
}

export function BodyText({
  children,
  className,
  as: Component = 'p',
  large = false,
}: TypographyBaseProps & { large?: boolean }) {
  return (
    <Component
      className={cn(
        large ? TYPOGRAPHY_PRESETS.bodyLarge : TYPOGRAPHY_PRESETS.body,
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function Caption({
  children,
  className,
  as: Component = 'p',
}: TypographyBaseProps) {
  return (
    <Component className={cn(TYPOGRAPHY_PRESETS.caption, className)}>
      {children}
    </Component>
  )
}
