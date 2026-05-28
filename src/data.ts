import { Product, Review, QuizQuestion } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'dyson-supersonic',
    name: 'Secador Dyson Supersonic™ Professional',
    brand: 'Dyson',
    category: 'dryers',
    price: 3499,
    originalPrice: 3899,
    rating: 4.9,
    reviewsCount: 184,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
    badge: 'Mais Desejado',
    description: 'O secador revolucionário com controle inteligente de calor e fluxo de ar ionizado de ultra-alta velocidade para secagem ultra-rápida sem calor extremo.',
    highlights: [
      'Controle Térmico Inteligente (mede 40x/seg)',
      'Motor Digital Dyson V9 no cabo',
      '5 acessórios magnéticos inclusos',
      'Reduz estática e frizz em até 61%'
    ],
    specs: {
      tempMax: '100°C (Seguro para fios delicados)',
      weight: '560g',
      technology: 'Multiplicador de Ar & Nano-Íons',
      idealFor: 'Todos os tipos de cabelo, proteção total do brilho',
      cable: '2.8m profissional',
      voltage: 'Bivolt Manual ou Monovolt (110v/220v)'
    }
  },
  {
    id: 'steampod-4',
    name: 'Prancha a Vapor SteamPod 4.0',
    brand: 'L\'Oréal Professionnel',
    category: 'straighteners',
    price: 2899,
    originalPrice: 3199,
    rating: 4.8,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600',
    badge: 'Tecnologia Vapor',
    description: 'A prancha profissional a vapor tudo-em-um para alisamento térmico impecável e cachos definidos com até 95% menos danos à fibra capilar.',
    highlights: [
      'Tecnologia patenteada de vapor contínuo',
      'Placas flutuantes de cerâmica de alta resistência',
      '3 pentes integrados otimizadores de vapor',
      'Design exterior arredondado para criar cachos perfeitos'
    ],
    specs: {
      tempMax: '210°C',
      weight: '490g',
      technology: 'Estilização a Vapor Seco Otimizado',
      idealFor: 'Cabelos danificados, loiros e volumosos',
      cable: '2.5m rotativo 360°',
      voltage: 'Bivolt Automático'
    }
  },
  {
    id: 'ghd-platinum',
    name: 'Prancha ghd Platinum+ Hair Straightener',
    brand: 'ghd',
    category: 'straighteners',
    price: 2199,
    rating: 4.9,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600',
    badge: 'Favorito dos Salões',
    description: 'A prancha inteligente definitiva que reconhece a espessura do seu cabelo e a velocidade de passadas, adaptando o calor para resultados extraordinários.',
    highlights: [
      'Tecnologia preditiva Ultra-zone™',
      'Temperatura constante ideal de 185°C (zero quebra)',
      'Eixo exclusivo pivotado para alinhamento de placas',
      'Desligamento automático inteligente após 30 min'
    ],
    specs: {
      tempMax: '185°C (Máxima proteção garantida)',
      weight: '400g',
      technology: 'Predição Inteligente Ultra-zone',
      idealFor: 'Uso diário, manutenção da cor e brilho extremo',
      cable: '2.7m rotativo',
      voltage: 'Bivolt Automático'
    }
  },
  {
    id: 'lizze-extreme',
    name: 'Prancha Profissional Lizze Extreme 250°C',
    brand: 'Lizze',
    category: 'straighteners',
    price: 649,
    originalPrice: 799,
    rating: 4.7,
    reviewsCount: 391,
    image: 'https://images.unsplash.com/photo-1605497746444-ac9da58480a8?auto=format&fit=crop&q=80&w=600',
    badge: 'Mais Rápida do Mundo',
    description: 'A favorita dos profissionais brasileiros de alisamento e progressiva. Economiza até 70% do tempo de selagem térmica com calor de titânio extremo de alto impacto.',
    highlights: [
      'Atinge até 250°C / 480°F reais',
      'Placas de titânio espelhado super deslizante',
      'Sistema de amortecimento de pressão nas placas',
      'Aquecimento ultra-rápido que não perde calor'
    ],
    specs: {
      tempMax: '250°C (480°F)',
      weight: '450g',
      technology: 'Resistências de MCH & Nano Titânio',
      idealFor: 'Progressivas, selagens e alisamento de alta velocidade',
      cable: '3.0m profissional',
      voltage: 'Bivolt Manual (chapa seletora) ou Monovolt'
    }
  },
  {
    id: 'parlux-alyon',
    name: 'Secador Profissional Parlux Alyon Air Ionizer',
    brand: 'Parlux',
    category: 'dryers',
    price: 1399,
    originalPrice: 1549,
    rating: 4.8,
    reviewsCount: 167,
    image: 'https://images.unsplash.com/photo-1511943806713-3392576b539b?auto=format&fit=crop&q=80&w=600',
    badge: 'Durabilidade lendária',
    description: 'O padrão ouro de confiabilidade e potência nas mãos dos melhores cabeleireiros do mundo. Extremamente potente, ergonômico, leve e durável.',
    highlights: [
      'Motor K-ADVANCE PLUS® com 3.000 horas de vida',
      'Tecnologia de Ionizador Air Ionizer Tech',
      'Corpo frontal anti-aquecimento de alta dissipação',
      'Incríveis 2250W de potência real'
    ],
    specs: {
      tempMax: '4 temperaturas / 2 velocidades',
      weight: '456g (Ultra leve e balanceado)',
      technology: 'Air Ionizer Tech (Cerâmica e Íons)',
      idealFor: 'Uso contínuo de salão de alta rotação',
      cable: '3.3m reforçado',
      voltage: '110V ou 220V em separado'
    }
  },
  {
    id: 'miracurl-babyliss',
    name: 'Modelador Automático MiraCurl™ Nano Titanium',
    brand: 'Babyliss PRO',
    category: 'curlers',
    price: 899,
    originalPrice: 1199,
    rating: 4.6,
    reviewsCount: 156,
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=600',
    badge: 'Cachos Perfeitos',
    description: 'O pioneiro criador de cachos automático. Puxa os cabelos suavemente para dentro da câmara de titânio, aquecendo de todas as direções uniformemente.',
    highlights: [
      'Motor sem escovas MaxLife™ de precisão',
      '3 níveis de temporizador com alertas sonoros',
      'Controle de direção de cachos (Esquerda/Direita/Alternado)',
      'Temperatura constante de recuperação ultra-rápida'
    ],
    specs: {
      tempMax: '230°C (450°F)',
      weight: '620g',
      technology: 'Câmara Cilíndrica Nano Titanium',
      idealFor: 'Pessoas com dificuldade de cachear à mão livre, cachos duradouros',
      cable: '2.4m rotativo profissional',
      voltage: 'Bivolt Automático'
    }
  },
  {
    id: 'ghd-curve-creative-wand',
    name: 'Modelador Cônico ghd Curve® Creative Wand',
    brand: 'ghd',
    category: 'curlers',
    price: 1699,
    rating: 4.8,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600',
    badge: 'Ondas de Cinema',
    description: 'Com ponta cônica inovadora de 28mm a 23mm, ideal para criar ondas praianas descontraídas e cachos soltos e naturais com polimento incomparável.',
    highlights: [
      'Tecnologia inteligente Tri-Zone™ de 6 sensores',
      'Temperatura segura ideal de 185°C constante',
      'Revestimento avançado de cerâmica para toque sedoso',
      'Ponta fria protetora para apoio fácil'
    ],
    specs: {
      tempMax: '185°C (Patente ghd)',
      weight: '350g (Super ergonômico)',
      technology: 'Tri-Zone Inteligente de Sensores Infravermelhos',
      idealFor: 'Ondas rústicas, visual "beach wave", pontas soltas modernas',
      cable: '2.7m rotativo de longo alcance',
      voltage: 'Bivolt Automático'
    }
  },
  {
    id: 'taiff-unique-duo',
    name: 'Secador Taiff Vulcan Unique Duo 2700W',
    brand: 'Taiff',
    category: 'dryers',
    price: 1149,
    originalPrice: 1299,
    rating: 4.7,
    reviewsCount: 228,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600',
    badge: 'Mais Potente do Brasil',
    description: 'Uma verdadeira turbina para escovações rápidas, potentes e cheias de brilho. Une gerador de íons negativos com motor AC de alta compressão aeronáutica.',
    highlights: [
      'Impressionantes 2700 Watts de purificação térmica',
      'Íons negativos para selagem de cutículas',
      'Grade revestida com cerâmica para ar homogêneo',
      'Botão de jato de ar frio instantâneo com trava metálica'
    ],
    specs: {
      tempMax: '5 variações de calor / 2 velocidades',
      weight: '595g de alta densidade',
      technology: 'Grade de Cerâmica Ativada + Turbina Vulcan',
      idealFor: 'Terapeutas capilares e selagem de alta potência',
      cable: '3.0m resistente',
      voltage: 'Bivolt Manual ou Monovolt Dedicado'
    }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Mariana Vasconcellos',
    rating: 5,
    hairType: 'Cabelo 3A (Cacheado Médio)',
    date: '24/05/2026',
    content: 'O Dyson Supersonic vale cada centavo! Eu passava 45 minutos secando meu cabelo com difusor e meus cachos ficavam cheios de frizz. Com o Dyson, o tempo caiu para 15 minutos e os cachos saem definidos, muito macios e sem aquela agressão do calor extremo. Recomendo de olhos fechados!',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    productName: 'Secador Dyson Supersonic™ Professional'
  },
  {
    id: 'rev-2',
    author: 'Karina Lopes',
    rating: 5,
    hairType: 'Cabelo Ondulado Descolorido',
    date: '18/05/2026',
    content: 'Comprei o Steampod 4.0 porque meu cabelo loiro estava destruído pelas pranchas comuns. O vapor faz toda a diferença do mundo! O cabelo desliza como seda, fica brilhoso e sinto que não quebra nadinha. O efeito espelhado dura dias, mesmo com umidade. Incrível!',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    productName: 'Prancha a Vapor SteamPod 4.0'
  },
  {
    id: 'rev-3',
    author: 'Ana Beatriz Souza',
    rating: 5,
    hairType: 'Cabelo Liso Fino',
    date: '02/05/2026',
    content: 'A ghd Platinum+ mudou minha rotina. O fato de ter apenas uma temperatura fixa de 185°C me dava medo de não alisar bem, mas aconteceu o contrário: alisa na primeira passada sem queimar e sem as pontas ficarem espigadas. Fica com cara de escova de salão premium.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    productName: 'Prancha ghd Platinum+ Hair Straightener'
  },
  {
    id: 'rev-4',
    author: 'Tatiane Mendonça',
    rating: 4,
    hairType: 'Cabelo Crespo 4A (Transição)',
    date: '29/04/2026',
    content: 'A Lizze Extreme é inacreditavelmente quente! Para quem faz progressivas ou selagens em salão como eu, é um monstro nas mãos. É preciso cuidado com o calor dela, mas o resultado de alinhamento é impecável e agiliza 3 vezes mais as passadas.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    productName: 'Prancha Profissional Lizze Extreme 250°C'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é a estrutura natural dominante do seu cabelo?',
    options: [
      { label: 'Liso ou Levemente Ondulado', value: 'straight', icon: 'Sparkles' },
      { label: 'Cacheado (Molas Definidas)', value: 'curly', icon: 'Smile' },
      { label: 'Crespo ou Volumoso', value: 'coily', icon: 'Flame' },
      { label: 'Quimicamente Tratado / Descolorido', value: 'chemically', icon: 'Activity' }
    ]
  },
  {
    id: 2,
    question: 'Qual é o seu principal desejo ou preocupação no dia a dia?',
    options: [
      { label: 'Acabar com o frizz e obter brilho espelhado', value: 'frizz', icon: 'ZapOff' },
      { label: 'Alisar com rapidez sem quebrar os fios', value: 'straightening', icon: 'Scissors' },
      { label: 'Criar volume natural e ondas duradouras', value: 'waves', icon: 'Wind' },
      { label: 'Recuperar o brilho e parar de queimar o cabelo', value: 'damage', icon: 'Heart' }
    ]
  },
  {
    id: 3,
    question: 'Com que frequência você utiliza calor no cabelo?',
    options: [
      { label: 'Uso Diário (Preciso de proteção térmica máxima)', value: 'daily', icon: 'CalendarDays' },
      { label: 'Finais de Semana / Eventos Especiais', value: 'weekend', icon: 'PartyPopper' },
      { label: 'Uso Profissional em Clientes de Salão', value: 'professional', icon: 'Award' }
    ]
  }
];

