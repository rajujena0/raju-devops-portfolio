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
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

import {
  GitBranch,
  Cpu,
  Server,
  Activity,
  Database,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";

import ArchitectureBox from "@/components/architecture/ArchitectureBox";
import ArchitectureArrow from "@/components/architecture/ArchitectureArrow";
import ArchitectureCluster from "@/components/architecture/ArchitectureCluster";
import ArchitectureLabel from "@/components/architecture/ArchitectureLabel";

export default function AIShowcase() {
  return (
    <section
      id="architecture"
      className="bg-slate-900 py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="AI INFRASTRUCTURE"
          title="Production AI Deployment Architecture"
          subtitle="Representative architecture based on the technologies I use for deploying AI inference workloads."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <div className="flex flex-col items-center">

            <ArchitectureBox
              title="GitHub Repository"
              icon={<FaGithub />}
            />

            <ArchitectureArrow />

            <ArchitectureBox
              title="GitHub Actions CI/CD"
              icon={<GitBranch />}
            />

            <ArchitectureArrow />

            <ArchitectureBox
              title="Docker Build"
              icon={<FaDocker />}
            />

            <ArchitectureArrow />

            <ArchitectureBox
              title="AWS Infrastructure"
              icon={<FaAws />}
            />

            <ArchitectureArrow />

            <ArchitectureCluster title="Self Managed Kubernetes Cluster">

              <div className="grid gap-6 md:grid-cols-2">

                <ArchitectureBox
                  title="NGINX Ingress"
                  icon={<SiKubernetes />}
                />

                <ArchitectureBox
                  title="API Gateway"
                  icon={<Server />}
                />

                <ArchitectureBox
                  title="vLLM Inference"
                  icon={<Cpu />}
                />

                <ArchitectureBox
                  title="Hugging Face"
                  icon={<Database />}
                />

              </div>

            </ArchitectureCluster>

            <ArchitectureArrow />

            <ArchitectureBox
              title="NVIDIA GPU Nodes"
              icon={<SiNvidia />}
            />

            <ArchitectureArrow />

            <ArchitectureBox
              title="Qwen / Gemma Models"
              icon={"🧠"}
            />

          </div>

        </motion.div>

        <div className="mt-16">

          <ArchitectureLabel>
            Monitoring Stack
          </ArchitectureLabel>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <ArchitectureBox
              title="Prometheus"
              icon={<SiPrometheus />}
            />

            <ArchitectureBox
              title="Grafana"
              icon={<SiGrafana />}
            />

          </div>

        </div>

        <div className="mt-16 rounded-3xl border border-cyan-500/20 bg-slate-950 p-10">

          <h3 className="text-2xl font-bold text-white">
            Current Responsibilities
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {[
              "Deploying GPU-based AI models on AWS",
              "Managing Self-Managed Kubernetes clusters",
              "Deploying Hugging Face & vLLM inference servers",
              "Working with NVIDIA A100, L40 and L40S GPUs",
              "Optimizing AWS cloud costs",
              "Automating CI/CD pipelines",
              "Containerizing workloads with Docker",
              "Monitoring production systems using Prometheus & Grafana",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-slate-900 p-4 text-slate-300"
              >
                ✓ {item}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}