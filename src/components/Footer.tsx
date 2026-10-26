import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowUp, Copy, Check, Linkedin, Github, Instagram } from 'lucide-react';

interface FooterProps {
  onScrollTo: (selector: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  const [copied, setCopied] = useState(false);
  const [istTime, setIstTime] = useState('');
  const email = "reachanushka@gmail.com";

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setIstTime(formatted + " IST");
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      colors: ['#7be589', '#ffffff', '#34d399'],
      origin: { y: 0.85 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer
      id="footer"
      className="relative w-full bg-[#0a0b0a] text-white overflow-hidden"
    >
      {/* Soft top seam + ambient glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7be589]/40 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-[#7be589]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[320px] bg-[#7be589]/6 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-7xl mx-auto px-[5vw] py-16 md:py-24 space-y-14"
      >
        {/* Upper Contact Statement */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="space-y-4">
            <span className="text-[#7be589]/90 uppercase tracking-[0.25em] text-xs font-mono font-bold block">
              Have an idea?
            </span>
            <h2 className="text-[13vw] sm:text-[9vw] lg:text-[6.5vw] font-bold leading-[0.9] tracking-tighter text-white">
              Let's Talk<span className="font-cursive text-[#7be589]/90 font-normal">.</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-light max-w-xl pt-2 leading-relaxed">
              Available for full-stack engineering, applied AI research, and high-impact software internships.
            </p>
          </div>

          {/* Copyable Email Badge & Links */}
          <div className="space-y-5 w-full lg:w-auto">
            <div className="p-5 sm:p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3 shadow-2xl">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                Direct Contact Channel
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="text-lg sm:text-xl font-mono font-medium text-white hover:text-[#7be589] transition-colors break-all"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#7be589] hover:text-[#0a0b0a] transition-all text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shrink-0 self-start sm:self-auto"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#7be589]" />
                      <span className="text-[#7be589]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/anushkavarshney/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/15 hover:border-[#7be589] hover:text-[#7be589] text-xs font-mono uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-[#7be589]" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/anushkkavarshney"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/15 hover:border-[#7be589] hover:text-[#7be589] text-xs font-mono uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-[#7be589]" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.instagram.com/anushkkavarshney"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/15 hover:border-[#7be589] hover:text-[#7be589] text-xs font-mono uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <Instagram className="w-4 h-4 text-[#7be589]" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lower Metadata Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 text-xs text-zinc-400 font-mono border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7be589] shadow-[0_0_8px_#7be589] animate-pulse" />
            <div>
              <span className="text-zinc-500 uppercase block text-[10px] tracking-widest">Local Time</span>
              <span className="text-white font-medium">{istTime || 'India (GMT +5:30)'}</span>
            </div>
          </div>

          <div className="text-center text-zinc-500">
            © {new Date().getFullYear()} Anushka Varshney • Handcrafted with care
          </div>

          {/* Smooth Back to Top Button */}
          <button
            onClick={() => onScrollTo('#home')}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-white hover:text-[#7be589] transition-colors cursor-pointer group"
          >
            <span>Back to Top</span>
            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#7be589] group-hover:text-[#0a0b0a] transition-all flex items-center justify-center">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </motion.div>
    </footer>
  );
};