// Simple logic helper to map answers to product recommendations
export function getQuizRecommendation(answers: Record<number, string>): Product {
  const ans1 = answers[1]; // Hair pattern
  const ans2 = answers[2]; // Core concern
  const ans3 = answers[3]; // Frequency

  // Professional salon users
  if (ans3 === 'professional') {
    if (ans2 === 'straightening' || ans1 === 'coily') {
      return PRODUCTS.find(p => p.id === 'lizze-extreme') || PRODUCTS[3];
    }
    return PRODUCTS.find(p => p.id === 'parlux-alyon') || PRODUCTS[4];
  }

  // Heavily damaged / chemically treated, daily use -> SteamPod 4.0 or Dyson
  if (ans1 === 'chemically' || ans2 === 'damage' || ans3 === 'daily') {
    if (ans2 === 'frizz' || ans2 === 'damage') {
      return PRODUCTS.find(p => p.id === 'dyson-supersonic') || PRODUCTS[0];
    }
    return PRODUCTS.find(p => p.id === 'steampod-4') || PRODUCTS[1];
  }

  // Waviness / curls desire -> Curlers
  if (ans2 === 'waves') {
    if (ans1 === 'straight') {
      return PRODUCTS.find(p => p.id === 'miracurl-babyliss') || PRODUCTS[5];
    }
    return PRODUCTS.find(p => p.id === 'ghd-curve-creative-wand') || PRODUCTS[6];
  }

  // Smooth, high protect, daily -> ghd platinum+
  return PRODUCTS.find(p => p.id === 'ghd-platinum') || PRODUCTS[2];
}
