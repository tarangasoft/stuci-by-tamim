import {
  Binoculars,
  BriefcaseBusiness,
  Building2,
  Camera,
  Compass,
  Diamond,
  Eye,
  Hotel,
  Leaf,
  Map,
  Mountain,
  Plane,
  ShipWheel,
  Sparkles,
  Star,
  UsersRound
} from "lucide-react";

export type Locale = "en" | "ru";
export type Localized = {
  en: string;
  ru: string;
};

export type TourCategory = "oneDay" | "domestic" | "international";
export type GalleryCategory =
  | "landscapes"
  | "beaches"
  | "culture"
  | "wildlife"
  | "tourists"
  | "video";

export function copy(value: Localized, locale?: string) {
  return locale === "ru" ? value.ru : value.en;
}

export const navItems = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/tours", key: "nav.tours" },
  { href: "/gallery", key: "nav.gallery" },
  { href: "/contact", key: "nav.contact" }
];

export const heroDestinations = {
  en: ["Cox's Bazar", "Sundarban", "Rajshahi", "Thailand", "Maldives"],
  ru: ["Кокс-Базар", "Сундарбан", "Раджшахи", "Таиланд", "Мальдивы"]
};

export const imageBank = {
  // Hero — beautiful hill + forest image
  hero:
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2400&q=90",
  // Cox's Bazar — actual long sandy beach Bangladesh (moon boat)
  cox:
    "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1400&q=85",
  // Sundarban — lush mangrove forest waterway
  sundarban:
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=85",
  // Kuakata — wide beach at sunrise, calm waves
  kuakata:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  // Rajshahi — ancient temple ruins, heritage site
  rajshahi:
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=85",
  // Sonargaon — colonial ruins corridor
  sonargaon:
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1400&q=85",
  // Natore — lotus pond with lily pads
  natore:
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1400&q=85",
  // Sylhet — vivid green tea garden rows
  sylhet:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=85",
  // Banditban — misty mountain hills, layers of green
  bandarban:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
  // Bangkok — grand palace and temples
  bangkok:
    "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1400&q=85",
  // Malaysia — KLCC Petronas towers at dusk
  malaysia:
    "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1400&q=85",
  // India — Taj Mahal golden sunrise
  india:
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=85",
  // Nepal — Himalayan mountain range with prayer flags
  nepal:
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85",
  // Dubai — aerial skyline at dusk
  dubai:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85",
  // Maldives — overwater bungalows turquoise water
  maldives:
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1400&q=85",
  // About page — cinematic travel scene
  about:
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=85",
  team:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  team2:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  team3:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  // Travelers — friends hiking with backpacks
  travelers:
    "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1400&q=85",
  // Wildlife — Bengal tiger in jungle
  wildlife:
    "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=1400&q=85",
  // Culture — traditional colorful festival
  culture:
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85",
  // Additional gallery images
  bali:
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85",
  santorini:
    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=85",
  iceland:
    "https://images.unsplash.com/photo-1531168556467-80aace0d0144?auto=format&fit=crop&w=1400&q=85",
  patagonia:
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1400&q=85",
  kyoto:
    "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1400&q=85",
  srilanka:
    "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1400&q=85"
};

// ── Destination popup gallery images (shown on hover/click in MapSection / carousel)
export const destinationGalleries: Record<string, string[]> = {
  cox: [
    "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=600&q=80"
  ],
  sundarban: [
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=600&q=80"
  ],
  kuakata: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=600&q=80"
  ],
  rajshahi: [
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
  ],
  international: [
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80"
  ],
  sylhet: [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=600&q=80"
  ],
  bandarban: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?auto=format&fit=crop&w=600&q=80"
  ]
};

export const stats = [
  { value: 5000, suffix: "+", label: { en: "Happy Travelers", ru: "Счастливых туристов" }, icon: Plane },
  { value: 50, suffix: "+", label: { en: "Destinations", ru: "Направлений" }, icon: Map },
  { value: 98, suffix: "%", label: { en: "Satisfaction", ru: "Довольных гостей" }, icon: Star },
  { value: 12, suffix: "+", label: { en: "Countries", ru: "Стран" }, icon: Compass }
];

