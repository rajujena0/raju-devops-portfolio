"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            Selected cloud, Kubernetes and AI infrastructure projects based on my professional experience and technical expertise.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-400 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-2">
                {project.highlights.map((item) => (
                  <p
                    key={item}
                    className="text-slate-400"
                  >
                    ✓ {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}