"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 bg-dot-pattern relative selection:bg-indigo-100 selection:text-indigo-900">
      {/* Soft ambient gradient orbs in background */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="fixed bottom-10 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Main Responsive Grid: Two-column layout on desktop, stacked on mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
        
        {/* Left Persistent Sidebar */}
        <Sidebar />

        {/* Right Main Content Card */}
        <main className="flex-1 w-full bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-6 sm:p-8 md:p-10 relative min-h-[850px] flex flex-col justify-between overflow-hidden">
          
          {/* Top Floating Navbar matching bisma-shahid aesthetic */}
          <Navbar />

          {/* Page Content with top spacing for floating navbar */}
          <div className="pt-16 lg:pt-12 flex-1 flex flex-col">
            {children}
          </div>

          {/* Minimalist Footer */}
          <footer className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Danish Khan. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              <span>Designed & Built with</span>
              <span className="text-indigo-600 font-semibold">Next.js</span>
              <span>&</span>
              <span className="text-purple-600 font-semibold">Framer Motion</span>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
