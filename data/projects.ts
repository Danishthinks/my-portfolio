export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Full-Stack" | "Frontend & Interactive" | "Systems & Utilities";
  description: string;
  bullets: string[];
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  gradient: string;
  iconName: string;
}

export const projectsData: ProjectItem[] = [
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
    category: "Full-Stack",
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