export const features = [
  {
    title: { en: "Expert Guides", ru: "Опытные гиды" },
    body: {
      en: "Professionally trained guides for culture, nature, food, and family-friendly routes.",
      ru: "Профессиональные гиды для культурных, природных, гастрономических и семейных маршрутов."
    },
    icon: Compass
  },
  {
    title: { en: "Premium Experience", ru: "Премиум опыт" },
    body: {
      en: "Handpicked hotels, polished logistics, and experiences that feel personal from arrival to farewell.",
      ru: "Проверенные отели, точная логистика и впечатления, которые ощущаются личными."
    },
    icon: Diamond
  },
  {
    title: { en: "Local Knowledge", ru: "Местные знания" },
    body: {
      en: "Born in Bangladesh, built for travelers who want the country beyond the postcard.",
      ru: "Мы родом из Бангладеш и показываем страну глубже, чем открытка."
    },
    icon: Sparkles
  }
];

export const destinations = [
  {
    id: "cox",
    name: { en: "Cox's Bazar", ru: "Кокс-Базар" },
    teaser: { en: "Golden beach", ru: "Золотой пляж" },
    duration: { en: "2D / 1N", ru: "2 дня / 1 ночь" },
    price: "৳3,500",
    image: imageBank.cox
  },
  {
    id: "sundarban",
    name: { en: "Sundarban", ru: "Сундарбан" },
    teaser: { en: "Wild mangroves", ru: "Дикие мангры" },
    duration: { en: "3D / 2N", ru: "3 дня / 2 ночи" },
    price: "৳5,200",
    image: imageBank.sundarban
  },
  {
    id: "kuakata",
    name: { en: "Kuakata", ru: "Куаката" },
    teaser: { en: "Twin-sea horizon", ru: "Двойной морской горизонт" },
    duration: { en: "2D / 1N", ru: "2 дня / 1 ночь" },
    price: "৳3,800",
    image: imageBank.kuakata
  },
  {
    id: "rajshahi",
    name: { en: "Rajshahi", ru: "Раджшахи" },
    teaser: { en: "Silk city and mango orchards", ru: "Шелк и манговые сады" },
    duration: { en: "2D / 1N", ru: "2 дня / 1 ночь" },
    price: "৳3,200",
    image: imageBank.rajshahi
  },
  {
    id: "international",
    name: { en: "International Package", ru: "Международный пакет" },
    teaser: { en: "Curated borderless escapes", ru: "Маршруты без границ" },
    duration: { en: "Flexible", ru: "Гибко" },
    price: "$399",
    image: imageBank.maldives
  }
];

export const storyPanels = [
  {
    title: { en: "Dawn at Cox's Bazar", ru: "Рассвет в Кокс-Базаре" },
    body: {
      en: "A 120km ribbon of golden sand where the morning arrives slowly and the sea keeps its rhythm.",
      ru: "120 км золотого песка, где утро приходит плавно, а море держит свой ритм."
    },
    image: imageBank.cox
  },
  {
    title: { en: "Into the Sundarban", ru: "В сердце Сундарбана" },
    body: {
      en: "A UNESCO wonder of mangrove channels, forest light, river boats, and quiet wildlife trails.",
      ru: "Чудо ЮНЕСКО: мангровые каналы, лесной свет, лодки и тихие тропы дикой природы."
    },
    image: imageBank.sundarban
  },
  {
    title: { en: "Rajshahi's Silk Road", ru: "Шелковый путь Раджшахи" },
    body: {
      en: "Ancient temples, river air, silk craft, mango orchards, and slow afternoons by the Padma.",
      ru: "Древние храмы, воздух реки, шелковое ремесло, манго и спокойные вечера у Падмы."
    },
    image: imageBank.rajshahi
  }
];

