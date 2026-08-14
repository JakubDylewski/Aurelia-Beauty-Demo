/** Zabiegi bez własnej fotografii dzielą ten placeholder — komponenty rozpoznają go po tej ścieżce i renderują grafikę zastępczą zamiast zdjęcia gabinetu. */
export const PLACEHOLDER_IMAGE = "/images/wnetrze-gabinet.webp";

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
    image: PLACEHOLDER_IMAGE,
    imageAlt: "Gabinet zabiegowy kliniki Aurelia, w którym wykonywana jest mezoterapia igłowa",
    href: "/zabiegi/mezoterapia-iglowa",
    ctaLabel: "Zobacz zabieg →",
  },
  "stymulator-tkankowy": {
    slug: "stymulator-tkankowy",
    name: "Stymulator tkankowy",
    description: "Pobudza skórę do odbudowy kolagenu na długie miesiące.",
    price: "od 1 400 zł",
    duration: "45–60 min",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "Gabinet zabiegowy kliniki Aurelia, w którym wykonywane są zabiegi ze stymulatorem tkankowym",
    href: "/zabiegi/stymulator-tkankowy",
    ctaLabel: "Zobacz zabieg →",
  },
  "wypelnienie-doliny-lez": {
    slug: "wypelnienie-doliny-lez",
    name: "Wypełnienie doliny łez",
    description: "Rozświetla spojrzenie, redukując cienie i zapadnięcia pod oczami.",
    price: "1 200 zł",
    duration: "20–30 min",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "Gabinet zabiegowy kliniki Aurelia, w którym wykonywane jest wypełnienie doliny łez",
    href: "/zabiegi/wypelnienie-doliny-lez",
    ctaLabel: "Zobacz zabieg →",
  },
  "peeling-medyczny": {
    slug: "peeling-medyczny",
    name: "Peeling medyczny",
    description: "Wyrównuje koloryt i redukuje przebarwienia pod kontrolą lekarza.",
    price: "od 350 zł",
    duration: "20–30 min",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "Gabinet zabiegowy kliniki Aurelia, w którym wykonywany jest peeling medyczny",
    href: "/zabiegi/peeling-medyczny",
    ctaLabel: "Zobacz zabieg →",
  },
  "nawilzajaca-mezoterapia-ust": {
    slug: "nawilzajaca-mezoterapia-ust",
    name: "Nawilżająca mezoterapia ust",
    description: "Miękkie, nawilżone usta bez zmiany ich objętości.",
    price: "600 zł",
    duration: "20 min",
    image: "/images/zabieg-usta.webp",
    imageAlt: "Nawilżająca mezoterapia ust w klinice Aurelia",
    href: "/zabiegi/nawilzajaca-mezoterapia-ust",
    ctaLabel: "Zobacz zabieg →",
  },
  "wypelniacz-kwas-hialuronowy": {
    slug: "wypelniacz-kwas-hialuronowy",
    name: "Wypełniacz kwasem hialuronowym",
    description: "Uzupełnia objętość i wygładza bruzdy, przywracając kontur twarzy.",
    price: "od 1 200 zł",
    duration: "30–45 min",
    image: PLACEHOLDER_IMAGE,
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
    image: PLACEHOLDER_IMAGE,
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

export interface ExpectationItem {
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
  /** Sekcja "Czego się spodziewać" — trzy pytania: ból, rekonwalescencja, efekt. */
  expectations?: ExpectationItem[];
  pricingTable: PricingRow[];
  contraindications?: string[];
  faq: FaqItem[];
  beforeAfter?: {
    beforeSrc: string;
    afterSrc: string;
    beforeAlt: string;
    afterAlt: string;
    label: string;
  };
  /** Opis efektów używany, gdy nie ma sensownej pary zdjęć przed/po. */
  effectsNote?: string;
  relatedSlugs?: string[];
  relatedLabel?: string;
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
  "mezoterapia-iglowa": {
    slug: "mezoterapia-iglowa",
    metaTitle: "Mezoterapia igłowa",
    metaDescription:
      "Mezoterapia igłowa w Toruniu — głębokie nawilżenie i odżywienie skóry koktajlem witaminowym. Zabieg wykonuje lekarz lub kosmetolog kliniczny. Klinika Aurelia.",
    h1: "Mezoterapia igłowa — nawilżenie i odżywienie skóry",
    lead: "Głęboko nawilża, odżywia i pobudza skórę do regeneracji. To zabieg, który przywraca blask zmęczonej, odwodnionej cerze — bez ingerencji w jej objętość czy kontur.",
    quickFacts: [
      { label: "Czas zabiegu", value: "30 min" },
      { label: "Znieczulenie", value: "krem znieczulający (opcjonalnie)" },
      { label: "Powrót do aktywności", value: "od razu" },
      { label: "Pierwsze efekty", value: "po 2–3 dniach" },
      { label: "Pełny efekt", value: "po serii 3 zabiegów" },
      { label: "Cena", value: "od 450 zł" },
    ],
    about:
      "Mezoterapia igłowa polega na podaniu drobnymi iniekcjami koktajlu z kwasem hialuronowym, witaminami i mikroelementami bezpośrednio w skórę właściwą. Preparat nawilża od środka, wspiera naturalną produkcję kolagenu i poprawia jędrność skóry. Zabieg wykonywany jest cienką igłą techniką mikroiniekcji, punkt po punkcie, na całej powierzchni twarzy, szyi lub dekoltu.",
    indications: [
      "odwodniona, ściągnięta skóra",
      "szara, zmęczona cera bez blasku",
      "pierwsze oznaki utraty jędrności",
      "profilaktyka starzenia po 30. r.ż.",
      "skóra przygotowywana przed innymi zabiegami",
      "suchość skóry niezwiązana z chorobą dermatologiczną",
    ],
    steps: [
      {
        number: "01",
        title: "Konsultacja",
        description: "ocena stanu skóry i dobór koktajlu witaminowego.",
      },
      {
        number: "02",
        title: "Oczyszczenie i znieczulenie",
        description: "skóra jest dezynfekowana, w razie potrzeby aplikowany krem znieczulający.",
      },
      {
        number: "03",
        title: "Mikroiniekcje",
        description: "preparat podawany jest siatką drobnych wkłuć na całej powierzchni zabiegowej.",
      },
      {
        number: "04",
        title: "Pielęgnacja pozabiegowa",
        description: "zalecenia dotyczące nawilżania i ochrony przeciwsłonecznej.",
      },
    ],
    expectations: [
      {
        question: "Czy to boli?",
        answer:
          "Odczucia są zbliżone do serii drobnych ukłuć — większość pacjentek ocenia zabieg jako lekko nieprzyjemny, ale znośny bez znieczulenia. Na życzenie stosujemy krem znieczulający.",
      },
      {
        question: "Ile trwa rekonwalescencja?",
        answer:
          "Przez 1–2 dni mogą utrzymywać się drobne zaczerwienienia lub punkciki po wkłuciach, łatwe do zamaskowania makijażem. Nie ma przeciwwskazań do pracy tego samego dnia.",
      },
      {
        question: "Kiedy zobaczę efekt i jak długo się utrzyma?",
        answer:
          "Skóra jest bardziej nawilżona już po pierwszym zabiegu, ale pełny efekt odżywienia i jędrności widać po serii 3 zabiegów co 2–3 tygodnie. Efekt utrzymuje się 2–3 miesiące, zależnie od stanu skóry i pielęgnacji domowej.",
      },
    ],
    pricingTable: [
      { label: "Mezoterapia igłowa — twarz", price: "450 zł" },
      { label: "Mezoterapia — twarz + szyja", price: "650 zł" },
      { label: "Mezoterapia — okolica oczu", price: "350 zł" },
      { label: "Pakiet 3 zabiegów", price: "1 200 zł" },
    ],
    contraindications: [
      "ciąża i karmienie piersią",
      "aktywne infekcje skóry w miejscu zabiegowym",
      "skłonność do keloidów",
      "choroby autoimmunologiczne w fazie zaostrzenia",
      "przyjmowane leki przeciwzakrzepowe (do omówienia na konsultacji)",
    ],
    faq: [
      {
        question: "Czy zabieg jest bezpieczny przy wrażliwej skórze?",
        answer:
          "Tak, koktajl dobierany jest indywidualnie, a technika mikroiniekcji jest łagodna nawet dla skóry naczynkowej i atopowej — skład ustala lekarz lub kosmetolog kliniczny po ocenie skóry.",
      },
      {
        question: "Ile zabiegów potrzeba?",
        answer:
          "Zwykle zalecamy serię 3 zabiegów co 2–3 tygodnie, a potem zabiegi podtrzymujące co 2–3 miesiące.",
      },
      {
        question: "Czy widać ślady po zabiegu?",
        answer:
          "Możliwe są drobne, przejściowe zaczerwienienia lub punkciki, które ustępują zwykle w ciągu 24–48 godzin.",
      },
      {
        question: "Czym różni się mezoterapia od kwasu hialuronowego wypełniającego?",
        answer:
          "Mezoterapia nawilża i odżywia skórę, nie zmieniając jej objętości ani konturu — to zabieg pielęgnacyjny, a nie modelujący.",
      },
      {
        question: "Czy można łączyć z innymi zabiegami?",
        answer:
          "Tak, mezoterapia dobrze uzupełnia zabiegi liftingujące i wypełniające, zwykle wykonywana jest jako osobna wizyta w odstępie kilku dni.",
      },
    ],
    effectsNote:
      "Skóra po serii zabiegów jest wyraźnie bardziej nawilżona, wygładzona i ma zdrowszy koloryt — bez zmiany rysów twarzy.",
    relatedSlugs: ["peeling-medyczny", "stymulator-tkankowy"],
  },
  "stymulator-tkankowy": {
    slug: "stymulator-tkankowy",
    metaTitle: "Stymulator tkankowy",
    metaDescription:
      "Stymulator tkankowy w Toruniu — naturalna odbudowa kolagenu i poprawa jędrności skóry. Zabieg wykonuje lekarz. Umów konsultację — Klinika Aurelia.",
    h1: "Stymulator tkankowy — odbudowa kolagenu od środka",
    lead: "Pobudza skórę do produkcji własnego kolagenu, stopniowo poprawiając jędrność i gęstość tkanki. To zabieg dla osób, które chcą efektu naturalnego liftingu bez wypełniania objętości.",
    quickFacts: [
      { label: "Czas zabiegu", value: "45–60 min" },
      { label: "Znieczulenie", value: "krem znieczulający" },
      { label: "Powrót do aktywności", value: "od razu" },
      { label: "Pierwsze efekty", value: "po 4–6 tyg." },
      { label: "Pełny efekt", value: "po 3–6 mies." },
      { label: "Cena", value: "od 1 400 zł" },
    ],
    about:
      "Stymulatory tkankowe (np. na bazie kwasu poli-L-mlekowego lub hydroksyapatytu wapnia) podawane są w głębsze warstwy skóry, gdzie stopniowo pobudzają fibroblasty do produkcji nowego kolagenu. W przeciwieństwie do wypełniaczy nie uzupełniają objętości natychmiast — efekt narasta stopniowo, w miarę jak organizm buduje własną, nową tkankę podporową.",
    indications: [
      "utrata jędrności i gęstości skóry",
      "opadający owal twarzy we wczesnym stadium",
      "wiotkość policzków i skroni",
      "profilaktyka starzenia po 35.–40. r.ż.",
      "chęć uniknięcia efektu „nadmiernie wypełnionej” twarzy",
    ],
    steps: [
      {
        number: "01",
        title: "Konsultacja i kwalifikacja",
        description: "ocena stopnia utraty jędrności, dobór rodzaju stymulatora.",
      },
      {
        number: "02",
        title: "Znieczulenie",
        description: "krem znieczulający działa ok. 20–30 minut.",
      },
      {
        number: "03",
        title: "Podanie preparatu",
        description: "lekarz wprowadza preparat siatką iniekcji w wyznaczone obszary.",
      },
      {
        number: "04",
        title: "Zalecenia i harmonogram",
        description: "ustalenie liczby sesji (zwykle 2–3 co 4–6 tygodni) i wizyty kontrolnej.",
      },
    ],
    expectations: [
      {
        question: "Czy to boli?",
        answer:
          "Dzięki znieczuleniu i preparatom zawierającym lidokainę zabieg jest dobrze tolerowany — odczuwalny jest ucisk i chwilowe pieczenie w miejscu podania.",
      },
      {
        question: "Ile trwa rekonwalescencja?",
        answer:
          "Możliwy jest przejściowy obrzęk i zaczerwienienie przez 1–3 dni. Do tygodnia zalecamy unikanie intensywnego wysiłku, sauny i masażu twarzy.",
      },
      {
        question: "Kiedy zobaczę efekt i jak długo się utrzyma?",
        answer:
          "Pierwsze oznaki poprawy jędrności widoczne są po 4–6 tygodniach, a pełny efekt narasta przez 3–6 miesięcy w miarę odbudowy kolagenu. Utrzymuje się zwykle 12–18 miesięcy.",
      },
    ],
    pricingTable: [
      { label: "Stymulator tkankowy — 1 sesja", price: "1 400 zł" },
      { label: "Pakiet 2 sesji", price: "2 600 zł" },
      { label: "Pakiet 3 sesji", price: "3 700 zł" },
      { label: "Stymulator — okolica szyi i dekoltu", price: "od 1 600 zł" },
    ],
    contraindications: [
      "ciąża i karmienie piersią",
      "skłonność do keloidów i blizn przerostowych",
      "aktywne infekcje skóry",
      "choroby autoimmunologiczne",
      "leki wpływające na krzepliwość krwi (do omówienia na konsultacji)",
    ],
    faq: [
      {
        question: "Czym różni się stymulator od kwasu hialuronowego?",
        answer:
          "Kwas hialuronowy uzupełnia objętość natychmiast, stymulator pobudza organizm do wytworzenia własnego kolagenu — efekt jest wolniejszy, ale bardziej naturalny i trwały.",
      },
      {
        question: "Czy efekt będzie widoczny od razu?",
        answer:
          "Nie, to zabieg o działaniu stopniowym — efekt narasta przez kilka miesięcy w miarę produkcji kolagenu.",
      },
      {
        question: "Ile sesji jest potrzebnych?",
        answer:
          "Zwykle zalecamy 2–3 sesje w odstępach 4–6 tygodni, w zależności od stopnia utraty jędrności.",
      },
      {
        question: "Czy zabieg jest bolesny?",
        answer: "Dzięki znieczuleniu odczucia ograniczają się do ucisku i chwilowego pieczenia.",
      },
      {
        question: "Jak długo utrzymuje się efekt?",
        answer: "Zwykle 12–18 miesięcy, po czym warto powtórzyć zabieg podtrzymujący.",
      },
    ],
    effectsNote:
      "Skóra stopniowo staje się gęstsza, bardziej sprężysta, a owal twarzy — wyraźniej podparty. Zmiana jest subtelna i narasta z czasem, co wiele pacjentek ceni jako najbardziej naturalny efekt spośród zabiegów liftingujących.",
    relatedSlugs: ["lifting-hifu", "mezoterapia-iglowa"],
  },
  "wypelnienie-doliny-lez": {
    slug: "wypelnienie-doliny-lez",
    metaTitle: "Wypełnienie doliny łez",
    metaDescription:
      "Wypełnienie doliny łez w Toruniu — redukcja cieni pod oczami kwasem hialuronowym. Zabieg wykonuje lekarz. Umów konsultację — Klinika Aurelia.",
    h1: "Wypełnienie doliny łez",
    lead: "Rozświetla spojrzenie i redukuje cień pod okiem, uzupełniając zapadnięcie kwasem hialuronowym o niskiej gęstości. Delikatna korekta, która odmładza wyraz twarzy bez ingerencji w resztę okolicy oka.",
    quickFacts: [
      { label: "Czas zabiegu", value: "20–30 min" },
      { label: "Znieczulenie", value: "krem znieczulający" },
      { label: "Powrót do aktywności", value: "od razu" },
      { label: "Pierwsze efekty", value: "natychmiast" },
      { label: "Pełny efekt", value: "po ok. 2 tyg." },
      { label: "Cena", value: "1 200 zł" },
    ],
    about:
      "Dolina łez to zagłębienie między dolną powieką a policzkiem, które z wiekiem lub genetycznie pogłębia się, tworząc wrażenie cienia i zmęczenia. Lekarz precyzyjnie podaje niewielką ilość kwasu hialuronowego o niskiej gęstości i wysokiej elastyczności kaniulą lub cienką igłą, delikatnie unosząc zapadniętą okolicę.",
    indications: [
      "widoczne cienie i zapadnięcia pod oczami",
      "wrażenie chronicznego zmęczenia mimo wyspania",
      "pogłębiająca się z wiekiem dolina łez",
      "okolica oka bez nadmiaru skóry lub silnych worków tłuszczowych (kwalifikacja na konsultacji)",
    ],
    steps: [
      {
        number: "01",
        title: "Konsultacja i ocena anatomii",
        description: "lekarz sprawdza grubość skóry i stopień zapadnięcia, ocenia kwalifikację do zabiegu.",
      },
      {
        number: "02",
        title: "Znieczulenie",
        description: "krem znieczulający działa ok. 20 minut.",
      },
      {
        number: "03",
        title: "Podanie preparatu",
        description: "precyzyjne mikroiniekcje kaniulą, na bieżąco kontrolowany efekt.",
      },
      {
        number: "04",
        title: "Zalecenia",
        description: "chłodzenie okolicy, informacja o możliwym obrzęku.",
      },
    ],
    expectations: [
      {
        question: "Czy to boli?",
        answer:
          "Okolica oka jest wrażliwa, ale dzięki cienkiej kaniuli i znieczuleniu zabieg jest dobrze tolerowany — odczuwalny jest głównie ucisk.",
      },
      {
        question: "Ile trwa rekonwalescencja?",
        answer:
          "Możliwy jest przejściowy obrzęk lub siniak, szczególnie przy delikatnej skórze — zwykle ustępuje w 3–7 dni. Makijaż można stosować już następnego dnia.",
      },
      {
        question: "Kiedy zobaczę efekt i jak długo się utrzyma?",
        answer:
          "Efekt widoczny jest od razu, a ostateczny kształt ustala się po ustąpieniu obrzęku, ok. 2 tygodnie. Utrzymuje się zwykle 9–12 miesięcy.",
      },
    ],
    pricingTable: [
      { label: "Wypełnienie doliny łez — jedna okolica", price: "1 200 zł" },
      { label: "Wypełnienie doliny łez — obustronnie", price: "2 000 zł" },
      { label: "Zabieg kontrolny / dopełnienie (do 6 mies.)", price: "od 400 zł" },
    ],
    contraindications: [
      "ciąża i karmienie piersią",
      "aktywne infekcje w okolicy oka",
      "skłonność do silnych obrzęków naczynioruchowych",
      "przyjmowane leki przeciwzakrzepowe (do omówienia na konsultacji)",
      "wyraźny nadmiar skóry lub przepuklina tłuszczowa wymagająca innego zabiegu",
    ],
    faq: [
      {
        question: "Czy zabieg jest ryzykowny w tak delikatnej okolicy?",
        answer:
          "Wykonuje go wyłącznie lekarz, precyzyjną kaniulą i preparatem dedykowanym tej okolicy — ryzyko minimalizuje doświadczenie i dobór odpowiedniej gęstości kwasu.",
      },
      {
        question: "Czy widać siniaki po zabiegu?",
        answer:
          "Możliwe, szczególnie przy cienkiej skórze — zwykle ustępują w kilka dni i można je zamaskować korektorem.",
      },
      {
        question: "Czy zabieg pomoże na worki pod oczami?",
        answer:
          "Nie zawsze — jeśli przyczyną są przepukliny tłuszczowe lub nadmiar skóry, lekarz może zaproponować inne rozwiązanie podczas konsultacji.",
      },
      {
        question: "Jak długo utrzymuje się efekt?",
        answer: "Zwykle 9–12 miesięcy, zależnie od metabolizmu i ilości podanego preparatu.",
      },
      {
        question: "Czy mogę wrócić do pracy od razu?",
        answer: "Tak, choć przy widocznym obrzęku niektóre pacjentki wolą zaplanować zabieg na piątek.",
      },
    ],
    effectsNote:
      "Spojrzenie staje się bardziej wypoczęte, a cień pod okiem wyraźnie płytszy. To delikatna korekta — celem nie jest zmiana kształtu oka, a wygładzenie przejścia między powieką a policzkiem.",
    relatedSlugs: ["wypelniacz-kwas-hialuronowy", "mezoterapia-iglowa"],
  },
  "wypelniacz-kwas-hialuronowy": {
    slug: "wypelniacz-kwas-hialuronowy",
    metaTitle: "Wypełniacz kwasem hialuronowym",
    metaDescription:
      "Wypełniacz kwasem hialuronowym w Toruniu — odbudowa konturu twarzy i redukcja bruzd. Zabieg wykonuje lekarz. Umów konsultację — Klinika Aurelia.",
    h1: "Wypełniacz kwasem hialuronowym — kontur i objętość twarzy",
    lead: "Uzupełnia utraconą objętość i wygładza bruzdy, przywracając twarzy młodszy, podparty kontur. Precyzyjnie dobrana gęstość preparatu pozwala pracować zarówno nad bruzdami, jak i linią żuchwy.",
    quickFacts: [
      { label: "Czas zabiegu", value: "30–45 min" },
      { label: "Znieczulenie", value: "krem znieczulający" },
      { label: "Powrót do aktywności", value: "od razu" },
      { label: "Pierwsze efekty", value: "natychmiast" },
      { label: "Pełny efekt", value: "po ok. 2 tyg." },
      { label: "Cena", value: "od 1 200 zł" },
    ],
    about:
      "Kwas hialuronowy o wyższej gęstości podawany jest w miejsca utraty objętości — bruzdy nosowo-wargowe, okolicę żuchwy czy policzki — odbudowując naturalny kontur twarzy. Preparat wiąże wodę i fizycznie unosi tkanki, dając efekt wygładzenia i podparcia widoczny od razu po zabiegu.",
    indications: [
      "pogłębione bruzdy nosowo-wargowe",
      "utrata konturu żuchwy",
      "zapadnięte policzki",
      "zmarszczki palacza nad wargą (w połączeniu z mezoterapią)",
      "asymetrie twarzy wymagające delikatnej korekty objętości",
    ],
    steps: [
      {
        number: "01",
        title: "Konsultacja i plan",
        description: "analiza twarzy, wyznaczenie obszarów i dobór gęstości preparatu.",
      },
      {
        number: "02",
        title: "Znieczulenie",
        description: "krem znieczulający działa ok. 20 minut.",
      },
      {
        number: "03",
        title: "Podanie preparatu",
        description: "iniekcje igłą lub kaniulą, na bieżąco kontrolowany efekt w lustrze.",
      },
      {
        number: "04",
        title: "Zalecenia pozabiegowe",
        description: "informacja o pielęgnacji i ewentualnym obrzęku.",
      },
    ],
    expectations: [
      {
        question: "Czy to boli?",
        answer:
          "Preparaty zawierają lidokainę, a dodatkowo stosujemy krem znieczulający — większość pacjentek odczuwa jedynie ucisk.",
      },
      {
        question: "Ile trwa rekonwalescencja?",
        answer:
          "Możliwy jest obrzęk i lekkie siniaki przez 2–5 dni, zwłaszcza przy iniekcjach igłą. Kaniula zmniejsza to ryzyko. Powrót do pracy jest możliwy od razu.",
      },
      {
        question: "Kiedy zobaczę efekt i jak długo się utrzyma?",
        answer:
          "Efekt widać natychmiast, ostateczny kształt po ustąpieniu obrzęku — ok. 2 tygodnie. Utrzymuje się 9–15 miesięcy, zależnie od obszaru i metabolizmu.",
      },
    ],
    pricingTable: [
      { label: "Wypełniacz HA — 1 ml", price: "1 200 zł" },
      { label: "Wypełniacz HA — 2 ml", price: "2 200 zł" },
      { label: "Korekta linii żuchwy (pakiet)", price: "od 2 400 zł" },
      { label: "Rozpuszczenie preparatu (hialuronidaza)", price: "od 500 zł" },
    ],
    contraindications: [
      "ciąża i karmienie piersią",
      "aktywna opryszczka w okolicy zabiegowej",
      "choroby autoimmunologiczne w fazie aktywnej",
      "skłonność do keloidów",
      "terapia lekami przeciwzakrzepowymi",
    ],
    faq: [
      {
        question: "Czy efekt będzie wyglądał naturalnie?",
        answer:
          "Tak, jeśli zachowane są proporcje twarzy — pracujemy metodą stopniowego uzupełniania, „less is more”, z możliwością dołożenia na kolejnej wizycie.",
      },
      {
        question: "Jak długo utrzymuje się efekt?",
        answer:
          "Zwykle 9–15 miesięcy, zależnie od obszaru — bruzdy i policzki utrzymują efekt krócej niż np. żuchwa.",
      },
      {
        question: "Czy zabieg jest odwracalny?",
        answer:
          "Tak, kwas hialuronowy można rozpuścić enzymem hialuronidazą, jeśli efekt nie spełnia oczekiwań.",
      },
      {
        question: "Czy zostają siniaki?",
        answer:
          "Możliwe, zwłaszcza przy iniekcji igłą — zwykle ustępują w kilka dni, technika kaniuli zmniejsza to ryzyko.",
      },
      {
        question: "Czy mogę połączyć z toksyną botulinową?",
        answer:
          "Tak, to częste połączenie — zabiegi zwykle rozdzielamy o 2 tygodnie, plan ustala lekarz.",
      },
    ],
    effectsNote:
      "Twarz zyskuje wyraźniejszy, bardziej podparty kontur, a bruzdy stają się płytsze. Zmiana ma wyglądać jak Twoja twarz w lepszej wersji, nie jak nowa twarz — dlatego pracujemy techniką stopniowego dokładania.",
    relatedSlugs: ["stymulator-tkankowy", "lifting-hifu"],
  },
  "peeling-medyczny": {
    slug: "peeling-medyczny",
    metaTitle: "Peeling medyczny",
    metaDescription:
      "Peeling medyczny w Toruniu — wyrównanie kolorytu i redukcja przebarwień pod kontrolą lekarza. Umów konsultację — Klinika Aurelia.",
    h1: "Peeling medyczny — wyrównanie kolorytu i odnowa skóry",
    lead: "Kontrolowane złuszczanie naskórka pod nadzorem lekarza redukuje przebarwienia, wyrównuje koloryt i odświeża wygląd skóry. Dobierany indywidualnie do rodzaju i wrażliwości cery.",
    quickFacts: [
      { label: "Czas zabiegu", value: "20–30 min" },
      { label: "Znieczulenie", value: "niewymagane" },
      { label: "Powrót do aktywności", value: "od razu" },
      { label: "Pierwsze efekty", value: "po serii 3–4 zabiegów" },
      { label: "Pełny efekt", value: "po zakończeniu kuracji" },
      { label: "Cena", value: "od 350 zł" },
    ],
    about:
      "Peeling medyczny to kontrolowane złuszczenie wierzchnich warstw naskórka za pomocą kwasów (np. migdałowego, pirogronowego, TCA) dobranych do problemu skóry. Proces przyspiesza odnowę komórkową, redukuje przebarwienia, spłyca blizny potrądzikowe i zwęża pory. Głębokość i rodzaj peelingu dobierany jest indywidualnie przez lekarza lub kosmetologa klinicznego.",
    indications: [
      "przebarwienia i plamy posłoneczne",
      "szara, zmęczona cera bez blasku",
      "rozszerzone pory",
      "blizny potrądzikowe",
      "trądzik i tendencja do niedoskonałości (po konsultacji lekarskiej)",
      "profilaktyka starzenia skóry",
    ],
    steps: [
      {
        number: "01",
        title: "Konsultacja i dobór peelingu",
        description: "ocena typu skóry i problemu, wybór rodzaju kwasu i stężenia.",
      },
      {
        number: "02",
        title: "Oczyszczenie skóry",
        description: "dokładne odtłuszczenie i przygotowanie powierzchni.",
      },
      {
        number: "03",
        title: "Aplikacja preparatu",
        description: "kwas nakładany jest warstwami, z kontrolą czasu ekspozycji.",
      },
      {
        number: "04",
        title: "Neutralizacja i pielęgnacja",
        description: "preparat neutralizowany, aplikowany krem regenerujący i filtr SPF.",
      },
    ],
    expectations: [
      {
        question: "Czy to boli?",
        answer:
          "Podczas aplikacji można odczuwać pieczenie lub mrowienie, zależnie od rodzaju i stężenia kwasu — trwa to zwykle kilka minut i mija po neutralizacji.",
      },
      {
        question: "Ile trwa rekonwalescencja?",
        answer:
          "Skóra może być zaczerwieniona przez 1–2 dni, a przy głębszych peelingach złuszczać się przez 3–5 dni. W tym czasie obowiązkowa jest wysoka ochrona SPF.",
      },
      {
        question: "Kiedy zobaczę efekt i jak długo się utrzyma?",
        answer:
          "Pierwszą poprawę kolorytu widać po 1–2 zabiegach, pełny efekt po serii 3–4 zabiegów co 2–4 tygodnie. Efekt utrzymuje się kilka miesięcy przy odpowiedniej pielęgnacji domowej i ochronie przeciwsłonecznej.",
      },
    ],
    pricingTable: [
      { label: "Peeling medyczny — zabieg pojedynczy", price: "od 350 zł" },
      { label: "Peeling — pakiet 3 zabiegów", price: "od 900 zł" },
      { label: "Peeling — pakiet 4 zabiegów (blizny/przebarwienia)", price: "od 1 150 zł" },
    ],
    contraindications: [
      "aktywne infekcje wirusowe lub bakteryjne skóry",
      "ciąża i karmienie piersią (dla części kwasów)",
      "świeża opalenizna lub planowana ekspozycja na słońce",
      "skóra po niedawnych zabiegach laserowych",
      "nadwrażliwość na składniki preparatu",
    ],
    faq: [
      {
        question: "Czy peeling jest bezpieczny dla wrażliwej skóry?",
        answer:
          "Tak, rodzaj i stężenie kwasu dobieramy indywidualnie — dla cery wrażliwej stosujemy łagodniejsze kwasy, np. migdałowy.",
      },
      {
        question: "Czy skóra będzie się złuszczać?",
        answer:
          "Zależy od rodzaju peelingu — łagodniejsze niemal nie dają widocznego złuszczania, głębsze mogą powodować widoczne złuszczanie przez kilka dni.",
      },
      {
        question: "Ile zabiegów potrzeba, żeby zobaczyć efekt?",
        answer:
          "Zwykle zalecamy serię 3–4 zabiegów w odstępach 2–4 tygodni, w zależności od problemu skóry.",
      },
      {
        question: "Czy mogę robić peeling latem?",
        answer:
          "Tak, ale wymaga to jeszcze rygorystycznej ochrony SPF — niektóre kwasy dobieramy sezonowo.",
      },
      {
        question: "Czy peeling pomoże na aktywny trądzik?",
        answer:
          "Może pomóc w redukcji niedoskonałości, ale przy aktywnym trądziku zalecamy wcześniejszą konsultację lekarską w celu ustalenia przyczyny.",
      },
    ],
    effectsNote:
      "Skóra jest wyraźnie gładsza, bardziej jednolita kolorystycznie, a pory mniej widoczne. Efekt narasta z każdym zabiegiem serii i zależy od typu skóry oraz systematyczności kuracji.",
    relatedSlugs: ["mezoterapia-iglowa", "konsultacja-lekarska"],
  },
  "nawilzajaca-mezoterapia-ust": {
    slug: "nawilzajaca-mezoterapia-ust",
    metaTitle: "Nawilżająca mezoterapia ust",
    metaDescription:
      "Nawilżająca mezoterapia ust w Toruniu — regeneracja suchych, spierzchniętych ust bez zmiany ich objętości. Klinika Aurelia.",
    h1: "Nawilżająca mezoterapia ust",
    lead: "Głęboko nawilża i regeneruje suche, spierzchnięte usta — bez zmiany ich kształtu ani objętości. Delikatny zabieg dla ust, które potrzebują odżywienia, nie powiększenia.",
    quickFacts: [
      { label: "Czas zabiegu", value: "20 min" },
      { label: "Znieczulenie", value: "krem znieczulający (opcjonalnie)" },
      { label: "Powrót do aktywności", value: "od razu" },
      { label: "Pierwsze efekty", value: "po 2–3 dniach" },
      { label: "Pełny efekt", value: "po serii 2–3 zabiegów" },
      { label: "Cena", value: "600 zł" },
    ],
    about:
      "Zabieg polega na podaniu niesieciowanego kwasu hialuronowego drobnymi mikroiniekcjami w czerwień wargową i jej okolicę. W przeciwieństwie do modelowania ust preparat nie zwiększa objętości — jego zadaniem jest wiązanie wody i głębokie nawilżenie tkanki, dzięki czemu usta stają się miękkie, gładkie i mniej podatne na pękanie.",
    indications: [
      "suche, spierzchnięte usta",
      "drobne zmarszczki na czerwieni wargowej",
      "usta tracące jędrność z wiekiem, bez potrzeby zmiany kształtu",
      "przygotowanie ust przed modelowaniem kwasem hialuronowym",
    ],
    steps: [
      {
        number: "01",
        title: "Konsultacja",
        description: "ocena stanu ust i oczekiwań (nawilżenie, nie powiększenie).",
      },
      {
        number: "02",
        title: "Znieczulenie",
        description: "krem znieczulający na życzenie.",
      },
      {
        number: "03",
        title: "Mikroiniekcje",
        description: "preparat podawany jest drobną igłą na całej powierzchni ust.",
      },
      {
        number: "04",
        title: "Pielęgnacja",
        description: "zalecenia dotyczące nawilżania i ochrony ust po zabiegu.",
      },
    ],
    expectations: [
      {
        question: "Czy to boli?",
        answer:
          "Usta są wrażliwą okolicą, ale cienka igła i możliwość znieczulenia sprawiają, że zabieg jest dobrze tolerowany — odczuwalne są drobne ukłucia.",
      },
      {
        question: "Ile trwa rekonwalescencja?",
        answer:
          "Możliwy jest niewielki, przejściowy obrzęk przez 1–2 dni. Nie ma przeciwwskazań do powrotu do codziennych aktywności od razu.",
      },
      {
        question: "Kiedy zobaczę efekt i jak długo się utrzyma?",
        answer:
          "Nawilżenie widać już po kilku dniach, pełny efekt po serii 2–3 zabiegów co 3–4 tygodnie. Utrzymuje się zwykle 2–3 miesiące.",
      },
    ],
    pricingTable: [
      { label: "Nawilżająca mezoterapia ust — zabieg pojedynczy", price: "600 zł" },
      { label: "Pakiet 3 zabiegów", price: "1 600 zł" },
    ],
    contraindications: [
      "ciąża i karmienie piersią",
      "aktywna opryszczka wargowa",
      "skłonność do reakcji alergicznych na kwas hialuronowy",
      "infekcje skóry w okolicy ust",
    ],
    faq: [
      {
        question: "Czy usta zrobią się większe?",
        answer:
          "Nie, preparat nie zwiększa objętości — jego zadaniem jest wyłącznie nawilżenie i poprawa jędrności tkanki.",
      },
      {
        question: "Dla kogo jest ten zabieg?",
        answer:
          "Dla osób z suchymi, spierzchniętymi ustami, które nie szukają powiększenia, tylko regeneracji i nawilżenia.",
      },
      {
        question: "Czy można to połączyć z modelowaniem ust?",
        answer:
          "Tak, mezoterapia dobrze przygotowuje usta przed modelowaniem kwasem hialuronowym, zwykle jako osobna, wcześniejsza wizyta.",
      },
      {
        question: "Jak długo utrzymuje się efekt?",
        answer: "Zwykle 2–3 miesiące, po czym warto powtórzyć zabieg podtrzymujący.",
      },
      {
        question: "Czy zabieg jest bolesny?",
        answer: "Odczucia są łagodne — drobne ukłucia, które można zminimalizować kremem znieczulającym.",
      },
    ],
    effectsNote:
      "Usta stają się wyraźnie bardziej miękkie, gładkie i nawilżone — bez zmiany kształtu czy objętości. To zabieg pielęgnacyjny, nie modelujący.",
    relatedSlugs: ["modelowanie-ust", "korekta-ust-hialuronidaza"],
  },
  "korekta-ust-hialuronidaza": {
    slug: "korekta-ust-hialuronidaza",
    metaTitle: "Korekta ust z hialuronidazą",
    metaDescription:
      "Korekta ust z hialuronidazą w Toruniu — bezpieczne rozpuszczenie nadmiaru kwasu hialuronowego. Zabieg wykonuje lekarz. Klinika Aurelia.",
    h1: "Korekta ust z hialuronidazą",
    lead: "Rozpuszcza nadmiar lub nierówno rozłożony kwas hialuronowy, przywracając ustom naturalny, symetryczny kształt. Rozwiązanie dla osób, które chcą poprawić efekt zabiegu wykonanego gdzie indziej.",
    quickFacts: [
      { label: "Czas zabiegu", value: "20–30 min" },
      { label: "Znieczulenie", value: "krem znieczulający (opcjonalnie)" },
      { label: "Powrót do aktywności", value: "od razu" },
      { label: "Pierwsze efekty", value: "po 24–48 godz." },
      { label: "Pełny efekt", value: "po ok. 1 tyg." },
      { label: "Cena", value: "od 1 300 zł" },
    ],
    about:
      "Hialuronidaza to enzym, który rozkłada kwas hialuronowy podany wcześniej w ramach innego zabiegu. Lekarz precyzyjnie podaje preparat w miejsca nadmiaru, asymetrii lub grudek wyczuwalnych pod skórą, stopniowo rozpuszczając wcześniej wstrzyknięty wypełniacz. Zabieg pozwala skorygować nieudany efekt lub całkowicie cofnąć modelowanie, jeśli pacjentka tego oczekuje.",
    indications: [
      "nierówny lub zbyt duży efekt po modelowaniu ust w innym gabinecie",
      "wyczuwalne grudki lub nierówności preparatu",
      "asymetria po wcześniejszym zabiegu",
      "chęć powrotu do naturalnego wyglądu przed kolejnym modelowaniem",
    ],
    steps: [
      {
        number: "01",
        title: "Konsultacja i ocena",
        description: "lekarz bada usta, lokalizuje nadmiar preparatu i ustala plan korekty.",
      },
      {
        number: "02",
        title: "Znieczulenie",
        description: "krem znieczulający na życzenie.",
      },
      {
        number: "03",
        title: "Podanie hialuronidazy",
        description: "enzym wstrzykiwany jest precyzyjnie w wybrane punkty.",
      },
      {
        number: "04",
        title: "Kontrola efektu",
        description: "ocena rezultatu po kilku dniach, w razie potrzeby druga sesja.",
      },
    ],
    expectations: [
      {
        question: "Czy to boli?",
        answer:
          "Odczucia są zbliżone do zwykłego wstrzyknięcia — porównywalne lub nieco mniej intensywne niż przy modelowaniu ust.",
      },
      {
        question: "Ile trwa rekonwalescencja?",
        answer:
          "Możliwy jest przejściowy obrzęk przez 1–2 dni, czasem drobne siniaki. Nie ma przeciwwskazań do normalnej aktywności.",
      },
      {
        question: "Kiedy zobaczę efekt i jak długo się utrzyma?",
        answer:
          "Enzym zaczyna działać w ciągu kilku godzin, a widoczny efekt rozpuszczenia preparatu utrzymuje się po 24–48 godzinach. Pełny efekt oceniamy po tygodniu — czasem potrzebna jest druga sesja.",
      },
    ],
    pricingTable: [
      { label: "Korekta ust z hialuronidazą — 1 sesja", price: "od 1 300 zł" },
      { label: "Druga sesja korekcyjna (do 2 tyg.)", price: "od 600 zł" },
    ],
    contraindications: [
      "ciąża i karmienie piersią",
      "alergia na hialuronidazę (rzadka, wymaga wywiadu)",
      "aktywna infekcja w miejscu zabiegowym",
      "niedawno przebyta reakcja alergiczna na jad pszczeli lub osy (możliwa reaktywność krzyżowa)",
    ],
    faq: [
      {
        question: "Czy rozpuszczenie jest całkowite?",
        answer:
          "Zależy od ilości podanego enzymu — można rozpuścić preparat częściowo (korekta) lub całkowicie, zgodnie z oczekiwaniami pacjentki.",
      },
      {
        question: "Czy zabieg jest bolesny?",
        answer: "Odczucia są zbliżone do standardowego wstrzyknięcia, dobrze tolerowane, możliwe znieczulenie kremem.",
      },
      {
        question: "Po jakim czasie widać efekt?",
        answer: "Enzym zaczyna działać od razu, a wyraźny efekt widać po 24–48 godzinach.",
      },
      {
        question: "Czy mogę od razu zrobić nowe modelowanie ust?",
        answer:
          "Zalecamy odczekać co najmniej 2 tygodnie, aby ocenić stabilny efekt korekty i dać tkankom czas na regenerację.",
      },
      {
        question: "Czy to boli bardziej niż modelowanie ust?",
        answer: "Nie, odczucia są porównywalne — to również precyzyjna mikroiniekcja.",
      },
    ],
    effectsNote:
      "Usta wracają do swojego naturalnego kształtu i proporcji sprzed nadmiernego wypełnienia. Stopień rozpuszczenia preparatu zależy od jego ilości, rodzaju i czasu, jaki upłynął od pierwotnego zabiegu.",
    relatedSlugs: ["modelowanie-ust", "nawilzajaca-mezoterapia-ust"],
  },
  "lipoliza-iniekcyjna": {
    slug: "lipoliza-iniekcyjna",
    metaTitle: "Lipoliza iniekcyjna",
    metaDescription:
      "Lipoliza iniekcyjna w Toruniu — redukcja drugiego podbródka bez operacji. Zabieg wykonuje lekarz. Umów konsultację — Klinika Aurelia.",
    h1: "Lipoliza iniekcyjna — redukcja drugiego podbródka",
    lead: "Rozpuszcza miejscową tkankę tłuszczową pod brodą bez cięcia i znieczulenia ogólnego. Zabieg dla osób z niewielkim nadmiarem tłuszczu, które chcą wyraźniejszej linii żuchwy.",
    quickFacts: [
      { label: "Czas zabiegu", value: "30 min" },
      { label: "Znieczulenie", value: "krem znieczulający" },
      { label: "Powrót do aktywności", value: "od razu (obrzęk do kilku dni)" },
      { label: "Pierwsze efekty", value: "po 3–4 tyg." },
      { label: "Pełny efekt", value: "po serii 2–3 zabiegów" },
      { label: "Cena", value: "od 900 zł" },
    ],
    about:
      "Preparat na bazie kwasu dezoksycholowego podawany jest iniekcyjnie w tkankę tłuszczową pod brodą. Substancja rozkłada błony komórek tłuszczowych, które są następnie naturalnie usuwane przez organizm w procesie zapalnym i limfatycznym. Efekt jest trwały — rozłożone komórki tłuszczowe nie odbudowują się.",
    indications: [
      "niewielki do umiarkowanego nadmiar tkanki tłuszczowej pod brodą",
      "zatarta linia żuchwy",
      "osoby niekwalifikujące się lub nieszukające zabiegu chirurgicznego (liposukcji)",
      "dobra jędrność skóry w okolicy zabiegowej (warunek kwalifikacji)",
    ],
    steps: [
      {
        number: "01",
        title: "Konsultacja i kwalifikacja",
        description: "ocena ilości tkanki tłuszczowej i jędrności skóry, wykluczenie przeciwwskazań.",
      },
      {
        number: "02",
        title: "Znieczulenie",
        description: "krem znieczulający na ok. 20–30 minut.",
      },
      {
        number: "03",
        title: "Podanie preparatu",
        description: "siatka mikroiniekcji w wyznaczony obszar pod brodą.",
      },
      {
        number: "04",
        title: "Zalecenia i chłodzenie",
        description: "instrukcje dotyczące łagodzenia obrzęku i planu kolejnych sesji.",
      },
    ],
    expectations: [
      {
        question: "Czy to boli?",
        answer:
          "Dzięki znieczuleniu zabieg jest dobrze tolerowany — po jego ustąpieniu może pojawić się uczucie pieczenia i napięcia w okolicy podbródka, trwające kilka godzin.",
      },
      {
        question: "Ile trwa rekonwalescencja?",
        answer:
          "Obrzęk, uczucie napięcia i lekka tkliwość mogą utrzymywać się od kilku dni do tygodnia — to naturalna reakcja na proces rozpadu komórek tłuszczowych. Możliwe są też przejściowe siniaki.",
      },
      {
        question: "Kiedy zobaczę efekt i jak długo się utrzyma?",
        answer:
          "Pierwsze efekty redukcji widoczne są po 3–4 tygodniach, gdy organizm usunie rozłożone komórki. Pełny efekt ocenia się po serii 2–3 zabiegów co 4–6 tygodni. Efekt jest trwały, ponieważ rozłożone komórki tłuszczowe się nie odbudowują.",
      },
    ],
    pricingTable: [
      { label: "Lipoliza iniekcyjna — 1 sesja", price: "od 900 zł" },
      { label: "Pakiet 3 sesji", price: "od 2 400 zł" },
    ],
    contraindications: [
      "ciąża i karmienie piersią",
      "choroby tarczycy w fazie niewyrównanej",
      "zaburzenia krzepnięcia krwi",
      "znaczny nadmiar skóry lub jej obniżona jędrność (do oceny na konsultacji)",
      "infekcje skóry w okolicy zabiegowej",
    ],
    faq: [
      {
        question: "Czy to alternatywa dla liposukcji?",
        answer:
          "Dla niewielkiego, miejscowego nadmiaru tkanki tłuszczowej — tak. Przy większej ilości tłuszczu lub nadmiarze skóry lekarz może zalecić inne rozwiązanie.",
      },
      {
        question: "Czy efekt jest trwały?",
        answer:
          "Tak, rozłożone komórki tłuszczowe nie odbudowują się — efekt utrzymuje się długoterminowo, o ile utrzymana jest stabilna masa ciała.",
      },
      {
        question: "Ile sesji jest potrzebnych?",
        answer: "Zwykle 2–3 sesje w odstępach 4–6 tygodni, zależnie od ilości tkanki tłuszczowej.",
      },
      {
        question: "Czy obrzęk jest duży?",
        answer:
          "Może być zauważalny przez kilka dni do tygodnia — to normalna reakcja na proces rozpadu tłuszczu, warto to uwzględnić w planach.",
      },
      {
        question: "Czy zabieg nadaje się dla każdego?",
        answer:
          "Nie zawsze — przy dużym nadmiarze skóry lepszy efekt może dać inna metoda. Kwalifikację zawsze ustala lekarz na konsultacji.",
      },
    ],
    effectsNote:
      "Linia żuchwy staje się wyraźniejsza, a sylwetka podbródka szczuplejsza. Zakres redukcji zależy od wyjściowej ilości tkanki tłuszczowej i liczby wykonanych sesji.",
    relatedSlugs: ["lifting-hifu", "stymulator-tkankowy"],
  },
  "konsultacja-lekarska": {
    slug: "konsultacja-lekarska",
    metaTitle: "Konsultacja lekarska",
    metaDescription:
      "Konsultacja lekarska w Klinice Aurelia w Toruniu — rzetelna ocena skóry i indywidualny plan zabiegowy przed każdym zabiegiem medycyny estetycznej.",
    h1: "Konsultacja lekarska",
    lead: "Rzetelna rozmowa z lekarzem medycyny estetycznej — podstawa każdego bezpiecznego planu zabiegowego. Ocenimy Twoją skórę, wysłuchamy oczekiwań i szczerze powiemy, co ma sens, a co nie.",
    quickFacts: [
      { label: "Czas trwania", value: "20–30 min" },
      { label: "Znieczulenie", value: "nie dotyczy" },
      { label: "Powrót do aktywności", value: "od razu" },
      { label: "Zabieg tego samego dnia", value: "możliwy" },
      { label: "Ważność zaleceń", value: "bezterminowo" },
      { label: "Cena", value: "150 zł (odliczana od zabiegu)" },
    ],
    about:
      "Konsultacja lekarska to rozmowa i badanie, podczas którego lekarz medycyny estetycznej ocenia stan skóry, słucha Twoich oczekiwań i wspólnie z Tobą układa realistyczny plan działania. To moment, w którym możesz zadać wszystkie pytania, dowiedzieć się, czego się spodziewać, a czasem usłyszeć, że dany zabieg nie jest dla Ciebie najlepszym rozwiązaniem. W Aurelii żaden zabieg nie jest wykonywany bez wcześniejszej konsultacji.",
    indications: [
      "osoby, które nie wiedzą, od czego zacząć",
      "pierwsza wizyta w klinice medycyny estetycznej",
      "chęć zweryfikowania planu zabiegowego zaproponowanego gdzie indziej",
      "wątpliwości co do przeciwwskazań zdrowotnych",
      "potrzeba szczerej, niezależnej opinii przed decyzją",
    ],
    steps: [
      {
        number: "01",
        title: "Wywiad",
        description: "rozmowa o oczekiwaniach, historii zdrowia i ewentualnych wcześniejszych zabiegach.",
      },
      {
        number: "02",
        title: "Badanie",
        description: "ocena stanu skóry, mimiki i proporcji twarzy.",
      },
      {
        number: "03",
        title: "Omówienie opcji",
        description: "lekarz przedstawia zabiegi realnie odpowiadające na problem, wraz z przeciwwskazaniami i kosztem.",
      },
      {
        number: "04",
        title: "Plan i termin",
        description: "wspólne ustalenie planu działania i, jeśli zdecydujesz, terminu zabiegu.",
      },
    ],
    expectations: [
      {
        question: "Czy to boli?",
        answer: "Konsultacja nie obejmuje żadnych iniekcji ani zabiegów — to wyłącznie rozmowa i badanie wzrokowe.",
      },
      {
        question: "Ile trwa rekonwalescencja?",
        answer: "Nie dotyczy — po konsultacji wracasz do normalnych aktywności bez żadnych ograniczeń.",
      },
      {
        question: "Kiedy zobaczę efekt i jak długo się utrzyma?",
        answer:
          "Efektem konsultacji jest jasny plan działania i odpowiedzi na Twoje pytania — obowiązuje bezterminowo, choć zalecamy realizację zabiegów w rozsądnym odstępie czasu od oceny skóry.",
      },
    ],
    pricingTable: [
      { label: "Konsultacja lekarska", price: "150 zł" },
      { label: "Odliczenie od ceny zabiegu (w ciągu 30 dni)", price: "−150 zł" },
    ],
    contraindications: [
      "brak przeciwwskazań do samej konsultacji — jest dostępna dla każdego",
      "przeciwwskazania do konkretnych zabiegów omawiane są indywidualnie w trakcie rozmowy",
    ],
    faq: [
      {
        question: "Czy muszę się na coś zdecydować podczas konsultacji?",
        answer: "Nie, konsultacja niczego nie zobowiązuje — możesz wyjść z samym planem i zdecydować się później.",
      },
      {
        question: "Czy koszt konsultacji się zwraca?",
        answer:
          "Tak, 150 zł jest odliczane od ceny zabiegu, jeśli zdecydujesz się go wykonać w ciągu 30 dni od konsultacji.",
      },
      {
        question: "Czy konsultacja jest potrzebna, jeśli już wiem, jaki zabieg chcę?",
        answer:
          "Tak — to standard bezpieczeństwa w Aurelii: żaden zabieg nie jest wykonywany bez wcześniejszej oceny lekarskiej, nawet jeśli znasz już jego nazwę.",
      },
      {
        question: "Czy dostanę szczerą opinię, nawet jeśli będzie odradzająca zabieg?",
        answer:
          "Tak, to fundament naszej pracy — wolimy powiedzieć „nie” niż wykonać zabieg, który nie ma sensu.",
      },
      {
        question: "Czy mogę przyjść bez konkretnego pomysłu na zabieg?",
        answer:
          "Oczywiście — od tego jest konsultacja: żeby wspólnie z lekarzem znaleźć rozwiązanie dopasowane do Twojego problemu.",
      },
    ],
    effectsNote:
      "Wychodzisz z konsultacji z konkretną wiedzą: czy dany zabieg ma sens w Twoim przypadku, jakiego efektu się spodziewać i ile to będzie kosztować. Czasem najlepszym efektem konsultacji jest usłyszane „jeszcze nie teraz”.",
    relatedSlugs: ["modelowanie-ust", "toksyna-botulinowa", "lifting-hifu"],
    relatedLabel: "Popularne zabiegi, o które pytają pacjentki",
  },
};

