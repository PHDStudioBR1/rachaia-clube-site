const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')

const BASE_URL = 'https://www.rachaiaclube.com.br'

const pages = [
  '/',
  '/sobre',
  '/eventos',
  '/publicacoes',
  '/alguel-de-espa%C3%A7o',
  '/contato',
]

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

async function downloadFile(url, filepath) {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      console.log(`Erro HTTP ao baixar: ${url}`)
      return
    }

    const buffer = await response.arrayBuffer()

    fs.writeFileSync(filepath, Buffer.from(buffer))
  } catch (err) {
    console.log(`Erro ao baixar arquivo: ${url}`)
  }
}

const SLUG_ALIASES = {
  'alguel-de-espa-C3-A7o': 'aluguel-de-espaco',
}

function sanitizeSlug(route) {
  if (route === '/') return 'home'

  const raw = route
    .replace(/\//g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '-')

  return SLUG_ALIASES[raw] || raw.toLowerCase()
}

function getExtension(url) {
  try {
    const cleanUrl = url.split('?')[0]
    const ext = cleanUrl.split('.').pop()

    if (ext.length > 5) return 'jpg'

    return ext
  } catch {
    return 'jpg'
  }
}

async function crawl() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  })

  const page = await browser.newPage()

  await ensureDir('content/raw')
  await ensureDir('content/processed')
  await ensureDir('public/images')
  await ensureDir('public/pdfs')
  await ensureDir('public/videos')

  const sitemap = []

  for (const route of pages) {
    const url = `${BASE_URL}${route}`

    console.log(`\nAcessando: ${url}`)

    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 0,
    })

    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight)
    })

    await new Promise(resolve => setTimeout(resolve, 3000))

    const title = await page.title()

    const textContent = await page.evaluate(() => {
      return document.body.innerText
    })

    const assets = await page.evaluate(() => {
      const images = Array.from(document.images)
        .map(img => img.src || img.getAttribute('data-src'))
        .filter(Boolean)

      const backgroundImages = Array.from(document.querySelectorAll('*'))
        .map(el => {
          const style = window.getComputedStyle(el)
          const bg = style.backgroundImage

          if (bg && bg !== 'none') {
            const match = bg.match(/url\(["']?(.*?)["']?\)/)

            return match ? match[1] : null
          }

          return null
        })
        .filter(Boolean)

      const pdfs = Array.from(document.querySelectorAll('a'))
        .map(a => a.href)
        .filter(href => href.includes('.pdf'))

      const videos = Array.from(
        document.querySelectorAll('video, iframe')
      )
        .map(el => el.src)
        .filter(Boolean)

      return {
        images: [...new Set([...images, ...backgroundImages])],
        pdfs: [...new Set(pdfs)],
        videos: [...new Set(videos)],
      }
    })

    const slug = sanitizeSlug(route)

    const contentData = {
      url,
      title,
      text: textContent,
      images: assets.images,
      pdfs: assets.pdfs,
      videos: assets.videos,
    }

    fs.writeFileSync(
      path.join('content/raw', `${slug}.json`),
      JSON.stringify(contentData, null, 2)
    )

    sitemap.push({
      slug,
      url,
      title,
    })

    const imageFolder = path.join('public/images', slug)
    const pdfFolder = path.join('public/pdfs', slug)

    await ensureDir(imageFolder)
    await ensureDir(pdfFolder)

    console.log(`Baixando imagens de: ${slug}`)

    for (let i = 0; i < assets.images.length; i++) {
      const img = assets.images[i]

      if (!img.startsWith('http')) continue

      const extension = getExtension(img)

      const filename = `image-${i}.${extension}`

      const filepath = path.join(imageFolder, filename)

      await downloadFile(img, filepath)
    }

    console.log(`Baixando PDFs de: ${slug}`)

    for (let i = 0; i < assets.pdfs.length; i++) {
      const pdf = assets.pdfs[i]

      if (!pdf.startsWith('http')) continue

      const filename = `document-${i}.pdf`

      const filepath = path.join(pdfFolder, filename)

      await downloadFile(pdf, filepath)
    }

    console.log(`✓ Página salva: ${slug}`)
    console.log(`→ Imagens encontradas: ${assets.images.length}`)
    console.log(`→ PDFs encontrados: ${assets.pdfs.length}`)
    console.log(`→ Vídeos encontrados: ${assets.videos.length}`)
  }

  fs.writeFileSync(
    'content/raw/sitemap.json',
    JSON.stringify(sitemap, null, 2)
  )

  console.log('\n✓ Sitemap gerado')
  console.log('✓ Extração finalizada')

  await browser.close()
}

crawl()