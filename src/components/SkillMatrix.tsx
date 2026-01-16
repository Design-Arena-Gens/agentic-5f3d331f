const skillDomains = [
  {
    title: "Operational Defense",
    description: "Detect, respond, and harden systems with measurable rigor.",
    skills: [
      { label: "Log triage & enrichment", artifact: "Create a SIEM triage decision tree." },
      { label: "Detection engineering", artifact: "Publish three Sigma rules with test data." },
      { label: "Incident response", artifact: "Draft a tabletop walkthrough with actions & owners." },
    ],
  },
  {
    title: "Adversarial Thinking",
    description: "Reverse your perspective to pressure-test controls and uncover blindspots.",
    skills: [
      { label: "Recon & footprinting", artifact: "Deliver an attack surface report on a lab target." },
      { label: "Exploitation workflow", artifact: "Record a lab walkthrough with mitigations." },
      { label: "Post-exploitation", artifact: "Document persistence and detection opportunities." },
    ],
  },
  {
    title: "Strategic Leadership",
    description: "Translate technical findings into action and influence cross-functional teams.",
    skills: [
      { label: "Risk storytelling", artifact: "Build a one-pager summarizing impact to executives." },
      { label: "Security architecture", artifact: "Create a zero-trust diagram for a target system." },
      { label: "Program metrics", artifact: "Define KPIs & OKRs aligned to business outcomes." },
    ],
  },
];

export function SkillMatrix() {
  return (
    <section
      id="skills"
      className="rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-xl shadow-teal-500/5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-none"
    >
      <header className="flex flex-col gap-2">
        <span className="text-sm font-medium uppercase tracking-wide text-teal-600 dark:text-teal-400">
          Outcome tracker
        </span>
        <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
          Showcase proof of work
        </h2>
        <p className="max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
          Cyber Coach emphasizes artifacts over certificates. Use this grid to log tangible outputs
          after each mission and share progress with mentors, hiring managers, or your team.
        </p>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {skillDomains.map((domain) => (
          <article
            key={domain.title}
            className="flex h-full flex-col rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/10 via-teal-500/5 to-transparent p-6 shadow-inner shadow-teal-500/5 dark:border-teal-500/30 dark:from-teal-950/40 dark:via-teal-900/40 dark:to-zinc-950/40"
          >
            <header>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {domain.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{domain.description}</p>
            </header>
            <ul className="mt-4 space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              {domain.skills.map((skill) => (
                <li key={skill.label} className="rounded-xl border border-white/40 bg-white/70 p-4 dark:border-white/10 dark:bg-zinc-900/70">
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">{skill.label}</p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-teal-600 dark:text-teal-300">
                    Proof to ship
                  </p>
                  <p className="mt-1 text-sm">{skill.artifact}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
