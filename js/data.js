// All portfolio content lives here — edit this file to update the site.
window.PORTFOLIO = {
  github: "Ashutosh26-uu",
  email: "ashutosh@reasonateai.com",
  linkedin: "https://www.linkedin.com/in/ashutosh-mishra-841408324/",

  roles: ["deep-tech system architect", "founder, CEO & CTO", "autonomous AI engineer", "national hackathon champion", "startup builder"],

  // Logos strip (rendered as a text marquee)
  backers: ["IIT Ropar TBIF", "IISc Bangalore", "IIT Delhi", "IIT Kanpur", "NVIDIA Inception", "Google for Startups",
    "Samsung R&D", "Tata Elxsi", "IIT Mandi", "IIT Jodhpur", "IIT Patna", "IIIT Bangalore", "BITS Pilani", "DTU",
    "VIT Vellore", "TIEC Egypt", "PW School of Startups", "United Incubation Hub"],

  stats: {
    waitlist: 8800,
    linesOfCode: 100,
    hackathons: 4,
    incubators: 13,
    years: 3,
    pilots: 2
  },

  experience: [
    {
      company: "ReasonateAI Private Limited",
      role: "Founder, CEO & CTO",
      period: "Mar 2026 — Present",
      desc: "Architecting an Autonomous AI CTO and the proprietary Dual-Twin Architecture. Secured incubation at TBIF – IIT Ropar and lead enterprise pilots with Samsung R&D and Tata Elxsi.",
      link: "https://www.reasonateai.com",
      tag: "Deep-tech"
    },
    {
      company: "Curelex Healthtech Pvt. Ltd.",
      role: "Founding Member & CTO",
      period: "",
      desc: "Owned the end-to-end backend architecture — patient platform plus an admin suite for doctors, patients, revenue and analytics.",
      link: "https://curelex-start-up.vercel.app",
      tag: "Health-tech"
    },
    {
      company: "Cashcry",
      role: "Full-Stack Engineer",
      period: "",
      desc: "Engineered scalable full-stack applications under veteran mentorship.",
      tag: "Fintech"
    },
    {
      company: "Prodesk IT",
      role: "Backend Developer",
      period: "",
      desc: "Built robust backend and database logic for production systems.",
      tag: "Backend"
    },
    {
      company: "United University, Prayagraj",
      role: "B.Tech, Computer Science & Engineering",
      period: "3rd Year",
      desc: "Early-stage incubation and campus startup support for ReasonateAI.",
      tag: "Education"
    }
  ],

  focus: [
    { title: "Dual-Twin Cloud Architecture", desc: "Ephemeral simulation environments and governed promotion pipelines for zero-downtime operations." },
    { title: "Autonomous AI CTO Engine", desc: "Turning natural-language intent into validated, production-grade cloud manifests and Kubernetes orchestrations." },
    { title: "Self-Healing Cloud Runtimes", desc: "Closed-loop telemetry agents that detect configuration drift and remediate on their own." },
    { title: "Enterprise Pilot Leadership", desc: "Mission-critical deployment partnerships and pilot executions with Samsung R&D and Tata Elxsi." },
    { title: "Distributed Systems & DevOps", desc: "High-throughput microservices, Docker runtimes and resilient multi-cloud failover topologies." }
  ],

  awards: [
    { kicker: "1st Prize · National", title: "Microsoft Code for Bharat 2.0", desc: "Champion for engineering an AI autonomous drone defence system." },
    { kicker: "Deep-tech recognition", title: "Fastest Emerging Startup", desc: "Fastest Emerging Deep Tech Startup in North West India." },
    { kicker: "National Finalist", title: "ISRO & Tata Hackathons", desc: "Premier autonomous robotics and systems competitions." },
    { kicker: "National Finalist", title: "EY Techathon · Emergent IIT BHU", desc: "AI automobile fault detection and predictive diagnostics." }
  ],

  projects: [
    {
      title: "Dual-Twin Runtime",
      subtitle: "ReasonateAI · Core engine",
      desc: "An ephemeral simulation mirror: every infrastructure change is simulated and verified in a private twin before it is promoted to live — zero downtime, auto-fix on drift.",
      tags: ["LLM Agents", "Kubernetes", "Docker", "Multi-cloud"],
      cat: ["ai", "cloud"],
      live: "https://www.reasonateai.com",
      liveLabel: "reasonateai.com",
      featured: true
    },
    {
      title: "AI Drone Defense System",
      subtitle: "Microsoft Code for Bharat 2.0 · 1st Prize",
      desc: "Real-time autonomous threat interception with edge inference — YOLOv8 detection, multi-object tracking, behavioural threat prediction and swarm coordination.",
      tags: ["Python", "YOLOv8", "TensorFlow.js", "Docker"],
      cat: ["ai", "defence"],
      repo: "project-D",
      featured: true
    },
    {
      title: "Enterprise Pilots",
      subtitle: "Samsung R&D · Tata Elxsi",
      desc: "Automated cloud-infrastructure deployment for heavy industry, and autonomous DevOps pipeline validation across complex multi-cluster environments.",
      tags: ["DevOps", "Multi-cluster", "Automation"],
      cat: ["cloud"]
    },
    {
      title: "Sehatra",
      subtitle: "National health network",
      desc: "8 portals + dispatch app on one backend: real auth, role-based access, live cross-portal updates, the Saathi AI assistant, PWA and a Capacitor Android app.",
      tags: ["Node.js", "React", "PostgreSQL", "Android"],
      cat: ["health", "ai"],
      repo: "-nexus-healthcare"
    },
    {
      title: "AETHER",
      subtitle: "Satellite-integrated mobility",
      desc: "AI + IoT + drones + NavIC satellite comms for real-time vehicle monitoring, safety automation and destination-aware fleet intelligence.",
      tags: ["Python", "React", "IoT", "NavIC"],
      cat: ["ai", "defence"],
      repo: "AETHER",
      live: "https://aether-tau-flax.vercel.app"
    },
    {
      title: "Curelex",
      subtitle: "Health-tech · as CTO",
      desc: "Patient-facing health platform and a Node.js + MySQL admin portal for doctors, patients, revenue and analytics.",
      tags: ["TypeScript", "Node.js", "MySQL"],
      cat: ["health", "web"],
      repo: "Curelex-start-up",
      live: "https://curelex-start-up.vercel.app"
    },
    {
      title: "ChayBot",
      subtitle: "Multi-modal AI assistant",
      desc: "Multiple AI models, live web search, voice/image/document input, context memory and a plugin architecture.",
      tags: ["Python", "FastAPI", "WebSockets"],
      cat: ["ai"],
      repo: "chatbot"
    },
    {
      title: "UU-10 Bus Attendance",
      subtitle: "Smart campus",
      desc: "React + Express portal with an Excel workbook as the database. Daily bus PIN, phone-based attendance.",
      tags: ["React", "Express", "Excel DB"],
      cat: ["web"],
      repo: "UU-bus-erp",
      live: "https://client-ghwf.vercel.app"
    },
    {
      title: "Nexus AI",
      subtitle: "Hackathon build",
      desc: "An AI workspace built under hackathon pressure with Vite, React and TypeScript.",
      tags: ["TypeScript", "React", "Vite"],
      cat: ["ai", "web"],
      repo: "hackthon_AU"
    }
  ],

  filters: [
    { id: "all", label: "All" },
    { id: "ai", label: "AI / ML" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "defence", label: "Defence & Mobility" },
    { id: "health", label: "Health-tech" },
    { id: "web", label: "Web" }
  ],

  stack: [
    { group: "Deep-tech", items: ["Autonomous Cloud Infrastructure", "Dual-Twin Architecture", "LLM Reasoning & Verification", "Deep-Tech System Architecture"] },
    { group: "Cloud & DevOps", items: ["Kubernetes", "Docker", "Cloud Orchestration", "Microservices", "Multi-cloud Failover", "CI/CD"] },
    { group: "AI / ML", items: ["LLM Agents", "YOLOv8", "TensorFlow.js", "Computer Vision", "Edge Inference", "Predictive Analytics"] },
    { group: "Backend", items: ["Node.js", "Express", "Python", "FastAPI", "Flask", "WebSockets", "Distributed Systems"] },
    { group: "Frontend & Mobile", items: ["React", "TypeScript", "Vite", "PWA", "Capacitor", "Android"] },
    { group: "Data", items: ["PostgreSQL", "MySQL", "SQLite"] }
  ],

  contact: [
    { label: "Email", value: "ashutosh@reasonateai.com", href: "mailto:ashutosh@reasonateai.com" },
    { label: "LinkedIn", value: "in/ashutosh-mishra", href: "https://www.linkedin.com/in/ashutosh-mishra-841408324/" },
    { label: "GitHub", value: "@Ashutosh26-uu", href: "https://github.com/Ashutosh26-uu" },
    { label: "ReasonateAI", value: "reasonateai.com", href: "https://www.reasonateai.com" }
  ]
};
