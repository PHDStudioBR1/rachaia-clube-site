import type { ElementType, ReactNode } from 'react'
import type { ContainerVariant } from '@/lib/design'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: ElementType
  variant?: ContainerVariant
  flush?: boolean
}

const variantClasses: Record<ContainerVariant, string> = {
  default: 'max-w-[var(--container-max)]',
  narrow: 'max-w-[var(--container-narrow)]',
  prose: 'max-w-[var(--container-prose)]',
  wide: 'max-w-[var(--container-wide)]',
  full: 'max-w-none',
}

export function Container({
  children,
  className,
  as: Component = 'div',
  variant = 'default',
  flush = false,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full',
        !flush && 'px-[var(--container-padding)]',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </Component>
  )
}
