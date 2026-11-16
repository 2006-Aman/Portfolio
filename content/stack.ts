/* My Tech Stack — tools shown in the spiral orbit for Aman Kumar (@2006-Aman). */

export type Tool = {
  name: string;
  group: "AI" | "Design" | "Build" | "Creative";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — AI & Machine Learning — */
  { name: "Python", group: "AI", mono: "Py", color: "#3776AB" },
  { name: "PyTorch", group: "AI", mono: "PT", color: "#EE4C2C" },
  { name: "Scikit-Learn", group: "AI", mono: "SK", color: "#F7931E" },
  { name: "RAG / LLMs", group: "AI", mono: "AI", color: "#10A37F" },
  { name: "Pandas", group: "AI", mono: "Pd", color: "#150458" },
  { name: "NumPy", group: "AI", mono: "NP", color: "#013243" },
  { name: "Claude", group: "AI", src: "/images/logos/claude.png" },
  { name: "ChatGPT", group: "AI", src: "/images/logos/chatgpt.png" },

  /* — Full Stack & Web — */
  { name: "TypeScript", group: "Build", mono: "TS", color: "#3178C6" },
  { name: "JavaScript", group: "Build", mono: "JS", color: "#F7DF1E" },
  { name: "React", group: "Build", mono: "Re", color: "#0E7C99" },
  { name: "Next.js", group: "Build", mono: "N", color: "#141414" },
  { name: "Node.js", group: "Build", mono: "No", color: "#5FA04E" },
  { name: "Express", group: "Build", mono: "Ex", color: "#000000" },
  { name: "Flask", group: "Build", mono: "Fl", color: "#000000" },
  { name: "MERN Stack", group: "Build", mono: "M", color: "#47A248" },

  /* — Database & Cloud — */
  { name: "Supabase", group: "Build", mono: "Sb", color: "#3ECF8E" },
  { name: "MongoDB", group: "Build", mono: "DB", color: "#47A248" },
  { name: "PostgreSQL", group: "Build", mono: "PG", color: "#4169E1" },
  { name: "Tailwind CSS", group: "Build", mono: "TW", color: "#0891A6" },

  /* — Developer Tools & Systems — */
  { name: "GitHub", group: "Build", mono: "GH", color: "#181717" },
  { name: "VS Code", group: "Build", mono: "VS", color: "#0065A9" },
  { name: "Git", group: "Build", mono: "Gt", color: "#F05032" },
  { name: "Figma", group: "Design", src: "/images/logos/figma.png" },
];
