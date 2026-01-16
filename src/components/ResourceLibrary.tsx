const resourceCategories = [
  {
    id: "foundational",
    title: "Foundational Playbooks",
    description: "Essential guides that teach baseline processes you can immediately apply.",
    items: [
      {
        title: "CISA Zero Trust Maturity Model",
        type: "Guide",
        url: "https://www.cisa.gov/zero-trust-maturity-model",
        takeaways: ["Architect resilient networks", "Map capabilities to maturity levels"],
      },
      {
        title: "OWASP Top 10 Explained",
        type: "Reference",
        url: "https://owasp.org/www-project-top-ten/",
        takeaways: ["Understand critical web risks", "Prioritize defensive controls"],
      },
      {
        title: "Red Team Field Manual (RTFM)",
        type: "Handbook",
        url: "https://github.com/osssanitizer/rtfm",
        takeaways: ["Command quick reference", "Operational workflow tips"],
      },
    ],
  },
  {
    id: "labs",
    title: "Hands-on Labs & Simulations",
    description: "Interactive missions to practice detection, exploitation, and response safely.",
    items: [
      {
        title: "Blue Team Labs Online",
        type: "Lab Platform",
        url: "https://blueteamlabs.online/",
        takeaways: ["Evidence-based challenges", "Mimic SOC investigations"],
      },
      {
        title: "Immersive Labs Cyber Ranges",
        type: "Range",
        url: "https://www.immersivelabs.com/",
        takeaways: ["Scenario-based upskilling", "Team readiness measurements"],
      },
      {
        title: "Hack The Box Starting Point",
        type: "Lab Path",
        url: "https://www.hackthebox.com/",
        takeaways: ["Realistic offensive labs", "Guided skill progression"],
      },
    ],
  },
  {
    id: "community",
    title: "Communities & Signals",
    description:
      "Stay plugged into practitioners, emerging threats, and conversations that sharpen judgment.",
    items: [
      {
        title: "The DFIR Report",
        type: "Intel Briefing",
        url: "https://thedfirreport.com/",
        takeaways: ["Tactics seen in the wild", "Actionable defensive guidance"],
      },
      {
        title: "Red Canary Threat Detection Report",
        type: "Annual Report",
        url: "https://redcanary.com/threat-detection-report/",
        takeaways: ["Trends across ATT&CK tactics", "Detections mapped to telemetry"],
      },
      {
        title: "Detection Engineering Discord",
        type: "Community",
        url: "https://discord.gg/detectionengineering",
        takeaways: ["Peer reviews", "Shared detections & playbooks"],
      },
    ],
  },
];

export function ResourceLibrary() {
  return (
    <section
      id="resources"
      className="rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-xl shadow-blue-500/5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-none"
    >
      <header className="flex flex-col gap-2">
        <span className="text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
          Resources
        </span>
        <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
          Curate your go-to library
        </h2>
        <p className="max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
          Blend playbooks, labs, and community intel so you can shift between defense, offense, and
          strategy effortlessly. Pin the links that speak to your goals.
        </p>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {resourceCategories.map((category) => (
          <article
            key={category.id}
            className="flex h-full flex-col rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent p-6 shadow-inner shadow-blue-500/5 dark:border-blue-500/30 dark:from-blue-950/40 dark:via-blue-900/40 dark:to-zinc-950/40"
          >
            <header>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {category.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {category.description}
              </p>
            </header>
            <ul className="mt-4 space-y-4">
              {category.items.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col gap-2 rounded-xl border border-transparent bg-white/80 p-4 text-sm transition hover:border-blue-500/50 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-zinc-900/70"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-base font-semibold text-zinc-900 transition group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-300">
                        {item.title}
                      </span>
                      <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-blue-600 dark:text-blue-300">
                        {item.type}
                      </span>
                    </div>
                    <ul className="text-xs text-zinc-500 dark:text-zinc-400">
                      {item.takeaways.map((takeaway) => (
                        <li key={takeaway} className="flex gap-2">
                          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-blue-400" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
