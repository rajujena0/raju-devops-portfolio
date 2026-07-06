"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Anvex AI Technology",
    role: "DevOps Engineer",
    duration: "May 2026 – Present",
    technologies: [
      "AWS",
      "Self-managed Kubernetes",
      "GPU Infrastructure",
      "Docker",
      "vLLM",
      "Hugging Face",
      "NVIDIA",
      "Qwen",
      "Gemma",
    ],
    achievements: [
      "Deploy AI/LLM models on GPU-backed cloud infrastructure.",
      "Configure NVIDIA GPU servers for high-performance AI inference.",
      "Deploy containerized microservices using Docker and Kubernetes.",
      "Optimize AWS GPU instance selection for maximum cost efficiency.",
      "Deploy Hugging Face Transformer models using vLLM.",
      "Automate infrastructure provisioning and deployments.",
    ],
  },
  {
    company: "ApMoSys Technology",
    role: "Cloud Engineer",
    duration: "Jul 2024 – Apr 2026",
    technologies: [
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Linux",
      "NGINX",
      "Prometheus",
      "Grafana",
    ],
    achievements: [
      "Built AWS infrastructure using Terraform.",
      "Designed CI/CD pipelines with GitHub Actions.",
      "Managed Kubernetes production workloads.",
      "Implemented monitoring using Prometheus and Grafana.",
      "Optimized cloud infrastructure for security and reliability.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center lg:mb-20">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            EXPERIENCE
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Professional Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            My experience building scalable cloud infrastructure,
            Kubernetes platforms and AI deployment systems.
          </p>
        </div>

        <div className="relative border-l border-cyan-500/30 pl-6 sm:pl-10">

          {experiences.map((job, index) => (

            <motion.div
              key={job.company}
              initial={{
                opacity: 0,
                x: -60,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="relative mb-16 lg:mb-20"
            >

              {/* Timeline Dot */}

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="absolute -left-[34px] top-6 h-5 w-5 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-400/50 sm:-left-[51px] sm:h-6 sm:w-6"
              />

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/60 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] sm:p-8"
              >

                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                  <div>

                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {job.role}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-cyan-400">
                      <Building2 size={18} />
                      {job.company}
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-slate-400">
                      <Calendar size={16} />
                      {job.duration}
                    </div>

                  </div>

                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                  >
                    <Briefcase
                      size={48}
                      className="text-cyan-400"
                    />
                  </motion.div>

                </div>

                {/* Tech Stack */}

                <div className="mt-8 flex flex-wrap gap-3">

                  {job.technologies.map((tech) => (

                    <motion.span
                      key={tech}
                      whileHover={{
                        y: -3,
                        scale: 1.05,
                      }}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition-colors hover:bg-cyan-500/20"
                    >
                      {tech}
                    </motion.span>

                  ))}

                </div>

                {/* Achievements */}

                <div className="mt-8 space-y-4">

                  {job.achievements.map((item, i) => (

                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: false,
                      }}
                      transition={{
                        delay: i * 0.08,
                      }}
                      className="flex gap-3"
                    >

                      <motion.div
                        whileHover={{
                          scale: 1.6,
                        }}
                        className="mt-2 h-2 w-2 rounded-full bg-cyan-400"
                      />

                      <p className="text-slate-300">
                        {item}
                      </p>

                    </motion.div>

                  ))}

                </div>

              </motion.div>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}