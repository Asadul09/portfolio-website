import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Mail,
  Download,
  Sparkles,
  Code2,
  Database,
  Layers,
  Terminal,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export default function Hero({ profile }) {
  const [taglineIndex, setTaglineIndex] = useState(0);

  const taglines = profile?.taglines || [
    'Full-Stack MERN Developer',
    'AI & Web Applications Engineer',
    'BSc in CSE from AUST',
    'IEEE Published AI Researcher',
    'React & Node.js Specialist',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [taglines.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for Software Engineering Roles & Contracts</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                  {profile?.fullName || 'MD Asadul Islam'}
                </span>
              </h1>
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                  I craft{' '}
                  <span className="text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500 pb-0.5 transition-all">
                    {taglines[taglineIndex]}
                  </span>
                </span>
              </div>
            </div>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {profile?.bio ||
                'Software Engineer and Full-Stack MERN Developer specializing in high-performance web applications, modern AI integrations (GPT-4o mini / OpenRouter), and clean architectural design.'}
            </p>

            {/* MERN Stack Badges */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-semibold">
              <span className="px-3 py-1 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" /> MongoDB
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-500/10 text-slate-700 dark:text-slate-300 border border-slate-500/20 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Express.js
              </span>
              <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" /> React 19
              </span>
              <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> Node.js
              </span>
              <span className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> AI / LLM Integrations
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://vivabot-lake.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-all text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Live VivaBot.AI</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <a
                href="https://github.com/Asadul09"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/asadul09"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:asadulislam.dev@gmail.com"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all"
                aria-label="Direct Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Code Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              <div className="relative bg-slate-900 text-slate-200 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
                {/* Window header */}
                <div className="bg-slate-950/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <span className="text-slate-400 text-xs flex items-center gap-1 font-sans">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> asadul.engineer.js
                  </span>
                  <div className="w-10" />
                </div>

                {/* Code body */}
                <div className="p-5 space-y-2 overflow-x-auto text-slate-300">
                  <p>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-indigo-300">softwareEngineer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">'MD Asadul Islam'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">education:</span>{' '}
                    <span className="text-emerald-300">'BSc in CSE, AUST'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">location:</span>{' '}
                    <span className="text-emerald-300">'Dhaka, Bangladesh'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">primaryStack:</span> [
                    <span className="text-amber-300">'MongoDB'</span>,{' '}
                    <span className="text-amber-300">'Express'</span>,{' '}
                    <span className="text-amber-300">'React'</span>,{' '}
                    <span className="text-amber-300">'Node'</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">flagshipApp:</span>{' '}
                    <span className="text-purple-300">'VivaBot.AI (MERN + GPT-4o)'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">publications:</span>{' '}
                    <span className="text-pink-300">'IEEE (First Author, XAI)'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">status:</span>{' '}
                    <span className="text-emerald-400">'Open to opportunities'</span>,
                  </p>
                  <p>&#125;;</p>
                  <p className="pt-2 text-slate-500 italic">
                    // Turning complex logic into intuitive products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
