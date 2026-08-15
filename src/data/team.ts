export interface TeamMember {
  image: string;
  imageAlt: string;
  name: string;
  description: string;
}

export const team: TeamMember[] = [
  {
    image: "/images/zespol-aurelia.webp",
    imageAlt: "dr n. med. Aurelia Zawadzka, założycielka Kliniki Aurelia",
    name: "dr n. med. Aurelia Zawadzka",
    description:
      "Założycielka kliniki. Lekarka z 12-letnim doświadczeniem w medycynie estetycznej, szkoleniowiec technik iniekcyjnych. Prowadzi zabiegi z zakresu toksyny, wypełniaczy i stymulatorów.",
  },
  {
    image: "/images/zespol-maja.webp",
    imageAlt: "dr Maja Lewandowska, lekarka medycyny estetycznej w Klinice Aurelia",
    name: "dr Maja Lewandowska",
    description:
      "Lekarka medycyny estetycznej. Specjalizuje się w modelowaniu ust i okolicy oka. Znana z lekkiej ręki i obsesji na punkcie symetrii.",
  },
  {
    image: "/images/zespol-julia.webp",
    imageAlt: "mgr Julia Nowicka, kosmetolog kliniczny w Klinice Aurelia",
    name: "mgr Julia Nowicka",
    description:
      "Kosmetolog kliniczny. Prowadzi zabiegi HIFU, mezoterapię i terapie skóry problematycznej. Autorka protokołów pielęgnacji pozabiegowej Aurelii.",
  },
];