export const testimonials = [
  {
    quote: {
      en: "Stuci made our Cox's Bazar trip magical. Every detail was handled before we had to ask.",
      ru: "Stuci сделал нашу поездку в Кокс-Базар волшебной. Все детали были продуманы заранее."
    },
    name: "Riya S.",
    origin: { en: "Dhaka", ru: "Дакка" },
    flag: "🇧🇩"
  },
  {
    quote: {
      en: "Professional service and unforgettable memories. The Sundarban route felt safe and cinematic.",
      ru: "Профессиональный сервис и незабываемые впечатления. Маршрут по Сундарбану был безопасным и красивым."
    },
    name: "Mikhail K.",
    origin: { en: "Moscow", ru: "Москва" },
    flag: "🇷🇺"
  },
  {
    quote: {
      en: "The Sundarban tour exceeded all expectations, especially the boat crew and forest guide.",
      ru: "Тур по Сундарбану превзошел ожидания, особенно команда лодки и лесной гид."
    },
    name: "James T.",
    origin: { en: "London", ru: "Лондон" },
    flag: "🇬🇧"
  },
  {
    quote: {
      en: "The best travel operator in Bangladesh for warm planning and smooth execution.",
      ru: "Лучший туроператор в Бангладеш: теплое планирование и безупречная организация."
    },
    name: "Olena P.",
    origin: { en: "Kyiv", ru: "Киев" },
    flag: "🇺🇦"
  }
];

export const mapMarkers = [
  { top: "66%", left: "70%", label: { en: "Cox's Bazar", ru: "Кокс-Базар" } },
  { top: "57%", left: "42%", label: { en: "Sundarban", ru: "Сундарбан" } },
  { top: "36%", left: "26%", label: { en: "Rajshahi", ru: "Раджшахи" } },
  { top: "30%", left: "58%", label: { en: "Sylhet", ru: "Силхет" } },
  { top: "72%", left: "50%", label: { en: "Kuakata", ru: "Куаката" } }
];

