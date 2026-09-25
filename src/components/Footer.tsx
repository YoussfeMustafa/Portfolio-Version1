import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#070b14] border-t border-slate-200 dark:border-slate-800/80 py-8 sm:py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-0">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2 mb-1.5">
              <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-slate-300 dark:text-slate-700 hidden xs:inline">|</span>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                Front-End Developer
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              &copy; 2026 Youssef Mustafa Abdelrahman. All rights reserved.
            </p>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href={PERSONAL_INFO.socialPlaceholders.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile (youssfemustafa)"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.socialPlaceholders.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              title={`Email: ${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="#home"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              title="Back to top"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
