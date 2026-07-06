"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  FaCodeBranch,
  FaCloud,
  FaRocket,
} from "react-icons/fa";
import { GitCommitHorizontal } from "lucide-react";

const stats = [
  {
    end: 50,
    suffix: "+",
    title: "Repositories",
    icon: <FaCodeBranch />,
  },
  {
    end: 500,
    suffix: "+",
    title: "Commits",
    icon: <GitCommitHorizontal />,
  },
  {
    end: 10,
    suffix: "+",
    title: "Cloud Projects",
    icon: <FaCloud />,
  },
  {
    end: 99.9,
    suffix: "%",
    decimals: 1,
    title: "Deployment Success",
    icon: <FaRocket />,
  },
];

export default function GithubStats() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24 lg:py-28">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionTitle
          eyebrow="ENGINEERING"
          title="Building Reliable Platforms"
          subtitle="Focused on automation, Kubernetes, AI infrastructure and cloud-native engineering."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .12,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-950/80 p-8 backdrop-blur-xl transition-all duration-500"
            >

              {/* Hover Glow */}

              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

              </div>

              {/* Border */}

              <div className="absolute inset-0 rounded-3xl border border-transparent transition duration-500 group-hover:border-cyan-500/40" />

              <div className="relative z-10 text-center">

                {/* Icon */}

                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400 transition-all duration-500 group-hover:rotate-12 group-hover:scale-125">

                  {item.icon}

                </div>

                {/* Number */}

<h2 className="origin-center text-4xl font-extrabold text-white transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-400 sm:text-5xl">
  <AnimatedCounter
    end={item.end}
    duration={1800}
    decimals={item.decimals}
    suffix={item.suffix}
  />
</h2>

                {/* Title */}

                <p className="mt-4 text-base text-slate-400 transition-colors duration-500 group-hover:text-white">

                  {item.title}

                </p>

                {/* Animated Line */}

                <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}