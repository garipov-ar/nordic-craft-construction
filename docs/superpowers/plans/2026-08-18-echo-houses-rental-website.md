# Echo Guest Houses Rental Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a high-converting, atmospheric, and responsive Next.js 15 web application for the "ЭХО" guest house rental complex in Komsomolsk-on-Amur (Komitetskaya st., 1) featuring an interactive house switcher (A-Frame vs Chalet), dynamic booking cost calculator with spa extras, photo gallery, rules/FAQ, interactive map, and Telegram/WhatsApp booking dispatch.

**Architecture:** Standalone Next.js 15 (App Router) in `x:/Portfolio/echo-house-rental/` with React 19, TypeScript, and CSS Modules. Server Components for SEO and fast initial paint; interactive Client Components for house switcher, date picker, cost calculator, gallery modal, and FAQ.

**Tech Stack:** Next.js 15, React 19, TypeScript, Lucide React, Zod, CSS Modules.

**Spec:** [2026-08-18-echo-houses-rental-website-design.md](file:///x:/Portfolio/docs/superpowers/specs/2026-08-18-echo-houses-rental-website-design.md)

---

### Task 1: Scaffolding, Design Tokens & Project Initialization

**Files:**
- Create: `echo-house-rental/package.json`
- Create: `echo-house-rental/tsconfig.json`
- Create: `echo-house-rental/next.config.mjs`
- Create: `echo-house-rental/src/app/globals.css`
- Create: `echo-house-rental/src/app/layout.tsx`
- Create: `echo-house-rental/src/app/page.tsx`

**Interfaces:**
- Produces: Project environment with "Taiga Cozy & Warm Forest" theme tokens (deep forest night `#111613`, moss slate `#1A221D`, bonfire amber `#E08B38`, pine green `#2E5339`).

- [ ] **Step 1: Create package.json and install dependencies**
- [ ] **Step 2: Create tsconfig.json and next.config.mjs with static export support**
- [ ] **Step 3: Define Taiga Warm Forest CSS variables in globals.css**
- [ ] **Step 4: Create Root Layout with SEO meta and Outfit/Inter fonts**

---

### Task 2: Core UI & Layout Components (Header, Navigation, Footer, Modals, Buttons)

**Files:**
- Create: `echo-house-rental/src/components/ui/Button.tsx`
- Create: `echo-house-rental/src/components/ui/Button.module.css`
- Create: `echo-house-rental/src/components/ui/Modal.tsx`
- Create: `echo-house-rental/src/components/ui/Modal.module.css`
- Create: `echo-house-rental/src/components/layout/Header.tsx`
- Create: `echo-house-rental/src/components/layout/Header.module.css`
- Create: `echo-house-rental/src/components/layout/Footer.tsx`
- Create: `echo-house-rental/src/components/layout/Footer.module.css`

---

### Task 3: Hero Section with Atmospheric Forest Cabin Visuals & Quick Booking Widget

**Files:**
- Create: `echo-house-rental/src/components/sections/Hero.tsx`
- Create: `echo-house-rental/src/components/sections/Hero.module.css`

---

### Task 4: Interactive Houses Switcher (A-Frame vs Family Chalet)

**Files:**
- Create: `echo-house-rental/src/data/housesData.ts`
- Create: `echo-house-rental/src/components/houses/HouseSwitcher.tsx`
- Create: `echo-house-rental/src/components/houses/HouseSwitcher.module.css`
- Create: `echo-house-rental/src/components/houses/HouseGalleryModal.tsx`

---

### Task 5: Interactive Booking Engine & Cost Calculator

**Files:**
- Create: `echo-house-rental/src/utils/bookingCalculator.ts`
- Create: `echo-house-rental/src/components/booking/BookingCalculator.tsx`
- Create: `echo-house-rental/src/components/booking/BookingCalculator.module.css`

---

### Task 6: Spa Rituals (Hot Siberian Vat & Sauna), Atmosphere & Photo Spots

**Files:**
- Create: `echo-house-rental/src/data/spaData.ts`
- Create: `echo-house-rental/src/components/sections/SpaSection.tsx`
- Create: `echo-house-rental/src/components/sections/SpaSection.module.css`
- Create: `echo-house-rental/src/components/sections/AtmosphereGallery.tsx`
- Create: `echo-house-rental/src/components/sections/AtmosphereGallery.module.css`

---

### Task 7: House Rules, FAQ & Interactive Yandex Map Location

**Files:**
- Create: `echo-house-rental/src/data/faqRulesData.ts`
- Create: `echo-house-rental/src/components/sections/RulesAndFAQ.tsx`
- Create: `echo-house-rental/src/components/sections/RulesAndFAQ.module.css`
- Create: `echo-house-rental/src/components/sections/LocationMap.tsx`
- Create: `echo-house-rental/src/components/sections/LocationMap.module.css`

---

### Task 8: Telegram Booking API (`/api/booking`), SEO Schema.org & Verification

**Files:**
- Create: `echo-house-rental/src/utils/telegramBooking.ts`
- Create: `echo-house-rental/src/app/api/booking/route.ts`
- Create: `echo-house-rental/src/components/seo/JsonLd.tsx`
- Modify: `echo-house-rental/src/app/page.tsx`
- Create: `echo-house-rental/.github/workflows/deploy.yml`
- Create: `echo-house-rental/README.md`
