import React from "react";
import { ArrowDown, Mail, Github, Linkedin, MapPin, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-sky-500/10 dark:bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left min-w-0">
            {/* Status / Availability Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800/80 text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-6 max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Available for Front-End Roles</span>
              <span className="text-slate-300 dark:text-slate-700 hidden xs:inline">|</span>
              <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>

            {/* Greeting & Name */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4 break-words w-full">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 dark:from-indigo-400 dark:via-indigo-300 dark:to-sky-400">
                {PERSONAL_INFO.shortName}
              </span>
            </h1>

            {/* Role */}
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-5 sm:mb-6 flex items-center gap-2 break-words">
              <span className="font-mono text-indigo-600 dark:text-indigo-400 shrink-0">&gt;</span>
              <span>{PERSONAL_INFO.role}</span>
            </h2>

            {/* Short Description */}
            <p className="text-sm xs:text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-6 sm:mb-8 break-words">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-200 text-center"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm sm:text-base transition-all duration-200 text-center"
              >
                <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full sm:w-auto">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mr-1 shrink-0">
                Connect:
              </span>
              <a
                href={PERSONAL_INFO.socialPlaceholders.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile (youssfemustafa)"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socialPlaceholders.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                title={`Email: ${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                aria-label="Send direct email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Developer Card Mockup (Abstract Visual) */}
          <div className="lg:col-span-5 flex justify-center w-full min-w-0">
            <div className="w-full max-w-md rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0e1524]/90 shadow-2xl backdrop-blur-md overflow-hidden card-hover-effect">
              {/* Window Header */}
              <div className="code-editor-header flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                  <span className="ml-1 sm:ml-2 text-xs font-mono text-slate-400 truncate">
                    DeveloperProfile.tsx
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    React 19
                  </span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-4 sm:p-5 font-mono text-[11px] xs:text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-700 dark:text-slate-300">
                <div className="text-slate-400 dark:text-slate-500">// Developer Profile Specification</div>
                <div className="mt-1">
                  <span className="text-indigo-600 dark:text-indigo-400">const</span>{" "}
                  <span className="text-amber-600 dark:text-amber-300">developer</span> = &#123;
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-sky-600 dark:text-sky-300">name</span>:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;Youssef Mustafa&quot;</span>,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-sky-600 dark:text-sky-300">role</span>:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;Front-End Developer&quot;</span>,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-sky-600 dark:text-sky-300">specialization</span>: [
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;React.js&quot;</span>,{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;Next.js&quot;</span>],
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-sky-600 dark:text-sky-300">focus</span>:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;Clean &amp; Responsive UI&quot;</span>,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-sky-600 dark:text-sky-300">education</span>:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;B.Sc. in CS &amp; IS&quot;</span>,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-sky-600 dark:text-sky-300">location</span>:{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;Al Qalubyia, Egypt&quot;</span>,
                </div>
                <div className="pl-3 sm:pl-4">
                  <span className="text-sky-600 dark:text-sky-300">isOpenForOpportunities</span>:{" "}
                  <span className="text-purple-600 dark:text-purple-400">true</span>
                </div>
                <div>&#125;;</div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>Clean Architecture</span>
                  </span>
                  <span className="text-emerald-500 flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
