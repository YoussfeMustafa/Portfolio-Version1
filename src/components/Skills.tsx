"use client";

import React, { useState } from "react";
import {
  Code2,
  Palette,
  GitBranch,
  Cpu,
  Users,
  CheckCircle,
  Sparkles,
  Layers,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />;
      case "GitBranch":
        return <GitBranch className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" />;
      case "Users":
        return <Users className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />;
    }
  };

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.category)];

  const displayedCategories =
    selectedCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white dark:bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-3">
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight break-words">
            Categorized Technical Stack
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-xs sm:text-base break-words">
            Front-end development capabilities, styling frameworks, engineering tools, and collaboration workflows.
          </p>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                  : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayedCategories.map((group) => (
            <div
              key={group.category}
              className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 shadow-sm card-hover-effect flex flex-col justify-between w-full min-w-0"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shrink-0">
                    {getCategoryIcon(group.iconName)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                      {group.category}
                    </h3>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                      {group.skills.length} competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 sm:mb-5 leading-relaxed break-words">
                  {group.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 transition-colors"
                    >
                      <CheckCircle className="w-3 h-3 text-indigo-500 dark:text-indigo-400 shrink-0" />
                      <span className="break-words">{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
