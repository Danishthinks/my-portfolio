"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, Sparkles, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative pt-6 pb-10 md:py-12 overflow-visible">
      {/* Responsive Container: Stacked mobile (Bitmoji on top, text below) | Two-column desktop (Text left, Bitmoji right) */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Left Column: Greeting, Tagline, CTAs & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-100 text-indigo-700 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-spin-slow" />
            <span>Full-Stack Engineering & Scalable Web Apps</span>
          </div>

          {/* Heading / Greeting */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Hi, I&apos;m <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Danish Khan</span> 👋
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
              {profileData.tagline}
            </p>
          </div>

          {/* Quick Tech Highlights Badge Row */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
            {["React / Next.js", "Node.js & ASP.NET", "Tailwind CSS", "Shopify Liquid"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={profileData.socials.email}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-slate-500" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Floating Social Links */}
          <div className="pt-2 flex items-center justify-center md:justify-start gap-3">
            <span className="text-xs font-medium text-slate-400">Connect:</span>
            
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 hover:bg-white text-slate-600 hover:text-indigo-600 hover:shadow-md border border-slate-200/70 hover:border-indigo-200 transition-all duration-200"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 hover:bg-white text-slate-600 hover:text-blue-600 hover:shadow-md border border-slate-200/70 hover:border-blue-200 transition-all duration-200"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="p-2 rounded-xl bg-slate-100 hover:bg-white text-slate-600 hover:text-rose-600 hover:shadow-md border border-slate-200/70 hover:border-rose-200 transition-all duration-200"
              title="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Bitmoji Avatar with 3D shadow and glowing background blob */}
        <div className="relative w-full md:w-auto flex items-center justify-center shrink-0">
          
          {/* Decorative Glowing Blob behind the character */}
          <div
            className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-200 via-indigo-200 to-purple-200 blur-3xl opacity-40 pointer-events-none -z-10 animate-pulse-slow"
            aria-hidden="true"
          />

          {/* Secondary decorative accent circle */}
          <div
            className="absolute w-44 h-44 rounded-full bg-gradient-to-br from-pink-200 to-amber-100 blur-2xl opacity-30 pointer-events-none -z-10 translate-x-10 -translate-y-6"
            aria-hidden="true"
          />

          {/* Floating Bitmoji Wrapper: Continuously floats up and down ~15px on a smooth infinite loop */}
          <motion.div
            animate={{
              y: [-15, 15, -15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 select-none flex items-center justify-center"
          >
            {/* The Bitmoji image with drop-shadow-2xl so character casts a realistic 3D shadow */}
            {/* Visually overlaps and breaks out of the glowing blob for layered depth */}
            <div className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 max-w-full flex items-center justify-center">
              {/* Using standard img tag as specified in the prompt */}
              <img
                src="/bitmoji.png"
                alt="Danish Khan"
                className="w-auto h-full max-h-[360px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 pointer-events-auto"
              />
            </div>

            {/* Subtle floating badge at the bottom corner */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
              className="absolute -bottom-2 -left-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5 text-indigo-600" />
              <span className="text-xs font-bold text-slate-800 font-mono">Full-Stack Dev</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
