import { BRAND, type BrandLogoContext } from '@/lib/branding'
import { cn } from '@/lib/utils'

type BrandLogoVariant = 'horizontal' | 'vertical'

interface BrandLogoProps {
  variant?: BrandLogoVariant
  /** Contexto de uso — define escala institucional */
  context?: BrandLogoContext
  className?: string
  imgClassName?: string
  priority?: boolean
}

const contextSizes: Record<
  BrandLogoContext,
  Record<BrandLogoVariant, string>
> = {
  nav: {
    horizontal:
      'h-12 w-auto min-h-[3rem] max-h-[4.25rem] min-w-[12.5rem] max-w-[min(24rem,62vw)] sm:h-[3.375rem] sm:min-w-[14rem] sm:max-w-[26rem] md:h-14 md:min-w-[15.5rem] md:max-w-[28rem] lg:h-[3.75rem] lg:min-w-[17rem] lg:max-w-[32rem] xl:h-16 xl:max-w-[34rem]',
    vertical:
      'h-28 w-auto max-w-[10rem] md:h-32 md:max-w-[11.5rem]',
  },
  navMobile: {
    horizontal:
      'h-[3.375rem] w-auto min-w-[13.5rem] max-w-[min(26rem,92vw)] sm:h-14 sm:max-w-[28rem]',
    vertical: 'h-32 w-auto max-w-[11rem]',
  },
  footer: {
    horizontal:
      'h-[4.5rem] w-auto min-w-[16rem] max-w-[min(28rem,96vw)] sm:h-20 sm:max-w-[32rem] md:h-[5.5rem] md:min-w-[18rem] md:max-w-[36rem] lg:h-24 lg:min-w-[20rem] lg:max-w-[38rem]',
    vertical:
      'h-36 w-auto max-w-[13rem] md:h-40 md:max-w-[15rem]',
  },
  seal: {
    horizontal:
      'h-16 w-auto max-w-[22rem] md:h-[4.25rem] md:max-w-[26rem]',
    vertical:
      'h-36 w-auto max-w-[12rem] sm:h-40 sm:max-w-[13.5rem] md:h-44 md:max-w-[15rem]',
  },
  loader: {
    horizontal: 'h-[4.25rem] w-auto max-w-[26rem]',
    vertical:
      'h-40 w-auto max-w-[13rem] sm:h-44 sm:max-w-[14rem] md:h-48 md:max-w-[15rem]',
  },
}

export function BrandLogo({
  variant = 'horizontal',
  context = 'nav',
  className,
  imgClassName,
  priority = false,
}: BrandLogoProps) {
  const src =
    variant === 'horizontal' ? BRAND.logoHorizontal : BRAND.logoVertical

  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-start',
        className,
      )}
    >
      <img
        src={src}
        alt={BRAND.alt}
        className={cn(
          'max-w-none object-contain object-left',
          'select-none',
          contextSizes[context][variant],
          imgClassName,
        )}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        draggable={false}
      />
    </span>
  )
}
