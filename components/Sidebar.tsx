"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ChevronDown,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="w-full lg:w-80 shrink-0">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-6 md:p-8 transition-all duration-300 relative overflow-hidden">
        {/* Subtle decorative top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

        {/* Profile Card Header */}
        <div className="flex flex-col items-center text-center">
          {/* Avatar Container */}
          <div className="relative mb-5 group">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl bg-gradient-to-tr from-slate-100 to-indigo-50/60 p-2 flex items-center justify-center border border-slate-200/60 shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-2xl group-hover:scale-105 transition-transform duration-300" />
              <div className="relative w-full h-full">
                <Image
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  fill
                  className="object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Online Status Pill */}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-emerald-200 rounded-full shadow-sm text-[11px] font-medium text-emerald-700 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to work
            </span>
          </div>

          {/* Name & Title */}
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
            {profileData.name}
          </h1>

          <div className="mt-2 inline-flex items-center px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium text-xs tracking-wide border border-slate-200/70">
            {profileData.role}
          </div>

          {/* Mobile Accordion Toggle Button (Matches bisma-shahid design) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100/70 border border-indigo-100 transition-colors"
          >
            <span>{isOpen ? "Hide Contacts" : "Show Contacts"}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Contact Information & Socials */}
        <div
          className={`lg:block ${isOpen ? "block mt-6" : "hidden lg:mt-6"}`}
        >
          <div className="border-t border-slate-100 my-5" />

          <ul className="space-y-4 text-sm">
            {/* Email Item */}
            <li className="flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center shrink-0 text-indigo-600 shadow-sm group-hover:bg-indigo-50 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden flex-1">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Email
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-slate-700 hover:text-indigo-600 font-medium truncate text-xs transition-colors"
                    title={profileData.email}
                  >
                    {profileData.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="text-slate-400 hover:text-slate-600 p-0.5 rounded transition-colors"
                    title="Copy Email"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </li>

            {/* Phone Item */}
            <li className="flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center shrink-0 text-emerald-600 shadow-sm group-hover:bg-emerald-50 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div className="overflow-hidden flex-1">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Phone
                </p>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-slate-700 hover:text-emerald-600 font-medium text-xs transition-colors block mt-0.5"
                >
                  {profileData.phone}
                </a>
              </div>
            </li>

            {/* Location Item */}
            <li className="flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center shrink-0 text-rose-500 shadow-sm group-hover:bg-rose-50 transition-colors">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="overflow-hidden flex-1">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Location
                </p>
                <p className="text-slate-700 font-medium text-xs mt-0.5">
                  {profileData.location}
                </p>
              </div>
            </li>
          </ul>

          <div className="border-t border-slate-100 my-5" />

          {/* Social Links Row */}
          <div className="flex items-center justify-center gap-3">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:bg-white hover:border-indigo-200 hover:shadow-md transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={profileData.socials.email}
              aria-label="Send Email"
              className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-rose-600 hover:bg-white hover:border-rose-200 hover:shadow-md transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
