import React from "react";
import { User, Layout, Smartphone, Zap, CheckCircle2, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50/50 dark:bg-[#0c121e]/60 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-3">
            <User className="w-3.5 h-3.5 shrink-0" />
            <span>About Me</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight break-words">
            Crafting Interfaces with Precision &amp; Care
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Visual Abstract Frontend Illustration */}
          <div className="lg:col-span-5 order-2 lg:order-1 min-w-0 w-full">
            <div className="relative p-5 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden card-hover-effect">
              {/* Background gradient decorative glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-2xl pointer-events-none" />

              <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold mb-4 flex items-center gap-1.5">
                <Layout className="w-4 h-4 shrink-0" />
                <span className="truncate">Frontend Architecture Overview</span>
              </div>

              {/* Graphical representation of clean frontend principles */}
              <div className="space-y-3">
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100">
                      Responsive &amp; Mobile-First
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Tailored fluid experiences across mobile, tablet, and widescreen displays.
                    </p>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100">
                      Component-Driven Architecture
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Modular, reusable React and Next.js components built for maintainability.
                    </p>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100">
                      Quality &amp; Standards
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Semantic HTML5, clean styling, accessible interactions, and Git workflows.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Metric Card */}
              <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-700 dark:text-slate-300">Degree:</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold truncate ml-2">
                  B.Sc. in CS &amp; IS
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Statement & Information */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center min-w-0">
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-5 sm:mb-6 break-words">
              Building User-Friendly &amp; High-Performance Web Interfaces
            </h3>

            {/* Exactly Specified About Text */}
            <div className="relative pl-4 sm:pl-5 border-l-2 border-indigo-500 dark:border-indigo-400 mb-6 sm:mb-8">
              <p className="text-sm xs:text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal break-words">
                &ldquo;{PERSONAL_INFO.aboutText}&rdquo;
              </p>
            </div>

            {/* Core Competencies from provided facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                    Core Technologies
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                    HTML5, CSS3, JavaScript, React.js, Next.js
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                    Layouts &amp; Styling
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                    Flexbox, CSS Grid, Tailwind CSS, Bootstrap
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                    Team &amp; Tools
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                    Git, GitHub, Jira, Agile Collaboration
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                    Professional Mindset
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                    Continuous learning &amp; software testing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
