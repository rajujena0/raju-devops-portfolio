"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -150, 120, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-blue-500/15 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -60, 120, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[120px]"
      />

    </div>
  );
}