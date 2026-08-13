export interface Treatment {
  slug: string;
  name: string;
  description: string;
  price: string;
  duration: string;
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
    duration: "15–20 min",
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
    duration: "60–90 min",
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
    duration: "30–45 min",
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
    duration: "30 min",
    image: "/images/wnetrze-gabinet.webp",
    imageAlt: "Gabinet zabiegowy kliniki Aurelia, w którym wykonywana jest mezoterapia igłowa",
    href: "/cennik",
    ctaLabel: "Sprawdź w cenniku →",
  },
  "stymulator-tkankowy": {
    slug: "stymulator-tkankowy",
    name: "Stymulator tkankowy",
    description: "Pobudza skórę do odbudowy kolagenu na długie miesiące.",
    price: "od 1 400 zł",
    duration: "45–60 min",
    image: "/images/wnetrze-gabinet.webp",
    imageAlt: "Gabinet zabiegowy kliniki Aurelia, w którym wykonywane są zabiegi ze stymulatorem tkankowym",
    href: "/cennik",
    ctaLabel: "Sprawdź w cenniku →",
  },
  "wypelnienie-doliny-lez": {
    slug: "wypelnienie-doliny-lez",
    name: "Wypełnienie doliny łez",
    description: "Rozświetla spojrzenie, redukując cienie i zapadnięcia pod oczami.",
    price: "1 200 zł",
    duration: "20–30 min",
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
    duration: "20–30 min",
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
    duration: "20 min",
    image: "/images/zabieg-usta.webp",
    imageAlt: "Nawilżająca mezoterapia ust w klinice Aurelia",
    href: "/cennik",
    ctaLabel: "Sprawdź w cenniku →",
  },
  "wypelniacz-kwas-hialuronowy": {
    slug: "wypelniacz-kwas-hialuronowy",
    name: "Wypełniacz kwasem hialuronowym",
    description: "Uzupełnia objętość i wygładza bruzdy, przywracając kontur twarzy.",
    price: "od 1 200 zł",
    duration: "30–45 min",
    image: "/images/wnetrze-gabinet.webp",
    imageAlt: "Gabinet zabiegowy kliniki Aurelia, w którym wykonywany jest zabieg wypełniaczem kwasem hialuronowym",
    href: "/zabiegi/wypelniacz-kwas-hialuronowy",
    ctaLabel: "Zobacz zabieg →",
  },
  "korekta-ust-hialuronidaza": {
    slug: "korekta-ust-hialuronidaza",
    name: "Korekta ust z hialuronidazą",
    description: "Rozpuszcza nadmiar kwasu hialuronowego i przywraca ustom naturalny, symetryczny kształt.",
    price: "od 1 300 zł",
    duration: "20–30 min",
    image: "/images/zabieg-usta.webp",
    imageAlt: "Korekta ust z hialuronidazą w klinice Aurelia",
    href: "/zabiegi/korekta-ust-hialuronidaza",
    ctaLabel: "Zobacz zabieg →",
  },
  "lipoliza-iniekcyjna": {
    slug: "lipoliza-iniekcyjna",
    name: "Lipoliza iniekcyjna",
    description: "Redukuje miejscową tkankę tłuszczową pod brodą, bez operacji i cięcia.",
    price: "od 900 zł",
    duration: "30 min",
    image: "/images/wnetrze-gabinet.webp",
    imageAlt: "Gabinet zabiegowy kliniki Aurelia, w którym wykonywana jest lipoliza iniekcyjna",
    href: "/zabiegi/lipoliza-iniekcyjna",
    ctaLabel: "Zobacz zabieg →",
  },
  "konsultacja-lekarska": {
    slug: "konsultacja-lekarska",
    name: "Konsultacja lekarska",
    description: "Rzetelna rozmowa z lekarzem, który oceni Twoją skórę i zaproponuje plan zabiegowy.",
    price: "150 zł",
    duration: "20–30 min",
    image: "/images/wnetrze-recepcja.webp",
    imageAlt: "Konsultacja lekarska w recepcji kliniki Aurelia",
    href: "/zabiegi/konsultacja-lekarska",
    ctaLabel: "Zobacz zabieg →",
  },
};

export interface QuickFact {
  label: string;
  value: string;
}

export interface TreatmentStep {
  number: string;
  title: string;
  description: string;
}

export interface PricingRow {
  label: string;
  price: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TreatmentPageContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  quickFacts: QuickFact[];
  about: string;
  indications: string[];
  steps: TreatmentStep[];
  pricingTable: PricingRow[];
  faq: FaqItem[];
  beforeAfter: {
    beforeSrc: string;
    afterSrc: string;
    beforeAlt: string;
    afterAlt: string;
    label: string;
  };
}

