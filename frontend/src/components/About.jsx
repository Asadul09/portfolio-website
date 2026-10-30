import React from 'react';
import { Award, Briefcase, Users, MapPin, Mail, Phone, CheckCircle2, ShieldCheck, Zap, Sparkles, GraduationCap, BrainCircuit } from 'lucide-react';

export default function About({ profile }) {
  const stats = [
    {
      label: 'Years Dev Experience',
      value: '1+',
      icon: Award,
      color: 'text-indigo-500',
    },
    {
      label: 'Projects Built',
      value: '10+',
      icon: Briefcase,
      color: 'text-purple-500',
    },
    {
      label: 'IEEE Publication',
      value: '1st Author',
      icon: Sparkles,
      color: 'text-pink-500',
    },
  ];

  const highlights = [
    {
      title: 'Full-Stack MERN Mastery',
      desc: 'Building responsive React 19 web interfaces, scalable Node/Express RESTful APIs, JWT/Firebase security, and optimized MongoDB databases.',
      icon: Zap,
    },
    {
      title: 'Applied AI & LLM Integration',
      desc: 'Creator of VivaBot.AI (AI interview prep platform) integrating GPT-4o mini, OpenRouter, resume parsing, and automated scoring reports.',
      icon: BrainCircuit,
    },
    {
      title: 'Computer Science & Research',
      desc: 'BSc in CSE from AUST with a first-author IEEE paper in Deep Learning/XAI and low-resource Bangla NLP contrastive learning research.',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Engineering Intelligent Web Solutions & Scalable Systems
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Bio & Details */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Hello! I'm <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">{profile?.fullName || 'MD Asadul Islam'}</strong>, a Software Engineer and Full-Stack MERN Developer based in Dhaka, Bangladesh, with a BSc in Computer Science and Engineering from <strong className="text-slate-900 dark:text-white font-semibold">Ahsanullah University of Science and Technology (AUST)</strong>.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              I specialize in developing production-grade web applications with modern React ecosystems, Node.js microservices, and MongoDB. My engineering journey bridges full-stack craftsmanship with applied AI — having built <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">VivaBot.AI</strong> (an AI-powered interview prep platform) and published a first-author <strong className="text-purple-600 dark:text-purple-400 font-semibold">IEEE research paper</strong> on medical deep learning with Explainable AI.
            </p>

            {/* Quick Contact Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>{profile?.location || 'Dhaka, Bangladesh'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>BSc in CSE, AUST (2021 - 2025)</span>
              </div>
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-1 hover:border-indigo-500/50 transition-colors"
                  >
                    <Icon className={`w-5 h-5 mx-auto mb-1 ${stat.color}`} />
                    <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Feature Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/40 transition-all hover:shadow-md group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
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
