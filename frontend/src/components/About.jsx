import React from 'react';
import {
  BrainCircuit,
  Cpu,
  Sparkles,
  Award,
  GraduationCap,
  Zap,
  CheckCircle2,
  MapPin,
  TrendingUp,
  ShieldCheck,
  Terminal,
  Layers,
} from 'lucide-react';

export default function About({ profile }) {
  const stats = [
    {
      label: 'IEEE Publication',
      value: '1st Author',
      subtitle: 'XAI & Deep Learning',
      icon: Award,
      color: 'from-purple-500 to-indigo-600',
      badge: 'Scientific Research',
    },
    {
      label: 'Flagship AI Product',
      value: 'VivaBot.AI',
      subtitle: 'MERN + GPT-4o mini',
      icon: BrainCircuit,
      color: 'from-pink-500 to-rose-600',
      badge: 'Live Platform',
    },
    {
      label: 'Academic Foundation',
      value: 'BSc in CSE',
      subtitle: 'AUST (2021 - 2025)',
      icon: GraduationCap,
      color: 'from-cyan-500 to-blue-600',
      badge: 'Top Honors',
    },
    {
      label: 'Full-Stack AI Stack',
      value: 'Python + MERN',
      subtitle: 'ML to Cloud Web Apps',
      icon: Zap,
      color: 'from-amber-500 to-orange-600',
      badge: 'Production Ready',
    },
  ];

  const aiPillars = [
    {
      title: 'LLM & Generative AI Systems',
      description:
        'Architecting intelligent applications powered by modern LLMs (GPT-4o mini, OpenRouter, Claude). Creator of VivaBot.AI with automated resume parsing, real-time interview generation, and structured feedback scoring.',
      icon: BrainCircuit,
      tags: ['LLM Orchestration', 'Prompt Engineering', 'VivaBot.AI', 'OpenRouter API', 'Streaming Responses'],
      color: 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
    {
      title: 'Deep Learning & Applied Research',
      description:
        'Published first-author IEEE research in medical cancer classification utilizing lightweight ShuffleNetV2, TDO-optimized Gaussian Naive Bayes, and Explainable AI (XAI) heatmaps for interpretability.',
      icon: Cpu,
      tags: ['ShuffleNetV2', 'Explainable AI (XAI)', 'PyTorch', 'Bangla NLP (mBERT/XLM-R)', 'Computer Vision'],
      color: 'text-pink-600 dark:text-pink-400 bg-pink-500/10 border-pink-500/20',
    },
    {
      title: 'Full-Stack Production Pipeline (MERN)',
      description:
        'Unlike data scientists who stop at Jupyter notebooks, I turn AI models into high-performance web products with React 19 frontends, Node/Express microservices, JWT security, and MongoDB Atlas databases.',
      icon: Layers,
      tags: ['React 19', 'Node.js', 'Express.js', 'MongoDB Atlas', 'REST APIs', 'Tailwind CSS'],
      color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      title: 'Data Analytics & Business Intelligence',
      description:
        'Practical corporate experience as Data Analyst at Sunset Kuakata Hotel & Resort Ltd., automating sales KPI reporting, CRM database pipelines, and Power BI executive dashboards.',
      icon: TrendingUp,
      tags: ['Power BI', 'CRM Analytics', 'Advanced Excel', 'Data Modeling', 'KPI Metrics'],
      color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
  ];

  const philosophies = [
    {
      title: 'Notebook to Production',
      desc: 'An AI model only delivers value when users can interact with it seamlessly. I bridge machine learning logic with responsive full-stack web platforms.',
      icon: Terminal,
    },
    {
      title: 'Explainability & Interpretability',
      desc: 'AI must be transparent. Drawing from my IEEE XAI research, I design systems where model outputs and decisions are explainable and verifiable.',
      icon: ShieldCheck,
    },
    {
      title: 'Latency & Token Optimization',
      desc: 'Optimizing context windows, model selection, prompt token economics, and streaming pipelines to deliver instant, cost-effective AI interactions.',
      icon: Zap,
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 shadow-sm hover:scale-105 transition-transform duration-200 cursor-default">
            <Sparkles className="w-3.5 h-3.5 text-purple-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span>About The AI Developer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Bridging Machine Intelligence with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500">
              Modern Web Systems
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Software Engineer & AI Developer driven by a singular mission: turning cutting-edge foundation models and research into production-grade, human-centric software.
          </p>
        </div>

        {/* 4 Feature Stat Metric Cards with Hover Lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color} group-hover:h-2 transition-all duration-300`} />
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-purple-600 dark:text-purple-400 group-hover:scale-115 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
                    {item.badge}
                  </span>
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white mb-1 tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-purple-600 dark:text-purple-400 mb-0.5">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {item.subtitle}
                </div>
              </div>
            );
          })}
        </div>

        {/* Narrative & Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                I am <strong className="text-slate-900 dark:text-white font-bold">MD Asadul Islam</strong>, an AI Developer and Software Engineer based in <strong className="text-purple-600 dark:text-purple-400">Dhaka, Bangladesh</strong>. I graduated with a <strong className="text-slate-900 dark:text-white font-semibold">BSc in Computer Science and Engineering (CSE)</strong> from <strong className="text-slate-900 dark:text-white font-semibold">Ahsanullah University of Science and Technology (AUST)</strong>.
              </p>
              <p>
                My passion lies at the intersection of <strong className="text-purple-600 dark:text-purple-400 font-semibold">Artificial Intelligence and Full-Stack Web Development</strong>. Most AI practitioners stop inside Jupyter notebooks, while many web developers struggle with AI architecture. I specialize in bridging this gap: transforming LLMs, NLP pipelines, and computer vision models into robust, responsive, and secure full-stack applications.
              </p>
              <p>
                This conviction led me to create <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">VivaBot.AI</strong> — an AI interview preparation platform that uses GPT-4o mini and OpenRouter to simulate technical interviews, analyze candidate resumes, evaluate answers with automated rubric scoring, and generate downloadable PDF analytical reports.
              </p>
            </div>

            {/* Quick credentials badges with hover pop */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold">
              <span className="px-3.5 py-1.5 rounded-xl bg-purple-500/10 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-500/20 flex items-center gap-1.5 hover:scale-105 hover:bg-purple-500/20 transition-all duration-200">
                <Award className="w-3.5 h-3.5 text-purple-500" /> First Author IEEE Publication
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-indigo-500/10 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-1.5 hover:scale-105 hover:bg-indigo-500/20 transition-all duration-200">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-500" /> BSc in CSE, AUST (2021-2025)
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 hover:scale-105 hover:bg-emerald-500/20 transition-all duration-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> SSC & HSC: GPA 5.00 / 5.00
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-pink-500/10 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 border border-pink-500/20 flex items-center gap-1.5 hover:scale-105 hover:bg-pink-500/20 transition-all duration-200">
                <Sparkles className="w-3.5 h-3.5 text-pink-500" /> IELTS 6.5
              </span>
            </div>

            {/* Location & Contact Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-500" />
                <span>Dhaka, Bangladesh · Open to Remote & Global Roles</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Philosophy Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-7 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-2xl space-y-5 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-wider font-bold">
                <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '7s' }} />
                <span>Core Engineering Philosophy</span>
              </div>
              <h3 className="text-xl font-bold leading-snug">
                How I Approach AI System Architecture
              </h3>

              <div className="space-y-4 pt-2">
                {philosophies.map((phil, pIdx) => {
                  const Icon = phil.icon;
                  return (
                    <div
                      key={pIdx}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 space-y-1.5"
                    >
                      <div className="flex items-center gap-2.5 font-bold text-sm text-white">
                        <Icon className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>{phil.title}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pl-6">
                        {phil.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Expertise Grid with animated hover effects */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Technical Spectrum
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Core Pillars of My AI & Engineering Arsenal
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-3 rounded-2xl border ${pillar.color} group-hover:scale-115 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {pillar.title}
                      </h4>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                    {pillar.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:border-purple-500/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
