import Link from "next/link";

export function Hero() {
  return (
    <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-10 text-zinc-100 shadow-2xl shadow-slate-900/30 dark:border-zinc-700">
      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-zinc-700/60 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
            Cyber Range Coach
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Build battle-tested cybersecurity instincts with guided missions and curated intel.
          </h1>
          <p className="text-lg text-zinc-300">
            Agentic Cyber Coach turns industry frameworks into daily practice. Explore structured
            learning paths, spin up realistic drills, and validate your decision-making with
            scenario-based knowledge checks.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#personalize"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            >
              Craft my plan
            </Link>
            <Link
              href="#practice"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            >
              Generate a mission
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-4 text-left text-sm text-zinc-300 sm:grid-cols-3">
            <div>
              <dt className="font-semibold text-white">Industry-aligned</dt>
              <dd>Paths mapped to NIST, ATT&CK, OWASP, CIS</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Practice first</dt>
              <dd>Hands-on labs, ranges, and CTF workflows</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Career ready</dt>
              <dd>Artifacts to showcase skills to hiring managers</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-sky-500/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">What today could look like</h2>
            <ul className="mt-4 space-y-4 text-sm text-zinc-200">
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">08:00 — Recon mission</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-sky-300">
                  OSINT • Attack Surface
                </p>
                <p className="mt-2 text-sm">
                  Map exposed assets for a fictional fintech startup and highlight top risks.
                </p>
              </li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">11:00 — SOC investigation</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-amber-300">
                  MITRE ATT&CK • SIEM
                </p>
                <p className="mt-2 text-sm">
                  Triaging credential stuffing alerts with cloud identity logs and playbooks.
                </p>
              </li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">15:00 — Knowledge check</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-purple-300">
                  Incident Response
                </p>
                <p className="mt-2 text-sm">
                  Walk a peer through containment decisions and articulate trade-offs.
                </p>
              </li>
            </ul>
            <p className="mt-6 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-center text-xs font-medium uppercase tracking-wider text-white/80">
              Repeat. Iterate. Ship your progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
