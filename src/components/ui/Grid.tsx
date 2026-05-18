import type { ElementType, ReactNode } from 'react'
import { GRID_PRESETS } from '@/lib/design'
import { cn } from '@/lib/utils'

type GridPreset = keyof typeof GRID_PRESETS

interface GridProps {
  children: ReactNode
  className?: string
  as?: ElementType
  preset?: GridPreset
  cols?: string
}

export function Grid({
  children,
  className,
  as: Component = 'div',
  preset = 'editorial',
  cols,
}: GridProps) {
  return (
    <Component className={cn(cols ?? GRID_PRESETS[preset], className)}>
      {children}
    </Component>
  )
}

type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface GridItemProps {
  children: ReactNode
  className?: string
  span?: ColSpan
  spanMd?: ColSpan
}

const spanClasses: Record<ColSpan, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
}

const spanMdClasses: Record<ColSpan, string> = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  5: 'md:col-span-5',
  6: 'md:col-span-6',
  7: 'md:col-span-7',
  8: 'md:col-span-8',
  9: 'md:col-span-9',
  10: 'md:col-span-10',
  11: 'md:col-span-11',
  12: 'md:col-span-12',
}

export function GridItem({
  children,
  className,
  span = 12,
  spanMd,
}: GridItemProps) {
  return (
    <div
      className={cn(
        spanClasses[span],
        spanMd && spanMdClasses[spanMd],
        className,
      )}
    >
      {children}
    </div>
  )
}
