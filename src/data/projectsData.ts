export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'all' | 'single-storey' | 'two-storey' | 'fachwerk' | 'premium';
  categoryLabel: string;
  area: number; // m²
  dimensions: string; // e.g. "12.4 × 14.8 м"
  floors: number;
  bedrooms: number;
  bathrooms: number;
  buildTimeDays: number;
  technology: string;
  priceTotal: number;
  imageUrl: string;
  galleryUrls: string[];
  description: string;
  highlights: string[];
  floorPlanDetails: {
    groundFloorArea: number;
    secondFloorArea?: number;
    terraceArea: number;
    ceilingHeight: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'nordic-aurora-180',
    slug: 'nordic-aurora-180',
    title: 'Nordic Aurora 180',
    category: 'two-storey',
    categoryLabel: 'Двухэтажный дом',
    area: 184,
    dimensions: '13.2 × 11.8 м',
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    buildTimeDays: 110,
    technology: 'Газобетон D400 + термопанели',
    priceTotal: 9650000,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Элегантный загородный коттедж в строгой североевропейской эстетике. Просторная кухня-гостиная со вторым светом, мастер-спальня с гардеробной и санузлом, крытая терраса с барбекю-зоной.',
    highlights: [
      'Второй свет в гостиной с высотой потолка 5.8 м',
      'Панорамное остекление Reynaers (Бельгия)',
      'Мастер-спальня на 1-м этаже с выходом в сад',
      'Выделенная котельная по нормам газовых служб',
    ],
    floorPlanDetails: {
      groundFloorArea: 108,
      secondFloorArea: 76,
      terraceArea: 28,
      ceilingHeight: '3.1 м (1 этаж), 2.9 м (2 этаж)',
    },
  },
  {
    id: 'bergen-loft-220',
    slug: 'bergen-loft-220',
    title: 'Bergen Panoramic 220',
    category: 'fachwerk',
    categoryLabel: 'Скандинавский Фахверк',
    area: 220,
    dimensions: '14.5 × 12.0 м',
    floors: 2,
    bedrooms: 3,
    bathrooms: 3,
    buildTimeDays: 85,
    technology: 'Фахверк из клееного бруса',
    priceTotal: 15400000,
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Архитектурный шедевр с безрамным остеклением фасада. Обилие естественного света, органическое слияние с окружающим лесом и безупречный комфорт микроклимата.',
    highlights: [
      'Фасадное безрамное остекление с защитой от перегрева',
      'Силовой каркас из клееной древесины сибирской лиственницы',
      'Сауна с выходом на парящую террасу',
      'Энергоэффективность класса A++',
    ],
    floorPlanDetails: {
      groundFloorArea: 130,
      secondFloorArea: 90,
      terraceArea: 42,
      ceilingHeight: '3.4 м (1 этаж), 3.0 м (2 этаж)',
    },
  },
  {
    id: 'oslo-flat-135',
    slug: 'oslo-flat-135',
    title: 'Oslo Minimal 135',
    category: 'single-storey',
    categoryLabel: 'Одноэтажный дом',
    area: 135,
    dimensions: '15.6 × 10.4 м',
    floors: 1,
    bedrooms: 3,
    bathrooms: 2,
    buildTimeDays: 70,
    technology: 'Энергоэффективный каркас 250 мм',
    priceTotal: 6950000,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Идеальный одноэтажный дом без лестниц для комфортной семейной жизни. Четкое зонирование на приватную и общественную части, минимальные эксплуатационные расходы.',
    highlights: [
      'Безбарьерная среда без порогов и лестниц',
      'Кухня-гостиная 46 м² с выходом на террасу',
      'Вентиляция с рекуперацией тепла',
      'Индивидуальный терморегулятор в каждой комнате',
    ],
    floorPlanDetails: {
      groundFloorArea: 135,
      terraceArea: 32,
      ceilingHeight: '3.2 м в коньке, 2.9 м по стенам',
    },
  },
  {
    id: 'helsinki-manor-290',
    slug: 'helsinki-manor-290',
    title: 'Helsinki Manor 290',
    category: 'premium',
    categoryLabel: 'Премиум-резиденция',
    area: 290,
    dimensions: '18.0 × 14.5 м',
    floors: 2,
    bedrooms: 5,
    bathrooms: 4,
    buildTimeDays: 140,
    technology: 'Керамический блок Porotherm + клинкер',
    priceTotal: 21800000,
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Монументальная загородная усадьба для большой семьи. Встроенный гараж на 2 внедорожника, спа-комплекс с бассейном, кабинет с камином и винный погреб.',
    highlights: [
      'Облицовка немецким клинкером ручной формовки',
      'Гараж на 2 авто с прямым входом в гардеробную',
      'Отдельный блок для обслуживающего персонала',
      'Интеллектуальная система «Умный дом» KNX',
    ],
    floorPlanDetails: {
      groundFloorArea: 175,
      secondFloorArea: 115,
      terraceArea: 55,
      ceilingHeight: '3.5 м (1 этаж), 3.2 м (2 этаж)',
    },
  },
  {
    id: 'stockholm-cube-160',
    slug: 'stockholm-cube-160',
    title: 'Stockholm Cube 160',
    category: 'single-storey',
    categoryLabel: 'Одноэтажный дом',
    area: 160,
    dimensions: '14.0 × 12.5 м',
    floors: 1,
    bedrooms: 3,
    bathrooms: 2,
    buildTimeDays: 80,
    technology: 'Газобетон D500 + планкен лиственницы',
    priceTotal: 8400000,
    imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Современная кубическая архитектура с плоской мембранной кровлей. Высокие окна в пол, интеграция террасы во внутренний контур дома.',
    highlights: [
      'Эксплуатируемая плоская кровля с гидроизоляцией Bauder',
      'Фасадная отделка термодеревом и фиброцементом',
      'Камин в гостиной с закрытой топкой Spartherm',
      'Двойной контур шумоизоляции спален',
    ],
    floorPlanDetails: {
      groundFloorArea: 160,
      terraceArea: 38,
      ceilingHeight: '3.2 м',
    },
  },
  {
    id: 'tromso-alpine-210',
    slug: 'tromso-alpine-210',
    title: 'Tromso Alpine 210',
    category: 'two-storey',
    categoryLabel: 'Двухэтажный дом',
    area: 210,
    dimensions: '13.8 × 12.2 м',
    floors: 2,
    bedrooms: 4,
    bathrooms: 3,
    buildTimeDays: 115,
    technology: 'Комбинированный: монолит + клееный брус',
    priceTotal: 12900000,
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Скандинавское шале с массивной двускатной крышей и открытыми стропилами. Первый этаж — монолитный камень, второй — теплый клееный брус.',
    highlights: [
      'Комбинированная конструкция: монументальный 1 этаж и дышащий 2 этаж',
      'Снегозадержатели и усиленная стропильная система под северный климат',
      'Просторный балкон 18 м² с видом на лес',
      'Полноценный технический узел и система водоподготовки',
    ],
    floorPlanDetails: {
      groundFloorArea: 118,
      secondFloorArea: 92,
      terraceArea: 34,
      ceilingHeight: '3.1 м (1 этаж), до 4.2 м в коньке (2 этаж)',
    },
  },
];