export const tours = [
  {
    id: "sonargaon",
    category: "oneDay" as TourCategory,
    title: { en: "Sonargaon Day Tour", ru: "Однодневный тур Сонаргаон" },
    subtitle: { en: "Ancient capital ruins and Panam City", ru: "Древняя столица и Панам-Сити" },
    duration: { en: "1 Day", ru: "1 день" },
    price: "৳1,800",
    image: imageBank.sonargaon,
    badge: { en: "One Day", ru: "Один день" },
    highlights: [
      { en: "Panam City", ru: "Панам-Сити" },
      { en: "Folk art museum", ru: "Музей народного искусства" },
      { en: "Heritage photography", ru: "Исторические фото" }
    ],
    includes: [
      { en: "AC transport", ru: "Транспорт с кондиционером" },
      { en: "Guide", ru: "Гид" },
      { en: "Lunch", ru: "Обед" },
      { en: "Entry fees", ru: "Входные билеты" }
    ],
    itinerary: [
      { en: "Morning pickup from Dhaka", ru: "Утренний выезд из Дакки" },
      { en: "Panam City heritage walk", ru: "Прогулка по Панам-Сити" },
      { en: "Museum visit and late lunch", ru: "Музей и поздний обед" }
    ]
  },
  {
    id: "natore",
    category: "oneDay" as TourCategory,
    title: { en: "Natore Day Tour", ru: "Однодневный тур Наторе" },
    subtitle: { en: "Rajbari palace and lotus gardens", ru: "Дворец Раджбари и сады лотоса" },
    duration: { en: "1 Day", ru: "1 день" },
    price: "৳1,500",
    image: imageBank.natore,
    badge: { en: "One Day", ru: "Один день" },
    highlights: [
      { en: "Natore Rajbari", ru: "Наторе Раджбари" },
      { en: "Lotus garden", ru: "Сад лотоса" },
      { en: "Local snacks", ru: "Местные закуски" }
    ],
    includes: [
      { en: "Transport", ru: "Транспорт" },
      { en: "Guide", ru: "Гид" },
      { en: "Entry fees", ru: "Входные билеты" }
    ],
    itinerary: [
      { en: "Scenic transfer to Natore", ru: "Живописный трансфер в Наторе" },
      { en: "Rajbari palace visit", ru: "Посещение дворца Раджбари" },
      { en: "Lotus garden stop", ru: "Остановка в саду лотоса" }
    ]
  },
  {
    id: "rajshahi-day",
    category: "oneDay" as TourCategory,
    title: { en: "Rajshahi Day Tour", ru: "Однодневный тур Раджшахи" },
    subtitle: { en: "Silk museum and riverfront culture", ru: "Музей шелка и культура набережной" },
    duration: { en: "1 Day", ru: "1 день" },
    price: "৳2,200",
    image: imageBank.rajshahi,
    badge: { en: "Culture", ru: "Культура" },
    highlights: [
      { en: "Silk museum", ru: "Музей шелка" },
      { en: "Varendra Research Museum", ru: "Музей Варендра" },
      { en: "Padma riverside", ru: "Набережная Падмы" }
    ],
    includes: [
      { en: "Transport", ru: "Транспорт" },
      { en: "Guide", ru: "Гид" },
      { en: "Museum tickets", ru: "Билеты в музей" }
    ],
    itinerary: [
      { en: "Museum morning", ru: "Утро в музее" },
      { en: "Silk craft stop", ru: "Остановка у мастеров шелка" },
      { en: "Sunset by the Padma", ru: "Закат у Падмы" }
    ]
  },
  {
    id: "cox-tour",
    category: "domestic" as TourCategory,
    title: { en: "Cox's Bazar Tour", ru: "Тур Кокс-Базар" },
    subtitle: { en: "Beach, Inani, Himchari, and Laboni Point", ru: "Пляж, Инани, Химчари и Лабони-Пойнт" },
    duration: { en: "2 Days / 1 Night", ru: "2 дня / 1 ночь" },
    price: "৳3,500",
    image: imageBank.cox,
    badge: { en: "Beach", ru: "Пляж" },
    highlights: [
      { en: "Inani Beach", ru: "Пляж Инани" },
      { en: "Himchari", ru: "Химчари" },
      { en: "Laboni Point", ru: "Лабони-Пойнт" }
    ],
    includes: [
      { en: "AC transport", ru: "Транспорт с кондиционером" },
      { en: "Hotel", ru: "Отель" },
      { en: "Guide", ru: "Гид" },
      { en: "Breakfast", ru: "Завтрак" }
    ],
    itinerary: [
      { en: "Arrival and beach evening", ru: "Прибытие и вечер на пляже" },
      { en: "Inani and Himchari loop", ru: "Маршрут Инани и Химчари" },
      { en: "Seafood dinner option", ru: "Вариант ужина с морепродуктами" }
    ]
  },
  {
    id: "sundarban-tour",
    category: "domestic" as TourCategory,
    title: { en: "Sundarban Tour", ru: "Тур Сундарбан" },
    subtitle: { en: "Boat safari, Kotka Beach, and tiger territory", ru: "Лодочное сафари, пляж Котка и край тигра" },
    duration: { en: "3 Days / 2 Nights", ru: "3 дня / 2 ночи" },
    price: "৳5,200",
    image: imageBank.sundarban,
    badge: { en: "Wildlife", ru: "Природа" },
    highlights: [
      { en: "Boat safari", ru: "Лодочное сафари" },
      { en: "Kotka Beach", ru: "Пляж Котка" },
      { en: "Deer watching", ru: "Наблюдение за оленями" }
    ],
    includes: [
      { en: "AC coach and boat", ru: "Автобус и лодка" },
      { en: "Meals", ru: "Питание" },
      { en: "Lodge", ru: "Лодж" },
      { en: "Forest entry", ru: "Вход в лес" }
    ],
    itinerary: [
      { en: "Transfer to launch point", ru: "Трансфер к пристани" },
      { en: "Forest canal cruise", ru: "Круиз по лесным каналам" },
      { en: "Kotka trail and return", ru: "Тропа Котка и возвращение" }
    ]
  },
  {
    id: "sylhet-tour",
    category: "domestic" as TourCategory,
    title: { en: "Sylhet Tea Garden Tour", ru: "Чайные сады Силхета" },
    subtitle: { en: "Tea gardens, Hakaluki Haor, and Ratargul", ru: "Чайные сады, Хакалуки-Хаор и Ратаргул" },
    duration: { en: "3 Days / 2 Nights", ru: "3 дня / 2 ночи" },
    price: "৳4,500",
    image: imageBank.sylhet,
    badge: { en: "Nature", ru: "Природа" },
    highlights: [
      { en: "Srimangal tea estates", ru: "Чайные плантации Шримангала" },
      { en: "Ratargul swamp forest", ru: "Болотный лес Ратаргул" },
      { en: "Haor sunset", ru: "Закат на хаоре" }
    ],
    includes: [
      { en: "Transport", ru: "Транспорт" },
      { en: "Hotel", ru: "Отель" },
      { en: "Guide", ru: "Гид" }
    ],
    itinerary: [
      { en: "Tea garden arrival", ru: "Прибытие в чайные сады" },
      { en: "Ratargul boat ride", ru: "Прогулка на лодке в Ратаргуле" },
      { en: "Haor viewpoint", ru: "Смотровая точка хаора" }
    ]
  },
  {
    id: "bandarban-tour",
    category: "domestic" as TourCategory,
    title: { en: "Bandarban Hill Tour", ru: "Горный тур Бандарбан" },
    subtitle: { en: "Nilgiri, Boga Lake, and hill village stays", ru: "Нилгири, озеро Бога и горные деревни" },
    duration: { en: "3 Days / 2 Nights", ru: "3 дня / 2 ночи" },
    price: "৳4,800",
    image: imageBank.bandarban,
    badge: { en: "Hills", ru: "Горы" },
    highlights: [
      { en: "Nilgiri viewpoint", ru: "Смотровая Нилгири" },
      { en: "Boga Lake", ru: "Озеро Бога" },
      { en: "Village hospitality", ru: "Гостеприимство деревень" }
    ],
    includes: [
      { en: "Transport", ru: "Транспорт" },
      { en: "Lodge", ru: "Лодж" },
      { en: "Local guide", ru: "Местный гид" }
    ],
    itinerary: [
      { en: "Hill road arrival", ru: "Прибытие по горной дороге" },
      { en: "Nilgiri sunrise", ru: "Рассвет в Нилгири" },
      { en: "Boga Lake walk", ru: "Прогулка к озеру Бога" }
    ]
  },
  {
    id: "thailand",
    category: "international" as TourCategory,
    title: { en: "Thailand Package", ru: "Пакет Таиланд" },
    subtitle: { en: "Bangkok and Pattaya highlights", ru: "Бангкок и Паттайя" },
    duration: { en: "5 Days / 4 Nights", ru: "5 дней / 4 ночи" },
    price: "৳52,000 / $475",
    image: imageBank.bangkok,
    badge: { en: "e-Visa", ru: "e-Visa" },
    highlights: [
      { en: "Bangkok temples", ru: "Храмы Бангкока" },
      { en: "Pattaya beach", ru: "Пляж Паттайи" },
      { en: "Floating market", ru: "Плавучий рынок" }
    ],
    includes: [
      { en: "Flights support", ru: "Помощь с перелетом" },
      { en: "Hotel", ru: "Отель" },
      { en: "Transfers", ru: "Трансферы" }
    ],
    itinerary: [
      { en: "Bangkok arrival", ru: "Прибытие в Бангкок" },
      { en: "Temple and market day", ru: "Храмы и рынок" },
      { en: "Pattaya beach transfer", ru: "Трансфер на пляж Паттайи" }
    ]
  },
  {
    id: "malaysia",
    category: "international" as TourCategory,
    title: { en: "Malaysia Package", ru: "Пакет Малайзия" },
    subtitle: { en: "Kuala Lumpur and Langkawi", ru: "Куала-Лумпур и Лангкави" },
    duration: { en: "5 Days / 4 Nights", ru: "5 дней / 4 ночи" },
    price: "৳58,000 / $525",
    image: imageBank.malaysia,
    badge: { en: "e-Visa", ru: "e-Visa" },
    highlights: [
      { en: "KL skyline", ru: "Скайлайн КЛ" },
      { en: "Langkawi island", ru: "Остров Лангкави" },
      { en: "Cable car", ru: "Канатная дорога" }
    ],
    includes: [
      { en: "Hotel", ru: "Отель" },
      { en: "Transfers", ru: "Трансферы" },
      { en: "Visa guidance", ru: "Визовая консультация" }
    ],
    itinerary: [
      { en: "KL city arrival", ru: "Прибытие в Куала-Лумпур" },
      { en: "Landmark tour", ru: "Тур по достопримечательностям" },
      { en: "Langkawi island day", ru: "День на Лангкави" }
    ]
  },
  {
    id: "nepal",
    category: "international" as TourCategory,
    title: { en: "Nepal Package", ru: "Пакет Непал" },
    subtitle: { en: "Kathmandu and Pokhara", ru: "Катманду и Покхара" },
    duration: { en: "5 Days / 4 Nights", ru: "5 дней / 4 ночи" },
    price: "৳45,000 / $410",
    image: imageBank.nepal,
    badge: { en: "Visa on Arrival", ru: "Виза по прибытии" },
    highlights: [
      { en: "Kathmandu heritage", ru: "Наследие Катманду" },
      { en: "Pokhara lake", ru: "Озеро Покхара" },
      { en: "Himalaya views", ru: "Виды Гималаев" }
    ],
    includes: [
      { en: "Hotel", ru: "Отель" },
      { en: "Transfers", ru: "Трансферы" },
      { en: "Guide", ru: "Гид" }
    ],
    itinerary: [
      { en: "Kathmandu arrival", ru: "Прибытие в Катманду" },
      { en: "Heritage square walk", ru: "Прогулка по исторической площади" },
      { en: "Pokhara lake morning", ru: "Утро у озера Покхара" }
    ]
  },
  {
    id: "dubai",
    category: "international" as TourCategory,
    title: { en: "UAE Package", ru: "Пакет ОАЭ" },
    subtitle: { en: "Dubai highlights and desert evening", ru: "Дубай и вечер в пустыне" },
    duration: { en: "4 Days / 3 Nights", ru: "4 дня / 3 ночи" },
    price: "৳72,000 / $650",
    image: imageBank.dubai,
    badge: { en: "e-Visa", ru: "e-Visa" },
    highlights: [
      { en: "Burj Khalifa", ru: "Бурдж-Халифа" },
      { en: "Desert safari", ru: "Сафари в пустыне" },
      { en: "Marina cruise", ru: "Круиз по марине" }
    ],
    includes: [
      { en: "Hotel", ru: "Отель" },
      { en: "Transfers", ru: "Трансферы" },
      { en: "Visa support", ru: "Визовая поддержка" }
    ],
    itinerary: [
      { en: "Dubai arrival", ru: "Прибытие в Дубай" },
      { en: "City landmarks", ru: "Главные места города" },
      { en: "Desert evening", ru: "Вечер в пустыне" }
    ]
  },
  {
    id: "maldives",
    category: "international" as TourCategory,
    title: { en: "Maldives Package", ru: "Пакет Мальдивы" },
    subtitle: { en: "Island resort escape", ru: "Отдых на островном курорте" },
    duration: { en: "4 Days / 3 Nights", ru: "4 дня / 3 ночи" },
    price: "৳88,000 / $790",
    image: imageBank.maldives,
    badge: { en: "Visa on Arrival", ru: "Виза по прибытии" },
    highlights: [
      { en: "Lagoon resort", ru: "Лагунный курорт" },
      { en: "Snorkeling", ru: "Снорклинг" },
      { en: "Sunset dinner", ru: "Ужин на закате" }
    ],
    includes: [
      { en: "Resort stay", ru: "Проживание на курорте" },
      { en: "Speedboat transfer", ru: "Трансфер на катере" },
      { en: "Breakfast", ru: "Завтрак" }
    ],
    itinerary: [
      { en: "Island arrival", ru: "Прибытие на остров" },
      { en: "Reef and beach day", ru: "День рифа и пляжа" },
      { en: "Private sunset option", ru: "Вариант приватного заката" }
    ]
  }
];

