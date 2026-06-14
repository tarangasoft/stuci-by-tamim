# STUCI TRAVEL AND TOURS — Complete Frontend Design Plan
## Cinematic · 3D Interactive · Futuristic UI · Bilingual (EN/RU)

---

## 0. PROJECT VISION

> Build the most immersive travel website in Bangladesh. Every scroll is a journey. Every click opens a world. The site must feel alive — like the destinations themselves are breathing through the screen.

**Brand:** Stuci Travel and Tours  
**Tagline (EN):** *"Your Journey Begins Here"*  
**Tagline (RU):** *"Ваше Путешествие Начинается Здесь"*  
**Tone:** Cinematic, luxurious, adventurous, trustworthy  
**Languages:** English (EN) | Russian (RU) — full i18n via `react-i18next`

---

## 1. TECH STACK

| Layer | Technology | Purpose |
|---|---|---|
| Framework | **Next.js 14** (App Router) | SSR, routing, performance |
| Styling | **Tailwind CSS** + custom CSS vars | Design tokens, utility classes |
| 3D Engine | **Three.js** + React Three Fiber | 3D globe, particle fields, 3D cards |
| Animations | **GSAP 3** + ScrollTrigger plugin | Scroll-driven cinematic scenes |
| Smooth Scroll | **Lenis** (smooth-scrollbar) | Silky inertia scrolling |
| Motion UI | **Framer Motion** | React component transitions |
| Shader FX | **GLSL custom shaders** in Three.js | Particle distortion, liquid effects |
| i18n | **react-i18next** | EN ↔ RU live toggle |
| Icons | **Lucide React** | Consistent icon set |
| Type Animations | **Typed.js** | Animated slogan typewriter |
| Cursor | **Custom cursor** (SVG ring) | Magnetic cursor interactions |
| Video | **HTML5 video** (WebM/MP4) | Hero background cinematic loops |
| Fonts | **Cinzel** (display) + **Inter** (body) | Luxurious + modern pair |
| Color | See Design Tokens below | Futuristic palette |

---

## 2. DESIGN TOKENS & VISUAL LANGUAGE

### Color Palette

```css
:root {
  /* Primary — deep ocean teal */
  --c-primary:       #0A9B8E;
  --c-primary-dark:  #067A70;
  --c-primary-glow:  rgba(10, 155, 142, 0.35);

  /* Accent — molten gold */
  --c-accent:        #F0A500;
  --c-accent-light:  #FFD166;
  --c-accent-glow:   rgba(240, 165, 0, 0.4);

  /* Backgrounds */
  --c-bg-void:       #050C12;   /* deepest dark */
  --c-bg-deep:       #0B1622;   /* sections */
  --c-bg-surface:    #132030;   /* cards */
  --c-bg-overlay:    rgba(5, 12, 18, 0.75);

  /* Text */
  --c-text-bright:   #F0EDE6;
  --c-text-muted:    #8A9BAB;
  --c-text-ghost:    #3D5060;

  /* Semantic */
  --c-success:       #22C55E;
  --c-danger:        #EF4444;

  /* Effects */
  --glow-primary:    0 0 40px rgba(10, 155, 142, 0.4);
  --glow-accent:     0 0 40px rgba(240, 165, 0, 0.4);
}
```

### Typography Scale

```css
/* Display — Cinzel for headings */
--font-display: 'Cinzel', Georgia, serif;

/* Body — Inter for all text */
--font-body: 'Inter', system-ui, sans-serif;

/* Scale */
--text-hero:   clamp(3.5rem, 8vw, 7rem);     /* hero headline */
--text-display: clamp(2.5rem, 5vw, 4.5rem);  /* section titles */
--text-headline: clamp(1.75rem, 3vw, 2.5rem); /* card headings */
--text-body-lg: 1.125rem;
--text-body:    1rem;
--text-sm:      0.875rem;
```

### Spacing System

```css
--space-xs:  0.5rem;
--space-sm:  1rem;
--space-md:  2rem;
--space-lg:  4rem;
--space-xl:  6rem;
--space-2xl: 10rem;
```

### Glassmorphism Card Style

```css
.glass-card {
  background: rgba(19, 32, 48, 0.6);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(10, 155, 142, 0.2);
  border-radius: 20px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06);
}
```

