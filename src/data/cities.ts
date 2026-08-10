export interface CityWhyPoint {
  title: string;
  description: string;
}

export interface CityPageData {
  slug: string;
  cityName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  treatmentsIntro: string;
  mapCaption: string;
  whyHeading: string;
  whyPoints: CityWhyPoint[];
  areaServed: string;
}

export const cities: Record<string, CityPageData> = {
  torun: {
    slug: "torun",
    cityName: "Toruń",
    metaTitle: "Medycyna estetyczna Toruń",
    metaDescription:
      "Medycyna estetyczna w Toruniu — Klinika Aurelia przy ul. Mostowej. Konsultacja lekarska, certyfikowane preparaty, naturalne efekty. Umów wizytę.",
    h1: "Medycyna estetyczna Toruń — Klinika Aurelia",
    lead: "Klinika Aurelia działa w samym sercu Torunia od 12 lat — przy ul. Mostowej, kilka minut spacerem od Starówki. To tu wykonaliśmy ponad 9000 zabiegów i zbudowaliśmy zespół lekarzy, do którego pacjentki wracają rok po roku.",
    treatmentsIntro:
      "Torunianki najczęściej zaczynają od jednego z trzech zabiegów flagowych — dobieramy go wspólnie podczas konsultacji lekarskiej.",
    mapCaption: "Klinika w centrum Torunia",
    whyHeading: "Dlaczego Torunianki wybierają Aurelię",
    whyPoints: [
      {
        title: "Lekarska konsultacja",
        description: "Kwalifikuje wyłącznie lekarz medycyny estetycznej — widzisz dokładnie, na co się decydujesz, zanim padnie decyzja o zabiegu.",
      },
      {
        title: "Certyfikowane preparaty",
        description: "Pracujemy wyłącznie na oryginalnych produktach z udokumentowanym pochodzeniem, bez zamienników z niepewnego źródła.",
      },
      {
        title: "Naturalne efekty",
        description: "Metoda „less is more” — wolimy dołożyć na kolejnej wizycie, niż przesadzić na pierwszej.",
      },
    ],
    areaServed: "Toruń",
  },
  ciechocinek: {
    slug: "ciechocinek",
    cityName: "Ciechocinek",
    metaTitle: "Medycyna estetyczna Ciechocinek",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek Ciechocinka — Klinika Aurelia w Toruniu, ok. 30 minut drogi. Konsultacja lekarska, naturalne efekty. Umów wizytę.",
    h1: "Medycyna estetyczna Ciechocinek — Klinika Aurelia",
    lead: "Do Kliniki Aurelia w Toruniu dojedziesz z Ciechocinka w niecałe 30 minut. Pacjentki z uzdrowiska wybierają nas ze względu na lekarską konsultację przed każdym zabiegiem i naturalne efekty — wiele z nich łączy wizytę u nas z pobytem sanatoryjnym lub weekendowym wypadem do term.",
    treatmentsIntro:
      "Pacjentki z Ciechocinka najczęściej pytają o modelowanie ust i zabiegi odmładzające skórę po sezonie zabiegowym w uzdrowisku.",
    mapCaption: "Dojazd z Ciechocinka",
    whyHeading: "Dlaczego pacjentki z Ciechocinka wybierają Aurelię",
    whyPoints: [
      {
        title: "Lekarska konsultacja",
        description: "Zanim zaplanujemy zabieg, lekarz ocenia skórę i omawia z Tobą realistyczny efekt — bez presji czasu typowej dla wizyt „przy okazji” pobytu w uzdrowisku.",
      },
      {
        title: "Certyfikowane preparaty",
        description: "Te same oryginalne preparaty co w dużych klinikach w Warszawie czy Poznaniu — z pełną dokumentacją pochodzenia.",
      },
      {
        title: "Naturalne efekty",
        description: "Modelujemy delikatnie, żeby efekt było widać dopiero z bliska — idealnie, jeśli wracasz do Ciechocinka na kolejny turnus.",
      },
    ],
    areaServed: "Ciechocinek",
  },
  chelmza: {
    slug: "chelmza",
    cityName: "Chełmża",
    metaTitle: "Medycyna estetyczna Chełmża",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek Chełmży — Klinika Aurelia w Toruniu, ok. 20 km. Konsultacja lekarska, certyfikowane preparaty. Umów wizytę.",
    h1: "Medycyna estetyczna Chełmża — Klinika Aurelia",
    lead: "Mieszkasz w Chełmży? Klinika Aurelia jest oddalona o ok. 20 km — a różnicę w jakości zabiegu poczujesz od pierwszej wizyty. Dojazd trasą krajową zajmuje ok. 25 minut, więc konsultację i zabieg spokojnie zmieścisz w jedno przedpołudnie.",
    treatmentsIntro:
      "Z Chełmży najczęściej przyjeżdżają do nas pacjentki zainteresowane toksyną botulinową i liftingiem HIFU — oba zabiegi wykonasz w jednej wizycie z konsultacją.",
    mapCaption: "Dojazd z Chełmży",
    whyHeading: "Dlaczego pacjentki z Chełmży wybierają Aurelię",
    whyPoints: [
      {
        title: "Lekarska konsultacja",
        description: "Jedna wizyta u lekarza zamiast kilku dojazdów „na próbę” — plan zabiegowy ustalamy od razu, żeby droga do Torunia się opłacała.",
      },
      {
        title: "Certyfikowane preparaty",
        description: "Zero zamienników — każdy preparat możesz sprawdzić po numerze partii, tak jak w największych klinikach w kraju.",
      },
      {
        title: "Naturalne efekty",
        description: "Stawiamy na subtelne poprawki widoczne w lustrze, nie na social mediach — efekt ma wyglądać jak Ty, tylko wypoczęta.",
      },
    ],
    areaServed: "Chełmża",
  },
  "aleksandrow-kujawski": {
    slug: "aleksandrow-kujawski",
    cityName: "Aleksandrów Kujawski",
    metaTitle: "Medycyna estetyczna Aleksandrów Kujawski",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek Aleksandrowa Kujawskiego — Klinika Aurelia w Toruniu. Zabiegi prowadzone wyłącznie przez lekarzy. Umów wizytę.",
    h1: "Medycyna estetyczna Aleksandrów Kujawski — Klinika Aurelia",
    lead: "Z Aleksandrowa Kujawskiego do naszej kliniki to krótka trasa — drogą krajową nr 1 dojedziesz do nas w około 30 minut, bez przesiadek, jednym ciągiem. Coraz więcej pacjentek z okolicy wybiera medycynę estetyczną prowadzoną wyłącznie przez lekarzy.",
    treatmentsIntro:
      "Pacjentki z Aleksandrowa Kujawskiego najczęściej umawiają się na konsultację przed toksyną botulinową lub modelowaniem ust — obie decyzje warto skonsultować z lekarzem na miejscu.",
    mapCaption: "Dojazd z Aleksandrowa Kujawskiego",
    whyHeading: "Dlaczego pacjentki z Aleksandrowa Kujawskiego wybierają Aurelię",
    whyPoints: [
      {
        title: "Lekarska konsultacja",
        description: "Decyzję o zabiegu podejmujesz po rozmowie z lekarzem, nie po jednym spojrzeniu w cennik — dojazd do Torunia ma sens tylko wtedy, gdy wychodzisz z jasnym planem.",
      },
      {
        title: "Certyfikowane preparaty",
        description: "Każdy preparat pochodzi z legalnego, autoryzowanego kanału dystrybucji — pytaj śmiało o dokumentację podczas wizyty.",
      },
      {
        title: "Naturalne efekty",
        description: "Efekt dobieramy pod Twoją twarz, nie pod trend z Instagrama — to dlatego pacjentki wracają do nas z całej okolicy Aleksandrowa.",
      },
    ],
    areaServed: "Aleksandrów Kujawski",
  },
  "torun-podgorz": {
    slug: "torun-podgorz",
    cityName: "Toruń — Podgórz",
    metaTitle: "Medycyna estetyczna Toruń-Podgórz",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek toruńskiego Podgórza — Klinika Aurelia po drugiej stronie Wisły. Konsultacja lekarska, naturalne efekty. Umów wizytę.",
    h1: "Medycyna estetyczna Toruń-Podgórz — Klinika Aurelia",
    lead: "Mieszkasz na toruńskim Podgórzu? Od Kliniki Aurelia dzieli Cię tylko rzeka — most Piłsudskiego pokonasz samochodem w niecałe 10 minut, a pieszo bulwarem nadwiślańskim to spacer, nie wyprawa. Dla pacjentek z Podgórza to najbliższa klinika z lekarską konsultacją przed każdym zabiegiem.",
    treatmentsIntro:
      "Z Podgórza najczęściej wpadają do nas pacjentki „po drodze” — na krótką konsultację przed pracą albo w drodze na Starówkę.",
    mapCaption: "Dojazd z Podgórza",
    whyHeading: "Dlaczego pacjentki z Podgórza wybierają Aurelię",
    whyPoints: [
      {
        title: "Lekarska konsultacja",
        description: "Blisko nie znaczy „na skróty” — mimo krótkiego dojazdu każdy zabieg poprzedza taka sama rzetelna konsultacja lekarska jak u pacjentek z dalszych stron miasta.",
      },
      {
        title: "Certyfikowane preparaty",
        description: "Ta sama pełna dokumentacja pochodzenia preparatów, niezależnie od tego, czy dojeżdżasz 5 minut, czy pół godziny.",
      },
      {
        title: "Naturalne efekty",
        description: "Bliskość ułatwia wizyty kontrolne — łatwiej wpaść na korektę czy sprawdzić efekt po dwóch tygodniach.",
      },
    ],
    areaServed: "Toruń-Podgórz",
  },
};

export const cityNavLinks = Object.values(cities).map((city) => ({
  label: city.cityName,
  href: `/medycyna-estetyczna-${city.slug}`,
}));
