import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgressHUD } from './components/ui/ScrollProgressHUD';
import { CinematicNavbar } from './components/cinematic/CinematicNavbar';
import { Scene1Hero } from './components/cinematic/Scene1Hero';
import { Scene2Universe } from './components/cinematic/Scene2Universe';
import { Scene3Timeline } from './components/cinematic/Scene3Timeline';
import { Scene4CurvedShowcase } from './components/cinematic/Scene4CurvedShowcase';
import { Scene5ClimaxContact } from './components/cinematic/Scene5ClimaxContact';
import { ProjectModal } from './components/projects/ProjectModal';
import { InteractiveTerminal } from './components/terminal/InteractiveTerminal';

const CinematicPortfolioContent: React.FC = () => {
  const { activeModalProject, setActiveModalProject } = useTheme();

  return (
    <div className="relative min-h-screen bg-[#050508] text-slate-100 selection:bg-cinematic-red selection:text-white overflow-x-hidden font-sans">
      {/* Precision Custom Pointer */}
      <CustomCursor />

      {/* Real-time Z-depth Telemetry HUD */}
      <ScrollProgressHUD />

      {/* Floating Interactive Terminal Emulator */}
      <InteractiveTerminal />

      {/* Architectural Specs Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      {/* Top Cinematic Film Navbar */}
      <CinematicNavbar />

      {/* Full 5-Scene Cinematic Storyline */}
      <main className="relative z-10 flex flex-col">
        {/* Scene 01: The Protagonist & Giant Name Hero */}
        <Scene1Hero />

        {/* Scene 02: The Developer Universe & 3D Undulating Golden Energy Ribbon */}
        <Scene2Universe />

        {/* Scene 03: A Journey Through Time & Arched Radial Dial with Laser Spotlight */}
        <Scene3Timeline />

        {/* Scene 04: The Curved Panoramic Screen Theater & 3D Amphitheater */}
        <Scene4CurvedShowcase onSelectProject={(p) => setActiveModalProject(p)} />

        {/* Scene 05: The Climax, Supercar Diagonal Split & Direct Dispatch */}
        <Scene5ClimaxContact />
      </main>
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <CinematicPortfolioContent />
    </ThemeProvider>
  );
}

export default App;
