# BITES Café Website

Minimalistická webová stránka pro pražskou kavárnu BITES.

## Struktura webu

### Stránky
- **Domů** (`/`) - Hero sekce, představení kaváry, filosofie
- **Menu** (`/menu`) - Kompletní nabídka snídaní, nápojů a dezertů
- **Galerie** (`/galerie`) - Fotogalerie kavárny a pokrmů
- **Kontakt** (`/kontakt`) - Kontaktní informace, formulář, mapa

## Design systém

### Barvy
- Pozadí: Čistě bílá (#FFFFFF)
- Text: Tmavě šedá (HSL 0, 0%, 15%)
- Sage zelená: HSL 135, 15%, 50% (sekce, akcentní prvky)
- Kávově hnědá: HSL 25, 35%, 55% (tlačítka, odkazy)
- Tmavá zápatí: HSL 0, 0%, 20%

### Typografie
- Font: Inter (Google Fonts)
- Nadpisy: Tučné (700), velkými písmeny (uppercase)
- Text: Regular (400), line-height 1.6-1.7

### Komponenty
- **Navigation**: Sticky navigace s mobilním menu
- **Footer**: Tmavá zápatí s kontakty a sociálními sítěmi
- **MenuCard**: Karty pro položky menu s obrázkem, názvem, popisem a cenou
- **FeatureCard**: Karty pro zvýraznění funkcí na domovské stránce

## Obrázky

Všechny obrázky byly vygenerovány AI a umístěny v `public/generated/`:
- `hero-coffee-croissant.png` - Hero obrázek
- `pastries-plate.png` - Pečivo
- `barista-pouring.png` - Příprava kávy
- `cafe-interior.png` - Interiér
- `avocado-toast.png` - Avokádový toast
- `granola-bowl.png` - Granola
- `matcha-latte.png` - Matcha latte
- `cheesecake.png` - Cheesecake

## Technologie

- **Next.js 15** - React framework
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **Lucide React** - Ikony

## Český jazyk

Celý web je v češtině s českými diakritikami a texty.
