"use client";
import { useMemo, useState } from "react";
import { quizQuestions } from "@/data/learningPaths";

type AnswerState = {
  [questionId: string]: string | undefined;
};

export function KnowledgeCheck() {
  const [answers, setAnswers] = useState<AnswerState>({});
  const [revealed, setRevealed] = useState(false);

  const score = useMemo(() => {
    if (!revealed) return null;
    let correct = 0;
    quizQuestions.forEach((question) => {
      const picked = answers[question.id];
      const chosen = question.answers.find((answer) => answer.id === picked);
      if (chosen?.correct) correct += 1;
    });
    return `${correct}/${quizQuestions.length}`;
  }, [answers, revealed]);

  return (
    <section
      id="knowledge"
      className="rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-xl shadow-amber-500/5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-none"
    >
      <header className="flex flex-col gap-2">
        <span className="text-sm font-medium uppercase tracking-wide text-amber-600 dark:text-amber-400">
          Knowledge check
        </span>
        <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
          Pressure test your instincts
        </h2>
        <p className="max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
          These scenario-based questions mirror real conversations with engineering and leadership.
          Practice articulating the &ldquo;why&rdquo; behind each decision before revealing the expert
          guidance.
        </p>
      </header>

      <ol className="mt-6 space-y-6">
        {quizQuestions.map((question) => (
          <li
            key={question.id}
            className="rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-inner shadow-amber-500/5 dark:border-zinc-800 dark:bg-zinc-900/70"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {question.prompt}
            </h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {question.answers.map((answer) => {
                const picked = answers[question.id];
                const isSelected = picked === answer.id;
                const showReveal = revealed && isSelected;
                const borderColor = revealed
                  ? answer.correct
                    ? "border-emerald-500 text-emerald-600 dark:text-emerald-300"
                    : "border-rose-500 text-rose-500"
                  : "border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300";
                const background = isSelected
                  ? "bg-amber-500/10 dark:bg-amber-500/20"
                  : "bg-white/80 dark:bg-zinc-900/70";

                return (
                  <button
                    key={answer.id}
                    onClick={() =>
                      setAnswers((prev) => ({
                        ...prev,
                        [question.id]: answer.id,
                      }))
                    }
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 ${borderColor} ${background}`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                      <span>{answer.label}</span>
                    </div>
                    {showReveal && (
                      <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                        {answer.rationale}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          onClick={() => setRevealed(true)}
          className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
        >
          Reveal expert guidance
        </button>
        <button
          onClick={() => {
            setAnswers({});
            setRevealed(false);
          }}
          className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 px-5 py-2 text-sm font-semibold text-amber-600 transition hover:border-amber-500 hover:text-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 dark:text-amber-300"
        >
          Reset
        </button>
        {score && (
          <span className="text-sm font-semibold text-amber-600 dark:text-amber-300">
            Score: {score}
          </span>
        )}
      </div>
    </section>
  );
}
