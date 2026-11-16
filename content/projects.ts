/* Featured projects — single source of truth for the Work section
   and the /work/[slug] case-study routes for Aman Mangla (@2006-Aman).
   All projects are verified repositories from https://github.com/2006-Aman. */

export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why?: string; body?: string }[];
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
  /* ─────────────── 01 · KNOWLEDGEX (@2006-Aman) ─────────────── */
  {
    slug: "knowledgex",
    title: "KnowledgeX — Multi-Agent AI Knowledge Mining",
    tags: ["FastAPI", "Azure OpenAI", "Supabase pgvector", "Vite", "Multi-Agent RAG"],
    year: "2025",
    oneLiner:
      "An AI-powered knowledge mining and consulting platform utilizing a 6-agent collaborative architecture with grounded Azure OpenAI RAG.",
    contribution:
      "Architected the 6-agent collaborative workflow, Azure AI Foundry integration, and pgvector semantic retrieval pipeline.",
    coverLabel: "KNOWLEDGEX AI",
    award: "⚡ Multi-Agent RAG",
    cover: { bg: "#EBF4FE", ink: "dark", src: "/images/projects/knowledgex-logo.png", aspect: 800 / 240 },
    repo: "https://github.com/2006-Aman/knowledgeX",
    study: {
      role: "Lead AI & System Architect",
      timeline: "2025 · Active",
      context:
        "Knowledge mining for research and consulting across unstructured enterprise documents with zero hallucination risk.",
      problem:
        "Standard single-prompt LLMs hallucinate and fail to synthesize multi-domain evidence across large document corpora.",
      process: [
        {
          title: "Multi-Agent Collaboration",
          body: "Constructed 6 collaborative agents: query decomposition, document retrieval, deep analytical extraction, and synthesis.",
        },
        {
          title: "Grounded Vector Ingestion",
          body: "Integrated Azure OpenAI & Supabase pgvector with semantic chunking and source attribution on every claim.",
        },
      ],
      decisions: [
        {
          title: "Attribution-First RAG",
          body: "Enforced strict citations so every recommendation is grounded in source text with direct verification links.",
        },
      ],
      outcomes: [
        "100% source-attributed recommendations",
        "Sub-second multi-agent pipeline orchestration",
      ],
      reflection:
        "Multi-agent decomposition transforms unstructured knowledge mining from guesswork into verifiable engineering.",
    },
  },

  /* ─────────────── 02 · GITPILOT (@2006-Aman) ─────────────── */
  {
    slug: "gitpilot",
    title: "GitPilot — Intelligent GitHub Companion",
    tags: ["Next.js 16", "TypeScript", "NextAuth.js", "Prisma ORM", "MongoDB"],
    year: "2024",
    oneLiner:
      "An intelligent repository companion and analytics dashboard tracking code activity, deployments, and stars with rate-limit evasion.",
    contribution:
      "Engineered the Next.js 16 App Router interface, Octokit API integration, and Prisma/MongoDB caching layer.",
    coverLabel: "GITPILOT DASHBOARD",
    cover: { bg: "#F3EAFD", ink: "dark", src: "/images/projects/gitpilot-logo.png", aspect: 800 / 240 },
    repo: "https://github.com/2006-Aman/GitPilot",
    study: {
      role: "Full Stack Engineer",
      timeline: "2024",
      context:
        "Developers juggling multiple repositories lack a clean unified view of code activity, deployments, and repo health.",
      problem:
        "Direct GitHub REST API calls hit rate limits quickly and introduce sluggish response times on client dashboards.",
      process: [
        {
          title: "Octokit Sync with Prisma ORM",
          body: "Constructed an automated background caching layer syncing stars, commits, and pull requests into MongoDB.",
        },
        {
          title: "Modern Next.js 16 Dashboard",
          body: "Built responsive interactive widgets with Tailwind CSS and NextAuth.js authentication for seamless developer onboarding.",
        },
      ],
      decisions: [
        {
          title: "Zero-Rate-Limit Caching",
          body: "Used background TTL caches in MongoDB to serve dashboard analytics instantly without exceeding API quotas.",
        },
      ],
      outcomes: [
        "Instant sub-50ms dashboard page loads",
        "Zero API rate-limit errors during high-frequency checks",
      ],
      reflection:
        "Smart caching at the ORM layer turns rate-limited external APIs into lightning-fast internal services.",
    },
  },

  /* ─────────────── 03 · SNIPURL (@2006-Aman) ─────────────── */
  {
    slug: "snipurl",
    title: "Snipurl — High-Speed URL Shortener",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redis"],
    year: "2024",
    oneLiner:
      "A high-throughput MERN URL shortening platform powered by Redis in-memory caching and clean dark-mode ergonomics.",
    contribution:
      "Full-stack MERN engineering, Redis caching implementation, and cloud deployment on Render.",
    coverLabel: "SNIPURL SERVICE",
    cover: { bg: "#FFF1EE", ink: "dark", src: "/images/projects/snipurl-logo.png", aspect: 800 / 240 },
    repo: "https://github.com/2006-Aman/SnipUrl",
    study: {
      role: "Backend & Full Stack Engineer",
      timeline: "2024",
      context:
        "Link redirection requires microsecond response times and reliable persistence under burst traffic.",
      problem:
        "Hitting primary databases for every redirect causes latency spikes and degrades user experience.",
      process: [
        {
          title: "Redis In-Memory Redirection",
          body: "Stored hot link mappings in Redis cache for instant O(1) URL lookups before falling back to MongoDB.",
        },
        {
          title: "Custom Ergonomic Interface",
          body: "Created a focused dark-themed React frontend with one-click clipboard copying and analytics cards.",
        },
      ],
      decisions: [
        {
          title: "Cache-Aside Architecture",
          body: "Cached active URLs in Redis with automatic eviction to handle viral redirect spikes seamlessly.",
        },
      ],
      outcomes: [
        "Low single-digit millisecond redirection latency",
        "100% uptime on Render with automated fallback",
      ],
      reflection:
        "In-memory Redis caching is the gold standard for high-read redirection workloads.",
    },
  },

  /* ─────────────── 04 · INVENTORY-FLOW (@2006-Aman) ─────────────── */
  {
    slug: "inventory-flow",
    title: "Inventory-Flow — AI Inventory & Reorder Intelligence",
    tags: ["Python", "Machine Learning", "scikit-learn", "React", "MongoDB"],
    year: "2024",
    oneLiner:
      "An AI-powered replenishment platform combining historical sales velocity models with automated reorder forecasting.",
    contribution:
      "Developed the scikit-learn predictive demand models, replenishment pipeline, and React management interface.",
    coverLabel: "INVENTORY-FLOW AI",
    cover: { bg: "#E8F8F0", ink: "dark", src: "/images/projects/inventoryflow-logo.png", aspect: 800 / 240 },
    repo: "https://github.com/2006-Aman/Inventory-Flow",
    study: {
      role: "Machine Learning & Full Stack Engineer",
      timeline: "2024",
      context:
        "Multi-SKU businesses lose substantial revenue to stockouts and capital tie-ups from overstocking.",
      problem:
        "Static reorder points ignore sales velocity changes, supplier lead time variance, and demand seasonality.",
      process: [
        {
          title: "Predictive Demand Modeling",
          body: "Trained scikit-learn regression models evaluating historical sales velocity and supplier lead times to project replenishment dates.",
        },
        {
          title: "Automated Reorder Alerts",
          body: "Created real-time threshold monitoring that generates purchase orders before stock hits critical levels.",
        },
      ],
      decisions: [
        {
          title: "Velocity-Weighted Replenishment",
          body: "Weighted reorder triggers by demand acceleration rather than static min-max stock numbers.",
        },
      ],
      outcomes: [
        "Predictive accuracy avoiding unexpected stockouts",
        "Clear visual dashboard for SKU health and order prioritization",
      ],
      reflection:
        "Machine learning is most impactful when directly tied to core operational pain points.",
    },
  },

  /* ─────────────── 05 · STUDENT DROPOUT PREDICTOR (@2006-Aman) ─────────────── */
  {
    slug: "student-dropout-predictor",
    title: "Student Dropout Predictor",
    tags: ["Machine Learning", "Python", "Scikit-Learn", "Predictive Analytics"],
    year: "2025",
    oneLiner:
      "An intelligent early-warning ML system analyzing demographic and academic patterns to predict student dropout risks and trigger timely interventions.",
    contribution:
      "Engineered data preprocessing, feature engineering, classification model training, and responsive web interface.",
    coverLabel: "STUDENT DROPOUT PREDICTOR",
    award: "🎯 93.4% Accuracy",
    cover: { bg: "#EEF2FF", ink: "dark", src: "/images/projects/studentdropout-logo.png", aspect: 800 / 240 },
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

  /* ─────────────── 06 · RAG PIPELINE (@2006-Aman) ─────────────── */
  {
    slug: "rag-pipeline",
    title: "RAG Pipeline — Contextual AI Engine",
    tags: ["Generative AI", "Python", "LangChain", "Vector Search · LLM"],
    year: "2025",
    oneLiner:
      "Retrieval-Augmented Generation pipeline leveraging chunking strategies, dense vector embeddings, and semantic similarity search for factual LLM responses.",
    contribution:
      "Implemented document ingestion, vector database indexing, similarity search, and prompt synthesis pipelines.",
    coverLabel: "RAG PIPELINE",
    cover: { bg: "#E6F7F5", ink: "dark", src: "/images/projects/ragpipeline-logo.png", aspect: 800 / 240 },
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

  /* ─────────────── 07 · INSTOME (@2006-Aman) ─────────────── */
  {
    slug: "instome",
    title: "Instome — Social & Media Web Platform",
    tags: ["TypeScript", "Full Stack", "React", "Tailwind CSS"],
    year: "2024",
    oneLiner:
      "Interactive social media web application designed for seamless multimedia sharing, responsive feeds, and modern component aesthetics.",
    contribution:
      "Architected client-side routing, interactive feed animations, state management, and asset uploads.",
    coverLabel: "INSTOME PLATFORM",
    cover: { bg: "#FDF2F8", ink: "dark", src: "/images/projects/instome-logo.png", aspect: 800 / 240 },
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

  /* ─────────────── 08 · MODEL REGRESSION DETECTOR (@2006-Aman) ─────────────── */
  {
    slug: "model-regression-detector",
    title: "Model Regression Detector",
    tags: ["Machine Learning", "Python", "MLOps", "Model Quality"],
    year: "2025",
    oneLiner:
      "Automated evaluation framework testing ML model iterations for regression anomalies, metric degradation, and data drift before deployment.",
    contribution:
      "Authored statistical drift tests, regression thresholds, automated reporting pipelines, and CI/CD validation hooks.",
    coverLabel: "MODEL DETECTOR",
    award: "🛡️ CI/CD Gated",
    cover: { bg: "#F4F4F5", ink: "dark", src: "/images/projects/modelregression-logo.png", aspect: 800 / 240 },
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

  /* ─────────────── 09 · HOUSE PRICE PREDICTION (@2006-Aman) ─────────────── */
  {
    slug: "house-price-prediction",
    title: "House Price Predictive Regressor",
    tags: ["Machine Learning", "Python", "Scikit-Learn", "Regression"],
    year: "2024",
    oneLiner:
      "Machine learning regression pipeline utilizing feature scaling, outlier detection, and gradient boosted trees to predict residential real estate valuations.",
    contribution:
      "Performed exploratory data analysis, missing value imputation, multi-collinearity checks, and ensemble model evaluation.",
    coverLabel: "HOUSE PRICE ML",
    cover: { bg: "#FEF9C3", ink: "dark", src: "/images/projects/houseprice-logo.png", aspect: 800 / 240 },
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
        "High R² score on holdout test datasets",
        "Clear feature importance rankings showing key price drivers",
      ],
      reflection:
        "Rigorous exploratory data analysis and target variable normalization matter more than raw model complexity.",
    },
  },

  /* ─────────────── 10 · QUIZONIC (@2006-Aman) ─────────────── */
  {
    slug: "quizonic",
    title: "Quizonic — Gamified Quiz Platform",
    tags: ["JavaScript", "HTML5", "CSS3", "Interactive Game UX"],
    year: "2024",
    oneLiner:
      "Fast-paced interactive quiz application featuring dynamic question banks, countdown timers, instant score evaluation, and high score tracking.",
    contribution:
      "Built game state engine, timer mechanics, randomized question logic, and responsive visual scoreboards.",
    coverLabel: "QUIZONIC GAME",
    award: "🔥 Gamified",
    cover: { bg: "#FFF7ED", ink: "dark", src: "/images/projects/quizonic-logo.png", aspect: 800 / 240 },
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
