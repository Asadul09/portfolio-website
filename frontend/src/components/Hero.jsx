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
  BrainCircuit,
  Cpu,
  Bot,
  FileText,
  X,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

/* ── CV Viewer Modal ─────────────────────────────────────── */
function CVModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm animate-fade-in" />

      {/* Modal panel */}
      <div
        className="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-slate-950 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
              MD Asadul Islam — Curriculum Vitae
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/MD_Asadul_Islam_CV.pdf"
              download="MD_Asadul_Islam_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-200"
            >
              <Download className="w-3.5 h-3.5" /> Download
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200"
              aria-label="Close CV viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF embed */}
        <iframe
          src="/MD_Asadul_Islam_CV.pdf#toolbar=0"
          title="MD Asadul Islam CV"
          className="flex-1 w-full border-none"
        />
      </div>
    </div>
  );
}

export default function Hero({ profile }) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [cvOpen, setCvOpen] = useState(false);

  const taglines = [
    'Full-Stack AI Developer',
    'LLM & Agentic Systems Engineer',
    'AI-Powered Web Applications',
    'IEEE Published AI Researcher',
    'Creator of VivaBot.AI',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [taglines.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern transition-colors duration-300">
      {cvOpen && <CVModal onClose={() => setCvOpen(false)} />}
      {/* Dynamic Animated background radial gradient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/25 via-indigo-500/15 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl pointer-events-none animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-950/60 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-bold shadow-sm hover:scale-105 transition-transform duration-200 cursor-default">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for AI Engineering & Full-Stack Roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 hover:brightness-110 transition-all">
                  {profile?.fullName || 'MD Asadul Islam'}
                </span>
              </h1>
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200">
                  I craft{' '}
                  <span className="text-purple-600 dark:text-purple-400 border-b-2 border-purple-500 pb-0.5 transition-all duration-500 inline-block animate-pulse">
                    {taglines[taglineIndex]}
                  </span>
                </span>
              </div>
            </div>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              AI Developer & Software Engineer with a BSc in CSE from AUST. I architect intelligent AI applications, orchestrate LLMs (GPT-4o mini / OpenRouter), conduct deep learning research (First Author IEEE XAI), and ship production-grade full-stack web platforms.
            </p>

            {/* AI + Full Stack Badges with hover animations */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-bold">
              <span className="px-3 py-1.5 rounded-xl bg-purple-500/10 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-500/20 flex items-center gap-1.5 hover:scale-105 hover:bg-purple-500/20 transition-all duration-200">
                <BrainCircuit className="w-3.5 h-3.5 text-purple-500" /> LLMs & Generative AI
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-pink-500/10 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 border border-pink-500/20 flex items-center gap-1.5 hover:scale-105 hover:bg-pink-500/20 transition-all duration-200">
                <Cpu className="w-3.5 h-3.5 text-pink-500" /> Deep Learning & PyTorch
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-1.5 hover:scale-105 hover:bg-cyan-500/20 transition-all duration-200">
                <Code2 className="w-3.5 h-3.5 text-cyan-500" /> React 19 Frontend
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 hover:scale-105 hover:bg-emerald-500/20 transition-all duration-200">
                <Terminal className="w-3.5 h-3.5 text-emerald-500" /> Node.js & Express
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-green-500/10 dark:bg-green-950/60 text-green-700 dark:text-green-300 border border-green-500/20 flex items-center gap-1.5 hover:scale-105 hover:bg-green-500/20 transition-all duration-200">
                <Database className="w-3.5 h-3.5 text-green-500" /> MongoDB Atlas
              </span>
            </div>

            {/* CTA Action Buttons with rich interactive hover */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
              >
                <span>Explore AI Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download CV */}
              <a
                href="/MD_Asadul_Islam_CV.pdf"
                download="MD_Asadul_Islam_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md text-sm group"
              >
                <Download className="w-4 h-4 text-emerald-500 group-hover:animate-bounce" />
                <span>Download CV</span>
              </a>

              {/* View CV (inline modal) */}
              <button
                onClick={() => setCvOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/70 border border-purple-300 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/60 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md text-sm group cursor-pointer"
              >
                <FileText className="w-4 h-4 text-purple-500 group-hover:scale-110 transition-transform" />
                <span>View CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 text-sm cursor-pointer"
              >
                <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Hire Me</span>
              </a>
            </div>

            {/* Social Icons with springy hover */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <a
                href="https://github.com/Asadul09"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-115 hover:rotate-6 shadow-sm hover:shadow-md transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={profile?.socialLinks?.linkedin || 'https://www.linkedin.com/in/a-j-asad-408839270/'}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-115 hover:-rotate-6 shadow-sm hover:shadow-md transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profile?.email || 'asadut486@gmail.com'}`}
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-115 hover:rotate-6 shadow-sm hover:shadow-md transition-all duration-300"
                aria-label="Direct Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: AI Architecture Terminal Card with floating motion */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md animate-float">
              {/* Outer glowing border aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl blur-xl opacity-35 group-hover:opacity-100 transition duration-1000" />

              <div className="relative bg-slate-900 text-slate-200 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm hover:border-purple-500/50 transition-all duration-300">
                {/* Window header */}
                <div className="bg-slate-950/95 px-4 py-3.5 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block hover:scale-110 transition-transform cursor-pointer" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block hover:scale-110 transition-transform cursor-pointer" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block hover:scale-110 transition-transform cursor-pointer" />
                  </div>
                  <span className="text-slate-400 text-xs flex items-center gap-1.5 font-sans font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '8s' }} /> asadul.ai.config.ts
                  </span>
                  <div className="w-8" />
                </div>

                {/* Code body */}
                <div className="p-5 space-y-2 overflow-x-auto text-slate-300">
                  <p>
                    <span className="text-purple-400">export const</span>{' '}
                    <span className="text-indigo-300">aiDeveloper</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">'MD Asadul Islam'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-emerald-300">'Full-Stack AI Developer'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">education:</span>{' '}
                    <span className="text-emerald-300">'BSc in CSE, AUST'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">aiSpecialization:</span> [
                    <span className="text-amber-300">'LLMs'</span>,{' '}
                    <span className="text-amber-300">'GPT-4o'</span>,{' '}
                    <span className="text-amber-300">'XAI'</span>,{' '}
                    <span className="text-amber-300">'NLP'</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">webStack:</span> [
                    <span className="text-cyan-300">'React 19'</span>,{' '}
                    <span className="text-cyan-300">'Node'</span>,{' '}
                    <span className="text-cyan-300">'MongoDB'</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">flagshipProduct:</span>{' '}
                    <span className="text-purple-300">'VivaBot.AI'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">scientificResearch:</span>{' '}
                    <span className="text-pink-300">'IEEE (First Author, XAI)'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">buildIntelligentApp:</span> (idea) =&gt; &#123;
                  </p>
                  <p className="pl-8 text-slate-400">
                    <span className="text-purple-400">return</span> idea
                      .<span className="text-indigo-300">trainOrPrompt</span>()
                      .<span className="text-indigo-300">wrapWithMERN</span>()
                      .<span className="text-indigo-300">deploy</span>();
                  </p>
                  <p className="pl-4">&#125;,</p>
                  <p>&#125;;</p>
                  <p className="pt-2 text-slate-500 italic">
                    // Turning foundation models into production platforms.
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
