import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets } from 'lucide-react';
import WaterDroplets from './WaterDroplets';

interface PlaycardsSectionProps {
  onNavigatePlaybook: () => void;
}

export const PlaycardsSection: React.FC<PlaycardsSectionProps> = ({ onNavigatePlaybook }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&auto=format&fit=crop&q=80",
      alt: "Soft green waterfall — flow and form",
      initialRotate: -15,
      hoverRotate: -25,
      translateX: "-15%",
      translateY: "-20%",
      label: "Flow & Form"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80",
      alt: "Aesthetic editorial portrait",
      initialRotate: -5,
      hoverRotate: 0,
      translateX: "25%",
      translateY: "-10%",
      label: "Design Sensibility"
    },
    {
      id: 3,
      image: "/assets/mine.jpg",
      alt: "Anushka Varshney",
      initialRotate: 8,
      hoverRotate: 18,
      translateX: "65%",
      translateY: "0%",
      label: "Anushka V."
    }
  ];

  return (
    <section className="relative py-28 px-[5vw] overflow-hidden bg-[#eef3ee] border-t border-black/5">
      {/* Gentle droplet ambience */}
      <WaterDroplets theme="light" count={9} intensity={0.75} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative">

        {/* Left Narrative Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-zinc-500 font-medium mb-4">
            <Droplets className="w-4 h-4 text-[#7be589]" />
            <span className="uppercase">About the craft</span>
          </div>
          <div className="space-y-1 text-2xl sm:text-3xl lg:text-4xl font-light text-zinc-900 tracking-tight leading-snug">
            <p>I am <strong className="font-bold text-[#141313]">Anushka Varshney</strong>,</p>
            <p>
              a <span className="font-cursive text-[#7be589] text-4xl sm:text-5xl font-normal lowercase inline-block">Developer-Designer</span> hybrid
            </p>
            <p>turning complex ideas into seamless</p>
            <p>journeys with code and creativity.</p>
          </div>

          <p className="text-zinc-500 font-light text-base leading-relaxed max-w-lg pt-2">
            Bridging the gap between aesthetic sensitivity and deep technical architecture. Currently developing full-stack web platforms and research-backed AI systems at IGDTUW.
          </p>

          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={onNavigatePlaybook}
              className="px-7 py-3.5 rounded-full bg-[#141313] text-white hover:bg-[#7be589] hover:text-[#141313] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-black/10 flex items-center gap-2.5 cursor-pointer group"
            >
              <span>See the Playbook (15 Projects)</span>
              <ArrowRight className="w-4 h-4 text-[#7be589] group-hover:text-[#141313] group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </motion.div>

        {/* Right Overlapping Tilted Playcards */}
        <div className="lg:col-span-6 flex justify-center items-center relative min-h-[360px] sm:min-h-[420px]">
          <div className="relative w-full max-w-[420px] h-[340px] sm:h-[380px] flex items-center justify-center">
            {cards.map((card, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="absolute w-[180px] h-[250px] sm:w-[220px] sm:h-[300px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer transition-all duration-700 ease-out"
                  style={{
                    transform: isHovered
                      ? `translate(${card.translateX}, ${card.translateY}) rotate(${card.hoverRotate}deg) scale(1.08)`
                      : `translate(${card.translateX}, ${card.translateY}) rotate(${card.initialRotate}deg)`,
                    zIndex: isHovered ? 40 : index + 10,
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isHovered ? 'filter-none scale-105' : 'grayscale contrast-110'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 bg-[#141313]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-wider text-[#7be589] border border-white/10">
                    {card.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
