export interface ProfileData {
  name: string;
  role: string;
  avatarUrl: string;
  location: string;
  email: string;
  phone: string;
  status: string;
  tagline: string;
  summary: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  services: {
    title: string;
    description: string;
    icon: string;
    gradient: string;
  }[];
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Danish Khan",
  role: "Full-Stack Software Engineer",
  avatarUrl: "/bitmoji.png",
  location: "Islamabad, Pakistan",
  email: "danishmuhammad0990@gmail.com",
  phone: "+92-325-4334934",
  status: "Available for opportunities",
  tagline: "Full-Stack Software Engineer specializing in scalable web applications and seamless user experiences.",
  summary:
    "BSCS graduate and full stack software developer with hands-on experience building and shipping web applications across React, Node.js, Shopify, and ASP.NET Core. Comfortable owning a project end-to-end from database schema and REST API design to performance-tuned, responsive front ends with a track record of 95+ Lighthouse scores and sub-millisecond execution engines.",
  socials: {
    github: "https://github.com/Danishthinks",
    linkedin: "https://www.linkedin.com/in/daniishkhhan",
    email: "mailto:danishmuhammad0990@gmail.com",
  },
  services: [
    {
      title: "Frontend & Web Apps",
      description: "Crafting fluid, high-performance web applications using React, Next.js, TypeScript, and Tailwind CSS with 60 FPS animations.",
      icon: "Layout",
      gradient: "from-blue-500/20 to-cyan-500/20 text-blue-600",
    },
    {
      title: "Backend & Systems",
      description: "Architecting modular RESTful APIs, real-time data pipelines, and scalable services with Node.js, Express, and ASP.NET Core.",
      icon: "Server",
      gradient: "from-indigo-500/20 to-purple-500/20 text-indigo-600",
    },
    {
      title: "E-Commerce Architecture",
      description: "Engineering custom Shopify storefronts with Liquid & JavaScript, boosting conversion rates and cutting checkout friction.",
      icon: "ShoppingBag",
      gradient: "from-emerald-500/20 to-teal-500/20 text-emerald-600",
    },
    {
      title: "Performance & Precision",
      description: "Sub-millisecond latency optimizations, binary manipulation engines, memory profiling, and 95+ Lighthouse benchmarks.",
      icon: "Zap",
      gradient: "from-amber-500/20 to-orange-500/20 text-amber-600",
    },
  ],
  stats: [
    {
      label: "Lighthouse Score",
      value: "95+",
      description: "Optimized web performance & SEO",
    },
    {
      label: "Conversion Boost",
      value: "+15%",
      description: "Via streamlined UI/UX checkout flows",
    },
    {
      label: "Execution Latency",
      value: "<1ms",
      description: "Sub-millisecond high-precision timing",
    },
    {
      label: "Production Apps",
      value: "5+",
      description: "Shipped full-stack web platforms",
    },
  ],
};
