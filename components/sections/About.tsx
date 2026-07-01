"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >

          <p className="font-semibold text-cyan-400">
            ABOUT ME
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Building Cloud Platforms,
            <br />
            not just Deployments.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-400">
            {portfolio.about.description}
          </p>

        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">

          {portfolio.expertise.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
            >
              <div className="flex items-center gap-4">

                <CheckCircle2 className="text-cyan-400" />

                <span className="text-lg">
                  {item}
                </span>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}