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
      className="bg-slate-950 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Professional Journey
          </h2>

          <p className="mt-6 text-slate-400">
            My experience building scalable cloud infrastructure,
            Kubernetes platforms and AI deployment systems.
          </p>
        </div>

        <div className="relative border-l border-cyan-500/30 pl-10">
          {experiences.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-20"
            >
              <div className="absolute -left-[51px] top-4 h-6 w-6 rounded-full border-4 border-slate-950 bg-cyan-400"></div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-400">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {job.role}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-cyan-400">
                      <Building2 size={18} />
                      {job.company}
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-slate-400">
                      <Calendar size={16} />
                      {job.duration}
                    </div>
                  </div>

                  <Briefcase
                    size={48}
                    className="text-cyan-400"
                  />
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  {job.achievements.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3"
                    >
                      <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400"></div>

                      <p className="text-slate-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}