---

## 3. GLOBAL COMPONENTS

### 3.1 Custom Cursor

Replace default cursor with a 32px SVG ring that:
- **Tracks mouse** smoothly with 0.1 lerp lag
- **Expands to 64px** on hover over any clickable element
- **Fills with accent gold** on hover over CTAs
- **Distorts into a teardrop** shape when hovering travel images
- **Shows flag icon** when hovering language toggle

```jsx
// Implementation: requestAnimationFrame loop + CSS transform
// Use GSAP QuickTo for max smoothness
const xTo = gsap.quickTo(cursorEl, "x", { duration: 0.3, ease: "power3" });
const yTo = gsap.quickTo(cursorEl, "y", { duration: 0.3, ease: "power3" });
```

### 3.2 Global Navigation

**Design:** Transparent on load → frosted glass on scroll (detects `scrollY > 80`)

**Layout:**
```
[STUCI LOGO]           [Home] [About] [Tours ▾] [Gallery] [Contact]        [EN | RU]  [Book Now]
```

**Animations:**
- Logo: subtle parallax shift on scroll
- Nav links: animated underline that slides in from left on hover
- Language toggle: flag icons (🇬🇧 / 🇷🇺) with a flip card transition
- Book Now button: glowing border animation with pulsing shadow using `--glow-accent`
- Mobile: full-screen overlay menu with staggered slide-in items

**Mobile hamburger:** animates into an X with SVG path morphing via GSAP

**Sticky behaviour:** On scroll down → hide nav (translateY(-100%)). On scroll up → reveal nav.

### 3.3 Page Transition

Every route change triggers:
1. Dark overlay `#050C12` slides in from bottom (0.4s ease-in)
2. New page fades in (0.4s ease-out)
3. Loading spinner: animated compass rose SVG

### 3.4 Language Toggle (i18n)

```jsx
// i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: require('./locales/en.json') },
    ru: { translation: require('./locales/ru.json') }
  },
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});
```

Language persisted in `localStorage`. Toggle animates with a 3D Y-axis card flip. All text nodes wrapped in `useTranslation()` hook with `t('key')`.

### 3.5 Footer

- Dark background `--c-bg-void`
- Three columns: Logo + tagline | Quick links | Contact/Social
- Animated particle field background (Three.js: 800 floating dots)
- WhatsApp floating button (bottom-right, always visible, glows every 4s)
- Back-to-top button morphs from circle to arrow on hover

---

## 4. PAGE 1 — HOME PAGE (`/`)

### 4.1 Hero Section — "The Gateway"

**Full viewport (100vh) cinematic experience.**

**Background:**
- Layer 1: Autoplay looping video (WebM) of Bangladesh landscapes — Sundarban forests, Cox's Bazar waves, river deltas — with `object-fit: cover`
- Layer 2: Dark gradient overlay `linear-gradient(to bottom, rgba(5,12,18,0.3) 0%, rgba(5,12,18,0.8) 100%)`
- Layer 3: Three.js particle field — 2000 white dots floating upward, simulating stardust/fireflies
- Layer 4: GLSL noise shader on the edges (organic vignette that "breathes" at 0.5Hz)

**Hero Text Block (center):**
```
[animated compass rose SVG — 80px — slow rotation]

STUCI TRAVEL & TOURS
[typewriter animation cycling through destinations]
"Cox's Bazar · Sundarban · Rajshahi · International"

[Your Journey Begins Here]

[──── EXPLORE TOURS ────]   [── BOOK NOW ──]
```

**Text animations:**
- Company name: letter-by-letter GSAP stagger reveal from bottom (each letter 0.05s delay)
- Slogan typewriter: Typed.js cycles through 4 destination names at 80ms/char
- CTA buttons: fade in 1.2s after hero text with scale(0.9→1) spring

**Parallax layers on scroll (GSAP ScrollTrigger + Lenis):**
- Video layer: `translateY(0 → 30%)` as user scrolls through first viewport
- Text block: `translateY(0 → -20%) + opacity(1→0)`
- Particles: `translateY(0 → -15%)` — float away like departing birds

