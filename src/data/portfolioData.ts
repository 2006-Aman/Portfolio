import { Project, Skill, ExperienceItem, JourneyChapter } from '../types';

export const JOURNEY_CHAPTERS: JourneyChapter[] = [
  {
    id: "chapter-01",
    chapterNumber: "01",
    yearBadge: "ORIGINS // TERMUX & C",
    title: "Genesis: The Terminal & System Roots",
    tagline: "From raw C pointers and POSIX shells to mobile hacker rigs",
    description: "My journey kicked off not in high-end workstations, but in raw terminal environments. Learning low-level C programming, understanding memory management, debugging bash pipelines, and turning an Android device into a full developer environment using Termux and Kali Linux.",
    theme: "emerald",
    shape3D: "cube",
    iconName: "Terminal",
    metricsBadge: "100+ Shell Scripts Authored",
    achievements: [
      "Configured complete mobile POSIX coding environment using Kali Linux & Termux",
      "Mastered foundational C algorithms, pointer arithmetic, and system calls",
      "Authored custom CLI utilities and automation pipelines in Bash & Python"
    ],
    techStack: ["C Programming", "Kali Linux", "Termux", "Bash", "Python", "Git"]
  },
  {
    id: "chapter-02",
    chapterNumber: "02",
    yearBadge: "EMBEDDED // HARDWARE LAB",
    title: "Silicon Horizons: SBCs & boardVault",
    tagline: "Decoding Single Board Computers & Microcontroller architectures",
    description: "Driven by curiosity about how software talks to physical silicon, I dove deep into Single Board Computers (Raspberry Pi 5, Orange Pi 5) and microcontrollers (ESP32, STM32, Arduino). Seeing no unified comparison platform for embedded makers, I built and launched boardVault.",
    theme: "amber",
    shape3D: "chip",
    iconName: "Cpu",
    metricsBadge: "50+ Hardware Specs Cataloged",
    projectLink: {
      label: "Explore boardVault SaaS",
      url: "https://github.com/Aman-kumar2006/boardVault",
      isExternal: true
    },
    achievements: [
      "Benchmarked processing speed, thermal throttling, and GPIO configurations across 50+ boards",
      "Engineered the boardVault comparison engine with parametric filtering",
      "Designed high-performance responsive UI for desktop and mobile makers"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "SBC Hardware", "ESP32"]
  },
  {
    id: "chapter-03",
    chapterNumber: "03",
    yearBadge: "IMPACT // PRODUCTION SAAS",
    title: "Engineering for Humanity: foodloop.ai & SolFinder",
    tagline: "Building intelligent platforms that solve societal and enterprise challenges",
    description: "Transitioned from technical exploration into architecting production-ready solutions for real-world impact. Built foodloop.ai to combat food waste using AI freshness prediction and donor-shelter routing, followed by the SolFinder enterprise research portal.",
    theme: "cyan",
    shape3D: "neural",
    iconName: "Sparkles",
    metricsBadge: "Zero-Waste AI Architecture",
    projectLink: {
      label: "Inspect foodloop.ai",
      url: "https://github.com/Aman-kumar2006/foodloop.ai",
      isExternal: true
    },
    achievements: [
      "Architected food waste diversion model prioritizing donations based on shelf-life heuristics",
      "Engineered interactive geospatial routing matching kitchens with local food shelters",
      "Built enterprise-ready SolFinder technology showcase with 100/100 Lighthouse performance"
    ],
    techStack: ["TypeScript", "React", "AI APIs", "Leaflet", "Node.js", "Modern UX"]
  },
  {
    id: "chapter-04",
    chapterNumber: "04",
    yearBadge: "CREATIVE // SPATIAL 3D",
    title: "Transcending the Flat Screen: 3D Spatial WebGL",
    tagline: "Breathing life into the web with real-time physics and particle matrices",
    description: "Standard flat websites felt static. I embraced Three.js and custom WebGL shaders to engineer dimensional web experiences where data physically deconstructs, orbits, and responds to scroll velocity and user touch.",
    theme: "purple",
    shape3D: "scatter",
    iconName: "Layers",
    metricsBadge: "1800+ Real-time 3D Particles",
    achievements: [
      "Engineered scroll-velocity linked particle dispersion algorithms in Three.js",
      "Built custom Web Audio synthesizer generating zero-asset audio directly in the browser",
      "Crafted 3D deconstruction matrices showcasing hardware and software architecture shards"
    ],
    techStack: ["Three.js", "WebGL", "BufferGeometry", "Web Audio API", "CSS 3D Transforms"]
  },
  {
    id: "chapter-05",
    chapterNumber: "05",
    yearBadge: "CURRENT // B.TECH CSE & HORIZON",
    title: "The Next Frontier: Continuous Evolution",
    tagline: "Computer Science fundamentals, open-source craft, and the road ahead",
    description: "Currently pursuing B.Tech in Computer Science & Engineering. Deepening algorithmic problem solving (DSA), distributed systems, and modern software architectures. Actively looking for high-impact software engineering internships and ambitious developer teams.",
    theme: "sapphire",
    shape3D: "portal",
    iconName: "Zap",
    metricsBadge: "15+ Public Repos & Growing",
    projectLink: {
      label: "View All GitHub Repositories",
      url: "https://github.com/2006-Aman",
      isExternal: true
    },
    achievements: [
      "15+ public repositories documented across GitHub (@2006-Aman / @Aman-kumar2006)",
      "Continuous algorithmic problem solving in DSA, Operating Systems, and DBMS",
      "Available for Summer / Fall internships, full-stack contracts, and open collaborations"
    ],
    techStack: ["Data Structures", "Algorithms", "Full-Stack Web", "DevOps", "Three.js"]
  }
];

