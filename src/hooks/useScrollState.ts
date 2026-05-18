import { useEffect, useState } from 'react'

interface UseScrollStateOptions {
  threshold?: number
}

export function useScrollState({ threshold = 24 }: UseScrollStateOptions = {}) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return { isScrolled }
}
