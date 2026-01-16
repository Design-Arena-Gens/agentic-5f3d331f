"use client";
import { useMemo, useState } from "react";
import { focusAreas, learningPaths } from "@/data/learningPaths";

const focusBg: Record<string, string> = {
  starter: "from-sky-500/10 via-sky-500/5 to-transparent border-sky-500/20",
  blue: "from-indigo-500/10 via-indigo-500/5 to-transparent border-indigo-500/20",
  red: "from-rose-500/10 via-rose-500/5 to-transparent border-rose-500/20",
  cloud: "from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/20",
};

export function FocusAreaSelector() {
  const [selected, setSelected] = useState(focusAreas[0].id);
  const activeArea = useMemo(
    () => focusAreas.find((item) => item.id === selected) ?? focusAreas[0],
    [selected],
  );

  const recommendedPaths = useMemo(
    () => learningPaths.filter((path) => activeArea.recommendedPaths.includes(path.id)),
    [activeArea],
  );

  return (
    <section
      className="rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-xl shadow-sky-500/5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-none"
      id="personalize"
    >
      <header className="flex flex-col gap-2">
        <span className="text-sm font-medium uppercase tracking-wide text-sky-600 dark:text-sky-400">
          Personalize
        </span>
        <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
          Choose your mission focus
        </h2>
        <p className="max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
          Tell us how you want to contribute to cybersecurity and we&apos;ll match you with curated
          paths, quick wins, and tooling essentials. Switch focus at any time as your learning
          evolves.
        </p>
      </header>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {focusAreas.map((area) => (
          <button
            key={area.id}
            onClick={() => setSelected(area.id)}
            className={`group flex items-start gap-4 rounded-xl border p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-zinc-800 dark:hover:border-sky-500 ${selected === area.id ? "border-transparent bg-gradient-to-br " + focusBg[area.id] : ""}`}
          >
            <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 font-semibold text-zinc-700 transition-colors group-hover:bg-sky-100 group-hover:text-sky-700 dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-sky-950 dark:group-hover:text-sky-200">
              {area.label
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{area.label}</h3>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                {area.quickWins.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-inner shadow-sky-500/5 dark:border-zinc-800 dark:bg-zinc-900/70">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Recommended paths
          </h3>
          <div className="mt-4 space-y-4">
            {recommendedPaths.map((path) => (
              <article
                key={path.id}
                className="rounded-xl border border-zinc-200/60 bg-gradient-to-br from-zinc-50 via-white to-white p-5 dark:border-zinc-700/80 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900"
              >
                <header className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-sky-700 dark:text-sky-300">
                    {path.focus}
                  </span>
                  <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {path.title}
                  </h4>
                  <span className="ml-auto text-sm text-zinc-500 dark:text-zinc-400">
                    {path.duration}
                  </span>
                </header>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{path.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {path.keySkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/5 px-3 py-1 text-xs font-medium text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-inner shadow-sky-500/5 dark:border-zinc-800 dark:bg-zinc-900/70">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Tooling stack</h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            {activeArea.tooling.map((tool) => (
              <li key={tool} className="flex items-center gap-3">
                <span className="inline-flex h-2 w-2 rounded-full bg-sky-500" />
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
