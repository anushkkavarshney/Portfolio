import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Sparkles,
  ArrowUpRight,
  Github,
  Terminal,
  Cpu,
  Brain,
  Shield,
  Layers,
  Flame,
  Gamepad2,
  FolderGit2,
  Filter,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { Project, PROJECTS } from '../data/projects';

interface PlaybookProps {
  onOpenModal: (project: Project) => void;
}

type CategoryFilter = 'all' | 'major' | 'moderate' | 'minor';

export const Playbook: React.FC<PlaybookProps> = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('All');

  // Popular tech tags for instant filtering
  const popularTech = ['All', 'React', 'Python', 'FastAPI', 'Gemini', 'Transformers', 'Node.js', 'MongoDB', 'LangChain'];

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Tech filter
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

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const searchable = [
          p.title,
          p.subtitle,
          p.description,
          p.badge,
          ...(p.keyHighlights || []),
          ...(p.techStack.frontend || []),
          ...(p.techStack.backend || []),
          ...(p.techStack.ai_ml || [])
        ].join(' ').toLowerCase();

        return searchable.includes(query);
      }

      return true;
    });
  }, [selectedCategory, selectedTech, searchQuery]);

  const majorCount = PROJECTS.filter((p) => p.category === 'major').length;
  const moderateCount = PROJECTS.filter((p) => p.category === 'moderate').length;
  const minorCount = PROJECTS.filter((p) => p.category === 'minor').length;

  return (
    <section id="playbook" className="py-28 px-[5vw] bg-[#141313] text-white relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#7be589]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-emerald-950/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        
        {/* Playbook Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-b border-white/10 pb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-widest text-[#7be589] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Dossier &amp; Laboratory</span>
            </div>
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white">
              The Play<span className="font-cursive text-5xl md:text-9xl text-[#7be589] font-normal normal-case">book</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl text-base md:text-lg font-light mt-4">
              A comprehensive archive of <strong className="text-white font-medium">16 engineering projects</strong> spanning full-stack web platforms, clinical NLP, agentic AI workflows, and algorithmic simulations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative min-w-[260px] sm:min-w-[320px]">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search projects by tech, title, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/15 rounded-full pl-11 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#7be589] focus:ring-1 focus:ring-[#7be589] transition-all font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                selectedCategory === 'all'
                  ? 'bg-[#7be589] text-[#141313] font-bold shadow-lg shadow-[#7be589]/20'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>All Systems ({PROJECTS.length})</span>
            </button>

            <button
              onClick={() => setSelectedCategory('major')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                selectedCategory === 'major'
                  ? 'bg-[#7be589] text-[#141313] font-bold shadow-lg shadow-[#7be589]/20'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Major Full-Stack &amp; AI ({majorCount})</span>
            </button>

            <button
              onClick={() => setSelectedCategory('moderate')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                selectedCategory === 'moderate'
                  ? 'bg-[#7be589] text-[#141313] font-bold shadow-lg shadow-[#7be589]/20'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Full-Stack &amp; Platforms ({moderateCount})</span>
            </button>

            <button
              onClick={() => setSelectedCategory('minor')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                selectedCategory === 'minor'
                  ? 'bg-[#7be589] text-[#141313] font-bold shadow-lg shadow-[#7be589]/20'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5 text-purple-400" />
              <span>Mini Labs &amp; Games ({minorCount})</span>
            </button>
          </div>

          {/* Quick Tech Tag Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-mono">
            <span className="text-zinc-500 uppercase tracking-widest text-[10px] shrink-0 mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Filter by Tech:
            </span>
            {popularTech.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-3 py-1 rounded-lg transition-all duration-200 shrink-0 cursor-pointer ${
                  selectedTech === tech
                    ? 'bg-white/20 text-[#7be589] font-bold border border-[#7be589]'
                    : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Zero State if search yields no results */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center space-y-4 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-zinc-400 text-lg">No projects match the current search filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTech('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-[#7be589] text-[#141313] text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const isMajor = project.category === 'major';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`group relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 ${
                    isMajor
                      ? 'bg-gradient-to-b from-zinc-900 to-zinc-950 border border-[#7be589]/30 hover:border-[#7be589] shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(123,229,137,0.15)] md:col-span-2 lg:col-span-1'
                      : 'bg-zinc-900/80 border border-white/10 hover:border-white/25 shadow-lg'
                  }`}
                >
                  {/* Top Badge & Year */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span
                        className={`px-3 py-1 rounded-full uppercase tracking-wider font-semibold border ${
                          isMajor
                            ? 'bg-[#7be589]/15 text-[#7be589] border-[#7be589]/40'
                            : 'bg-white/10 text-zinc-300 border-white/10'
                        }`}
                      >
                        {project.badge}
                      </span>
                      <span className="text-zinc-500">{project.year}</span>
                    </div>

                    {/* Project Title & Subtitle */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#7be589] transition-colors leading-snug">
                        {project.title.split('—')[0]}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Summary Description */}
                    <p className="text-sm text-zinc-300 font-light leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Metrics / Highlights Pills */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        {project.metrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx} className="bg-white/5 border border-white/10 rounded-xl p-2.5">
                            <span className="text-[9px] uppercase font-mono tracking-wider text-zinc-500 block">
                              {m.label}
                            </span>
                            <span className="text-xs font-bold text-[#7be589]">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Tech Pills & Actions */}
                  <div className="pt-6 space-y-5 border-t border-white/10 mt-6">
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        ...(project.techStack.frontend || []),
                        ...(project.techStack.backend || []),
                        ...(project.techStack.ai_ml || [])
                      ].slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-full bg-white/5 text-[11px] font-mono text-zinc-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Button Group */}
                    <div className="flex items-center justify-between gap-3 pt-2">
                      <button
                        onClick={() => onOpenModal(project)}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-[#7be589] text-white hover:text-[#141313] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm group/btn"
                      >
                        <span>Deep-Dive</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors border border-white/10 flex items-center justify-center"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
