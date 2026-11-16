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
    en: "AI & ML Specialist · Full Stack Developer",
    fr: "Spécialiste IA & ML · Développeur Full Stack",
  },
  "hero.h1a": { en: "Intelligent systems that", fr: "Des systèmes intelligents qui" },
  "hero.h1aEm": { en: "solve.", fr: "résolvent." },
  "hero.h1b": { en: "Code that", fr: "Du code qui" },
  "hero.h1bEm": { en: "scales.", fr: "tient la charge." },
  "hero.sub": {
    en: "B.Tech in CSE (AI & Machine Learning) at Chitkara University. I architect multi-agent AI platforms, contextual RAG pipelines, predictive machine learning models, and high-performance full-stack web applications.",
    fr: "Étudiant en B.Tech Informatique (IA & ML) à l'Université de Chitkara. Je conçois des systèmes multi-agents, des pipelines RAG et des applications web full-stack.",
  },
  "hero.cta1": { en: "View My Work", fr: "Voir mes projets" },
  "hero.cta2": { en: "Explore Stack", fr: "Explorer la stack" },
  "hero.scroll": { en: "Scroll to Explore", fr: "Faites défiler" },
  "stat.projects": { en: "Production Projects Built", fr: "Projets majeurs réalisés" },
  "stat.years": { en: "DSA Problems Solved", fr: "Problèmes DSA résolus" },
  "stat.countries": { en: "Collaborative AI Agents", fr: "Agents IA collaboratifs" },
  "stat.satisfaction": { en: "Academic CGPA", fr: "Moyenne académique" },

  /* ---------------- about ---------------- */
  "about.eyebrow": { en: "About", fr: "À propos" },
  "about.h2a": { en: "Engineering is how I build —", fr: "L'ingénierie, c’est ma façon de bâtir —" },
  "about.h2b": { en: "curiosity is how I", fr: "la curiosité, ma façon de" },
  "about.h2Em": { en: "lead", fr: "guider" },
  "about.h2c": { en: "it.", fr: "." },
  "about.m1": {
    en: "Academic CGPA in B.Tech CSE (AI & ML) at Chitkara University",
    fr: "Moyenne académique en B.Tech Informatique (IA & ML) à Chitkara",
  },
  "about.m2": {
    en: "DSA Problems Solved across LeetCode, CodeChef & GeeksforGeeks",
    fr: "Problèmes d'algorithmes résolus sur LeetCode, CodeChef & GFG",
  },
  "about.m3": {
    en: "Smart India Hackathon (SIH) — Cleared First Two Rounds",
    fr: "Smart India Hackathon (SIH) — Deux premiers tours validés",
  },
  "about.m4": {
    en: "Active Participant in IEEE EPICS Community Technology Projects",
    fr: "Participant actif aux projets technologiques IEEE EPICS",
  },
  "about.edu": {
    en: "B.Tech in Computer Science & Engineering (Specialization in AI & ML) · Chitkara University, Punjab · Aug 2024 – June 2028 · CGPA: 8.53",
    fr: "B.Tech Informatique (Spécialisation IA & ML) · Université de Chitkara, Punjab · 2024–2028 · CGPA : 8,53",
  },
  "about.cta": { en: "Explore My Work", fr: "Découvrir mes projets" },

  /* ---------------- journey ----------------
     Chapter copy lives in content/journey.ts; only the chrome is here. */
  "journey.eyebrow": { en: "My Journey", fr: "Mon parcours" },
  "journey.enter": { en: "Scroll to travel", fr: "Faites défiler pour avancer" },
  "journey.chapter": { en: "Chapter", fr: "Chapitre" },
  "journey.lede": {
    en: "From algorithmic problem solving and high-speed web backends to enterprise RAG pipelines and multi-agent AI architectures.",
    fr: "De la résolution algorithmique et des backends haute performance aux pipelines RAG et architectures multi-agents.",
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
  "work.h2a": { en: "Selected projects,", fr: "Des projets choisis," },
  "work.h2b": { en: "designed to", fr: "conçus pour être" },
  "work.h2Em": { en: "ship.", fr: "livrés." },
  "work.lede": {
    en: "Product UX, product strategy, data design and systems design — each project a different capability, all one practice.",
    fr: "UX produit, stratégie produit, design de données et de systèmes — chaque projet une compétence différente, une seule pratique.",
  },
  "work.open": { en: "Open case study", fr: "Voir l’étude de cas" },
  "work.hint": { en: "SCROLL TO BROWSE", fr: "FAITES DÉFILER" },

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
