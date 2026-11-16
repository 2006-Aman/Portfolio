/* Featured projects — single source of truth for the Work section
   and the /work/[slug] case-study routes for Aman Kumar (@2006-Aman). */

export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[];
  reflection: string;
  note?: string;
};

export type StudyFr = Partial<Study>;

export type Cover = {
  bg: string;
  ink: "light" | "dark";
  src?: string;
  aspect?: number;
  variant?: "brand" | "photo";
  focus?: string;
  mark?: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  oneLiner: string;
  contribution: string;
  coverLabel: string;
  cover?: Cover;
  site?: { url: string; label: string };
  repo?: string;
  award?: string;
  study: Study;
  fr?: {
    title?: string;
    oneLiner?: string;
    contribution?: string;
    tags?: string[];
    study?: StudyFr;
  };
};

export const PROJECTS: Project[] = [
  /* ─────────────── 1 · STUDENT DROPOUT PREDICTOR (Pinned) ─────────────── */
  {
    slug: "student-dropout-predictor",
    title: "Student Dropout Predictor",
    tags: ["Machine Learning", "TypeScript", "Predictive Analytics"],
    year: "2025",
    oneLiner:
      "An intelligent early-warning ML system analyzing demographic and academic patterns to predict student dropout risks and trigger timely interventions.",
    contribution:
      "Engineered data preprocessing, feature engineering, classification model training, and responsive web interface.",
    coverLabel: "STUDENT DROPOUT PREDICTOR",
    cover: { bg: "#0F172A", ink: "light", mark: "STUDENT AI", aspect: 16 / 9 },
    repo: "https://github.com/2006-Aman/student-dropout-predictor",
    study: {
      role: "Lead Machine Learning Engineer",
      timeline: "2025 · Active",
      context:
        "Educational institutions struggle to identify at-risk students before they disengage, leading to high attrition rates.",
      problem:
        "Traditional evaluations happen at semester end — too late to provide academic support or intervention.",
      process: [
        {
          title: "Feature Correlation",
          body: "Identified critical leading indicators including attendance drops, assignment submission latencies, and mid-term exam variance.",
        },
        {
          title: "Model Pipeline",
          body: "Trained classification algorithms with hyperparameter optimization, achieving high precision and recall on unseen validation sets.",
        },
        {
          title: "Dashboard Integration",
          body: "Built a TypeScript frontend enabling counselors to visualize risk scores and actionable intervention pathways.",
        },
      ],
      decisions: [
        {
          title: "Interpretable Scoring",
          body: "Prioritized feature-importance explainability (SHAP values) so counselors understand exactly why a student was flagged.",
        },
      ],
      outcomes: [
        "High-confidence early warnings weeks before final exams",
        "Actionable intervention dashboards for student success teams",
      ],
      reflection:
        "Predictive models are only as valuable as their interpretability — transparency drives trust in educational systems.",
    },
  },

  /* ─────────────── 2 · RAG PIPELINE (2006-Aman) ─────────────── */
  {
    slug: "rag-pipeline",
    title: "RAG Pipeline — Contextual AI Engine",
    tags: ["Generative AI", "Python", "Vector Search · LLM"],
    year: "2025",
    oneLiner:
      "Retrieval-Augmented Generation pipeline leveraging chunking strategies, dense vector embeddings, and semantic similarity search for factual LLM responses.",
    contribution:
      "Implemented document ingestion, vector database indexing, similarity search, and prompt synthesis pipelines.",
    coverLabel: "RAG PIPELINE",
    cover: { bg: "#042F2E", ink: "light", mark: "RAG // AI", aspect: 16 / 9 },
    repo: "https://github.com/2006-Aman/Rag_pipeline",
    study: {
      role: "AI / LLM Engineer",
      timeline: "2025",
      context:
        "LLMs frequently hallucinate when answering queries regarding private, domain-specific, or rapidly evolving documentation.",
      problem:
        "Generic LLM responses lack grounding in enterprise knowledge bases and verifiable reference citations.",
      process: [
        {
          title: "Smart Chunking",
          body: "Configured recursive character and semantic text splitters to preserve contextual boundaries across complex multi-page PDFs.",
        },
        {
          title: "Embedding & Retrieval",
          body: "Integrated dense vector embeddings with cosine similarity reranking to retrieve the top-k most relevant text chunks.",
        },
      ],
      decisions: [
        {
          title: "Grounding Prompts",
          body: "Engineered strict system prompts that require the model to cite retrieved chunk IDs, eliminating hallucinations.",
        },
      ],
      outcomes: [
        "Verifiable, cited responses across multi-document repositories",
        "Sub-second vector retrieval latency",
      ],
      reflection:
        "Effective retrieval quality is 80% chunking strategy and 20% model size.",
    },
  },

  /* ─────────────── 3 · INSTOME (Pinned) ─────────────── */
  {
    slug: "instome",
    title: "Instome — Social & Media Web Platform",
    tags: ["TypeScript", "Full Stack", "React · Tailwind"],
    year: "2024",
    oneLiner:
      "Interactive social media web application designed for seamless multimedia sharing, responsive feeds, and modern component aesthetics.",
    contribution:
      "Architected client-side routing, interactive feed animations, state management, and asset uploads.",
    coverLabel: "INSTOME PLATFORM",
    cover: { bg: "#1E1B4B", ink: "light", mark: "INSTOME", aspect: 16 / 9 },
    repo: "https://github.com/2006-Aman/Instome",
    study: {
      role: "Frontend Architect",
      timeline: "2024",
      context:
        "Modern social platforms require fluid micro-interactions, low latency media rendering, and rock-solid state management.",
      problem:
        "Infinite scrolling feeds often encounter layout thrashing, memory leaks, and janky image loading on mobile browsers.",
      process: [
        {
          title: "Virtualization",
          body: "Implemented list virtualization so only visible posts exist in the DOM, keeping memory footprint low.",
        },
        {
          title: "Optimistic Updates",
          body: "Added optimistic UI updates for likes and comments to make interactions feel instantaneous.",
        },
      ],
      decisions: [
        {
          title: "Strict TypeScript Types",
          body: "Defined comprehensive interfaces for posts, user profiles, and activity events to prevent runtime crashes.",
        },
      ],
      outcomes: [
        "Silky smooth 60fps feed scrolling on mobile devices",
        "Clean, maintainable component design system",
      ],
      reflection:
        "Optimistic UI updates transform a standard web app into an experience that feels natively responsive.",
    },
  },

  /* ─────────────── 4 · SNIPURL (Pinned) ─────────────── */
  {
    slug: "snipurl",
    title: "SnipUrl — Fast URL Shortener & Analytics",
    tags: ["TypeScript", "Backend", "REST API · Performance"],
    year: "2024",
    oneLiner:
      "High-throughput URL shortening service featuring instant Base62 hash encoding, click analytics, and sub-millisecond redirection.",
    contribution:
      "Engineered URL hashing algorithms, route redirectors, database indexing, and analytics telemetry.",
    coverLabel: "SNIPURL SERVICE",
    cover: { bg: "#31103F", ink: "light", mark: "SNIPURL", aspect: 16 / 9 },
    repo: "https://github.com/2006-Aman/SnipUrl",
    study: {
      role: "Full Stack Engineer",
      timeline: "2024",
      context:
        "Marketing teams and developers need clean, branded, and trackable links that redirect instantly without latency overhead.",
      problem:
        "Long URLs with tracking parameters clutter communications and offer zero visibility into click demographics.",
      process: [
        {
          title: "Base62 Encoding",
          body: "Created a collision-resistant Base62 generation algorithm for compact 6-character short codes.",
        },
        {
          title: "Index Optimization",
          body: "Applied unique B-Tree indexes on short code columns to ensure O(1) lookup times upon redirection requests.",
        },
      ],
      decisions: [
        {
          title: "Edge Redirects",
          body: "Placed redirect logic at the edge to eliminate round-trip server latency for end users.",
        },
      ],
      outcomes: [
        "Sub-15ms redirection response times",
        "Real-time click telemetry and device breakdown",
      ],
      reflection:
        "Simplicity is the ultimate sophistication — clean database indexes make URL redirectors blisteringly fast.",
    },
  },

  /* ─────────────── 5 · BOARDVAULT SAAS (Aman) ─────────────── */
  {
    slug: "boardvault",
    title: "boardVault — SBC & Hardware Spec Engine",
    tags: ["Full Stack", "SaaS", "Hardware Architecture"],
    year: "2024",
    oneLiner:
      "SaaS platform enabling embedded makers to explore, compare, and benchmark Single Board Computers and microcontrollers with parametric filters.",
    contribution:
      "Designed hardware spec schema, parametric search algorithms, benchmark comparisons, and interactive pinout maps.",
    coverLabel: "BOARDVAULT SAAS",
    cover: { bg: "#0D1117", ink: "light", mark: "BOARDVAULT", aspect: 16 / 9 },
    repo: "https://github.com/Aman-kumar2006/boardVault",
    study: {
      role: "Creator & Lead Architect",
      timeline: "2024 · Active",
      context:
        "Robotics makers, IoT developers, and hobbyists waste hours cross-referencing messy datasheets to compare Raspberry Pi, Orange Pi, and ESP32 boards.",
      problem:
        "No single source offered side-by-side comparison of GPIO count, power consumption, processor architecture, and thermal throttling.",
      process: [
        {
          title: "Hardware Taxonomy",
          body: "Cataloged 50+ embedded boards with verified pin configurations, power thresholds, and peripheral interfaces.",
        },
        {
          title: "Parametric Filtering",
          body: "Developed an instant client-side query engine allowing users to filter by RAM size, architecture (ARM/RISC-V), and price points.",
        },
      ],
      decisions: [
        {
          title: "Client-Side Caching",
          body: "Cached board catalogs locally to allow instant comparison comparisons without network round-trips.",
        },
      ],
      outcomes: [
        "50+ single board computers and microcontrollers cataloged",
        "Used by students, robotics clubs, and IoT engineers",
      ],
      reflection:
        "Domain-specific SaaS that solves real developer headaches creates immediate utility and organic traction.",
    },
  },

  /* ─────────────── 6 · MODEL REGRESSION DETECTOR (2006-Aman) ─────────────── */
  {
    slug: "model-regression-detector",
    title: "Model Regression Detector",
    tags: ["Machine Learning", "Python", "MLOps · Quality"],
    year: "2025",
    oneLiner:
      "Automated evaluation framework testing ML model iterations for regression anomalies, metric degradation, and data drift before deployment.",
    contribution:
      "Authored statistical drift tests, regression thresholds, automated reporting pipelines, and CI/CD validation hooks.",
    coverLabel: "MODEL DETECTOR",
    cover: { bg: "#1C1917", ink: "light", mark: "ML REGRESSION", aspect: 16 / 9 },
    repo: "https://github.com/2006-Aman/model-regression-detector",
    study: {
      role: "MLOps Engineer",
      timeline: "2025",
      context:
        "When retraining machine learning models with fresh data, unintended performance drops on edge cases frequently slip into production unnoticed.",
      problem:
        "Standard average metrics (like global accuracy) mask regressions in critical sub-populations or edge cohorts.",
      process: [
        {
          title: "Slice-Based Evaluation",
          body: "Segmented test datasets into critical demographic and behavioral slices to detect localized performance dips.",
        },
        {
          title: "Automated Gating",
          body: "Established threshold checks that automatically flag model candidates showing statistically significant degradation.",
        },
      ],
      decisions: [
        {
          title: "Configurable Strictness",
          body: "Allowed teams to define custom metric tolerances per operational feature category.",
        },
      ],
      outcomes: [
        "Eliminated silent regressions in production model deployments",
        "Comprehensive Markdown and JSON model validation reports",
      ],
      reflection:
        "ML quality assurance requires slice-based evaluations, not just aggregate global averages.",
    },
  },

  /* ─────────────── 7 · INVENTORY FLOW & BACKEND (2006-Aman) ─────────────── */
  {
    slug: "inventory-flow",
    title: "Inventory-Flow & Backend Architecture",
    tags: ["Node.js", "JavaScript", "Full Stack · Database"],
    year: "2024",
    oneLiner:
      "Scalable inventory control and warehouse transaction architecture engineered for real-time stock level synchronization and auditing.",
    contribution:
      "Designed relational database schemas, transaction locks, audit logs, and RESTful inventory management endpoints.",
    coverLabel: "INVENTORY FLOW",
    cover: { bg: "#18181B", ink: "light", mark: "INVENTORY", aspect: 16 / 9 },
    repo: "https://github.com/2006-Aman/Inventory-Flow",
    study: {
      role: "Backend Architect",
      timeline: "2024",
      context:
        "Retailers and warehouses suffer discrepancies when concurrent orders manipulate inventory quantities without strict transactional isolation.",
      problem:
        "Race conditions during high-volume checkout cause overselling and inventory data drift.",
      process: [
        {
          title: "Atomic Transactions",
          body: "Configured row-level locking and ACID transactions to guarantee accurate stock decrements under heavy load.",
        },
        {
          title: "Audit Logging",
          body: "Implemented an immutable audit ledger tracking every stock adjustment, shipment, and restock event with user attribution.",
        },
      ],
      decisions: [
        {
          title: "Optimistic Concurrency",
          body: "Used version fields on product records to gracefully handle concurrent update attempts with automatic retries.",
        },
      ],
      outcomes: [
        "Zero oversell errors under concurrent simulated purchase spikes",
        "Complete traceability for every inventory transaction",
      ],
      reflection:
        "Robust database transactions are the unsung heroes of reliable e-commerce and logistics systems.",
    },
  },

  /* ─────────────── 8 · GITPILOT (2006-Aman) ─────────────── */
  {
    slug: "gitpilot",
    title: "GitPilot — Developer Git Automation",
    tags: ["TypeScript", "CLI", "Developer Tooling"],
    year: "2024",
    oneLiner:
      "Smart developer CLI and automation utility that streamlines Git branching, commit formatting, and release tag workflows.",
    contribution:
      "Built CLI argument parsing, interactive terminal prompts, Git subprocess integration, and release automations.",
    coverLabel: "GITPILOT TOOL",
    cover: { bg: "#082F49", ink: "light", mark: "GITPILOT", aspect: 16 / 9 },
    repo: "https://github.com/2006-Aman/GitPilot",
    study: {
      role: "Tools Engineer",
      timeline: "2024",
      context:
        "Developers frequently waste time running repetitive Git commands for feature branches, stashing, and semantic commit message tagging.",
      problem:
        "Inconsistent commit conventions make automated changelogs and release notes fragile and error-prone.",
      process: [
        {
          title: "Interactive Prompts",
          body: "Designed intuitive CLI workflows guiding developers through conventional commit structures (feat, fix, chore, docs).",
        },
        {
          title: "Workflow Chaining",
          body: "Combined branch creation, issue linking, and commit verification into single executable shorthand commands.",
        },
      ],
      decisions: [
        {
          title: "Zero Dependencies",
          body: "Kept core CLI lightweight and fast with instant cold-start times.",
        },
      ],
      outcomes: [
        "Streamlined daily developer workflow and clean Git commit trees",
        "Consistent semantic versioning across releases",
      ],
      reflection:
        "Developer tools that shave 10 seconds off repeated tasks save hours over a sprint.",
    },
  },

  /* ─────────────── 9 · HOUSE PRICE PREDICTION (2006-Aman) ─────────────── */
  {
    slug: "house-price-prediction",
    title: "House Price Predictive Regressor",
    tags: ["Machine Learning", "Jupyter Notebook", "Python · Scikit"],
    year: "2024",
    oneLiner:
      "Machine learning regression pipeline utilizing feature scaling, outlier detection, and gradient boosted trees to predict residential real estate valuations.",
    contribution:
      "Performed exploratory data analysis, missing value imputation, multi-collinearity checks, and ensemble model evaluation.",
    coverLabel: "HOUSE PRICE ML",
    cover: { bg: "#1E293B", ink: "light", mark: "PRICE // ML", aspect: 16 / 9 },
    repo: "https://github.com/2006-Aman/House_Price_Prediction",
    study: {
      role: "Data Scientist",
      timeline: "2024",
      context:
        "Real estate valuations depend on dozens of interacting non-linear factors including square footage, neighborhood amenities, age, and zoning laws.",
      problem:
        "Linear regression models fail to capture complex non-linear spatial interactions and feature correlations in property data.",
      process: [
        {
          title: "EDA & Feature Engineering",
          body: "Applied log transformations on skewed price distributions and engineered interaction terms for living space per room.",
        },
        {
          title: "Ensemble Comparison",
          body: "Benchmarked Ridge, Lasso, Random Forest, and Gradient Boosting regressors with cross-validation.",
        },
      ],
      decisions: [
        {
          title: "Outlier Truncation",
          body: "Removed extreme leverage points that distorted regression slopes, dramatically reducing Root Mean Squared Error (RMSE).",
        },
      ],
      outcomes: [
        "High $R^2$ score on holdout test datasets",
        "Clear feature importance rankings showing key price drivers",
      ],
      reflection:
        "Rigorous exploratory data analysis and target variable normalization matter more than raw model complexity.",
    },
  },

  /* ─────────────── 10 · SOLFINDER PLATFORM (Aman) ─────────────── */
  {
    slug: "solfinder",
    title: "SolFinder — Property & Research Portal",
    tags: ["HTML5", "CSS3", "JavaScript · Interactive UI"],
    year: "2024",
    oneLiner:
      "Technology company web portal featuring interactive UI systems, research publications, careers board, and team management.",
    contribution:
      "Engineered frontend architecture, responsive layouts, interactive components, and dynamic research article showcases.",
    coverLabel: "SOLFINDER PORTAL",
    cover: { bg: "#161B22", ink: "light", mark: "SOLFINDER", aspect: 16 / 9 },
    repo: "https://github.com/Aman-kumar2006/SolFinder-Research",
    study: {
      role: "Lead Frontend Engineer",
      timeline: "2024",
      context:
        "SolFinder required a unified, modern web portal to communicate its technical research and connect prospective talent with open roles.",
      problem:
        "Legacy enterprise portals were static, visually uninspiring, and lacked mobile optimization.",
      process: [
        {
          title: "Component Modularity",
          body: "Built reusable UI modules for project showcases, career applications, and research whitepaper downloads.",
        },
        {
          title: "Performance First",
          body: "Engineered responsive CSS grid systems with zero external framework overhead for blazing fast mobile loading.",
        },
      ],
      decisions: [
        {
          title: "Semantic HTML",
          body: "Structured every page with strict semantic tags and ARIA landmarks for flawless accessibility.",
        },
      ],
      outcomes: [
        "100/100 Lighthouse performance and accessibility scores",
        "Clean, corporate yet modern interactive presentation",
      ],
      reflection:
        "Clean semantic markup without bloated dependencies delivers the most durable web experiences.",
    },
  },

  /* ─────────────── 11 · KNOWLEDGEX (2006-Aman) ─────────────── */
  {
    slug: "knowledge-x",
    title: "KnowledgeX — Learning & Knowledge System",
    tags: ["JavaScript", "Full Stack", "Education Tech"],
    year: "2024",
    oneLiner:
      "Interactive knowledge sharing platform designed for structured content organization, markdown documentation, and interactive study modules.",
    contribution:
      "Built dynamic article rendering, search indexing, categorization tags, and user note-taking interfaces.",
    coverLabel: "KNOWLEDGEX PLATFORM",
    cover: { bg: "#2E1065", ink: "light", mark: "KNOWLEDGEX", aspect: 16 / 9 },
    repo: "https://github.com/2006-Aman/knowledgeX",
    study: {
      role: "Full Stack Developer",
      timeline: "2024",
      context:
        "Students and self-taught developers need central workspaces to organize notes, code snippets, and structured technical roadmaps.",
      problem:
        "Information scattered across browser bookmarks and loose files becomes impossible to search and review effectively.",
      process: [
        {
          title: "Client-Side Search",
          body: "Implemented an in-memory index for instant keyword search across all indexed learning topics.",
        },
        {
          title: "Markdown Parsing",
          body: "Integrated custom Markdown rendering with syntax highlighting for code snippets across multiple languages.",
        },
      ],
      decisions: [
        {
          title: "Local State Persistence",
          body: "Cached notes in local storage so learning progress is never lost even without internet connectivity.",
        },
      ],
      outcomes: [
        "Instant search across hundreds of organized technical summaries",
        "Distraction-free reading and note-taking environment",
      ],
      reflection:
        "Organizing technical knowledge as you learn is the highest-leverage habit a software engineer can build.",
    },
  },

  /* ─────────────── 12 · FOODLOOP.AI (Aman) ─────────────── */
  {
    slug: "foodloop-ai",
    title: "FoodLoop.AI — Waste Reduction Logistics",
    tags: ["AI Logistics", "TypeScript", "Sustainability · SaaS"],
    year: "2025",
    oneLiner:
      "AI-driven platform optimizing commercial surplus food supply chains to reduce spoilage and route donations to food banks.",
    contribution:
      "Integrated predictive demand algorithms, routing optimization, and real-time donation dashboards.",
    coverLabel: "FOODLOOP.AI",
    cover: { bg: "#064E3B", ink: "light", mark: "FOODLOOP.AI", aspect: 16 / 9 },
    repo: "https://github.com/Aman-kumar2006/foodloop.ai",
    study: {
      role: "Lead Full-Stack Developer",
      timeline: "2025",
      context:
        "Commercial food operations generate millions of tons of edible waste simply because redistribution logistics are too slow.",
      problem:
        "Perishable inventory must be matched with nearby recipient shelters within tight 2-3 hour windows.",
      process: [
        {
          title: "Proximity Matching",
          body: "Built geospatial matching algorithms connecting donors with nearest verified distribution hubs.",
        },
        {
          title: "Surplus Forecasting",
          body: "Integrated lightweight regression models to predict surplus volumes based on day-of-week and weather trends.",
        },
      ],
      decisions: [
        {
          title: "Mobile-First Dashboard",
          body: "Engineered mobile interfaces for kitchen managers to log surplus batches in under 20 seconds.",
        },
      ],
      outcomes: [
        "Dramatically reduced the time window required to coordinate donations",
        "Verifiable metrics on meals rescued and emissions avoided",
      ],
      reflection:
        "Software applied to real-world logistics creates direct, tangible positive impact on communities.",
    },
  },

  /* ─────────────── 13 · INVENTO FLASK (Aman) ─────────────── */
  {
    slug: "invento-flask",
    title: "Invento — Python Flask & Supabase DBMS",
    tags: ["Python", "Flask", "Supabase · PostgreSQL"],
    year: "2024",
    oneLiner:
      "Full-featured inventory management platform powered by Python Flask, responsive Bootstrap UI, and cloud-hosted Supabase PostgreSQL.",
    contribution:
      "Developed backend routing, database schema modeling, user session authentication, and inventory CRUD services.",
    coverLabel: "INVENTO FLASK",
    cover: { bg: "#1E293B", ink: "light", mark: "INVENTO", aspect: 16 / 9 },
    repo: "https://github.com/Aman-kumar2006/invento",
    study: {
      role: "Backend Engineer",
      timeline: "2024",
      context:
        "Small businesses require straightforward inventory tracking that doesn't demand enterprise ERP complexity or prohibitive licensing fees.",
      problem:
        "Spreadsheet-based stock tracking leads to accidental overwrites, formula breakage, and zero audit trails.",
      process: [
        {
          title: "Relational Modeling",
          body: "Structured suppliers, categories, stock batches, and reorder alerts in Supabase PostgreSQL.",
        },
        {
          title: "Flask API Services",
          body: "Created lightweight REST endpoints with input validation and defensive error handling.",
        },
      ],
      decisions: [
        {
          title: "Cloud Database Integration",
          body: "Used Supabase for secure cloud storage and real-time database capabilities.",
        },
      ],
      outcomes: [
        "Reliable multi-user stock updating without spreadsheet corruption",
        "Automated alerts when items fall below safe threshold levels",
      ],
      reflection:
        "Python Flask paired with a solid SQL backend provides an incredibly fast path to ship reliable internal tools.",
    },
  },

  /* ─────────────── 14 · QUIZONIC (2006-Aman) ─────────────── */
  {
    slug: "quizonic",
    title: "Quizonic — Gamified Quiz Platform",
    tags: ["JavaScript", "HTML5", "Interactive Game UX"],
    year: "2024",
    oneLiner:
      "Fast-paced interactive quiz application featuring dynamic question banks, countdown timers, instant score evaluation, and high score tracking.",
    contribution:
      "Built game state engine, timer mechanics, randomized question logic, and responsive visual scoreboards.",
    coverLabel: "QUIZONIC GAME",
    cover: { bg: "#431407", ink: "light", mark: "QUIZONIC", aspect: 16 / 9 },
    repo: "https://github.com/2006-Aman/Quizonic",
    study: {
      role: "Frontend Developer",
      timeline: "2024",
      context:
        "Educational quizzes often feel dry and passive, failing to engage users in active recall practice.",
      problem:
        "Without timer pressure and instant feedback loops, knowledge retention drops significantly.",
      process: [
        {
          title: "State Machine",
          body: "Engineered a finite state machine managing quiz stages: start, question active, answered, feedback, and summary.",
        },
        {
          title: "Audio & Visual Feedback",
          body: "Integrated responsive animations and celebratory feedback for correct answer streaks.",
        },
      ],
      decisions: [
        {
          title: "No-Dependency Build",
          body: "Implemented pure vanilla JavaScript for zero-latency execution and instant load times.",
        },
      ],
      outcomes: [
        "Addictive and engaging active-recall quiz experience",
        "Flawless cross-browser performance on all screen sizes",
      ],
      reflection:
        "Gamification principles like immediate feedback and countdown timers dramatically boost user engagement.",
    },
  },
];