export const galleryItems = [
  {
    id: "g-cox",
    category: "beaches" as GalleryCategory,
    title: { en: "Cox's Bazar golden shore", ru: "Золотой берег Кокс-Базара" },
    credit: "Stuci archive",
    image: imageBank.cox
  },
  {
    id: "g-maldives",
    category: "beaches" as GalleryCategory,
    title: { en: "Maldives overwater paradise", ru: "Рай на воде — Мальдивы" },
    credit: "International desk",
    image: imageBank.maldives
  },
  {
    id: "g-bali",
    category: "beaches" as GalleryCategory,
    title: { en: "Bali terraced beauty", ru: "Рисовые террасы Бали" },
    credit: "International desk",
    image: imageBank.bali
  },
  {
    id: "g-kuakata",
    category: "beaches" as GalleryCategory,
    title: { en: "Kuakata twin-sea horizon", ru: "Горизонт двух морей Куакаты" },
    credit: "Beach team",
    image: imageBank.kuakata
  },
  {
    id: "g-sundarban",
    category: "wildlife" as GalleryCategory,
    title: { en: "Sundarban mangrove channels", ru: "Мангровые каналы Сундарбана" },
    credit: "Forest route team",
    image: imageBank.sundarban
  },
  {
    id: "g-wildlife",
    category: "wildlife" as GalleryCategory,
    title: { en: "Wild Bengal tiger", ru: "Тигр дикой Бенгалии" },
    credit: "Wildlife route",
    image: imageBank.wildlife
  },
  {
    id: "g-nepal",
    category: "landscapes" as GalleryCategory,
    title: { en: "Himalayan peaks, Nepal", ru: "Гималайские вершины, Непал" },
    credit: "International desk",
    image: imageBank.nepal
  },
  {
    id: "g-bandarban",
    category: "landscapes" as GalleryCategory,
    title: { en: "Bandarban misty cloudline", ru: "Туманные облака Бандарбана" },
    credit: "Hill route team",
    image: imageBank.bandarban
  },
  {
    id: "g-sylhet",
    category: "landscapes" as GalleryCategory,
    title: { en: "Sylhet emerald tea valley", ru: "Изумрудная чайная долина Силхета" },
    credit: "Stuci archive",
    image: imageBank.sylhet
  },
  {
    id: "g-iceland",
    category: "landscapes" as GalleryCategory,
    title: { en: "Iceland northern lights", ru: "Северное сияние Исландии" },
    credit: "International desk",
    image: imageBank.iceland
  },
  {
    id: "g-patagonia",
    category: "landscapes" as GalleryCategory,
    title: { en: "Patagonia wilderness", ru: "Дикая Патагония" },
    credit: "International desk",
    image: imageBank.patagonia
  },
  {
    id: "g-culture",
    category: "culture" as GalleryCategory,
    title: { en: "Vibrant festival colours", ru: "Яркие краски фестиваля" },
    credit: "Cultural desk",
    image: imageBank.culture
  },
  {
    id: "g-rajshahi",
    category: "culture" as GalleryCategory,
    title: { en: "Rajshahi heritage temples", ru: "Храмы наследия Раджшахи" },
    credit: "Cultural desk",
    image: imageBank.rajshahi
  },
  {
    id: "g-kyoto",
    category: "culture" as GalleryCategory,
    title: { en: "Kyoto cherry blossoms", ru: "Сакура в Киото" },
    credit: "International desk",
    image: imageBank.kyoto
  },
  {
    id: "g-india",
    category: "culture" as GalleryCategory,
    title: { en: "Taj Mahal at sunrise", ru: "Тадж-Махал на рассвете" },
    credit: "International desk",
    image: imageBank.india
  },
  {
    id: "g-travelers",
    category: "tourists" as GalleryCategory,
    title: { en: "Adventurers on the trail", ru: "Путешественники на тропе" },
    credit: "Guest photo",
    image: imageBank.travelers
  },
  {
    id: "g-srilanka",
    category: "tourists" as GalleryCategory,
    title: { en: "Sri Lanka tea country", ru: "Чайный край Шри-Ланки" },
    credit: "International desk",
    image: imageBank.srilanka
  },
  {
    id: "g-dubai",
    category: "tourists" as GalleryCategory,
    title: { en: "Dubai skyline at dusk", ru: "Дубай в сумерках" },
    credit: "International desk",
    image: imageBank.dubai
  },
  {
    id: "g-santorini",
    category: "tourists" as GalleryCategory,
    title: { en: "Santorini blue domes", ru: "Синие купола Санторини" },
    credit: "International desk",
    image: imageBank.santorini
  },
  {
    id: "g-video",
    category: "video" as GalleryCategory,
    title: { en: "Cinematic route preview", ru: "Кинематографичный маршрут" },
    credit: "Preview reel",
    image: imageBank.hero
  }
];

