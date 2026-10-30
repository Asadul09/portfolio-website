import React from 'react';
import { Award, BrainCircuit, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Research({ profile }) {
  const publications = profile?.researchPublications || [];

  if (!publications.length) return null;

  return (
    <section id="research" className="py-24 md:py-32 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 shadow-sm inline-block hover:scale-105 transition-transform">
            Scientific Research & Publications
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Artificial Intelligence & NLP Research
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Bridging software engineering with applied machine learning, computer vision, and low-resource language processing.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient with glowing shimmer */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 group-hover:h-2 transition-all duration-300" />

              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center gap-1.5 border border-purple-200 dark:border-purple-800 shadow-sm">
                    <Award className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 animate-bounce" style={{ animationDuration: '3s' }} />
                    {pub.venue}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 shadow-sm">
                    {pub.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                  {pub.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pub.summary}
                </p>

                {/* Tech Tags with hover animation */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {pub.tags?.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                    >
                      <BrainCircuit className="w-3.5 h-3.5 text-purple-500" /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action link */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  CSE Dept. · Ahsanullah University of Science & Technology
                </span>
                <a
                  href={pub.link || 'https://github.com/Asadul09'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 group/link transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 group-hover/link:scale-115 transition-transform" /> View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
