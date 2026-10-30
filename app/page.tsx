import type { Metadata } from "next";
import HomeView from "./HomeView";

export const metadata: Metadata = {
  title: "Danish Khan | Odoo & Full Stack Developer",
  description:
    "Odoo and full stack developer in Islamabad, Pakistan. Custom Odoo modules in Python and PostgreSQL, plus React, Node.js and ASP.NET Core web apps.",
  alternates: {
    canonical: "https://danishk-portfolio.netlify.app",
  },
  openGraph: {
    title: "Danish Khan | Odoo & Full Stack Developer",
    description:
      "Odoo and full stack developer in Islamabad, Pakistan. Custom Odoo modules in Python and PostgreSQL, plus React, Node.js and ASP.NET Core web apps.",
    url: "https://danishk-portfolio.netlify.app",
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
    title: "Danish Khan | Odoo & Full Stack Developer",
    description:
      "Odoo and full stack developer in Islamabad, Pakistan. Custom Odoo modules in Python and PostgreSQL, plus React, Node.js and ASP.NET Core web apps.",
    images: ["/bitmoji.png"],
  },
};

export default function HomePage() {
  return <HomeView />;
}
