export interface ProfileData {
  name: string;
  role: string;
  avatarUrl: string;
  location: string;
  email: string;
  phone: string;
  status: string;
  heroBadge: string;
  tagline: string;
  heroChips: string[];
  cornerBadge: string;
  aboutParagraphs: string[];
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
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const profileData: ProfileData = {
  name: "Danish Khan",
  role: "Odoo & Full Stack Developer",
  avatarUrl: "/bitmoji.png",
  location: "Islamabad, Pakistan",
  email: "danishmuhammad0990@gmail.com",
  phone: "+92-325-4334934",
  status: "Available for opportunities",
  heroBadge: "Odoo ERP and Full Stack Engineering",
  tagline:
    "I build custom Odoo modules in Python and PostgreSQL, and full stack web apps with React, Node.js and ASP.NET Core.",
  heroChips: [
    "Odoo ERP & OWL",
    "Python & PostgreSQL",
    "React / Next.js",
    "Node.js & ASP.NET Core",
  ],
  cornerBadge: "Odoo & Full Stack",
  aboutParagraphs: [
    "I'm a software developer based in Islamabad, Pakistan. I'm currently an intern in the MIS department at Airblue, where I build custom Odoo modules in Python, PostgreSQL, XML and OWL, along with internal web tools in React and Node.js.",
    "Before Odoo I worked mainly in React, Node.js and ASP.NET Core, and I still build with them. I've also run Shopify storefronts for The London T since 2023, so I'm used to both business software and customer facing web apps.",
  ],
  summary:
    "BSCS graduate working as an Odoo and full stack developer. I build custom Odoo modules in Python, PostgreSQL, XML and OWL, and web applications in React, Node.js and ASP.NET Core. Currently a software developer intern in the MIS department at Airblue.",
  socials: {
    github: "https://github.com/Danishthinks",
    linkedin: "https://www.linkedin.com/in/daniishkhhan",
    email: "mailto:danishmuhammad0990@gmail.com",
  },
  services: [
    {
      title: "Odoo ERP Development",
      description:
        "Custom Odoo modules in Python, XML, QWeb and OWL: helpdesk ticketing with SLA tracking, biometric attendance sync, multi tier leave approvals and role based access rules.",
      icon: "Layers",
      gradient: "from-purple-500/20 to-indigo-500/20 text-purple-600",
    },
    {
      title: "Frontend & Web Apps",
      description:
        "React, Next.js, TypeScript and Tailwind CSS, with Framer Motion for animation and 95+ Lighthouse scores.",
      icon: "Layout",
      gradient: "from-blue-500/20 to-cyan-500/20 text-blue-600",
    },
    {
      title: "Backend & APIs",
      description:
        "REST APIs in Node.js, Express and ASP.NET Core, backed by PostgreSQL, MySQL and Firebase.",
      icon: "Server",
      gradient: "from-indigo-500/20 to-purple-500/20 text-indigo-600",
    },
    {
      title: "Ecommerce",
      description:
        "Custom Shopify storefronts with Liquid and JavaScript, focused on conversion and checkout speed.",
      icon: "ShoppingBag",
      gradient: "from-emerald-500/20 to-teal-500/20 text-emerald-600",
    },
  ],
  stats: [
    {
      label: "Lighthouse Score",
      value: "95+",
      description: "Optimized web performance and SEO",
    },
    {
      label: "Conversion Boost",
      value: "+15%",
      description: "Via improved UI/UX and checkout flows",
    },
    {
      label: "Odoo Modules Built",
      value: "2",
      description: "Helpdesk and HRMS at Airblue",
    },
    {
      label: "Projects Built",
      value: "7",
      description: "Odoo, full stack and interactive apps",
    },
  ],
  cta: {
    title: "Want to see what I've built?",
    description:
      "Explore Odoo modules, full stack apps and interactive tools, from helpdesk and HR systems to AI stock forecasting and F1 telemetry.",
    buttonText: "Explore Projects",
  },
};
