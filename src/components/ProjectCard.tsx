import React from "react";
import { ExternalLink, Github, Check, Calendar, Users } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Customized developer UI preview per project without fake screenshots
  const renderVisualPreview = (id: string) => {
    if (id === "dashboard-web-app") {
      return (
        <div className="h-44 sm:h-48 w-full bg-slate-900 border-b border-slate-800 p-3 sm:p-4 relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0" />
              <span className="text-xs font-mono text-slate-300 font-semibold truncate">
                Analytics Dashboard
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-400 border border-indigo-800/60 font-mono shrink-0">
              Bootstrap 5 / Sass
            </span>
          </div>

          {/* Mini chart & table representation */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 my-auto">
            <div className="p-1.5 sm:p-2 rounded-lg bg-slate-800/80 border border-slate-700/50">
              <div className="text-[9px] sm:text-[10px] text-slate-400">Total Views</div>
              <div className="text-xs sm:text-sm font-bold text-white mt-0.5 sm:mt-1">24.5k</div>
              <div className="h-1 sm:h-1.5 w-full bg-slate-700 rounded-full mt-1.5 overflow-hidden">
                <div className="h-full bg-indigo-500 w-3/4 rounded-full" />
              </div>
            </div>
            <div className="p-1.5 sm:p-2 rounded-lg bg-slate-800/80 border border-slate-700/50">
              <div className="text-[9px] sm:text-[10px] text-slate-400">Conversion</div>
              <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5 sm:mt-1">12.8%</div>
              <div className="h-1 sm:h-1.5 w-full bg-slate-700 rounded-full mt-1.5 overflow-hidden">
                <div className="h-full bg-emerald-500 w-2/3 rounded-full" />
              </div>
            </div>
            <div className="p-1.5 sm:p-2 rounded-lg bg-slate-800/80 border border-slate-700/50">
              <div className="text-[9px] sm:text-[10px] text-slate-400">Activity</div>
              <div className="text-xs sm:text-sm font-bold text-sky-400 mt-0.5 sm:mt-1">98.2%</div>
              <div className="h-1 sm:h-1.5 w-full bg-slate-700 rounded-full mt-1.5 overflow-hidden">
                <div className="h-full bg-sky-500 w-4/5 rounded-full" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 pt-1 font-mono">
            <span className="truncate">Responsive Charts &amp; Tables</span>
            <span className="text-emerald-400 font-medium shrink-0 ml-2">Team Delivery</span>
          </div>
        </div>
      );
    }

    if (id === "ecommerce-marketplace") {
      return (
        <div className="h-44 sm:h-48 w-full bg-slate-900 border-b border-slate-800 p-3 sm:p-4 relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-xs font-mono text-slate-300 font-semibold truncate">
                E-Commerce Marketplace
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 font-mono shrink-0">
              Next.js / TS
            </span>
          </div>

          {/* Mini product cards and cart state preview */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 my-auto">
            <div className="p-1.5 sm:p-2 rounded-lg bg-slate-800/80 border border-slate-700/50 flex flex-col justify-between">
              <div className="w-full h-7 sm:h-8 bg-slate-700/60 rounded flex items-center justify-center text-[9px] sm:text-[10px] text-slate-300">
                Item #01
              </div>
              <div className="mt-1 flex justify-between items-center text-[9px] sm:text-[10px]">
                <span className="text-emerald-400 font-mono font-bold">$49.00</span>
                <span className="text-slate-400 text-[8px] sm:text-[9px]">Cart +</span>
              </div>
            </div>
            <div className="p-1.5 sm:p-2 rounded-lg bg-slate-800/80 border border-slate-700/50 flex flex-col justify-between">
              <div className="w-full h-7 sm:h-8 bg-slate-700/60 rounded flex items-center justify-center text-[9px] sm:text-[10px] text-slate-300">
                Item #02
              </div>
              <div className="mt-1 flex justify-between items-center text-[9px] sm:text-[10px]">
                <span className="text-emerald-400 font-mono font-bold">$89.00</span>
                <span className="text-slate-400 text-[8px] sm:text-[9px]">Cart +</span>
              </div>
            </div>
            <div className="p-1.5 sm:p-2 rounded-lg bg-slate-800/80 border border-slate-700/50 flex flex-col justify-between">
              <div className="w-full h-7 sm:h-8 bg-slate-700/60 rounded flex items-center justify-center text-[9px] sm:text-[10px] text-slate-300">
                Item #03
              </div>
              <div className="mt-1 flex justify-between items-center text-[9px] sm:text-[10px]">
                <span className="text-emerald-400 font-mono font-bold">$120.00</span>
                <span className="text-slate-400 text-[8px] sm:text-[9px]">Cart +</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 pt-1 font-mono">
            <span className="truncate">Persisted Cart • Auth Validation</span>
            <span className="text-indigo-400 shrink-0 ml-2">REST API</span>
          </div>
        </div>
      );
    }

    // Default: Cosmos Space Dashboard
    return (
      <div className="h-44 sm:h-48 w-full bg-[#070b18] border-b border-slate-800 p-3 sm:p-4 relative overflow-hidden flex flex-col justify-between">
        {/* Subtle space dots */}
        <div className="absolute top-3 right-12 w-1 h-1 bg-white rounded-full opacity-60" />
        <div className="absolute bottom-6 left-8 w-1 h-1 bg-sky-300 rounded-full opacity-70" />
        <div className="absolute top-10 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-50" />

        <div className="flex items-center justify-between border-b border-slate-800 pb-2 relative z-10">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse shrink-0" />
            <span className="text-xs font-mono text-slate-300 font-semibold truncate">
              Cosmos Space Dashboard
            </span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950/80 text-sky-400 border border-sky-800/60 font-mono shrink-0">
            Interactive UI
          </span>
        </div>

        {/* Orbit / Space UI visual widgets */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 my-auto relative z-10">
          <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/60">
            <div className="text-[9px] sm:text-[10px] font-mono text-sky-400">ORBIT TELEMETRY</div>
            <div className="text-[11px] sm:text-xs font-semibold text-slate-200 mt-0.5 sm:mt-1 truncate">
              Solar System Orbit
            </div>
            <div className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5">360° Canvas</div>
          </div>
          <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/60">
            <div className="text-[9px] sm:text-[10px] font-mono text-indigo-400">PLANETARY METRICS</div>
            <div className="text-[11px] sm:text-xs font-semibold text-slate-200 mt-0.5 sm:mt-1 truncate">
              Deep Space Catalog
            </div>
            <div className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5">Realtime JS</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 pt-1 font-mono relative z-10">
          <span className="truncate">Responsive Space UI</span>
          <span className="text-sky-400 shrink-0 ml-2">Interactive</span>
        </div>
      </div>
    );
  };

  return (
    <article className="flex flex-col rounded-2xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm card-hover-effect w-full">
      {/* Visual Header / Mockup */}
      {renderVisualPreview(project.id)}

      {/* Content */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata badges (type, date) */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3">
            {project.type && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800/80 text-[10px] sm:text-[11px] font-semibold text-indigo-700 dark:text-indigo-300">
                <Users className="w-3 h-3 shrink-0" />
                <span>{project.type}</span>
              </span>
            )}
            {project.date && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-[10px] sm:text-[11px] font-medium text-slate-600 dark:text-slate-400">
                <Calendar className="w-3 h-3 shrink-0" />
                <span>{project.date}</span>
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug break-words">
            {project.title}
          </h3>

          {/* Factual Description */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 sm:mb-5 break-words">
            {project.description}
          </p>

          {/* Key Features */}
          <div className="mb-4 sm:mb-5">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-2">
              Key Features:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300 leading-tight">
                  <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span className="break-words">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Badges */}
          <div className="mb-5 sm:mb-6">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-2">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] sm:text-xs font-mono text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons (Live Demo & GitHub) with exact verified URLs */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col xs:flex-row sm:flex-row gap-2.5">
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`Open Live Demo for ${project.title}`}
            aria-label={`Open Live Demo for ${project.title} (opens in new tab)`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`View GitHub Repository for ${project.title}`}
            aria-label={`View GitHub Repository for ${project.title} (opens in new tab)`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            <Github className="w-3.5 h-3.5 shrink-0" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </article>
  );
}
