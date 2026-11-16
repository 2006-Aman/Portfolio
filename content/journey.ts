/* THE JOURNEY — the chapters the light tunnel travels through. */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "roots",
    year: "2021",
    title: "Origins: The Terminal & C Roots",
    place: "India",
    story:
      "Where the journey kicked off. Exploring low-level C programming, memory allocation, Linux system internals, and turning an Android device into a mobile dev rig with Termux.",
    bridge: "Low-level system mechanics formed the foundation for everything that followed.",
    fr: {
      title: "Origines : Le Terminal et le C",
      place: "Inde",
      story:
        "Là où l’histoire commence. Apprentissage du C, allocation mémoire, systèmes Linux et environnement mobile avec Termux.",
      bridge: "Les mécanismes bas niveau ont forgé les fondations de tout le reste.",
    },
  },
  {
    id: "web-foundations",
    year: "2022",
    title: "Entering Web & JavaScript Ecosystems",
    place: "India",
    story:
      "Diving into modern web engineering: mastering JavaScript, component lifecycles in React, CSS architecture, and building responsive client-side applications.",
    bridge: "Moving from command-line scripts to interactive visual interfaces.",
    fr: {
      title: "Découverte de l’Écosystème Web",
      place: "Inde",
      story:
        "Plongée dans le web moderne : JavaScript, React, interfaces interactives et architecture CSS.",
      bridge: "Passage des scripts en ligne de commande aux interfaces visuelles interactives.",
    },
  },
  {
    id: "fullstack",
    year: "2023",
    title: "Full Stack Architectures & Cloud Backends",
    place: "India",
    story:
      "Scaling backend systems with Node.js, Express, MongoDB, and PostgreSQL. Engineering secure REST APIs, authentication flows, and real-time state synchronization.",
    bridge: "Connecting databases, APIs, and client interfaces into unified platforms.",
    fr: {
      title: "Architectures Full Stack & Cloud",
      place: "Inde",
      story:
        "Développement backend avec Node.js, Express, bases de données SQL/NoSQL et conception d'APIs REST sécurisées.",
      bridge: "Connexion fluide entre bases de données, APIs et interfaces réactives.",
    },
  },
  {
    id: "hardware-boardvault",
    year: "2024",
    title: "Silicon Horizons & boardVault SaaS",
    place: "Embedded Lab · India",
    story:
      "Deep dive into Single Board Computers (Raspberry Pi 5, Orange Pi 5) and microcontrollers (ESP32, STM32). Architected and deployed boardVault to benchmark 50+ boards.",
    bridge: "Building products that bridge physical hardware with cloud comparison tools.",
    fr: {
      title: "Matériel Embarqué & SaaS boardVault",
      place: "Laboratoire Embarqué · Inde",
      story:
        "Exploration des cartes SBC (Raspberry Pi 5, Orange Pi 5) et microcontrôleurs (ESP32). Conception et déploiement du SaaS boardVault.",
      bridge: "Création de plateformes reliant le matériel physique au cloud.",
    },
  },
  {
    id: "ai-and-3d",
    year: "2025",
    title: "AI Integrations, 3D WebGL & Modern UX",
    place: "India",
    story:
      "Engineering next-level 3D spatial web experiences with Three.js, GSAP, and WebGL. Implementing intelligent LLM agent pipelines and sustainable food logistics in foodloop.ai.",
    bridge: "Merging spatial computational graphics with intelligent AI architectures.",
    fr: {
      title: "IA, WebGL 3D & UX Moderne",
      place: "Inde",
      story:
        "Création d'expériences 3D immersives avec Three.js, GSAP et WebGL. Intégration de modèles IA et du projet foodloop.ai.",
      bridge: "Fusion des graphismes spatiaux et de l'intelligence artificielle.",
    },
  },
  {
    id: "production-frontier",
    year: "2026",
    title: "Global Impact & Next-Gen Engineering",
    place: "India & Beyond",
    story:
      "Authoring high-performance open-source libraries, architecting enterprise full-stack web applications, and pushing the boundaries of web engineering.",
    bridge: "Building resilient digital systems that scale effortlessly.",
    fr: {
      title: "Impact Global & Ingénierie Nouvelle Génération",
      place: "Inde & International",
      story:
        "Conception de bibliothèques open source performantes et d'applications web d'entreprise robustes.",
      bridge: "Construire des systèmes numériques résilients et évolutifs.",
    },
  },
];
