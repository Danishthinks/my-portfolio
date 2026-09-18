"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { User, FileText, Briefcase } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: "About", href: "/", icon: User },
  { name: "Resume", href: "/resume", icon: FileText },
  { name: "Projects", href: "/projects", icon: Briefcase },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 right-0 z-30 lg:rounded-tr-3xl lg:rounded-bl-3xl bg-slate-100/90 backdrop-blur-md border-b lg:border-l border-slate-200/80 px-4 py-3 md:px-8 md:py-4 shadow-sm w-full lg:w-auto flex justify-center lg:justify-end">
      <ul className="flex items-center gap-1 sm:gap-2">
        {navItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                className={`relative z-10 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-indigo-600 font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-indigo-600" : "text-slate-400"}`} />
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-xl shadow-sm border border-slate-200/70 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
