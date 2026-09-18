"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Car,
  Boxes,
  Timer,
  Binary,
  Gauge,
  Sparkles,
  Layers,
  LucideIcon,
} from "lucide-react";
import { ProjectItem } from "@/data/projects";

// Dynamic Lucide icon lookup map
const iconMap: Record<string, LucideIcon> = {
  Car,
  Boxes,
  Timer,
  Binary,
  Gauge,
  Sparkles,
  Layers,
};

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const IconComponent = iconMap[project.iconName] || Layers;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group bg-white rounded-3xl border border-slate-200/80 shadow-md shadow-slate-100/80 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col overflow-hidden h-full"
    >
      {/* Top "Cover" Section: Modern vibrant CSS gradient with large centered Lucide React icon */}
      <div
        className={`relative h-44 sm:h-48 w-full bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center overflow-hidden`}
      >
        {/* Decorative background grid/concentric rings */}
        <div className="absolute inset-0 bg-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/20 blur-xl group-hover:scale-125 transition-transform duration-500" />
        <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-black/10 blur-lg" />

        {/* Large Centered Lucide React Icon */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="relative z-10 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg text-white group-hover:shadow-2xl transition-all duration-300"
        >
          <IconComponent className="w-10 h-10 drop-shadow-md" />
        </motion.div>

        {/* Category Badge Pill */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-slate-800 shadow-sm border border-white/50">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content Section */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Subtitle / Focus */}
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            {project.subtitle}
          </p>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Key Bullet Highlights */}
          <ul className="pt-2 space-y-1.5 text-xs text-slate-500">
            {project.bullets.slice(0, 2).map((bullet, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                <span className="line-clamp-1">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button: Live Demo */}
          <div className="pt-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group/btn"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
