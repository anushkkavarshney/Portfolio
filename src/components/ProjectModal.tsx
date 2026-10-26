import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Cpu, Database, Shield, Server, Sparkles } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open and handle Escape key
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-[#141313] text-white rounded-3xl border border-white/15 shadow-2xl overflow-hidden z-10 flex flex-col"
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-20 flex justify-between items-center p-6 sm:p-8 bg-[#141313]/90 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-[#7be589]/15 text-[#7be589] border border-[#7be589]/30">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-zinc-400">{project.year}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Body — scrollable case study with soft margins */}
          <div
            className="flex-1 min-h-0 overflow-y-auto overscroll-contain -webkit-overflow-scrolling touch p-6 sm:p-12 space-y-10 pb-16"
            data-lenis-prevent
          >
            
            {/* Project Title & Subtitle */}
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                {project.title}
              </h2>
              <p className="text-sm md:text-base font-mono text-[#7be589]/90 uppercase tracking-wider font-medium">
                {project.subtitle}
              </p>
            </div>

            {/* Visual Screenshot Banner if present */}
            {project.image && (
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-zinc-900 shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>
            )}

            {/* Architecture / Concept Overview */}
            {project.architectureSummary && (
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7be589]">
                  <Server className="w-4 h-4" />
                  <span>Architecture &amp; Data Pipeline</span>
                </div>
                <p className="text-sm md:text-base text-zinc-300 font-light leading-relaxed">
                  {project.architectureSummary}
                </p>
              </div>
            )}

            {/* Metrics Grid */}
            {project.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                      {m.label}
                    </span>
                    <span className="text-lg md:text-xl font-bold text-[#7be589]">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Deep-Dive Highlights Checklist */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7be589]" /> Key Engineering Highlights
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {project.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-[#7be589] mt-0.5 shrink-0" />
                    <span className="text-sm text-zinc-200 leading-relaxed font-light">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comprehensive Tech Stack Breakdown */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold uppercase tracking-wider text-white">Technology Stack</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.techStack.frontend && (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Frontend</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.frontend.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-mono text-zinc-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.techStack.backend && (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Backend</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.backend.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-mono text-zinc-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.techStack.ai_ml && (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">AI / NLP</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.ai_ml.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md bg-[#7be589]/15 text-xs font-mono text-[#7be589]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.techStack.database && (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Database</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.database.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-mono text-zinc-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.techStack.security_auth && (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Security &amp; Auth</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.security_auth.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-mono text-zinc-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#7be589] text-[#141313] hover:bg-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-[#7be589]/20"
              >
                <Github className="w-4 h-4" />
                <span>Inspect Repository on GitHub</span>
              </a>

              <button
                onClick={onClose}
                className="px-6 py-3.5 rounded-full border border-white/20 text-zinc-300 hover:text-white hover:bg-white/10 text-xs uppercase tracking-wider font-semibold cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
