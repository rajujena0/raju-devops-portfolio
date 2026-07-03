"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { TypeAnimation } from "react-type-animation";
import { Circle } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl text-center"
      >
        <p className="mb-4 font-semibold text-cyan-400">
          👋 Welcome to my portfolio
        </p>
        <motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 backdrop-blur-md"
>
  <span className="relative flex h-3 w-3">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
    <Circle
      className="relative h-3 w-3 fill-emerald-400 text-emerald-400"
      strokeWidth={0}
    />
  </span>

  <span className="text-sm font-medium text-emerald-300">
    Available for Full-Time Opportunities
  </span>
</motion.div>

        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {portfolio.personal.name}
          </span>
        </h1>


        <div className="mt-8 flex justify-center">

  <TypeAnimation
    sequence={[
      "DevOps Engineer",
      2000,
      "Cloud Engineer",
      2000,
      "AI Infrastructure Engineer",
      2000,
      "Platform Engineer",
      2000,
      "Kubernetes Engineer",
      2000,
    ]}
    wrapper="span"
    speed={45}
    repeat={Infinity}
    className="text-2xl font-bold text-cyan-400 md:text-4xl"
  />

</div>
<div className="mt-6 flex flex-wrap justify-center gap-3">

  {[
    "AWS",
    "Kubernetes",
    "Docker",
    "Terraform",
    "GitHub Actions",
    "GPU AI",
  ].map((item) => (
    <span
      key={item}
      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
    >
      {item}
    </span>
  ))}

</div>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          {portfolio.personal.subtitle}
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-400"
          >
            View Projects
          </a>

          <a
            href="/resume/Raju_Jena_Final.pdf"
            download
            className="rounded-xl border border-cyan-500 px-7 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-slate-950"
          >
            Download Resume
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {portfolio.heroStats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
<h3 className="text-3xl font-bold text-cyan-400">
  <AnimatedCounter
  end={stat.end}
  duration={2000}
  decimals={stat.decimals}
  prefix={stat.prefix}
  suffix={stat.suffix}
/>
</h3>

              <p className="mt-2 text-sm text-slate-400">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}