export type LearningModule = {
  id: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  summary: string;
  outcomes: string[];
  topics: string[];
  resources: {
    type: "Documentation" | "Video" | "Hands-on Lab" | "Article" | "CTF Challenge";
    title: string;
    url: string;
  }[];
};

export type LearningPath = {
  id: string;
  title: string;
  description: string;
  focus: "Foundations" | "Blue Team" | "Red Team" | "Cloud" | "AppSec";
  duration: string;
  prerequisites: string[];
  keySkills: string[];
  modules: LearningModule[];
};

export const learningPaths: LearningPath[] = [
  {
    id: "foundations",
    title: "Cybersecurity Foundations",
    description:
      "Build essential security knowledge by mastering the core terminology, frameworks, and defensive mindset every practitioner relies on.",
    focus: "Foundations",
    duration: "4 weeks",
    prerequisites: ["Comfortable using the command line", "Basic networking knowledge"],
    keySkills: [
      "Threat modeling",
      "Security frameworks",
      "Risk assessment",
      "Secure architecture basics",
    ],
    modules: [
      {
        id: "cyber-101",
        title: "Security Mindset & Fundamentals",
        difficulty: "Beginner",
        duration: "6 hours",
        summary:
          "Understand how attackers think, the CIA triad, and how to evaluate risk to build a security-first perspective.",
        outcomes: [
          "Describe the CIA triad and core security goals",
          "Perform a qualitative risk assessment",
          "Explain common threat actor motivations",
        ],
        topics: [
          "CIA triad",
          "Security maturity models",
          "Threat actors & threat intelligence",
          "Security policies and frameworks",
        ],
        resources: [
          {
            type: "Documentation",
            title: "NIST Cybersecurity Framework Overview",
            url: "https://www.nist.gov/cyberframework",
          },
          {
            type: "Video",
            title: "Google: Building a Security Mindset",
            url: "https://www.youtube.com/watch?v=79IYZVYIVLA",
          },
          {
            type: "Hands-on Lab",
            title: "Risk Assessment Workshop",
            url: "https://www.cybrary.it/course/cybersecurity-risk-analysis",
          },
        ],
      },
      {
        id: "net-basics",
        title: "Networking for Defenders",
        difficulty: "Beginner",
        duration: "8 hours",
        summary:
          "Learn how packets move, what protocols attackers abuse, and how to monitor network activity effectively.",
        outcomes: [
          "Trace packet flows across OSI layers",
          "Identify malicious network patterns",
          "Use Wireshark to inspect packet captures",
        ],
        topics: ["TCP/IP", "Common protocols", "Packet inspection", "Network topology"],
        resources: [
          {
            type: "Article",
            title: "SANS: Introduction to Network Security Monitoring",
            url: "https://www.sans.edu/cyber-security-courses/network-monitoring-analysis/",
          },
          {
            type: "Hands-on Lab",
            title: "Wireshark Packet Analysis",
            url: "https://tryhackme.com/room/wireshark",
          },
          {
            type: "Documentation",
            title: "Wireshark User Guide",
            url: "https://www.wireshark.org/docs/",
          },
        ],
      },
      {
        id: "operational-security",
        title: "Securing Operating Systems",
        difficulty: "Intermediate",
        duration: "10 hours",
        summary:
          "Protect Linux and Windows environments by mastering hardening baselines, logging, and detection strategies.",
        outcomes: [
          "Implement baseline hardening controls",
          "Configure logging pipelines for auditing",
          "Respond to privilege escalation alerts",
        ],
        topics: [
          "Secure configuration",
          "Windows Event Forwarding",
          "Linux auditing",
          "Endpoint detection response",
        ],
        resources: [
          {
            type: "Documentation",
            title: "CIS Benchmarks",
            url: "https://www.cisecurity.org/cis-benchmarks",
          },
          {
            type: "Hands-on Lab",
            title: "Hardening Windows with Group Policy",
            url: "https://tryhackme.com/room/windowsfundamentals3xbx",
          },
          {
            type: "Video",
            title: "Linux Hardening Crash Course",
            url: "https://www.youtube.com/watch?v=tG3SGsLAqe0",
          },
        ],
      },
    ],
  },
  {
    id: "blue-team",
    title: "Security Operations (Blue Team)",
    description:
      "Develop the skills to detect, respond, and recover from security incidents using modern SOC workflows.",
    focus: "Blue Team",
    duration: "6 weeks",
    prerequisites: ["Comfortable reading logs", "Basic scripting experience"],
    keySkills: ["Alert triage", "Incident response", "Threat hunting", "Digital forensics"],
    modules: [
      {
        id: "soc-ops",
        title: "Running a SOC Effectively",
        difficulty: "Intermediate",
        duration: "7 hours",
        summary:
          "Learn how to structure SOC tiers, build playbooks, and prioritize alerts using MITRE ATT&CK.",
        outcomes: [
          "Design a SOC workflow and escalation model",
          "Map detections to MITRE ATT&CK tactics",
          "Build effective playbooks for recurring alerts",
        ],
        topics: ["SOC tiers", "Playbook design", "SIEM triage", "ATT&CK mapping"],
        resources: [
          {
            type: "Article",
            title: "SANS: Modern SOC Fundamentals",
            url: "https://www.sans.org/white-papers/",
          },
          {
            type: "Hands-on Lab",
            title: "Microsoft Sentinel Foundations",
            url: "https://learn.microsoft.com/en-us/training/paths/microsoft-sentinel-soc/",
          },
          {
            type: "Documentation",
            title: "MITRE ATT&CK Navigator",
            url: "https://attack.mitre.org/resources/working-with-attack/",
          },
        ],
      },
      {
        id: "threat-hunting",
        title: "Threat Hunting & Detection Engineering",
        difficulty: "Advanced",
        duration: "12 hours",
        summary:
          "Transition from alert consumer to proactive hunter with detection design, hypothesis creation, and log analysis.",
        outcomes: [
          "Formulate hunting hypotheses from intelligence",
          "Write Sigma/YARA rules for detections",
          "Automate log enrichment and pivoting",
        ],
        topics: ["Detection engineering", "Log pipelines", "Sigma rules", "Hunting metrics"],
        resources: [
          {
            type: "Hands-on Lab",
            title: "Elastic Security Analyst Path",
            url: "https://www.elastic.co/training/security-analyst",
          },
          {
            type: "Documentation",
            title: "Sigma Rule Specification",
            url: "https://sigmahq-py.readthedocs.io/",
          },
          {
            type: "CTF Challenge",
            title: "Threat Hunting: Investigating with Splunk",
            url: "https://tryhackme.com/room/splunk101",
          },
        ],
      },
      {
        id: "dfir",
        title: "Digital Forensics & Incident Response",
        difficulty: "Advanced",
        duration: "14 hours",
        summary:
          "Perform structured incident response with evidence collection, forensic imaging, and reporting best practices.",
        outcomes: [
          "Lead an incident response lifecycle",
          "Acquire and analyze forensic images",
          "Produce executive and technical post-incident reports",
        ],
        topics: ["IR lifecycle", "Memory forensics", "Chain of custody", "Reporting"],
        resources: [
          {
            type: "Hands-on Lab",
            title: "Volatility Memory Forensics",
            url: "https://tryhackme.com/room/volatility",
          },
          {
            type: "Video",
            title: "DFIR Case Study: Ransomware Recovery",
            url: "https://www.youtube.com/watch?v=i4zXqSZ1g9M",
          },
          {
            type: "Documentation",
            title: "NIST SP 800-61 Incident Handling Guide",
            url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final",
          },
        ],
      },
    ],
  },
  {
    id: "red-team",
    title: "Offensive Security (Red Team)",
    description:
      "Master ethical hacking techniques, from recon to post-exploitation, and learn how to emulate adversaries safely.",
    focus: "Red Team",
    duration: "8 weeks",
    prerequisites: ["Intermediate scripting (Python/PowerShell)", "Basic system administration"],
    keySkills: ["Reconnaissance", "Exploitation", "Privilege escalation", "Post-exploitation"],
    modules: [
      {
        id: "recon",
        title: "Reconnaissance & Enumeration",
        difficulty: "Intermediate",
        duration: "6 hours",
        summary:
          "Automate target discovery, map attack surfaces, and identify weak points using open-source tooling.",
        outcomes: [
          "Use OSINT to profile targets",
          "Enumerate services with Nmap and custom scripts",
          "Prioritize findings for exploitation",
        ],
        topics: ["OSINT", "Service enumeration", "Attack surface analysis"],
        resources: [
          {
            type: "Hands-on Lab",
            title: "TryHackMe: Nmap Livefire",
            url: "https://tryhackme.com/room/rpnmap",
          },
          {
            type: "Documentation",
            title: "OWASP Recon Guide",
            url: "https://cheatsheetseries.owasp.org/",
          },
          {
            type: "Article",
            title: "Automating Recon with Python",
            url: "https://medium.com/offensive-security",
          },
        ],
      },
      {
        id: "web-exploitation",
        title: "Web Application Exploitation",
        difficulty: "Advanced",
        duration: "15 hours",
        summary:
          "Find and exploit OWASP Top 10 vulnerabilities, weaponize proof-of-concepts, and document remediation guidance.",
        outcomes: [
          "Exploit injection vulnerabilities responsibly",
          "Bypass authentication controls",
          "Communicate impact and fixes clearly",
        ],
        topics: ["OWASP Top 10", "Burp Suite", "Injection attacks", "Session management"],
        resources: [
          {
            type: "Hands-on Lab",
            title: "PortSwigger Web Security Academy",
            url: "https://portswigger.net/web-security",
          },
          {
            type: "Video",
            title: "Bug Bounty Methodology Deep Dive",
            url: "https://www.youtube.com/watch?v=QwT6yYQn4XQ",
          },
          {
            type: "CTF Challenge",
            title: "OWASP Juice Shop",
            url: "https://owasp.org/www-project-juice-shop/",
          },
        ],
      },
      {
        id: "post-exploitation",
        title: "Post-Exploitation & Reporting",
        difficulty: "Advanced",
        duration: "9 hours",
        summary:
          "Stabilize shells, persist, pivot, and exfiltrate data in controlled environments while documenting findings professionally.",
        outcomes: [
          "Maintain persistence post-compromise",
          "Use C2 frameworks responsibly",
          "Deliver impactful red team reports",
        ],
        topics: ["Pivoting", "Persistence", "Command and control", "Reporting"],
        resources: [
          {
            type: "Documentation",
            title: "Cobalt Strike Playbook (Community)",
            url: "https://github.com/RhetTbull/cobalt-strike-cheat-sheet",
          },
          {
            type: "Hands-on Lab",
            title: "Metasploit Pivoting Lab",
            url: "https://tryhackme.com/room/metasploitpivoting",
          },
          {
            type: "Article",
            title: "Writing Professional Pentest Reports",
            url: "https://www.hackerone.com/knowledge-center",
          },
        ],
      },
    ],
  },
];

