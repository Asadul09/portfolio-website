import React, { useState } from 'react';
import { ExternalLink, Sparkles, BrainCircuit } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <section id="projects" className="py-24 md:py-32 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 shadow-sm inline-block hover:scale-105 transition-transform">
            Featured Systems
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            AI Applications & Engineering Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A portfolio of production LLM platforms, deep learning research implementations, and scalable full-stack web solutions.
          </p>
        </div>

        {/* Category Filters with animated pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 transform active:scale-95 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800 hover:text-purple-600 dark:hover:text-white hover:border-purple-500/40 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with dynamic card animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project._id || idx}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col group"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={
                    project.image ||
                    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
                  }
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                {/* Category & Featured Badge */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900/90 text-white backdrop-blur-md border border-white/10 flex items-center gap-1 shadow-sm">
                    {project.category.includes('AI') && <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />}
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-white flex items-center gap-1 shadow-md animate-pulse">
                      <Sparkles className="w-3 h-3" /> Flagship
                    </span>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags?.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links with animated icons */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 group/link transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:rotate-12 transition-transform" /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 group/git transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5 group-hover/git:scale-115 transition-transform" /> Code Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