export const milestones = [
  {
    year: "2015",
    title: { en: "Founded in Dhaka", ru: "Основаны в Дакке" },
    body: { en: "A small desk with a big map and a better way to host travelers.", ru: "Небольшой офис, большая карта и новый подход к приему гостей." }
  },
  {
    year: "2017",
    title: { en: "First group tour", ru: "Первый групповой тур" },
    body: { en: "Cox's Bazar became the route that shaped our hospitality standard.", ru: "Кокс-Базар стал маршрутом, который задал наш стандарт сервиса." }
  },
  {
    year: "2019",
    title: { en: "500+ travelers", ru: "500+ туристов" },
    body: { en: "We expanded into Sundarban, Rajshahi, Sylhet, and cultural tours.", ru: "Мы вышли в Сундарбан, Раджшахи, Силхет и культурные туры." }
  },
  {
    year: "2022",
    title: { en: "International planning", ru: "Международные маршруты" },
    body: { en: "Visa support and regional packages joined the Stuci travel desk.", ru: "К команде добавились визовая поддержка и региональные пакеты." }
  },
  {
    year: "Today",
    title: { en: "10,000+ journeys", ru: "10 000+ поездок" },
    body: { en: "A bilingual, detail-obsessed team building richer travel days.", ru: "Двуязычная команда, одержимая деталями и яркими поездками." }
  }
];

