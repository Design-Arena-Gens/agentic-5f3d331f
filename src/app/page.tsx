import { FocusAreaSelector } from "@/components/FocusAreaSelector";
import { Hero } from "@/components/Hero";
import { KnowledgeCheck } from "@/components/KnowledgeCheck";
import { ModuleTimeline } from "@/components/ModuleTimeline";
import { PracticeGenerator } from "@/components/PracticeGenerator";
import { ResourceLibrary } from "@/components/ResourceLibrary";
import { SkillMatrix } from "@/components/SkillMatrix";

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-16 sm:px-8 lg:px-10">
        <Hero />
        <FocusAreaSelector />
        <ModuleTimeline />
        <PracticeGenerator />
        <KnowledgeCheck />
        <ResourceLibrary />
        <SkillMatrix />
      </div>
      <footer className="mx-auto mt-12 max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-zinc-200 bg-white/80 p-6 text-center text-sm text-zinc-500 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400">
          Crafted for aspiring defenders, breakers, and builders. Keep iterating, share your wins,
          and stay curious. ⚡
        </div>
      </footer>
    </div>
  );
}