export const practicePrompts: string[] = [
  "Perform a reconnaissance exercise against a mock company and document the exposed assets.",
  "Collect logs from a sample Windows host and write a triage summary of suspicious events.",
  "Analyze a PCAP file and identify abnormal traffic patterns or exfiltration attempts.",
  "Build a network diagram for your home lab and highlight potential weak points.",
  "Write a detection rule for suspicious PowerShell execution using Sigma format.",
  "Run a vulnerability scan with OpenVAS or Nessus Essentials and prioritize the findings.",
  "Deploy a web app intentionally vulnerable to SQL injection and create a remediation plan.",
  "Respond to a simulated phishing incident using a documented IR workflow.",
  "Complete a beginner-friendly room on TryHackMe and summarize the techniques learned.",
  "Create a tabletop exercise scenario for ransomware and outline response steps.",
];

export const focusAreas = [
  {
    id: "starter",
    label: "I'm just getting started",
    recommendedPaths: ["foundations"],
    quickWins: [
      "Complete the Security Mindset module and capture key definitions in a personal glossary.",
      "Shadow a SOC livestream or on-demand video and take notes on tooling and workflows.",
      "Join a cybersecurity community (Discord/Slack) and introduce yourself.",
    ],
    tooling: ["Wireshark", "Burp Suite Community Edition", "Security Onion (VM)"],
  },
  {
    id: "blue",
    label: "I want to master defense",
    recommendedPaths: ["blue-team", "foundations"],
    quickWins: [
      "Ingest Windows Event Logs into a SIEM and build a suspicious logon alert.",
      "Complete the Volatility memory forensics lab and record key commands.",
      "Document a rapid response playbook for ransomware, including communications.",
    ],
    tooling: ["Elastic Security", "Microsoft Sentinel", "Velociraptor"],
  },
  {
    id: "red",
    label: "I want to master offense",
    recommendedPaths: ["red-team", "foundations"],
    quickWins: [
      "Perform an end-to-end lab on OWASP Juice Shop and write a professional report.",
      "Automate an Nmap scan and craft a prioritized attack plan from the findings.",
      "Practice privilege escalation on a vulnerable VM and document the path.",
    ],
    tooling: ["Burp Suite", "Metasploit", "Cobalt Strike (Community)"],
  },
  {
    id: "cloud",
    label: "I need to secure cloud environments",
    recommendedPaths: ["foundations", "blue-team"],
    quickWins: [
      "Enable AWS GuardDuty and investigate the default findings it generates.",
      "Run ScoutSuite against a sandbox AWS account and interpret the results.",
      "Design a zero-trust architecture diagram for a cloud-native application.",
    ],
    tooling: ["ScoutSuite", "Prowler", "AWS Security Hub"],
  },
];

