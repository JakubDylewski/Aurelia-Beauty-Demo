# KLINIKA AURELIA — SPECYFIKACJA DEMO
### Flagowe demo Connectiva: strona-produkt dla kliniki medycyny estetycznej (pakiet SYSTEM, 8–10 tys. zł)

> **Czym jest ten plik:** kompletna specyfikacja strony demo. Wrzucasz go do katalogu projektu i każesz Claude Code budować etapami (instrukcja w sekcji 0). Wszystkie teksty są gotowe — Claude Code ma je wklejać, nie wymyślać.

---

## 0. JAK UŻYWAĆ TEGO PLIKU Z CLAUDE CODE

1. Utwórz pusty katalog projektu, np. `aurelia-demo`, otwórz go w VS Code.
2. Wrzuć ten plik do katalogu głównego jako `AURELIA-DEMO-SPEC.md`.
3. Uruchom Claude Code i wklej **prompt startowy**:

```
Przeczytaj w całości plik AURELIA-DEMO-SPEC.md. To specyfikacja strony demo,
którą budujemy. Buduj ją ETAPAMI opisanymi w sekcji 13 — zawsze tylko jeden
etap naraz. Zacznij od ETAPU 1. Po ukończeniu etapu: uruchom `npm run build`,
napraw ewentualne błędy, podsumuj co zrobiłeś i STOP — czekaj na moje "dalej".
Trzymaj się specyfikacji co do joty: kolory, fonty, teksty i nazwy plików
graficznych są zdefiniowane i nie wolno ich zmieniać ani parafrazować.
```

4. Po każdym etapie: obejrzyj efekt w przeglądarce (`npm run dev`), zgłoś poprawki, potem napisz „dalej — etap N+1".
5. Grafiki: buduj od razu z placeholderami (sekcja 12 definiuje dokładne nazwy plików). Wygenerowane w Higgsfield obrazy wrzucasz do `public/images/` pod tymi nazwami — podmienią się same.

---

## 1. FUNDAMENT TECHNICZNY

- **Stack:** Astro 5 + Tailwind CSS 4 (przez `@tailwindcss/vite`). Bez Reacta — interaktywność w waniliowym JS w tagach `<script>` (mniej zależności, szybsza strona).
- **Fonty:** przez `@fontsource` (self-hosted, szybciej niż Google Fonts CDN): `@fontsource/cormorant-garamond` (300, 400, 500 + italic 400) i `@fontsource/instrument-sans` (400, 500, 600).
- **Obrazy:** komponent `<Image>` z `astro:assets`, format webp, lazy loading (poza hero).
- **Deploy:** Cloudflare Pages, projekt `aurelia-demo`, build `npm run build`, katalog `dist`. (Jakub zna ten proces — bez zmian.)

**Struktura katalogów:**

```
src/
  layouts/Base.astro
  components/
    Header.astro, Footer.astro, Button.astro, SectionHeading.astro,
    GoldArc.astro, ProblemExplorer.astro, TreatmentCard.astro,
    BeforeAfter.astro, Testimonials.astro, TeamCard.astro,
    FaqAccordion.astro, ContactForm.astro, CookieBanner.astro,
    QuickFacts.astro
  data/treatments.ts        ← wszystkie dane zabiegów i mapowanie problemów
  pages/
    index.astro
    zabiegi/modelowanie-ust.astro
    zabiegi/toksyna-botulinowa.astro
    zabiegi/lifting-hifu.astro
    cennik.astro
    o-nas.astro
    kontakt.astro
    polityka-prywatnosci.astro
    404.astro
  styles/global.css
public/images/              ← grafiki wg sekcji 12
public/favicon.svg
```

---

## 2. SYSTEM MARKI I DESIGNU

**Klinika (fikcyjna):** Klinika Aurelia — medycyna estetyczna, Toruń.
**Nastrój:** jasno, powietrznie, medycznie czysto, ale ciepło. Żadnego „luksusu na siłę" — spokój i precyzja. Strona ma wyglądać jak wnętrze dobrej kliniki: dużo bieli, światła i jeden szlachetny akcent.

### 2.1 Paleta (CSS custom properties w global.css)

| Token | Hex | Rola |
|---|---|---|
| `--white` | `#FFFFFF` | tło główne |
| `--ivory` | `#FAF7F3` | tło sekcji naprzemiennych |
| `--porcelain` | `#F4E8E4` | pastel: tła kart, tinty, hover |
| `--gold` | `#B08D57` | akcent: linie, detale, focus, hover linków |
| `--gold-soft` | `#D8C39A` | jaśniejszy wariant złota (łuki, obramowania) |
| `--ink` | `#221E1A` | tekst główny (ciepła czerń) |
| `--ink-soft` | `#6E6660` | tekst drugorzędny |

**Zasady użycia:** złoto NIGDY jako tło i NIGDY jako kolor tekstu akapitów — tylko linie (1px), drobne detale, ikony, focus ring, podkreślenia. Przyciski główne: `--ink` z białym tekstem. Pastel `--porcelain` oszczędnie — pojedyncze tła kart i sekcji, nie „różowa strona".

### 2.2 Typografia

- **Display (nagłówki H1–H2):** Cormorant Garamond, waga 300–400, `letter-spacing: -0.01em`, `line-height: 1.1`. H1: `clamp(2.6rem, 6vw, 4.5rem)`. Kluczowe słowo w H1 może być kursywą (400 italic) — to element charakteru.
- **Body/UI:** Instrument Sans 400/500, `line-height: 1.65`, rozmiar bazowy 17px.
- **Etykiety (overline):** Instrument Sans 600, uppercase, 12px, `letter-spacing: 0.14em`, kolor `--gold`.

### 2.3 Element podpisu marki: „złoty łuk"

Nawiązanie do nazwy (Aurelia → aureola): **cienki złoty łuk** — fragment okręgu, 1px, kolor `--gold-soft`. Komponent `GoldArc.astro` (inline SVG). Pojawia się konsekwentnie w kilku miejscach i NIGDZIE indziej:
1. za tekstem hero (duży, subtelny, częściowo poza kadrem),
2. jako marker sekcji obok overline (mały łuk ~24px zamiast kropki/kreski),
3. jako uchwyt suwaka przed/po (złote kółko z łukiem),
4. w logo: wordmark `AURELIA` (Cormorant, 500, letter-spacing 0.18em) z małym łukiem nad literą „U". Pod spodem dopisek `MEDYCYNA ESTETYCZNA · TORUŃ` (etykieta 9px). Logo tekstowe w kodzie — bez pliku graficznego. Favicon: `favicon.svg` = sam złoty łuk na białym tle.

### 2.4 Animacje (dyscyplina, medyczna elegancja)

- **Scroll reveal:** klasa `.reveal` — fade + translateY(16px), 500ms ease-out, IntersectionObserver (threshold 0.15), animacja tylko raz.
- **Hero load:** sekwencja overline → H1 → sub → CTA, stagger 120ms.
- **Header:** przezroczysty na starcie → po 24px scrolla białe tło + delikatny cień, przejście 300ms.
- **Karty:** hover `translateY(-4px)` + cień, 300ms.
- **Akordeon FAQ:** płynne rozwijanie (trik `grid-template-rows: 0fr → 1fr`).
- **Suwak przed/po:** drag myszą i dotykiem + obsługa strzałek z klawiatury.
- **`prefers-reduced-motion: reduce`** — wszystkie animacje wyłączone. Obowiązkowo.
- Zakaz: parallax, bounce, animowane gradienty, liczniki odliczające. Nic, co „krzyczy".

