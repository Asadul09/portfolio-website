import React from 'react';
import { BookOpen, Award, ExternalLink, Sparkles, Binary, BrainCircuit } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Research({ profile }) {
  const publications = profile?.researchPublications || [];

  if (!publications.length) return null;

  return (
    <section id="research" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
            Scientific Research & Publications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Artificial Intelligence & NLP Research
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Bridging software engineering with applied machine learning, computer vision, and low-resource language processing.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-purple-500/50 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500" />

              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center gap-1.5 border border-purple-200 dark:border-purple-800">
                    <Award className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    {pub.venue}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {pub.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                  {pub.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pub.summary}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {pub.tags?.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1"
                    >
                      <BrainCircuit className="w-3 h-3 text-purple-500" /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action link */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  CSE Dept. · Ahsanullah University of Science & Technology
                </span>
                <a
                  href={pub.link || 'https://github.com/Asadul09'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
