export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'major' | 'moderate' | 'minor';
  badge: string;
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  year: string;
  featured?: boolean;
  description: string;
  keyHighlights: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    ai_ml?: string[];
    database?: string[];
    security_auth?: string[];
    tools?: string[];
  };
  metrics?: { label: string; value: string }[];
  architectureSummary?: string;
}

export const PROJECTS: Project[] = [
  // ==================== MAJOR PROJECTS ====================
  {
    id: "iclaim",
    title: "iClaim — Insurance Claim Automation Platform",
    subtitle: "Enterprise Claims Processing & OCR Document Verification",
    category: "major",
    featured: true,
    badge: "Full-Stack + AI",
    year: "2025",
    image: "/assets/iclaim.png",
    githubUrl: "https://github.com/anushkkavarshney/iClaim",
    description: "A comprehensive role-based insurance automation portal designed to eliminate manual bottlenecks. Features dedicated workflows for Customers, Claims Agents, and Underwriter Admins, incorporating multimodal AI and OCR for automated policy document verification and claim assessment.",
    keyHighlights: [
      "Three-tier Role Based Access Control (RBAC): Customers submit claims and upload documents, Agents inspect AI-extracted medical records, and Admins oversee payouts.",
      "Automated document extraction and semantic validation pipeline leveraging Gemini API & OCR to structure unstructured hospital bills and policy forms.",
      "Accelerated approval processing by reducing manual document review times across 1,000+ simulated claims with 99% data parsing accuracy.",
      "Secure multipart file handling via Multer, cryptographic JWT authentication, and strict validation middleware."
    ],
    techStack: {
      frontend: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "Lucide Icons"],
      backend: ["Node.js", "Express.js", "REST APIs"],
      ai_ml: ["Google Gemini API", "OCR Text Extraction", "Document Intelligence"],
      database: ["MongoDB", "Mongoose ODM"],
      security_auth: ["JWT Auth", "RBAC Authorization", "Multer File Security"]
    },
    metrics: [
      { label: "Accuracy", value: "99% Extraction" },
      { label: "Workflow Speed", value: "3x Faster Approval" },
      { label: "Roles Handled", value: "3 Distinct Portals" }
    ],
    architectureSummary: "Client (React + Vite) connects to Express REST APIs. Multer buffers uploaded invoices into local/cloud storage, triggering the Gemini-powered OCR pipeline for field extraction. Extracted entities are stored in MongoDB and routed to agent validation queues."
  },
  {
    id: "medrepsum",
    title: "MedRepSumm — Medical Report Summarization",
    subtitle: "Clinical NLP & Transformer-Powered Report Condensation",
    category: "major",
    featured: true,
    badge: "AI/NLP Research",
    year: "2025",
    image: "/assets/medrepsum.png",
    githubUrl: "https://github.com/anushkkavarshney/MedRepSumm",
    description: "An AI-powered clinical report summarization system built to translate dense, multi-page diagnostic and discharge summaries into concise, actionable briefs for patients and medical staff.",
    keyHighlights: [
      "Fine-tuned Seq2Seq Transformers (T5 & BART) optimized for clinical nomenclature and discharge summarization.",
      "Trained and evaluated on 67,000+ MIMIC-III clinical records with integrated de-identification (HIPAA compliance) pipeline.",
      "Achieved a validated ROUGE-1 recall of 0.42, outperforming baseline extractive algorithms (0.25).",
      "High-throughput asynchronous inference API implemented with Python and FastAPI, supported by MongoDB Atlas for caching patient summaries."
    ],
    techStack: {
      frontend: ["React.js", "Tailwind CSS", "Axios"],
      backend: ["Python", "FastAPI", "Uvicorn"],
      ai_ml: ["Hugging Face Transformers", "T5", "BART", "PyTorch", "NLP Pipelines"],
      database: ["MongoDB Atlas"],
      security_auth: ["JWT Authentication", "OAuth 2.0", "PHI De-identification"]
    },
    metrics: [
      { label: "ROUGE-1 Score", value: "0.42 (vs 0.25 Base)" },
      { label: "Dataset Size", value: "67,000+ MIMIC-III" },
      { label: "Latency", value: "<1.2s Inference" }
    ],
    architectureSummary: "React frontend accepts uploaded raw clinical PDFs or text. FastAPI orchestrates PyTorch/HuggingFace Transformer inference in an isolated worker, caching generated summaries in MongoDB Atlas."
  },
  {
    id: "tokenized-payments",
    title: "Token-Based Payments (Paytm Tokenization Demo)",
    subtitle: "Full-Stack Prepaid Token Architecture & QR Wallet System",
    category: "major",
    featured: true,
    badge: "FinTech & Security",
    year: "2025",
    githubUrl: "https://github.com/anushkkavarshney/paytm_tokenization",
    description: "A secure prepaid token lifecycle application illustrating cryptographic token creation, PIN-authorized actions, QR-based contactless redemption, and dynamic wallet locking.",
    keyHighlights: [
      "End-to-end token state management: Token Creation -> Hashing & Encryption -> Expiration & Lock -> QR Scan -> Redemption.",
      "PIN-protected authorization barrier ensuring transactions cannot be forged or replayed.",
      "Real-time wallet locking mechanism to mitigate fraud and unauthorized multi-spend attacks.",
      "Live immutable ledger tracking complete transaction history with database rollback safety."
    ],
    techStack: {
      frontend: ["React", "CSS Modules", "HTML5 QR Scanner"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB", "Mongoose"],
      security_auth: ["Bcrypt PIN Hashing", "Cryptographic Nonce", "Atomic DB Transactions"]
    },
    metrics: [
      { label: "Security Level", value: "PIN & QR Protected" },
      { label: "Ledger", value: "Real-time Auditing" },
      { label: "Latency", value: "<150ms Validation" }
    ],
    architectureSummary: "Client requests unique token generation. Node backend generates a cryptographically signed non-reusable token saved in MongoDB with expiration timestamps. Redemption is authenticated via PIN verification and QR decoding."
  },
  {
    id: "multi-agent-ai",
    title: "Multi-Agent Social Media AI Company",
    subtitle: "Autonomous Agent Orchestration for Social Media Marketing",
    category: "major",
    featured: true,
    badge: "Agentic AI",
    year: "2025",
    githubUrl: "https://github.com/anushkkavarshney/Multi-Agent-Social-Media-AI-Company",
    description: "An advanced multi-agent orchestration architecture where specialized autonomous LLM agents collaborate to plan, research, write, audit, and schedule targeted social media campaigns.",
    keyHighlights: [
      "Specialized agent hierarchy: Strategist Agent, Content Researcher Agent, Copywriter Agent, and Quality Assurance Agent.",
      "Shared state management and dynamic task handoffs ensuring reliable multi-turn reasoning without context degradation.",
      "Automated tool calling for web trend lookup, sentiment scoring, and hashtag analytics with a Human-in-the-Loop (HITL) approval gate.",
      "Resilient error-recovery pipeline preventing agent hallucination loops and ensuring brand tone compliance."
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Python", "FastAPI"],
      ai_ml: ["LangChain", "CrewAI", "OpenAI / Gemini API", "Vector Embeddings"],
      database: ["ChromaDB", "MongoDB Atlas"],
      security_auth: ["API Key Encryption", "Human-in-the-loop Guardrails"]
    },
    metrics: [
      { label: "Agent Roles", value: "4 Autonomous Agents" },
      { label: "Handoff Reliability", value: "99.4%" },
      { label: "Content Generation", value: "Multi-Platform" }
    ],
    architectureSummary: "Supervisor agent receives campaign brief, decomposes tasks into directed graphs (DAG), delegates to researcher and copywriter subagents, and triggers human approval before post dispatch."
  },
  {
    id: "ip-sakti",
    title: "IP-SAKTI — Patent & Traditional Knowledge AI",
    subtitle: "Evidence-Grounded Ayurvedic Patent Research Assistant",
    category: "major",
    featured: true,
    badge: "AI Productivity & Research",
    year: "2025",
    githubUrl: "https://github.com/anushkkavarshney/IP-SAKTI",
    description: "An intelligent intellectual property research platform focused on Ayurvedic patents, traditional knowledge preservation, biodiversity benefit-sharing, and verifiable prior-art discovery.",
    keyHighlights: [
      "Dual retrieval pipeline pairing BM25 keyword matching with dense semantic embeddings for high-precision patent retrieval.",
      "Confidence-based verification engine that categorizes claims into Supported, Partially Supported, or Unsupported.",
      "Built-in Responsible AI Abstention: explicitly flags when citations are insufficient rather than hallucinating prior art.",
      "Designed to protect indigenous traditional knowledge from wrongful commercial monopolization."
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Python", "FastAPI"],
      ai_ml: ["BM25 Retrieval", "Hugging Face Sentence Transformers", "Confidence Scoring"],
      database: ["MongoDB", "FAISS Vector Store"],
      security_auth: ["Data Provenance Auditing"]
    },
    metrics: [
      { label: "Retrieval", value: "Hybrid BM25 + Dense" },
      { label: "Hallucination Control", value: "Safe Abstention Mode" },
      { label: "Domain", value: "Ayurveda & Patents" }
    ],
    architectureSummary: "User queries are mapped through a hybrid sparse/dense retrieval layer against traditional knowledge repositories. A verification agent validates citations and assigns confidence metrics."
  },

  // ==================== MODERATE PROJECTS ====================
  {
    id: "mansik-seva",
    title: "Mansik-Seva — Mental Wellness Platform",
    subtitle: "Multilingual AI Psychological Assessment & Health Companion",
    category: "moderate",
    badge: "Healthcare & Applied AI",
    year: "2025",
    image: "/assets/mansikseva.png",
    githubUrl: "https://github.com/anushkkavarshney/Mansik-Seva",
    description: "A digital mental-wellness platform providing accessible psychological wellness resources, self-guided coping exercises, and validated clinical screenings.",
    keyHighlights: [
      "Conducted 1,200+ digitized health assessments implementing standardized PHQ-9 and GAD-7 assessment frameworks.",
      "Multilingual support with sentiment-aware AI conversation partner designed with strict emotional safety guardrails.",
      "Improved patient query resolution and support navigation efficiency by 25%.",
      "Confidential, anonymous user sessions with zero personally identifiable data stored."
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Supabase / PostgreSQL"],
      ai_ml: ["Google Gemini API", "Sentiment Analysis"],
      database: ["PostgreSQL", "Supabase Storage"],
      security_auth: ["Anonymized Session Tokens", "Data Encryption"]
    },
    metrics: [
      { label: "Assessments", value: "1,200+ Screenings" },
      { label: "Tools", value: "PHQ-9 & GAD-7" },
      { label: "Resolution", value: "+25% Efficiency" }
    ]
  },
  {
    id: "ems",
    title: "EMS — Employee Management System",
    subtitle: "Enterprise Personnel Administration & Department Portal",
    category: "moderate",
    badge: "Full-Stack Portal",
    year: "2024",
    githubUrl: "https://github.com/anushkkavarshney/EMS",
    description: "A robust CRUD administrative management system designed to streamline employee record management, department assignments, salary categorization, and profile editing.",
    keyHighlights: [
      "Complete CRUD architecture with reactive data tables, sorting, and multi-parameter filtering.",
      "Admin authorization barrier securing sensitive payroll and employee contact credentials.",
      "Form validation with real-time feedback preventing duplicate employee IDs and invalid records."
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB", "Mongoose"],
      security_auth: ["JWT Authentication", "Admin Role Middleware"]
    }
  },
  {
    id: "ecell-sample",
    title: "E-Cell IGDTUW Official Web Platform",
    subtitle: "Entrepreneurship Summit & Student Innovation Portal",
    category: "moderate",
    badge: "Institutional Frontend",
    year: "2024",
    githubUrl: "https://github.com/anushkkavarshney/E-Cell-Sample",
    description: "The digital gateway for the Entrepreneurship Cell at Indira Gandhi Delhi Technical University for Women. Features modern responsive layouts, startup ideation resources, event registrations, and speaker spotlights.",
    keyHighlights: [
      "Built as Web Dev Head for E-Cell IGDTUW, driving official event reach and student entrepreneur engagement.",
      "Interactive speaker roster, dynamic event timeline, and integrated registration forms.",
      "Optimized for 95+ Google Lighthouse performance score with seamless mobile responsiveness."
    ],
    techStack: {
      frontend: ["React.js", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js"],
      tools: ["Figma UI/UX", "Git / GitHub Pages"]
    }
  },
  {
    id: "trend-radar",
    title: "Trend Radar — Content Intelligence Engine",
    subtitle: "Automated Signal Ingestion, Deduplication & News Classifier",
    category: "moderate",
    badge: "Data Pipeline & APIs",
    year: "2025",
    githubUrl: "https://github.com/anushkkavarshney/Content-Scanning-Radar-Engine",
    description: "A high-frequency content scanning and ingestion pipeline that aggregates trend signals, financial feeds, and tech news across heterogeneous RSS channels and REST APIs.",
    keyHighlights: [
      "Background worker pipeline using APScheduler in FastAPI for scheduled periodic source polling.",
      "Content deduplication algorithm using SimHash and cosine similarity to group duplicate wire articles.",
      "Automated categorization into technology, business, and policy verticals with MongoDB Atlas indexing."
    ],
    techStack: {
      backend: ["Python", "FastAPI", "APScheduler"],
      ai_ml: ["NLP Categorization", "SimHash Deduplication"],
      database: ["MongoDB Atlas"],
      tools: ["RSS Feeds", "News APIs", "Uvicorn"]
    }
  },
  {
    id: "esummit",
    title: "E-Summit Event & Speaker Portal",
    subtitle: "Flagship Annual Entrepreneurship Conference Showcase",
    category: "moderate",
    badge: "Event Architecture",
    year: "2024",
    githubUrl: "https://github.com/anushkkavarshney/esummitdemo",
    description: "The dedicated conference web portal for E-Summit, supporting multi-track scheduling, speaker spotlight carousels, sponsor showcases, and ticketing information.",
    keyHighlights: [
      "High-energy visual layout designed to match national hackathon and entrepreneurship summit branding.",
      "Interactive schedule switcher enabling attendees to filter by Keynotes, Pitching, and Networking tracks."
    ],
    techStack: {
      frontend: ["React", "HTML5", "CSS3", "JavaScript"],
      tools: ["Responsive Design", "Vercel Deployment"]
    }
  },
  {
    id: "portfolio-v2",
    title: "Portfolio — Modern React & AI Engineer Showcase",
    subtitle: "High-Performance Single-Page Portfolio & Interactive Playbook",
    category: "moderate",
    badge: "Creative Engineering",
    year: "2025",
    githubUrl: "https://github.com/anushkkavarshney/Portfolio",
    description: "This portfolio! Engineered with React, Vite, Tailwind CSS, Framer Motion, and Lenis smooth scrolling. Features the dynamic cursive SVG signature animation, interactive playbook laboratory, live IST clock, and case study modals.",
    keyHighlights: [
      "Fluid 60fps smooth scrolling with Lenis without breaking native browser anchor jumps.",
      "Dynamic handwritten SVG cursive calligraphy animation with animated stroke-dashoffset.",
      "Interactive project filter matrix with search, category grouping, and full-screen case study drawer."
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Lenis Scroll"],
      tools: ["Git", "GitHub Pages", "Canvas Confetti"]
    }
  },
  {
    id: "portfolio-2024",
    title: "Portfolio-2024 — Legacy Archive",
    subtitle: "Original Design Exploration & Historical Frontend Build",
    category: "moderate",
    badge: "Design Evolution",
    year: "2024",
    githubUrl: "https://github.com/anushkkavarshney/Portfolio-2024",
    description: "The previous iteration of Anushka's personal website, preserved to demonstrate growth in UI/UX maturity, state management, and modern engineering standards.",
    keyHighlights: [
      "Early experimentation with interactive CSS animations, micro-interactions, and portfolio layouts.",
      "Serves as the foundation that evolved into the current AI Builder & Software Engineer aesthetic."
    ],
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript ES6", "GSAP 3"]
    }
  },

  // ==================== MINOR / EXPERIMENTS ====================
  {
    id: "bmi-calculator",
    title: "BMI Calculator",
    subtitle: "Interactive Health Gauge & Body Mass Index Visualizer",
    category: "minor",
    badge: "React Utility",
    year: "2024",
    githubUrl: "https://github.com/anushkkavarshney/BMI-Calculator",
    description: "A responsive utility demonstrating state-driven reactive UI. Computes body mass metrics instantly with a dynamic gauge color indicator and actionable lifestyle categories.",
    keyHighlights: [
      "Instant dual metric (kg/cm & lbs/in) calculation with zero page reload.",
      "Visual color spectrum feedback based on WHO clinical weight classifications."
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS", "State Hooks"]
    }
  },
  {
    id: "chrome-dino",
    title: "Chrome Dino Game Clone",
    subtitle: "Canvas Physics & Sprite Collision Endless Runner",
    category: "minor",
    badge: "Game Loop & Canvas",
    year: "2024",
    githubUrl: "https://github.com/anushkkavarshney/Chrome-Dino-Game",
    description: "An offline-friendly recreation of Google Chrome's beloved T-Rex runner game built from scratch using HTML5 Canvas and JavaScript physics.",
    keyHighlights: [
      "Smooth 60fps requestAnimationFrame game loop with gravity, jumping, and ducking mechanics.",
      "Accurate bounding-box AABB collision detection algorithms and persistent local high score tracking."
    ],
    techStack: {
      frontend: ["HTML5 Canvas", "CSS3", "JavaScript ES6", "Physics Loop"]
    }
  },
  {
    id: "tower-of-hanoi",
    title: "Tower of Hanoi Algorithm Solver",
    subtitle: "Interactive Recursion & Algorithmic Problem Decomposition",
    category: "minor",
    badge: "DSA & Recursion",
    year: "2024",
    githubUrl: "https://github.com/anushkkavarshney/Tower-Of-Hanoi",
    description: "An interactive computational visualization of the mathematical Tower of Hanoi puzzle, demonstrating recursive problem decomposition and optimal step computation.",
    keyHighlights: [
      "Visual move validation adhering to classic mathematical constraints: larger disks cannot stack on smaller disks.",
      "Built-in recursive solver showing step-by-step optimal sequence of 2^n - 1 moves."
    ],
    techStack: {
      frontend: ["JavaScript", "HTML5", "CSS Animations", "Recursive Algorithms"]
    }
  }
];
