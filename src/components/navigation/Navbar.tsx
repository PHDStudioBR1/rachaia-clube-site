import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { useScrollState } from '@/hooks/useScrollState'
import { fadeIn, motionTransition } from '@/lib/motion'
import { NAV_ITEMS, SITE_NAME, SITE_TAGLINE } from '@/lib/site'
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
      <Container as="nav" className="flex h-[var(--header-height)] items-center justify-between gap-8">
        <Link
          to="/"
          className="group flex flex-col leading-none"
          onClick={closeMobile}
        >
          <span className="font-serif text-xl tracking-[var(--tracking-tight)] text-foreground transition-[color,opacity] duration-[var(--transition-base)] group-hover:text-accent md:text-2xl">
            {SITE_NAME}
          </span>
          <span className="mt-1 font-sans text-[0.625rem] uppercase tracking-[var(--tracking-widest)] text-muted-foreground">
            {SITE_TAGLINE}
          </span>
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                end={item.href === '/'}
                className="group relative block py-1"
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
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60',
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-surface/80 text-foreground shadow-[var(--shadow-xs)] transition-[background-color,border-color,box-shadow] duration-[var(--transition-base)] hover:border-bronze/30 hover:bg-ivory lg:hidden"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          {isMobileOpen ? <X size={20} strokeWidth={1.25} /> : <Menu size={20} strokeWidth={1.25} />}
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
            <Container className="py-6">
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
                          'block rounded-sm px-4 py-3 font-sans text-sm tracking-[var(--tracking-wide)] transition-colors duration-[var(--transition-base)]',
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
