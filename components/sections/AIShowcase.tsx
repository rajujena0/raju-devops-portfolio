"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiNvidia,
} from "react-icons/si";

const nodes = [
  {
    icon: <FaGithub size={28} />,
    title: "GitHub",
  },
  {
    icon: <FaDocker size={28} />,
    title: "Docker",
  },
  {
    icon: <SiKubernetes size={28} />,
    title: "Self Managed Kubernetes",
  },
  {
    icon: <SiNvidia size={28} />,
    title: "GPU Nodes",
  },
  {
    icon: "🤗",
    title: "Hugging Face + vLLM",
  },
  {
    icon: "🧠",
    title: "Qwen / Gemma Models",
  },
  {
    icon: <FaAws size={28} />,
    title: "AWS Infrastructure",
  },
];

export default function AIShowcase() {
  return (
    <section className="bg-slate-950 py-32 px-6">

      <div className="mx-auto max-w-7xl">

        <p className="text-cyan-400 font-semibold">
          AI INFRASTRUCTURE
        </p>

        <h2 className="text-5xl font-bold mt-3 text-white">
          Production AI Deployment Architecture
        </h2>

        <p className="mt-6 max-w-3xl text-slate-400 text-lg">
          A simplified representation of the deployment workflow
          I work with for GPU-powered AI applications.
        </p>

        <div className="mt-20 flex flex-col items-center">

          {nodes.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:index*.15 }}
              className="mb-6 w-full max-w-md rounded-2xl border border-cyan-500/20 bg-slate-900 p-6"
            >
              <div className="flex items-center gap-4">

                <div className="text-cyan-400">
                  {item.icon}
                </div>

                <h3 className="text-xl text-white font-semibold">
                  {item.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}