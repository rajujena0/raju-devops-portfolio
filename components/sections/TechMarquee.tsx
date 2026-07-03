"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { techLogos } from "@/data/techLogos";

const logos = [...techLogos, ...techLogos];

export default function TechMarquee() {
  return (
    <section
  id="skills"
  className="relative overflow-hidden py-24"
>   

      {/* Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-slate-950 to-transparent" />

      <div className="container mx-auto px-6">

        <div className="mb-16 text-center">

          <p className="mb-3 uppercase tracking-[0.35em] text-cyan-400">
            TECHNICAL SKILLS
          </p>

          <h2 className="text-5xl font-bold text-white">
            Cloud, DevOps & AI Stack
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            Technologies I use to build scalable cloud infrastructure,
            Kubernetes platforms, AI systems and production DevOps pipelines.
          </p>

        </div>

      </div>

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max gap-8"
      >
        {logos.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="group flex h-44 w-64 shrink-0 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={70}
              height={70}
              className="transition-transform duration-500 group-hover:scale-110"
            />

            <h3 className="mt-6 text-xl font-semibold text-white">
              {item.name}
            </h3>

            <p className="mt-2 text-center text-sm text-slate-400">
              {item.description}
            </p>

          </div>
        ))}
      </motion.div>

    </section>
  );
}