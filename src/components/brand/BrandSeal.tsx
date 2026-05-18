import { Reveal } from '@/components/motion/Reveal'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { cn } from '@/lib/utils'

interface BrandSealProps {
  className?: string
  size?: 'default' | 'large'
}

/** Selo institucional — logo vertical, uso pontual */
export function BrandSeal({ className, size = 'default' }: BrandSealProps) {
  return (
    <Reveal className={cn('flex justify-center', className)}>
      <BrandLogo
        variant="vertical"
        context={size === 'large' ? 'loader' : 'seal'}
      />
    </Reveal>
  )
}
