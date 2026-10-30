import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Experience({ profile }) {
  const [activeTab, setActiveTab] = useState('work');

  const experiences = profile?.experiences || [];
  const education = profile?.education || [];

  return (
    <section id="experience" className="py-24 md:py-32 bg-slate-50/70 dark:bg-slate-900/30 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 shadow-sm inline-block hover:scale-105 transition-transform">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Experience & Academic Foundation
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A milestone breakdown of my engineering trajectory, data analytics leadership, and academic milestones.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300/50 dark:border-slate-700/60 shadow-inner">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'work'
                  ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-md scale-105'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" /> Work History
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-md scale-105'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" /> Education
            </button>
          </div>
        </div>

        {/* Timeline Content with hover cards */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'work' ? (
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-indigo-500 before:to-transparent">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-start group"
                >
                  {/* Timeline point with glow */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-purple-600 z-10 shadow-md group-hover:scale-125 transition-transform duration-300" />

                  {/* Card Content with lift animation */}
                  <div
                    className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                      idx % 2 === 0 ? 'md:pr-10' : 'md:pl-10 md:ml-auto'
                    }`}
                  >
                    <div className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-purple-500/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 flex items-center gap-1.5 border border-purple-200 dark:border-purple-800">
                          <Calendar className="w-3.5 h-3.5" /> {exp.period}
                        </span>
                        {exp.location && (
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-purple-500" /> {exp.location}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-0.5">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-3">
                        {exp.company}
                      </h4>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {exp.technologies && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                          {exp.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-purple-500/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 inline-flex items-center gap-1.5 border border-purple-200 dark:border-purple-800">
                      <Calendar className="w-3.5 h-3.5" /> {edu.period}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm font-bold text-purple-600 dark:text-purple-400">
                      {edu.institution}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
