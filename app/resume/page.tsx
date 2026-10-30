import type { Metadata } from "next";
import ResumeView from "./ResumeView";

export const metadata: Metadata = {
  title: "Resume | Danish Khan, Odoo & Full Stack Developer",
  description:
    "Odoo and full stack developer in Islamabad, Pakistan. Custom Odoo modules in Python and PostgreSQL, plus React, Node.js and ASP.NET Core web apps.",
  alternates: {
    canonical: "https://danishk-portfolio.netlify.app/resume",
  },
  openGraph: {
    title: "Resume | Danish Khan, Odoo & Full Stack Developer",
    description:
      "Odoo and full stack developer in Islamabad, Pakistan. Custom Odoo modules in Python and PostgreSQL, plus React, Node.js and ASP.NET Core web apps.",
    url: "https://danishk-portfolio.netlify.app/resume",
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
    title: "Resume | Danish Khan, Odoo & Full Stack Developer",
    description:
      "Odoo and full stack developer in Islamabad, Pakistan. Custom Odoo modules in Python and PostgreSQL, plus React, Node.js and ASP.NET Core web apps.",
    images: ["/bitmoji.png"],
  },
};

export default function ResumePage() {
  return <ResumeView />;
}
