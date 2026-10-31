
import React, { useState } from 'react';
import {
  Mail,
  Send,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    success: null,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        success: false,
        message: 'Please complete all required fields.',
      });
      return;
    }

    const recipient = profile?.email || 'asadut486@gmail.com';
    const subject = formData.subject || `Portfolio message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus({
      success: true,
      message: 'Your email app should open with the message ready. Send it from your email app to complete delivery.',
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden transition-colors duration-300">
      {/* Background radial accent with animation */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 shadow-sm inline-block hover:scale-105 transition-transform">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Let's Build Something Exceptional Together
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Have an AI project in mind, an engineering role to discuss, or want to collaborate? Send a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Direct info & status */}
          <div className="lg:col-span-5 h-full">
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 space-y-6">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Contact Information
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm actively available for Full-Stack AI Engineer, LLM Developer, and Software Engineering opportunities worldwide.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Email
                    </h4>
                    <a
                      href={`mailto:${profile?.email || 'asadut486@gmail.com'}`}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {profile?.email || 'asadut486@gmail.com'}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Location
                    </h4>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {profile?.location || 'Dhaka, Bangladesh'}
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="p-3 rounded-2xl bg-green-50 dark:bg-green-950/60 text-green-600 dark:text-green-400 shrink-0 shadow-sm">
                    <svg
                      viewBox="0 0 32 32"
                      className="w-5 h-5"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.04 3C8.87 3 3.04 8.82 3.04 15.99c0 2.29.6 4.52 1.74 6.49L3 29l6.69-1.75a13 13 0 0 0 6.35 1.65h.01c7.17 0 13-5.83 13-13S23.22 3 16.04 3zm0 23.7h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-3.97 1.04 1.06-3.87-.25-.4a10.68 10.68 0 1 1 9.01 4.95zm5.87-8.01c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.57-1.88-1.75-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.97-2.36-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.61-.37z" />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      WhatsApp
                    </h4>
                    <a
                      href="https://wa.me/8801791093112"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      +880 1791093112
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Response Time
                    </h4>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Frontend-only contact details */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800 text-xs space-y-1 shadow-inner">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                  <Mail className="w-4 h-4 text-purple-500" />
                  <span>Send directly by email</span>
                </div>

                <p className="text-slate-500 dark:text-slate-400">
                  This frontend opens your email app with the message details filled in. No backend or database is used.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 h-full">
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Form feedback status alerts */}
                {status.success === true && (
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center gap-3 text-emerald-800 dark:text-emerald-300 text-sm shadow-sm animate-pulse">
                    <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600" />
                    <span>{status.message}</span>
                  </div>
                )}

                {status.success === false && (
                  <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 flex items-center gap-3 text-rose-800 dark:text-rose-300 text-sm shadow-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                    <span>{status.message}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="AI Engineering Role / Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, or role..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-700 hover:via-indigo-700 hover:to-pink-700 disabled:opacity-70 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Open Email App</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
