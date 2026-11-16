import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeColor, Project } from '../types';
import { soundEngine } from '../utils/audio';

interface ThemeContextType {
  theme: ThemeColor;
  setTheme: (t: ThemeColor) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  toggleSound: () => void;
  playClick: () => void;
  playHover: () => void;
  playScatter: () => void;
  playAssemble: () => void;
  playSuccess: () => void;
  isTerminalOpen: boolean;
  setIsTerminalOpen: (open: boolean) => void;
  activeModalProject: Project | null;
  setActiveModalProject: (p: Project | null) => void;
  scatterMultiplier: number;
  setScatterMultiplier: (val: number) => void;
  scrollProgress: number;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeColor>('cyan');
  const [soundEnabled, setSoundEnabledState] = useState<boolean>(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [scatterMultiplier, setScatterMultiplier] = useState<number>(0.2);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const setTheme = (t: ThemeColor) => {
    setThemeState(t);
    document.documentElement.setAttribute('data-theme', t);
    soundEngine.playClick();
  };

  const setSoundEnabled = (enabled: boolean) => {
    setSoundEnabledState(enabled);
    soundEngine.enabled = enabled;
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabledState(next);
    soundEngine.enabled = next;
    if (next) soundEngine.playSuccess();
  };

  const playClick = () => soundEngine.playClick();
  const playHover = () => soundEngine.playHover();
  const playScatter = () => soundEngine.playScatter();
  const playAssemble = () => soundEngine.playAssemble();
  const playSuccess = () => soundEngine.playSuccess();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'cyan');

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        soundEnabled,
        setSoundEnabled,
        toggleSound,
        playClick,
        playHover,
        playScatter,
        playAssemble,
        playSuccess,
        isTerminalOpen,
        setIsTerminalOpen,
        activeModalProject,
        setActiveModalProject,
        scatterMultiplier,
        setScatterMultiplier,
        scrollProgress
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
