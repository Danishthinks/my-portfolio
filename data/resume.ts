export interface TimelineEntry {
  title: string;
  organization: string;
  location?: string;
  period: string;
  type?: string;
  description?: string;
  bullets: string[];
  techStack?: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient"
    highlight?: boolean;
  }[];
}

export const experiences: TimelineEntry[] = [
  {
    title: "Software Engineer (Contract)",
    organization: "Iron Bridge Systems",
    location: "Islamabad, Pakistan",
    period: "Apr 2024 – Aug 2025",
    type: "Part-time / Contract — completed during BSCS studies",
    bullets: [
      "Engineered and maintained scalable client web applications, achieving 95+ Lighthouse performance scores and ensuring cross-browser compatibility across all major platforms.",
      "Architected modular, reusable codebase structures that reduced technical debt and accelerated new feature deployment cycles.",
      "Resolved critical front-end bottlenecks and optimized asset delivery, decreasing initial page load times by 20% and boosting overall application reliability.",
    ],
    techStack: ["JavaScript", "React", "Node.js", "HTML5", "CSS3", "REST APIs", "Git"],
  },
  {
    title: "E-commerce Web Developer & Store Administrator (Remote)",
    organization: "The London T",
    location: "Remote",
    period: "Mar 2023 – Present",
    type: "Part-time — ongoing during BSCS studies",
    bullets: [
      "Engineered custom Shopify e-commerce storefronts using advanced Liquid templating and JavaScript, enhancing UI/UX to increase average session duration and boost conversion rates by 15%.",
      "Streamlined end-to-end store administration and third-party API integrations, optimizing checkout workflows to reduce cart abandonment and accelerate page load speeds.",
    ],
    techStack: ["Shopify", "Liquid", "JavaScript", "HTML5", "CSS3", "Web Performance Optimization"],
  },
];

export const education: TimelineEntry[] = [
  {
    title: "Bachelor of Science in Computer Science (BSCS)",
    organization: "University of Lahore",
    location: "Pakistan",
    period: "2022 – 2026",
    bullets: [
      "Core coursework in Data Structures, Algorithms, OOP, Database Systems, Computer Networks, and Software Engineering Principles.",
      "Hands-on architectural focus on high-performance web systems and AI microcredentials.",
    ],
  },
  {
    title: "FSc (Pre-Engineering)",
    organization: "Punjab College",
    location: "Pakistan",
    period: "2020 – 2022",
    bullets: [
      "Advanced foundations in Mathematics, Physics, Analytical Reasoning, and Logical Problem Solving.",
    ],
  },
];

export const certifications: TimelineEntry[] = [
  {
    title: "Introduction to Artificial Intelligence",
    organization: "The University of Lahore — Centre for Microcredential-Based Skill Development",
    period: "Nov 2025",
    bullets: [
      "Microcredential certification covering fundamental AI algorithms, machine learning paradigms, and automated data processing.",
    ],
  },
  {
    title: "Python Web Development (36 Hours)",
    organization: "ICT Trainings",
    period: "Jan 2022",
    bullets: [
      "Intensive practical training in Python backend programming, data handling, and web application development.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Expert", highlight: true },
      { name: "Next.js", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Expert", highlight: true },
      { name: "JavaScript (ES6+)", level: "Expert", highlight: true },
      { name: "Framer Motion", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Expert" },
      { name: "Responsive UI/UX", level: "Expert" },
    ],
  },
  {
    name: "Backend & Systems",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Advanced", highlight: true },
      { name: "Express", level: "Advanced", highlight: true },
      { name: "ASP.NET Core", level: "Proficient", highlight: true },
      { name: "Python", level: "Advanced", highlight: true },
      { name: "C++", level: "Proficient" },
      { name: "RESTful APIs", level: "Expert", highlight: true },
      { name: "Entity Framework", level: "Proficient" },
    ],
  },
  {
    name: "Databases & Cloud",
    icon: "Database",
    skills: [
      { name: "Firebase", level: "Advanced", highlight: true },
      { name: "PostgreSQL", level: "Advanced", highlight: true },
      { name: "Relational DBs (SQL)", level: "Advanced" },
      { name: "NoSQL DBs", level: "Proficient" },
      { name: "Vercel / Netlify", level: "Expert" },
      { name: "Railway", level: "Proficient" },
    ],
  },
  {
    name: "Tools, Platforms & Architecture",
    icon: "Terminal",
    skills: [
      { name: "Shopify / Liquid", level: "Advanced", highlight: true },
      { name: "Git & GitHub", level: "Expert", highlight: true },
      { name: "Web Performance (95+)", level: "Expert", highlight: true },
      { name: "Binary APIs (ArrayBuffer)", level: "Advanced" },
      { name: "SEO Strategy", level: "Proficient" },
      { name: "Vite / Tooling", level: "Advanced" },
    ],
  },
];
