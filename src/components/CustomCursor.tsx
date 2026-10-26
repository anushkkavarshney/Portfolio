import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 450, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 450, damping: 28 });
  const dotX = useSpring(0, { stiffness: 800, damping: 35 });
  const dotY = useSpring(0, { stiffness: 800, damping: 35 });

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], .cursor-pointer, .interactive-card');
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute('data-cursor');
        if (customText) {
          setCursorText(customText);
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none hidden md:block">
      {/* Outer Fluid Liquid Ring */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7be589]/60 backdrop-blur-[1px] flex items-center justify-center pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: isHovered ? (cursorText ? 72 : 54) : 32,
          height: isHovered ? (cursorText ? 72 : 54) : 32,
          backgroundColor: isHovered ? 'rgba(123, 229, 137, 0.16)' : 'rgba(123, 229, 137, 0.04)',
          borderColor: isHovered ? '#7be589' : 'rgba(123, 229, 137, 0.5)',
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#141313]">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Droplet Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7be589] shadow-[0_0_8px_#7be589] pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};
