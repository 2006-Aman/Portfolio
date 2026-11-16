export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'saas' | 'ai' | 'frontend' | 'devops' | 'tools';
  categoryLabel: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  featured: boolean;
  metrics?: string;
  highlights: string[];
  architecture?: string[];
  bannerGradient: string;
  iconName: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'languages' | 'devops' | 'ai';
  categoryLabel: string;
  proficiency: number; // 0-100
  icon: string;
  experience: string;
  description: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'education' | 'project' | 'hackathon' | 'opensource';
  description: string;
  achievements: string[];
  technologies: string[];
}

export type ThemeColor = 'cyan' | 'purple' | 'emerald' | 'amber' | 'sapphire';

export interface JourneyChapter {
  id: string;
  chapterNumber: string;
  yearBadge: string;
  title: string;
  tagline: string;
  description: string;
  theme: ThemeColor;
  iconName: string;
  shape3D: 'cube' | 'chip' | 'neural' | 'scatter' | 'portal';
  achievements: string[];
  techStack: string[];
  projectLink?: {
    label: string;
    url: string;
    isExternal: boolean;
  };
  metricsBadge: string;
}

export interface TerminalEntry {
  command: string;
  output: string | React.ReactNode;
  timestamp: string;
  isError?: boolean;
}
