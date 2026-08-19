# Implementation Plan: 4 Service Landing Pages (Door Install, Demolition, Handyman, Electrical)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create 4 simple, fast, and high-converting standalone Next.js 15 landing pages in `services/`:
1. `services/door-install` — Установка межкомнатных дверей
2. `services/demolition-service` — Демонтажные работы
3. `services/handyman-service` — Муж на час
4. `services/electrical-service` — Электромонтаж

**Tech Stack:** Next.js 15 (React 19, TypeScript), CSS Modules, Lucide React, Zod, static export support for GitHub Pages.

---

### Task 1: Create `services/door-install` (Установка дверей)
- [ ] Setup package.json, next.config.mjs, tsconfig.json
- [ ] Create layout, globals.css (warm wood theme `#C08244`, `#1B201E`)
- [ ] Create Header, Hero, DoorCalculator (doors count, invisible/standard, lock routing, discounts), PriceList, Workflow, FAQ, Footer
- [ ] Build & verify

---

### Task 2: Create `services/demolition-service` (Демонтажные работы)
- [ ] Setup package.json, next.config.mjs, tsconfig.json
- [ ] Create layout, globals.css (industrial theme `#E57A22`, `#161616`)
- [ ] Create Header, Hero, DemolitionCalculator (area, wall demolition, floor screed, debris disposal), PriceList, Equipment showcase, FAQ, Footer
- [ ] Build & verify

---

### Task 3: Create `services/handyman-service` (Муж на час)
- [ ] Setup package.json, next.config.mjs, tsconfig.json
- [ ] Create layout, globals.css (clean electrician/handyman blue `#2563EB`, `#0F172A`)
- [ ] Create Header, Hero, HandymanCalculator (plumbing, furniture assembly, wall mounting, electrical repairs), Fast Dispatch banner, FAQ, Footer
- [ ] Build & verify

---

### Task 4: Create `services/electrical-service` (Электромонтажные работы)
- [ ] Setup package.json, next.config.mjs, tsconfig.json
- [ ] Create layout, globals.css (electric amber/indigo theme `#F59E0B`, `#0F172A`)
- [ ] Create Header, Hero, ElectricalCalculator (rooms count, rewiring, panel assembly, sockets), Standards/GOST badges, FAQ, Footer
- [ ] Build & verify

---

### Task 5: Summary, showcase images & verification
- [ ] Verify builds for all 4 services
- [ ] Generate portfolio case study text and previews
