import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlaycardsSection } from './components/PlaycardsSection';
import { Experience } from './components/Experience';
import { Toolkit } from './components/Toolkit';
import { Achievements } from './components/Achievements';
import { Footer } from './components/Footer';
import { PlaybookPage } from './pages/PlaybookPage';
import { ProjectModal } from './components/ProjectModal';
import { ScrollStackProject } from './components/ScrollStackProject';
import { PROJECTS, Project } from './data/projects';

// Main Home Page Component
const HomePage: React.FC<{
  onOpenModal: (project: Project) => void;
  onNavigatePlaybook: () => void;
  onScrollTo: (selector: string) => void;
  ready: boolean;
}> = ({ onOpenModal, onNavigatePlaybook, onScrollTo, ready }) => {
  return (
    <>
      <main id="main-content">
        <Hero ready={ready} onNavigatePlaybook={onNavigatePlaybook} onScrollTo={onScrollTo} />
        <PlaycardsSection onNavigatePlaybook={onNavigatePlaybook} />
        <ScrollStackProject
          projects={PROJECTS}
          onOpenModal={onOpenModal}
          onNavigatePlaybook={onNavigatePlaybook}
        />
        <Experience />
        <Toolkit />
        <Achievements />
      </main>
      <Footer onScrollTo={onScrollTo} />
    </>
  );
};

// Main App Container with Router and Lenis Smooth Scroll
const AppContent: React.FC = () => {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [isReturningHome, setIsReturningHome] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isPlaybookPage = location.pathname === '/playbook';

  // Initialize Lenis 60fps Butter-Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Smooth scroll handler for anchor links
  const handleScrollTo = (selector: string) => {
    if (isPlaybookPage) {
      // If on playbook page, first navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        const target = document.querySelector(selector);
        if (target) {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(target as HTMLElement, { offset: -60 });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 150);
      return;
    }

    if (selector === '#home') {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const target = document.querySelector(selector);
    if (target) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target as HTMLElement, { offset: -60 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigatePlaybook = () => {
    navigate('/playbook');
  };

  const handleBackToHome = () => {
    if (isReturningHome) return;
    setIsReturningHome(true);

    // Let the blurry veil bloom over the Playbook, then swap pages underneath it.
    window.setTimeout(() => {
      navigate('/');
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }, 620);

    window.setTimeout(() => {
      setIsReturningHome(false);
    }, 1350);
  };

  return (
    <div className="relative min-h-screen bg-[#fcfaf8] text-[#383838] selection:bg-[#7be589] selection:text-[#141313]">
      {/* Dark Preloader Curtain on Initial Load */}
      {!preloaderFinished && (
        <Preloader onComplete={() => setPreloaderFinished(true)} />
      )}

      {/* Persistent Navigation Bar */}
      {!isPlaybookPage && (
        <Navbar
          onScrollTo={handleScrollTo}
          onNavigatePlaybook={handleNavigatePlaybook}
          isPlaybookPage={isPlaybookPage}
        />
      )}

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              ready={preloaderFinished}
              onOpenModal={(proj) => setActiveModalProject(proj)}
              onNavigatePlaybook={handleNavigatePlaybook}
              onScrollTo={handleScrollTo}
            />
          }
        />
        <Route
          path="/playbook"
          element={<PlaybookPage onBackToHome={handleBackToHome} />}
        />
      </Routes>

      {/* Global Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      {/* Blurry veil used when drifting from the Playbook back to Home */}
      <AnimatePresence>
        {isReturningHome && (
          <motion.div
            key="playbook-to-home-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-[115] pointer-events-none backdrop-blur-2xl bg-[#fcfaf8]/25"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
