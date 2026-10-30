import type { Metadata } from "next";
import ProjectsView from "./ProjectsView";

export const metadata: Metadata = {
  title: "Projects | Danish Khan, Odoo & Full Stack Developer",
  description:
    "Odoo and full stack developer in Islamabad, Pakistan. Custom Odoo modules in Python and PostgreSQL, plus React, Node.js and ASP.NET Core web apps.",
  alternates: {
    canonical: "https://danishk-portfolio.netlify.app/projects",
  },
  openGraph: {
    title: "Projects | Danish Khan, Odoo & Full Stack Developer",
    description:
      "Odoo and full stack developer in Islamabad, Pakistan. Custom Odoo modules in Python and PostgreSQL, plus React, Node.js and ASP.NET Core web apps.",
    url: "https://danishk-portfolio.netlify.app/projects",
    images: [
      {
        url: "/bitmoji.png",
        width: 800,
        height: 800,
        alt: "Danish Khan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Danish Khan, Odoo & Full Stack Developer",
    description:
      "Odoo and full stack developer in Islamabad, Pakistan. Custom Odoo modules in Python and PostgreSQL, plus React, Node.js and ASP.NET Core web apps.",
    images: ["/bitmoji.png"],
  },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
