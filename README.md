# Shubham Mahajan — Official Portfolio

A high-performance, cinematic web application showcasing the cinematography, documentary filmmaking, global event direction, and brand strategy portfolio of **Shubham Mahajan**.

Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

---

## Features

- **Cinematic Visual Experience**: Dark aesthetic with custom typography, fluid grids, and subtle micro-interactions.
- **Dynamic Portfolios**: Specialized showcases for Brand Marketing, Documentary Films, Global Talent Events & Junkets, and Narrative Fiction.
- **Accreditation Ledger**: Interactive technical certifications ledger featuring ARRI, Canon, PL Cinema Optics, and studio lighting gear.
- **Responsive Architecture**: Fluid responsive layouts optimized across mobile, tablet, desktop, and ultra-wide viewports.
- **Fast Static Generation**: Fully optimized static builds for rapid page loading and SEO.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Lucide Icons](https://lucide.dev/)

---

## Getting Started

### 1. Install Dependencies

Ensure you have [Node.js](https://nodejs.org/) (v18+) and [pnpm](https://pnpm.io/) installed:

```bash
pnpm install
```

### 2. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Build & Production

To build the static application for production:

```bash
pnpm build
```

To test the production build locally:

```bash
pnpm start
```

---

## Project Structure

```
├── public/                 # Static assets (images, certificate PDFs & previews)
│   ├── certificates/       # Technical certification PDFs and preview cards
│   └── images/             # Portfolio media organized by section
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   │   ├── acknowledgments # Industry certificates & operating principles
│   │   ├── branding        # Brand strategy & commercial video pipeline
│   │   ├── contact         # Contact & inquiries
│   │   ├── documentary     # Documentary filmmaking showcase
│   │   ├── events          # High-stakes international talent events
│   │   └── films           # Narrative & short film gallery
│   ├── components/         # Modular UI components & sections
│   ├── data/               # Structured portfolio data (branding work, certificates)
│   └── styles/             # Global CSS and typography tokens
├── tailwind.config.ts      # Tailwind design system tokens
└── next.config.ts          # Next.js configuration
```

---

## License

All rights reserved © Shubham Mahajan. Content and media assets are proprietary and copyrighted.
