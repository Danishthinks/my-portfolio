"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  ShoppingBag,
  Zap,
  ArrowRight,
  Sparkles,
  Layers,
  LucideIcon,
} from "lucide-react";
import Hero from "@/components/Hero";
import PageTransition from "@/components/PageTransition";
import { profileData } from "@/data/profile";

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  ShoppingBag,
  Zap,
  Layers,
};

export default function HomeView() {
  return (
    <PageTransition>
      <div className="space-y-12">
        {/* Hero Section */}
        <Hero />

        {/* About Summary Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              About Me
            </h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full max-w-[120px]" />
          </div>

          <div className="bg-slate-50/70 border border-slate-200/70 rounded-2xl p-5 sm:p-6 text-slate-600 leading-relaxed text-sm sm:text-base space-y-3">
            {profileData.aboutParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </motion.section>

        {/* Key Metrics / Highlights Bar */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {profileData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs text-center space-y-1 hover:border-indigo-200 hover:shadow-md transition-all duration-200 group"
            >
              <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                {stat.value}
              </p>
              <p className="text-xs font-bold text-slate-800">{stat.label}</p>
              <p className="text-[11px] text-slate-500 line-clamp-1">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.section>

        {/* What I'm Doing Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              What I&apos;m Doing
            </h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full max-w-[120px]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {profileData.services.map((service, index) => {
              const Icon = iconMap[service.icon] || Sparkles;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.gradient} flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-base font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Bottom Callout to Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-100 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              {profileData.cta.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              {profileData.cta.description}
            </p>
          </div>

          <Link
            href="/projects"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-md shadow-indigo-200 hover:shadow-lg transition-all group"
          >
            <span>{profileData.cta.buttonText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.section>
      </div>
    </PageTransition>
  );
}
