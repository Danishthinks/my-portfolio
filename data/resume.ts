export interface TimelineEntry {
  title: string;
  organization: string;
  location?: string;
  period: string;
  type?: string;
  description?: string;
  bullets: string[];
  techStack?: string[];
  logo?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

export const experiences: TimelineEntry[] = [
  {
    title: "Software Developer Intern (MERN & Odoo)",
    organization: "Airblue",
    period: "Oct 2026 to Present",
    type: "Internship, Management Information Systems (MIS) Department",
    bullets: [
      "Work in the MIS department on internal software for Airblue's aviation operations, with custom web applications and Odoo modules.",
      "Web Development: Build internal tools with React.js and Node.js when a workflow needs more than the Odoo client.",
      "Odoo Development: Build and configure custom Odoo modules in Python, XML and OWL for helpdesk ticketing and HR attendance and leave management.",
      "Integrations: Connect Odoo to an email parsing API and to ZKTeco biometric devices through scheduled cron jobs.",
      "System Support: Work with the technical team to troubleshoot, maintain and improve the existing MIS systems.",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "JavaScript",
      "Odoo ERP",
      "Python",
      "PostgreSQL",
      "XML",
      "OWL",
    ],
    logo: "/airblue-logo.svg",
  },
  {
    title: "Full Stack Developer Intern",
    organization: "Iron Bridge Systems",
    period: "Jun 2025 to Aug 2025",
    type: "Internship, completed during BSCS studies",
    bullets: [
      "Built and maintained client web applications that scored 95+ on Lighthouse and worked across all major browsers.",
      "Organized the codebase into modular, reusable components, which cut technical debt and sped up delivery of new features.",
      "Fixed front end bottlenecks and optimized asset delivery, reducing initial page load time by 20%.",
    ],
    techStack: ["JavaScript", "React", "Node.js", "HTML5", "CSS3", "REST APIs", "Git"],
  },
  {
    title: "Shopify Developer and Website Administrator",
    organization: "The London T",
    location: "Remote",
    period: "Mar 2023 to Present",
    type: "Part Time (Remote)",
    bullets: [
      "Built custom Shopify storefronts with Liquid templating and JavaScript, improving UI/UX and lifting conversion rates by 15%.",
      "Manage store administration and third party API integrations, and reworked checkout workflows to reduce cart abandonment and page load time.",
    ],
    techStack: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Web Performance Optimization",
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    title: "Bachelor of Science in Computer Science (BSCS)",
    organization: "University of Lahore",
    location: "Pakistan",
    period: "2022 to 2026",
    bullets: [
      "Core coursework in Data Structures, Algorithms, OOP, Database Systems, Computer Networks, and Software Engineering Principles.",
      "Hands on architectural focus on high performance web systems and AI microcredentials.",
    ],
  },
  {
    title: "FSc (Pre Engineering)",
    organization: "Punjab College",
    location: "Pakistan",
    period: "2020 to 2022",
    bullets: [
      "Advanced foundations in Mathematics, Physics, Analytical Reasoning, and Logical Problem Solving.",
    ],
  },
];

export const certifications: TimelineEntry[] = [
  {
    title: "Introduction to Artificial Intelligence",
    organization:
      "The University of Lahore, Centre for Microcredential Based Skill Development",
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
    name: "Odoo ERP",
    icon: "Layers",
    skills: [
      { name: "Odoo Module Development", level: "Expert", highlight: true },
      { name: "Odoo ORM", level: "Expert", highlight: true },
      { name: "OWL", level: "Advanced", highlight: true },
      { name: "QWeb", level: "Advanced", highlight: true },
      { name: "XML RPC", level: "Advanced", highlight: true },
      { name: "Access Rights", level: "Expert" },
      { name: "Record Rules", level: "Expert" },
      { name: "Cron Jobs", level: "Advanced" },
    ],
  },
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
      { name: "C#", level: "Advanced", highlight: true },
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
      { name: "SQL", level: "Expert", highlight: true },
      { name: "MySQL Server", level: "Advanced" },
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
