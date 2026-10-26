import React, { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ExpandingGalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image?: string;
  index: number;
}

/**
 * Accordion gallery — panels silently expand on hover (desktop) / tap (mobile),
 * revealing a full-colour photograph and project identity. Clicking opens the
 * case-study modal. Pure CSS flex transitions keep it butter-smooth.
 */
export const ExpandingGallery: React.FC<{
  items: ExpandingGalleryItem[];
  onOpen: (id: string) => void;
}> = ({ items, onOpen }) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-4 h-full">
      {items.map((item, idx) => {
        const isActive = active !== null ? active === idx : idx === 0;
        const dimmed = active !== null && active !== idx;

        return (
          <motion.button
            key={item.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setActive(idx)}
            onMouseLeave={() => setActive(null)}
            onClick={() => onOpen(item.id)}
            className={`expandable-panel rounded-3xl overflow-hidden relative text-left cursor-pointer group ${
              dimmed ? 'opacity-70' : 'opacity-100'
            }`}
            style={{
              flexGrow: isActive ? 5 : 1,
              flexBasis: 0,
              minHeight: '360px',
              width: '100%'
            }}
          >
            {/* Photograph backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1f1d] to-[#0b0c0b]">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    isActive ? 'grayscale-0 scale-100' : 'grayscale-[0.65] scale-110'
                  }`}
                />
              )}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? 'bg-gradient-to-t from-black/85 via-black/20 to-transparent'
                    : 'bg-gradient-to-t from-black/85 via-black/45 to-black/20'
                }`}
              />
            </div>

            {/* Collapsed spine label (desktop) */}
            <div
              className={`hidden md:block absolute inset-y-0 left-0 right-0 transition-opacity duration-300 ${
                isActive ? 'md:opacity-0' : 'md:opacity-100'
              }`}
            >
              <span className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-white/90 font-bold text-sm tracking-wide whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7be589]" />
                {item.title.split('—')[0]}
              </span>
            </div>

            {/* Expanded body */}
            <div
              className={`expandable-panel__body absolute inset-x-0 bottom-0 p-6 sm:p-8 ${
                isActive ? 'opacity-100 translate-y-0' : 'md:opacity-0 md:translate-y-4 opacity-100'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#7be589] text-[#141313] text-xs font-black flex items-center justify-center">
                  {String(item.index + 1).padStart(2, '0')}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-[#7be589]" />
                  {item.subtitle}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">{item.title.split('—')[0]}</h3>
              <div
                className={`mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#141313] bg-[#7be589] px-4 py-2 rounded-full transition-all ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Explore Case Study
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Active glow rim */}
            <div
              className={`absolute inset-0 rounded-3xl transition-all duration-500 pointer-events-none ${
                isActive ? 'ring-1 ring-[#7be589]/60 shadow-[0_0_45px_rgba(123,229,137,0.12)]' : 'ring-1 ring-white/10'
              }`}
            />
          </motion.button>
        );
      })}
    </div>
  );
};

export default ExpandingGallery;
