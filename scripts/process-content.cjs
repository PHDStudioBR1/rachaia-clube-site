const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const ROOT = path.resolve(__dirname, '..')
const RAW_DIR = path.join(ROOT, 'content', 'raw')
const PROCESSED_DIR = path.join(ROOT, 'content', 'processed')
const IMAGES_DIR = path.join(ROOT, 'public', 'images')
const PDFS_DIR = path.join(ROOT, 'public', 'pdfs')
const VIDEOS_DIR = path.join(ROOT, 'public', 'videos')
const SITE_STRUCTURE_PATH = path.join(ROOT, 'content', 'site-structure.json')
const ASSETS_REPORT_PATH = path.join(ROOT, 'content', 'assets-report.json')
const CONTENT_TS_PATH = path.join(ROOT, 'src', 'data', 'content.ts')

const VALID_IMAGE_EXT = new Set(['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'svg'])
const SKIP_RAW_FILES = new Set(['sitemap.json'])

const SLUG_ALIASES = {
  'alguel-de-espa-C3-A7o': 'aluguel-de-espaco',
  'alguel-de-espaço': 'aluguel-de-espaco',
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function normalizeSlug(rawSlug) {
  if (SLUG_ALIASES[rawSlug]) return SLUG_ALIASES[rawSlug]
  return rawSlug
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/%[0-9A-Fa-f]{2}/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
}

function cleanText(text) {
  if (!text || typeof text !== 'string') return ''

  return text
    .replace(/\u200B/g, '')
    .replace(/\u00A0/g, ' ')
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .split('\n')
    .map(line => line.trim())
    .filter((line, i, arr) => line.length > 0 || (i > 0 && arr[i - 1].length > 0))
    .join('\n')
    .trim()
}

function dedupeArray(items) {
  return [...new Set(items.filter(Boolean))]
}

function isDecorativeImage(url) {
  if (!url || typeof url !== 'string') return true
  if (url.startsWith('data:image/svg')) return true
  if (url.startsWith('data:image/png;base64,iVBORw0KGgo')) return true
  if (url.includes('/w_25,h_25,') || url.includes('/w_53,h_59,')) return true
  if (/Logo%20|logo|favicon|Whatsapp_edited/i.test(url)) return true
  return false
}

function wixMediaId(url) {
  if (!url || !url.includes('wixstatic.com/media/')) return null
  const match = url.match(/media\/([^/]+)/)
  return match ? match[1].split('~')[0] : null
}

function filterImages(urls) {
  const seen = new Set()
  return dedupeArray(urls)
    .filter(url => !isDecorativeImage(url))
    .filter(url => {
      const id = wixMediaId(url)
      if (!id) return url.startsWith('http') || url.startsWith('/')
      if (seen.has(id)) return false
      seen.add(id)
      return true
    })
}

function filterVideos(urls) {
  return dedupeArray(urls).filter(
    url =>
      url &&
      !url.includes('engage.wixapps.net/chat-widget') &&
      !url.includes('wix.com/consent')
  )
}

function extractSlugFromRaw(filename, data) {
  const base = path.basename(filename, '.json')
  if (base === 'home' || data?.url?.endsWith('.com.br/') || data?.url?.endsWith('.com.br')) {
    return 'home'
  }
  return normalizeSlug(base)
}

function fileHash(filepath) {
  const buf = fs.readFileSync(filepath)
  return crypto.createHash('md5').update(buf).digest('hex')
}

function getExt(filepath) {
  return path.extname(filepath).slice(1).toLowerCase()
}

function normalizeExt(ext) {
  if (ext === 'jpeg') return 'jpg'
  return ext
}

function organizeImagesForSlug(rawSlug, processedSlug, rawImageUrls) {
  const rawFolder = path.join(IMAGES_DIR, rawSlug)
  const targetFolder = path.join(IMAGES_DIR, processedSlug)

  const report = {
    slug: processedSlug,
    rawFolder,
    targetFolder,
    removedEmpty: 0,
    removedDuplicates: 0,
    removedInvalidExt: 0,
    renamed: 0,
    brokenRefs: [],
    finalImages: [],
  }

  if (!fs.existsSync(rawFolder)) {
    if (rawSlug !== processedSlug) {
      const alt = path.join(IMAGES_DIR, processedSlug)
      if (!fs.existsSync(alt)) return report
    } else {
      return report
    }
  }

  ensureDir(targetFolder)

  const files = fs
    .readdirSync(rawFolder)
    .filter(f => fs.statSync(path.join(rawFolder, f)).isFile())

  const validFiles = []

  for (const file of files) {
    const fullPath = path.join(rawFolder, file)
    const stat = fs.statSync(fullPath)

    if (stat.size === 0) {
      fs.unlinkSync(fullPath)
      report.removedEmpty++
      continue
    }

    const ext = normalizeExt(getExt(file))
    if (!VALID_IMAGE_EXT.has(ext)) {
      fs.unlinkSync(fullPath)
      report.removedInvalidExt++
      continue
    }

    validFiles.push({ file, fullPath, ext, size: stat.size })
  }

  const hashMap = new Map()
  const uniqueFiles = []

  for (const item of validFiles) {
    const hash = fileHash(item.fullPath)
    if (hashMap.has(hash)) {
      fs.unlinkSync(item.fullPath)
      report.removedDuplicates++
      continue
    }
    hashMap.set(hash, item)
    uniqueFiles.push(item)
  }

  uniqueFiles.sort((a, b) => {
    const numA = parseInt(a.file.match(/image-(\d+)/)?.[1] ?? '9999', 10)
    const numB = parseInt(b.file.match(/image-(\d+)/)?.[1] ?? '9999', 10)
    return numA - numB
  })

  const localPaths = []

  uniqueFiles.forEach((item, index) => {
    const num = String(index + 1).padStart(3, '0')
    const newName = `image-${num}.${item.ext === 'jpeg' ? 'jpg' : item.ext}`
    const destPath = path.join(targetFolder, newName)

    if (item.fullPath !== destPath) {
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath)
      fs.renameSync(item.fullPath, destPath)
      report.renamed++
    }

    localPaths.push(`/images/${processedSlug}/${newName}`)
    report.finalImages.push(newName)
  })

  if (rawSlug !== processedSlug && rawFolder !== targetFolder && fs.existsSync(rawFolder)) {
    const remaining = fs.readdirSync(rawFolder)
    if (remaining.length === 0) {
      try {
        fs.rmdirSync(rawFolder)
      } catch {
        /* ignore */
      }
    }
  }

  const expectedCount = filterImages(rawImageUrls || []).length
  if (localPaths.length === 0 && expectedCount > 0) {
    report.brokenRefs.push(`Nenhuma imagem local para ${expectedCount} URLs extraídas`)
  }

  return { report, localPaths }
}

function mapImagesToLocal(urls, localPaths) {
  const httpUrls = filterImages(urls)
  if (localPaths.length === 0) return httpUrls.filter(u => u.startsWith('/'))

  const result = [...localPaths]
  const localCount = localPaths.length

  httpUrls.slice(localCount).forEach(url => {
    if (url.startsWith('http')) result.push(url)
  })

  return dedupeArray(result)
}

function processRawFile(filename) {
  const rawPath = path.join(RAW_DIR, filename)
  const raw = JSON.parse(fs.readFileSync(rawPath, 'utf8'))

  const rawSlug = path.basename(filename, '.json')
  const slug = extractSlugFromRaw(filename, raw)

  const cleaned = {
    slug,
    title: (raw.title || '').trim(),
    url: (raw.url || '').trim(),
    text: cleanText(raw.text),
    images: filterImages(raw.images || []),
    videos: filterVideos(raw.videos || []),
    pdfs: dedupeArray(raw.pdfs || []),
  }

  const { report: imageReport, localPaths } = organizeImagesForSlug(
    rawSlug,
    slug,
    raw.images
  )

  cleaned.images = mapImagesToLocal(raw.images, localPaths)

  const outPath = path.join(PROCESSED_DIR, `${slug}.json`)
  fs.writeFileSync(outPath, JSON.stringify(cleaned, null, 2), 'utf8')

  return { cleaned, imageReport, rawSlug }
}

function buildSiteStructure(pages) {
  return {
    pages: pages.map(p => ({
      slug: p.slug,
      title: p.title,
      url: p.url,
      hasImages: p.images.length > 0,
      hasVideos: p.videos.length > 0,
      hasPDFs: p.pdfs.length > 0,
    })),
  }
}

function buildAssetsReport(pages, imageReports) {
  const perPage = pages.map(p => {
    const imgReport = imageReports.find(r => r.slug === p.slug)
    return {
      slug: p.slug,
      imageCount: p.images.length,
      videoCount: p.videos.length,
      pdfCount: p.pdfs.length,
      textLength: p.text.length,
      isEmpty:
        p.text.length < 50 &&
        p.images.length === 0 &&
        p.videos.length === 0 &&
        p.pdfs.length === 0,
    }
  })

  const brokenAssets = []
  const warnings = []

  imageReports.forEach(r => {
    r.brokenRefs?.forEach(msg => brokenAssets.push({ slug: r.slug, issue: msg }))
  })

  pages.forEach(p => {
    if (p.title.toLowerCase().includes('404')) {
      warnings.push({ slug: p.slug, issue: 'Página retornou erro 404 no Wix' })
    }
    if (p.text.length < 100 && p.slug !== 'contato') {
      warnings.push({ slug: p.slug, issue: 'Texto muito curto após limpeza' })
    }
  })

  return {
    generatedAt: new Date().toISOString(),
    summary: {
      totalPages: pages.length,
      totalImages: pages.reduce((s, p) => s + p.images.length, 0),
      totalVideos: pages.reduce((s, p) => s + p.videos.length, 0),
      totalPdfs: pages.reduce((s, p) => s + p.pdfs.length, 0),
      emptyPages: perPage.filter(p => p.isEmpty).map(p => p.slug),
    },
    perPage,
    imageOrganization: imageReports.map(r => ({
      slug: r.slug,
      removedEmpty: r.removedEmpty,
      removedDuplicates: r.removedDuplicates,
      removedInvalidExt: r.removedInvalidExt,
      renamed: r.renamed,
      finalCount: r.finalImages?.length ?? 0,
    })),
    brokenAssets,
    warnings,
    errors: [...brokenAssets, ...warnings],
  }
}

function generateContentTs(pages, siteStructure) {
  ensureDir(path.dirname(CONTENT_TS_PATH))

  const ts = `/* eslint-disable */
// Gerado automaticamente por scripts/process-content.cjs — não editar manualmente

export interface PageContent {
  slug: string
  title: string
  url: string
  text: string
  images: string[]
  videos: string[]
  pdfs: string[]
}

export interface SitePageMeta {
  slug: string
  title: string
  url: string
  hasImages: boolean
  hasVideos: boolean
  hasPDFs: boolean
}

export const pages: PageContent[] = ${JSON.stringify(pages, null, 2)} as const

export const siteStructure = ${JSON.stringify(siteStructure, null, 2)} as const

export const pageBySlug = Object.fromEntries(
  pages.map((p) => [p.slug, p])
) as Record<string, PageContent>

export default pages
`

  fs.writeFileSync(CONTENT_TS_PATH, ts, 'utf8')
}

function printReport(pages, assetsReport, imageReports) {
  const s = assetsReport.summary

  console.log('\n' + '='.repeat(60))
  console.log('  RELATÓRIO — Organização de conteúdo Rachaia Clube')
  console.log('='.repeat(60))
  console.log(`\n  Páginas processadas:     ${s.totalPages}`)
  console.log(`  Total de imagens:      ${s.totalImages}`)
  console.log(`  Total de vídeos:       ${s.totalVideos}`)
  console.log(`  Total de PDFs:         ${s.totalPdfs}`)

  if (s.emptyPages.length) {
    console.log(`\n  Páginas vazias:        ${s.emptyPages.join(', ')}`)
  }

  console.log('\n  Por página:')
  assetsReport.perPage.forEach(p => {
    console.log(
      `    • ${p.slug.padEnd(20)} img:${String(p.imageCount).padStart(3)}  vid:${String(p.videoCount).padStart(2)}  pdf:${String(p.pdfCount).padStart(2)}  texto:${p.textLength} chars`
    )
  })

  const imgStats = imageReports.reduce(
    (acc, r) => ({
      empty: acc.empty + r.removedEmpty,
      dupes: acc.dupes + r.removedDuplicates,
      invalid: acc.invalid + r.removedInvalidExt,
      renamed: acc.renamed + r.renamed,
    }),
    { empty: 0, dupes: 0, invalid: 0, renamed: 0 }
  )

  console.log('\n  Imagens organizadas:')
  console.log(`    Removidas (vazias):    ${imgStats.empty}`)
  console.log(`    Removidas (duplic.): ${imgStats.dupes}`)
  console.log(`    Removidas (ext inv): ${imgStats.invalid}`)
  console.log(`    Renomeadas:          ${imgStats.renamed}`)

  if (assetsReport.warnings.length) {
    console.log('\n  Avisos:')
    assetsReport.warnings.forEach(w => console.log(`    ⚠ ${w.slug}: ${w.issue}`))
  }

  if (assetsReport.brokenAssets.length) {
    console.log('\n  Assets com problema:')
    assetsReport.brokenAssets.forEach(b => console.log(`    ✗ ${b.slug}: ${b.issue}`))
  }

  console.log('\n  Arquivos gerados:')
  console.log('    content/processed/*.json')
  console.log('    content/site-structure.json')
  console.log('    content/assets-report.json')
  console.log('    src/data/content.ts')
  console.log('\n' + '='.repeat(60))
  console.log('  ✓ Pipeline concluído com sucesso\n')
}

function main() {
  ensureDir(RAW_DIR)
  ensureDir(PROCESSED_DIR)
  ensureDir(IMAGES_DIR)
  ensureDir(PDFS_DIR)
  ensureDir(VIDEOS_DIR)

  const rawFiles = fs
    .readdirSync(RAW_DIR)
    .filter(f => f.endsWith('.json') && !SKIP_RAW_FILES.has(f))

  if (rawFiles.length === 0) {
    console.error('Nenhum JSON encontrado em content/raw')
    process.exit(1)
  }

  console.log(`Processando ${rawFiles.length} página(s)...`)

  const results = rawFiles.map(processRawFile)
  const pages = results.map(r => r.cleaned).sort((a, b) => {
    const order = ['home', 'sobre', 'eventos', 'publicacoes', 'aluguel-de-espaco', 'contato']
    return order.indexOf(a.slug) - order.indexOf(b.slug)
  })

  const imageReports = results.map(r => r.imageReport)
  const siteStructure = buildSiteStructure(pages)
  const assetsReport = buildAssetsReport(pages, imageReports)

  fs.writeFileSync(SITE_STRUCTURE_PATH, JSON.stringify(siteStructure, null, 2), 'utf8')
  fs.writeFileSync(ASSETS_REPORT_PATH, JSON.stringify(assetsReport, null, 2), 'utf8')
  generateContentTs(pages, siteStructure)

  printReport(pages, assetsReport, imageReports)
}

main()
