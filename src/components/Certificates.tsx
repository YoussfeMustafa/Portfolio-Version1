import React from "react";
import { Award, Calendar, CheckCircle2, ShieldCheck } from "lucide-react";
import { CERTIFICATE_DATA } from "@/data/portfolioData";

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 sm:py-20 bg-white dark:bg-[#090d16] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-3">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>Credentials</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight break-words">
            Professional Certifications
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-xs sm:text-base break-words">
            Verified technical diplomas demonstrating comprehensive modern front-end engineering proficiency.
          </p>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-4" />
        </div>

        {/* Modern Certificate Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-br from-indigo-500/30 via-slate-700/20 to-sky-500/30 shadow-xl">
            <div className="rounded-[18px] sm:rounded-[22px] bg-white dark:bg-[#101726] p-4 sm:p-8 lg:p-10 border border-slate-200 dark:border-slate-800/80 relative overflow-hidden card-hover-effect">
              {/* Decorative background watermark */}
              <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none">
                <Award className="w-36 h-36 sm:w-48 sm:h-48 text-indigo-500" />
              </div>

              {/* Certificate Header */}
              <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 mb-5 sm:mb-6 relative z-10">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80 shadow-sm shrink-0">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400">
                      Verified Diploma
                    </span>
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5 break-words">
                      {CERTIFICATE_DATA.title}
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span>{CERTIFICATE_DATA.date}</span>
                </div>
              </div>

              {/* Organization */}
              <div className="text-sm sm:text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4 flex flex-wrap items-center gap-1.5 sm:gap-2 relative z-10">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">Issued by:</span>
                <span>{CERTIFICATE_DATA.organization}</span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4 relative z-10 break-words">
                {CERTIFICATE_DATA.description}
              </p>

              {/* Additional Details */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 mb-5 sm:mb-6 relative z-10">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed break-words">
                    {CERTIFICATE_DATA.additional}
                  </p>
                </div>
              </div>

              {/* Covered Technologies Chips */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 relative z-10">
                <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block mb-2.5">
                  Curriculum Scope:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "TypeScript",
                    "Bootstrap",
                    "Tailwind CSS",
                    "React.js",
                    "Next.js",
                    "Responsive Web Design",
                    "Git & GitHub",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40 text-[11px] sm:text-xs font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
