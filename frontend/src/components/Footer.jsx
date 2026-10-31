import React from 'react';
import { ArrowUp, Heart, BrainCircuit } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const currentYear = new Date().getFullYear();

export default function Footer({ profile }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-slate-50 text-slate-600 transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950 dark:text-slate-400">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-6 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-slate-200/80 pb-9 dark:border-slate-800/80 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <a href="#" className="group flex items-center gap-3.5 justify-self-center md:justify-self-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 text-white shadow-lg shadow-purple-500/20 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <div>
              <p className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
                MD Asadul Islam
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                Full-Stack AI Developer <span className="px-1 text-purple-500">·</span> Software Engineer
              </p>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-500">
                Dhaka, Bangladesh
              </p>
            </div>
          </a>

          <nav aria-label="Social profiles" className="flex items-center justify-center gap-2">
            <a
              href="https://github.com/Asadul09"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-3.5 py-2.5 text-xs font-semibold text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-300 hover:text-purple-700 hover:shadow-md hover:shadow-purple-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-purple-700 dark:hover:text-purple-300"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile?.socialLinks?.linkedin || "https://www.linkedin.com/in/a-j-asad-408839270/"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-3.5 py-2.5 text-xs font-semibold text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700 hover:shadow-md hover:shadow-indigo-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-indigo-700 dark:hover:text-indigo-300"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </nav>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center justify-center gap-2 justify-self-center rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:bg-white dark:text-slate-900 dark:shadow-black/20 dark:hover:bg-purple-200 dark:focus-visible:ring-offset-slate-950 md:justify-self-end"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-5 text-center text-xs text-slate-500 dark:text-slate-500 sm:flex-row sm:text-left">
          <p>© {currentYear} MD Asadul Islam. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Crafted with care and AI
            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}
