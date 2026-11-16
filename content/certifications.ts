/* Credentials — professional certification and engineering mastery records for Aman Kumar. */

export type Cert = {
  no: string;
  issuer: string | null;
  logo?: { src: string; aspect: number };
  title: string;
  year: string | null;
  credentialId: string | null;
  credentialUrl?: string;
  verified: boolean;
  skills: string[];
  metric?: { value: string; label: string };
  fr?: { title?: string; skills?: string[]; metricLabel?: string };
};

export const CERTS: Cert[] = [
  {
    no: "1.1",
    issuer: "Machine Learning & AI",
    logo: { src: "/images/issuers/ibm.png", aspect: 1000 / 400 },
    title: "Machine Learning & Predictive Modeling Mastery",
    year: "2024",
    credentialId: "ML-PREDICT-2024",
    verified: true,
    skills: [
      "Supervised & unsupervised learning pipelines",
      "Feature engineering & statistical regression",
      "Model evaluation, cross-validation & hyperparameter tuning",
    ],
    metric: { value: "PyTorch", label: "Core ML Stack" },
  },
  {
    no: "1.2",
    issuer: "Full Stack Development",
    logo: { src: "/images/issuers/google.png", aspect: 1000 / 330 },
    title: "Full Stack Web Systems & Modern React/Next.js",
    year: "2024",
    credentialId: "FULLSTACK-2024",
    verified: true,
    skills: [
      "Client-server component architecture (Next.js)",
      "High-throughput RESTful API design (Node.js & Express)",
      "State management, optimistic updates & performance optimization",
    ],
    metric: { value: "Next.js", label: "Production Web" },
  },
  {
    no: "1.3",
    issuer: "Cloud & Database Architecture",
    logo: { src: "/images/issuers/microsoft.png", aspect: 2110 / 540 },
    title: "Relational Database Design & Cloud PostgreSQL",
    year: "2024",
    credentialId: "DB-POSTGRES-2024",
    verified: true,
    skills: [
      "ACID transactional integrity & row-level locking",
      "Index optimization (B-Tree) for O(1) query latency",
      "Supabase PostgreSQL integration & cloud migrations",
    ],
    metric: { value: "PostgreSQL", label: "ACID Database" },
  },
  {
    no: "1.4",
    issuer: "Generative AI Engineering",
    logo: { src: "/images/issuers/ibm.png", aspect: 1000 / 400 },
    title: "RAG Architectures & LLM System Integration",
    year: "2025",
    credentialId: "RAG-LLM-2025",
    verified: true,
    skills: [
      "Semantic text chunking & dense vector embeddings",
      "Similarity vector search & reranking algorithms",
      "Grounding prompt engineering & hallucination prevention",
    ],
    metric: { value: "RAG / LLM", label: "Contextual AI" },
  },
  {
    no: "1.5",
    issuer: "Embedded & Hardware Systems",
    logo: { src: "/images/issuers/google.png", aspect: 1000 / 330 },
    title: "Single Board Computers & Microcontroller Architectures",
    year: "2024",
    credentialId: "EMBEDDED-SBC-2024",
    verified: true,
    skills: [
      "Raspberry Pi, Orange Pi & ESP32 benchmarking",
      "GPIO pinout mapping, voltage tolerance & I/O timing",
      "Hardware spec modeling for the boardVault SaaS platform",
    ],
    metric: { value: "boardVault", label: "50+ SBCs" },
  },
];
