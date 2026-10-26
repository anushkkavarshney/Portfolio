import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Medal, Users, HeartHandshake, Sparkles, Globe2, BookOpen } from 'lucide-react';

export const Achievements: React.FC = () => {
  const awards = [
    {
      icon: <Code2 className="w-6 h-6" />,
      stat: '500+',
      title: 'Problem Solving',
      description:
        'Solved 500+ Data Structures & Algorithms and Competitive Programming problems across LeetCode, GeeksforGeeks, CodeChef, AtCoder, HackerRank, and Codeforces.',
      meta: 'LeetCode Contest Rating: 1614',
      category: 'Competitive Programming'
    },
    {
      icon: <Medal className="w-6 h-6" />,
      stat: 'Top 10',
      title: 'Innovortex 3.0 Finalist',
      description:
        'Ranked among the Top 10 Finalists nationwide at Innovortex 3.0, a national AI & technology hackathon, building a working prototype under pressure.',
      meta: 'National AI/Technology Hackathon',
      category: 'Hackathon Honours'
    },
    {
      icon: <Users className="w-6 h-6" />,
      stat: 'Top 200',
      title: 'Moves 2026 Hackathon',
      description:
        'Placed among the Top 200 teams at Moves 2026 (Axis Bank × InsideKampus), selected from a field of 43,110+ registrants.',
      meta: '43,110+ registrants',
      category: 'Hackathon Honours'
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      stat: 'Top 15K',
      title: 'Google BigCode Challenge',
      description:
        'Earned a Top 15,000 global ranking in the Google BigCode Challenge — a worldwide coding competition spanning hundreds of countries.',
      meta: 'Ranked globally',
      category: 'Global Competition'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      stat: 'Top 60',
      title: 'Merit Scholarship Recipient',
      description:
        'Ranked among the Top 60 students in Delhi in a competitive scholarship examination, earning a full scholarship for JEE coaching.',
      meta: 'Full scholarship • Merit List',
      category: 'Academic Distinction'
    }
  ];

  const leadership = [
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: 'Web Development Team Head — E-Cell IGDTUW',
      description:
        'Led the design and development of the official E-Cell IGDTUW website, steering a team of contributors and owning the portal experience end to end for flagship summits and registrations.',
      tag: 'Leadership'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Startup Mentor — Super30',
      description:
        'Mentoring juniors in their startup journey — guiding early product thinking, prototypes, and pitch readiness as they take their first entrepreneurial steps.',
      tag: 'Mentorship'
    }
  ];

  return (
    <section className="py-28 px-[5vw] bg-[#fafaf9] border-t border-black/10 bg-grain relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-zinc-600 font-semibold mb-3">
              <span className="w-2.5 h-2.5 bg-[#7be589] rounded-full shadow-[0_0_8px_#7be589]" />
              <span>Awards &amp; Leadership</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-[-0.04em] leading-[0.95] text-[#141313]">
              Honors <span className="font-cursive text-5xl md:text-8xl text-[#7be589] font-normal normal-case">&amp; Achievements</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest max-w-sm">
            A proven record across academics, competition &amp; leadership
          </p>
        </div>

        {/* Awards Bento: wide first card + supporting tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 rounded-[26px] bg-white border border-black/10 shadow-sm hover:shadow-xl hover:shadow-[#7be589]/10 hover:border-[#7be589]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5 group ${
                idx === 0 ? 'md:col-span-2 md:flex-row md:items-center md:gap-8' : ''
              }`}
            >
              {/* Stat + icon medallion */}
              <div className={`flex items-center gap-4 ${idx === 0 ? 'md:flex-col md:items-start md:gap-3 md:min-w-[170px]' : ''}`}>
                <div className="w-14 h-14 rounded-2xl bg-[#7be589]/15 text-[#141313] border border-[#7be589]/40 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#7be589] group-hover:text-[#141313] transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#141313]/90 tracking-tight bg-gradient-to-r from-[#141313] to-[#4ade80] bg-clip-text text-transparent">
                    {item.stat}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold block">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#141313] leading-snug group-hover:text-black transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 font-light leading-relaxed">
                  {item.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7be589]/10 border border-[#7be589]/25 text-[11px] font-semibold text-[#141313]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7be589]" />
                  {item.meta}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadership.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 rounded-[26px] bg-[#141313] text-white overflow-hidden flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 group"
            >
              {/* soft green corner glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#7be589]/10 blur-2xl pointer-events-none group-hover:bg-[#7be589]/20 transition-colors" />
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#7be589] text-[#141313] flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 border border-white/10 px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold leading-snug pr-4">{item.title}</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
