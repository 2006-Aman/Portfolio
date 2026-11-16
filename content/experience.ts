/* Professional experience — for Aman Kumar (@2006-Aman). Reverse chronological: newest first. */

export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  color: string;
  fg: "light" | "dark";
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    placement?: "right" | "below";
  };
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  {
    company: "AI & ML Systems Lab",
    role: "Machine Learning & Generative AI Architect",
    type: "Full-time",
    location: "India",
    period: "2025 – Present",
    summary:
      "Architecting intelligent machine learning solutions, contextual RAG retrieval pipelines, and predictive dropout models.",
    achievements: [
      "Engineered the Student Dropout Predictor using feature correlation and hyperparameter-tuned classification models",
      "Built multi-document RAG pipelines with semantic vector embeddings and zero-hallucination grounding prompts",
      "Authored the Model Regression Detector for automated statistical drift detection across ML iterations",
    ],
    outcome: "Production-ready predictive models and low-latency retrieval pipelines",
    skills: ["Python", "PyTorch", "Scikit-Learn", "RAG / LLMs", "MLOps", "TypeScript"],
    color: "#EE4C2C",
    fg: "light",
  },
  {
    company: "boardVault",
    role: "Founder & Lead Full-Stack Architect",
    type: "Full-time",
    location: "India",
    period: "2024 – 2025",
    summary:
      "Created and deployed boardVault, the premier parametric comparison and benchmarking engine for Single Board Computers and microcontrollers.",
    achievements: [
      "Cataloged and indexed 50+ embedded boards (Raspberry Pi 5, Orange Pi 5, ESP32, STM32) with pinout maps and thermal metrics",
      "Engineered instant client-side parametric search across RAM, processor architecture, and GPIO capabilities",
      "Implemented responsive SVG pinout visualizations and side-by-side spec comparison matrices",
    ],
    outcome: "50+ SBCs cataloged and used by robotics makers and embedded engineers",
    skills: ["JavaScript", "React", "Node.js", "Hardware Specs", "REST APIs", "SVG"],
    color: "#0072E3",
    fg: "light",
  },
  {
    company: "Distributed Web Architectures",
    role: "Full Stack Engineer & Tooling Developer",
    type: "Freelance",
    location: "India",
    period: "2024",
    summary:
      "Architected high-throughput web applications including SnipUrl (URL shortener), Instome (social platform), and Inventory-Flow.",
    achievements: [
      "Engineered SnipUrl with Base62 hashing and sub-15ms edge redirection with real-time telemetry",
      "Built Instome with virtualized infinite feed scrolling and optimistic UI interactions",
      "Designed Inventory-Flow transactional locking mechanisms preventing race conditions during concurrent stock updates",
    ],
    outcome: "Sub-second load times and zero-concurrency-error database transactions",
    skills: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    color: "#AB54F7",
    fg: "light",
  },
  {
    company: "SolFinder Research",
    role: "Lead Frontend Engineer & UI Architect",
    type: "Full-time",
    location: "India",
    period: "2024",
    summary:
      "Engineered modern technology company portal featuring interactive research showcases, careers management, and dynamic team dashboards.",
    achievements: [
      "Built clean, modular HTML5/CSS3/JavaScript components with zero bloated third-party overhead",
      "Structured semantic layouts and ARIA landmarks delivering 100/100 Lighthouse performance and accessibility",
      "Designed dynamic whitepaper presentation layouts and team collaboration interfaces",
    ],
    outcome: "100/100 Lighthouse performance and mobile-first responsive architecture",
    skills: ["HTML5", "CSS3", "JavaScript", "UI/UX Architecture", "Performance"],
    color: "#00AA3C",
    fg: "light",
  },
  {
    company: "Invento Cloud Platform",
    role: "Python Flask & Database Engineer",
    type: "Freelance",
    location: "India",
    period: "2023 – 2024",
    summary:
      "Engineered full-featured inventory management platform utilizing Python Flask and cloud-hosted Supabase PostgreSQL.",
    achievements: [
      "Modeled relational schemas for categories, suppliers, and transaction audit trails in Supabase PostgreSQL",
      "Developed defensive REST endpoints with automated low-stock threshold alert triggers",
      "Integrated responsive Bootstrap interfaces for seamless mobile inventory management",
    ],
    outcome: "Replaced fragile spreadsheets with an automated multi-user cloud DBMS",
    skills: ["Python", "Flask", "Supabase", "PostgreSQL", "REST APIs"],
    color: "#FF6A00",
    fg: "light",
  },
  {
    company: "GitHub Developer Ecosystem",
    role: "Open Source Creator (@2006-Aman)",
    type: "Full-time",
    location: "India",
    period: "2023 – Present",
    summary:
      "Maintaining 30+ public repositories spanning machine learning pipelines, developer productivity CLIs, and modern MERN architectures.",
    achievements: [
      "Published GitPilot CLI automating semantic branching and release management",
      "Authored foundational MERN stack templates and modular educational codebases (knowledgeX, Quizonic)",
      "Maintained clean documentation, reproducibility scripts, and automated CI validation",
    ],
    outcome: "30+ active repositories with verifiable code quality and public commits",
    skills: ["Git", "GitHub Actions", "MERN Stack", "CLI Tooling", "CI/CD"],
    color: "#181717",
    fg: "light",
  },
];
