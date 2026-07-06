"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { certifications } from "@/data/certifications";
import { Award } from "lucide-react";
import { fadeUp } from "@/components/ui/animations";

export default function Certifications() {
  return (
    <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

      <div className="mx-auto w-full max-w-5xl">

        <SectionTitle
          eyebrow="CERTIFICATIONS"
          title="Continuous Learning"
          subtitle="Certifications and technologies that strengthen my cloud, DevOps and AI engineering expertise."
        />

        <div className="relative mt-16 border-l-2 border-cyan-500/30 sm:mt-20">

          {certifications.map((cert, index) => (

            <motion.div
  key={cert.title}
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: false,
    amount: 0.25,
  }}
  transition={{
    duration: 0.7,
    delay: index * 0.12,
  }}
  className="relative ml-8 mb-10 sm:ml-10 sm:mb-14"
>

              <div className="absolute -left-[42px] rounded-full bg-cyan-500 p-2.5 shadow-lg shadow-cyan-500/30 sm:-left-[52px] sm:p-3">
                <Award size={18} />

              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 sm:p-8">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {cert.title}
                    </h3>

                    <p className="mt-2 text-cyan-400">
                      {cert.issuer}
                    </p>

                  </div>

                  <span className="mt-4 inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 sm:mt-0">

                    {cert.year}

                  </span>

                </div>

                <p className="mt-6 text-slate-300">

                  {cert.status}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}