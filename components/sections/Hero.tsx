"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { TypeAnimation } from "react-type-animation";
import { Circle } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
  return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 pt-24 pb-16 sm:px-6 md:px-8 lg:px-12 xl:px-16">      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto w-full max-w-7xl text-center px-2"
      >
        <p className="mb-4 text-sm font-semibold text-cyan-400 sm:text-base">
          👋 Welcome to my portfolio
        </p>
        <motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-center backdrop-blur-md sm:px-4"
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

        <h1 className="
text-4xl
font-extrabold
leading-tight tracking-tight
sm:text-5xl
md:text-6xl
xl:text-7xl
2xl:text-8xl
">
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
    className="
text-xl
font-bold
text-cyan-400
sm:text-2xl
md:text-3xl
lg:text-4xl
"
  />

</div>
<div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">

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
      className="
rounded-full
border
border-cyan-500/30
bg-cyan-500/10
px-3
py-2
text-xs
font-medium
text-cyan-300
sm:px-4
sm:text-sm
"
    >
      {item}
    </span>
  ))}

</div>

        <p className="
mx-auto
mt-6
max-w-4xl
px-2
text-base
leading-7
text-slate-400
sm:text-lg
">
          {portfolio.personal.subtitle}
        </p>

        {/* CTA */}
        <div className="
mt-10
flex
w-full
flex-col
items-center
justify-center
gap-4
sm:flex-row
">
          <a
            href="#projects"
            className="
w-full
rounded-xl
bg-cyan-500
px-7
py-3
text-center
font-semibold
text-slate-950
transition-all
duration-300
hover:scale-105
hover:bg-cyan-400
sm:w-auto
"
          >
            View Projects
          </a>

          <a
            href="/resume/Raju_Jena_Final.pdf"
            download
            className="
w-full
rounded-xl
border
border-cyan-500
px-7
py-3
text-center
font-semibold
text-cyan-400
transition-all
duration-300
hover:bg-cyan-500
hover:text-slate-950
sm:w-auto
"
          >
            Download Resume
          </a>
        </div>

        {/* Stats */}
        {/* Stats */}
<div
  className="
mt-14
grid
grid-cols-1
gap-4
sm:grid-cols-2
lg:grid-cols-4
sm:gap-5
"
>
  {portfolio.heroStats.map((stat, index) => (
    <motion.div
      key={stat.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="
rounded-2xl
border
border-white/10
bg-white/5
p-5
backdrop-blur-md
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400/40
hover:bg-white/10
"
    >
      <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
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
    </motion.div>
  ))}
</div>
      </motion.div>
    </section>
  );
}