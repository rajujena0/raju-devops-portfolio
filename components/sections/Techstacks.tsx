"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const technologies = [
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
  { name: "Terraform", logo: "/logos/terraform.svg" },
  { name: "GitHub Actions", logo: "/logos/githubactions.svg" },
  { name: "GitLab CI/CD", logo: "/logos/gitlab.svg" },
  { name: "Linux", logo: "/logos/linux.svg" },
  { name: "Prometheus", logo: "/logos/prometheus.svg" },
  { name: "Grafana", logo: "/logos/grafana.svg" },
  { name: "NVIDIA", logo: "/logos/nvidia.svg" },
  { name: "Hugging Face", logo: "/logos/huggingface.svg" },
  { name: "Argo CD", logo: "/logos/argo.svg" },
];
export default function TechStack() {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            TECHNOLOGIES
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Cloud, DevOps & AI Stack
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Technologies I use daily to build cloud-native platforms,
            automate deployments and deploy AI applications.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">

          {technologies.map((tech) => (

            <motion.div
              key={tech.name}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 backdrop-blur-lg transition hover:border-cyan-400"
            >
              <div className="flex flex-col items-center">

                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={64}
                  height={64}
                />

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {tech.name}
                </h3>

              </div>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}