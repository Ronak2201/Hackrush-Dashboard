# HackRush 2026: Real-Time Hackathon Analytics & Command Center

A high-performance single-page real-time analytics dashboard for **HackRush 2026** (organized by **Tech4Hack, IGDTUW** in partnership with **Unstop**). Built with responsive dark/light mode, live simulation telemetry, stage funnel progression (Register → 80 → 30 → Win), interactive SVG charts, track distribution metrics, and a team submission inspector.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The clarification questions were skipped. We have adopted the highest-fidelity defaults based directly on the provided poster materials:
> 1. **Dual Perspective Architecture**: A unified single-page dashboard featuring an interactive toggle between **Organizer Command Center** (deep metrics, stage evaluation, submission review) and **Hacker & Public Portal** (live countdown, stage progress, track breakdown, awards showcase).
> 2. **Real-Time Telemetry Engine**: Built-in live stream simulator that periodically generates realistic team registrations, track submissions, and review velocity with toggleable pause/resume and speed controls.
> 3. **Faithful Visual Identity**: Tech4Hack cobalt/electric blue `#1E40AF` / `#2563EB` paired with Unstop-inspired amber/gold accents, crisp neutral surfaces, clean typographic hierarchy, and strict dual-mode light/dark styling without pill clutter.

- **Confirmed Decision 1**: All 5 official tracks from the poster are first-class analytic dimensions:
  1. *AI, Machine Learning & Generative AI*
  2. *Fintech & Blockchain*
  3. *HealthTech & Biotech*
  4. *Cybersecurity & Digital Safety*
  5. *Smart Cities & Sustainability*
- **Confirmed Decision 2**: Funnel stages directly mirror the announcement poster:
  `Registrations Open` (Nov 9) $\rightarrow$ `Idea/PPT Phase` $\rightarrow$ `Top 80 Shortlist` (Nov 18) $\rightarrow$ `Mentorship Round` (Nov 19-20) $\rightarrow$ `Top 30 Finalists` (Nov 21) $\rightarrow$ `Online Finale` (Nov 22) $\rightarrow$ `Result Declaration` (Nov 25) $\rightarrow$ `IGDTUW Offline Ceremony`.
