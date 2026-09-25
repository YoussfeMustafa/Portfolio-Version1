import React from "react";
import { GraduationCap, MapPin, Calendar, Award, CheckCircle2 } from "lucide-react";
import { EDUCATION_DATA } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 bg-slate-50/50 dark:bg-[#0c121e]/60 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5 shrink-0" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight break-words">
            Formal Education
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-xs sm:text-base break-words">
            Academic foundation in Computer Science, software systems, and modern web application development.
          </p>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-4" />
        </div>

        {/* Vertical Timeline container matching the Experience section */}
        <div className="relative pl-5 sm:pl-8 border-l-2 border-indigo-500/40 dark:border-indigo-500/30 ml-2 sm:ml-4">
          <div className="relative group">
            {/* Timeline node icon */}
            <div className="absolute -left-[31px] sm:-left-[43px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center ring-4 ring-slate-50 dark:ring-[#0c121e] shadow-md shrink-0">
              <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>

            {/* Education Card */}
            <div className="p-4 sm:p-8 rounded-2xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 shadow-sm card-hover-effect w-full min-w-0">
              {/* Badges row */}
              <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-xs font-semibold text-emerald-700 dark:text-emerald-300 shrink-0">
                  <Award className="w-3.5 h-3.5 shrink-0" />
                  <span>Grade: {EDUCATION_DATA.grade}</span>
                </span>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>{EDUCATION_DATA.date}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span className="truncate">{EDUCATION_DATA.location}</span>
                  </span>
                </div>
              </div>

              {/* Degree Title & Institution */}
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-slate-900 dark:text-white break-words">
                {EDUCATION_DATA.degree}
              </h3>
              <div className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-1 mb-4">
                {EDUCATION_DATA.institution}
              </div>

              {/* Exact Description */}
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5 sm:mb-6 break-words">
                {EDUCATION_DATA.description}
              </p>

              {/* Details & Academic Focus */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Computer Science Fundamentals</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Information Systems Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Web Development Focus</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Honors Rating: Very Good</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
