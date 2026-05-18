/**
 * Conteúdo editorial curado — extraído e refinado do acervo real.
 * Nunca renderizar texto bruto do crawler nas páginas.
 */

export interface TimelineEntry {
  period: string
  title: string
  body: string
}

export interface EditorialBlock {
  eyebrow: string
  title: string
  body: string
}

export interface RecurringEvent {
  title: string
  schedule: string
  description: string
}

export const EDITORIAL = {
  historia: {
    hero: {
      eyebrow: 'Desde 1936',
      title: 'Quase um século de memória e pertencimento',
      subtitle:
        'A trajetória de uma comunidade que construiu, em São Paulo, um lar de tradição libanesa.',
    },
    origem: {
      eyebrow: 'Origem',
      title: 'Raízes que atravessaram o Atlântico',
      paragraphs: [
        'O Rachaia Clube do Brasil nasceu em 24 de julho de 1936, fruto da visão de imigrantes libaneses que buscavam um espaço de convivência, apoio mútuo e preservação cultural no coração da metrópole.',
        'O que começou como encontro entre famílias tornou-se instituição: um lugar onde a memória se transmite, as festas se renovam e cada geração encontra suas raízes.',
      ],
    },
    fundacao: {
      eyebrow: 'Fundação',
      title: 'Três endereços, uma mesma alma',
      body: 'Com sua primeira sede na Rua São Bento (Prédio Martinelli), o clube mudou-se para a Avenida Paulista e, com o apoio dos sócios fundadores, adquiriu propriedade na Avenida Conselheiro Rodrigues Alves, na Vila Mariana, onde foi erguida uma sede magnífica. Hoje, nossa casa está na Rua Tangará, 349 — Vila Clementino — e continua acolhendo a comunidade com o mesmo espírito de sempre.',
    },
    timeline: [
      {
        period: '1936',
        title: 'Fundação',
        body: 'Nascimento do Rachaia Clube na Rua São Bento, marco da comunidade libanesa em São Paulo.',
      },
      {
        period: 'Décadas seguintes',
        title: 'Crescimento e sedes',
        body: 'Mudança para a Avenida Paulista e consolidação como referência social e cultural.',
      },
      {
        period: 'Vila Mariana',
        title: 'A grande sede',
        body: 'Construção de sede na Av. Conselheiro Rodrigues Alves — arquitetura que marcou época na cidade.',
      },
      {
        period: 'Hoje',
        title: 'Tangará, 349',
        body: 'Na Vila Clementino, o clube segue vivo: encontros, festas, memória e pertencimento para novas gerações.',
      },
    ] satisfies TimelineEntry[],
    legado: {
      eyebrow: 'Legado',
      title: 'Uma instituição que ainda respira',
      body: 'O Rachaia Clube não é apenas arquivo: é encontro dominical, festa típica, celebração em família e continuidade de uma cultura que se reinventa sem perder a essência. Cada foto, cada mesa posta, cada riso no salão reafirma que a tradição está viva.',
    },
  },

  eventos: {
    hero: {
      eyebrow: 'Vida no clube',
      title: 'Onde a comunidade se encontra',
      subtitle:
        'Festas, sabores, música e convivência — a cultura libanesa vivida com calor humano.',
    },
    intro: {
      body: 'No Rachaia Clube, os eventos não são espetáculo distante: são mesa compartilhada, conversa, dança e memória. Venha fazer parte dos nossos encontros.',
    },
    experiencias: [
      {
        eyebrow: 'Gastronomia',
        title: 'Sabores que contam histórias',
        body: 'Festas típicas com toda a tradição, cultura e sabores do Líbano — a culinária como elo entre gerações.',
      },
      {
        eyebrow: 'Convivência',
        title: 'Encontros dominicais',
        body: 'Venha fazer parte de nossos encontros dominicais e compartilhar ótimos momentos em família e entre amigos.',
      },
      {
        eyebrow: 'Celebração',
        title: 'Festas e encontros',
        body: 'Cada celebração no clube reforça o sentimento de pertencimento — um espaço onde todos são acolhidos.',
      },
    ] satisfies EditorialBlock[],
    programacao: [
      {
        title: 'Evento Árabe Quinzenal',
        schedule: 'Sextas-feiras (quinzenal) · a partir das 20h',
        description:
          'Noite de encontro, música e tradição — um dos rituais mais esperados da casa.',
      },
      {
        title: 'Aperitivo Árabe',
        schedule: 'Último domingo de cada mês · após as 12h',
        description:
          'Encontro dominical para saborear, conversar e celebrar a comunidade em ambiente acolhedor.',
      },
    ] satisfies RecurringEvent[],
  },

  espaco: {
    hero: {
      eyebrow: 'Aluguel de espaço',
      title: 'Um cenário para momentos que importam',
      subtitle:
        'Festas, celebrações, reuniões e encontros — com a tradição e o acolhimento do Rachaia.',
    },
    apresentacao: {
      eyebrow: 'O espaço',
      title: 'Versatilidade com alma institucional',
      paragraphs: [
        'Faça seu evento conosco. Temos o ambiente certo para festas, celebrações, reuniões, workshops e encontros que pedem um cenário com história e elegância.',
        'Não é sala comercial nem hotel: é a casa de uma comunidade — com calor humano, identidade cultural e infraestrutura pensada para receber bem.',
      ],
    },
    experiencia: {
      eyebrow: 'Experiência',
      title: 'Acolhimento que se sente',
      body: 'Cada evento realizado no Rachaia Clube carrega o peso simbólico de um lugar fundado em 1936. Aqui, tradição e celebração caminham juntas.',
    },
  },

  contato: {
    hero: {
      eyebrow: 'Contato',
      title: 'Estamos na Vila Clementino',
      subtitle:
        'Festas, eventos, aluguel de espaços — fale conosco. Será um prazer recebê-lo.',
    },
    formIntro:
      'Para saber mais sobre festas, eventos e aluguel de espaços, entre em contato. Nossa equipe orienta você com atenção e discrição.',
    email: 'contato@rachaiaclube.com.br',
    cep: '04019-030',
    mapLabel: 'Ver no mapa',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Rua+Tangará+349,+Vila+Clementino,+São+Paulo,+SP',
  },
} as const
