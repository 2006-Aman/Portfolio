"use client";

/*
 * Centralised EN/FR store for every user-facing string on the site.
 *
 * Switching is pure React state: scroll position, the active section and all
 * pinned ScrollTriggers survive, with no reload. The choice persists in
 * localStorage and is mirrored onto <html lang> for assistive tech.
 *
 * Proper nouns (companies, products, tools, place names) are deliberately
 * NOT translated. French runs longer than English, so copy here is written
 * to fit the same layout rather than translated literally.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr";

type Entry = { en: string; fr: string };

export const DICT: Record<string, Entry> = {
  /* ---------------- nav ---------------- */
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About", fr: "À propos" },
  "nav.work": { en: "Work", fr: "Projets" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.menu": { en: "Open menu", fr: "Ouvrir le menu" },
  "nav.close": { en: "Close menu", fr: "Fermer le menu" },

  /* ---------------- intro ---------------- */
  "intro.scroll": { en: "Scroll to enter", fr: "Faites défiler pour entrer" },

  /* ---------------- hero ---------------- */
  "hero.kicker": {
    en: "AI & Machine Learning · Full Stack Web Developer",
    fr: "Intelligence Artificielle, ML & Développeur Full Stack",
  },
  "hero.h1a": { en: "Intelligent solutions that", fr: "Des solutions intelligentes qui" },
  "hero.h1aEm": { en: "solve.", fr: "résolvent." },
  "hero.h1b": { en: "Architectures that", fr: "Des architectures qui" },
  "hero.h1bEm": { en: "scale.", fr: "tiennent la charge." },
  "hero.sub": {
    en: "AI & ML Student passionate about building intelligent solutions and solving real-world problems using Machine Learning, Generative AI, and modern Full Stack engineering.",
    fr: "Étudiant en IA & ML passionné par la création de solutions intelligentes et la résolution de problèmes réels grâce au Machine Learning et à l'IA Générative.",
  },
  "hero.cta1": { en: "View My Work", fr: "Voir mes projets" },
  "hero.cta2": { en: "Explore Stack", fr: "Explorer la stack" },
  "hero.scroll": { en: "Scroll to Explore", fr: "Faites défiler" },
  "stat.projects": { en: "Repositories on GitHub", fr: "Dépôts sur GitHub" },
  "stat.years": { en: "Web & Full-Stack Systems", fr: "Systèmes web & full-stack" },
  "stat.countries": { en: "AI & ML Repositories", fr: "Dépôts d'IA & ML" },
  "stat.satisfaction": { en: "Pinned Repositories", fr: "Dépôts épinglés" },

  /* ---------------- about ---------------- */
  "about.eyebrow": { en: "About", fr: "À propos" },
  "about.h2a": { en: "Engineering is how I build —", fr: "L'ingénierie, c’est ma façon de bâtir —" },
  "about.h2b": { en: "curiosity is how I", fr: "la curiosité, ma façon de" },
  "about.h2Em": { en: "lead", fr: "guider" },
  "about.h2c": { en: "it.", fr: "." },
  "about.m1": {
    en: "Public repositories on GitHub @2006-Aman",
    fr: "Dépôts publics sur GitHub @2006-Aman",
  },
  "about.m2": {
    en: "AI & Machine Learning repositories built",
    fr: "Dépôts d'IA et de Machine Learning développés",
  },
  "about.m3": {
    en: "Web applications & full-stack systems",
    fr: "Applications web & systèmes full-stack",
  },
  "about.m4": {
    en: "Pinned & featured repositories",
    fr: "Dépôts épinglés et mis en avant",
  },
  "about.edu": {
    en: "AI & ML Student · B.Tech in Computer Science & Engineering · India · Passionate about building intelligent solutions using Machine Learning & Generative AI",
    fr: "Étudiant IA & ML · B.Tech Informatique · Inde · Passionné par les solutions intelligentes et l'IA Générative",
  },
  "about.cta": { en: "Explore My Work", fr: "Découvrir mes projets" },

  /* ---------------- journey ----------------
     Chapter copy lives in content/journey.ts; only the chrome is here. */
  "journey.eyebrow": { en: "My Journey", fr: "Mon parcours" },
  "journey.enter": { en: "Scroll to travel", fr: "Faites défiler pour avancer" },
  "journey.chapter": { en: "Chapter", fr: "Chapitre" },
  "journey.lede": {
    en: "From low-level terminal roots and C programming to modern full-stack systems and 3D web engineering.",
    fr: "Des racines du terminal et du C aux architectures full-stack modernes et au web 3D.",
  },

  /* ---------------- design stack ---------------- */
  "stack.eyebrow": { en: "Toolkit", fr: "Outils" },
  "stack.h2": { en: "My Tech", fr: "Ma stack" },
  "stack.h2Em": { en: "Stack.", fr: "technique." },
  "stack.lede": {
    en: "The programming languages, frameworks, machine learning libraries, and cloud platforms I use to engineer intelligent solutions and production systems.",
    fr: "Les langages, frameworks, bibliothèques de machine learning et plateformes cloud que j'utilise pour concevoir des systèmes intelligents.",
  },
  "stack.count": { en: "technologies", fr: "technologies" },
  "stack.disciplines": { en: "disciplines", fr: "disciplines" },

  /* ---------------- work ---------------- */
  "work.eyebrow": { en: "Featured Work", fr: "Projets sélectionnés" },
  "work.h2a": { en: "Selected repositories,", fr: "Dépôts sélectionnés," },
  "work.h2b": { en: "engineered to", fr: "conçus pour" },
  "work.h2Em": { en: "perform.", fr: "performer." },
  "work.lede": {
    en: "Predictive ML models, contextual RAG pipelines, embedded hardware SaaS, and high-performance developer tools — all open on GitHub @2006-Aman.",
    fr: "Modèles de ML prédictif, pipelines RAG, SaaS matériel embarqué et outils de développement — tous ouverts sur GitHub @2006-Aman.",
  },
  "work.open": { en: "Open case study", fr: "Voir l’étude de cas" },
  "work.hint": { en: "SCROLL TO BROWSE", fr: "FAITES DÉFILER" },

  /* ---------------- experience ---------------- */
  "exp.eyebrow": { en: "Experience", fr: "Expérience" },
  "exp.h2": { en: "Where I engineered my", fr: "Là où j’ai forgé mon" },
  "exp.h2Em": { en: "craft.", fr: "expertise." },
  "exp.worked": { en: "What I worked on", fr: "Ce sur quoi j’ai travaillé" },
  "exp.impact": { en: "Impact", fr: "Impact" },
  "exp.tools": { en: "Tools & skills", fr: "Outils & compétences" },
  "exp.hint": { en: "SCROLL · CLICK TO JUMP", fr: "DÉFILER · CLIQUER POUR NAVIGUER" },
  "type.Internship": { en: "Internship", fr: "Stage" },
  "type.Full-time": { en: "Full-time", fr: "Temps plein" },
  "type.Hackathon": { en: "Hackathon", fr: "Hackathon" },
  "type.Freelance": { en: "Freelance", fr: "Freelance" },

  /* ---------------- credentials ---------------- */
  "cert.introLabel": { en: "Introduction", fr: "Introduction" },
  "cert.introTitle1": { en: "VERIFIED", fr: "TITRES" },
  "cert.introTitle2": { en: "CREDENTIALS", fr: "VÉRIFIÉS" },
  "cert.introBody": {
    en: "Continuous, applied learning across data, design, marketing and AI — the technical base underneath the product work.",
    fr: "Un apprentissage continu et appliqué en données, design, marketing et IA — la base technique du travail produit.",
  },
  "cert.introNote": {
    en: "Five programmes · Coursera, LinkedIn Learning and hands-on portfolio projects.",
    fr: "Cinq programmes · Coursera, LinkedIn Learning et projets concrets.",
  },
  "cert.eyebrow": { en: "Credentials", fr: "Titres & certifications" },
  "cert.h2": { en: "Credentials", fr: "Certifications" },
  "cert.lede": {
    en: "Professional certifications and credentials earned throughout my design and technology journey.",
    fr: "Les certifications et titres professionnels obtenus tout au long de mon parcours en design et en technologie.",
  },
  "cert.certified": { en: "Certified", fr: "Certifié" },
  "cert.brandRole": { en: "Product Designer", fr: "Product Designer" },
  "cert.issuerTBC": { en: "Issuer — to confirm", fr: "Organisme — à confirmer" },
  "cert.certification": { en: "Certification", fr: "Certification" },
  "cert.verified": { en: "✓ Verified", fr: "✓ Vérifié" },
  "cert.onRequest": { en: "Credential on request", fr: "Justificatif sur demande" },
  "cert.issuedBy": { en: "Issued by", fr: "Délivré par" },
  "cert.year": { en: "Year", fr: "Année" },
  "cert.id": { en: "Credential ID", fr: "N° de justificatif" },
  "cert.tbc": { en: "To confirm", fr: "À confirmer" },
  "cert.skills": { en: "Skills", fr: "Compétences" },
  "cert.verify": { en: "Verify credential ↗", fr: "Vérifier le justificatif ↗" },
  "cert.foot": { en: "Credentials", fr: "Titres" },

  /* ---------------- gallery — the people behind the work ---------------- */
  "gallery.eyebrow": { en: "The Archive", fr: "L’archive" },
  "gallery.h2a": { en: "The people behind", fr: "Celles et ceux derrière" },
  "gallery.h2Em": { en: "the work", fr: "le travail" },
  "gallery.lede": {
    en: "The people, moments and experiences that shaped the work behind the screen.",
    fr: "Les personnes, les moments et les expériences qui ont façonné le travail derrière l’écran.",
  },
  "gallery.alt": {
    en: "A moment with the people behind the work",
    fr: "Un moment avec celles et ceux derrière le travail",
  },
  "gallery.frames": { en: "Frames", fr: "Images" },
  "gallery.hint": { en: "Scroll to travel the archive", fr: "Faites défiler pour parcourir l’archive" },

  /* ---------------- connect ---------------- */
  "connect.eyebrow": { en: "Let’s Connect", fr: "Restons en contact" },
  "connect.h2a": { en: "Let’s build what’s", fr: "Bâtissons ce qui" },
  "connect.h2Em": { en: "next.", fr: "vient." },
  "connect.lede": {
    en: "I’m open to AI & ML engineering roles, full-stack software development, collaborations, and open-source projects — if you’re building intelligent solutions that solve real problems, let's connect.",
    fr: "Je suis ouvert aux opportunités en IA & ML, au développement full-stack, aux collaborations et aux projets open source.",
  },
  "connect.cta": { en: "Start a Conversation", fr: "Démarrer la conversation" },
  "connect.credit": { en: "Designed & Developed by", fr: "Conçu & développé par" },
  "connect.top": { en: "Back to top ↑", fr: "Haut de page ↑" },

  /* ---------------- case study (/work/[slug]) ---------------- */
  "case.back": { en: "← Back to work", fr: "← Retour aux projets" },
  "case.kicker": { en: "Case Study", fr: "Étude de cas" },
  "case.role": { en: "Role", fr: "Rôle" },
  "case.timeline": { en: "Timeline", fr: "Période" },
  "case.focus": { en: "Focus", fr: "Focus" },
  "case.site": { en: "Live product", fr: "Produit en ligne" },
  "case.repo": { en: "Source", fr: "Code source" },
  "case.cover": { en: "COVER", fr: "VISUEL" },
  "case.context": { en: "Context", fr: "Contexte" },
  "case.problem": { en: "The Problem", fr: "Le problème" },
  "case.process": { en: "Process", fr: "Démarche" },
  "case.decisions": { en: "Design Decisions", fr: "Décisions de design" },
  "case.outcome": { en: "Outcome", fr: "Résultats" },
  "case.reflection": { en: "Reflection", fr: "Ce que j’en retire" },
  "case.all": { en: "← All projects", fr: "← Tous les projets" },
  "case.next": { en: "Next project", fr: "Projet suivant" },

  /* ---------------- lab (/tunnel) ---------------- */
  "lab.back": { en: "← PORTFOLIO", fr: "← PORTFOLIO" },
  "lab.hint": {
    en: "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE",
    fr: "LAB · TUNNEL TYPE — FAITES DÉFILER POUR AVANCER · BOUGEZ LA SOURIS",
  },

  /* ---------------- 404 ---------------- */
  "nf.label": { en: "404 — NOT FOUND", fr: "404 — PAGE INTROUVABLE" },
  "nf.h1": { en: "This page went", fr: "Cette page a quitté" },
  "nf.h1Em": { en: "off the grid.", fr: "les radars." },
  "nf.cta": { en: "Back to the portfolio →", fr: "Retour au portfolio →" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => DICT[k]?.en ?? k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "fr") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {
      /* private mode — the choice simply won't persist */
    }
    document.documentElement.lang = l;
  };

  const t = (k: string) => DICT[k]?.[lang] ?? DICT[k]?.en ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Pick a translated field off a content record: `L(lang, item, "summary")`
 *  returns `item.fr.summary` when available, else the English original. */
export function L<T extends { fr?: Record<string, unknown> }>(
  lang: Lang,
  item: T,
  field: keyof T & string
): string {
  if (lang === "fr" && item.fr && typeof item.fr[field] === "string") {
    return item.fr[field] as string;
  }
  return item[field] as unknown as string;
}
