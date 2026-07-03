"use client";

import { ArrowUpRight, Sparkles, FolderGit2 } from "lucide-react";

import GlowCard from "./GlowCard";
import Badge from "./Badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export default function ProjectCard({
  title,
  description,
  technologies,
  highlights,
}: ProjectCardProps) {
  return (
    <GlowCard>
      <div className="mb-6 flex items-center justify-between">
        <Sparkles className="text-cyan-400" />

        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
          Production
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-5 leading-7 text-slate-300">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            text={tech}
          />
        ))}
      </div>

      <div className="mt-8 space-y-3">
        {highlights.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400" />

            <p className="text-slate-300">
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex gap-4">
        <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400">
          <FolderGit2 size={18} />
          GitHub
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-cyan-500 px-5 py-3 font-semibold text-cyan-300 hover:bg-cyan-500 hover:text-slate-950">
          <ArrowUpRight size={18} />
          Details
        </button>
      </div>
    </GlowCard>
  );
}