"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { BriefcaseBusiness } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <p className="text-cyan-400 font-semibold">
          EXPERIENCE
        </p>

        <h2 className="mt-3 text-5xl font-bold text-white">
          Professional Journey
        </h2>

        <div className="mt-16">

          {portfolio.experience.map((job) => (

            <motion.div
              key={job.company}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:.6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-cyan-500/20 p-3">
                  <BriefcaseBusiness className="text-cyan-400"/>
                </div>

                <div>

                  <h3 className="text-3xl font-bold text-white">
                    {job.role}
                  </h3>

                  <p className="text-cyan-400 mt-1">
                    {job.company}
                  </p>

                  <p className="text-slate-500">
                    {job.duration}
                  </p>

                </div>

              </div>

              <div className="mt-10 space-y-5">

                {job.achievements.map((item)=>(

                  <div
                    key={item}
                    className="flex gap-4 rounded-xl bg-slate-900/70 p-4"
                  >

                    <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400"/>

                    <p className="text-slate-300">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}