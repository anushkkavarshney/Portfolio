import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsDone(true), 600);
          return 100;
        }
        const step = Math.floor(Math.random() * 6) + 2;
        return Math.min(100, prev + step);
      });
    }, 70);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isDone && (
        <motion.div
          key="loader-container"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 2.4, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] overflow-hidden bg-[#141313] text-white select-none"
        >
          {/* Content — fades away as the green curtain rises over it */}
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative z-10 flex h-full flex-col justify-between p-8 md:p-14"
          >
            {/* Top Header */}
            <div className="flex justify-between items-center text-xs md:text-sm font-mono tracking-widest uppercase opacity-60">
              <span>Engineering & Design Portfolio</span>
              <span>© 2025 – 2026</span>
            </div>

            {/* Center Title */}
            <div className="flex flex-col items-center justify-center my-auto text-center space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: 'easeOut' }}
                className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              >
                Anushka <span className="font-cursive text-[#7be589] font-normal text-5xl md:text-8xl lg:text-9xl">Varshney</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1.1 }}
                className="text-zinc-400 text-base md:text-lg font-light tracking-[0.2em] lowercase"
              >
                is a
              </motion.p>
            </div>

            {/* Bottom Bar: Progress Counter & Green Line */}
            <div className="space-y-4">
              <div className="flex justify-between items-end text-xs md:text-sm font-mono tracking-widest">
                <span className="text-[#7be589]">INITIALIZING EXPERIENCE</span>
                <span className="text-3xl md:text-5xl font-bold font-sans text-white">{counter}%</span>
              </div>
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#7be589]"
                  style={{ width: `${counter}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Decorative Green Sweep Banner — above the text so nothing shows through */}
          <motion.div
            initial={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 2.1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 z-20 bg-[#7be589] origin-bottom pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
