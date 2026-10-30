import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';

export default function Experience({ profile }) {
  const [activeTab, setActiveTab] = useState('work');

  const experiences = profile?.experiences || [];
  const education = profile?.education || [];

  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50/60 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Experience & Education
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A milestone breakdown of my engineering journey and academic foundation.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-2xl bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/40 dark:border-slate-700/60">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'work'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" /> Work History
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" /> Education
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'work' ? (
            <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-transparent">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-start group"
                >
                  {/* Timeline point */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-600 z-10 shadow-sm" />

                  {/* Card Content */}
                  <div
                    className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                      idx % 2 === 0 ? 'md:pr-10' : 'md:pl-10 md:ml-auto'
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-indigo-500/40 hover:shadow-md transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {exp.period}
                        </span>
                        {exp.location && (
                          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {exp.location}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                        {exp.company}
                      </h4>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {exp.technologies && (
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                          {exp.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
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
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-indigo-500/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {edu.period}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
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
