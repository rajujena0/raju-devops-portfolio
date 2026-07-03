"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  icon: React.ReactNode;
}

export default function ArchitectureNode({
  title,
  icon,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -4,
      }}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      className="group relative flex flex-col items-center"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-500/30 bg-slate-900 shadow-lg transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-cyan-500/20">
        {icon}
      </div>

      <p className="mt-3 text-center text-sm font-semibold text-slate-300">
        {title}
      </p>
    </motion.div>
  );
}