export const treatmentPages: Record<string, TreatmentPageContent> = {
  "modelowanie-ust": {
    slug: "modelowanie-ust",
    metaTitle: "Modelowanie ust",
    metaDescription:
      "Modelowanie ust kwasem hialuronowym w Toruniu. Naturalne efekty, certyfikowane preparaty, zabieg wykonuje lekarz. Umów konsultację — Klinika Aurelia.",
    h1: "Modelowanie ust kwasem hialuronowym",
    lead: "Usta, które wyglądają jak Twoje — tylko w najlepszej wersji. Modelujemy kształt, przywracamy symetrię i nawilżenie, pracując na certyfikowanych kwasach hialuronowych najnowszej generacji.",
    quickFacts: [
      { label: "Czas zabiegu", value: "30–45 min" },
      { label: "Znieczulenie", value: "krem znieczulający" },
      { label: "Powrót do aktywności", value: "od razu" },
      { label: "Pierwsze efekty", value: "natychmiast" },
      { label: "Pełny efekt", value: "po ok. 2 tyg." },
      { label: "Cena", value: "od 1 100 zł" },
    ],
    about:
      "Kwas hialuronowy to substancja naturalnie występująca w skórze — odpowiada za jej nawilżenie i objętość. Podczas zabiegu lekarz podaje preparat cienką igłą lub kaniulą w precyzyjnie wybrane punkty ust, odbudowując ich kontur, proporcje i jędrność. W Aurelii pracujemy techniką „less is more\": lepiej dołożyć na kolejnej wizycie, niż przesadzić na pierwszej.",
    indications: [
      "wąskie lub nieproporcjonalne usta",
      "asymetria warg",
      "opadające kąciki",
      "utrata objętości z wiekiem",
      "suche, pomarszczone usta",
      "nieudany efekt z innego gabinetu (korekta)",
    ],
    steps: [
      {
        number: "01",
        title: "Konsultacja i plan",
        description: "analiza proporcji twarzy, wspólne ustalenie efektu, omówienie przeciwwskazań.",
      },
      {
        number: "02",
        title: "Znieczulenie",
        description: "krem znieczulający działa ok. 20 minut; zabieg jest komfortowy.",
      },
      {
        number: "03",
        title: "Podanie preparatu",
        description: "lekarz modeluje usta punkt po punkcie, na bieżąco pokazując efekt w lustrze.",
      },
      {
        number: "04",
        title: "Zalecenia",
        description: "otrzymujesz pisemne zalecenia pozabiegowe i kontakt do lekarza na wypadek pytań.",
      },
    ],
    pricingTable: [
      { label: "Modelowanie ust 0,5 ml", price: "900 zł" },
      { label: "Modelowanie ust 1 ml", price: "1 100 zł" },
      { label: "Korekta ust po innym gabinecie (z hialuronidazą)", price: "od 1 300 zł" },
      { label: "Nawilżająca mezoterapia ust", price: "600 zł" },
    ],
    faq: [
      {
        question: "Czy zabieg boli?",
        answer:
          "Dzięki kremowi znieczulającemu i preparatom z lidokainą większość pacjentek opisuje zabieg jako niemal bezbolesny — odczuwalny jest raczej ucisk niż ból.",
      },
      {
        question: "Jak długo utrzymuje się efekt?",
        answer:
          "Zwykle 8–12 miesięcy, zależnie od preparatu, metabolizmu i stylu życia. Kwas hialuronowy jest stopniowo i naturalnie rozkładany przez organizm.",
      },
      {
        question: "Czy usta będą wyglądać sztucznie?",
        answer:
          "Nie, jeśli zachowane są proporcje. Modelujemy usta w zgodzie z anatomią Twojej twarzy i zawsze możesz zobaczyć plan przed podaniem preparatu. Efekt „dorobionych ust\" to wynik przesady, nie samego zabiegu.",
      },
      {
        question: "Jak wygląda powrót do codzienności?",
        answer:
          "Możesz wrócić do pracy od razu. Przez 1–3 dni może utrzymywać się obrzęk lub drobne siniaki — łatwe do zamaskowania. Przez dobę unikaj sauny, intensywnego wysiłku i alkoholu.",
      },
      {
        question: "Czy są przeciwwskazania?",
        answer:
          "Tak, m.in. ciąża i karmienie, aktywna opryszczka, choroby autoimmunologiczne w fazie aktywnej, terapia antykoagulantami. Pełną listę przeciwwskazań omawiamy podczas konsultacji lekarskiej.",
      },
    ],
    beforeAfter: {
      beforeSrc: "/images/meta-usta-przed.webp",
      afterSrc: "/images/meta-usta-po.webp",
      beforeAlt: "Usta przed zabiegiem modelowania kwasem hialuronowym",
      afterAlt: "Usta po zabiegu modelowania kwasem hialuronowym",
      label: "Usta",
    },
  },
  "toksyna-botulinowa": {
    slug: "toksyna-botulinowa",
    metaTitle: "Toksyna botulinowa",
    metaDescription:
      "Toksyna botulinowa w Toruniu — wygładzenie zmarszczek mimicznych bez efektu maski. Zabieg wykonuje lekarz. Umów konsultację — Klinika Aurelia.",
    h1: "Toksyna botulinowa — wygładzenie zmarszczek mimicznych",
    lead: "Lwia zmarszczka, poprzeczne linie czoła, kurze łapki — to ślady mimiki, nie wieku. Toksyna botulinowa rozluźnia wybrane mięśnie, wygładzając skórę i zachowując naturalny wyraz twarzy.",
    quickFacts: [
      { label: "Czas zabiegu", value: "15–20 min" },
      { label: "Znieczulenie", value: "niewymagane" },
      { label: "Powrót do aktywności", value: "od razu" },
      { label: "Pierwsze efekty", value: "po 3–5 dniach" },
      { label: "Pełny efekt", value: "po 2 tyg." },
      { label: "Cena", value: "od 600 zł" },
    ],
    about:
      "Preparat toksyny botulinowej podawany jest cienką igłą w ściśle wybrane mięśnie mimiczne, czasowo ograniczając ich nadmierną aktywność. Skóra nad rozluźnionym mięśniem wygładza się, a nowe zmarszczki nie pogłębiają. Kluczem jest dawka i precyzja — dlatego w Aurelii zabieg wykonuje wyłącznie lekarz, po analizie Twojej mimiki w ruchu.",
    indications: [
      "zmarszczki poziome czoła",
      "lwia zmarszczka (między brwiami)",
      "kurze łapki",
      "profilaktyka pogłębiania zmarszczek",
      "bruksizm i napięciowe bóle głowy (wskazanie omawiane na konsultacji)",
    ],
    steps: [
      {
        number: "01",
        title: "Analiza mimiki",
        description: "lekarz ogląda twarz w ruchu i statyce, zaznacza punkty podania.",
      },
      {
        number: "02",
        title: "Podanie preparatu",
        description: "kilka–kilkanaście mikroiniekcji; całość trwa kwadrans.",
      },
      {
        number: "03",
        title: "Obserwacja",
        description: "pierwsze efekty po 3–5 dniach, pełne po dwóch tygodniach.",
      },
      {
        number: "04",
        title: "Wizyta kontrolna",
        description: "po 14 dniach bezpłatna korekta dawki, jeśli potrzebna.",
      },
    ],
    pricingTable: [
      { label: "1 okolica", price: "600 zł" },
      { label: "2 okolice", price: "1 000 zł" },
      { label: "3 okolice", price: "1 400 zł" },
      { label: "Bruksizm", price: "od 1 200 zł" },
    ],
    faq: [
      {
        question: "Czy będę mieć „zamrożoną\" twarz?",
        answer:
          "Nie — to efekt zbyt dużych dawek. Pracujemy metodą „baby botox tam, gdzie trzeba\": mimika zostaje, wygładzają się zmarszczki. Po dwóch tygodniach masz bezpłatną wizytę kontrolną do ewentualnej korekty.",
      },
      {
        question: "Jak długo działa toksyna?",
        answer:
          "Zwykle 4–6 miesięcy. Przy regularnym powtarzaniu zabiegu mięśnie „uczą się\" mniejszej aktywności i efekty bywają trwalsze.",
      },
      {
        question: "Czy zabieg jest bolesny?",
        answer:
          "Igły są bardzo cienkie, a podanie trwa sekundy — większość pacjentek porównuje to do delikatnego ukłucia. Znieczulenie nie jest potrzebne.",
      },
      {
        question: "Kiedy nie można wykonać zabiegu?",
        answer:
          "M.in. w ciąży i podczas karmienia, przy chorobach nerwowo-mięśniowych, aktywnej infekcji, antybiotykoterapii aminoglikozydami. Pełną listę przeciwwskazań omawiamy podczas konsultacji lekarskiej.",
      },
      {
        question: "O czym pamiętać po zabiegu?",
        answer:
          "Przez 4 godziny nie pochylaj się i nie kładź, przez dobę odpuść sport, saunę i alkohol, nie masuj miejsc podania. Pełne zalecenia dostajesz na piśmie.",
      },
    ],
    beforeAfter: {
      beforeSrc: "/images/meta-czolo-przed.webp",
      afterSrc: "/images/meta-czolo-po.webp",
      beforeAlt: "Czoło przed zabiegiem toksyny botulinowej",
      afterAlt: "Czoło po zabiegu toksyny botulinowej",
      label: "Czoło",
    },
  },
  "lifting-hifu": {
    slug: "lifting-hifu",
    metaTitle: "Lifting HIFU",
    metaDescription:
      "Lifting HIFU w Toruniu — ujędrnienie owalu twarzy bez skalpela i rekonwalescencji. Umów konsultację — Klinika Aurelia.",
    h1: "Lifting HIFU — ujędrnienie bez skalpela",
    lead: "Skoncentrowane ultradźwięki docierają tam, gdzie pracuje chirurg — tylko bez cięcia. HIFU przebudowuje włókna kolagenowe od środka, unosząc owal twarzy i napinając skórę na miesiące.",
    quickFacts: [
      { label: "Czas zabiegu", value: "60–90 min" },
      { label: "Znieczulenie", value: "niewymagane" },
      { label: "Powrót do aktywności", value: "od razu" },
      { label: "Pierwsze efekty", value: "od razu" },
      { label: "Pełny efekt", value: "2–3 mies." },
      { label: "Cena", value: "od 2 900 zł" },
    ],
    about:
      "HIFU (High-Intensity Focused Ultrasound) precyzyjnie podgrzewa punkty w głębokich warstwach skóry i powięzi SMAS — tej samej, którą napina chirurg podczas liftingu operacyjnego. Kontrolowane mikrouszkodzenia uruchamiają intensywną produkcję nowego kolagenu. Efekt liftingu narasta stopniowo przez 2–3 miesiące i utrzymuje się do ok. 1,5–2 lat.",
    indications: [
      "opadający owal twarzy i „chomiki\"",
      "wiotkość skóry policzków, podbródka, szyi",
      "opadające powieki górne (okolica brwi)",
      "profilaktyka wiotkości po 35. r.ż.",
      "osoby, które nie chcą lub nie mogą poddać się operacji",
    ],
    steps: [
      {
        number: "01",
        title: "Kwalifikacja",
        description: "lekarz ocenia stopień wiotkości i wyznacza obszary zabiegowe.",
      },
      {
        number: "02",
        title: "Mapowanie i zabieg",
        description: "głowica emituje serie impulsów; odczuwalne jest ciepło i mrowienie.",
      },
      {
        number: "03",
        title: "Bez rekonwalescencji",
        description: "możliwe przejściowe zaczerwienienie; wracasz do planu dnia od razu.",
      },
      {
        number: "04",
        title: "Narastanie efektu",
        description: "kolagen odbudowuje się falami: kontrola i zdjęcia porównawcze po 3 miesiącach.",
      },
    ],
    pricingTable: [
      { label: "Twarz (pełna)", price: "2 900 zł" },
      { label: "Twarz + podbródek", price: "3 400 zł" },
      { label: "Twarz + szyja", price: "3 900 zł" },
      { label: "Okolica oczu", price: "1 200 zł" },
    ],
    faq: [
      {
        question: "Czy HIFU naprawdę działa, czy to marketing?",
        answer:
          "To technologia o udokumentowanym mechanizmie: kontrolowana stymulacja kolagenu w powięzi SMAS. Kluczowa jest jakość urządzenia i doświadczenie osoby wykonującej — dlatego u nas zabieg prowadzi przeszkolony lekarz na certyfikowanym sprzęcie medycznym.",
      },
      {
        question: "Czy zabieg boli?",
        answer:
          "Odczucia opisywane są jako ciepło i krótkie ukłucia-mrowienie, silniejsze przy kości. Większość pacjentek przechodzi zabieg bez znieczulenia; intensywność impulsów dostosowujemy na bieżąco.",
      },
      {
        question: "Kiedy zobaczę efekt?",
        answer:
          "Lekkie napięcie widać od razu, ale prawdziwy efekt narasta przez 2–3 miesiące, w miarę odbudowy kolagenu. Dlatego zdjęcia kontrolne robimy po 90 dniach.",
      },
      {
        question: "Jak często powtarzać zabieg?",
        answer:
          "Zwykle raz na 12–18 miesięcy. HIFU dobrze łączy się też ze stymulatorami tkankowymi — taki plan układamy indywidualnie.",
      },
      {
        question: "Jakie są przeciwwskazania?",
        answer:
          "M.in. ciąża, rozrusznik serca i metalowe implanty w obszarze zabiegu, aktywne infekcje skóry, świeże wypełniacze w okolicy zabiegowej. Pełną listę omawiamy podczas konsultacji lekarskiej.",
      },
    ],
    beforeAfter: {
      beforeSrc: "/images/meta-owal-przed.webp",
      afterSrc: "/images/meta-owal-po.webp",
      beforeAlt: "Owal twarzy przed zabiegiem liftingu HIFU",
      afterAlt: "Owal twarzy po zabiegu liftingu HIFU",
      label: "Owal twarzy",
    },
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
    treatmentSlugs: ["lifting-hifu", "stymulator-tkankowy"],
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
