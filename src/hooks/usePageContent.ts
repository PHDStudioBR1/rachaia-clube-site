import { useMemo } from 'react'
import { pageBySlug } from '@/data/content'
import type { PageContent } from '@/data/content'
import type { PageSlug } from '@/types'

export function usePageContent(slug: PageSlug): PageContent {
  return useMemo(() => {
    const content = pageBySlug[slug]
    if (!content) {
      throw new Error(`Conteúdo não encontrado para slug: ${slug}`)
    }
    return content
  }, [slug])
}

export function getTextPreview(text: string, maxLength = 480): string {
  const normalized = text.replace(/\n{2,}/g, '\n\n').trim()
  if (normalized.length <= maxLength) return normalized
  return `${normalized.slice(0, maxLength).trim()}…`
}
