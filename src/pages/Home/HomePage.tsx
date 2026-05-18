import {
  HomeArchive,
  HomeClosing,
  HomeHero,
  HomeHighlights,
  HomeIntro,
  HomeSpaces,
} from '@/sections/home'

export function HomePage() {
  return (
    <article>
      <HomeHero />
      <HomeIntro />
      <HomeArchive />
      <HomeHighlights />
      <HomeSpaces />
      <HomeClosing />
    </article>
  )
}
