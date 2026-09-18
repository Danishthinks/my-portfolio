"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Filter, Sparkles } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";
import { projectsData, ProjectItem } from "@/data/projects";

type CategoryFilter = "All" | "Full-Stack" | "Frontend & Interactive" | "Systems & Utilities";

const categories: CategoryFilter[] = [
  "All",
  "Full-Stack",
  "Frontend & Interactive",
  "Systems & Utilities",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Featured Projects
              </h1>
              <div className="h-1 flex-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full max-w-[140px]" />
            </div>
            <p className="text-slate-600 text-sm">
              Production web applications, interactive simulators, and specialized full-stack systems.
            </p>
          </div>

          {/* Project Counter Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700 self-start sm:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>{projectsData.length} Platforms Built</span>
          </div>
        </div>

        {/* Category Filter Pills (Matches bisma-shahid design) */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-indigo-600 font-bold bg-white shadow-sm border border-slate-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                }`}
              >
                <span>{cat}</span>
                {isActive && (
                  <motion.div
                    layoutId="category-active-pill"
                    className="absolute inset-0 bg-white rounded-xl border border-indigo-200/80 -z-10 shadow-xs"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Responsive CSS Grid of Premium Project Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageTransition>
  );
}
