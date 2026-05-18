import { useState } from 'react'
import { IMAGE_ASPECTS, type ImageAspect } from '@/lib/design'
import { cn } from '@/lib/utils'

interface ImageProps {
  src: string
  alt: string
  aspect?: ImageAspect
  className?: string
  wrapperClassName?: string
  priority?: boolean
  grayscale?: boolean
  hoverZoom?: boolean
  caption?: string
}

export function Image({
  src,
  alt,
  aspect = 'landscape',
  className,
  wrapperClassName,
  priority = false,
  grayscale = false,
  hoverZoom = true,
  caption,
}: ImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <figure className={cn('group overflow-hidden', wrapperClassName)}>
      <div
        className={cn(
          'relative overflow-hidden bg-surface-inset',
          IMAGE_ASPECTS[aspect],
          !loaded && 'animate-pulse',
        )}
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={cn(
            'h-full w-full object-cover transition-[transform,filter,opacity] duration-[var(--transition-slow)]',
            hoverZoom && 'group-hover:scale-[1.02]',
            grayscale && 'grayscale group-hover:grayscale-0',
            !loaded && 'opacity-0',
            loaded && 'opacity-100',
            className,
          )}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 font-sans text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