export const PERSONAL_INFO = {
  name: "Aman Kumar",
  handle: "2006-Aman",
  githubHandleAlt: "Aman-kumar2006",
  githubUrl: "https://github.com/2006-Aman",
  githubAltUrl: "https://github.com/Aman-kumar2006",
  email: "amankumar.kumar2006@gmail.com",
  role: "Full-Stack Developer & 3D Web Architect",
  subRole: "Computer Science & Engineering (B.Tech CSE)",
  location: "India",
  status: "Available for Internships & High-Impact Roles",
  bio: "A forward-thinking Computer Science student & Full-Stack Developer driven to engineer high-performance web applications, interactive 3D interfaces, and intelligent SaaS solutions. Combining deep Linux/Termux system literacy with modern frontend craft (React, TypeScript, Three.js) and robust backend logic.",
  stats: [
    { label: "Public Repositories", value: "15+" },
    { label: "Core Tech Stacks", value: "MERN + Python" },
    { label: "Engineering Passion", value: "100%" },
    { label: "Code Craft Hours", value: "2500+" }
  ],
  socialLinks: {
    github: "https://github.com/2006-Aman",
    githubAlt: "https://github.com/Aman-kumar2006",
    linkedin: "https://www.linkedin.com/in/aman-kumar-web",
    email: "mailto:amankumar.kumar2006@gmail.com"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "boardvault",
    title: "boardVault",
    tagline: "SaaS Knowledge & Benchmarking Hub for SBCs and Microcontrollers",
    description: "An advanced cloud-ready SaaS application designed for embedded engineers and IoT makers. Catalogs, compares, and benchmarks Single Board Computers (Raspberry Pi, Orange Pi, Rock Pi) and Microcontrollers (ESP32, STM32, Arduino) with pinouts, power ratings, and compute metrics.",
    category: "saas",
    categoryLabel: "SaaS Platform",
    techStack: ["React", "TypeScript", "Node.js", "Tailwind CSS", "REST API", "Lucide"],
    githubUrl: "https://github.com/Aman-kumar2006/boardVault",
    liveUrl: "https://boardvault.netlify.app",
    featured: true,
    metrics: "50+ Hardware Specs Indexed",
    highlights: [
      "Dynamic comparative analysis engine for power draw, memory bandwidth, and GPIO pin mapping",
      "Interactive filtering for maker projects: AI edge compute vs low-power telemetry",
      "Modular responsive UI architecture engineered for rapid lookups and community contributions"
    ],
    architecture: [
      "Component-driven React view layer with strict TypeScript contracts",
      "Normalized hardware specs schema for instant parametric search",
      "Responsive glassmorphism dashboard optimized for desktop and mobile workstations"
    ],
    bannerGradient: "from-cyan-600 via-blue-700 to-indigo-900",
    iconName: "Cpu"
  },
  {
    id: "foodloop",
    title: "foodloop.ai",
    tagline: "AI-Powered Surplus Food Redistribution & Spoilage Prevention",
    description: "A smart sustainability platform connecting food producers, restaurants, and surplus food donors directly with local community food banks and NGOs. Features intelligent spoilage forecasting algorithms and real-time geographic dropoff logistics.",
    category: "ai",
    categoryLabel: "AI & Sustainability",
    techStack: ["TypeScript", "React", "Python", "AI Vision API", "Tailwind CSS", "Leaflet"],
    githubUrl: "https://github.com/Aman-kumar2006/foodloop.ai",
    liveUrl: "https://foodloop-ai.netlify.app",
    featured: true,
    metrics: "Zero Waste Mission Architecture",
    highlights: [
      "Smart perishability tracking model prioritizing donations near expiration",
      "Automated logistics route coordinator matching high-capacity food shelters",
      "Impact analytics dashboard tracking kilograms of food diverted and CO2 emissions prevented"
    ],
    architecture: [
      "Reactive TypeScript frontend with state-driven donation workflows",
      "Algorithmic expiration prioritization engine",
      "Lightweight geocoding integration for location-aware donor matching"
    ],
    bannerGradient: "from-emerald-600 via-teal-700 to-cyan-900",
    iconName: "Sparkles"
  },
  {
    id: "solfinder",
    title: "SolFinder-Research",
    tagline: "Enterprise Technology Portal & Research Management Suite",
    description: "A comprehensive digital ecosystem built for modern technological research ventures. Showcases scientific publications, enterprise service roadmaps, team leadership matrices, and interactive project discovery pipelines.",
    category: "frontend",
    categoryLabel: "Enterprise & Research",
    techStack: ["HTML5", "CSS3", "JavaScript ES6+", "Modern UI/UX", "Responsive Design"],
    githubUrl: "https://github.com/Aman-kumar2006/SolFinder-Research",
    liveUrl: "https://solfinder-research.netlify.app",
    featured: true,
    metrics: "100% Responsive & SEO Optimized",
    highlights: [
      "Full corporate research layout with dynamic publication search and career portal",
      "Interactive team management and service portfolio modules",
      "Fluid CSS grid and flexbox architecture achieving near-perfect Lighthouse performance scores"
    ],
    architecture: [
      "Semantic HTML5 structure for high accessibility and screen-reader indexing",
      "Modular CSS architecture with custom variables and smooth transition curves",
      "Vanilla ES6+ micro-interactions with zero third-party framework overhead"
    ],
    bannerGradient: "from-purple-600 via-violet-700 to-slate-900",
    iconName: "Layers"
  },
  {
    id: "foodfest",
    title: "FoodFest Culinary Portal",
    tagline: "Interactive Gourmet Festival & Exhibition Platform",
    description: "A rich digital culinary experience crafted to celebrate gastronomy and food festivals. Highlights dynamic menu cards, chef portfolios, event booking previews, and vibrant responsive styling.",
    category: "frontend",
    categoryLabel: "Interactive Web",
    techStack: ["HTML5", "CSS3", "JavaScript", "Animation Effects", "Grid Layout"],
    githubUrl: "https://github.com/Aman-kumar2006/FoodFest",
    liveUrl: "https://foodfest-showcase.netlify.app",
    featured: false,
    highlights: [
      "Vibrant card-based menu navigation with appetizing visual styling",
      "Responsive event scheduler and ticketing interactive simulation",
      "Smooth micro-interactions and mobile touch-friendly layout"
    ],
    architecture: [
      "Mobile-first responsive styling utilizing modern CSS Flexbox and Grid",
      "Lightweight script execution for seamless performance on low-bandwidth connections"
    ],
    bannerGradient: "from-amber-600 via-orange-700 to-red-900",
    iconName: "Flame"
  },
  {
    id: "portfolio-website",
    title: "Core Web Portfolio Engine",
    tagline: "Initial Responsive Personal Showcase & Creative Sandbox",
    description: "The initial responsive portfolio codebase engineered to document projects, programming milestones, and technical competencies using foundational web technologies.",
    category: "frontend",
    categoryLabel: "Personal Project",
    techStack: ["HTML5", "CSS3", "JavaScript", "Netlify Deployment"],
    githubUrl: "https://github.com/Aman-kumar2006/portfolio-website",
    liveUrl: "https://aman-kumar-portfolio.netlify.app",
    featured: false,
    highlights: [
      "Clean modular code structure with dedicated sections for skills and certifications",
      "Automated CI/CD pipeline integrated with Netlify for instant branch deployments"
    ],
    architecture: [
      "Semantic architecture with fast asset bundling and zero runtime dependencies"
    ],
    bannerGradient: "from-blue-600 via-indigo-700 to-purple-900",
    iconName: "Globe"
  },
  {
    id: "cli-system-tools",
    title: "Kali & Termux System Toolsuite",
    tagline: "Developer Automation Scripts & Linux Environment Tools",
    description: "A specialized collection of shell scripts, system diagnostics, Python command-line calculators, and automation tools built to supercharge headless development across Kali Linux and Android Termux.",
    category: "devops",
    categoryLabel: "CLI & System Ops",
    techStack: ["Python 3", "Bash / Shell", "Kali Linux", "Termux", "Git"],
    githubUrl: "https://github.com/Aman-kumar2006",
    liveUrl: "https://github.com/Aman-kumar2006",
    featured: false,
    highlights: [
      "Rapid CLI math and algorithmic calculation engines with instant terminal feedback",
      "Automated environment initialization scripts for mobile developer workflows in Termux",
      "Robust error handling and cross-platform POSIX compliance"
    ],
    architecture: [
      "Modular Python and Bash scripts designed for memory-constrained embedded environments"
    ],
    bannerGradient: "from-slate-700 via-gray-800 to-zinc-950",
    iconName: "Terminal"
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    categoryLabel: "Frontend",
    proficiency: 90,
    icon: "Atom",
    experience: "Modern SPA development, Hooks, Custom State, Virtual DOM",
    description: "Architecting modular, highly responsive component hierarchies and state-driven web applications.",
    tags: ["Hooks", "Context API", "Component Lifecycle", "Performance Tuning"]
  },
  {
    name: "TypeScript & JavaScript (ES6+)",
    category: "languages",
    categoryLabel: "Languages",
    proficiency: 88,
    icon: "FileCode",
    experience: "Strong static typing, asynchronous programming, closures, promises",
    description: "Writing strict, enterprise-ready type contracts, clean functional paradigms, and modern async workflows.",
    tags: ["Generics", "Type Guards", "Async/Await", "Event Loop"]
  },
  {
    name: "Three.js & 3D WebGL",
    category: "frontend",
    categoryLabel: "Frontend",
    proficiency: 82,
    icon: "Box",
    experience: "3D scene composition, geometry shaders, particle scatter physics, lighting",
    description: "Creating interactive 3D viewports, scroll-triggered particle explosions, camera choreography, and mesh morphing.",
    tags: ["Particle Systems", "PerspectiveCamera", "Lighting & Materials", "Scroll Linking"]
  },
  {
    name: "Tailwind CSS & Modern CSS3",
    category: "frontend",
    categoryLabel: "Frontend",
    proficiency: 95,
    icon: "Palette",
    experience: "Glassmorphism, custom design systems, animations, grid/flexbox layouts",
    description: "Crafting pixel-perfect cyber-dark interfaces, glowing neon borders, and fluid mobile-responsive breakpoints.",
    tags: ["Flexbox", "CSS Grid", "Keyframe Animations", "Design Systems"]
  },
  {
    name: "HTML5 Semantic Standards",
    category: "frontend",
    categoryLabel: "Frontend",
    proficiency: 95,
    icon: "Code",
    experience: "Accessibility, SEO optimization, DOM structure, microdata",
    description: "Engineering rock-solid semantic foundations for search visibility, speed, and cross-browser accessibility.",
    tags: ["Semantic Tags", "SEO", "ARIA", "Lighthouse 100"]
  },

  // Backend & Databases
  {
    name: "Node.js & Express",
    category: "backend",
    categoryLabel: "Backend",
    proficiency: 84,
    icon: "Server",
    experience: "REST API development, routing, middleware, authentication flows",
    description: "Building scalable backend services, asynchronous worker queues, and clean RESTful endpoint contracts.",
    tags: ["Express.js", "REST APIs", "Middleware", "JSON Web Tokens"]
  },
  {
    name: "SQL & Relational Databases",
    category: "backend",
    categoryLabel: "Backend",
    proficiency: 80,
    icon: "Database",
    experience: "Schema design, relational queries, indexing, normalization",
    description: "Designing efficient database schemas, writing complex join queries, and optimizing table transactions.",
    tags: ["PostgreSQL", "MySQL", "Joins", "Data Normalization"]
  },
  {
    name: "Python",
    category: "languages",
    categoryLabel: "Languages",
    proficiency: 85,
    icon: "Binary",
    experience: "CLI tool development, algorithmic scripting, data structures, automation",
    description: "Developing rapid scripts, command-line utilities, AI API integrations, and mathematical problem-solving models.",
    tags: ["Automation", "Data Structures", "APIs", "CLI Development"]
  },
  {
    name: "C Programming",
    category: "languages",
    categoryLabel: "Languages",
    proficiency: 78,
    icon: "Cpu",
    experience: "Pointers, dynamic memory allocation, systems fundamentals, algorithms",
    description: "Solid grasp of computer architecture, memory management, pointers, and foundational algorithms.",
    tags: ["Pointers", "Memory Management", "Data Structures", "Computer Architecture"]
  },

  // Systems & DevOps
  {
    name: "Kali Linux & Termux",
    category: "devops",
    categoryLabel: "Systems & DevOps",
    proficiency: 88,
    icon: "Terminal",
    experience: "Headless mobile dev, package compilation, shell automation, security tools",
    description: "Hands-on experience working directly in Linux shells, configuring Android Termux developer environments, and running security tooling.",
    tags: ["Bash", "Linux CLI", "Android Termux", "Environment Config"]
  },
  {
    name: "Git & GitHub Version Control",
    category: "devops",
    categoryLabel: "Systems & DevOps",
    proficiency: 90,
    icon: "GitBranch",
    experience: "Branching strategies, pull requests, collaboration, GitHub Pages/Actions",
    description: "Maintaining disciplined version control workflows, multi-repository management, and open-source contributions.",
    tags: ["Git Flow", "Rebasing", "Open Source", "Branching"]
  },
  {
    name: "Cloud Deployment (Netlify / Vercel)",
    category: "devops",
    categoryLabel: "Systems & DevOps",
    proficiency: 86,
    icon: "Cloud",
    experience: "Automated builds, DNS setup, edge caching, continuous integration",
    description: "Deploying high-availability web applications with zero downtime, SSL certificates, and lightning-fast edge delivery.",
    tags: ["CI/CD", "Serverless Edge", "DNS & Domains", "Preview Deploys"]
  }
];