---

## 3. MAPA STRON

| Strona | Ścieżka | Cel |
|---|---|---|
| Główna | `/` | pierwsze wrażenie + nawigacja problemowa + dowody |
| Zabieg: usta | `/zabiegi/modelowanie-ust` | landing sprzedażowy |
| Zabieg: botoks | `/zabiegi/toksyna-botulinowa` | landing sprzedażowy |
| Zabieg: HIFU | `/zabiegi/lifting-hifu` | landing sprzedażowy |
| Cennik | `/cennik` | przejrzystość, zero „cena u konsultanta" |
| O nas | `/o-nas` | zaufanie: ludzie i standardy |
| Kontakt | `/kontakt` | konwersja: formularz + dane |
| Polityka prywatności | `/polityka-prywatnosci` | zgodność |
| 404 | `/404` | elegancki powrót |

**Header (sticky):** logo | Zabiegi (dropdown: 3 zabiegi + „Pełny cennik") · Metamorfozy (kotwica `/#metamorfozy`) · O nas · Cennik · Kontakt | przycisk `Umów wizytę` → `/kontakt`. Na mobile: hamburger, pełnoekranowe menu, CTA na dole.

**Footer:** 4 kolumny — (1) logo + 1 zdanie misji, (2) Zabiegi, (3) Kontakt: adres, telefon (klikalny `tel:`), e-mail, godziny, (4) Instagram/Facebook (linki `#`). Pod spodem: © 2026 Klinika Aurelia · Polityka prywatności · dopisek: `Strona ma charakter informacyjny i nie stanowi oferty w rozumieniu przepisów prawa.`

---

## 4. STRONA GŁÓWNA — SEKCJA PO SEKCJI (pełne teksty)

### 4.1 HERO
Układ: tekst po lewej (55%), zdjęcie `hero-main.webp` po prawej, sięga krawędzi. Za tekstem duży złoty łuk. Poniżej hero pasek zaufania.

- Overline: `KLINIKA MEDYCYNY ESTETYCZNEJ · TORUŃ`
- H1: `Naturalne piękno.` (nowa linia) `Medyczna *precyzja*.` (słowo „precyzja" kursywą)
- Sub: `Zabiegi dobieramy indywidualnie — tak, by podkreślić to, co w Tobie najpiękniejsze. Bez przesady, bez szablonu, ze spokojem, na jaki zasługujesz.`
- CTA główne: `Umów konsultację` → `/kontakt` · CTA drugie (ghost): `Poznaj zabiegi` → scroll do eksploratora.

**Pasek zaufania** (4 pozycje, cienkie złote separatory):
`12 lat doświadczenia` · `9 000+ wykonanych zabiegów` · `4,9/5 — 214 opinii Google` · `Certyfikowani lekarze medycyny estetycznej`

### 4.2 EKSPLORATOR „OD CZEGO CHCESZ ZACZĄĆ?" — killer feature
To jest element, którym demo wygrywa spotkania. Nie „pigułki z ikonkami", tylko **wybór typograficzny**: problemy jako duże pozycje w Cormorant (rozmiar H3), ułożone w dwóch kolumnach. Aktywna pozycja: kursywa + złote podkreślenie 1px. Po kliknięciu z prawej (desktop) / poniżej (mobile) wjeżdżają crossfadem karty dopasowanych zabiegów.

- Overline: `ZACZNIJ OD SIEBIE` · H2: `Od czego chcesz zacząć?`
- Sub: `Wybierz to, co Ci doskwiera — pokażemy zabiegi, które naprawdę na to działają.`

**Dane (w `treatments.ts`):**

| Problem | Zabiegi (karty) |
|---|---|
| Zmarszczki mimiczne | Toksyna botulinowa → strona; Mezoterapia igłowa → `/cennik` |
| Opadający owal twarzy | Lifting HIFU → strona; Stymulatory tkankowe → `/cennik` |
| Zbyt wąskie lub asymetryczne usta | Modelowanie ust → strona; Nawilżająca mezoterapia ust → `/cennik` |
| Zmęczona, odwodniona skóra | Mezoterapia igłowa → `/cennik`; Lifting HIFU → strona |
| Cienie i doliny łez | Wypełnienie doliny łez → `/cennik`; Mezoterapia → `/cennik` |
| Przebarwienia | Peeling medyczny → `/cennik`; Mezoterapia → `/cennik` |

**Karta zabiegu:** zdjęcie (16:10), nazwa, 1 zdanie opisu, `od X zł`, link `Zobacz zabieg →` lub `Sprawdź w cenniku →`. Opisy 1-zdaniowe:
- Toksyna botulinowa: `Wygładza zmarszczki mimiczne czoła i okolic oczu, zachowując naturalną mimikę.`
- Lifting HIFU: `Ujędrnia i unosi owal twarzy skoncentrowanymi ultradźwiękami — bez skalpela.`
- Modelowanie ust: `Przywraca ustom kształt, symetrię i nawilżenie w naturalnych proporcjach.`
- Mezoterapia igłowa: `Głęboko odżywia i nawilża skórę, przywracając jej blask.`
- Stymulatory tkankowe: `Pobudzają skórę do odbudowy kolagenu na długie miesiące.`
- Wypełnienie doliny łez: `Rozświetla spojrzenie, redukując cienie i zapadnięcia pod oczami.`
- Peeling medyczny: `Wyrównuje koloryt i redukuje przebarwienia pod kontrolą lekarza.`
- Nawilżająca mezoterapia ust: `Miękkie, nawilżone usta bez zmiany ich objętości.`

### 4.3 ZABIEGI FLAGOWE
Overline: `NASZE SPECJALIZACJE` · H2: `Zabiegi, z których jesteśmy znani`
3 duże karty (zdjęcia `zabieg-usta.webp`, `zabieg-botoks.webp`, `zabieg-hifu.webp`) → linki do podstron. Pod kartami link: `Zobacz pełny cennik zabiegów →`

### 4.4 METAMORFOZY (kotwica `#metamorfozy`)
Overline: `EFEKTY` · H2: `Zobacz zmianę na własne oczy`
3 suwaki przed/po (komponent `BeforeAfter`): usta, czoło, owal. Etykiety `PRZED` / `PO` w rogach. Pod sekcją obowiązkowa adnotacja (13px, `--ink-soft`):
`Zdjęcia opublikowane za zgodą pacjentek. Efekt zabiegu jest zawsze kwestią indywidualną i może się różnić.`

### 4.5 O KLINICE (skrót)
Układ 50/50: zdjęcie `wnetrze-recepcja.webp` | tekst.
- Overline: `POZNAJMY SIĘ` · H2: `Miejsce, w którym możesz odetchnąć`
- Tekst: `Klinika Aurelia powstała z przekonania, że medycyna estetyczna to przede wszystkim medycyna. U nas każdy zabieg poprzedza rzetelna konsultacja lekarska, pracujemy wyłącznie na oryginalnych, certyfikowanych preparatach, a plan zabiegowy układamy pod Ciebie — nie pod promocję miesiąca.`
- Cytat założycielki (kursywa, złoty łuk obok): `„Najlepszy komplement, jaki możemy usłyszeć? »Nikt nie widzi, że coś robiłam — wszyscy mówią, że świetnie wyglądam.«"` — `dr n. med. Aurelia Zawadzka, założycielka`
- Link: `Poznaj nasz zespół →` → `/o-nas`

### 4.6 OPINIE
Overline: `ZAUFANIE` · H2: `Pacjentki mówią same`
6 opinii w siatce 3×2 (mobile: karuzela przewijana palcem). Gwiazdki złote, imię + inicjał, źródło `opinia Google`.
1. `Pierwszy raz trafiłam do miejsca, gdzie lekarka odradziła mi część zabiegów, które chciałam zrobić. Zaufanie od pierwszej wizyty.` — Karolina M.
2. `Usta wyglądają tak naturalnie, że mama zauważyła dopiero po dwóch tygodniach. Dokładnie o to mi chodziło.` — Magdalena W.
3. `Zero taśmy produkcyjnej. Konsultacja trwała pół godziny, wszystko wytłumaczone, łącznie z tym, czego się NIE opłaca robić.` — Joanna K.
4. `Botoks robiony trzeci raz, pierwszy raz bez efektu maski. Mimika została, zmarszczki nie.` — Anna P.
5. `Przepiękne, spokojne wnętrze i pełen profesjonalizm. Czułam się zaopiekowana od wejścia do wyjścia.` — Natalia S.
6. `HIFU po czterdziestce — owal wrócił na miejsce. Efekt narastał przez trzy miesiące, dziś nie poznaję zdjęć sprzed roku.` — Beata R.

### 4.7 CTA KOŃCOWE
Tło `--ivory`, wyśrodkowane, złoty łuk nad nagłówkiem.
- H2: `Zacznij od rozmowy`
- Tekst: `Konsultacja lekarska kosztuje 150 zł i jest w całości odliczana od ceny zabiegu. Bez zobowiązań — czasem najlepszą rekomendacją jest „jeszcze nie teraz".`
- CTA: `Umów konsultację` → `/kontakt` · obok klikalny telefon: `lub zadzwoń: 512 340 218`

---

## 5. STRONY ZABIEGÓW — SZABLON + PEŁNE TEKSTY

**Szablon (wspólny układ):** breadcrumb (`Strona główna / Zabiegi / [nazwa]`) → H1 + lead → pasek QuickFacts (6 faktów w linii, złote separatory) → `Na czym polega` → `Dla kogo` (lista wskazań) → `Przebieg zabiegu` (kroki 01–04, numeracja uzasadniona: to realna sekwencja) → `Efekty` (suwak przed/po + adnotacja jak w 4.4) → `Cennik` (mini-tabela) → `Pytania i odpowiedzi` (FAQ akordeon, 5 pytań) → CTA końcowe jak 4.7.

**Zasady języka (warstwa prawna — stosować na całej stronie):** zero „gwarantujemy", „najlepszy w mieście", „bezpieczny w 100%". Ton informacyjny. Efekty zawsze z zastrzeżeniem indywidualnym. Przy przeciwwskazaniach dopisek: `Pełną listę przeciwwskazań omawiamy podczas konsultacji lekarskiej.`

---

### 5.1 `/zabiegi/modelowanie-ust` — Modelowanie i powiększanie ust

- **H1:** `Modelowanie ust kwasem hialuronowym`
- **Lead:** `Usta, które wyglądają jak Twoje — tylko w najlepszej wersji. Modelujemy kształt, przywracamy symetrię i nawilżenie, pracując na certyfikowanych kwasach hialuronowych najnowszej generacji.`
- **QuickFacts:** Czas zabiegu: `30–45 min` · Znieczulenie: `krem znieczulający` · Powrót do aktywności: `od razu` · Pierwsze efekty: `natychmiast` · Pełny efekt: `po ok. 2 tyg.` · Cena: `od 1 100 zł`
- **Na czym polega:** `Kwas hialuronowy to substancja naturalnie występująca w skórze — odpowiada za jej nawilżenie i objętość. Podczas zabiegu lekarz podaje preparat cienką igłą lub kaniulą w precyzyjnie wybrane punkty ust, odbudowując ich kontur, proporcje i jędrność. W Aurelii pracujemy techniką „less is more": lepiej dołożyć na kolejnej wizycie, niż przesadzić na pierwszej.`
- **Dla kogo (wskazania):** wąskie lub nieproporcjonalne usta · asymetria warg · opadające kąciki · utrata objętości z wiekiem · suche, pomarszczone usta · nieudany efekt z innego gabinetu (korekta)
- **Przebieg:** 01 `Konsultacja i plan` — analiza proporcji twarzy, wspólne ustalenie efektu, omówienie przeciwwskazań. 02 `Znieczulenie` — krem znieczulający działa ok. 20 minut; zabieg jest komfortowy. 03 `Podanie preparatu` — lekarz modeluje usta punkt po punkcie, na bieżąco pokazując efekt w lustrze. 04 `Zalecenia` — otrzymujesz pisemne zalecenia pozabiegowe i kontakt do lekarza na wypadek pytań.
- **Cennik (mini):** Modelowanie ust 0,5 ml — `900 zł` · Modelowanie ust 1 ml — `1 100 zł` · Korekta ust po innym gabinecie (z hialuronidazą) — `od 1 300 zł` · Nawilżająca mezoterapia ust — `600 zł`
- **FAQ:**
  1. `Czy zabieg boli?` — `Dzięki kremowi znieczulającemu i preparatom z lidokainą większość pacjentek opisuje zabieg jako niemal bezbolesny — odczuwalny jest raczej ucisk niż ból.`
  2. `Jak długo utrzymuje się efekt?` — `Zwykle 8–12 miesięcy, zależnie od preparatu, metabolizmu i stylu życia. Kwas hialuronowy jest stopniowo i naturalnie rozkładany przez organizm.`
  3. `Czy usta będą wyglądać sztucznie?` — `Nie, jeśli zachowane są proporcje. Modelujemy usta w zgodzie z anatomią Twojej twarzy i zawsze możesz zobaczyć plan przed podaniem preparatu. Efekt „dorobionych ust" to wynik przesady, nie samego zabiegu.`
  4. `Jak wygląda powrót do codzienności?` — `Możesz wrócić do pracy od razu. Przez 1–3 dni może utrzymywać się obrzęk lub drobne siniaki — łatwe do zamaskowania. Przez dobę unikaj sauny, intensywnego wysiłku i alkoholu.`
  5. `Czy są przeciwwskazania?` — `Tak, m.in. ciąża i karmienie, aktywna opryszczka, choroby autoimmunologiczne w fazie aktywnej, terapia antykoagulantami. Pełną listę omawiamy podczas konsultacji lekarskiej.`

### 5.2 `/zabiegi/toksyna-botulinowa` — Toksyna botulinowa

- **H1:** `Toksyna botulinowa — wygładzenie zmarszczek mimicznych`
- **Lead:** `Lwia zmarszczka, poprzeczne linie czoła, kurze łapki — to ślady mimiki, nie wieku. Toksyna botulinowa rozluźnia wybrane mięśnie, wygładzając skórę i zachowując naturalny wyraz twarzy.`
- **QuickFacts:** Czas zabiegu: `15–20 min` · Znieczulenie: `niewymagane` · Powrót do aktywności: `od razu` · Pierwsze efekty: `po 3–5 dniach` · Pełny efekt: `po 2 tyg.` · Cena: `od 600 zł`
- **Na czym polega:** `Preparat toksyny botulinowej podawany jest cienką igłą w ściśle wybrane mięśnie mimiczne, czasowo ograniczając ich nadmierną aktywność. Skóra nad rozluźnionym mięśniem wygładza się, a nowe zmarszczki nie pogłębiają. Kluczem jest dawka i precyzja — dlatego w Aurelii zabieg wykonuje wyłącznie lekarz, po analizie Twojej mimiki w ruchu.`
- **Dla kogo:** zmarszczki poziome czoła · lwia zmarszczka (między brwiami) · kurze łapki · profilaktyka pogłębiania zmarszczek · bruksizm i napięciowe bóle głowy (wskazanie omawiane na konsultacji)
- **Przebieg:** 01 `Analiza mimiki` — lekarz ogląda twarz w ruchu i statyce, zaznacza punkty podania. 02 `Podanie preparatu` — kilka–kilkanaście mikroiniekcji; całość trwa kwadrans. 03 `Obserwacja` — pierwsze efekty po 3–5 dniach, pełne po dwóch tygodniach. 04 `Wizyta kontrolna` — po 14 dniach bezpłatna korekta dawki, jeśli potrzebna.
- **Cennik (mini):** 1 okolica — `600 zł` · 2 okolice — `1 000 zł` · 3 okolice — `1 400 zł` · Bruksizm — `od 1 200 zł`
- **FAQ:**
  1. `Czy będę mieć „zamrożoną" twarz?` — `Nie — to efekt zbyt dużych dawek. Pracujemy metodą „baby botox tam, gdzie trzeba": mimika zostaje, wygładzają się zmarszczki. Po dwóch tygodniach masz bezpłatną wizytę kontrolną do ewentualnej korekty.`
  2. `Jak długo działa toksyna?` — `Zwykle 4–6 miesięcy. Przy regularnym powtarzaniu zabiegu mięśnie „uczą się" mniejszej aktywności i efekty bywają trwalsze.`
  3. `Czy zabieg jest bolesny?` — `Igły są bardzo cienkie, a podanie trwa sekundy — większość pacjentek porównuje to do delikatnego ukłucia. Znieczulenie nie jest potrzebne.`
  4. `Kiedy nie można wykonać zabiegu?` — `M.in. w ciąży i podczas karmienia, przy chorobach nerwowo-mięśniowych, aktywnej infekcji, antybiotykoterapii aminoglikozydami. Pełną listę przeciwwskazań omawiamy podczas konsultacji lekarskiej.`
  5. `O czym pamiętać po zabiegu?` — `Przez 4 godziny nie pochylaj się i nie kładź, przez dobę odpuść sport, saunę i alkohol, nie masuj miejsc podania. Pełne zalecenia dostajesz na piśmie.`

### 5.3 `/zabiegi/lifting-hifu` — Lifting HIFU

- **H1:** `Lifting HIFU — ujędrnienie bez skalpela`
- **Lead:** `Skoncentrowane ultradźwięki docierają tam, gdzie pracuje chirurg — tylko bez cięcia. HIFU przebudowuje włókna kolagenowe od środka, unosząc owal twarzy i napinając skórę na miesiące.`
- **QuickFacts:** Czas zabiegu: `60–90 min` · Znieczulenie: `niewymagane` · Powrót do aktywności: `od razu` · Pierwsze efekty: `od razu` · Pełny efekt: `2–3 mies.` · Cena: `od 2 900 zł`
- **Na czym polega:** `HIFU (High-Intensity Focused Ultrasound) precyzyjnie podgrzewa punkty w głębokich warstwach skóry i powięzi SMAS — tej samej, którą napina chirurg podczas liftingu operacyjnego. Kontrolowane mikrouszkodzenia uruchamiają intensywną produkcję nowego kolagenu. Efekt liftingu narasta stopniowo przez 2–3 miesiące i utrzymuje się do ok. 1,5–2 lat.`
- **Dla kogo:** opadający owal twarzy i „chomiki" · wiotkość skóry policzków, podbródka, szyi · opadające powieki górne (okolica brwi) · profilaktyka wiotkości po 35. r.ż. · osoby, które nie chcą lub nie mogą poddać się operacji
- **Przebieg:** 01 `Kwalifikacja` — lekarz ocenia stopień wiotkości i wyznacza obszary zabiegowe. 02 `Mapowanie i zabieg` — głowica emituje serie impulsów; odczuwalne jest ciepło i mrowienie. 03 `Bez rekonwalescencji` — możliwe przejściowe zaczerwienienie; wracasz do planu dnia od razu. 04 `Narastanie efektu` — kolagen odbudowuje się falami: kontrola i zdjęcia porównawcze po 3 miesiącach.
- **Cennik (mini):** Twarz (pełna) — `2 900 zł` · Twarz + podbródek — `3 400 zł` · Twarz + szyja — `3 900 zł` · Okolica oczu — `1 200 zł`
- **FAQ:**
  1. `Czy HIFU naprawdę działa, czy to marketing?` — `To technologia o udokumentowanym mechanizmie: kontrolowana stymulacja kolagenu w powięzi SMAS. Kluczowa jest jakość urządzenia i doświadczenie osoby wykonującej — dlatego u nas zabieg prowadzi przeszkolony lekarz na certyfikowanym sprzęcie medycznym.`
  2. `Czy zabieg boli?` — `Odczucia opisywane są jako ciepło i krótkie ukłucia-mrowienie, silniejsze przy kości. Większość pacjentek przechodzi zabieg bez znieczulenia; intensywność impulsów dostosowujemy na bieżąco.`
  3. `Kiedy zobaczę efekt?` — `Lekkie napięcie widać od razu, ale prawdziwy efekt narasta przez 2–3 miesiące, w miarę odbudowy kolagenu. Dlatego zdjęcia kontrolne robimy po 90 dniach.`
  4. `Jak często powtarzać zabieg?` — `Zwykle raz na 12–18 miesięcy. HIFU dobrze łączy się też ze stymulatorami tkankowymi — taki plan układamy indywidualnie.`
  5. `Jakie są przeciwwskazania?` — `M.in. ciąża, rozrusznik serca i metalowe implanty w obszarze zabiegu, aktywne infekcje skóry, świeże wypełniacze w okolicy zabiegowej. Pełną listę omawiamy podczas konsultacji lekarskiej.`

---

## 6. CENNIK (`/cennik`)

H1: `Cennik zabiegów` · Lead: `Uczciwie i bez gwiazdek. Ceny obejmują konsultację w dniu zabiegu, preparat i wizytę kontrolną, jeśli jest wskazana. Konsultacja lekarska (150 zł) jest odliczana od ceny zabiegu.`

Tabela w 4 kategoriach (nagłówek kategorii: overline + złota linia):

**USTA** — Modelowanie ust 0,5 ml `900 zł` · Modelowanie ust 1 ml `1 100 zł` · Korekta po innym gabinecie `od 1 300 zł` · Nawilżająca mezoterapia ust `600 zł`
**ZMARSZCZKI** — Toksyna botulinowa: 1 okolica `600 zł` · 2 okolice `1 000 zł` · 3 okolice `1 400 zł` · Bruksizm `od 1 200 zł` · Wypełnienie doliny łez `1 200 zł`
**LIFTING I JĘDRNOŚĆ** — HIFU twarz `2 900 zł` · HIFU twarz + podbródek `3 400 zł` · HIFU twarz + szyja `3 900 zł` · Stymulator tkankowy `od 1 400 zł`
**SKÓRA** — Mezoterapia igłowa twarz `450 zł` · Mezoterapia — pakiet 3 zabiegów `1 200 zł` · Peeling medyczny `od 350 zł` · Konsultacja lekarska `150 zł (odliczana od zabiegu)`

Pod tabelą: `Ceny mają charakter orientacyjny — ostateczny plan i wycenę ustala lekarz podczas konsultacji.` + CTA `Umów konsultację`.

---

## 7. O NAS (`/o-nas`)

- H1: `Medycyna estetyczna, która zaczyna się od słowa „nie"`
- Wstęp (3 akapity): `Klinika Aurelia powstała w 2014 roku z prostego założenia: dobra medycyna estetyczna częściej mówi „nie", niż „tak". Nie każdemu zabiegowi, nie każdej modzie, nie każdemu oczekiwaniu — jeśli stoi za nim krzywda dla naturalnego wyglądu.` / `Przez dwanaście lat wykonaliśmy ponad dziewięć tysięcy zabiegów, ale największą wagę przykładamy do tych, których odradziliśmy. Zaufanie pacjentek to nasz jedyny marketing.` / `Pracujemy wyłącznie na oryginalnych, certyfikowanych preparatach z udokumentowanym pochodzeniem, w gabinetach spełniających standardy podmiotu leczniczego.`
- **Zespół** (3 karty, zdjęcia 4:5):
  - `dr n. med. Aurelia Zawadzka` — `Założycielka kliniki. Lekarka z 12-letnim doświadczeniem w medycynie estetycznej, szkoleniowiec technik iniekcyjnych. Prowadzi zabiegi z zakresu toksyny, wypełniaczy i stymulatorów.`
  - `dr Maja Lewandowska` — `Lekarka medycyny estetycznej. Specjalizuje się w modelowaniu ust i okolicy oka. Znana z lekkiej ręki i obsesji na punkcie symetrii.`
  - `mgr Julia Nowicka` — `Kosmetolog kliniczny. Prowadzi zabiegi HIFU, mezoterapię i terapie skóry problematycznej. Autorka protokołów pielęgnacji pozabiegowej Aurelii.`
- **Nasze standardy** (3 punkty ze złotym łukiem): `Konsultacja lekarska przed każdym zabiegiem — bez wyjątków.` · `Wyłącznie oryginalne preparaty — opakowanie otwieramy przy Tobie.` · `Plan zamiast pojedynczego zabiegu — z kalendarzem i budżetem, który ma sens.`
- Zdjęcia wnętrz (`wnetrze-recepcja.webp`, `wnetrze-gabinet.webp`) w układzie mozaiki + CTA końcowe.

---

## 8. KONTAKT (`/kontakt`)

Układ 2 kolumny: formularz | dane.

**Dane (fikcyjne, spójne wszędzie):** Klinika Aurelia · ul. Mostowa 14/2, 87-100 Toruń · tel. `512 340 218` (klikalny) · `rejestracja@klinika-aurelia.pl` · Pon–Pt 9:00–19:00, Sob 9:00–14:00. Poniżej osadzona mapa (iframe Google Maps na centrum Torunia, `loading="lazy"`).

**Formularz (Web3Forms):**
- Pola: Imię i nazwisko* · Telefon* · E-mail · Temat (select: Konsultacja / Modelowanie ust / Toksyna botulinowa / Lifting HIFU / Inny zabieg / Pytanie) · Wiadomość · checkbox RODO* (`Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zapytania, zgodnie z Polityką prywatności.`)
- Technicznie: POST na `https://api.web3forms.com/submit`, ukryte pole `access_key` = `TODO_WEB3FORMS_KEY` (Jakub: darmowe konto na web3forms.com → klucz przychodzi na maila → wklej i zgłoszenia lecą na Twoją skrzynkę). Pole-pułapka `botcheck` (honeypot, ukryte). Wysyłka fetch-em bez przeładowania; sukces: wpisany w stronę komunikat `Dziękujemy — oddzwonimy w ciągu jednego dnia roboczego.`; błąd: `Nie udało się wysłać formularza. Zadzwoń: 512 340 218.` Walidacja pól wymaganych po polsku.
- Nagłówek nad formularzem: H1 `Umów konsultację` + zdanie: `Zostaw kontakt — rejestracja oddzwoni w ciągu jednego dnia roboczego, żeby dobrać termin i odpowiedzieć na pytania.`

---

## 9. WARSTWA SEO

- Każda strona: unikalny `<title>` (wzór: `[Nazwa] — Klinika Aurelia | Medycyna estetyczna Toruń`) i `meta description` (do 155 znaków, z frazą lokalną, np. `Modelowanie ust kwasem hialuronowym w Toruniu. Naturalne efekty, certyfikowane preparaty, zabieg wykonuje lekarz. Umów konsultację — Klinika Aurelia.`).
- OG: `og:title`, `og:description`, `og:image` = `/images/og-cover.webp` (1200×630).
- `@astrojs/sitemap` + `robots.txt`.
- JSON-LD: na `/` typ `MedicalClinic` (nazwa, adres, telefon, godziny, geo Toruń); na stronach zabiegów `FAQPage` (z pytań sekcji FAQ) + `BreadcrumbList`.
- Semantyka: jeden H1 na stronę, hierarchia H2/H3, wszystkie obrazy z polskim `alt` (opisowym, z nazwą zabiegu tam, gdzie naturalne).

---

## 10. WARSTWA ZGODNOŚCI

- **Cookie banner:** pasek dołem, tekst: `Ta strona używa plików cookie w celach statystycznych i funkcjonalnych. Możesz zaakceptować wszystkie lub odrzucić opcjonalne.` Przyciski `Akceptuję` / `Tylko niezbędne`. Wybór w `localStorage` (`aurelia-consent`), banner nie wraca. (W demo nie podpinamy analityki — banner pokazuje klientowi warstwę zgodności.)
- **Polityka prywatności:** Claude Code generuje standardowy szablon RODO po polsku (administrator: Klinika Aurelia, cel: obsługa zapytań, prawa osoby, kontakt), na górze strony adnotacja w komentarzu HTML: `<!-- SZABLON — przed wdrożeniem u klienta do weryfikacji prawnej -->`.
- **Adnotacje efektów** przy każdym module przed/po (tekst z 4.4) — obowiązkowo.
- **Stopka:** dopisek informacyjny (sekcja 3).

---

## 11. JAKOŚĆ — DEFINICJA „SKOŃCZONE" (na ostatni guzik)

- [ ] `npm run build` bez błędów i ostrzeżeń
- [ ] Lighthouse (mobile): Performance ≥ 95, Accessibility ≥ 95, SEO 100
- [ ] Pełna responsywność od 360px; menu mobilne działa; nic nie wyjeżdża poza ekran
- [ ] Nawigacja klawiaturą: widoczny złoty focus ring na wszystkich interaktywnych elementach
- [ ] Akordeony i suwaki z poprawnym ARIA (`aria-expanded`, role, etykiety)
- [ ] `prefers-reduced-motion` respektowane
- [ ] Wszystkie linki prowadzą do istniejących stron (zero `#` poza social)
- [ ] Formularz: walidacja, sukces, błąd, honeypot
- [ ] 404 istnieje (nagłówek `Ta strona nie istnieje — ale Twój plan na piękno może.` + CTA na główną)
- [ ] Favicon, OG image, sitemap, robots.txt
- [ ] Kontrast tekstów min. AA (złoto nigdy jako kolor tekstu akapitów)

---

## 12. GRAFIKI — SHOT LIST DO HIGGSFIELD

Wygeneruj i zapisz do `public/images/` DOKŁADNIE pod tymi nazwami. Styl spójny dla wszystkich: jasno, wysoki klucz, biel + kość słoniowa + ciepłe światło dzienne, estetyka premium skincare. Prompty po angielsku (lepsze wyniki), gotowe do wklejenia.

**Wspólna końcówka stylu (doklejaj do każdego promptu):** `bright airy high-key lighting, white and warm ivory tones, soft natural daylight, premium skincare campaign aesthetic, shallow depth of field, photorealistic, no text`

| Plik | Format | Prompt (baza) |
|---|---|---|
| `hero-main.webp` | 3:2, ~2400px | `Editorial beauty portrait of an elegant woman in her mid-30s with luminous natural skin, minimal makeup, serene confident expression, soft window light, minimalist white clinic interior blurred in background` |
| `og-cover.webp` | 1200×630 | kadr z hero lub wariant poziomy tego samego promptu |
| `wnetrze-recepcja.webp` | 3:2 | `Modern aesthetic medicine clinic reception, white walls, warm ivory details, subtle brushed gold accents, orchid flowers on counter, Scandinavian minimalism` |
| `wnetrze-gabinet.webp` | 3:2 | `Bright treatment room in an aesthetic clinic, white medical chair, large window with sheer curtains, clean minimal styling, soft gold detail` |
| `zespol-aurelia.webp` | 4:5 | `Professional portrait of a confident female doctor in her early 40s, white medical coat, warm genuine smile, bright clinic background, editorial healthcare photography` |
| `zespol-maja.webp` | 4:5 | jw., `female doctor in her mid-30s, dark hair in a low bun` |
| `zespol-julia.webp` | 4:5 | jw., `female clinical cosmetologist in her late 20s, light scrubs` |
| `zabieg-usta.webp` | 16:10 | `Close-up of an aesthetic lip treatment, doctor's gloved hands, patient relaxed, tasteful medical setting, no visible needle tip` |
| `zabieg-botoks.webp` | 16:10 | `Aesthetic medicine forehead treatment, gloved hands of a doctor gently marking injection points on a relaxed female patient` |
| `zabieg-hifu.webp` | 16:10 | `HIFU facial lifting procedure, sleek white ultrasound handpiece on a woman's jawline, modern device, clinical elegance` |
| `meta-usta-przed.webp` / `meta-usta-po.webp` | 1:1 | patrz technika par niżej |
| `meta-czolo-przed.webp` / `meta-czolo-po.webp` | 1:1 | jw. |
| `meta-owal-przed.webp` / `meta-owal-po.webp` | 1:1 | jw. |

**Technika par PRZED/PO (kluczowa dla wiarygodności):** nie generuj dwóch osobnych zdjęć — wyjdą dwie różne osoby. Wygeneruj najpierw wersję PRZED (np. `neutral front-facing portrait of a woman in her 40s, thin lips / forehead wrinkles / soft jawline, plain light background, even lighting`), a potem użyj **edycji obrazu na tym samym zdjęciu** (w Higgsfield: edycja/nano banana z obrazem referencyjnym) z poleceniem subtelnej zmiany: `same woman, same lighting and pose, subtly fuller symmetrical lips` / `smoothed forehead, wrinkles visibly reduced` / `slightly lifted firmer jawline`. Zmiana ma być SUBTELNA — przesada zabija wiarygodność demo.

---

## 13. ETAPY BUDOWY DLA CLAUDE CODE

**ETAP 1 — Fundament:** init Astro 5 + Tailwind 4 + fontsource, `global.css` z tokenami (sekcja 2.1–2.2), `Base.astro` (meta, fonty, skip-link), `Header` (sticky + mobile menu + dropdown Zabiegi), `Footer`, `Button`, `SectionHeading` (overline + złoty łuk + H2), `GoldArc`, favicon. Placeholder strony `/` z hero, żeby było co oglądać.

**ETAP 2 — Strona główna:** wszystkie sekcje z rozdziału 4 z pełnymi tekstami i działającą interaktywnością: eksplorator (dane z `treatments.ts`), 3 suwaki przed/po, opinie (mobile: przewijana karuzela), CTA. Obrazy jako placeholdery (szare tło + nazwa pliku), ścieżki docelowe wg sekcji 12.

**ETAP 3 — Strony zabiegów:** `treatments.ts` z pełnymi danymi, wspólny szablon (QuickFacts, kroki, FAQ akordeon z ARIA), trzy strony z rozdziału 5, JSON-LD `FAQPage` + `BreadcrumbList`.

**ETAP 4 — Pozostałe strony:** `/cennik`, `/o-nas`, `/kontakt` (formularz Web3Forms wg sekcji 8), `/polityka-prywatnosci`, `/404`, cookie banner.

**ETAP 5 — SEO + jakość:** sitemap, robots, meta i OG audyt wszystkich stron, JSON-LD `MedicalClinic`, optymalizacja obrazów i fontów (preload, `font-display: swap`), przejście całej checklisty z sekcji 11, raport końcowy.

---

*Specyfikacja: Connectiva / Jakub. Demo fikcyjne — nazwa, osoby, adres i opinie wymyślone na potrzeby prezentacji produktu.*


---

## 14. POPUP DEMO (baner informacyjny przy wejściu)

Cel: każdy, kto wejdzie na stronę, od razu wie, że to demonstracja umiejętności Connectivy, a nie prawdziwa klinika. Zabezpiecza markę i jednocześnie działa jako haczyk sprzedażowy (CTA do Connectivy).

**Zachowanie:**
- Pokazuje się RAZ NA SESJĘ przeglądarki, przy pierwszym wejściu na dowolną stronę. Po zamknięciu zapisujemy wybór w `sessionStorage` pod kluczem `aurelia-demo-notice` — dzięki temu przy klikaniu po podstronach popup NIE wraca, ale wraca po zamknięciu i ponownym otwarciu przeglądarki (nowa sesja).
- Modal na środku ekranu (nie pasek), z półprzezroczystym ciemnym tłem (overlay) przyciemniającym stronę pod spodem.
- Wejście: delikatny fade + scale (250ms). Zamknięcie: fade out.
- Zamknięcie przez: przycisk "Rozumiem", klawisz Escape, albo kliknięcie w tło overlay.
- Blokada scrolla strony, gdy popup otwarty (`overflow: hidden` na body).
- `prefers-reduced-motion`: bez animacji, tylko pojawienie/zniknięcie.
- Pełne ARIA: `role="dialog"`, `aria-modal="true"`, `aria-labelledby` (nagłówek), focus trap wewnątrz modala, focus wraca na stronę po zamknięciu.

**Styl:** spójny z resztą — biała karta, złoty łuk (GoldArc) nad nagłówkiem, nagłówek Cormorant, treść Instrument Sans. Przycisk główny w stylu primary (pastelowy z ciemną ramką), przycisk drugorzędny ghost. Maksymalna szerokość karty ~520px, wyśrodkowana, z marginesem na mobile.

**Treść (dokładnie):**
- Nagłówek (H2): `To jest strona demonstracyjna`
- Akapit 1: `Klinika Aurelia nie istnieje — to fikcyjna marka stworzona przez Connectivę, aby pokazać, jak może wyglądać profesjonalna strona dla kliniki medycyny estetycznej. Wszystkie dane, zabiegi, ceny i opinie są wymyślone.`
- Akapit 2 (wyróżniony, np. lekki pastelowy blok): `Prowadzisz klinikę, gabinet lub salon beauty? Taką stronę — wraz z systemem pozyskiwania pacjentów — zbudujemy również dla Ciebie.`
- Przycisk 1 (primary): `Chcę taką stronę` → link do `https://connectiva.biz` (otwiera w nowej karcie, `target="_blank" rel="noopener"`)
- Przycisk 2 (ghost): `Rozumiem, chcę zobaczyć demo` → zamyka popup

**Komponent:** `DemoNoticeModal.astro`, podpięty globalnie w `Base.astro` (pojawia się na każdej podstronie, ale logika sessionStorage pokazuje go raz na sesję).




---

## 15. WARSTWA SYSTEMU POZYSKIWANIA PACJENTÓW + AUDYT MOBILNY

> Cel tej warstwy: strona ma OD RAZU, na własne oczy, pokazywać kompletny system pozyskiwania pacjentów — nie opisywać go, tylko pokazywać działające mechanizmy. Klient wchodzący na stronę widzi, za co płaci: działające podstrony pod miasta, strony pod zabiegi, oraz realistyczne makiety wizytówki Google, analityki i reklam. Wszystko musi działać perfekcyjnie na telefonie.
>
> WAŻNE — uczciwość: elementy symulowane (statystyki, wizytówka Google, reklamy) MUSZĄ być wyraźnie oznaczone jako przykładowe/demonstracyjne. Nie wolno prezentować zmyślonych danych jako prawdziwych. Każda makieta dostaje widoczną etykietę „PRZYKŁAD" / „Tak będzie wyglądać u Ciebie".

---

### 15.1 PODSTRONY POD MIEJSCOWOŚCI (w pełni działające — to serce systemu)

Tworzymy 5 realnych, klikalnych podstron pod miasta w okolicy (fikcyjnego) Torunia. Każda ma WŁASNĄ, różniącą się treść — NIE kopie z podmienioną nazwą miasta (Google karze za duplikaty/doorway pages, a klient ma zobaczyć, że robimy to porządnie).

**Ścieżki i miasta:**
- `/medycyna-estetyczna-torun`
- `/medycyna-estetyczna-ciechocinek`
- `/medycyna-estetyczna-chelmza`
- `/medycyna-estetyczna-aleksandrow-kujawski`
- `/medycyna-estetyczna-torun-podgorz` (dzielnica — pokazuje, że schodzimy nawet niżej)

**Wspólny szablon podstrony miejscowości** (ale treść w każdej inna):
1. **H1 z frazą lokalną:** wzór `Medycyna estetyczna [Miasto] — Klinika Aurelia` (np. „Medycyna estetyczna Ciechocinek")
2. **Lead z lokalnym kontekstem** (2-3 zdania, ROŻNE dla każdego miasta): nawiązanie do dojazdu z tego miasta, odległości, tego że pacjentki z [Miasto] wybierają Aurelię. Przykłady:
   - Ciechocinek: `Do Kliniki Aurelia w Toruniu dojedziesz z Ciechocinka w niecałe 30 minut. Pacjentki z uzdrowiska wybierają nas ze względu na lekarską konsultację przed każdym zabiegiem i naturalne efekty.`
   - Chełmża: `Mieszkasz w Chełmży? Klinika Aurelia jest oddalona o ok. 20 km — a różnicę w jakości zabiegu poczujesz od pierwszej wizyty.`
   - Aleksandrów Kujawski: `Z Aleksandrowa Kujawskiego do naszej kliniki to krótka trasa. Coraz więcej pacjentek z okolicy wybiera medycynę estetyczną prowadzoną wyłącznie przez lekarzy.`
   (Podgórz i Toruń analogicznie — każde INNE.)
3. **Sekcja „Zabiegi dla pacjentek z [Miasto]”** — te same 3 flagowe zabiegi (usta, botoks, HIFU) linkujące do stron zabiegowych, z jednozdaniowym wprowadzeniem lokalnym.
4. **Mapa** z trasą/dojazdem (osadzona Google Maps wycentrowana na Toruń, z podpisem „Dojazd z [Miasto]”).
5. **Blok „Dlaczego pacjentki z [Miasto] wybierają Aurelię”** — 3 punkty (lekarska konsultacja, certyfikowane preparaty, naturalne efekty).
6. **CTA:** „Umów konsultację” + telefon.
7. **SEO:** unikalny title (`Medycyna estetyczna [Miasto] | Klinika Aurelia`) i meta description z frazą lokalną; JSON-LD `MedicalClinic` z areaServed = miasto.

**Sekcja „Obsługujemy okolicę” na stronie głównej i w stopce:** lista linków do wszystkich podstron miejscowości (to pokazuje klientowi mechanizm „łapiemy całą okolicę w Google”).

---

### 15.2 STRONA „SYSTEM” — `/jak-pozyskujemy-pacjentow`

Osobna podstrona, dostępna z głównego menu (pozycja: „Jak to działa” albo „System”). To jest MANIFEST sprzedażowy — pokazuje wszystkie mechanizmy zebrane, część działające, część jako makiety. Układ: sekcje jedna pod drugą, każda z krótkim wyjaśnieniem + wizualnym dowodem.

**Nagłówek strony:**
- Overline: `KOMPLETNY SYSTEM`
- H1: `Nie budujemy stron. Budujemy system, który przyprowadza pacjentów.`
- Lead: `Strona to dopiero początek. Poniżej pokazujemy dokładnie, jak zamieniamy osoby szukające w Google w umówione wizyty w Twojej klinice.`

**Sekcja A — Strony pod każdy zabieg (DZIAŁAJĄCE):**
- Tekst: `Każdy zabieg dostaje własną, dopracowaną stronę zoptymalizowaną pod wyszukiwania Google — z opisem, cenami, efektami i pytaniami pacjentek.`
- Dowód: 3 klikalne karty prowadzące do stron zabiegowych (usta, botoks, HIFU). Podpis: „Kliknij — to prawdziwe, działające strony”.

**Sekcja B — Podstrony pod miejscowości (DZIAŁAJĄCE):**
- Tekst: `Tworzymy osobne strony pod okoliczne miasta, żebyś pojawiał się w Google, gdy pacjentka z Ciechocinka, Chełmży czy Aleksandrowa szuka zabiegu u siebie.`
- Dowód: klikalne linki do 5 podstron miejscowości. Podpis: „Kliknij dowolne miasto — każde ma własną stronę”.

**Sekcja C — Wizytówka Google (MAKIETA — oznaczona):**
- Tekst: `Optymalizujemy Twój profil Google i wdrażamy system zbierania opinii, żebyś był pierwszym wyborem na mapie.`
- Dowód: zbudowana z kodu (HTML/CSS) MAKIETA panelu Google Business — nazwa „Klinika Aurelia”, ocena 4,9 ★ (214 opinii), godziny, przykładowe opinie, przycisk „Wyznacz trasę”. U góry makiety WYRAŹNA etykieta: `PRZYKŁAD — tak wygląda zoptymalizowana wizytówka`. Nie osadzać prawdziwego Google — zbudować wizualnie w kodzie.

**Sekcja D — Panel z wynikami / analityka (MAKIETA — oznaczona):**
- Tekst: `Co miesiąc dostajesz prosty raport: ile osób weszło, ile zadzwoniło, ile wypełniło formularz. Wiesz dokładnie, za co płacisz.`
- Dowód: zbudowany z kodu MAKIETA dashboardu — kafelki: „1 247 wejść”, „89 kliknięć w telefon”, „47 wysłanych formularzy”, prosty wykres słupkowy (czysty CSS/SVG, bez bibliotek). Źródła ruchu: Google, Instagram, bezpośrednie. U góry etykieta: `PRZYKŁADOWY RAPORT — dane demonstracyjne`.

**Sekcja E — Reklamy Google (MAKIETA — oznaczona):**
- Tekst: `W razie potrzeby uruchamiamy precyzyjne reklamy Google, które pokazują Twoją klinikę dokładnie wtedy, gdy ktoś szuka Twojego zabiegu.`
- Dowód: MAKIETA wyniku reklamowego Google (nagłówek reklamy „Klinika Aurelia — Medycyna estetyczna Toruń”, opis, „Sponsorowane”). Etykieta: `PRZYKŁAD reklamy`.

**Sekcja F — Podsumowanie / CTA:**
- H2: `Tyle pracuje dla Ciebie, zanim pacjentka do Ciebie zadzwoni.`
- Tekst krótkie zestawienie warstw (strona premium, strony zabiegów, podstrony miast, wizytówka Google, analityka, reklamy, opieka).
- CTA: „Chcę taki system” → `/kontakt`.

**Styl:** spójny z resztą (biel, złoty łuk, Cormorant/Instrument Sans). Makiety mają wyglądać realistycznie, ale KAŻDA z widoczną etykietą „PRZYKŁAD”. Etykieta: mały pill, tło `--porcelain`, tekst `--ink-soft`, uppercase 11px.

---

### 15.3 NAWIGACJA — dodać do menu i stopki

- Do głównego menu dodać pozycję: `Jak to działa` → `/jak-pozyskujemy-pacjentow` (umieścić między „Metamorfozy” a „O nas”).
- Do stopki dodać kolumnę/sekcję „Obsługujemy okolicę” z linkami do 5 podstron miejscowości.
- Dropdown „Zabiegi” bez zmian.

---

### 15.4 AUDYT MOBILNY — TWARDY WYMÓG (całą stronę, każda podstrona)

To jest wymóg krytyczny — pacjentki wchodzą głównie z telefonu. Po zbudowaniu warstwy 15.1-15.3, Claude Code przechodzi CAŁĄ stronę (stara + nowe podstrony) w widoku mobilnym (szerokość 360px, 390px, 414px) i sprawdza + naprawia:

- [ ] Żadne zdjęcie nie jest ucięte w złym miejscu ani zniekształcone — na mobile obrazy skalują się i kadrują sensownie (`object-fit: cover` z sensownym `object-position`, twarze/produkt widoczne).
- [ ] Żaden tekst nie wychodzi poza ekran, nie ma poziomego przewijania (`overflow-x: hidden` gdzie trzeba, ale najpierw naprawić przyczynę).
- [ ] Nagłówki (duże Cormorant) nie łamią się brzydko ani nie wystają — `clamp()` skaluje je w dół na mobile.
- [ ] Hero na telefonie: tekst czytelny, zdjęcie nie zasłania tekstu, CTA klikalne i widoczne bez scrolla (lub tuż pod).
- [ ] Menu mobilne (hamburger) zawiera WSZYSTKIE nowe pozycje (Jak to działa, podstrony przez „Zabiegi”/stopkę), działa, zamyka się.
- [ ] Eksplorator problemów działa dotykiem na telefonie (tap zamiast hover).
- [ ] Suwaki przed/po działają dotykiem (drag palcem), etykiety PRZED/PO widoczne.
- [ ] Makiety (wizytówka Google, dashboard, reklama) skalują się na telefon — nie wychodzą poza ekran, wykres i kafelki układają się w pion.
- [ ] Formularze: pola pełnej szerokości, wygodne do tapnięcia, klawiatura nie psuje układu.
- [ ] Przyciski i linki mają min. 44px wysokości dotykowej (standard mobilny).
- [ ] Tabele cennika na mobile: czytelne, nie wychodzą poza ekran (jeśli trzeba — układ kartowy zamiast tabeli).
- [ ] Stopka na mobile: kolumny układają się w pion, wszystko czytelne.
- [ ] Popup „to demonstracja” na mobile: mieści się w ekranie, przyciski dostępne, da się zamknąć.
- [ ] Odstępy (padding sekcji) zmniejszone na mobile, żeby nie było za luźno.
- [ ] Lighthouse mobile po zmianach: Performance ≥90, Accessibility ≥95.

Dla każdego znalezionego problemu — naprawić u źródła (Tailwind: użyć responsywnych prefiksów `sm:` `md:` `lg:`, mobile-first). Na koniec wypisać listę tego, co było zepsute i co naprawione.

---

### 15.5 ETAPY BUDOWY (dla Claude Code)

**ETAP 6 — Podstrony miejscowości:** zbuduj 5 podstron wg 15.1, każda z UNIKALNĄ treścią lokalną, JSON-LD z areaServed, dodaj sekcję „Obsługujemy okolicę” na stronie głównej i w stopce. Build, podsumuj, STOP.

**ETAP 7 — Strona System:** zbuduj `/jak-pozyskujemy-pacjentow` wg 15.2 z sekcjami A-F, w tym makiety (wizytówka Google, dashboard, reklama) zbudowane z kodu i oznaczone etykietą „PRZYKŁAD”. Dodaj „Jak to działa” do menu. Build, podsumuj, STOP.

**ETAP 8 — Audyt mobilny:** przejdź całą stronę wg checklisty 15.4, napraw wszystkie problemy responsywności (stare i nowe strony), ze szczególną uwagą na zdjęcia i makiety. Build, Lighthouse mobile, wypisz co naprawione. STOP.

---

*Sekcja 15 — rozszerzenie specyfikacji Aurelia o system pozyskiwania pacjentów. Elementy symulowane oznaczone jako przykładowe. Demo fikcyjne.*