**Interactive globe (Three.js):**
- Small 200px 3D earth sphere, bottom-right of hero
- Custom texture: dark ocean + glowing teal landmasses
- Rotating at 0.002 rad/frame
- Gold pin markers on destination locations (Cox's Bazar, Sundarban, etc.)
- On hover: zoom pulse + tooltip with destination name in EN or RU

**Scroll indicator:**
- Animated mouse icon + "Scroll to explore" text
- Bouncing arrow with SVG path animation
- Fades out after first 5% scroll

---

### 4.2 Statistics Bar — "By the Numbers"

Horizontal strip between Hero and Features. Dark glass background.

**4 animated counters (CountUp.js, triggers on viewport entry):**

```
[✈] 5,000+          [🗺] 50+           [⭐] 98%           [🌍] 12+
  Happy Travelers      Destinations      Satisfaction       Countries
  Счастливых          Направлений       Удовлетворение     Стран
  Туристов
```

Animation: numbers count up from 0 over 2 seconds when scrolled into view. Each stat card has a subtle gold border glow that pulses once on reveal.

---

### 4.3 Feature Highlights — "Why Stuci"

3-column grid (stacked on mobile). Scroll-triggered stagger reveal.

```
[🧭 Expert Guides]         [💎 Premium Experience]      [🤝 Local Knowledge]
Professionally trained     Handpicked hotels and        Born from Bangladesh,
guides for every tour      exclusive experiences         exploring the world

[Опытные Гиды]            [Премиум Опыт]               [Местные Знания]
```

Each card:
- Hover: card lifts 8px (translateY) + glow border appears
- Icon: glowing Lucide icon with pulsing ring on hover
- Background: glass card style, with subtle grain texture overlay

---

### 4.4 Featured Destinations Carousel — "Your Next Adventure"

**Horizontal 3D scroll carousel** (Swiper.js + Three.js CSS 3D perspective)

```
[← PREV]  [CARD 1]  [CARD 2 — CENTER/ACTIVE]  [CARD 3]  [NEXT →]
```

Each destination card (360px × 480px):
- Full bleed photograph background
- Gradient overlay from bottom (black → transparent)
- Destination name in Cinzel display font
- Duration + price badge (glass pill, top-right)
- "Explore →" CTA appears on hover with slide-up animation

**3D carousel behaviour:**
- Active card: `scale(1.05)`, `translateZ(40px)`, full color, `brightness(1)`
- Adjacent cards: `scale(0.9)`, `translateZ(-20px)`, `brightness(0.7)`, rotated 15deg
- Far cards: `scale(0.75)`, `translateZ(-60px)`, `brightness(0.5)`
- Drag/swipe on mobile, mouse drag on desktop
- Auto-advance every 4 seconds with eased transition

**Destinations featured:**
1. Cox's Bazar — Golden beach, 2D/1N, from ৳3,500
2. Sundarban — Wild mangroves, 3D/2N, from ৳5,200
3. Kuakata — Twin-sea horizon, 2D/1N, from ৳3,800
4. Rajshahi — Silk city & mango orchards, 2D/1N, from ৳3,200
5. International Package, varies

---

### 4.5 Storytelling Scroll Section — "Bangladesh Awaits"

**Horizontal pinned scroll story (GSAP ScrollTrigger pin)**

Pin the section while scrolling vertically advances a horizontal narrative:

**Panel 1 — Dawn at Cox's Bazar**
- Full-screen image: sunrise over world's longest beach
- Text: "120km of unbroken golden sand. Where the sky meets the sea."
- Particle effect: golden dust swirls left to right

**Panel 2 — Into the Sundarban**
- Full-screen image: mangrove canopy, filtered morning light
- Text: "A UNESCO world wonder. Home of the Royal Bengal Tiger."
- Effect: vignette narrows to reveal a glowing tiger eye

**Panel 3 — Rajshahi's Silk Road**
- Full-screen image: silk looms, purple/gold palette
- Text: "Where ancient crafts meet modern journeys."

**Panel 4 — Call to Action**
- Clean dark background with floating gold particles
- Large text: "WHERE WILL YOU GO NEXT?"
- Two buttons: "View All Tours" | "Custom Package"

Transitions between panels: cross-dissolve + parallax depth shift (foreground text moves at 1x speed, background image at 0.6x speed).

---

### 4.6 Testimonials Carousel — "Travelers Say"

Auto-scrolling marquee of testimonial cards (infinite loop, pauseable on hover).

Each card:
- 5-star rating (gold SVG stars)
- Quote text (2–3 sentences)
- Name + nationality + flag icon
- Portrait photo in circle (or initial avatar)

Cards move at 40px/s continuously. On hover: entire marquee pauses, hovered card scales up 1.05x.

**Testimonials:**
1. "Stuci made our Cox's Bazar trip magical. Every detail was perfect." — Riya S., Dhaka
2. "Профессиональный сервис, незабываемые впечатления!" — Mikhail K., Moscow
3. "The Sundarban tour exceeded all expectations." — James T., London
4. "Лучший туроператор в Бангладеш!" — Olena P., Kyiv

---

### 4.7 AI Trip Planner Widget — "Tell Us Your Dream"

**Interactive AI-powered trip planner section.**

A glowing card with form inputs:
- Destination selector (dropdown with flag icons)
- Duration (range slider: 1–14 days)
- Budget range (range slider with live ৳/$ display)
- Group size (stepper: 1→20)
- "Plan My Trip →" button (pulsing gold CTA)

On submit: sends to backend (or mocked), returns a suggested itinerary in a slide-in panel with a "Book This Itinerary" CTA.

Animation: On click, button morphs into a spinning compass rose for 1.5s before showing result.

---

### 4.8 Map Section — "Where We Go"

Embedded interactive Leaflet.js map (dark tiles — CartoDB Dark Matter).

- Destination markers as custom glowing teal pins
- On marker click: popup with destination name, thumbnail, "View Tours" link
- Satellite view toggle
- Smooth bounds-fit animation on load

---

## 5. PAGE 2 — ABOUT US (`/about`)

### 5.1 Hero — "Our Story"

Full viewport. Background: slow Ken Burns effect on a photo collage of Bangladesh.

**Text reveal (GSAP SplitText plugin):**
```
ABOUT STUCI
Word by word reveal, staggered 0.08s each
"We are Bangladesh's most passionate travel company."
```

Parallax: background image moves at 0.6x scroll speed.

---

### 5.2 Origin Story — Scrollytelling Section

**Vertical timeline with horizontal scroll narrative.**

Pin the section. As user scrolls, a horizontal line progresses:

```
[2015]──────[2017]──────[2019]──────[2022]──────[TODAY]
Founded      First        500+        Went         10,000+
in Dhaka     group tour   travelers   international  journeys
```

Each milestone:
- Large year number fades in
- Short description text slides up
- Small vintage-style photograph animates in
- Animated line draws between milestones as you scroll

---

### 5.3 Mission & Values

3 tall cards, staggered scroll reveal (each 0.15s delay):

```
┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│  🌿 OUR MISSION     │  │  👁 OUR VISION      │  │  💛 OUR VALUES     │
│                     │  │                     │  │                     │
│  To make authentic  │  │  A Bangladesh every │  │  Honesty · Safety  │
│  travel accessible  │  │  traveler dreams    │  │  Excellence · Care │
│  to every soul      │  │  of visiting        │  │  Adventure · Trust  │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘
```

Hover effect: card flips in 3D (Y-axis) to reveal team member quote on back.

---

### 5.4 Services Section

Grid of 6 service cards with icon, title, description:

1. **Group Tours** — Organized group packages for all destinations
2. **Custom Trips** — Bespoke itineraries for solo or family travel
3. **Hotel Bookings** — Curated hotel partnerships across Bangladesh
4. **Transport** — AC bus, train, boat, and air ticket arrangements
5. **Photography Tours** — Special packages for travel photographers
6. **Corporate Tours** — Company retreat and team-building packages

Each card: glass style, Lucide icon (48px, teal), hover lifts + glows.

---

### 5.5 Team Section

Grid of team member cards (photo + name + role). Hover: photo desaturates → resaturates with teal tint + name slides up.

---

### 5.6 Certifications / Trust Badges

Horizontal scrolling logo marquee of partner hotels, airlines, tourism board certifications.

---

## 6. PAGE 3 — TOUR PACKAGES (`/tours`)

### 6.1 Hero — "Choose Your Adventure"

Short hero (50vh). Animated destination text cycling. Particle background.

### 6.2 Filter System (Sticky)

Sticky filter bar below nav:

```
[ALL]  [ONE DAY ☀]  [DOMESTIC 🏔]  [INTERNATIONAL ✈]  [PRICE ▾]  [DURATION ▾]
```

On filter click:
- Cards filter with Framer Motion layout animations (smooth shuffle)
- Unmatched cards scale to 0 + fade out
- Matched cards spring into new positions

Language-aware labels auto-switch EN/RU.

---

### 6.3 One-Day Tour Cards

**Subtitle:** "Perfect for a quick escape"

Tours included:
1. **Sonargaon Day Tour** — Ancient capital ruins, Panam City
2. **Natore Day Tour** — Rajbari palace and lotus gardens
3. **Rajshahi Day Tour** — Silk museum, Varendra Research Museum
4. **Bogura Day Tour** — Mahasthangarh, oldest archaeological site

Card design (360px × 500px):
```
┌──────────────────────────────┐
│  [Full-bleed destination     │
│   photograph]                │
│                   [DURATION] │
│                   [1 DAY]    │
│──────────────────────────────│
│  Sonargaon Day Tour          │
│  Ancient history & culture   │
│                              │
│  ৳ 1,800 / person            │
│  ✓ AC transport  ✓ Guide     │
│  ✓ Lunch        ✓ Entry fees │
│                              │
│  [────── VIEW DETAILS ──────]│
└──────────────────────────────┘
```

**Hover animation (3D card tilt):**
- On mousemove: card tilts on X and Y axis (-15° to +15°) using `rotateX` + `rotateY`
- Highlight "sheen" effect: white gradient that moves with cursor across card surface
- Price badge glows gold
- "View Details" CTA slides up from below

---

### 6.4 Domestic Multi-Day Tours

**Subtitle:** "Discover the Beauty of Bangladesh"

Tours:

#### Cox's Bazar Tour (2D/1N)
- Image: aerial golden beach at sunset
- Price: from ৳3,500/person
- Duration: 2 Days / 1 Night
- Highlights: Beach, Inani, Himchari, Laboni Point
- Includes: AC transport, hotel, guide, breakfast

#### Sundarban Tour (3D/2N)
- Image: mangrove waterway with boat
- Price: from ৳5,200/person
- Duration: 3 Days / 2 Nights
- Highlights: Boat safari, Kotka Beach, deer watching, tiger territory
- Includes: AC coach + boat, meals, lodge, guide, forest entry

#### Kuakata Tour (2D/1N)
- Image: simultaneous sunrise and sunset view
- Price: from ৳3,800/person
- Duration: 2 Days / 1 Night
- Highlights: Twin sea view, fishing village, Buddhist temples
- Includes: AC transport, hotel, guide

#### Rajshahi Tour (2D/1N)
- Image: silk looms, purple saris
- Price: from ৳3,200/person
- Duration: 2 Days / 1 Night
- Highlights: Varendra Museum, Puthia temples, Padma riverside
- Includes: Transport, hotel, guide

#### Natore Tour (1D)
- Image: Rajbari palace garden
- Price: from ৳1,500/person

#### Sylhet Tour (3D/2N)
- Image: emerald tea gardens at Srimangal
- Price: from ৳4,500/person
- Duration: 3 Days / 2 Nights
- Highlights: Tea gardens, Hakaluki Haor, Ratargul swamp forest

#### Bandarban Hill Tour (3D/2N)
- Image: misty blue mountains
- Price: from ৳4,800/person
- Highlights: Nilgiri, Boga Lake, tribal village stays

---

### 6.5 International Tours

**Subtitle:** "The World is Waiting"

Cards for:
- Thailand Package (Bangkok + Pattaya)
- Malaysia Package (KL + Langkawi)
- India Package (Kolkata + Darjeeling)
- Nepal Package (Kathmandu + Pokhara)
- UAE Package (Dubai highlights)
- Maldives Package (island resort)

Each international card has:
- Country flag badge
- Price in both ৳ and USD
- Visa info badge ("Visa on Arrival" / "e-Visa")

---

### 6.6 Tour Detail Modal / Drawer

On "View Details" click:
- Smooth bottom-up drawer (mobile) or center modal (desktop)
- Opens with spring animation (Framer Motion)
- Contains:
  - Full-screen image carousel (swipeable)
  - Day-by-day itinerary accordion
  - Included/excluded checklist
  - Map embed of the route
  - Price breakdown table
  - "Book This Tour" CTA form (name, phone, date, group size)
  - WhatsApp direct book link

---

### 6.7 Custom Package Builder

Section at page bottom:

Animated card with a "Build Your Dream Trip" headline. Three-step visual:

```
Step 1: Choose Destination(s)    Step 2: Set Duration & Budget    Step 3: We Plan & Book
[Map picker with checkboxes]     [Dual range sliders]              [Send to WhatsApp]
```

Progress bar fills as steps complete. Final step: pre-filled WhatsApp message with package summary.

---

## 7. PAGE 4 — GALLERY (`/gallery`)

### 7.1 Hero

Short hero (40vh) with a subtle photo mosaic background using CSS grid with staggered animation:
- 12 destination thumbnails arrange into grid on load (each slides in from a different direction, 0.05s delay)

### 7.2 Filter Tabs

```
[ALL]  [Landscapes]  [Beaches]  [Culture]  [Wildlife]  [Tourist Photos]
```

Switching tabs: Framer Motion layout animation sorts images smoothly.

### 7.3 Masonry Grid

Responsive CSS columns masonry layout (3 cols desktop, 2 tablet, 1 mobile).

Each image card:
- Rounded corners (16px)
- Hover: image zooms in (scale 1.05), dark overlay appears, destination name + icon fade in from bottom
- Lazy loading with blur-to-sharp placeholder (Next.js Image)

### 7.4 Lightbox

On image click:
- **Full-screen lightbox overlay** (black bg)
- Image scales up from card position to center (FLIP animation)
- Controls: previous / next arrows, close button, download button
- Caption: destination name, date, photographer credit
- Swipe gesture on mobile
- Keyboard navigation (← → Escape)
- Transition: crossfade with depth shift between images

### 7.5 Video Gallery Tab

Extra tab: short cinematic clips (15–30s each). Autoplay muted with sound-on toggle. Displayed in same masonry grid with play icon overlay.

### 7.6 Instagram Feed Widget

Optional section: embedded real-time Instagram feed grid showing @stucitravel latest posts.

### 7.7 "Submit Your Photos" CTA

Travelers can submit their own travel photos. Simple upload form with WhatsApp or email fallback.

---

## 8. ADDITIONAL SECTIONS (GLOBAL)

### 8.1 Contact Section (Footer-adjacent)

Three-column glass card:

```
[📍 Location]              [📞 Contact]              [🕒 Hours]
Dhaka, Bangladesh          +880-XXXX-XXXX            Sat–Thu
Mirpur / Motijheel         info@stucitravel.com       10:00–19:00
[View on Map]              [WhatsApp]                 Fri: 14:00–19:00
```

Animated map pin bounces once on scroll entry.

### 8.2 WhatsApp Floating CTA

Always-visible bottom-right floating button:
- Teal circular button with WhatsApp icon
- Pulses with `box-shadow` glow every 4 seconds
- Tooltip on hover: "Book via WhatsApp" in EN or RU
- On click: opens `https://wa.me/880XXXXXXXXX?text=Hello+Stuci+Travel...`

### 8.3 Newsletter Banner

Animated banner with teal gradient:
```
"Get exclusive deals & travel tips →  [Email input]  [Subscribe →]"
```

On subscribe: button morphs into a checkmark with confetti explosion (canvas-confetti).

---

## 9. CINEMATIC ANIMATION MASTER PLAN

### Scroll Storytelling System (GSAP ScrollTrigger)

Every section uses one of these trigger patterns:

| Pattern | Effect | Used In |
|---|---|---|
| **Fade up** | `opacity: 0, y: 60 → y: 0` | All section entries |
| **Stagger reveal** | Same but 0.1s per child | Cards, lists, stats |
| **Pin + scrub** | Section stays while content scrolls | Storytelling panels |
| **Parallax depth** | Background moves slower than foreground | Hero, section dividers |
| **Text split** | Word or letter by letter reveal | Section headings |
| **Counter** | Numeric counting on entry | Stats bar |
| **Path draw** | SVG stroke-dashoffset animation | Timeline, icons |
| **Scale from center** | `scale: 0.8 → 1` with opacity | Feature cards |
| **Rotation reveal** | `rotateX(-20 → 0)` | Tour cards, images |

### 3D Interaction System (Three.js + R3F)

```
Component              | 3D Technology
-----------------------|------------------------
Global background      | GLSL particle shader
Hero globe             | Three.js SphereGeometry + custom Earth texture
Card hover tilt        | CSS perspective + JS mouse tracking
Storytelling panels    | Three.js fog + depth layers
Tour detail image flip | CSS 3D transform preserve-3d
Gallery lightbox open  | Three.js plane geometry zoom
```

### Micro-interactions Checklist

Every interactive element must have a micro-interaction:

- [ ] Button hover: slight scale + glow pulse
- [ ] Button click: quick compress (scale 0.95) + release
- [ ] Link hover: underline draws from left
- [ ] Image hover: zoom + overlay fade
- [ ] Card hover: lift + shadow deepen
- [ ] Input focus: border glows teal
- [ ] Form submit: morphs into loading state
- [ ] Toggle: smooth slide + color transition
- [ ] Nav item: animated underline slide
- [ ] Price badge: bounce on card entry

---

## 10. PERFORMANCE & SEO

### Performance Targets

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.0s |
| FID / INP | < 100ms |
| CLS | < 0.05 |
| First Load JS | < 200KB gzipped |
| Lighthouse Score | ≥ 90 (all categories) |

### Performance Strategies

- All images: Next.js `<Image>` with WebP/AVIF, lazy loading, blur placeholders
- Video: load only on non-reduced-motion, defer `<video>` until hero in view
- Three.js: dynamically imported, SSR-disabled (`next/dynamic` with `ssr: false`)
- GSAP: tree-shaken, only import used modules
- Fonts: `font-display: swap`, subset for EN + Cyrillic (RU)
- Critical CSS: inline in `<head>`, defer non-critical
- Lenis: disabled on `prefers-reduced-motion: reduce`

### SEO Structure

```html
<!-- Every page -->
<title>Stuci Travel and Tours | [Page-specific title]</title>
<meta name="description" content="..." />
<link rel="alternate" hreflang="en" href="https://stucitravel.com/..." />
<link rel="alternate" hreflang="ru" href="https://stucitravel.com/ru/..." />

<!-- Schema.org -->
<script type="application/ld+json">
{
  "@type": "TravelAgency",
  "name": "Stuci Travel and Tours",
  "address": { "addressCountry": "BD" },
  "url": "https://stucitravel.com"
}
</script>
```

---

## 11. ACCESSIBILITY

- All images: meaningful `alt` text in both EN and RU
- All interactive elements: keyboard-navigable (visible focus rings)
- Modals: focus trap, `aria-modal`, close on Escape
- Animations: fully disabled when `prefers-reduced-motion: reduce`
- Color contrast: all text meets WCAG AA (4.5:1 minimum)
- Language toggle: properly announced to screen readers (`aria-label`)
- Form errors: inline validation messages, linked to inputs via `aria-describedby`

---

## 12. MOBILE EXPERIENCE

### Breakpoints

```css
--screen-sm:  640px;   /* landscape phone */
--screen-md:  768px;   /* tablet */
--screen-lg:  1024px;  /* small laptop */
--screen-xl:  1280px;  /* desktop */
--screen-2xl: 1536px;  /* large desktop */
```

### Mobile-Specific Optimizations

- 3D card tilt: converted to tap-activated bounce on mobile (no gyroscope dependency)
- Horizontal scroll carousels: touch-swipe enabled
- Hero video: replaced with static image on mobile (save bandwidth)
- Custom cursor: disabled on touch devices
- Navigation: full-screen overlay menu
- Tour cards: single column, swipeable horizontal scroll on filters
- Gallery: 1-column masonry, large tap targets
- All CTAs: minimum 44px touch target height

---

## 13. FOLDER STRUCTURE (Next.js)

```
stuci-travel/
├── app/
│   ├── (en)/
│   │   ├── page.tsx              # Home
│   │   ├── about/page.tsx        # About
│   │   ├── tours/page.tsx        # Tours
│   │   ├── gallery/page.tsx      # Gallery
│   │   └── layout.tsx
│   ├── (ru)/                     # Mirrored RU routes
│   └── layout.tsx                # Root layout + i18n provider
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageTransition.tsx
│   ├── three/
│   │   ├── HeroGlobe.tsx
│   │   ├── ParticleField.tsx
│   │   └── SceneBackground.tsx
│   ├── sections/
│   │   ├── home/
│   │   ├── about/
│   │   ├── tours/
│   │   └── gallery/
│   └── ui/
│       ├── TourCard.tsx
│       ├── GalleryImage.tsx
│       ├── Cursor.tsx
│       ├── LanguageToggle.tsx
│       └── Button.tsx
├── i18n/
│   ├── config.ts
│   └── locales/
│       ├── en.json
│       └── ru.json
├── lib/
│   ├── gsap.ts                   # GSAP init + plugins
│   ├── lenis.ts                  # Lenis smooth scroll init
│   └── three-utils.ts
├── public/
│   ├── images/
│   ├── videos/
│   └── models/                   # .glb 3D assets if any
└── styles/
    ├── globals.css               # Design tokens
    └── animations.css            # Keyframes
```

---

## 14. IMPLEMENTATION PRIORITY ORDER

### Phase 1 — Foundation (Week 1)
1. Next.js setup + Tailwind config with design tokens
2. i18n setup (react-i18next + EN/RU JSON files)
3. Global layout: Navbar + Footer
4. Page transition system
5. Custom cursor

### Phase 2 — Home Page (Week 2)
6. Hero section (video bg + Three.js particles + typewriter text)
7. Stats counter bar
8. Feature highlights (glass cards)
9. 3D destination carousel
10. Scroll storytelling panels

### Phase 3 — Tours Page (Week 3)
11. Tour card grid with 3D tilt hover
12. Filter system with Framer Motion layout
13. Tour detail modal/drawer
14. Package builder section

### Phase 4 — About + Gallery (Week 4)
15. About hero + timeline
16. Services grid + team section
17. Gallery masonry grid
18. Lightbox component

### Phase 5 — Polish (Week 5)
19. All GSAP scroll animations
20. Performance optimization
21. Mobile responsiveness pass
22. SEO + accessibility audit
23. Final cross-browser testing

---

## 15. KEY LIBRARIES — INSTALL COMMANDS

```bash
npm install next@latest react@latest react-dom@latest
npm install three @react-three/fiber @react-three/drei
npm install gsap @gsap/react
npm install @studio-freight/lenis
npm install framer-motion
npm install react-i18next i18next i18next-browser-languagedetector
npm install swiper
npm install typed.js
npm install react-countup
npm install canvas-confetti
npm install lucide-react
npm install tailwindcss autoprefixer postcss
npm install sharp          # Next.js Image optimization
```

---

## 16. SAMPLE I18N KEYS (en.json / ru.json)

```json
// en.json
{
  "nav": {
    "home": "Home",
    "about": "About Us",
    "tours": "Tour Packages",
    "gallery": "Gallery",
    "contact": "Contact",
    "book": "Book Now"
  },
  "hero": {
    "tagline": "Your Journey Begins Here",
    "cta_explore": "Explore Tours",
    "cta_book": "Book Now",
    "scroll": "Scroll to explore"
  },
  "tours": {
    "oneday": "One Day Tours",
    "domestic": "Domestic Tours",
    "international": "International Tours",
    "from": "From",
    "per_person": "/ person",
    "view_details": "View Details",
    "book_tour": "Book This Tour"
  }
}

// ru.json
{
  "nav": {
    "home": "Главная",
    "about": "О нас",
    "tours": "Туры",
    "gallery": "Галерея",
    "contact": "Контакты",
    "book": "Забронировать"
  },
  "hero": {
    "tagline": "Ваше Путешествие Начинается Здесь",
    "cta_explore": "Исследовать Туры",
    "cta_book": "Забронировать",
    "scroll": "Прокрутите вниз"
  },
  "tours": {
    "oneday": "Однодневные туры",
    "domestic": "Внутренние туры",
    "international": "Международные туры",
    "from": "От",
    "per_person": "/ чел",
    "view_details": "Подробнее",
    "book_tour": "Забронировать тур"
  }
}
```

---

*End of Stuci Travel and Tours — Frontend Plan v1.0*  
*Prepared for development team. All animations, interactions, and features described above represent the complete specification.*
