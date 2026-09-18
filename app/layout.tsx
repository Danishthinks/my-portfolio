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
  title: "Danish Khan — Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer specializing in scalable web applications, real-time data pipelines, and seamless user experiences.",
  keywords: [
    "Danish Khan",
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "ASP.NET Core",
    "Islamabad",
    "Portfolio",
  ],
  authors: [{ name: "Danish Khan" }],
  icons: {
    icon: "/bitmoji.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
