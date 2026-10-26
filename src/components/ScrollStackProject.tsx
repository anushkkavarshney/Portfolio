import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';
import ScrollStack, { ScrollStackItem } from './ScrollStack/ScrollStack';

interface ScrollStackProjectProps {
  projects: Project[];
  onOpenModal: (project: Project) => void;
  onNavigatePlaybook: () => void;
}

export const ScrollStackProject: React.FC<ScrollStackProjectProps> = ({
  projects,
  onOpenModal,
  onNavigatePlaybook
}) => {
  // Only 3 flagship projects for the scroll stack
  const stackProjects = projects.filter((p) => p.category === 'major').slice(0, 3);

  return (
    <section id="stacked-work" className="relative py-20 px-[5vw] overflow-hidden bg-[#fcfaf8] border-t border-black/5">
      {/* Soft water-droplet ambience on the light canvas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-24 left-[10%] w-[320px] h-[320px] bg-[#7be589]/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-20 right-[15%] w-[380px] h-[380px] bg-[#7be589]/6 rounded-full blur-[160px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[#7be589]/80 uppercase tracking-[0.25em] text-xs font-mono font-bold block mb-3">
              Scroll through builds
            </span>
            <h2 className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-[-0.05em] leading-[0.9] text-[#141313]">
              Selected <span className="font-cursive text-[#7be589]/90 font-normal italic">Works</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-sm font-light hidden md:block max-w-xs leading-relaxed">
            Pinch through the stack to unfold each story.
          </p>
        </div>

        {/* Scroll Stack container — isolated scroll so page doesn't scroll */}
        <div
          className="relative h-[78vh] min-h-[520px]"
          data-lenis-prevent
        >
          <ScrollStack
            itemDistance={140}
            itemStackDistance={32}
            stackPosition="18%"
            itemScale={0.05}
            baseScale={0.9}
            dimAmount={0.15}
            tiltAmount={2}
            rotationAmount={2}
            holdDistance={300}
          >
            {stackProjects.map((project, index) => (
              <ScrollStackItem key={project.id} itemClassName="cursor-pointer group">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  onClick={() => onOpenModal(project)}
                  className="relative h-full w-full rounded-[30px] overflow-hidden border border-black/6 bg-zinc-50 shadow-xl group relative"
                >
                  {/* Ambient glow behind card */}
                  <div className="absolute inset-0 z-0 bg-[#7be589]/6 rounded-[30px] blur-[80px] opacity-0 group-hover:opacity-70 transition-opacity duration-700" />

                  {/* Project image */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-100 flex flex-col items-center justify-center text-zinc-400">
                      <span className="text-xs font-mono text-[#7be589]/60">{project.badge}</span>
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

                  {/* Content */}
                  <div className="relative z-10 p-8 sm:p-12 h-full flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-[#7be589]/90 uppercase tracking-widest">
                        {project.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#141313] leading-snug group-hover:text-[#7be589]/70 transition-colors">
                        {project.title.split('—')[0]}
                      </h3>
                    </div>
                    <p className="text-zinc-600 text-sm md:text-base font-light leading-relaxed flex-1 mt-2">
                      {project.description}
                    </p>

                    <div className="mt-8 flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenModal(project);
                        }}
                        className="px-6 py-3 rounded-full bg-[#141313] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-[#7be589] hover:text-[#141313] transition-all shadow-md flex items-center gap-2 cursor-pointer"
                      >
                        Explore <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* Big Creative "See the Playbook" Gateway Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 p-10 sm:p-14 rounded-[32px] bg-[#141313]/90 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl relative overflow-hidden group border border-white/10"
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
            <span>
              See P<span className="font-cursive text-xl font-normal lowercase">l</span>ayBook
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#7be589]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#7be589]/20 transition-colors" />
        </motion.div>
      </div>
    </section>
  );
};
