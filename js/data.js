// All portfolio content lives here — edit this file to update the site.
window.PORTFOLIO = {
  github: "Ashutosh26-uu",

  roles: ["founder", "full-stack engineer", "AI builder", "startup builder", "product thinker"],

  marquee: ["React", "Node.js", "TypeScript", "Python", "YOLOv8", "TensorFlow.js", "PostgreSQL", "MySQL",
    "Express", "FastAPI", "Capacitor", "PWA", "Docker", "Vite", "LLM Agents", "Computer Vision", "IoT", "Vercel"],

  ventures: [
    {
      name: "Reasonate AI Pvt. Ltd.",
      role: "Founder & CEO",
      desc: "The company I founded to build practical AI products — from healthcare networks to intelligent mobility.",
      link: "https://www.reasonateai.com",
      tag: "Company"
    },
    {
      name: "Sehatra · Nexus Healthcare",
      role: "Founder · Product & Engineering",
      desc: "A national health network: 8 connected portals, a dispatch app, live updates and the Saathi patient assistant.",
      link: "https://github.com/Ashutosh26-uu/-nexus-healthcare",
      tag: "Health-tech"
    },
    {
      name: "Curelex",
      role: "Builder",
      desc: "Health-tech startup platform with a full admin suite for doctors, patients, revenue and analytics.",
      link: "https://curelex-start-up.vercel.app",
      tag: "Health-tech"
    },
    {
      name: "Ed-tech",
      role: "Builder",
      desc: "Digital systems for campuses — like the UU-10 Bus attendance portal running on daily PINs.",
      link: "https://client-ghwf.vercel.app",
      tag: "Ed-tech"
    }
  ],

  projects: [
    {
      title: "Sehatra",
      subtitle: "National health network",
      desc: "8 portals + dispatch app on one shared backend. Real auth, role-based access, live cross-portal updates, the Saathi AI chat assistant, PWA install and a Capacitor Android app.",
      tags: ["Node.js", "React", "PostgreSQL", "PWA", "Android"],
      cat: ["health", "ai"],
      repo: "-nexus-healthcare",
      featured: true
    },
    {
      title: "Drone Surveillance System",
      subtitle: "Defence-grade AI",
      desc: "YOLOv8 object detection trained on military assets, multi-object tracking, behavioural threat prediction, swarm coordination and voice/gesture control.",
      tags: ["Python", "YOLOv8", "TensorFlow.js", "Docker"],
      cat: ["ai", "defence"],
      repo: "project-D",
      featured: true
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
      subtitle: "Health-tech startup",
      desc: "Patient-facing health platform plus an admin portal on Node.js + MySQL to manage doctors, patients, revenue and system analytics.",
      tags: ["TypeScript", "Node.js", "MySQL"],
      cat: ["health", "web"],
      repo: "Curelex-start-up",
      live: "https://curelex-start-up.vercel.app"
    },
    {
      title: "UU-10 Bus Attendance",
      subtitle: "Smart campus",
      desc: "React + Express portal with an Excel workbook as the database. Admins generate a daily bus PIN, students mark attendance from their phones.",
      tags: ["React", "Express", "Excel DB"],
      cat: ["web", "edtech"],
      repo: "UU-bus-erp",
      live: "https://client-ghwf.vercel.app"
    },
    {
      title: "ChayBot",
      subtitle: "Multi-modal AI assistant",
      desc: "Chatbot combining multiple AI models, live web search, voice/image/document input, context memory and a plugin architecture.",
      tags: ["Python", "FastAPI", "WebSockets"],
      cat: ["ai"],
      repo: "chatbot"
    },
    {
      title: "Nexus AI",
      subtitle: "Hackathon build",
      desc: "An AI workspace built under hackathon pressure with Vite, React and TypeScript.",
      tags: ["TypeScript", "React", "Vite"],
      cat: ["ai", "web"],
      repo: "hackthon_AU"
    },
    {
      title: "Emergent Vibe Coding",
      subtitle: "Rapid AI-assisted build",
      desc: "A fast, AI-assisted web build shipped straight to production on Vercel.",
      tags: ["JavaScript", "Vercel"],
      cat: ["web"],
      repo: "Emergent-vibe-coding-project-",
      live: "https://emergent-vibe-coding-project.vercel.app"
    },
    {
      title: "United Conference",
      subtitle: "Event website",
      desc: "Conference website with schedule, speakers and registration flow.",
      tags: ["HTML", "CSS", "JavaScript"],
      cat: ["web", "edtech"],
      repo: "conferrance",
      live: "https://conferrance.vercel.app"
    }
  ],

  filters: [
    { id: "all", label: "All" },
    { id: "ai", label: "AI / ML" },
    { id: "health", label: "Health-tech" },
    { id: "defence", label: "Defence & Mobility" },
    { id: "web", label: "Web" },
    { id: "edtech", label: "Ed-tech" }
  ],

  stack: [
    { group: "Frontend", items: ["React", "TypeScript", "JavaScript", "Vite", "HTML5", "CSS3", "PWA"] },
    { group: "Backend", items: ["Node.js", "Express", "Python", "FastAPI", "Flask", "WebSockets", "REST APIs"] },
    { group: "AI / ML", items: ["YOLOv8", "TensorFlow.js", "Computer Vision", "LLM Assistants", "Predictive Analytics"] },
    { group: "Data", items: ["PostgreSQL", "MySQL", "SQLite", "Excel as DB"] },
    { group: "Mobile & Ops", items: ["Capacitor", "Android", "Docker", "Vercel", "Render", "Git & GitHub"] }
  ],

  process: [
    { title: "Find the real problem", desc: "Talk to users, understand the ground reality — a district hospital, a campus bus, a fleet." },
    { title: "Prototype fast", desc: "A working demo in days, not months. Ideas are cheap; working software convinces." },
    { title: "Ship to production", desc: "Real auth, real databases, real deployments. Docker, Postgres, HTTPS, installable apps." },
    { title: "Scale & iterate", desc: "Pilot, measure, improve — then take it from one district to the whole nation." }
  ],

  contact: [
    { label: "Reasonate AI", value: "reasonateai.com", href: "https://www.reasonateai.com" },
    { label: "GitHub", value: "@Ashutosh26-uu", href: "https://github.com/Ashutosh26-uu" }
    // Add more, e.g.:
    // { label: "Email", value: "you@example.com", href: "mailto:you@example.com" },
    // { label: "LinkedIn", value: "in/your-handle", href: "https://linkedin.com/in/your-handle" },
  ]
};
