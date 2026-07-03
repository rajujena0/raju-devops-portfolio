"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 1,
        delay: 1.4,
      }}
      className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"
    >
      <div className="text-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="mx-auto h-16 w-16 rounded-full border-4 border-cyan-500 border-t-transparent"
        />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-3xl font-bold text-white"
        >
          Raju Jena
        </motion.h1>

        <p className="mt-3 text-slate-400">
          DevOps • Cloud • AI Infrastructure
        </p>

      </div>
    </motion.div>
  );
}