export interface Concern {
  id: string;
  name: string;
  synonyms: string[];
  treatmentSlugs: string[];
}

export interface ConcernCategory {
  id: string;
  name: string;
  concerns: Concern[];
}

export const concernCategories: ConcernCategory[] = [
  {
    id: "zmarszczki-i-mimika",
    name: "Zmarszczki i mimika",
    concerns: [
      {
        id: "zmarszczki-poprzeczne-czola",
        name: "Zmarszczki poprzeczne czoła",
        synonyms: ["czoło", "bruzdy czoła", "linie na czole"],
        treatmentSlugs: ["toksyna-botulinowa"],
      },
      {
        id: "lwia-zmarszczka",
        name: "Lwia zmarszczka",
        synonyms: ["lwia", "gniewna", "między brwiami", "glabella"],
        treatmentSlugs: ["toksyna-botulinowa"],
      },
      {
        id: "kurze-lapki",
        name: "Kurze łapki",
        synonyms: ["kurze łapki", "zmarszczki wokół oczu", "od uśmiechu"],
        treatmentSlugs: ["toksyna-botulinowa"],
      },
      {
        id: "zmarszczki-nad-warga",
        name: "Zmarszczki palacza nad wargą",
        synonyms: ["kod kreskowy", "nad wargą", "papierosowe"],
        treatmentSlugs: ["mezoterapia-iglowa", "wypelniacz-kwas-hialuronowy"],
      },
      {
        id: "bruzdy-nosowo-wargowe",
        name: "Bruzdy nosowo-wargowe",
        synonyms: ["bruzdy", "fałdy", "nosowo-wargowe"],
        treatmentSlugs: ["wypelniacz-kwas-hialuronowy", "stymulator-tkankowy"],
      },
    ],
  },
  {
    id: "owal-twarzy-i-jedrnosc",
    name: "Owal twarzy i jędrność",
    concerns: [
      {
        id: "opadajacy-owal-twarzy",
        name: "Opadający owal twarzy",
        synonyms: ["owal", "obwisła skóra", "chomiki", "opadające policzki", "wiotka twarz"],
        treatmentSlugs: ["lifting-hifu", "stymulator-tkankowy"],
      },
      {
        id: "wiotka-skora-policzkow",
        name: "Wiotka skóra policzków",
        synonyms: ["policzki", "obwisłe", "luźna skóra", "zwiotczenie"],
        treatmentSlugs: ["lifting-hifu", "stymulator-tkankowy"],
      },
      {
        id: "drugi-podbrodek",
        name: "Drugi podbródek",
        synonyms: ["podbródek", "podwójny", "tłuszcz pod brodą"],
        treatmentSlugs: ["lipoliza-iniekcyjna", "lifting-hifu"],
      },
      {
        id: "wiotka-skora-szyi-i-dekoltu",
        name: "Wiotka skóra szyi i dekoltu",
        synonyms: ["szyja", "dekolt", "pierścienie Wenus"],
        treatmentSlugs: ["lifting-hifu", "mezoterapia-iglowa"],
      },
      {
        id: "utrata-konturu-zuchwy",
        name: "Utrata konturu żuchwy",
        synonyms: ["żuchwa", "linia szczęki", "kontur twarzy"],
        treatmentSlugs: ["lifting-hifu", "wypelniacz-kwas-hialuronowy"],
      },
    ],
  },
  {
    id: "usta",
    name: "Usta",
    concerns: [
      {
        id: "zbyt-waskie-usta",
        name: "Zbyt wąskie usta",
        synonyms: ["wąskie", "cienkie", "małe usta", "powiększenie"],
        treatmentSlugs: ["modelowanie-ust"],
      },
      {
        id: "asymetria-warg",
        name: "Asymetria warg",
        synonyms: ["asymetria", "krzywe", "nierówne usta"],
        treatmentSlugs: ["modelowanie-ust"],
      },
      {
        id: "opadajace-kaciki-ust",
        name: "Opadające kąciki ust",
        synonyms: ["kąciki", "smutna mina"],
        treatmentSlugs: ["modelowanie-ust", "toksyna-botulinowa"],
      },
      {
        id: "suche-pomarszczone-usta",
        name: "Suche, pomarszczone usta",
        synonyms: ["suche", "spierzchnięte", "odwodnione"],
        treatmentSlugs: ["nawilzajaca-mezoterapia-ust"],
      },
      {
        id: "nieudany-efekt-z-innego-gabinetu",
        name: "Nieudany efekt z innego gabinetu",
        synonyms: ["poprawka", "korekta", "kaczy dziób", "źle zrobione"],
        treatmentSlugs: ["korekta-ust-hialuronidaza"],
      },
    ],
  },
  {
    id: "okolica-oczu",
    name: "Okolica oczu",
    concerns: [
      {
        id: "cienie-pod-oczami",
        name: "Cienie pod oczami",
        synonyms: ["cienie", "sińce", "worki", "zmęczone spojrzenie"],
        treatmentSlugs: ["wypelnienie-doliny-lez", "mezoterapia-iglowa"],
      },
      {
        id: "dolina-lez",
        name: "Dolina łez",
        synonyms: ["dolina łez", "zapadnięte oczy", "wgłębienie"],
        treatmentSlugs: ["wypelnienie-doliny-lez"],
      },
      {
        id: "opadajaca-powieka-gorna",
        name: "Opadająca powieka górna",
        synonyms: ["powieka", "opadające oko", "nawis"],
        treatmentSlugs: ["lifting-hifu", "konsultacja-lekarska"],
      },
      {
        id: "drobne-zmarszczki-wokol-oczu",
        name: "Drobne zmarszczki wokół oczu",
        synonyms: ["drobne zmarszczki", "okolica oka"],
        treatmentSlugs: ["mezoterapia-iglowa", "toksyna-botulinowa"],
      },
    ],
  },
  {
    id: "skora-i-koloryt",
    name: "Skóra i koloryt",
    concerns: [
      {
        id: "przebarwienia-i-plamy",
        name: "Przebarwienia i plamy",
        synonyms: ["przebarwienia", "plamy", "melasma", "ostuda"],
        treatmentSlugs: ["peeling-medyczny", "mezoterapia-iglowa"],
      },
      {
        id: "szara-zmeczona-cera",
        name: "Szara, zmęczona cera",
        synonyms: ["szara", "zmęczona", "bez blasku", "matowa"],
        treatmentSlugs: ["mezoterapia-iglowa", "peeling-medyczny"],
      },
      {
        id: "odwodniona-skora",
        name: "Odwodniona skóra",
        synonyms: ["sucha", "odwodniona", "ściągnięta"],
        treatmentSlugs: ["mezoterapia-iglowa"],
      },
      {
        id: "rozszerzone-pory",
        name: "Rozszerzone pory",
        synonyms: ["pory", "nierówna skóra"],
        treatmentSlugs: ["peeling-medyczny", "mezoterapia-iglowa"],
      },
      {
        id: "blizny-potradzikowe",
        name: "Blizny potrądzikowe",
        synonyms: ["blizny", "ślady po trądziku", "nierówności"],
        treatmentSlugs: ["peeling-medyczny", "mezoterapia-iglowa"],
      },
      {
        id: "tradzik-i-niedoskonalosci",
        name: "Trądzik i niedoskonałości",
        synonyms: ["trądzik", "wypryski", "zaskórniki"],
        treatmentSlugs: ["peeling-medyczny", "konsultacja-lekarska"],
      },
      {
        id: "utrata-gestosci-i-sprezystosci",
        name: "Utrata gęstości i sprężystości",
        synonyms: ["cienka skóra", "brak jędrności", "kolagen"],
        treatmentSlugs: ["stymulator-tkankowy", "mezoterapia-iglowa"],
      },
    ],
  },
  {
    id: "profilaktyka-i-pozostale",
    name: "Profilaktyka i pozostałe",
    concerns: [
      {
        id: "profilaktyka-starzenia",
        name: "Profilaktyka starzenia (po 30 r.ż.)",
        synonyms: ["profilaktyka", "zapobieganie", "prewencja"],
        treatmentSlugs: ["mezoterapia-iglowa", "toksyna-botulinowa"],
      },
      {
        id: "bruksizm",
        name: "Bruksizm / napięcie żuchwy",
        synonyms: ["bruksizm", "zgrzytanie zębami", "napięcie szczęki"],
        treatmentSlugs: ["toksyna-botulinowa"],
      },
      {
        id: "nadpotliwosc",
        name: "Nadpotliwość",
        synonyms: ["pocenie", "nadpotliwość"],
        treatmentSlugs: ["toksyna-botulinowa"],
      },
      {
        id: "nie-wiem-od-czego-zaczac",
        name: "Nie wiem, od czego zacząć",
        synonyms: ["nie wiem", "pomoc", "pierwszy raz", "doradztwo"],
        treatmentSlugs: ["konsultacja-lekarska"],
      },
    ],
  },
];

export const allConcerns: Concern[] = concernCategories.flatMap((category) => category.concerns);