export const TIMELINE: ExperienceItem[] = [
  {
    id: "btech-cse",
    role: "B.Tech in Computer Science & Engineering",
    organization: "University Engineering Institute",
    period: "2024 - Present",
    type: "education",
    description: "Pursuing bachelor's degree with a focus on core computer science foundations, algorithms, distributed systems, and modern software design patterns.",
    achievements: [
      "Mastering Data Structures & Algorithms (DSA), Operating Systems, and Database Management Systems",
      "Spearheading college web development projects and collaborative developer workshops",
      "Actively developing production-ready open source projects on GitHub"
    ],
    technologies: ["Data Structures", "Algorithms", "C", "Python", "Computer Networks", "DBMS"]
  },
  {
    id: "foodloop-launch",
    role: "Lead Full-Stack Developer",
    organization: "foodloop.ai Initiative",
    period: "2024",
    type: "project",
    description: "Engineered the prototype for an AI & IoT-assisted surplus food distribution platform to combat community food waste.",
    achievements: [
      "Designed dynamic donation intake and routing workflow in TypeScript",
      "Created location-based matching mechanism pairing donors with local shelters",
      "Architected responsive dashboard showing food rescue milestones"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST API", "Leaflet"]
  },
  {
    id: "boardvault-launch",
    role: "Creator & System Architect",
    organization: "boardVault Platform",
    period: "2024",
    type: "project",
    description: "Built the comprehensive hardware comparison and benchmarking web application for Single Board Computers and microcontrollers.",
    achievements: [
      "Engineered parametric filter logic comparing processing architectures, I/O ports, and prices",
      "Indexed 50+ modern boards including Raspberry Pi 5, Orange Pi 5, and ESP32 series",
      "Delivered ultra-smooth glassmorphism UI with zero layout shifts"
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "Hardware Specs", "Netlify"]
  },
  {
    id: "linux-termux-journey",
    role: "System Exploration & Developer Tools",
    organization: "Open Source Community",
    period: "2023 - Present",
    type: "opensource",
    description: "Explored low-level Linux systems, command-line productivity hacks, and mobile terminal development using Android Termux and Kali Linux.",
    achievements: [
      "Configured robust mobile developer workflow enabling full-stack coding on portable devices",
      "Authored CLI utilities in Python and Shell for rapid development tasks",
      "Created educational resources and practice repositories for peers"
    ],
    technologies: ["Kali Linux", "Termux", "Bash", "Shell Scripts", "Git", "VS Code"]
  }
];

export const TERMINAL_COMMANDS_HELP = [
  { cmd: "help", desc: "List all available interactive terminal commands" },
  { cmd: "about", desc: "Display Aman Kumar's bio and background" },
  { cmd: "skills", desc: "Print technical competencies and proficiency breakdown" },
  { cmd: "projects", desc: "List featured repositories and live project URLs" },
  { cmd: "repo <name>", desc: "Open project GitHub repository (e.g., repo boardvault)" },
  { cmd: "scatter", desc: "Trigger 3D quantum particle scatter animation mode" },
  { cmd: "contact", desc: "Print verified contact details and communication channels" },
  { cmd: "neofetch", desc: "Render developer system information and terminal art" },
  { cmd: "matrix", desc: "Toggle cybernetic matrix digital rain visualization" },
  { cmd: "theme <color>", desc: "Switch theme: cyan, purple, emerald, or amber" },
  { cmd: "clear", desc: "Clear the terminal screen buffer" }
];
