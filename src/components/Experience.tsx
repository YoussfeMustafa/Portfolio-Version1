import React from "react";
import { Briefcase, MapPin, Calendar, CheckCircle2, Award, Building2 } from "lucide-react";
import { INTERNSHIP_EXPERIENCE } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-white dark:bg-[#090d16]">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-3">
            <Briefcase className="w-3.5 h-3.5 shrink-0" />
            <span>Practical Training</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight break-words">
            Internship &amp; Technology Training
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-xs sm:text-base break-words">
            Professional training program focusing on software lifecycle, agile workflows, and collaborative delivery.
          </p>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-4" />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-5 sm:pl-8 border-l-2 border-indigo-500/40 dark:border-indigo-500/30 space-y-8 ml-2 sm:ml-4">
          {/* Timeline node */}
          <div className="relative group">
            {/* Timeline icon badge on the line */}
            <div className="absolute -left-[31px] sm:-left-[43px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center ring-4 ring-white dark:ring-[#090d16] shadow-md shrink-0">
              <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>

            {/* Experience Card */}
            <div className="p-4 sm:p-8 rounded-2xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 shadow-sm card-hover-effect w-full min-w-0">
              {/* Badges row */}
              <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 text-xs font-semibold text-amber-700 dark:text-amber-300 shrink-0">
                  <Award className="w-3.5 h-3.5 shrink-0" />
                  <span>{INTERNSHIP_EXPERIENCE.type}</span>
                </span>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>{INTERNSHIP_EXPERIENCE.date}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span className="truncate">{INTERNSHIP_EXPERIENCE.location}</span>
                  </span>
                </div>
              </div>

              {/* Title & Organization */}
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-slate-900 dark:text-white break-words">
                {INTERNSHIP_EXPERIENCE.title}
              </h3>
              <div className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-1 mb-4">
                {INTERNSHIP_EXPERIENCE.organization}
              </div>

              {/* Factual Description */}
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5 sm:mb-6 break-words">
                {INTERNSHIP_EXPERIENCE.description}
              </p>

              {/* Highlights & Learnings */}
              <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <h4 className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                  Key Learnings &amp; Contributions:
                </h4>
                {INTERNSHIP_EXPERIENCE.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed break-words">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tooling Tags */}
              <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                {[
                  "Requirements Analysis",
                  "Jira",
                  "Git",
                  "GitHub",
                  "AI-Assisted Coding",
                  "Debugging",
                  "Software Testing",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 text-[11px] sm:text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
