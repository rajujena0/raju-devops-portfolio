"use client";

import {
  Briefcase,
  Building2,
  Cloud,
  Cpu,
  GraduationCap,
  MapPin,
  Server,
  Workflow,
} from "lucide-react";

import { about } from "@/data/about";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  const icons = [
    Cloud,
    Server,
    Workflow,
    Cpu,
    Cloud,
    Workflow,
    Server,
    Cpu,
  ];

  return (
    <section
      id="about"
      className="bg-slate-950 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <Reveal>
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-4 text-5xl font-bold text-white">
              {about.title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              {about.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Main Content */}

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Left Card */}

          <Reveal direction="left">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">

              <h3 className="text-2xl font-bold text-white">
                Professional Summary
              </h3>

              <p className="mt-6 leading-8 text-slate-300">
                {about.summary}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {about.highlights.map((item, index) => {
                  const Icon = icons[index % icons.length];

                  return (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/60 p-4 transition hover:border-cyan-400"
                    >
                      <Icon
                        size={20}
                        className="text-cyan-400"
                      />

                      <span className="text-slate-200">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          </Reveal>

          {/* Right Card */}

          <Reveal direction="right" delay={0.2}>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8">

              <h3 className="text-2xl font-bold text-white">
                Quick Facts
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex items-center gap-4">
                  <Building2 className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-slate-400">
                      Current Company
                    </p>
                    <p className="font-semibold text-white">
                      Anvex AI Technology
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Briefcase className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-slate-400">
                      Current Role
                    </p>
                    <p className="font-semibold text-white">
                      DevOps Engineer
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <GraduationCap className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-slate-400">
                      Education
                    </p>
                    <p className="font-semibold text-white">
                      MCA • GIET University
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-slate-400">
                      Location
                    </p>
                    <p className="font-semibold text-white">
                      India
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-10 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-6">

                <h4 className="text-lg font-bold text-white">
                  Current Focus
                </h4>

                <p className="mt-4 leading-7 text-slate-300">
                  Building scalable Kubernetes platforms, deploying Large
                  Language Models using vLLM and Hugging Face, managing
                  NVIDIA GPU infrastructure, optimizing AWS cloud costs,
                  and automating production deployments.
                </p>

              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}