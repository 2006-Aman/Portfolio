/* THE JOURNEY — the chapters the light tunnel travels through for Aman Mangla.
   No years displayed, focusing purely on architectural milestones and real projects. */

export type Chapter = {
  id: string;
  step?: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "algorithms-dsa",
    step: "01",
    title: "Algorithms, Data Structures & Core CS",
    place: "Chitkara University",
    story:
      "Mastered computer science foundations, algorithm design, and system principles. Solved 250+ algorithmic challenges across LeetCode, CodeChef, and GeeksforGeeks, developing rigorous problem-solving intuition and code optimization skills.",
    bridge: "Algorithmic thinking laid the bedrock for architecting scalable software systems.",
    fr: {
      title: "Algorithmes, Structures de Données & Fondations",
      place: "Université de Chitkara",
      story:
        "Maîtrise des fondements informatiques et conception algorithmique. Plus de 250 défis résolus sur LeetCode, CodeChef et GFG.",
      bridge: "La rigueur algorithmique a forgé les bases de systèmes scalables.",
    },
  },
  {
    id: "snipurl-caching",
    step: "02",
    title: "High-Speed Web Systems & Redis Caching",
    place: "Full Stack Lab",
    story:
      "Engineered Snipurl, a full-stack URL shortening service utilizing the MERN stack (MongoDB, Express, React, Node.js) paired with Redis in-memory caching to achieve ultra-low-latency redirection with sleek dark-mode UX.",
    bridge: "Bridging fast database caching with responsive client-side architectures.",
    fr: {
      title: "Systèmes Web Rapides & Cache Redis",
      place: "Laboratoire Full Stack",
      story:
        "Conception de Snipurl avec la stack MERN et cache Redis en mémoire pour des redirections ultra-rapides.",
      bridge: "Associer des caches mémoire performants à des interfaces modernes.",
    },
  },
  {
    id: "gitpilot-analytics",
    step: "03",
    title: "Intelligent GitHub Repository Companion",
    place: "Production Systems",
    story:
      "Built GitPilot with Next.js 16 (App Router), TypeScript, Prisma ORM, and MongoDB. Integrated Octokit GitHub REST APIs with caching to track real-time repository health, stars, forks, and code analytics without rate limits.",
    bridge: "Building developer-first tools that eliminate friction and boost velocity.",
    fr: {
      title: "Compagnon Intelligent de Dépôts GitHub",
      place: "Systèmes de Production",
      story:
        "Développement de GitPilot avec Next.js 16, TypeScript, Prisma et MongoDB. Intégration de l'API Octokit pour analyser la santé des dépôts.",
      bridge: "Concevoir des outils pensés pour les développeurs.",
    },
  },
  {
    id: "inventory-flow-ml",
    step: "04",
    title: "Predictive ML & Inventory Intelligence",
    place: "Applied AI Lab",
    story:
      "Architected Inventory-Flow to solve real supply chain inefficiencies. Built predictive demand forecasting models in Python with scikit-learn, evaluating sales velocity and lead times to automate multi-SKU replenishment.",
    bridge: "Translating statistical machine learning into automated business decisions.",
    fr: {
      title: "ML Prédictif & Intelligence des Stocks",
      place: "Laboratoire IA Appliquée",
      story:
        "Création d'Inventory-Flow pour optimiser la chaîne logistique. Modèles prédictifs scikit-learn pour anticiper la demande et éviter les ruptures.",
      bridge: "Mettre le machine learning au service de décisions concrètes.",
    },
  },
  {
    id: "knowledgex-multiagent",
    step: "05",
    title: "Multi-Agent Knowledge Mining & Consulting Platform",
    place: "Azure AI & Generative Lab",
    story:
      "Engineered KnowledgeX, a flagship AI knowledge mining platform using a collaborative multi-agent architecture with 6 specialized agents. Integrated Azure AI Foundry & Supabase pgvector for grounded, hallucination-free RAG synthesis.",
    bridge: "Pushing into autonomous multi-agent intelligence and contextual retrieval.",
    fr: {
      title: "Plateforme IA Multi-Agents & RAG",
      place: "Laboratoire Azure AI & Génératif",
      story:
        "Conception de KnowledgeX avec une architecture de 6 agents collaboratifs. RAG ancré avec Azure AI Foundry et Supabase pgvector.",
      bridge: "Explorer l'intelligence multi-agents autonome et la recherche vectorielle.",
    },
  },
  {
    id: "sih-ieee-impact",
    step: "06",
    title: "Smart India Hackathon & IEEE Community Impact",
    place: "National Hackathons & IEEE EPICS",
    story:
      "Cleared the first two rounds of Smart India Hackathon (SIH), solving national-scale problem statements. Active contributor in IEEE EPICS, collaborating on technology-driven community projects to address local societal challenges.",
    bridge: "Building engineering solutions that serve real people and create lasting impact.",
    fr: {
      title: "Smart India Hackathon & Impact Communautaire IEEE",
      place: "Hackathons Nationaux & IEEE EPICS",
      story:
        "Qualification aux deux premiers tours du Smart India Hackathon (SIH). Participant actif à IEEE EPICS pour des solutions d'ingénierie solidaire.",
      bridge: "Bâtir des technologies qui ont un impact réel sur la société.",
    },
  },
];
