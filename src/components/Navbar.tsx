import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onScrollTo: (selector: string) => void;
  onNavigatePlaybook: () => void;
  isPlaybookPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScrollTo,
  onNavigatePlaybook,
  isPlaybookPage = false
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (!isPlaybookPage) {
        const sections = ['home', 'work', 'experience', 'skills', 'footer'];
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlaybookPage]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', action: 'scroll' },
    { name: 'Featured', href: '#work', id: 'work', action: 'scroll' },
    { name: 'Playbook', href: '/playbook', id: 'playbook', action: 'playbook' },
    { name: 'Experience', href: '#experience', id: 'experience', action: 'scroll' },
    { name: 'Toolkit', href: '#skills', id: 'skills', action: 'scroll' },
    { name: 'Contact', href: '#footer', id: 'footer', action: 'scroll' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (link.action === 'playbook') {
      onNavigatePlaybook();
    } else {
      onScrollTo(link.href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#fcfaf8]/90 backdrop-blur-md py-4 border-b border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.03)]'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo / Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onScrollTo('#home');
          }}
          className="group flex items-center gap-2 cursor-pointer select-none"
        >
          <span className="font-bold tracking-tight text-xl md:text-2xl text-[#141313] transition-colors group-hover:text-black">
            ANUSHKA <span className="font-cursive text-2xl md:text-3xl text-[#7be589] font-normal">V.</span>
          </span>
          <span className="w-2 h-2 rounded-full bg-[#7be589] shadow-[0_0_8px_#7be589] animate-pulse"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className="relative text-xs md:text-sm uppercase tracking-widest font-medium text-[#404040] hover:text-black transition-colors py-1 group cursor-pointer"
            >
              <span className={activeSection === link.id && !isPlaybookPage ? 'text-[#141313] font-bold' : ''}>
                {link.name}
              </span>
              {/* Dual animated sweep underline */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#7be589] transition-all duration-300 group-hover:w-full" />
              {activeSection === link.id && !isPlaybookPage && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#7be589]" />
              )}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onNavigatePlaybook}
            className="text-xs uppercase tracking-wider font-mono font-semibold px-4 py-2 rounded-full border border-black/15 hover:border-[#7be589] hover:bg-[#7be589]/15 transition-all flex items-center gap-1.5 text-zinc-800 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7be589]" />
            <span>Playbook (15)</span>
          </button>
          
          <a
            href="#footer"
            onClick={(e) => {
              e.preventDefault();
              onScrollTo('#footer');
            }}
            className="text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-full bg-[#141313] text-white hover:bg-[#7be589] hover:text-[#141313] transition-all shadow-md shadow-black/10 flex items-center gap-1.5 cursor-pointer"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/80 border border-zinc-200 text-zinc-900 focus:outline-none hover:bg-zinc-100 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#7be589]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fcfaf8] border-b border-zinc-200 shadow-xl px-8 py-8 space-y-6 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-xl font-bold tracking-tight uppercase text-zinc-800 hover:text-[#7be589] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-200 flex flex-col gap-3">
            <a
              href="mailto:reachanushka@gmail.com"
              className="text-sm text-zinc-700 font-mono font-medium"
            >
              reachanushka@gmail.com
            </a>
            <div className="flex gap-4 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigatePlaybook();
                }}
                className="text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-full bg-[#7be589] text-[#141313] transition-colors"
              >
                See Playbook (15)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
