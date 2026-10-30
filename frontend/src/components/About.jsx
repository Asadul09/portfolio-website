import React from 'react';
import { Award, Briefcase, Users, MapPin, Mail, Phone, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function About({ profile }) {
  const stats = [
    {
      label: 'Years Experience',
      value: `${profile?.yearsOfExperience || 3}+`,
      icon: Award,
      color: 'text-indigo-500',
    },
    {
      label: 'Projects Completed',
      value: `${profile?.completedProjects || 25}+`,
      icon: Briefcase,
      color: 'text-purple-500',
    },
    {
      label: 'Happy Collaborators',
      value: `${profile?.happyClients || 15}+`,
      icon: Users,
      color: 'text-pink-500',
    },
  ];

  const highlights = [
    {
      title: 'Full Stack Engineering',
      desc: 'Expertise across the entire web cycle: from React frontend state management to Node/Express REST APIs and MongoDB query tuning.',
      icon: Zap,
    },
    {
      title: 'Security & Reliability',
      desc: 'Implementing secure JWT authentication, input sanitation, rate limiting, and defensive architectural patterns.',
      icon: ShieldCheck,
    },
    {
      title: 'Clean & Scalable Code',
      desc: 'Committed to SOLID principles, maintainable folder structures, and high automated test coverage.',
      icon: Sparkles,
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
            Engineering seamless digital experiences with modern web technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Bio & Details */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Hello! I'm a full-stack developer with a deep passion for the{' '}
              <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">
                MERN stack (MongoDB, Express, React, Node.js)
              </strong>
              . I enjoy taking complex engineering challenges and turning them into intuitive, fast, and accessible digital products.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Whether building custom dashboard interfaces, high-throughput microservices, or full e-commerce architectures, I believe in writing code that is clean, well-documented, and built to scale with growing user demand.
            </p>

            {/* Quick Contact Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>{profile?.location || 'San Francisco, CA / Remote'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>{profile?.email || 'contact@example.com'}</span>
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
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
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
