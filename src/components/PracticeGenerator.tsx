"use client";
import { useMemo, useState } from "react";
import { practicePrompts } from "@/data/learningPaths";

const durations = ["30 minutes", "60 minutes", "2 hours"];
const intensities = ["Solo", "Pair up", "Livestream-ready"];

function getRandomItem<T>(items: T[], exclude?: T): T {
  if (items.length === 1) return items[0];
  let candidate = items[Math.floor(Math.random() * items.length)];
  while (exclude !== undefined && candidate === exclude) {
    candidate = items[Math.floor(Math.random() * items.length)];
  }
  return candidate;
}

export function PracticeGenerator() {
  const [prompt, setPrompt] = useState<string>(practicePrompts[0]);
  const [duration, setDuration] = useState<string>(durations[1]);
  const [intensity, setIntensity] = useState<string>(intensities[0]);

  const relatedPrompts = useMemo(
    () => practicePrompts.filter((item) => item !== prompt).slice(0, 3),
    [prompt],
  );

  const handleGenerate = () => {
    setPrompt((prev) => getRandomItem(practicePrompts, prev));
    setDuration(getRandomItem(durations));
    setIntensity(getRandomItem(intensities));
  };

  return (
    <section
      id="practice"
      className="rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-xl shadow-purple-500/5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-none"
    >
      <header className="flex flex-col gap-2">
        <span className="text-sm font-medium uppercase tracking-wide text-purple-600 dark:text-purple-400">
          Daily practice
        </span>
        <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
          Generate purposeful missions
        </h2>
        <p className="max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
          Need inspiration for today&apos;s session? Spin up a scenario, focus on outcomes, and log
          your findings. Each mission is designed to sharpen technique and reinforce critical
          thinking.
        </p>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <article className="rounded-2xl border border-purple-400/30 bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent p-6 shadow-inner shadow-purple-500/5 dark:border-purple-500/40 dark:from-purple-950/40 dark:via-purple-900/40 dark:to-zinc-950/40">
          <header className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-200">
              Mission
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Commitment: {duration} • Mode: {intensity}
            </span>
          </header>
          <p className="mt-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">{prompt}</p>
          <button
            onClick={handleGenerate}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
          >
            Generate new mission
          </button>
        </article>

        <aside className="rounded-2xl border border-zinc-200 bg-white/70 p-6 dark:border-zinc-800 dark:bg-zinc-900/70">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Mission debrief checklist
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-purple-500" />
              <span>Document objective, scope, and assumptions before you begin.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-purple-500" />
              <span>Capture commands, tools, and decision points in a shared notebook.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-purple-500" />
              <span>Create a short summary of findings, impact, and follow-up actions.</span>
            </li>
          </ul>
          <div className="mt-6 rounded-xl border border-dashed border-purple-500/30 p-4 text-sm text-zinc-500 dark:border-purple-500/40 dark:text-zinc-400">
            <p className="font-semibold text-purple-600 dark:text-purple-300">Bonus drills</p>
            <ul className="mt-2 space-y-2">
              {relatedPrompts.map((item) => (
                <li key={item} className="leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
