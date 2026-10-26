import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, BrainCircuit, Database, Cpu, Wrench } from 'lucide-react';

export const Toolkit: React.FC = () => {
  const skillCategories = [
    {
      id: "01",
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-[#7be589]" />,
      skills: ["C++", "Python", "Java", "JavaScript (ES6+)", "TypeScript", "R", "SQL", "HTML5/CSS3"]
    },
    {
      id: "02",
      title: "Backend & Web Frameworks",
      icon: <Server className="w-5 h-5 text-[#7be589]" />,
      skills: ["FastAPI", "Node.js", "Express.js", "React.js", "Next.js", "RESTful APIs", "JWT Auth", "Uvicorn"]
    },
    {
      id: "03",
      title: "AI, NLP & Agentic Systems",
      icon: <BrainCircuit className="w-5 h-5 text-[#7be589]" />,
      skills: ["HuggingFace Transformers", "T5 & BART", "PyTorch", "LangChain", "CrewAI", "Google Gemini API", "BM25 Retrieval", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
      id: "04",
      title: "Databases & Cloud Storage",
      icon: <Database className="w-5 h-5 text-[#7be589]" />,
      skills: ["MongoDB", "MongoDB Atlas", "PostgreSQL", "MySQL", "SQLite", "Supabase", "FAISS Vector Store", "Mongoose"]
    },
    {
      id: "05",
      title: "Core CS & Systems",
      icon: <Cpu className="w-5 h-5 text-[#7be589]" />,
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Management (DBMS)", "Operating Systems", "Information Retrieval", "System Architecture"]
    },
    {
      id: "06",
      title: "Developer Tooling & DevOps",
      icon: <Wrench className="w-5 h-5 text-[#7be589]" />,
      skills: ["Git & GitHub", "Vite", "Tailwind CSS", "Postman", "Linux/Bash", "VS Code", "Vercel", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-28 px-[5vw] bg-white border-t border-black/10 bg-grain">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-zinc-600 font-semibold mb-3">
              <span className="w-2.5 h-2.5 bg-[#7be589] rounded-full shadow-[0_0_8px_#7be589]" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-[-0.04em] text-[#141313]">
              Technical <span className="font-cursive text-6xl md:text-9xl text-[#7be589] font-normal normal-case">Toolkit</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
            ENGINEERED FOR PRODUCTION &amp; RESEARCH
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group p-8 rounded-3xl bg-[#f8f8f6] border border-black/10 shadow-sm hover:shadow-xl hover:border-[#7be589] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-[#7be589] transition-colors">
                    {cat.id}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#141313] tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 font-mono group-hover:border-[#7be589]/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
