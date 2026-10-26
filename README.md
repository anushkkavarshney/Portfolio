# Anushka Varshney — Software Engineer & AI Builder Portfolio

A modern, high-performance personal engineering portfolio and interactive project laboratory built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lenis Smooth Scroll**.

---

## 🌟 Key Features

1. **Kinetic Hero Typography & Calligraphy SVG:**
   - Dynamic landing headline: **"Software Engineer & AI Builder"**.
   - Custom SVG signature calligraphy for **"Engineer"** rendered in the cursive *Great Vibes* typography with dynamic stroke-dashoffset drawing animation, neon gradient glow, and a cursive flourish underline.

2. **The Playbook (16 Projects Showcase):**
   - **Major Projects (5 Flagships):**
     - **iClaim:** Full-stack insurance claim automation platform with 3-tier RBAC (Customer, Agent, Admin) and multimodal Gemini API / OCR verification.
     - **MedRepSumm:** Clinical report summarizer using fine-tuned T5 & BART transformers on 67,000+ MIMIC-III records (ROUGE-1: 0.42).
     - **Token-Based Payments:** Cryptographic prepaid token lifecycle with PIN protection, QR redemption, and live wallet locking.
     - **Multi-Agent Social Media AI Company:** Autonomous LangChain/CrewAI multi-agent orchestration with specialized roles and HITL guardrails.
     - **IP-SAKTI:** Evidence-grounded Ayurvedic patent & traditional knowledge research assistant with BM25 retrieval and confidence scoring.
   - **Moderate Projects (7 Practical Systems):**
     - **Mansik-Seva:** Multilingual mental health assessment companion (PHQ-9 & GAD-7) with sentiment analysis.
     - **EMS:** Employee Management System with complete CRUD, filtering, and role-based administrative access.
     - **E-Cell IGDTUW Website:** Official entrepreneurship portal engineered as Web Dev Head.
     - **Trend Radar:** Automated news and trend signal ingestion pipeline with APScheduler and SimHash deduplication.
     - **E-Summit:** Conference portal with dynamic tracks, speaker spotlights, and registration.
     - **Portfolio (Current):** Modern single-page React app with 60fps Lenis scroll and modal case studies.
     - **Portfolio-2024:** Archived historical design exploration.
   - **Minor Projects & Experiments (3 Labs):**
     - **BMI Calculator:** Real-time state-driven health gauge and category visualizer.
     - **Chrome Dino Game Clone:** Canvas physics loop with AABB collision detection and high score tracking.
     - **Tower of Hanoi:** Interactive recursive problem decomposition and step solver.

3. **Interactive Project Deep-Dive Modal:**
   - Click **"Deep-Dive"** or **"Explore Case Study"** on any project to open a full-screen drawer detailing the architecture pipeline, key highlights, tech stack breakdown, metrics, and GitHub repository links.

4. **Interactive Search & Tag Matrix:**
   - Instant search across all 16 projects by keyword, technology, or title.
   - Category filtering (`All`, `Major`, `Full-Stack & Platforms`, `Mini Labs & Games`) and quick tech tag pills (`React`, `Python`, `FastAPI`, `Transformers`, `Gemini`, `Node.js`, `MongoDB`, `LangChain`).

5. **60fps Butter-Smooth Scroll:**
   - Powered by Lenis for fluid inertia scrolling without breaking native anchor link navigation (`#home`, `#work`, `#playbook`, `#experience`, `#skills`, `#footer`).

6. **Interactive Contact & Live IST Clock:**
   - Real-time India Standard Time (IST, GMT +5:30) clock.
   - One-click copy email button with celebratory confetti feedback.
   - Direct mailto link (`anushka017btit24@igdtuw.ac.in`) and social links (LinkedIn, GitHub, Instagram).

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### Installation

```bash
# Navigate to the project directory
cd Portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
# Start Vite development server
npm run dev
```

Visit the local URL shown in your terminal (typically `http://localhost:3000` or `http://localhost:5173`).

### Building for Production

```bash
# Type check and build optimized bundle
npm run build

# Preview the production build locally
npm run preview
```

---

## 🛠️ Tech Stack

- **Framework:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Animations:** Framer Motion, Custom SVG Keyframes
- **Smooth Scroll:** Lenis Smooth Scroll
- **Icons:** Lucide React
- **Micro-Interactions:** Canvas Confetti
