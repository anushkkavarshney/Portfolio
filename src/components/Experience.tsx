import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle2, Calendar, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-[5vw] bg-[#fafaf9] border-t border-black/8 bg-grain relative overflow-hidden">
      {/* Soft ambient glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#7be589]/8 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-100 text-xs font-mono uppercase tracking-widest text-zinc-500 font-medium shadow-sm">
            <Briefcase className="w-3 h-3 text-[#7be589]/80" />
            <span>Career Path &amp; Formal Education</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-[-0.04em] leading-[0.95] text-[#141313]">
            Experience <span className="font-cursive text-5xl md:text-8xl text-[#7be589]/90 font-normal normal-case">&amp; Education</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">

          {/* Experience Item 1: Prodigal AI Internship */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-8 sm:pl-12 border-l-2 border-[#7be589] space-y-5"
          >
            {/* Glowing Timeline Dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#7be589] ring-4 ring-[#7be589]/30 shadow-[0_0_10px_#7be589]" />

            {/* Role & Org */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#141313]/90">
                  AI Product Research &amp; Development Intern
                </h3>
                <p className="text-zinc-700 text-lg md:text-xl font-semibold">
                  Prodigal AI
                </p>
              </div>

              <div className="flex items-center gap-2 text-zinc-600 text-xs tracking-tight bg-white border border-zinc-200 px-3 py-1.5 rounded-full shrink-0 shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-[#7be589]" />
                <span>July 2026 – September 2026 • Remote</span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-3.5 text-zinc-700 font-light text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#7be589] shrink-0 mt-0.5" />
                <span>
                  Built and integrated <strong>5+ AI-powered product features</strong> for automated website auditing, translating research-driven requirements into production workflows for <strong>SEO and GEO analysis</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#7be589] shrink-0 mt-0.5" />
                <span>
                  Developed and prototyped <strong>3+ product features</strong> including backlink analysis, competitor insights, and Brand Voice evaluation, taking features from proof-of-concept to production.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Experience Item 2: IGDTUW Internship */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative pl-8 sm:pl-12 border-l-2 border-[#7be589] space-y-5"
          >
            {/* Glowing Timeline Dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#7be589] ring-4 ring-[#7be589]/30 shadow-[0_0_10px_#7be589]" />

            {/* Role & Org */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#141313]/90">
                  MERN Stack Developer Intern
                </h3>
                <p className="text-zinc-700 text-lg md:text-xl font-semibold">
                  Indira Gandhi Delhi Technical University for Women (IGDTUW), Delhi
                </p>
              </div>

              <div className="flex items-center gap-2 text-zinc-600 text-xs tracking-tight bg-white border border-zinc-200 px-3 py-1.5 rounded-full shrink-0 shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-[#7be589]" />
                <span>May 2025 – July 2025 • Remote</span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-3.5 text-zinc-700 font-light text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#7be589] shrink-0 mt-0.5" />
                <span>
                  Architected full-stack web applications using the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js), writing <strong>10+ RESTful APIs</strong> for modular, high-availability microservices.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#7be589] shrink-0 mt-0.5" />
                <span>
                  Integrated AI-powered features, sentiment scoring models, and third-party APIs to boost user retention, interface accessibility, and system response times.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#7be589] shrink-0 mt-0.5" />
                <span>
                  Authored comprehensive API documentation and implemented robust data validation schemas with Mongoose ODM and cryptographic JWT authorization.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Education Block: IGDTUW B.Tech */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-8 sm:pl-12 border-l-2 border-zinc-300 space-y-4"
          >
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-zinc-400 ring-4 ring-zinc-200" />

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#141313]/90 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-[#7be589]" />
                  <span>B.Tech in Information Technology</span>
                </h3>
                <p className="text-zinc-600 font-medium text-base md:text-lg">
                  Indira Gandhi Delhi Technical University for Women (IGDTUW), Delhi
                </p>
              </div>

              <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase tracking-tight bg-white border border-zinc-200 px-3 py-1.5 rounded-full shrink-0 shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                <span>2024 – 2028</span>
              </div>
            </div>

            <p className="text-zinc-600 font-light text-sm md:text-base leading-relaxed">
              Curriculum focused on Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Artificial Intelligence. Active contributor to student entrepreneurship initiatives and national hackathons.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#7be589]/10 border border-[#7be589]/30">
              <Award className="w-4 h-4 text-[#7be589]" />
              <span className="text-sm text-[#141313] font-semibold">CGPA: <span className="text-lg font-black">8.85</span> / 10</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
