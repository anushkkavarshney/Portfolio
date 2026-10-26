import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Search,
  Sparkles,
  ArrowUpRight,
  Github,
  Flame,
  Layers,
  Gamepad2,
  Filter,
  Shuffle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Project, PROJECTS } from '../data/projects';
import { ProjectModal } from '../components/ProjectModal';
import SplashCursor from '../components/SplashCursor/SplashCursor';
import WaterDroplets from '../components/WaterDroplets';
import ExpandingGallery from '../components/ExpandingGallery';

interface PlaybookPageProps {
  onBackToHome: () => void;
}

type CategoryFilter = 'all' | 'major' | 'moderate' | 'minor';

// 3D Parallax Tilt Floating Tab Card Component
const FloatingProjectTab: React.FC<{
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}> = ({ project, index, onOpenModal }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const floatClass = index % 3 === 0 ? 'floating-tab-1' : index % 3 === 1 ? 'floating-tab-2' : 'floating-tab-3';
  const isMajor = project.category === 'major';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -6;
    const rY = ((x - centerX) / centerX) * 6;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${floatClass} transition-transform duration-300`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.04 }}
        className={`group relative flex flex-col justify-between h-full rounded-[24px] p-6 md:p-8 backdrop-blur-xl transition-all duration-500 cursor-pointer overflow-hidden border border-white/8 bg-[#15181a]/60 shadow-lg ${
          isMajor
            ? 'border-[#7be589]/25 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:border-[#7be589]/50 hover:shadow-[0_20px_50px_rgba(123,229,137,0.12)]'
            : 'hover:border-[#7be589]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]'
        }`}
        onClick={() => onOpenModal(project)}
      >
        {project.image && (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-24 object-cover opacity-12 grayscale group-hover:opacity-20 group-hover:grayscale-0 transition-all duration-800 mask-fade-bottom"
          />
        )}

        {/* Top header */}
        <div className="space-y-3 relative">
          <div className="flex items-center justify-between pb-2 border-b border-white/6">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isMajor ? 'bg-[#7be589] animate-pulse' : 'bg-white/30'}`} />
              <span className="text-[10px] tracking-[0.2em] text-[#7be589]/80 font-medium">
                {isMajor ? '★ Flagship' : 'Project'}
              </span>
            </div>
            <span className="text-xs text-zinc-500">
              #{String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <div className="flex justify-between items-center pt-1">
            <span
              className={`px-2.5 py-0.5 rounded-full tracking-wider font-medium text-[10px] border ${
                isMajor
                  ? 'bg-[#7be589]/15 text-[#7be589] border-[#7be589]/40'
                  : 'bg-white/10 text-zinc-300 border-white/10'
              }`}
            >
              {project.badge}
            </span>
            <span className="text-zinc-400 text-xs">{project.year}</span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-[#7be589]/90 transition-colors leading-snug tracking-tight">
              {project.title.split('—')[0]}
            </h3>
            <p className="text-[10px] text-zinc-400 mt-1 tracking-wider line-clamp-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm text-zinc-300 font-light leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {project.metrics && (
            <div className="grid grid-cols-2 gap-2 pt-2">
              {project.metrics.slice(0, 2).map((m, mIdx) => (
                <div key={mIdx} className="bg-white/5 border border-white/10 rounded-xl p-2">
                  <span className="text-[8px] uppercase tracking-wider text-zinc-400 block">
                    {m.label}
                  </span>
                  <span className="text-xs font-bold text-[#7be589]">{m.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Footer & Tech Chips */}
        <div className="pt-5 space-y-3 border-t border-white/8 mt-5 relative">
          <div className="flex flex-wrap gap-1">
            {[
              ...(project.techStack.frontend || []),
              ...(project.techStack.backend || []),
              ...(project.techStack.ai_ml || [])
            ].slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] text-zinc-300 border border-white/10 group-hover:border-[#7be589]/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-[#7be589]/90 tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore project <ArrowUpRight className="w-3 h-3" />
            </span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-[#7be589] text-zinc-400 hover:text-[#0a0b0a] transition-colors border border-white/10"
              title="GitHub Repo"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Ambient droplet sheen on hover */}
        <div className="absolute -top-5 right-0 w-20 h-20 rounded-full bg-[#7be589]/0 blur-xl pointer-events-none group-hover:bg-[#7be589]/10 transition-colors duration-800" />
      </motion.div>
    </div>
  );
};

export const PlaybookPage: React.FC<PlaybookPageProps> = ({ onBackToHome }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // When the reader keeps scrolling past the very end, drift smoothly back home.
  useEffect(() => {
    let navigated = false;

    const onWheel = (e: WheelEvent) => {
      if (navigated) return;
      // Never hijack scroll while the case-study modal is open
      if (document.body.style.overflow === 'hidden') return;

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 6;

      if (atBottom && e.deltaY > 0) {
        navigated = true;
        onBackToHome();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', onWheel);
    };
  }, [onBackToHome]);

  const popularTech = ['All', 'React', 'Python', 'FastAPI', 'Gemini', 'Transformers', 'Node.js', 'MongoDB', 'LangChain'];

  const counts = useMemo(
    () => ({
      all: PROJECTS.length,
      major: PROJECTS.filter((p) => p.category === 'major').length,
      moderate: PROJECTS.filter((p) => p.category === 'moderate').length,
      minor: PROJECTS.filter((p) => p.category === 'minor').length
    }),
    []
  );

  const majorProjects = useMemo(() => PROJECTS.filter((p) => p.category === 'major'), []);
  const moderateProjects = useMemo(() => PROJECTS.filter((p) => p.category === 'moderate'), []);

  // Filter logic
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      if (selectedTech !== 'All') {
        const allTech = [
          ...(p.techStack.frontend || []),
          ...(p.techStack.backend || []),
          ...(p.techStack.ai_ml || []),
          ...(p.techStack.database || []),
          ...(p.techStack.security_auth || [])
        ].map((t) => t.toLowerCase());

        const matchesTech = allTech.some((t) => t.includes(selectedTech.toLowerCase()));
        if (!matchesTech) return false;
      }

      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const searchable = [
          p.title,
          p.subtitle,
          p.description,
          p.badge,
          ...(p.keyHighlights || []),
          ...(p.techStack.frontend || []),
          ...(p.techStack.backend || [])
        ].join(' ').toLowerCase();

        return searchable.includes(query);
      }

      return true;
    });
  }, [selectedCategory, selectedTech, searchQuery]);

  // Lucky Random Pick feature
  const handleRandomPick = () => {
    const randomIndex = Math.floor(Math.random() * PROJECTS.length);
    const randomProject = PROJECTS[randomIndex];
    setActiveModalProject(randomProject);
    confetti({
      particleCount: 50,
      spread: 60,
      colors: ['#7be589', '#a7f3d0', '#ffffff', '#34d399'],
      origin: { y: 0.6 }
    });
  };

  // Smoothly return to homepage when scrolled past the end of the playbook
  const handleScrollToHome = () => {
    onBackToHome();
  };

  const filterButton = (
    cat: CategoryFilter,
    label: string,
    icon?: React.ReactNode
  ) => (
    <button
      onClick={() => setSelectedCategory(cat)}
      className={`px-5 py-2.5 rounded-full text-xs tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
        selectedCategory === cat
          ? 'bg-[#7be589] text-[#0a0b0a] font-medium shadow-lg shadow-[#7be589]/20'
          : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10'
      }`}
    >
      {icon}
      <span>{label} ({counts[cat]})</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#0a0b0a] text-white selection:bg-[#7be589] selection:text-[#0a0b0a] relative overflow-hidden pb-28">
      {/* Splash Cursor — soft trailing ink */}
      <SplashCursor
        theme="dark"
        colors={['#7be589', '#34d399', '#a7f3d0']}
        rainbow={false}
        colorSpeed={0.4}
        intensity={0.6}
        size={1}
        swirl={2.5}
        quality="medium"
        zIndex={50}
        intro={false}
      />

      {/* Soft nebula glows */}
      <div className="fixed top-10 left-1/5 w-[500px] h-[500px] bg-[#7be589]/8 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 right-1/5 w-[600px] h-[600px] bg-emerald-950/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Floating water droplets */}
      <WaterDroplets theme="dark" variant="fixed" count={10} intensity={0.5} />

      {/* Floating Sticky Top Bar */}
      <header className="sticky top-0 z-40 w-full bg-[#0a0b0a]/60 backdrop-blur-xl border-b border-white/5 px-[5vw] py-3.5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={onBackToHome}
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#7be589] hover:text-[#0a0b0a] border border-white/10 transition-all text-xs tracking-wider cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          <div className="hidden sm:flex items-center gap-3 text-xs text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7be589]/80 animate-pulse" />
            <span>The Playbook — {PROJECTS.length} builds</span>
          </div>

          <button
            onClick={handleRandomPick}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7be589] text-[#0a0b0a] hover:bg-emerald-300 font-medium text-xs tracking-wider transition-all cursor-pointer shadow-lg shadow-[#7be589]/15"
            title="Pick a random project"
          >
            <Shuffle className="w-3 h-3" />
            <span className="hidden sm:inline">Lucky Pick</span>
          </button>
        </div>
      </header>

      {/* Playbook Hero */}
      <section className="pt-12 pb-8 px-[5vw] max-w-7xl mx-auto space-y-8 relative">
        <div className="space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/6 border border-white/8 text-xs tracking-widest text-[#7be589]/90">
            <Sparkles className="w-3 h-3" />
            <span>Independent engineering showcase</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-white leading-[1.02]">
            The Play<span className="font-cursive text-[#7be589]/90 text-5xl sm:text-6xl lg:text-[7rem] font-normal normal-case">book</span>
          </h1>

          <p className="text-zinc-400 max-w-2xl text-sm sm:text-base font-light leading-relaxed">
            Every major architecture, platform, and playful experiment built by{' '}
            <strong className="text-white font-medium">Anushka Varshney</strong>.
          </p>
        </div>

      </section>

      {/* Flagship Accordion Gallery (Majors) */}
      {(selectedCategory === 'all' || selectedCategory === 'major') && (
        <section className="px-[5vw] max-w-7xl mx-auto pb-12">
          <div className="flex items-end justify-between gap-6 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Flagship{' '}
              <span className="font-cursive text-3xl text-[#7be589]/90 font-normal normal-case">five</span>
            </h2>
            <span className="text-xs text-zinc-500 flex items-center gap-2">
              <Flame className="w-3 h-3 text-[#7be589]/80" />
              hover to widen • click to open
            </span>
          </div>
          <div className="h-[380px] sm:h-[340px]">
            <ExpandingGallery
              items={majorProjects.map((p, i) => ({
                id: p.id,
                title: p.title,
                subtitle: `${p.year} • ${p.badge}`,
                image: p.image,
                index: i
              }))}
              onOpen={(id) => {
                const found = PROJECTS.find((p) => p.id === id);
                if (found) setActiveModalProject(found);
              }}
            />
          </div>
        </section>
      )}

      {/* Floating Filter Dock & Search Bar */}
      <section className="px-[5vw] max-w-7xl mx-auto pb-10">
        <div className="space-y-6 pt-6 border-t border-white/6">
          <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-6">
            <div className="flex flex-wrap items-center gap-2">
              {filterButton('all', 'All')}
              {filterButton('major', 'Flagships', <Flame className="w-3 h-3 text-[#7be589]/80" />)}
              {filterButton('moderate', 'Full-Stack & Web', <Layers className="w-3 h-3 text-[#7be589]/80" />)}
              {filterButton('minor', 'Mini Labs', <Gamepad2 className="w-3 h-3 text-[#7be589]/80" />)}
            </div>

            <div className="relative min-w-[280px] sm:min-w-[340px]">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search projects by keyword or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#7be589]/60 focus:ring-1 focus:ring-[#7be589]/40 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar text-xs">
            <span className="text-zinc-500 uppercase tracking-widest text-[9px] shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-2.5 h-2.5" /> Quick filter:
            </span>
            {popularTech.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-2.5 py-0.5 rounded-lg transition-all duration-200 shrink-0 cursor-pointer ${
                  selectedTech === tech
                    ? 'bg-[#7be589]/15 text-[#7be589] font-medium border border-[#7be589]'
                    : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Tabs Deck Grid */}
      <section className="px-[5vw] max-w-7xl mx-auto">
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-white/5 rounded-[32px] border border-white/10">
            <p className="text-zinc-400 text-lg">No projects match your current search.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTech('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-[#7be589] text-[#0a0b0a] text-xs font-bold tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <FloatingProjectTab
                key={project.id}
                project={project}
                index={idx}
                onOpenModal={(proj) => setActiveModalProject(proj)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Scroll further to return home — soft transition */}
      <section className="relative h-[70vh] sm:h-[90vh] flex items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-6 py-2.5 text-xs font-medium text-[#7be589]/90 hover:bg-white/10 transition-all cursor-pointer group" onClick={handleScrollToHome}>
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
            <span>Return to Home</span>
          </div>
          <p className="mt-8 text-zinc-500 text-sm font-light leading-relaxed max-w-md mx-auto">
            Keep drifting down… <span className="text-white/70 font-medium">you'll return to the beginning smoothly</span>
          </p>
        </motion.div>

        {/* Soft bottom fade mask */}
        <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent via-[#0a0b0a]/20 to-[#0a0b0a] pointer-events-none" />
      </section>

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
};
