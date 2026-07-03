"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const stats = [
  {
    number: "50+",
    title: "Repositories",
  },
  {
    number: "500+",
    title: "Commits",
  },
  {
    number: "10+",
    title: "Cloud Projects",
  },
  {
    number: "99.9%",
    title: "Deployment Success",
  },
];

export default function GithubStats() {
  return (
    <section className="bg-slate-900 py-28 px-6">

      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="ENGINEERING"
          title="Building Reliable Platforms"
          subtitle="Focused on automation, Kubernetes, AI infrastructure and cloud-native engineering."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ delay:index*.15 }}
              viewport={{ once:true }}
              className="rounded-3xl border border-cyan-500/20 bg-slate-950 p-10 text-center"
            >

              <h2 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h2>

              <p className="mt-4 text-slate-300">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}