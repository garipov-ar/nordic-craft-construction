export interface TechnologyOption {
  id: string;
  name: string;
  badge: string;
  description: string;
  basePricePerM2: number;
  buildTimeDays: number;
  features: string[];
  iconName: string;
}

export interface PackageOption {
  id: string;
  name: string;
  multiplier: number;
  description: string;
  includedItems: string[];
  popular?: boolean;
}

export interface ExtraOption {
  id: string;
  name: string;
  price: number;
  description: string;
  iconName: string;
}

export const TECHNOLOGIES: TechnologyOption[] = [
  {
    id: 'aerated_concrete',
    name: 'Газобетонные блоки (D400/D500)',
    badge: 'Хит продаж',
    description: 'Надежные каменные дома с высокой теплоизоляцией и огнестойкостью до 4 часов.',
    basePricePerM2: 52000,
    buildTimeDays: 120,
    features: ['Срок службы 100+ лет', 'Идеальная геометрия стен', 'Энергоэффективность А+'],
    iconName: 'Building2',
  },
  {
    id: 'fachwerk',
    name: 'Скандинавский Фахверк',
    badge: 'Премиум',
    description: 'Клееный брус камерной сушки и безрамное панорамное остекление с аргоновым заполнением.',
    basePricePerM2: 78000,
    buildTimeDays: 90,
    features: ['Второй свет и панорама', 'Усиленный силовой каркас', 'Архитектурный шик'],
    iconName: 'Layers',
  },
  {
    id: 'timber_frame',
    name: 'Каркасный энергоэффективный дом',
    badge: 'Быстрый монтаж',
    description: 'Скандинавская технология перекрестного утепления 250 мм. Минимальные теплопотери.',
    basePricePerM2: 44000,
    buildTimeDays: 75,
    features: ['Заселение через 3 месяца', 'Экономия на отоплении до 45%', 'Экологичные материалы'],
    iconName: 'Home',
  },
  {
    id: 'ceramic_brick',
    name: 'Керамический крупноформатный блок',
    badge: 'Монолит & Кирпич',
    description: 'Элитное классическое строительство из теплой керамики Porotherm с облицовочным кирпичом.',
    basePricePerM2: 68000,
    buildTimeDays: 150,
    features: ['Акустический комфорт', 'Максимальная прочность', 'Высокая ликвидность объекта'],
    iconName: 'ShieldCheck',
  },
];

export const PACKAGES: PackageOption[] = [
  {
    id: 'warm_contour',
    name: 'Теплый контур',
    multiplier: 1.0,
    description: 'Фундаментная плита, несущие стены, перекрытия, утепленная кровля и энергосберегающие окна.',
    includedItems: [
      'Монолитный фундамент (УШП / лента)',
      'Возведение коробки дома',
      'Кровельная система с водостоком',
      'Окна с двухкамерными стеклопакетами',
      'Входная термодверь',
    ],
  },
  {
    id: 'white_box',
    name: 'Предчистовая отделка (White Box)',
    multiplier: 1.35,
    popular: true,
    description: 'Полная разводка коммуникаций, теплые полы, механизированная штукатурка и стяжка под покрытие.',
    includedItems: [
      'Все работы тарифа «Теплый контур»',
      'Разводка электрики, водоснабжения, канализации',
      'Система теплого водяного пола и котельная',
      'Идеально ровная гипсовая штукатурка по маякам',
      'Полусухая фиброармированная стяжка',
    ],
  },
  {
    id: 'turnkey',
    name: 'Под ключ с чистовой отделкой',
    multiplier: 1.75,
    description: 'Готовый для жизни дом по дизайн-проекту: сантехника, напольные покрытия, покраска и чистовой свет.',
    includedItems: [
      'Все работы тарифа «White Box»',
      'Дизайн-проект интерьера в подарок',
      'Укладка керамогранита и инженерной доски',
      'Монтаж чистовой сантехники и световых линий',
      'Установка межкомнатных дверей скрытого монтажа',
    ],
  },
];

export const EXTRAS: ExtraOption[] = [
  {
    id: 'terrace',
    name: 'Крытая терраса из лиственницы (25-35 м²)',
    price: 480000,
    description: 'Уютная лаунж-зона для отдыха на открытом воздухе с освещением.',
    iconName: 'Sun',
  },
  {
    id: 'carport',
    name: 'Навес для 2 автомобилей',
    price: 650000,
    description: 'Металлокаркас с водосточной системой и точечной подсветкой.',
    iconName: 'Car',
  },
  {
    id: 'sauna',
    name: 'Встроенная сауна с панорамным стеклом',
    price: 520000,
    description: 'Отделка канадским кедром, электрокаменка Harvia с пультом.',
    iconName: 'Flame',
  },
  {
    id: 'landscape',
    name: 'Базовый ландшафт и мощение брусчаткой',
    price: 790000,
    description: 'Выравнивание участка, дренаж, газон и дорожки.',
    iconName: 'Trees',
  },
];
