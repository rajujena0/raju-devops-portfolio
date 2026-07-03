"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { certifications } from "@/data/certifications";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section className="bg-slate-950 py-28 px-6">

      <div className="mx-auto max-w-5xl">

        <SectionTitle
          eyebrow="CERTIFICATIONS"
          title="Continuous Learning"
          subtitle="Certifications and technologies that strengthen my cloud, DevOps and AI engineering expertise."
        />

        <div className="relative mt-20 border-l-2 border-cyan-500/30">

          {certifications.map((cert, index) => (

            <motion.div
              key={cert.title}
              initial={{ opacity:0, x:-40 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ delay:index*.2 }}
              className="relative ml-10 mb-14"
            >

              <div className="absolute -left-[52px] rounded-full bg-cyan-500 p-3">

                <Award size={18} />

              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {cert.title}
                    </h3>

                    <p className="mt-2 text-cyan-400">
                      {cert.issuer}
                    </p>

                  </div>

                  <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">

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