- **Confirmed Decision 3**: Special awards tracked in telemetry: *1st, 2nd, 3rd Position*, *Best Female Team* (highlighting IGDTUW's women-in-STEM leadership), and *Most Promising Startup Idea*.

---

## 1. Overview & Core Concept

### What It Does
An interactive operations and analytics cockpit for HackRush 2026. Organizers, mentors, judges, and participants can monitor live hackathon health, track team submissions across the 5 technical themes, simulate real-time team registrations, review stage conversion rates, filter teams by evaluation status, and view key milestones.

### Target Audience & Personas
- **Organizing Committee (Tech4Hack IGDTUW)**: Track incoming idea submissions, verify team composition (3–6 members), filter submissions by university/domain, advance shortlisted teams across stages (All $\rightarrow$ 80 $\rightarrow$ 30 $\rightarrow$ Winners), and export data.
- **Hackathon Participants & Mentors**: Check stage timelines, live countdowns, track distribution stats, and award perks.

### Key Value Delivered
- **Zero Latency & Live Telemetry**: Live incoming registration ticker, activity rate graph, and interactive filters.
- **Visual Funnel Management**: Clear graphical visualization of the 80-to-30 selection pipeline.
- **High-Aesthetic Dual Theme**: Flawless light and dark modes with proper Tailwind `@custom-variant dark` support, accessible contrast, and zero AI-slop cliches.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Top Bar & Global Controls**:
   - Wordmark brand lockup with official IGDTUW Tech4Hack identity.
   - Quick navigation anchor links (*Analytics*, *Stage Funnel*, *Tracks & Themes*, *Teams & Submissions*, *Awards & Timeline*).
   - Real-time simulation status toggle (*Live Feed: Active / Paused*, *Simulate New Team* button).
   - Theme switch (*Dark Mode* / *Light Mode*) with smooth transitions and system preference detection.

2. **Hero Metric KPI Strip**:
   - 4 high-signal KPI cards with tabular figures:
     - **Total Registered Teams** (e.g. `482 Teams` / `1,840 Hackers`, team size averaging 3.8).
     - **Idea / PPT Submissions** (with conversion % against deadline Nov 16).
     - **Active Funnel Stage** (Current phase indicator with countdown timer to next milestone).
     - **Female Participation Rate** (e.g. `48.6%`, celebrating IGDTUW's flagship initiative).

3. **Stage Funnel Interactive Progression**:
   - Graphic step ladder mirroring the poster graphic:
     `REGISTER` ($480+$ teams) $\longrightarrow$ `TOP 80` (Idea shortlist) $\longrightarrow$ `TOP 30` (Mentored finalists) $\longrightarrow$ `WINNERS` (Top 3 + Best Female Team + Best Startup).
   - Clickable stages that filter the data grid below to show teams in that specific qualification tier.

4. **Interactive Data Visualizations (Custom Responsive SVGs)**:
   - **Track Distribution Chart**: Donut chart & horizontal distribution bars showing breakdown across the 5 themes (AI/GenAI, Fintech, HealthTech, CyberSafety, Smart Cities).
   - **Submission Velocity & Activity Sparkline**: 24-hour timeline graph displaying submission pacing, peak bursts, and mentor review count.
   - **Participant Demographics Matrix**: Degree/stream distribution (Undergrad, Postgrad, B-School/Management, Engineering).

5. **Live Team Submissions Explorer & Management Table**:
   - High-density data grid with search input, track filter, stage badge filter, and sort options.
   - Team cards/rows showing: Team Name, Track, Member Count (3–6), College/University, Submission Status, Score/Rank, and Stage (`Registered`, `Top 80`, `Top 30`, `Podium`).
   - Quick action to advance a team or view PPT pitch deck summary modal.

6. **Official Stages, Timeline & Awards Drawer**:
   - Chronological roadmap from Monday Nov 9 to Nov 25 award ceremony.
   - Recognition spotlight detailing cash/credits, internship opportunities, and goodies.

### Visual Identity & Theme Tokens
- **Canvas Neutrals**:
  - Light Mode: `#F8FAFC` (Slate 50 canvas), `#FFFFFF` (Surface), `#E2E8F0` (Hairline border).
  - Dark Mode: `#0B0F19` (Deep obsidian canvas), `#131B2E` (Layer-1 card surface), `#1E293B` (Border).
- **Brand Accents (Tech4Hack + Unstop Inspired)**:
  - Electric Tech Blue: `#2563EB` (Primary brand CTA and active highlights).
  - Competition Gold: `#F59E0B` (Stage step win accent, trophies, awards).
  - Cyan / Neon Violet: `#06B6D4` / `#8B5CF6` (Used strictly in chart categorical encoding).
- **Typography**:
  - Display & Headings: `Plus Jakarta Sans` / `Outfit` (Geometric, clean, modern).
  - Body & Microcopy: `Plus Jakarta Sans` with strict `text-wrap: balance` and unboxed metadata separators (`·`).
  - Numbers & Metrics: `font-mono tabular-nums` (`JetBrains Mono` / monospace stack).
- **Dual-Theme Rigor**:
  - `@custom-variant dark (&:where(.dark, .dark *));` declared in global CSS.
  - Zero `!important` color hacking.
  - Every text color has a paired `dark:text-...` and every container has a paired `dark:bg-...`.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Client-Side Telemetry Simulation vs Static Mock Data**:
  - *Chosen Approach*: Implement a lightweight client-side live telemetry engine that simulates real-time stream events (new team registrations, PPT uploads, judging scores) with a pause/resume toggle and interactive "Add Team" action.
  - *Why*: Gives true real-time dashboard dynamics, animations, and counters without requiring backend servers or external API dependencies.
- **Decision 2: Lightweight SVG Visualizations over Bulky Heavy Chart Libraries**:
  - *Chosen Approach*: High-performance interactive SVG components (Donut/Pie, Multi-series Area chart, Funnel bars) with tooltips and smooth transitions.
  - *Why*: Zero dependency bloat, guaranteed fast load, perfect responsiveness, exact control over light/dark theme contrast, and crisp vector rendering.
- **Decision 3: Zero-Pill Design Discipline**:
  - *Chosen Approach*: Replace pill badges on cards with quiet, unboxed metadata (`AI Track · 4 Members · IGDTUW`) and reserve bordered buttons strictly for clickable filters.
  - *Why*: Prevents visual clutter and eliminates the stereotypical "AI-generated dashboard" look.

---

## 4. Technical Architecture & Data Strategy

### System & Component Architecture Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                        App.tsx (Root Provider)                         │
│  - Theme State (Dark/Light toggle with html.dark class management)     │
│  - Telemetry State Store (Teams, Funnel Counts, Live Event Log)        │
│  - Simulation Interval Hook (Auto-stream generator with pause/resume)  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
       ┌────────────────────────────┼────────────────────────────┐
       ▼                            ▼                            ▼
┌──────────────┐          ┌───────────────────┐        ┌──────────────────┐
│  Navbar.tsx  │          │   HeroBanner.tsx  │        │   KpiStrip.tsx   │
│ - Brand Logo │          │ - Poster Graphic  │        │ - 4 Key Gauges   │
│ - Live Mode  │          │ - HackRush Title  │        │ - Tabular nums   │
│ - Theme Sw.  │          │ - Countdown Clock │        │ - Trend delta    │
└──────────────┘          └───────────────────┘        └──────────────────┘
       │
       ├────────────────────────────┬────────────────────────────┐
       ▼                            ▼                            ▼
┌───────────────────┐     ┌───────────────────┐        ┌──────────────────┐
│  FunnelStage.tsx  │     │   ChartsGrid.tsx  │        │  TeamsTable.tsx  │
│ - Step Ladder     │     │ - Track Donut     │        │ - Search & Filter│
│ - Stage Filter    │     │ - Submission Area │        │ - Stage Changer  │
│   (All/80/30/Win) │     │ - Gender/Stream   │        │ - PPT Details    │
└───────────────────┘     └───────────────────┘        └──────────────────┘
       │
       ▼
┌────────────────────────────────────────────────────────────────────────┐
│                      TimelineAndAwardsModal.tsx                        │
│ - 9 Official Event Stages (Nov 9 to Nov 25)                            │
│ - Awards Showcase (Internships, Credits, Goodies, Best Female Team)    │
└────────────────────────────────────────────────────────────────────────┘
```

### State Store Structure
```typescript
interface TeamRecord {
  id: string;
  name: string;
  leadName: string;
  college: string;
  track: 'AI & GenAI' | 'Fintech' | 'HealthTech' | 'Cybersecurity' | 'Smart Cities';
  membersCount: number; // 3 to 6
  femaleMembersCount: number;
  educationLevel: 'Undergraduate' | 'Postgraduate' | 'Engineering' | 'Management';
  stage: 'Registered' | 'Submitted' | 'Top 80' | 'Top 30' | 'Winner';
  awardCategory?: 'First' | 'Second' | 'Third' | 'Best Female Team' | 'Startup Idea';
  submittedAt: string;
  score: number;
  pitchTitle: string;
}
```

### Interactive State Flows
1. **Funnel Interaction**: Clicking any step in the funnel (e.g. `Top 80`) filters the team registry immediately and highlights that stage's conversion rate.
2. **Track Filter**: Clicking any segment in the Track Donut or category chips filters the view to teams in that category.
3. **Live Simulator**: Clicking "Simulate Team" inserts a newly generated registered team, ripples up the KPI count, updates the submission velocity chart, and scrolls into the live event feed.
4. **Theme Switch**: Toggling dark/light updates the document class and re-renders SVG chart stroke/fill palettes instantly without page reload.
