import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface EditorialLinkProps {
  to: string
  children: ReactNode
  className?: string
  variant?: 'default' | 'light'
}

export function EditorialLink({
  to,
  children,
  className,
  variant = 'default',
}: EditorialLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        'inline-block border-b pb-2 font-sans text-xs uppercase tracking-[var(--tracking-widest)]',
        'transition-[color,border-color] duration-[var(--transition-base)]',
        variant === 'light'
          ? 'border-ivory/50 text-ivory/80 hover:border-ivory hover:text-ivory'
          : 'border-bronze text-muted hover:text-accent',
        className,
      )}
    >
      {children}
    </Link>
  )
}
