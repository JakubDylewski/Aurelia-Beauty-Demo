export interface CityPageData {
  slug: string;
  cityName: string;
  /** Dopełniacz nazwy miasta (odpowiedź na "kogo? czego?") — do zdań typu "pacjentki z [Miasto]" / "od [Miasto]". */
  cityNameGenitive: string;
  /** Dystans od kliniki w Toruniu, do wyświetlenia (np. "~20 km" lub "miasto kliniki"). */
  distance: string;
  /** Orientacyjny czas dojazdu — używany też w obowiązkowym zdaniu o lokalizacji kliniki. */
  travelTime: string;
  /** Trasa/droga dojazdu, do zdania przy mapie. */
  route: string;
  /** Unikalny lead, 2–3 zdania — różny dla każdego miasta (wymóg SEO, nie duplikować). */
  lead: string;
  metaTitle: string;
  /** Unikalny meta description, do 155 znaków, z frazą lokalną. */
  metaDescription: string;
  areaServed: string;
}

export const cities: Record<string, CityPageData> = {
  torun: {
    slug: "torun",
    cityName: "Toruń",
    cityNameGenitive: "Torunia",
    distance: "miasto kliniki",
    travelTime: "kilkanaście minut, zależnie od dzielnicy",
    route: "w obrębie miasta",
    lead: "Klinika Aurelia działa w samym sercu Torunia od 12 lat — przy ul. Mostowej, kilka minut spacerem od Starówki. Niezależnie od tego, w której części miasta mieszkasz, dojazd do nas zajmuje zwykle kilkanaście minut.",
    metaTitle: "Medycyna estetyczna Toruń | Klinika Aurelia",
    metaDescription:
      "Medycyna estetyczna w Toruniu — Klinika Aurelia przy ul. Mostowej. Konsultacja lekarska, certyfikowane preparaty, naturalne efekty. Umów wizytę.",
    areaServed: "Toruń",
  },
  "torun-podgorz": {
    slug: "torun-podgorz",
    cityName: "Toruń – Podgórz",
    cityNameGenitive: "Podgórza",
    distance: "dzielnica",
    travelTime: "ok. 10 minut",
    route: "mostem Piłsudskiego",
    lead: "Mieszkasz na toruńskim Podgórzu? Od kliniki dzieli Cię tylko rzeka — most Piłsudskiego pokonasz samochodem w niecałe 10 minut, a pieszo bulwarem nadwiślańskim to spacer, nie wyprawa.",
    metaTitle: "Medycyna estetyczna Toruń-Podgórz | Klinika Aurelia",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek toruńskiego Podgórza. Klinika Aurelia po drugiej stronie Wisły, dojazd ok. 10 minut. Konsultacja lekarska.",
    areaServed: "Toruń-Podgórz",
  },
  "torun-rubinkowo": {
    slug: "torun-rubinkowo",
    cityName: "Toruń – Rubinkowo",
    cityNameGenitive: "Rubinkowa",
    distance: "dzielnica",
    travelTime: "ok. 15 minut",
    route: "komunikacją miejską lub samochodem przez centrum",
    lead: "Z Rubinkowa do naszej kliniki dojedziesz autobusem lub samochodem w około 15 minut — bez przesiadek, jednym kursem przez centrum. To wygodny dojazd zarówno na konsultację, jak i na wizytę kontrolną.",
    metaTitle: "Medycyna estetyczna Toruń-Rubinkowo | Klinika Aurelia",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek Rubinkowa — Klinika Aurelia w centrum Torunia, ok. 15 minut komunikacją miejską. Konsultacja lekarska.",
    areaServed: "Toruń-Rubinkowo",
  },
  lubicz: {
    slug: "lubicz",
    cityName: "Lubicz",
    cityNameGenitive: "Lubicza",
    distance: "~12 km",
    travelTime: "ok. 15 minut",
    route: "drogą krajową nr 10",
    lead: "Lubicz to praktycznie przedmieścia Torunia — drogą krajową nr 10 dojedziesz do nas w kwadrans, bez korków typowych dla centrum miasta. Coraz więcej pacjentek z gminy Lubicz umawia u nas pierwszą konsultację właśnie ze względu na tak krótki dojazd.",
    metaTitle: "Medycyna estetyczna Lubicz | Klinika Aurelia",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek Lubicza — Klinika Aurelia w Toruniu, ok. 15 minut drogą krajową nr 10. Konsultacja lekarska. Umów wizytę.",
    areaServed: "Lubicz",
  },
  lysomice: {
    slug: "lysomice",
    cityName: "Łysomice",
    cityNameGenitive: "Łysomic",
    distance: "~12 km",
    travelTime: "ok. 15 minut",
    route: "drogą wojewódzką nr 552",
    lead: "Z Łysomic do Torunia jedzie się szybciej, niż wielu osobom się wydaje — drogą wojewódzką nr 552 dojazd zajmuje około 15 minut. Pacjentki z gminy Łysomice najczęściej łączą wizytę u nas z innymi sprawami załatwianymi w mieście.",
    metaTitle: "Medycyna estetyczna Łysomice | Klinika Aurelia",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek Łysomic — Klinika Aurelia w Toruniu, ok. 15 minut drogą wojewódzką nr 552. Konsultacja lekarska.",
    areaServed: "Łysomice",
  },
  chelmza: {
    slug: "chelmza",
    cityName: "Chełmża",
    cityNameGenitive: "Chełmży",
    distance: "~20 km",
    travelTime: "ok. 25 minut",
    route: "drogą krajową nr 91",
    lead: "Mieszkasz w Chełmży? Klinika Aurelia jest oddalona o ok. 20 km, a dojazd drogą krajową nr 91 zajmuje około 25 minut — konsultację i zabieg spokojnie zmieścisz w jedno przedpołudnie.",
    metaTitle: "Medycyna estetyczna Chełmża | Klinika Aurelia",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek Chełmży — Klinika Aurelia w Toruniu, ok. 20 km. Konsultacja lekarska, certyfikowane preparaty. Umów wizytę.",
    areaServed: "Chełmża",
  },
  ciechocinek: {
    slug: "ciechocinek",
    cityName: "Ciechocinek",
    cityNameGenitive: "Ciechocinka",
    distance: "~25 km",
    travelTime: "ok. 30 minut",
    route: "drogą wojewódzką nr 91",
    lead: "Do Kliniki Aurelia w Toruniu dojedziesz z Ciechocinka w niecałe 30 minut. Pacjentki z uzdrowiska często łączą wizytę u nas z pobytem sanatoryjnym lub weekendowym wypadem do term.",
    metaTitle: "Medycyna estetyczna Ciechocinek | Klinika Aurelia",
    metaDescription:
      "Medycyna estetyczna dla kuracjuszek z Ciechocinka — Klinika Aurelia w Toruniu, ok. 30 minut drogi. Konsultacja lekarska, naturalne efekty.",
    areaServed: "Ciechocinek",
  },
  "aleksandrow-kujawski": {
    slug: "aleksandrow-kujawski",
    cityName: "Aleksandrów Kujawski",
    cityNameGenitive: "Aleksandrowa Kujawskiego",
    distance: "~25 km",
    travelTime: "ok. 30 minut",
    route: "drogą krajową nr 1",
    lead: "Z Aleksandrowa Kujawskiego do naszej kliniki to krótka trasa — drogą krajową nr 1 dojedziesz do nas w około 30 minut, jednym ciągiem, bez przesiadek. Coraz więcej pacjentek z okolicy wybiera medycynę estetyczną prowadzoną wyłącznie przez lekarzy.",
    metaTitle: "Medycyna estetyczna Aleksandrów Kujawski | Klinika Aurelia",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek Aleksandrowa Kujawskiego — Klinika Aurelia w Toruniu, ok. 30 minut drogą krajową nr 1. Umów wizytę.",
    areaServed: "Aleksandrów Kujawski",
  },
  "kowalewo-pomorskie": {
    slug: "kowalewo-pomorskie",
    cityName: "Kowalewo Pomorskie",
    cityNameGenitive: "Kowalewa Pomorskiego",
    distance: "~30 km",
    travelTime: "ok. 35 minut",
    route: "drogą krajową nr 15",
    lead: "Z Kowalewa Pomorskiego do Torunia jedzie się drogą krajową nr 15 — dojazd zajmuje około 35 minut. To wystarczająco blisko, żeby konsultację i zabieg zmieścić w jednym wolnym przedpołudniu.",
    metaTitle: "Medycyna estetyczna Kowalewo Pomorskie | Klinika Aurelia",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek Kowalewa Pomorskiego — Klinika Aurelia w Toruniu, ok. 35 minut drogą krajową nr 15. Konsultacja lekarska.",
    areaServed: "Kowalewo Pomorskie",
  },
  chelmno: {
    slug: "chelmno",
    cityName: "Chełmno",
    cityNameGenitive: "Chełmna",
    distance: "~40 km",
    travelTime: "ok. 45 minut",
    route: "drogą wojewódzką nr 546",
    lead: "Chełmno dzieli od Torunia ok. 40 km, czyli niecałe 45 minut jazdy drogą wojewódzką nr 546. Pacjentki z Chełmna najczęściej planują wizytę z wyprzedzeniem i łączą ją z innymi sprawami w Toruniu.",
    metaTitle: "Medycyna estetyczna Chełmno | Klinika Aurelia",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek Chełmna — Klinika Aurelia w Toruniu, ok. 45 minut drogą wojewódzką nr 546. Konsultacja lekarska.",
    areaServed: "Chełmno",
  },
  "golub-dobrzyn": {
    slug: "golub-dobrzyn",
    cityName: "Golub-Dobrzyń",
    cityNameGenitive: "Golubia-Dobrzynia",
    distance: "~40 km",
    travelTime: "ok. 45 minut",
    route: "drogą krajową nr 15",
    lead: "Z Golubia-Dobrzynia do Torunia dojedziesz drogą krajową nr 15 w około 45 minut. To wystarczająco blisko, by zaplanować jedną wizytę obejmującą i konsultację, i zabieg.",
    metaTitle: "Medycyna estetyczna Golub-Dobrzyń | Klinika Aurelia",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek Golubia-Dobrzynia — Klinika Aurelia w Toruniu, ok. 45 minut drogą krajową nr 15. Konsultacja lekarska.",
    areaServed: "Golub-Dobrzyń",
  },
  inowroclaw: {
    slug: "inowroclaw",
    cityName: "Inowrocław",
    cityNameGenitive: "Inowrocławia",
    distance: "~40 km",
    travelTime: "ok. 40 minut",
    route: "drogą ekspresową S10",
    lead: "Z Inowrocławia do Torunia jedzie się wygodnie drogą ekspresową S10 — dojazd zajmuje około 40 minut. Pacjentki z Inowrocławia coraz częściej wybierają kameralną klinikę zamiast wizyty w placówce sieciowej.",
    metaTitle: "Medycyna estetyczna Inowrocław | Klinika Aurelia",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek Inowrocławia — Klinika Aurelia w Toruniu, ok. 40 minut drogą ekspresową S10. Konsultacja lekarska.",
    areaServed: "Inowrocław",
  },
  wabrzezno: {
    slug: "wabrzezno",
    cityName: "Wąbrzeźno",
    cityNameGenitive: "Wąbrzeźna",
    distance: "~45 km",
    travelTime: "ok. 50 minut",
    route: "drogą krajową nr 15",
    lead: "Z Wąbrzeźna do naszej kliniki dojedziesz drogą krajową nr 15 w około 50 minut. Warto zaplanować wizytę na spokojnie — konsultację i zabieg da się zmieścić w jednym wyjeździe do Torunia.",
    metaTitle: "Medycyna estetyczna Wąbrzeźno | Klinika Aurelia",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek Wąbrzeźna — Klinika Aurelia w Toruniu, ok. 50 minut drogą krajową nr 15. Konsultacja lekarska. Umów wizytę.",
    areaServed: "Wąbrzeźno",
  },
  bydgoszcz: {
    slug: "bydgoszcz",
    cityName: "Bydgoszcz",
    cityNameGenitive: "Bydgoszczy",
    distance: "~50 km",
    travelTime: "ok. 40 minut",
    route: "drogą ekspresową S10",
    lead: "Mieszkasz w Bydgoszczy i szukasz kliniki mniejszej niż sieciowe gabinety w Twoim mieście? Do Torunia dojedziesz drogą ekspresową S10 w około 40 minut — część pacjentek z Bydgoszczy wybiera właśnie taki, kameralny model opieki.",
    metaTitle: "Medycyna estetyczna Bydgoszcz | Klinika Aurelia",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek Bydgoszczy — Klinika Aurelia w Toruniu, ok. 40 minut drogą ekspresową S10. Kameralna klinika, konsultacja lekarska.",
    areaServed: "Bydgoszcz",
  },
  wloclawek: {
    slug: "wloclawek",
    cityName: "Włocławek",
    cityNameGenitive: "Włocławka",
    distance: "~55 km",
    travelTime: "ok. 45 minut",
    route: "autostradą A1",
    lead: "Z Włocławka do Torunia dojedziesz autostradą A1 w około 45 minut — to szybsza trasa, niż mogłoby się wydawać przy tej odległości. Pacjentki z Włocławka najczęściej umawiają konsultację na sobotni poranek, łącząc dojazd z innymi sprawami w mieście.",
    metaTitle: "Medycyna estetyczna Włocławek | Klinika Aurelia",
    metaDescription:
      "Medycyna estetyczna dla mieszkanek Włocławka — Klinika Aurelia w Toruniu, ok. 45 minut autostradą A1. Konsultacja lekarska, naturalne efekty.",
    areaServed: "Włocławek",
  },
};

export const cityNavLinks = Object.values(cities).map((city) => ({
  label: city.cityName,
  href: `/medycyna-estetyczna-${city.slug}`,
}));
