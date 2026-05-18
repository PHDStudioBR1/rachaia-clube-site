/**
 * Curadoria manual de imagens REAIS — apenas acervo local.
 * Excluídos: logos, ícones PNG pequenos, assets de UI do Wix.
 */

export interface CuratedImage {
  src: string
  alt: string
}

export interface ArchiveCard {
  image: CuratedImage
  title: string
  body: string
  offset?: 'none' | 'mid' | 'low'
}

function img(folder: string, file: string, alt: string): CuratedImage {
  return { src: `/images/${folder}/${file}`, alt }
}

export const MEDIA = {
  home: {
    hero: img('home', 'image-004.jpg', 'Rachaia Clube — ambiente institucional em São Paulo'),
    intro: img('home', 'image-006.jpg', 'Encontros e celebrações no Rachaia Clube'),
    festas: img('home', 'image-010.jpg', 'Festas e eventos do clube'),
    culinaria: img('home', 'image-008.jpg', 'Culinária e tradição libanesa no clube'),
    revista: img('home', 'image-019.jpg', 'Capa da revista Rachaia News'),
  },

  archive: [
    {
      image: img('sobre', 'image-006.jpg', 'Registro histórico do Rachaia Clube'),
      title: 'Desde 1936',
      body: 'Fundado em 24 de julho de 1936, o clube nasceu como núcleo de convivência e memória da comunidade libanesa em São Paulo.',
      offset: 'mid',
    },
    {
      image: img('sobre', 'image-010.jpg', 'Memórias e arquivo fotográfico do clube'),
      title: 'Memórias preservadas',
      body: 'Décadas de encontros, celebrações e registros que mantêm viva a história de quem construiu esta casa.',
      offset: 'none',
    },
    {
      image: img('sobre', 'image-014.jpg', 'Sede e trajetória do Rachaia Clube'),
      title: 'Uma casa viva',
      body: 'Da primeira sede à Tangará — o Rachaia Clube segue acolhendo gerações com tradição e pertencimento.',
      offset: 'low',
    },
  ] satisfies ArchiveCard[],

  historia: {
    hero: img('sobre', 'image-008.jpg', 'Arquivo histórico do Rachaia Clube'),
    origem: img('sobre', 'image-012.jpg', 'Comunidade e tradição no Rachaia Clube'),
    fundacao: img('sobre', 'image-016.jpg', 'Sedes e trajetória institucional'),
    gallery: [
      img('sobre', 'image-006.jpg', 'Memória do Rachaia Clube'),
      img('sobre', 'image-010.jpg', 'Registro histórico'),
      img('sobre', 'image-014.jpg', 'Arquivo fotográfico'),
      img('sobre', 'image-018.jpg', 'Celebração e tradição'),
      img('sobre', 'image-020.jpg', 'Encontros no clube'),
      img('sobre', 'image-022.jpg', 'Comunidade reunida'),
      img('sobre', 'image-024.jpg', 'Legado institucional'),
      img('sobre', 'image-028.jpg', 'Rachaia Clube — memórias'),
    ],
    legado: img('sobre', 'image-030.jpg', 'Tradição viva no Rachaia Clube'),
  },

  eventos: {
    hero: img('eventos', 'image-003.jpg', 'Celebração no Rachaia Clube'),
    gastronomia: img('home', 'image-008.jpg', 'Gastronomia e festas típicas'),
    convivencia: img('home', 'image-010.jpg', 'Encontros e festas no clube'),
    celebracao: img('eventos', 'image-004.jpg', 'Eventos e celebrações'),
    gallery: [
      img('eventos', 'image-003.jpg', 'Evento no Rachaia Clube'),
      img('eventos', 'image-004.jpg', 'Celebração comunitária'),
      img('eventos', 'image-004.jpg', 'Momento de convivência'),
      img('home', 'image-011.jpg', 'Festas e encontros'),
      img('home', 'image-013.jpg', 'Vida social no clube'),
      img('home', 'image-015.jpg', 'Tradição e celebração'),
    ],
  },

  espaco: {
    hero: img('aluguel-de-espaco', 'image-012.jpg', 'Ambiente do Rachaia Clube para eventos'),
    principal: img('aluguel-de-espaco', 'image-005.jpg', 'Salão para festas e celebrações'),
    secundaria: img('aluguel-de-espaco', 'image-018.jpg', 'Espaço acolhedor para encontros'),
    gallery: [
      img('aluguel-de-espaco', 'image-005.jpg', 'Salão principal'),
      img('aluguel-de-espaco', 'image-007.jpg', 'Ambiente para eventos'),
      img('aluguel-de-espaco', 'image-009.jpg', 'Espaço do clube'),
      img('aluguel-de-espaco', 'image-012.jpg', 'Área para celebrações'),
      img('aluguel-de-espaco', 'image-015.jpg', 'Salão e convivência'),
      img('aluguel-de-espaco', 'image-018.jpg', 'Ambiente institucional'),
      img('aluguel-de-espaco', 'image-022.jpg', 'Espaço para reuniões'),
      img('aluguel-de-espaco', 'image-025.jpg', 'Cenário para festas'),
      img('aluguel-de-espaco', 'image-030.jpg', 'Arquitetura do clube'),
    ],
  },
} as const

export const HOME_HIGHLIGHTS = [
  {
    label: 'Tradição',
    title: 'Festas típicas e encontros dominicais',
    tag: 'Comunidade',
  },
  {
    label: 'Cultura',
    title: 'Celebrações, reuniões e momentos compartilhados',
    tag: 'Eventos',
  },
  {
    label: 'Memória',
    title: 'Revista Rachaia News — histórias da casa desde 2016',
    tag: 'Publicações',
  },
] as const
