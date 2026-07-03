"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  icon: React.ReactNode;
}

export default function ArchitectureBox({ title, icon }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-52 rounded-2xl border border-cyan-500/20 bg-slate-900 p-6 text-center shadow-lg"
    >
      <div className="mb-4 flex justify-center text-4xl text-cyan-400">
        {icon}
      </div>

      <h3 className="font-semibold text-white">{title}</h3>
    </motion.div>
  );
}