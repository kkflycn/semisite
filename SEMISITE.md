# SEMISITE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **IMPORTANT — This is NOT the Next.js you know.**
> This project uses Next.js 16 with breaking API changes. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`. Heed deprecation notices.

## Commands

```bash
npm run dev          # dev server on 0.0.0.0:3000 (WSL2 accessible)
npm run build        # static export → /out directory
npm run lint         # ESLint

# Visual QA (requires dev server running)
node scripts/screenshot.mjs            # all pages, desktop + mobile
node scripts/screenshot.mjs /about    # single page
```

No test suite exists. `npm run build` is the primary correctness check — it runs TypeScript and catches errors.

## Architecture

**Pure static site** (`output: "export"`). No server components with data fetching, no API routes, no auth. Every page is pre-rendered to HTML at build time.

```
app/                    # Next.js App Router pages
  layout.tsx            # Root layout: fonts, Header, Footer, Organization JSON-LD
  page.tsx              # Homepage — section order: Hero → FeaturedEquipment → Business → Trust → Services → CTA
  equipment/
    page.tsx            # Equipment list (static, filter logic is client-side)
    [id]/page.tsx       # Equipment detail (generateStaticParams from equipments.ts)
  services/ about/ contact/ not-found.tsx

components/
  home/                 # Homepage-only sections (Hero, Business, Trust, Featured, Services)
  equipment/            # EquipmentList (client filter+sort), CategoryFilter
  contact/              # InquiryForm (react-hook-form + zod, submits to console.log)
  layout/               # Header, Footer, CTASection
  shared/               # EquipmentCard, FadeIn.tsx (animation wrappers)
  ui/                   # shadcn/ui primitives only

data/
  equipments.ts         # 31 equipment records + getEquipmentById / getFeaturedEquipments helpers

public/
  images/equipment/     # Real equipment photos named by ID: {id}.jpg/png/webp

types/
  index.ts              # Equipment, InquiryFormData, EquipmentCategory, CATEGORY_LABELS
```

### Hero Carousel (`components/home/HeroSection.tsx`)

The right panel is an auto-rotating carousel built with `AnimatePresence`:
- Data: `getFeaturedEquipments(5)` — top 5 in-stock + refurbished + inspected items
- Auto-advances every 5 s via `setInterval`; pauses (`useRef`) on mouse enter
- Hover also: stops the float animation (framer-motion `animate` switches from repeat loop to `y:0`) and triggers a 4 s CSS Ken Burns zoom (`scale-100 → scale-110`) on the image
- Clicking the image navigates to `/equipment/{id}` via `next/link`
- Dot indicators (top-right of card) allow manual jump to any slide

## Key Constraints

**basePath differs by environment:**
```ts
// next.config.ts
basePath: isProd ? "/semisite" : ""
```
`next/link` and `next/image` handle this automatically. Raw `<a href>` strings do not — avoid them.

**Images are unoptimized** (`images: { unoptimized: true }`) — required for static export. Placeholder images use `https://picsum.photos/seed/<id>/800/600`.

**`"use client"` required** for any component that uses framer-motion, useState, useEffect, or useSearchParams. Server components cannot import client-only modules.

## Animation Pattern

Three wrappers in `components/shared/FadeIn.tsx`:

- `<FadeIn delay={0.1}>` — single element fade-in on scroll
- `<FadeInStagger stagger={0.08} className="grid ...">` — replaces the grid/flex container
- `<FadeInItem key={...}>` — direct child of FadeInStagger, receives stagger variants automatically

FadeInStagger uses `whileInView` + `viewport: { once: true }`. When screenshotting, scroll the full page first to trigger animations before capturing (see `scripts/screenshot.mjs`).

## Data Layer

All equipment data lives in `data/equipments.ts` as a typed array. To add/edit equipment:
- Follow the `Equipment` interface in `types/index.ts`
- `status`: `"in-stock"` | `"on-order"`
- `specs`: `{ label: string; value: string }[]`
- `category` must be one of the 8 values in `EquipmentCategory`
- `imageUrl`: use `/images/equipment/{id}.{ext}` — real photos live in `public/images/equipment/` (jpg/png/webp). Extensions vary: check the actual file before setting the path.

## Visual Style Rules

Dark background palette: `#080810` / `#0a0a0f` / `#0a0a14` (alternate sections). Accent: `blue-600` / `blue-400`. Card surfaces: `#111118`. Text hierarchy: `text-white` → `text-[#a0a0b0]` → `text-[#606070]` → `text-[#404050]`.

Section structure: eyebrow (`text-xs tracking-widest uppercase text-blue-400`) → h2 → body. `py-24` section padding, `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` container.

## Inquiry Form

`components/contact/InquiryForm.tsx` — currently submits to `console.log`. To wire up a backend, replace the `onSubmit` handler. URL params `?equipment=...` and `?service=...` pre-fill the form from equipment detail and services pages.

## SEO

- Per-page `metadata` exports in each `page.tsx`
- Organization JSON-LD `<script>` in `app/layout.tsx` `<head>`
- Product JSON-LD in `app/equipment/[id]/page.tsx`
- `metadataBase`: `https://www.xinjisemi.com`
