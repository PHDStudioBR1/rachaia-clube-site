import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { Container } from '@/components/ui/Container'
import { useScrollState } from '@/hooks/useScrollState'
import { fadeIn, motionTransition } from '@/lib/motion'
import { NAV_ITEMS } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { isScrolled } = useScrollState({ threshold: 32 })
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const closeMobile = () => setIsMobileOpen(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-[var(--transition-base)]',
        isScrolled
          ? 'border-b border-border-subtle bg-[var(--navbar-bg-scrolled)] shadow-[var(--shadow-xs)] backdrop-blur-[var(--navbar-blur)]'
          : 'border-b border-transparent bg-[var(--navbar-bg-transparent)]',
      )}
    >
      <Container
        as="nav"
        className="flex min-h-[var(--header-height)] items-center justify-between gap-5 py-3.5 md:gap-10 md:py-4 lg:gap-14"
      >
        <Link
          to="/"
          className="group relative z-10 inline-flex shrink-0 items-center self-center py-0.5 pr-3 transition-opacity duration-[var(--transition-base)] hover:opacity-[0.88] md:pr-8 lg:pr-10"
          onClick={closeMobile}
          aria-label="Rachaia Clube — Início"
        >
          <BrandLogo variant="horizontal" context="nav" priority />
        </Link>

        <ul className="hidden items-center gap-8 xl:gap-10 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                end={item.href === '/'}
                className="group relative block py-2"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={cn(
                        'font-sans text-sm tracking-[var(--tracking-wide)] transition-colors duration-[var(--transition-base)]',
                        isActive
                          ? 'text-foreground'
                          : 'text-muted hover:text-accent',
                      )}
                    >
                      {item.label}
                    </span>
                    <span
                      className={cn(
                        'absolute -bottom-0.5 left-0 h-px bg-bronze transition-all duration-[var(--transition-base)]',
                        isActive
                          ? 'w-full opacity-100'
                          : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60',
                      )}
                      aria-hidden
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-sm border border-border bg-surface/80 text-foreground shadow-[var(--shadow-xs)] transition-[background-color,border-color] duration-[var(--transition-base)] hover:border-bronze/30 hover:bg-ivory lg:hidden"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          {isMobileOpen ? (
            <X size={20} strokeWidth={1.25} />
          ) : (
            <Menu size={20} strokeWidth={1.25} />
          )}
        </button>
      </Container>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={motionTransition.base}
            className="overflow-hidden border-t border-border-subtle bg-[var(--navbar-bg-scrolled)] backdrop-blur-[var(--navbar-blur)] lg:hidden"
          >
            <Container className="py-8">
              <motion.div
                className="mb-8 flex justify-center border-b border-border-subtle pb-8"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                <BrandLogo variant="horizontal" context="navMobile" priority />
              </motion.div>
              <motion.ul
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-1"
              >
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      end={item.href === '/'}
                      onClick={closeMobile}
                      className={({ isActive }) =>
                        cn(
                          'block rounded-sm px-4 py-3.5 font-sans text-sm tracking-[var(--tracking-wide)] transition-colors duration-[var(--transition-base)]',
                          isActive
                            ? 'bg-ivory text-foreground'
                            : 'text-muted hover:bg-ivory/60 hover:text-foreground',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </motion.ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
