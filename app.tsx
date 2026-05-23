
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowDownRight, ArrowRight, Menu, X, Cpu, Globe, Code, Brain } from 'lucide-react';
import { PROJECTS, EXPERIENCES, SKILL_CATEGORIES } from './constants';
import { Project, Experience, SkillCategory } from './types';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'Exp', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-lg py-4 border-b border-zinc-100' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-heading font-bold tracking-tighter text-zinc-900"
        >
          ANUSHKA <span className="text-[#c5a059] font-display italic font-normal">V.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm uppercase tracking-widest text-zinc-500 hover:text-[#c5a059] transition-colors font-medium"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#c5a059]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-200"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-heading text-zinc-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[#c5a059] font-display italic text-xl md:text-2xl mb-4 font-semibold">MERN Stack Developer & AI Enthusiast</h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold leading-none tracking-tighter mb-8 text-zinc-900">
              CRAFTING <br /> 
              <span className="text-white stroke-text-light">INTELLIGENT</span> <br />
              EXPERIENCES
            </h1>
            <p className="max-w-xl text-zinc-600 text-lg md:text-xl leading-relaxed font-light">
              Hi, I'm Anushka Varshney. Currently pursuing B.Tech in IT at IGDTUW. I bridge the gap between robust web architectures and cutting-edge AI.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex items-center gap-8"
          >
            <a href="#work" className="bg-[#c5a059] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-[#b08d4a] transition-all shadow-lg shadow-[#c5a059]/20">
              View My Work <ArrowDownRight size={20} />
            </a>
            <div className="flex gap-4">
              <a href="#" className="p-3 border border-zinc-200 rounded-full hover:border-[#c5a059] hover:text-[#c5a059] transition-colors bg-white"><Linkedin size={20} /></a>
              <a href="#" className="p-3 border border-zinc-200 rounded-full hover:border-[#c5a059] hover:text-[#c5a059] transition-colors bg-white"><Github size={20} /></a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative large text background */}
      <motion.div 
        animate={{ x: [0, -100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-10 left-0 text-[20vw] font-heading font-black text-zinc-900/[0.03] whitespace-nowrap pointer-events-none"
      >
        ANUSHKA VARSHNEY • DEVELOPER • AI • 
      </motion.div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#c5a059] font-display italic text-lg mb-2 font-semibold">Featured Projects</h3>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-zinc-900">SELECTED WORKS</h2>
          </motion.div>
          <div className="hidden md:block text-zinc-400 font-light text-right">
            01 — 03
          </div>
        </div>

        <div className="grid gap-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center group`}
            >
              <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl relative shadow-2xl shadow-zinc-200">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-6 right-6 bg-white/70 backdrop-blur-md px-4 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-zinc-900 font-bold border border-white/50">
                  {project.year}
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 text-zinc-400 mb-4">
                  <span className="text-[#c5a059] font-bold">0{index + 1}</span>
                  <div className="h-px w-8 bg-zinc-200"></div>
                  <span className="uppercase tracking-[0.2em] text-xs font-semibold">{project.subtitle}</span>
                </div>
                <h4 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-zinc-900 group-hover:text-[#c5a059] transition-colors">
                  {project.title}
                </h4>
                <div className="space-y-4 mb-8">
                  {project.description.map((point, i) => (
                    <p key={i} className="text-zinc-600 font-light leading-relaxed">
                      {point}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-full text-xs text-zinc-600 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-[#c5a059] font-semibold group-hover:gap-4 transition-all">
                  VIEW CASE STUDY <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-16 text-center text-zinc-900">EXPERIENCE</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l border-zinc-200"
            >
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-[#c5a059] shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-zinc-900">{exp.role}</h4>
                  <p className="text-[#c5a059] font-display italic text-lg font-semibold">{exp.company}</p>
                </div>
                <div className="text-zinc-400 font-mono text-sm mt-2 md:mt-0 uppercase tracking-tighter">
                  {exp.period} | {exp.location}
                </div>
              </div>
              <ul className="space-y-4">
                {exp.points.map((p, idx) => (
                  <li key={idx} className="text-zinc-600 flex gap-3 leading-relaxed">
                    <span className="text-[#c5a059] mt-1.5 font-bold">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const icons = [<Cpu />, <Globe />, <Code />, <Brain />];
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-16 text-right text-zinc-900">TOOLKIT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              whileHover={{ y: -10 }}
              className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-[#c5a059]/30 transition-all shadow-sm"
            >
              <div className="text-[#c5a059] mb-6 w-12 h-12 flex items-center justify-center bg-[#c5a059]/10 rounded-2xl">
                {icons[i % icons.length]}
              </div>
              <h4 className="text-xl font-bold mb-6 uppercase tracking-wider text-zinc-900">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(s => (
                  <span key={s} className="text-sm text-zinc-500 font-medium px-2 py-1 bg-white border border-zinc-100 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  return (
    <section className="py-24 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-zinc-900">ACHIEVEMENTS</h2>
            <p className="text-zinc-500 text-lg font-light max-w-md">Pushing boundaries and constantly evolving through competitive engineering and open source contributions.</p>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6 items-center p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm">
              <div className="text-4xl font-heading font-bold text-[#c5a059]">10</div>
              <div>
                <h5 className="font-bold text-zinc-900">Innovortex 3.0 Finalist</h5>
                <p className="text-zinc-500 text-sm">Top 10 Finalist in Tech-based national competition.</p>
              </div>
            </div>
            <div className="flex gap-6 items-center p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm">
              <div className="text-4xl font-heading font-bold text-[#c5a059]">GS</div>
              <div>
                <h5 className="font-bold text-zinc-900">GSoC Contributor</h5>
                <p className="text-zinc-500 text-sm">Google Summer of Code Open-source contributor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <footer id="contact" className="py-24 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-8xl font-heading font-bold mb-4 tracking-tighter">LET'S CONNECT</h2>
            <p className="text-[#c5a059] font-display italic text-2xl">Interested in working together?</p>
          </motion.div>
          
          <a href="mailto:anushka017btit24@igdtuw.ac.in" className="text-2xl md:text-4xl font-light hover:text-[#c5a059] transition-colors mb-16 break-all tracking-tight">
            anushka017btit24@igdtuw.ac.in
          </a>

          <div className="flex gap-12 text-zinc-400 mb-20">
            <a href="#" className="hover:text-white transition-colors tracking-widest text-xs font-bold">LINKEDIN</a>
            <a href="#" className="hover:text-white transition-colors tracking-widest text-xs font-bold">GITHUB</a>
            <a href="#" className="hover:text-white transition-colors tracking-widest text-xs font-bold">TWITTER</a>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] tracking-[0.3em] uppercase">
            <div>© 2025 ANUSHKA VARSHNEY</div>
            <div className="mt-4 md:mt-0 font-medium">DESIGNED FOR EXCELLENCE</div>
            <div className="mt-4 md:mt-0">MADE WITH ❤️ & REACT</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="selection:bg-[#c5a059] selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#c5a059] origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      <main>
        <Hero />
        <Projects />
        <ExperienceSection />
        <SkillsSection />
        <Achievements />
      </main>
      <Contact />
      
      <style>{`
        .stroke-text-light {
          -webkit-text-stroke: 1px rgba(0,0,0,0.15);
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default App;