export type QuizQuestion = {
  id: string;
  prompt: string;
  answers: { id: string; label: string; correct: boolean; rationale: string }[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "quiz-1",
    prompt:
      "A development team introduces a new external API dependency. Which control best reduces the risk of supply chain attacks?",
    answers: [
      {
        id: "a",
        label: "Conduct regular DDoS tabletop exercises.",
        correct: false,
        rationale: "DDoS exercises are useful, but they don't prevent malicious API updates.",
      },
      {
        id: "b",
        label: "Implement dependency pinning with signed artifact verification.",
        correct: true,
        rationale:
          "Pinning versions and verifying signatures mitigates tampering and unsanctioned changes.",
      },
      {
        id: "c",
        label: "Increase weekly vulnerability scans of production systems.",
        correct: false,
        rationale:
          "Scanning production is important, but it won't catch malicious API changes before deployment.",
      },
      {
        id: "d",
        label: "Require all developers to use privileged access workstations.",
        correct: false,
        rationale:
          "Secure workstations help protect credentials but do not guard against compromised dependencies.",
      },
    ],
  },
  {
    id: "quiz-2",
    prompt: "During incident response you find evidence of lateral movement. What should you do first?",
    answers: [
      {
        id: "a",
        label: "Push firewall updates to block the attacker immediately.",
        correct: false,
        rationale:
          "Blocking without containment planning might tip off the attacker and cause further damage.",
      },
      {
        id: "b",
        label: "Isolate affected systems to contain the spread while preserving evidence.",
        correct: true,
        rationale:
          "Containment while preserving evidence avoids data loss and prevents the attacker from moving further.",
      },
      {
        id: "c",
        label: "Publish an internal advisory explaining the incident in detail.",
        correct: false,
        rationale:
          "Communications are important, but initial containment steps take priority before broad advisory.",
      },
      {
        id: "d",
        label: "Start rebuilding all impacted systems from clean backups.",
        correct: false,
        rationale:
          "Eradication and recovery come after containment; premature rebuilding can destroy evidence.",
      },
    ],
  },
  {
    id: "quiz-3",
    prompt:
      "An attacker compromises a cloud-access key and uses it to enumerate S3 buckets. Which detective control provides the fastest alert?",
    answers: [
      {
        id: "a",
        label: "Weekly manual bucket reviews.",
        correct: false,
        rationale: "Manual reviews are slow and won't catch real-time abuse.",
      },
      {
        id: "b",
        label: "Enable GuardDuty or CloudTrail-based anomaly detection alerts.",
        correct: true,
        rationale:
          "Managed anomaly detection provides near real-time insight when unusual API calls occur.",
      },
      {
        id: "c",
        label: "Enable MFA delete on S3 objects.",
        correct: false,
        rationale: "MFA delete is a preventative control, not a detective one.",
      },
      {
        id: "d",
        label: "Configure stricter bucket policies.",
        correct: false,
        rationale: "Bucket policies are preventative; they do not produce alerts once the key is stolen.",
      },
    ],
  },
];
