import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danishk-portfolio.netlify.app"),
  title: {
    default: "Danish Khan | Odoo & Full Stack Developer",
    template: "%s",
  },
  description:
    "Odoo and full stack developer in Islamabad, Pakistan. Custom Odoo modules in Python and PostgreSQL, plus React, Node.js and ASP.NET Core web apps.",
  keywords: [
    "Danish Khan",
    "Odoo Developer",
    "Odoo ERP",
    "Odoo OWL",
    "Full Stack Developer",
    "Python",
    "PostgreSQL",
    "React",
    "Next.js",
    "Node.js",
    "ASP.NET Core",
    "Islamabad",
    "Portfolio",
  ],
  authors: [{ name: "Danish Khan" }],
  creator: "Danish Khan",
  alternates: {
    canonical: "https://danishk-portfolio.netlify.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danishk-portfolio.netlify.app",
    siteName: "Danish Khan Portfolio",
    title: "Danish Khan | Odoo & Full Stack Developer",
    description:
      "Odoo and full stack developer in Islamabad, Pakistan. Custom Odoo modules in Python and PostgreSQL, plus React, Node.js and ASP.NET Core web apps.",
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
  icons: {
    icon: "/bitmoji.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Danish Khan",
  jobTitle: "Odoo & Full Stack Developer",
  url: "https://danishk-portfolio.netlify.app",
  image: "https://danishk-portfolio.netlify.app/bitmoji.png",
  sameAs: [
    "https://github.com/Danishthinks",
    "https://www.linkedin.com/in/daniishkhhan",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Airblue",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "Pakistan",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
