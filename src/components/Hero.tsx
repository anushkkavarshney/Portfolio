import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { EngineerSvg } from './EngineerSvg';

interface HeroProps {
  onNavigatePlaybook: () => void;
  onScrollTo: (selector: string) => void;
  ready: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onNavigatePlaybook, onScrollTo, ready }) => {
  return (
    <section id="home" className="relative min-h-[85vh] pt-32 pb-24 px-[5vw] flex flex-col justify-between overflow-hidden bg-grain">
      {/* Soft Ambient Glow */}
      <div className="absolute top-24 right-8 w-[520px] h-[520px] bg-[#7be589]/12 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto space-y-6 my-auto">
        {/* ROW 1: "Software" + Clean Metadata — softened */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#7be589]/90 shadow-[0_0_10px_#7be589]/60 animate-pulse" />
              <span>Full-Stack &amp; Applied AI • IGDTUW</span>
            </div>

            <h1 className="text-[12vw] lg:text-[9vw] font-bold tracking-[-0.05em] leading-[0.9] text-[#141313]/90 soft-text">
              Software
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={ready ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.6, duration: 1.4 }}
            className="flex flex-wrap lg:flex-col gap-3 text-xs font-mono text-zinc-500 lg:text-right pb-2"
          >
            <div className="border-l-2 lg:border-l-0 lg:border-r-2 border-[#7be589]/40 pl-3 lg:pr-3">
              <span className="text-zinc-400 block text-[9px] uppercase font-mono tracking-widest">OPPORTUNITY</span>
              <p className="font-medium text-zinc-800">Open to Internships &amp; Collaborations</p>
            </div>
            <div className="border-l-2 lg:border-l-0 lg:border-r-2 border-[#7be589]/40 pl-3 lg:pr-3">
              <span className="text-zinc-400 block text-[9px] uppercase font-mono tracking-widest">LOCATION</span>
              <p className="font-medium text-zinc-800">Delhi, India • GMT +5:30</p>
            </div>
          </motion.div>
        </div>

        {/* ROW 2: "Engineer & AI Builder" ALL IN A SINGLE LINE (NO DOWN ARROW, ZERO BLUR) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ delay: 0.45, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline flex-nowrap leading-none"
        >
          <div className="flex items-baseline gap-2 sm:gap-4 flex-nowrap leading-none whitespace-nowrap">
            {/* Crisp Cursive SVG: "Engineer" — sized off the headline via em */}
            <EngineerSvg ready={ready} className="shrink-0 text-[8vw] sm:text-[7.6vw] lg:text-[min(6.6vw,5rem)]" />

            {/* "& AI Builder" on the same line — clamped so it always fits inside the container */}
            <span className="text-[7vw] sm:text-[6.6vw] lg:text-[min(5.8vw,4.4rem)] font-bold tracking-[-0.03em] text-[#141313]/90 leading-none shrink-0 soft-text">
              <span className="font-cursive text-[#7be589]/90 font-normal lowercase text-[9vw] sm:text-[8.4vw] lg:text-[min(7vw,5.2rem)] mr-1.5">
                &amp;
              </span>
              AI Builder
            </span>
          </div>
        </motion.div>

        {/* Action strip — softer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 flex flex-wrap items-center justify-between gap-4"
        >
          <p className="text-zinc-500 font-light text-base md:text-lg max-w-xl leading-relaxed">
            Designing thoughtful, high-quality digital products at the intersection of technical care and creative beauty.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigatePlaybook}
              className="px-8 py-3.5 rounded-full bg-[#141313] text-white hover:bg-[#7be589] hover:text-[#141313] font-medium text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-black/8 flex items-center gap-2 cursor-pointer group"
            >
              <span>See the Playbook (15 Projects)</span>
              <ArrowRight className="w-4 h-4 text-[#7be589] group-hover:text-[#141313] group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
