export type ProjectCategory =
  | "Odoo & ERP"
  | "Full Stack"
  | "Frontend & Interactive"
  | "Systems & Utilities";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  bullets: string[];
  tags: string[];
  liveUrl?: string;
  internalBadge?: string;
  githubUrl?: string;
  gradient: string;
  iconName: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "airblue-gest-helpdesk",
    title: "Airblue GEST Helpdesk",
    subtitle: "Enterprise Customer Support & Email Management",
    category: "Odoo & ERP",
    description:
      "A custom Odoo module for Airblue's customer feedback and query handling, with a role based dashboard that keeps all support tickets in one place.",
    bullets: [
      "Email parsing integration that fetches incoming customer emails, routes them and matches replies to the correct ticket ID.",
      "Role based access control built on overridden core user models, plus SLA tracking for first response time, department resolution and ticket age.",
    ],
    tags: ["Python", "Odoo", "PostgreSQL", "XML", "REST APIs"],
    internalBadge: "Internal Airblue project",
    gradient: "from-blue-600 via-indigo-600 to-sky-600",
    iconName: "HelpCircle",
  },
  {
    id: "airblue-hrms",
    title: "Airblue HRMS",
    subtitle: "Biometric Attendance & Custom Leave Management",
    category: "Odoo & ERP",
    description:
      "Two linked Odoo HR modules covering shift tracking, attendance syncing and leave encashment.",
    bullets: [
      "ZKTeco biometric integration using scheduled cron jobs that pull punch data and assign shifts in Odoo.",
      "Multi tier leave approvals routed by job position, department and work location, with OWL dashboards and record rules for line managers.",
    ],
    tags: ["Python", "Odoo ORM", "OWL", "QWeb", "PostgreSQL", "ZKTeco API"],
    internalBadge: "Internal Airblue project",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    iconName: "Clock",
  },
  {
    id: "raw-spec",
    title: "RAW SPEC",
    subtitle: "High Performance Automotive Styling Catalogue",
    category: "Full Stack",
    description:
      "A full stack automotive styling catalogue on ASP.NET Core MVC with an admin inventory system.",
    bullets: [
      "Entity Framework Core queries tuned to cut data retrieval time.",
      "Role based access control through ASP.NET Core Identity for admin CRUD operations, with a dark themed Tailwind UI holding a 90+ Lighthouse score.",
    ],
    tags: ["ASP.NET Core MVC", "C#", "EF Core", "Identity", "Tailwind CSS"],
    gradient: "from-zinc-700 via-slate-800 to-zinc-900",
    iconName: "Gauge",
  },
  {
    id: "ignition",
    title: "Ignition",
    subtitle: "Islamic Auto Lease Financing & Dream Tracker",
    category: "Frontend & Interactive",
    description:
      "A specialized car financing and first car dream tracker platform focused on Islamic interest-free auto leasing for vehicles priced around 8.5 to 9 Lacs PKR.",
    bullets: [
      "Interactive EMI calculator computing customized monthly installments based on car price, down payment, and tenure.",
      "Engaging dream tracker interface animated with Framer Motion, visually illustrating user savings progress.",
      "High-speed, responsive, and accessible UI crafted with React 18, TypeScript, and Tailwind CSS.",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "https://ignition-rust.vercel.app/",
    githubUrl: "https://github.com/Danishthinks",
    gradient: "from-amber-400 via-rose-500 to-pink-500",
    iconName: "Car",
  },
  {
    id: "smartstock",
    title: "SmartStock",
    subtitle: "AI-Powered Inventory & Stock Forecasting",
    category: "Full Stack",
    description:
      "Intelligent enterprise inventory management solution utilizing machine learning models to forecast demand, prevent stock-outs, and provide POS capabilities.",
    bullets: [
      "ML-driven automated stock forecasting delivering 90%+ prediction accuracy.",
      "Scalable relational & NoSQL schema design with sub-500ms REST query response times.",
      "Real-time analytics dashboards presenting multi-warehouse inventory telemetry and alerts.",
    ],
    tags: ["Python", "React", "Node.js", "Firebase", "RESTful APIs"],
    liveUrl: "https://smartstock-final.vercel.app/",
    githubUrl: "https://github.com/Danishthinks",
    gradient: "from-indigo-500 via-purple-500 to-violet-600",
    iconName: "Boxes",
  },
  {
    id: "pitstop-reaction-test",
    title: "Pitstop Reaction Test",
    subtitle: "F1 Race Start Simulator & Telemetry Platform",
    category: "Frontend & Interactive",
    description:
      "High-octane motorsport web application simulating Formula 1 starting lights and pit stop reactions with sub-millisecond precision.",
    bullets: [
      "Engineered with performance.now() to guarantee sub-millisecond (<1ms) measurement accuracy without main thread jitter.",
      "Integrated OpenF1 and Ergast REST APIs processing 10,000+ telemetry data points per session with sub-200ms latency.",
      "Audio-visual feedback system and dynamic leaderboard reflecting real-time driver reactions.",
    ],
    tags: ["React", "OpenF1 API", "Ergast API", "Tailwind CSS", "Web Audio"],
    liveUrl: "https://pitstop-reaction-test.vercel.app",
    githubUrl: "https://github.com/Danishthinks",
    gradient: "from-red-500 via-rose-600 to-orange-500",
    iconName: "Timer",
  },
  {
    id: "file-corrupter",
    title: "File Corrupter",
    subtitle: "Client-Side Binary Manipulation QA Utility",
    category: "Systems & Utilities",
    description:
      "Privacy-first, client-side binary payload manipulation engine designed for testing file-ingestion resiliency and document parsing workflows.",
    bullets: [
      "Operates entirely on ArrayBuffer and Uint8Array in the browser with sub-millisecond latency and zero server transmission.",
      "Heuristic file signature algorithm preserving magic headers while mutating internal XML/Deflate streams (95%+ authentic QA bug trigger rate).",
      "Real-time memory offset inspector rendering byte-by-byte hex diffs with fluid 60 FPS Framer Motion rendering.",
    ],
    tags: ["JavaScript", "TypeScript", "Web API", "Framer Motion", "Vite"],
    liveUrl: "https://file-corrupter.vercel.app/",
    githubUrl: "https://github.com/Danishthinks",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    iconName: "Binary",
  },
];
