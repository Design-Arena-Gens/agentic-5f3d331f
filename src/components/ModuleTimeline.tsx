"use client";
import { useMemo, useState } from "react";
import { LearningModule, learningPaths } from "@/data/learningPaths";

const difficultyColors: Record<LearningModule["difficulty"], string> = {
  Beginner: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  Intermediate: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  Advanced: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
};

export function ModuleTimeline() {
  const [selectedPathId, setSelectedPathId] = useState(learningPaths[0].id);
  const path = useMemo(
    () => learningPaths.find((item) => item.id === selectedPathId) ?? learningPaths[0],
    [selectedPathId],
  );

  return (
    <section
      className="rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-xl shadow-emerald-500/5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-none"
      id="path"
    >
      <header className="flex flex-col gap-2">
        <span className="text-sm font-medium uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
          Guided path
        </span>
        <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
          Navigate industry-aligned modules
        </h2>
        <p className="max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
          Review curated modules with clearly defined outcomes, artifacts, and resources. Each path
          stacks skills intentionally so you can demonstrate real capability, not just theory.
        </p>
      </header>

      <div className="mt-6 flex flex-wrap gap-3">
        {learningPaths.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedPathId(item.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:hover:border-emerald-500 dark:hover:text-emerald-300 ${
              item.id === path.id
                ? "border-transparent bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent text-emerald-700 dark:text-emerald-200"
                : "border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-zinc-200/70 bg-zinc-50/80 p-6 dark:border-zinc-700 dark:bg-zinc-900/70">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{path.title}</h3>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
            {path.focus}
          </span>
          <span className="ml-auto text-sm text-zinc-500 dark:text-zinc-400">{path.duration}</span>
        </div>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{path.description}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          {path.prerequisites.map((prereq) => (
            <span
              key={prereq}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 px-3 py-1"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {prereq}
            </span>
          ))}
        </div>
      </div>

      <ol className="mt-8 space-y-4">
        {path.modules.map((module, index) => (
          <li
            key={module.id}
            className="group relative grid gap-4 rounded-2xl border border-zinc-200 bg-white/60 p-6 transition-shadow hover:shadow-lg hover:shadow-emerald-500/10 dark:border-zinc-800 dark:bg-zinc-900/70"
          >
            <span className="absolute left-6 top-6 text-4xl font-semibold text-emerald-500/20">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {module.title}
              </h4>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider ${difficultyColors[module.difficulty]}`}
              >
                {module.difficulty}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">{module.duration}</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{module.summary}</p>

            <div className="grid gap-4 lg:grid-cols-2">
              <div>
                <h5 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Outcomes you&apos;ll prove
                </h5>
                <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {module.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500/70" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Topics & resources
                </h5>
                <div className="mt-2 flex flex-wrap gap-2">
                  {module.topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <ul className="mt-3 space-y-2">
                  {module.resources.map((resource) => (
                    <li key={resource.url}>
                      <a
                        href={resource.url}
                        target="_blank"
                        className="flex items-center justify-between rounded-lg border border-transparent bg-zinc-100/80 px-3 py-2 text-sm text-zinc-600 transition hover:border-emerald-400 hover:bg-white hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-200"
                        rel="noreferrer"
                      >
                        <span className="font-medium">{resource.title}</span>
                        <span className="text-xs uppercase text-zinc-500 dark:text-zinc-400">
                          {resource.type}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
