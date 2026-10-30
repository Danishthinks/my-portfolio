"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Code,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Download,
  Calendar,
  CheckCircle2,
  Sparkles,
  Layers,
  Layout,
  Server,
  Database,
  Terminal,
  LucideIcon,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import {
  experiences,
  education,
  certifications,
  skillCategories,
} from "@/data/resume";
import { profileData } from "@/data/profile";

const skillIconMap: Record<string, LucideIcon> = {
  Layers,
  Layout,
  Server,
  Database,
  Terminal,
};

export default function ResumeView() {
  return (
    <PageTransition>
      <div className="space-y-12">
        {/* Page Title & Resume Header */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Resume
              </h1>
              <div className="h-1 flex-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full max-w-[140px]" />
            </div>

            {/* Download Resume Button */}
            <a
              href="/Danish_Khan_Resume.pdf"
              download="Danish_Khan_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-200 self-start sm:self-auto group"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Web Resume Identity Banner */}
          <div className="bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {profileData.name}
                </h2>
                <p className="text-indigo-600 font-semibold text-base sm:text-lg mt-0.5">
                  {profileData.role}
                </p>
                <p className="text-slate-600 text-sm mt-2 max-w-2xl leading-relaxed">
                  {profileData.summary}
                </p>
              </div>

              {/* Quick Contact Badges */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 text-xs text-slate-600">
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200/70 shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200/70 shadow-xs">
                  <Mail className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <a
                    href={`mailto:${profileData.email}`}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {profileData.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200/70 shadow-xs">
                  <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{profileData.phone}</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200/70 shadow-xs">
                  <Github className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 font-medium transition-colors"
                  >
                    GitHub Profile
                  </a>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200/70 shadow-xs">
                  <Linkedin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 font-medium transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-xs">
              <Briefcase className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Work Experience
            </h2>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-8 ml-4">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node dot */}
                <div className="absolute -left-6 sm:-left-8 -translate-x-1/2 -ml-[1px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 group-hover:scale-125 transition-transform" />

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all duration-200 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-sm font-semibold text-indigo-600">
                          {exp.organization}
                          {exp.location && (
                            <span className="text-slate-400 font-normal">
                              {" "}
                              • {exp.location}
                            </span>
                          )}
                        </p>
                        {exp.logo && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/80 shadow-xs">
                            <img
                              src={exp.logo}
                              alt={exp.organization}
                              className="h-3.5 sm:h-4 w-auto object-contain"
                            />
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full shrink-0 mt-1 sm:mt-0 w-fit">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {exp.type && (
                    <p className="text-xs italic text-slate-500">{exp.type}</p>
                  )}

                  <ul className="space-y-2 text-sm text-slate-600 pt-1">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.techStack && (
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-semibold text-slate-400 mr-1">
                        Tech Stack:
                      </span>
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Education
            </h2>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-6 ml-4">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node dot */}
                <div className="absolute -left-6 sm:-left-8 -translate-x-1/2 -ml-[1px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-purple-600 group-hover:scale-125 transition-transform" />

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-purple-200 transition-all duration-200 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {edu.title}
                      </h3>
                      <p className="text-sm font-semibold text-purple-600">
                        {edu.organization}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full shrink-0 w-fit">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {edu.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-sm text-slate-600 pt-1">
                    {edu.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all duration-200 space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-900">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full shrink-0">
                    {cert.period}
                  </span>
                </div>
                <p className="text-xs font-semibold text-indigo-600">
                  {cert.organization}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cert.bullets[0]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shadow-xs">
              <Code className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Technical Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => {
              const Icon = skillIconMap[category.icon] || Sparkles;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-all duration-200 space-y-4"
                >
                  <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-indigo-500" />
                    <span>{category.name}</span>
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          skill.highlight
                            ? "bg-indigo-50 text-indigo-700 border border-indigo-200/80 shadow-xs hover:bg-indigo-100"
                            : "bg-slate-100 text-slate-700 border border-slate-200/70 hover:bg-slate-200/70"
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
