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

const CinematicPortfolioContent: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* Cinematic cursor */}
      <CustomCursor />

      {/* Scroll progress telemetry */}
      <ScrollProgressHUD />

      {/* Transparent film-style navbar */}
      <CinematicNavbar />

      {/* Main 5-scene cinematic storyline */}
      <main className="relative">
        {/* Scene 01: THE PROTAGONIST — Giant red AMAN text + silhouette */}
        <Scene1Hero />

        {/* Scene 02: THE CREATIVE UNIVERSE — floating tools + golden ribbon */}
        <Scene2Universe />

        {/* Scene 03: JOURNEY THROUGH TIME — radial arc timeline */}
        <Scene3Timeline />

        {/* Scene 04: THE THEATER — curved panoramic project showcase */}
        <Scene4CurvedShowcase />

        {/* Scene 05: THE CLIMAX — Ferrari diagonal + contact */}
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
