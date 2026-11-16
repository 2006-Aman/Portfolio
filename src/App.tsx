import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Background3D } from './components/canvas/Background3D';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgressHUD } from './components/ui/ScrollProgressHUD';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { JourneyExperience } from './components/journey/JourneyExperience';
import { ScatterSection } from './components/scatter/ScatterSection';
import { About } from './components/about/About';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ExperienceTimeline } from './components/experience/ExperienceTimeline';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { ProjectModal } from './components/projects/ProjectModal';
import { InteractiveTerminal } from './components/terminal/InteractiveTerminal';

const PortfolioContent: React.FC = () => {
  const { activeModalProject, setActiveModalProject } = useTheme();

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* 3D Global Space Canvas */}
      <Background3D />

      {/* Cyber Cursor */}
      <CustomCursor />

      {/* Fixed Telemetry Scroll HUD */}
      <ScrollProgressHUD />

      {/* Floating Interactive Terminal */}
      <InteractiveTerminal />

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <JourneyExperience />
        <ScatterSection />
        <About />
        <SkillsSection />
        <ProjectsSection onSelectProject={(p) => setActiveModalProject(p)} />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;
