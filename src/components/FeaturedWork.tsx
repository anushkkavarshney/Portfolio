import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';

interface FeaturedWorkProps {
  projects: Project[];
  onOpenModal: (project: Project) => void;
  onNavigatePlaybook: () => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({
  projects,
  onOpenModal,
  onNavigatePlaybook
}) => {
  const featured = projects.filter((p) => p.featured || p.category === 'major').slice(0, 3);

  return (
    <section id="work" className="py-28 px-[5vw] bg-white border-t border-black/10 relative overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/6 pb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-[#7be589]/90 shadow-[0_0_10px_#7be589]/50" />
              <span>Flagship Builds</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-[#141313]/90 soft-text">
              Selected <span className="font-cursive text-5xl md:text-6xl text-[#7be589]/90 font-normal normal-case">Works</span>
            </h2>
          </div>

          <div className="text-xs tracking-widest text-zinc-400 flex items-center gap-3">
            <span>[ 0{featured.length} / {projects.length} systems ]</span>
          </div>
        </div>

        {/* Featured Project Cards Editorial List */}
        <div className="space-y-28">
          {featured.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Media Showcase */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div
                    onClick={() => onOpenModal(project)}
                    className="relative group overflow-hidden rounded-[26px] border border-black/6 bg-zinc-50 shadow-xl transition-all duration-800 hover:shadow-[0_20px_50px_rgba(123,229,137,0.1)] hover:border-[#7be589]/40 cursor-pointer"
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 group-hover:scale-100 transition-all duration-1000"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full aspect-[16/10] bg-gradient-to-br from-zinc-100 to-zinc-50 p-8 flex flex-col justify-between text-zinc-500">
                        <span className="text-xs font-mono text-[#7be589]/60">{project.badge}</span>
                        <h4 className="text-xl font-medium">{project.title}</h4>
                      </div>
                    )}

                    {/* Top Right Floating Year Tag */}
                    <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#141313]/70 border border-white/60 shadow-sm">
                      {project.year}
                    </div>

                    {/* Bottom Floating Tag */}
                    <div className="absolute bottom-6 left-6 bg-[#141313]/85 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-[#7be589]/90 border border-white/10 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#7be589] animate-pulse" />
                      {project.badge}
                    </div>
                  </div>
                </div>

                {/* Project Narrative & Details */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-2.5 text-zinc-400">
                    <span className="text-[#7be589]/90 font-bold font-mono text-lg">0{index + 1}</span>
                    <div className="h-px w-10 bg-zinc-200" />
                    <span className="uppercase tracking-[0.2em] text-xs font-mono font-medium text-zinc-500">
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-[#141313]/90 tracking-tight leading-snug group-hover:text-[#7be589]/60 transition-colors">
                    {project.title.split('—')[0]}
                  </h3>

                  <p className="text-zinc-600 text-base md:text-lg font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-3 pt-2">
                    {project.keyHighlights.slice(0, 3).map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-sm text-zinc-600 font-light leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7be589]/80 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Metrics Pills */}
                  {project.metrics && (
                    <div className="flex flex-wrap gap-2.5 pt-2">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="bg-white border border-black/5 rounded-xl px-3 py-1.5">
                          <span className="text-[9px] uppercase font-mono tracking-wider text-zinc-500 block">
                            {m.label}
                          </span>
                          <span className="text-sm font-medium text-[#141313]/90">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {[
                      ...(project.techStack.frontend || []),
                      ...(project.techStack.backend || []),
                      ...(project.techStack.ai_ml || [])
                    ].slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.75 bg-white border border-zinc-200 rounded-full text-[10px] text-zinc-600 font-medium font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    <button
                      onClick={() => onOpenModal(project)}
                      className="px-6 py-3 rounded-full bg-[#141313] text-white font-medium text-[10px] uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer group"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3 h-3 text-[#7be589] group-hover:text-[#141313] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full border border-zinc-200 text-zinc-600 font-medium text-[10px] uppercase tracking-wider font-mono transition-all flex items-center gap-2 hover:border-[#7be589]/40 hover:text-[#7be589]"
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big Creative "See the Playbook" Gateway Banner — softer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 sm:p-14 rounded-[32px] bg-[#141313]/90 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl relative overflow-hidden group border border-white/10"
        >
          <div className="space-y-3 text-center md:text-left z-10">
            <span className="text-[#7be589]/90 tracking-[0.25em] text-xs font-medium block">
              {projects.length} BUILDS &amp; EXPERIMENTS, ONE PLAYBOOK
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white soft-text">
              Hungry for more architectures?
            </h3>
            <p className="text-zinc-400 font-light text-sm md:text-base max-w-xl leading-relaxed">
              Explore FinTech payment tokens, multi-agent social media AI engines, patent research assistants, and algorithmic games on the interactive Playbook page.
            </p>
          </div>

          <button
            onClick={onNavigatePlaybook}
            className="z-10 px-8 py-4 rounded-full bg-[#7be589] text-[#141313] hover:bg-emerald-300 font-medium text-[10px] uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#7be589]/20 flex items-center gap-2 shrink-0 cursor-pointer group"
          >
            <span>See P<span className="font-cursive text-xl font-normal lowercase">l</span>ayBook</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#7be589]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#7be589]/20 transition-colors" />
        </motion.div>

      </div>
    </section>
  );
};