export const values = [
  {
    title: { en: "Our Mission", ru: "Наша миссия" },
    body: { en: "To make authentic travel accessible, safe, and deeply memorable for every guest.", ru: "Сделать подлинные путешествия доступными, безопасными и запоминающимися." },
    back: { en: "We plan with care because trust is part of the destination.", ru: "Мы планируем внимательно, потому что доверие тоже часть маршрута." },
    icon: Leaf
  },
  {
    title: { en: "Our Vision", ru: "Наше видение" },
    body: { en: "A Bangladesh every traveler dreams of visiting and every local feels proud to share.", ru: "Бангладеш, который мечтает увидеть каждый путешественник и которым гордятся местные." },
    back: { en: "Travel should expand the guest and honor the place.", ru: "Путешествие должно обогащать гостя и уважать место." },
    icon: Eye
  },
  {
    title: { en: "Our Values", ru: "Наши ценности" },
    body: { en: "Honesty, safety, excellence, care, adventure, and steady communication.", ru: "Честность, безопасность, качество, забота, приключения и ясная связь." },
    back: { en: "The best route is the one where people feel looked after.", ru: "Лучший маршрут тот, где люди чувствуют заботу." },
    icon: Sparkles
  }
];

export const services = [
  { title: { en: "Group Tours", ru: "Групповые туры" }, body: { en: "Organized departures for friends, families, schools, and communities.", ru: "Организованные выезды для друзей, семей, школ и сообществ." }, icon: UsersRound },
  { title: { en: "Custom Trips", ru: "Индивидуальные поездки" }, body: { en: "Bespoke itineraries for solo, family, and special-interest travel.", ru: "Маршруты под одиночные, семейные и тематические поездки." }, icon: Compass },
  { title: { en: "Hotel Bookings", ru: "Бронирование отелей" }, body: { en: "Curated hotel partnerships across Bangladesh and regional hubs.", ru: "Проверенные отели в Бангладеш и региональных центрах." }, icon: Hotel },
  { title: { en: "Transport", ru: "Транспорт" }, body: { en: "AC bus, train, boat, and air ticket arrangements.", ru: "Автобусы, поезда, лодки и авиабилеты." }, icon: ShipWheel },
  { title: { en: "Photography Tours", ru: "Фототуры" }, body: { en: "Golden-hour routes for creators, families, and documentary travelers.", ru: "Маршруты в лучший свет для авторов, семей и документалистов." }, icon: Camera },
  { title: { en: "Corporate Tours", ru: "Корпоративные туры" }, body: { en: "Company retreats, team-building days, and executive travel support.", ru: "Выезды компаний, тимбилдинги и поддержка деловых поездок." }, icon: BriefcaseBusiness }
];

export const team = [
  {
    name: "Araf Rahman",
    role: { en: "Founder & Route Designer", ru: "Основатель и дизайнер маршрутов" },
    image: imageBank.team
  },
  {
    name: "Nadia Karim",
    role: { en: "Guest Experience Lead", ru: "Руководитель гостевого опыта" },
    image: imageBank.team2
  },
  {
    name: "Sergey Ivanov",
    role: { en: "Russian Travel Desk", ru: "Русскоязычная поддержка" },
    image: imageBank.team3
  }
];

export const trustBadges = [
  { label: "Bangladesh Tourism Board", icon: Building2 },
  { label: "Partner Hotels Network", icon: Hotel },
  { label: "Air Ticketing Desk", icon: Plane },
  { label: "Certified Local Guides", icon: Binoculars },
  { label: "Travel Photo Routes", icon: Camera },
  { label: "Corporate Retreat Desk", icon: BriefcaseBusiness }
];
