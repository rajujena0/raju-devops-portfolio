"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export default function TechStack() {
  return (
    <section
      id="skills"
      className="bg-slate-900 px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <p className="font-semibold text-cyan-400">
          TECHNOLOGIES
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Cloud, DevOps & AI Stack
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-slate-400">
          Technologies I use to build scalable cloud platforms,
          automate deployments, and deploy AI applications.
        </p>

        <div className="mt-16 flex flex-wrap gap-5">

          {portfolio.technologies.map((tech) => (

            <motion.div
              key={tech}
              whileHover={{
                scale:1.08,
                y:-6
              }}
              className="rounded-xl border border-cyan-500/20 bg-slate-800 px-6 py-4 font-semibold text-cyan-300 shadow-lg transition"
            >
              {tech}
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}