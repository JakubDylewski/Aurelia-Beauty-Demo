export interface Treatment {
  slug: string;
  name: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
  href: string;
  ctaLabel: string;
}

export const treatments: Record<string, Treatment> = {
  "toksyna-botulinowa": {
    slug: "toksyna-botulinowa",
    name: "Toksyna botulinowa",
    description: "Wygładza zmarszczki mimiczne czoła i okolic oczu, zachowując naturalną mimikę.",
    price: "od 600 zł",
    image: "/images/zabieg-botoks.webp",
    imageAlt: "Zabieg toksyny botulinowej w klinice Aurelia — precyzyjne podanie preparatu",
    href: "/zabiegi/toksyna-botulinowa",
    ctaLabel: "Zobacz zabieg →",
  },
  "lifting-hifu": {
    slug: "lifting-hifu",
    name: "Lifting HIFU",
    description: "Ujędrnia i unosi owal twarzy skoncentrowanymi ultradźwiękami — bez skalpela.",
    price: "od 2 900 zł",
    image: "/images/zabieg-hifu.webp",
    imageAlt: "Zabieg liftingu HIFU w klinice Aurelia — ujędrnianie owalu twarzy",
    href: "/zabiegi/lifting-hifu",
    ctaLabel: "Zobacz zabieg →",
  },
  "modelowanie-ust": {
    slug: "modelowanie-ust",
    name: "Modelowanie ust",
    description: "Przywraca ustom kształt, symetrię i nawilżenie w naturalnych proporcjach.",
    price: "od 1 100 zł",
    image: "/images/zabieg-usta.webp",
    imageAlt: "Modelowanie ust kwasem hialuronowym w klinice Aurelia",
    href: "/zabiegi/modelowanie-ust",
    ctaLabel: "Zobacz zabieg →",
  },
  "mezoterapia-iglowa": {
    slug: "mezoterapia-iglowa",
    name: "Mezoterapia igłowa",
    description: "Głęboko odżywia i nawilża skórę, przywracając jej blask.",
    price: "450 zł",
    image: "/images/wnetrze-gabinet.webp",
    imageAlt: "Gabinet zabiegowy kliniki Aurelia, w którym wykonywana jest mezoterapia igłowa",
    href: "/cennik",
    ctaLabel: "Sprawdź w cenniku →",
  },
  "stymulatory-tkankowe": {
    slug: "stymulatory-tkankowe",
    name: "Stymulatory tkankowe",
    description: "Pobudzają skórę do odbudowy kolagenu na długie miesiące.",
    price: "od 1 400 zł",
    image: "/images/wnetrze-gabinet.webp",
    imageAlt: "Gabinet zabiegowy kliniki Aurelia, w którym wykonywane są zabiegi ze stymulatorami tkankowymi",
    href: "/cennik",
    ctaLabel: "Sprawdź w cenniku →",
  },
  "wypelnienie-doliny-lez": {
    slug: "wypelnienie-doliny-lez",
    name: "Wypełnienie doliny łez",
    description: "Rozświetla spojrzenie, redukując cienie i zapadnięcia pod oczami.",
    price: "1 200 zł",
    image: "/images/wnetrze-gabinet.webp",
    imageAlt: "Gabinet zabiegowy kliniki Aurelia, w którym wykonywane jest wypełnienie doliny łez",
    href: "/cennik",
    ctaLabel: "Sprawdź w cenniku →",
  },
  "peeling-medyczny": {
    slug: "peeling-medyczny",
    name: "Peeling medyczny",
    description: "Wyrównuje koloryt i redukuje przebarwienia pod kontrolą lekarza.",
    price: "od 350 zł",
    image: "/images/wnetrze-gabinet.webp",
    imageAlt: "Gabinet zabiegowy kliniki Aurelia, w którym wykonywany jest peeling medyczny",
    href: "/cennik",
    ctaLabel: "Sprawdź w cenniku →",
  },
  "nawilzajaca-mezoterapia-ust": {
    slug: "nawilzajaca-mezoterapia-ust",
    name: "Nawilżająca mezoterapia ust",
    description: "Miękkie, nawilżone usta bez zmiany ich objętości.",
    price: "600 zł",
    image: "/images/zabieg-usta.webp",
    imageAlt: "Nawilżająca mezoterapia ust w klinice Aurelia",
    href: "/cennik",
    ctaLabel: "Sprawdź w cenniku →",
  },
};

export interface Problem {
  id: string;
  label: string;
  treatmentSlugs: string[];
}

export const problems: Problem[] = [
  {
    id: "zmarszczki-mimiczne",
    label: "Zmarszczki mimiczne",
    treatmentSlugs: ["toksyna-botulinowa", "mezoterapia-iglowa"],
  },
  {
    id: "opadajacy-owal",
    label: "Opadający owal twarzy",
    treatmentSlugs: ["lifting-hifu", "stymulatory-tkankowe"],
  },
  {
    id: "waskie-usta",
    label: "Zbyt wąskie lub asymetryczne usta",
    treatmentSlugs: ["modelowanie-ust", "nawilzajaca-mezoterapia-ust"],
  },
  {
    id: "zmeczona-skora",
    label: "Zmęczona, odwodniona skóra",
    treatmentSlugs: ["mezoterapia-iglowa", "lifting-hifu"],
  },
  {
    id: "cienie-dolina-lez",
    label: "Cienie i doliny łez",
    treatmentSlugs: ["wypelnienie-doliny-lez", "mezoterapia-iglowa"],
  },
  {
    id: "przebarwienia",
    label: "Przebarwienia",
    treatmentSlugs: ["peeling-medyczny", "mezoterapia-iglowa"],
  },
];
