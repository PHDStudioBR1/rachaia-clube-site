import type { ElementType, ReactNode } from 'react'
import {
  SECTION_BACKGROUNDS,
  type SectionBackground,
  type SectionSpacing,
} from '@/lib/design'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  as?: ElementType
  id?: string
  spacing?: SectionSpacing
  background?: SectionBackground
  align?: 'start' | 'center' | 'end'
  bordered?: boolean
}

const spacingClasses: Record<SectionSpacing, string> = {
  sm: 'py-[var(--section-sm)]',
  md: 'py-[var(--section-md)]',
  lg: 'py-[var(--section-lg)]',
  xl: 'py-[var(--section-xl)]',
}

const alignClasses = {
  start: 'text-left items-start',
  center: 'text-center items-center',
  end: 'text-right items-end',
} as const

export function Section({
  children,
  className,
  as: Component = 'section',
  id,
  spacing = 'md',
  background = 'default',
  align = 'start',
  bordered = false,
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        spacingClasses[spacing],
        SECTION_BACKGROUNDS[background],
        bordered && 'border-y border-border',
        'flex flex-col',
        alignClasses[align],
        className,
      )}
    >
      {children}
    </Component>
  )
}
