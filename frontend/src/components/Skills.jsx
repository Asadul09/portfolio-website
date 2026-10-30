import React, { useState } from 'react';
import {
  Code,
  Server,
  Database,
  Terminal,
  Layers,
  Cpu,
  Palette,
  Layout,
  GitBranch,
  Boxes,
  KeyRound,
  Network,
  Cloud,
  Container,
  Zap,
} from 'lucide-react';

const iconMap = {
  Atom: Code,
  FileCode2: Code,
  FileCode: Code,
  Palette: Palette,
  Layout: Layout,
  Cpu: Cpu,
  Server: Server,
  Layers: Layers,
  Network: Network,
  KeyRound: KeyRound,
  Radio: Network,
  Database: Database,
  Binary: Database,
  Zap: Zap,
  Table: Database,
  GitBranch: GitBranch,
  Container: Container,
  Boxes: Boxes,
  Terminal: Terminal,
  Cloud: Cloud,
};

export default function Skills({ skills }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools & DevOps'];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter(
          (s) => s.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50/60 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
            Skills & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            My Technical Arsenal
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Technologies and frameworks I utilize to architect and ship production-ready full-stack applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => {
            const Icon = iconMap[skill.iconName] || Code;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-indigo-500/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {skill.proficiency}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-700"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
