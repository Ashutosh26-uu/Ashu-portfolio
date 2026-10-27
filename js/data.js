// All portfolio content lives here — edit this file to update the site.
window.PORTFOLIO = {
  github: "Ashutosh26-uu",
  email: "ashutosh@reasonateai.com",
  linkedin: "https://www.linkedin.com/in/ashutosh-mishra-841408324/",

  roles: ["founder", "CTO who still writes the code", "3rd-year CSE student", "hackathon kid from Prayagraj", "builder"],

  // Logos strip (rendered as a text marquee)
  backers: ["IIT Ropar TBIF", "IISc Bangalore", "IIT Delhi", "IIT Kanpur", "NVIDIA Inception", "Google for Startups",
    "Samsung R&D", "Tata Elxsi", "IIT Mandi", "IIT Jodhpur", "IIT Patna", "IIIT Bangalore", "BITS Pilani", "DTU",
    "VIT Vellore", "TIEC Egypt", "PW School of Startups", "United Incubation Hub"],

  // Things the portrait says when you click it
  quips: [
    "Haan, main hi hoon 👋",
    "Bug mila? Bhejo, fix kar deta hoon.",
    "Currently: shipping v0.0.2 🚀",
    "Press / for my secret terminal 🤫",
    "Ek pilot karein? 😄"
  ],

  // Shown as a story — newest chapter first
  experience: [
    {
      company: "ReasonateAI Private Limited",
      role: "Founder, CEO & CTO",
      period: "Mar 2026 — Present",
      desc: "Started it to answer one question: why do apps still break in production? We're building an AI that tests every change in a private copy first. Incubated at TBIF – IIT Ropar, piloting with Samsung R&D and Tata Elxsi.",
      link: "https://www.reasonateai.com",
      tag: "Now"
    },
    {
      company: "Curelex Healthtech Pvt. Ltd.",
      role: "Founding Member & CTO",
      period: "",
      desc: "My first time owning a whole backend — the patient platform and the admin side for doctors, patients and revenue. Learned that health-tech has no room for “chalta hai”.",
      link: "https://curelex-start-up.vercel.app",
      tag: "Health-tech"
    },
    {
      company: "Cashcry",
      role: "Full-Stack Engineer",
      period: "",
      desc: "Built full-stack apps alongside veteran engineers — and picked up how real teams ship.",
      tag: "Fintech"
    },
    {
      company: "Prodesk IT",
      role: "Backend Developer",
      period: "",
      desc: "Backend and database logic for production systems. Where I fell for clean schemas.",
      tag: "Backend"
    },
    {
      company: "United University, Prayagraj",
      role: "B.Tech, Computer Science & Engineering",
      period: "3rd Year",
      desc: "Where it all started. Still a student — the campus startup cell backed ReasonateAI in its earliest days.",
      tag: "Roots"
    }
  ],

  // "What keeps me up at night" — plain-language version of the focus areas
  focus: [
    { title: "Apps that never go down", desc: "Every change runs in a private twin of your app first. Only what passes goes live. That's Dual-Twin." },
    { title: "An AI CTO for everyone", desc: "You say what you need in plain words. The AI turns it into real, tested cloud setup — Kubernetes and all." },
    { title: "Software that heals itself", desc: "Agents keep watching the live app. Something drifts? They figure out why and fix it — no 2 a.m. calls." },
    { title: "Proving it with the big ones", desc: "Running pilots with Samsung R&D and Tata Elxsi, because big claims need big rooms to prove them in." },
    { title: "Systems that don't flinch", desc: "Microservices, Docker and multi-cloud failover — the boring plumbing that keeps everything standing." }
  ],

  awards: [
    { kicker: "1st Prize · National", title: "Microsoft Code for Bharat 2.0", desc: "Won it with an AI drone defence system. Still my favourite all-nighter." },
    { kicker: "Deep-tech recognition", title: "Fastest Emerging Startup", desc: "Named Fastest Emerging Deep Tech Startup in North West India." },
    { kicker: "National Finalist", title: "ISRO & Tata Hackathons", desc: "Autonomous robotics and systems — up against India's best teams." },
    { kicker: "National Finalist", title: "EY Techathon · Emergent IIT BHU", desc: "AI that spots car faults before they become breakdowns." }
  ],

  projects: [
    {
      title: "Dual-Twin Runtime",
      subtitle: "ReasonateAI · Core engine",
      desc: "The heart of ReasonateAI. Every change gets rehearsed in a private twin of your app before it touches the real one. If it breaks there, your users never find out.",
      tags: ["LLM Agents", "Kubernetes", "Docker", "Multi-cloud"],
      cat: ["ai", "cloud"],
      live: "https://www.reasonateai.com",
      liveLabel: "reasonateai.com",
      featured: true
    },
    {
      title: "AI Drone Defense System",
      subtitle: "Microsoft Code for Bharat 2.0 · 1st Prize",
      desc: "The one that won us Code for Bharat. Drones that spot, track and predict threats in real time — YOLOv8 on the edge, swarm coordination, even voice control.",
      tags: ["Python", "YOLOv8", "TensorFlow.js", "Docker"],
      cat: ["ai", "defence"],
      repo: "project-D",
      featured: true
    },
    {
      title: "Enterprise Pilots",
      subtitle: "Samsung R&D · Tata Elxsi",
      desc: "Taking the engine into rooms where downtime costs crores — automated cloud deployment for heavy industry and self-checking DevOps pipelines.",
      tags: ["DevOps", "Multi-cluster", "Automation"],
      cat: ["cloud"]
    },
    {
      title: "Sehatra",
      subtitle: "National health network",
      desc: "Healthcare for a whole district on one backend — 8 portals, an ambulance dispatch app and Saathi, an AI that talks to patients. Piloting in Barabanki, UP.",
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
      desc: "Built for my own college bus. A daily PIN, attendance from your phone — and yes, the database is an Excel sheet, because that's what the admin office loves.",
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
