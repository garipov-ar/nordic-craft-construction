# Nordic Craft Construction Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a high-converting, responsive Next.js web application for "Nordic Craft" construction company featuring an interactive dynamic cost calculator/quiz, portfolio catalog with project modals, trust sections, and a lead capture API integrated with Telegram/CRM.

**Architecture:** Next.js (App Router) with TypeScript and CSS Modules for scoped, modular styling. Server Components for SEO and initial render speed; interactive Client Components for the Quiz Calculator, Project Filters, Modals, and Accordions. Next.js Route Handler (`/api/lead`) handles lead submission with Zod validation and Telegram Bot dispatch.

**Tech Stack:** Next.js 15, React 19, TypeScript, Lucide React, Zod, CSS Modules / CSS Variables.

**Spec:** [2026-08-18-nordic-craft-construction-website-design.md](file:///x:/Portfolio/docs/superpowers/specs/2026-08-18-nordic-craft-construction-website-design.md)

## Global Constraints
- Clean Nordic / Premium Minimal visual aesthetic: warm white (`#F9FAFB`), dark slate (`#12151A`), terracotta/amber gold (`#D48B46`), pine green (`#2B4C3F`).
- Zero reliance on bloated CSS frameworks; use clean modern CSS with CSS variables and responsive clamp units.
- Full mobile, tablet, and desktop responsiveness.
- All interactive controls (buttons, inputs, sliders, modals) must have accessible attributes and descriptive IDs.
- Validated API endpoint for lead collection with realistic Telegram Bot formatting.

---

### Task 1: Project Initialization, Scaffolding & Design Tokens

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.mjs`
- Create: `src/app/layout.tsx`
- Create: `src/app/globals.css`
- Create: `src/app/page.tsx`

**Interfaces:**
- Produces: Base Next.js app structure, Google Fonts integration (Outfit & Inter), global CSS variables (colors, typography, spacing, shadows).

- [ ] **Step 1: Create package.json and install dependencies**
Initialize project with Next.js, React, Lucide React, and Zod.

- [ ] **Step 2: Create tsconfig.json and next.config.mjs**
Configure path aliases (`@/*` -> `./src/*`) and build parameters.

- [ ] **Step 3: Create globals.css with complete design tokens**
Define Nordic color palette variables, typography scales, utility classes, and reset.

- [ ] **Step 4: Create Root Layout (layout.tsx)**
Configure fonts, metadata, and HTML structure.

- [ ] **Step 5: Verify build & dev server readiness**
Run `npm run build` or Next.js check to verify clean compilation.

---

### Task 2: Core UI Components (Header, Navigation, Footer, Modals, Badges)

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Button.module.css`
- Create: `src/components/ui/Modal.tsx`
- Create: `src/components/ui/Modal.module.css`
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Header.module.css`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/Footer.module.css`

**Interfaces:**
- Produces: Reusable `Button`, `Modal`, sticky `Header` with phone/CTA, and SEO-rich `Footer`.

- [ ] **Step 1: Implement Button component**
Supports variants: `primary` (terracotta/amber), `secondary` (slate/dark), `outline`, `ghost`, and sizes `sm`, `md`, `lg`.

- [ ] **Step 2: Implement accessible Modal component**
Backdrop blur, escape key handling, lock body scroll when open, close button.

- [ ] **Step 3: Implement Header navigation**
Sticky bar with brand logo, smooth scroll anchor links, phone number, online status badge, and "Рассчитать стоимость" CTA button.

- [ ] **Step 4: Implement Footer**
Company credentials, requisites, links to catalog categories, phone, address, and copyright.

---

### Task 3: Hero Section & Trust Indicators

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/Hero.module.css`
- Create: `src/components/sections/TrustStats.tsx`
- Create: `src/components/sections/TrustStats.module.css`

**Interfaces:**
- Produces: High-impact hero screen with value proposition, quick metrics (140+ домов, 10 лет гарантии, 0 руб. переплат), and trigger to scroll directly to the quiz.

- [ ] **Step 1: Implement Hero component**
Headline, badge "Скандинавские технологии строительства", dual CTA buttons ("Рассчитать стоимость онлайн", "Смотреть проекты"), social proof avatars.

- [ ] **Step 2: Implement TrustStats component**
4 key trust metrics with icons (12 лет опыта, 140+ сданных объектов, 10 лет гарантии по договору, 0% скрытых расходов).

---

### Task 4: Interactive Quiz-Calculator (Core Conversion Feature)

**Files:**
- Create: `src/data/quizData.ts`
- Create: `src/utils/calculator.ts`
- Create: `src/components/quiz/QuizCalculator.tsx`
- Create: `src/components/quiz/QuizCalculator.module.css`
- Create: `src/components/quiz/QuizStepType.tsx`
- Create: `src/components/quiz/QuizStepArea.tsx`
- Create: `src/components/quiz/QuizStepPackage.tsx`
- Create: `src/components/quiz/QuizStepExtras.tsx`
- Create: `src/components/quiz/QuizStepLead.tsx`

**Interfaces:**
- Consumes: `Button`, `calculator.ts` calculation logic.
- Produces: Interactive 5-step estimator with dynamic price recalculation and instant lead capture.

- [ ] **Step 1: Define Quiz data structures and calculation engine**
Implement `calculateEstimate(options)` supporting base price per m², building technology multipliers (газобетон, фахверк, каркас, кирпич), package tier (Теплый контур, White Box, Под ключ), and additional options (терраса, гараж, сауна).

- [ ] **Step 2: Implement Quiz Steps**
  - Step 1: Technology selection with rich visual cards.
  - Step 2: Area slider (80–400 m²) & Floors (1, 1.5, 2, 3).
  - Step 3: Package tier selection with detailed inclusions.
  - Step 4: Add-on checkboxes (терраса, навес, сауна, ландшафт).
  - Step 5: Final calculation summary with discount timer/bonus and contact form (Name, Phone, Preferred messenger).

- [ ] **Step 3: Implement Quiz state management & submission flow**
Smooth transitions between steps, validation of inputs, and async dispatch to `/api/lead`.

---

### Task 5: Projects / Portfolio Catalog with Filters and Detail Modal

**Files:**
- Create: `src/data/projectsData.ts`
- Create: `src/components/projects/ProjectsCatalog.tsx`
- Create: `src/components/projects/ProjectsCatalog.module.css`
- Create: `src/components/projects/ProjectCard.tsx`
- Create: `src/components/projects/ProjectDetailModal.tsx`

**Interfaces:**
- Produces: Interactive projects grid with category filtering (Все, Одноэтажные, Двухэтажные, Фахверк, Премиум), project cards with specs (м², спальни, срок, цена), and detail modal with layout blueprints and specifications.

- [ ] **Step 1: Create rich project dataset (`projectsData.ts`)**
Include 6+ realistic modern construction projects with images, dimensions, floorplans, building times, materials, and prices.

- [ ] **Step 2: Implement ProjectCard component**
Image preview, category tag, spec icons (area, rooms, bathrooms, timeline), price badge, and "Подробнее" button.

- [ ] **Step 3: Implement ProjectsCatalog with filter tabs**
Animated category switching, project count indicators, and search/filter logic.

- [ ] **Step 4: Implement ProjectDetailModal**
Full specifications, floorplans preview, list of included works, and "Заказать данный проект" CTA button.

---

### Task 6: Services, Construction Roadmap, Guarantees & FAQ

**Files:**
- Create: `src/data/contentData.ts`
- Create: `src/components/sections/Services.tsx`
- Create: `src/components/sections/Services.module.css`
- Create: `src/components/sections/ProcessTimeline.tsx`
- Create: `src/components/sections/ProcessTimeline.module.css`
- Create: `src/components/sections/Guarantees.tsx`
- Create: `src/components/sections/Guarantees.module.css`
- Create: `src/components/sections/FAQ.tsx`
- Create: `src/components/sections/FAQ.module.css`
- Create: `src/components/sections/ConsultationCTA.tsx`

**Interfaces:**
- Produces: Transparent pricing section, 6-stage construction process timeline, quality control guarantees, interactive FAQ accordion, and bottom consultation form.

- [ ] **Step 1: Implement Services section**
Cards for Architectural Design, Turnkey Construction, Engineering Systems, and Interior Finishing.

- [ ] **Step 2: Implement ProcessTimeline component**
Step-by-step interactive roadmap from initial geological survey to key handover with warranty book.

- [ ] **Step 3: Implement Guarantees & Quality Control block**
24/7 video monitoring on site, fixed price guarantee in contract, independent technical supervision.

- [ ] **Step 4: Implement FAQ interactive accordion**
Expandable questions about mortgages (Escrow), warranties, cost overrun protection, and construction timelines.

- [ ] **Step 5: Implement ConsultationCTA section**
Fast contact form for direct consultation with a chief engineer.

---

### Task 7: API Route (`/api/lead`) & Telegram / CRM Webhook Handler

**Files:**
- Create: `src/app/api/lead/route.ts`
- Create: `src/utils/telegram.ts`

**Interfaces:**
- Produces: `POST /api/lead` receiving quiz submissions or contact requests, validating via Zod, and dispatching formatted messages to Telegram / CRM with logging.

- [ ] **Step 1: Define Zod validation schemas**
Validate name, phone (Russian/international regex), quiz parameters (technology, area, finish, options, calculated price), and source.

- [ ] **Step 2: Implement Telegram Notification Formatter (`telegram.ts`)**
Format leads into clear HTML/Markdown with emojis, bold headers, and full parameter breakdown. If `TELEGRAM_BOT_TOKEN` & `TELEGRAM_CHAT_ID` exist in env, send HTTP request to Telegram API; otherwise log lead to console with debug metadata.

- [ ] **Step 3: Implement Route Handler (`route.ts`)**
Handle POST requests, validate payload, call notification dispatcher, handle errors gracefully, and return standard JSON response `{ success: true, leadId: string }`.

---

### Task 8: Integration, SEO Metadata, Schema.org & Final Verification

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/layout.tsx`
- Create: `src/components/seo/JsonLd.tsx`

**Interfaces:**
- Produces: Assembled landing page, complete Schema.org JSON-LD microdata, OpenGraph tags, and verified production build.

- [ ] **Step 1: Assemble full landing page in `src/app/page.tsx`**
Combine Hero, TrustStats, QuizCalculator, ProjectsCatalog, Services, ProcessTimeline, Guarantees, FAQ, ConsultationCTA, Header, and Footer.

- [ ] **Step 2: Implement Schema.org JSON-LD structured data**
Add `Organization`, `RealEstateListing`, and `FAQPage` schemas for search engines.

- [ ] **Step 3: Run production build and test verification**
Execute `npm run build` to ensure zero type errors and clean static generation.
