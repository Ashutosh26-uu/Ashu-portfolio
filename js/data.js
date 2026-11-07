// All portfolio content lives here — edit this file to update the site.
window.PORTFOLIO = {
  name: "Ashutosh Mishra",
  github: "Ashutosh26-uu",
  email: "ashutosh@reasonateai.com",
  linkedin: "https://www.linkedin.com/in/ashutosh-mishra-841408324/",

  // "Now" — what I'm focused on; update `nowUpdated` whenever this changes
  nowUpdated: "November 2026",
  now: [
    { tag: "Building", title: "ReasonateAI v0.0.2", desc: "Dual-Twin is live — every build is tested and repaired in its own sandbox before release.", color: "#3E7BFA" },
    { tag: "Piloting", title: "Samsung R&D · Tata Elxsi", desc: "Running enterprise pilots on automated cloud deployment and autonomous DevOps validation.", color: "#D2B37A" },
    { tag: "Scaling", title: "Sehatra in Barabanki", desc: "Taking the connected health network through its first district pilot in Uttar Pradesh.", color: "#14A37F" },
    { tag: "Next", title: "The virtual CTO", desc: "Security checks, cloud-cost control and server setup handled by AI — planned for Q1 2027.", color: "#8B5CF6" }
  ],

  // Featured press item
  press: {
    source: "ReasonateAI Press",
    headline: "Nine of India's top institutes select ReasonateAI for incubation in a single round",
    detail: "IISc Bangalore, IIT Kanpur, IIT Mandi, IIT Jodhpur, IIT Patna, IIIT Bangalore, BITS Pilani, DTU and VIT Vellore — bringing the total to 13 incubators.",
    link: "https://www.reasonateai.com/press"
  },

  // Hero credential strip
  credentials: ["TBIF · IIT Ropar", "NVIDIA Inception", "Google for Startups", "Samsung R&D · Pilot", "Tata Elxsi · Pilot"],

  figures: [
    { n: 3, suffix: "", label: "Companies founded" },
    { n: 13, suffix: "", label: "Incubators backing ReasonateAI" },
    { n: 2, suffix: "", label: "Enterprise pilots" },
    { n: 8800, suffix: "+", label: "Developers on the waitlist" },
    { n: 4, suffix: "+", label: "National hackathon wins" },
    { n: 100, suffix: "K+", label: "Lines of core engine code" }
  ],

  ventures: [
    {
      id: "reasonate",
      name: "ReasonateAI",
      legal: "ReasonateAI Private Limited",
      mark: "R",
      color: "#3E7BFA",
      sector: "Autonomous AI · Cloud infrastructure",
      role: "Founder, CEO & CTO",
      since: "Since Mar 2026",
      stage: "v0.0.2 live",
      summary: "An AI app builder and virtual CTO. Customers describe what they need in plain language; AI agents plan, build and test it in a private twin of the application, then promote it to production with zero downtime.",
      highlights: [
        "Proprietary Dual-Twin Architecture for zero-downtime releases",
        "Incubated at TBIF – IIT Ropar; backed by 13 incubators including IISc, IIT Delhi and IIT Kanpur",
        "Enterprise pilots with Samsung R&D and Tata Elxsi",
        "Member of NVIDIA Inception and Google for Startups"
      ],
      metrics: [["8,800+", "Waitlist"], ["13", "Incubators"], ["2", "Enterprise pilots"]],
      milestones: [
        ["Mar 2026", "Company founded", "done"],
        ["Aug 2026", "v0.0.1 — AI website builder", "done"],
        ["Now", "v0.0.2 — Dual-Twin live", "now"],
        ["Q1 2027", "Virtual CTO", "next"]
      ],
      link: "https://www.reasonateai.com",
      linkLabel: "Visit reasonateai.com"
    },
    {
      id: "sehatra",
      name: "Sehatra",
      legal: "Nexus Healthcare",
      mark: "S",
      color: "#14A37F",
      sector: "Health-tech · Public health networks",
      role: "Founder & CEO",
      since: "",
      stage: "District pilot",
      summary: "A connected health network for India. Patients, doctors, hospitals and emergency dispatch run on one shared platform, with Saathi — an AI assistant that guides patients through care.",
      highlights: [
        "8 role-based portals and a dispatch app on a single backend",
        "Live updates across portals with real authentication and access control",
        "Installable web app and Android app",
        "Pilot district: Barabanki, Uttar Pradesh"
      ],
      metrics: [["8", "Portals"], ["1", "Pilot district"], ["Web + Android", "Platforms"]]
    },
    {
      id: "edutech",
      name: "EduTech",
      legal: "EduTech",
      mark: "E",
      color: "#8B5CF6",
      sector: "Ed-tech · Test preparation",
      role: "Founder & CEO",
      since: "",
      stage: "Early stage",
      summary: "An ed-tech company focused on test preparation — helping students prepare for their exams with structured, technology-led learning.",
      highlights: [
        "Ed-tech company built around test preparation",
        "Technology-first approach to how students prepare and practise",
        "Led alongside ReasonateAI and Sehatra"
      ],
      metrics: [["Test prep", "Focus"], ["Ed-tech", "Sector"], ["Early", "Stage"]]
    }
  ],

  // Dual-Twin pipeline
  flow: [
    { t: "Intent", d: "Plain-language request" },
    { t: "AI agents", d: "Plan · build · test" },
    { t: "Test twin", d: "Isolated sandbox" },
    { t: "Verification", d: "Tests · security · config" },
    { t: "Live twin", d: "Zero-downtime release" }
  ],

  capabilities: [
    { t: "Autonomous AI CTO", d: "Translates business intent into validated, production-grade cloud manifests and Kubernetes orchestration." },
    { t: "Self-healing runtime", d: "Telemetry agents detect configuration drift and remediate it inside the test twin before re-promoting." },
    { t: "Distributed systems", d: "Microservices, container runtimes and multi-cloud failover designed for high-throughput workloads." }
  ],

  engineLog: [
    ["d", "$ reasonate build \"clinic booking app\""],
    ["v", "[plan]    3 agents assigned · 6 pages · 4 tables"],
    ["v", "[build]   react + fastapi scaffold generated"],
    ["c", "[twin]    provisioning isolated test twin"],
    ["v", "[verify]  142 checks running"],
    ["e", "[verify]  2 failing · auth redirect, missing index"],
    ["v", "[repair]  agent patched 2 files · re-running"],
    ["c", "[verify]  142/142 passed"],
    ["v", "[secure]  no exposed secrets · access rules ok"],
    ["c", "[release] promoted to live twin · downtime 0s"],
    ["v", "[observe] telemetry active · drift guard armed"],
    ["e", "[observe] config drift detected on node-2"],
    ["c", "[heal]    fixed in twin · verified · re-promoted"]
  ],

  experience: [
    { role: "Founder, CEO & CTO", org: "ReasonateAI Private Limited", period: "Mar 2026 — Present", desc: "Lead company strategy, enterprise partnerships and the core engineering of the Autonomous AI CTO and Dual-Twin Architecture." },
    { role: "Founder & CEO", org: "Sehatra · Nexus Healthcare", period: "Present", desc: "Building a connected public-health platform for India, from product design to a district-level pilot." },
    { role: "Founder & CEO", org: "EduTech", period: "Present", desc: "Building an ed-tech company focused on test preparation." },
    { role: "Founding Member & CTO", org: "Curelex Healthtech Pvt. Ltd.", period: "", desc: "Owned end-to-end backend architecture for the patient platform and the administrative suite." },
    { role: "Full-Stack Engineer", org: "Cashcry", period: "", desc: "Engineered scalable full-stack applications under senior engineering mentorship." },
    { role: "Backend Developer", org: "Prodesk IT", period: "", desc: "Built backend services and database logic for production systems." }
  ],

  education: { degree: "B.Tech, Computer Science & Engineering", school: "United University, Prayagraj", note: "3rd year" },

  awards: [
    { title: "Microsoft Code for Bharat 2.0", result: "National Winner · 1st Prize", desc: "AI-powered autonomous drone defence system." },
    { title: "Fastest Emerging Deep Tech Startup", result: "North West India", desc: "Recognition for ReasonateAI." },
    { title: "ISRO & Tata Hackathons", result: "National Finalist", desc: "Autonomous robotics and systems." },
    { title: "EY Techathon · Emergent IIT BHU", result: "National Finalist", desc: "AI-based automobile fault detection and predictive diagnostics." }
  ],

  backers: ["IIT Ropar · TBIF", "IISc Bangalore", "IIT Delhi", "IIT Kanpur", "IIT Mandi", "IIT Jodhpur", "IIT Patna",
    "IIIT Bangalore", "BITS Pilani", "DTU", "VIT Vellore", "TIEC Egypt", "United Incubation Hub",
    "NVIDIA Inception", "Google for Startups", "PW School of Startups"],

  projects: [
    { title: "Dual-Twin Runtime", org: "ReasonateAI", desc: "Ephemeral simulation mirror that verifies every infrastructure change before it reaches production.", tags: ["LLM agents", "Kubernetes", "Docker"], cat: ["ai", "cloud"], live: "https://www.reasonateai.com" },
    { title: "AI Drone Defense System", org: "Code for Bharat 2.0 · Winner", desc: "Real-time threat detection, tracking and interception with edge inference and swarm coordination.", tags: ["Python", "YOLOv8", "TensorFlow.js"], cat: ["ai", "defence"] },
    { title: "Sehatra Platform", org: "Sehatra", desc: "Eight portals, dispatch and an AI patient assistant on one backend, with web and Android clients.", tags: ["Node.js", "React", "PostgreSQL"], cat: ["health"] },
    { title: "Enterprise Pilots", org: "Samsung R&D · Tata Elxsi", desc: "Automated cloud deployment for industrial workloads and autonomous DevOps pipeline validation.", tags: ["DevOps", "Multi-cluster"], cat: ["cloud"] },
    { title: "AETHER", org: "Intelligent mobility", desc: "AI, IoT, drones and NavIC satellite communication for real-time fleet monitoring and safety.", tags: ["Python", "React", "IoT"], cat: ["ai", "defence"] },
    { title: "Curelex", org: "Health-tech · CTO", desc: "Patient platform and administrative portal for doctors, patients, revenue and analytics.", tags: ["TypeScript", "Node.js", "MySQL"], cat: ["health"], live: "https://curelex.in", liveLabel: "curelex.in" },
    { title: "ChayBot", org: "Applied AI", desc: "Multi-model assistant with web search, multimodal input, memory and a plugin architecture.", tags: ["Python", "FastAPI"], cat: ["ai"] },
    { title: "UU-10 Bus Attendance", org: "United University · Campus", desc: "Campus transport attendance with daily PINs and phone check-in.", tags: ["React", "Express"], cat: ["edu"], live: "https://client-ghwf.vercel.app" }
  ],

  filters: [
    { id: "all", label: "All" },
    { id: "ai", label: "AI" },
    { id: "cloud", label: "Cloud" },
    { id: "health", label: "Health" },
    { id: "defence", label: "Defence & Mobility" },
    { id: "edu", label: "Education" }
  ],

  expertise: {
    business: ["Venture building", "Product strategy", "Enterprise partnerships", "Pilot execution", "Team leadership", "Incubator & ecosystem relations"],
    technology: ["Autonomous cloud infrastructure", "Kubernetes & orchestration", "LLM reasoning & verification", "Distributed backend systems", "Computer vision & edge AI", "Full-stack & mobile"]
  },

  stack: ["Python", "TypeScript", "Node.js", "React", "FastAPI", "Kubernetes", "Docker", "PostgreSQL", "MySQL", "YOLOv8", "TensorFlow.js", "Capacitor"],

  principles: [
    { t: "Build the company and the code", d: "Strategy and architecture are the same conversation. I lead both." },
    { t: "Earn trust in production", d: "Pilots with real partners matter more than slides. Every claim gets tested." },
    { t: "Build for India, design for scale", d: "Products that work in a district hospital or a campus office can work anywhere." }
  ],

  contact: [
    { label: "Email", value: "ashutosh@reasonateai.com", href: "mailto:ashutosh@reasonateai.com" },
    { label: "LinkedIn", value: "Ashutosh Mishra", href: "https://www.linkedin.com/in/ashutosh-mishra-841408324/" },
    { label: "GitHub", value: "Ashutosh26-uu", href: "https://github.com/Ashutosh26-uu" },
    { label: "Company", value: "reasonateai.com", href: "https://www.reasonateai.com" }
  ]
};
