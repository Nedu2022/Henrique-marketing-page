# Henrique: Digital Marketing Agency Website

The marketing site for **Henrique**, a data-driven digital marketing agency. It is a single, fully responsive home page built from a design mock-up, with each section implemented as its own React component.

> **Status:** UI complete. Every section on the home page is built and styled. Interactivity (menus, tabs, sliders, forms) is intentionally **not** wired up yet. Each place that needs it is marked with a `// TODO:` comment in the code.

---

## Contents

- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Page sections](#page-sections)
- [Design system](#design-system)
- [How the code is organised](#how-the-code-is-organised)
- [Notable implementation details](#notable-implementation-details)
- [Images and assets](#images-and-assets)
- [Roadmap and open TODOs](#roadmap-and-open-todos)

---

## Tech stack

| Tool | Version | Why |
| --- | --- | --- |
| [React](https://react.dev) | 19 | Component-based UI |
| [TypeScript](https://www.typescriptlang.org) | 7 | Typed props and content data, catching mistakes before the browser does |
| [Vite](https://vite.dev) | 8 | Dev server with instant hot reload, and the production bundler |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility classes for styling, with design tokens defined once in CSS |

Fonts are loaded from Google Fonts: **Syne** for headings and **Kanit** for body text.

---

## Getting started

**Requirements:** Node.js 20 or newer.

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:5173
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local dev server with hot reload |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the production build locally, for a final check |
| `npx tsc` | Type-checks the whole project without building |
| `npm run lint` | Runs ESLint (see [open TODOs](#roadmap-and-open-todos): not yet set up for `.tsx`) |

---

## Project structure

```text
henique/
├── index.html                 # HTML shell: page title, font links, mounts the app
├── vite.config.js             # Vite + React + Tailwind plugins
├── tsconfig.json              # TypeScript settings
├── public/
│   └── images/                # All site images, grouped by purpose (see below)
└── src/
    ├── main.tsx               # Entry point: mounts <App /> into #root
    ├── App.tsx                # Renders the Home page
    ├── index.css              # Tailwind import + design tokens (@theme)
    ├── pages/
    │   └── Home.tsx           # Composes all sections in page order
    └── components/
        ├── Header.tsx         # One file per page section…
        ├── Hero.tsx
        ├── …
        └── ui/                # Small reusable building blocks
            ├── ButtonLink.tsx
            ├── Container.tsx
            ├── Eyebrow.tsx
            ├── Logo.tsx
            ├── MediaImage.tsx
            ├── SectionHeading.tsx
            ├── TextLink.tsx
            ├── WaveDivider.tsx
            └── icons.tsx
```

---

## Page sections

The home page is assembled in [`src/pages/Home.tsx`](src/pages/Home.tsx) from these components, top to bottom:

| # | Component | What it shows | Editable data |
| --- | --- | --- | --- |
| 1 | [`Header`](src/components/Header.tsx) | Logo, main navigation, "Free audit" button | `navLinks` |
| 2 | [`Hero`](src/components/Hero.tsx) | "Marketing without borders", the shaped card grid, stats bar | `expertAvatars` + props |
| 3 | [`WhatWeDo`](src/components/WhatWeDo.tsx) | "We solve digital challenges" with three benefit cards | `benefits` |
| 4 | [`Capabilities`](src/components/Capabilities.tsx) | Team photo and four service cards | `services` |
| 5 | [`WhyUs`](src/components/WhyUs.tsx) | Transparency / Team / Results tabs, including an analytics donut chart | `whyUsTabs` |
| 6 | [`SuccessStories`](src/components/SuccessStories.tsx) | Case-study carousel (Zara, Homme, …) | `stories` |
| 7 | [`Brands`](src/components/Brands.tsx) | "The best brands choose Henrique" logo row | `brands` |
| 8 | [`Blog`](src/components/Blog.tsx) | Three latest articles | `posts` |
| 9 | [`Proof`](src/components/Proof.tsx) | "The proof is in the numbers" stats and client testimonial | `stats`, `testimonials` |
| 10 | [`CallToAction`](src/components/CallToAction.tsx) | Contact prompt, partner badges, average ROAS | `partners` |
| 11 | [`Footer`](src/components/Footer.tsx) | Solutions links, company links, copyright | `solutionLinks`, `companyLinks` |

---

## Design system

All brand values live in one place: the `@theme` block in [`src/index.css`](src/index.css). Tailwind turns each variable into utility classes, so `--color-brand` becomes `bg-brand`, `text-brand` and `border-brand`. **Change a value there and it updates across the whole site.**

### Colours

| Token | Hex | Used for |
| --- | --- | --- |
| `ink` | `#0b0b0f` | Headings, buttons, primary text |
| `body` | `#45454f` | Paragraph text |
| `brand` | `#6c5ce7` | Accent purple: icons, underlines, hover states |
| `lavender` | `#ebe8fb` | Soft panels (tabs, CTA box, award card) |
| `lavender-soft` | `#f5f3fd` | Background gradients |
| `periwinkle` | `#b0b1ff` | Hero megaphone card |
| `sun` | `#f4c144` | Yellow CTA card, rating stars |
| `mist` | `#f6f6f8` | Grey panels and icon circles |
| `line` | `#e7e7ee` | Borders and dividers |

### Typography

| Token | Font | Used for |
| --- | --- | --- |
| `font-display` | Syne | Headings, buttons, nav, labels |
| `font-sans` | Kanit (default) | Body text |

### Layout

- **Content width:** 1280px, centred by [`Container`](src/components/ui/Container.tsx), with 24px side gutters (16px on phones).
- **Breakpoints:** Tailwind defaults. Styles are written **mobile-first**: unprefixed classes target phones, and `sm:` (640px), `md:` (768px), `lg:` (1024px) and `xl:` (1280px) add changes from that width upward.

### Shared UI components

| Component | Purpose |
| --- | --- |
| `ButtonLink` | Black button-style link with an arrow, used by every call-to-action |
| `TextLink` | Uppercase link with a purple underline ("Learn more", "View all") |
| `Eyebrow` | Small uppercase label above section headings |
| `SectionHeading` | The large display heading, with a configurable tag (`h2`/`h3`) |
| `Logo` | Brand mark rebuilt in HTML/CSS; change the name with `<Logo name="…" />` |
| `MediaImage` | Shows an image, or a gradient placeholder when no file exists yet |
| `WaveDivider` | The thin divider line with a curved bump |
| `icons.tsx` | All inline SVG icons (arrows, stars, service icons) |

---

## How the code is organised

These conventions apply to every section and keep the project easy to extend.

**1. One component per section.** Each section is self-contained in `src/components/` and added to `Home.tsx` in page order.

**2. Content lives in typed arrays at the top of each file.** Repeated content (cards, links, stories, posts) is stored as data and rendered with `.map()`:

```tsx
export const services: Service[] = [
  { title: 'Paid search marketing', text: '…', href: '#', icon: SearchIcon },
  // …
]
```

This makes it easy to replace with real data from a CMS or API later. The shape stays the same, only the source changes.

**3. Content comes in through props with sensible defaults.** Every section works as-is (`<Hero />`), and any text can be overridden (`<Hero title="…" />`).

**4. No logic yet, by design.** The UI stage deliberately has no `useState`, effects, API calls or routing. Links use `href="#"`, and buttons have no click handlers.

**5. Placeholders are explicit.** Wherever behaviour or real content is still needed there is a `// TODO:` comment. Search the project for `TODO:` to see the full list.

---

## Notable implementation details

A few techniques worth knowing before you edit these sections:

- **Hero card grid ([`Hero.tsx`](src/components/Hero.tsx)).** On desktop the design is a fixed 1280×476 composition with custom shapes. The wrapper keeps that ratio (`aspect-[1280/476]`) and each card is positioned with percentages, so the whole composition scales evenly. The two unusual shapes come from SVGs: one is used as a **background image** (the purple megaphone card), the other as a **CSS mask** that cuts the rings photo into shape. Below 1280px it switches to a simple card grid.
- **Tabs driven by a typed union ([`WhyUs.tsx`](src/components/WhyUs.tsx)).** Each tab's media is either an image or an analytics card. The `kind` field tells TypeScript which one it is, so the right fields are guaranteed to exist.
- **Data-driven donut chart.** The "Real-Time Reporting" chart is an SVG whose arc lengths are calculated from the session numbers, so changing the data redraws the chart.
- **CSS-only carousel ([`SuccessStories.tsx`](src/components/SuccessStories.tsx)).** Uses horizontal scrolling with `scroll-snap`, so swiping already works without JavaScript.
- **Overlapping panels.** The footer and the testimonial panel use negative margins and rounded tops to slide over the section above them, matching the layered look of the design.
- **Placeholder props for future state.** `WhyUs` and `Proof` accept an `activeIndex` prop. You can preview any tab or testimonial today (`<WhyUs activeIndex={2} />`), and it becomes `useState` when interactivity is added.

---

## Images and assets

Images live in `public/images/` and are referenced from the site root (for example `/images/photos/team-office.jpg`).

```text
public/images/
├── avatars/     # Round profile photos (hero stats bar, reviews)
├── brand/       # Logo and favicon files
├── graphics/    # UI illustrations (growth chart card)
├── icons/       # 3D megaphone and trophy
├── photos/      # Large photos (team office, abstract rings)
├── projects/    # Success-story images
└── shapes/      # Card shapes, dividers and the dashed arrow
```

**Adding an image:** put it in the matching folder and set its path in the data array of the relevant section (for example `image` on a blog post). Sections that are still waiting on images show a soft purple placeholder until then.

---

## Roadmap and open TODOs

### Content and assets

- [ ] Blog post images: set `image` on each post in `Blog.tsx`
- [ ] Team-meeting photo for the "Team of experts" tab in `WhyUs.tsx`
- [ ] Client logos in `Brands.tsx` and partner badges in `CallToAction.tsx` (names currently shown as text)
- [ ] Review placeholder copy: the Transparency tab text, the two extra success stories, and the footer copyright line
- [ ] Replace the default Vite favicon with a Henrique icon
- [ ] Confirm the heading font: Syne is a close stand-in for the original

### Interactivity

- [ ] Mobile menu toggle (`Header`)
- [ ] "Marketing solutions" dropdown (`Header`)
- [ ] Sticky header that reappears when scrolling up (`Header`)
- [ ] Tab switching with keyboard support (`WhyUs`)
- [ ] Carousel dots and navigation (`SuccessStories`)
- [ ] Testimonial previous/next arrows (`Proof`)

### Tooling

- [ ] Set up ESLint for TypeScript (`typescript-eslint`); the current config only checks `.js`/`.jsx`
- [ ] Add a `typecheck` script to `package.json`
- [ ] Add routing when the other pages (Who we are, Work, Contact…) are built
# Henrique-marketing-page
