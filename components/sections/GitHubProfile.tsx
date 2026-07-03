"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function GitHubProfile() {
  return (
    <section
      id="github"
      className="bg-slate-950 py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="GITHUB"
          title="Open Source & Engineering"
          subtitle="My GitHub profile showcasing repositories, cloud projects and continuous learning."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-cyan-500/20 bg-slate-900 p-10"
        >

          <div className="flex flex-col items-center gap-8 md:flex-row">

            <img
              src="https://github.com/rajujena0.png"
              alt="Raju Jena"
              className="h-36 w-36 rounded-full border-4 border-cyan-500"
            />

            <div className="flex-1">

              <div className="flex items-center gap-3">

                <FaGithub
                  size={34}
                  className="text-cyan-400"
                />

                <h2 className="text-3xl font-bold text-white">
                  Raju Jena
                </h2>

              </div>

              <p className="mt-5 text-slate-300 leading-8">
                DevOps Engineer focused on AWS, Kubernetes,
                Docker, CI/CD, Infrastructure Automation and
                AI Model Deployment.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-4">

                <Stat
                  value="Cloud"
                  title="AWS"
                />

                <Stat
                  value="K8s"
                  title="Self Managed"
                />

                <Stat
                  value="AI"
                  title="GPU"
                />

                <Stat
                  value="DevOps"
                  title="Automation"
                />

              </div>

              <a
                href="https://github.com/rajujena0"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
              >
                <FaGithub />

                View GitHub

                <ExternalLink size={18} />
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

function Stat({
  value,
  title,
}: {
  value: string;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950 p-5 text-center">
      <h3 className="text-2xl font-bold text-cyan-400">
        {value}
      </h3>

      <p className="mt-2 text-slate-400">
        {title}
      </p>
    </div>
  );
}