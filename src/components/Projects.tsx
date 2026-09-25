import React from "react";
import ProjectCard from "./ProjectCard";
import { FolderGit2 } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-50/60 dark:bg-[#0c121e]/80 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5 shrink-0" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight break-words">
            Front-End Projects &amp; Applications
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-xs sm:text-base break-words">
            Clean, responsive web applications built with Next.js, React, TypeScript, and modern styling architectures.
          </p>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mt-4" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
