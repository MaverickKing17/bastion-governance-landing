# Bastion Audit — Enterprise AI Security Platform
## Premium SaaS Landing Page & Sandbox Control Plane

Welcome to the **Bastion Audit** repository. This project is a production-ready, high-fidelity React and Tailwind CSS single-page marketing website built to premium enterprise SaaS standards (comparable to Vercel, Supabase, and Wiz). It communicates high institutional trust, developer credibility, and AI governance maturity for highly regulated industries like financial services.

---

## 🎨 Design System & Aesthetic Choices

- **Primary Background**: `#071524` (`bg-slate-950`) — Representing enterprise infrastructure and security operations trust.
- **Card backgrounds**: `#131E2B` (`bg-slate-800`) — Providing subtle structural depth.
- **Brand Accent**: `#0284c7` (`sky-600`) — Primary CTA and interactive indicator colors.
- **Highlights**: `#22d3ee` (`cyan-400`) — Focused data indicators, micro-alerts, and telemetry status dots.
- **Typography**: Paired **Inter** for clean headings and UI text with **JetBrains Mono** for low-latency metric schemas and live security trails.
- **Aesthetic Boundaries**: Strictly avoids unpolished cyberpunk styles, excessive neon, or gaming visuals in favor of clean, enterprise-grade dark minimalism.

---

## 🏛️ Page Architecture

The single-page application is structured into **six major cohesive sections**:

1. **Navigation Header**: Transparent backdrop blur with minimal brand logos, compliance framework chips (OSFI E-21, PIPEDA, AIDA, SOC2), and sticky layout routing.
2. **Hero Component**: Displays a bold, high-contrast headline (*"The AI Control Plane for Autonomous Agents"*), executive-focused supporting copy, and direct sandbox action buttons.
3. **Interactive Product Demonstration**: Contains a high-fidelity **AI Control Plane Sandbox** mimicking a real browser operations deck. Users can rotate jurisdictions, trigger interactive breach simulations (prompt injections, PII leaks), and observe real-time automated quarantining.
4. **Enterprise Architecture**: Two-column layout detailing the **Dual-Engine Enforcement Architecture** with an interactive layout diagram of the security pipeline from agent containers to signed audit evidence logs.
5. **Open Source Trust Layer**: Terminal-style installation cards highlighting `@bastion/guard-telemetry` to showcase developer transparency and code integrity.
6. **Private Beta Cohort**: Minimalist, high-intent enterprise intake form designed for financial partner onboarding.

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── Navbar.tsx             # Sticky top navigation & mobile menu
│   ├── Hero.tsx               # Primary landing display & core statistics
│   ├── DemoShowcase.tsx       # Interactive sandbox application wrapper
│   ├── TopNav.tsx             # Interactive dashboard operations header
│   ├── Sidebar.tsx            # Jurisdiction selector & status logs
│   ├── MetricCards.tsx        # KPI bento grids (Score, Exposure, Interventions)
│   ├── RiskHeatMap.tsx        # LLM threat vector/business unit risk grid
│   ├── CorporateWorkforce.tsx # Org agent hierarchy and inline configuration profile
│   ├── IncidentTimeline.tsx   # Live ledger feed and interactive threat injector
│   ├── KillSwitchModal.tsx    # Emergency diagnostic modal for locking gateways
│   └── BetaForm.tsx           # High-intent private sandbox signup form
├── types.ts                   # Unified TypeScript definitions & schemas
├── mockData.ts                # Scenario configurations & initial system state
├── App.tsx                    # Main app coordinator with single-page scroll controller
├── main.tsx                   # StrictMode React entry point
└── index.css                  # Typography imports, Tailwind config, and scrollbar styles
```

---

## 🚀 Local Development

To install dependencies and start the development server:

```bash
# Install core dependencies
npm install

# Run the development server
npm run dev

# Compile production-ready bundles
npm run build
```
