"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import SectionTitle from "@/components/ui/SectionTitle";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "contact.rajujena@gmail.com",
    href: "mailto:contact.rajujena@gmail.com",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/rajujena0",
    href: "https://github.com/rajujena0",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/rajujena",
    href: "https://linkedin.com/in/rajujena",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="CONTACT"
          title="Let's Build Something Amazing"
          subtitle="Always interested in Cloud, DevOps, Kubernetes and AI Infrastructure opportunities."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-cyan-500/20 bg-slate-950 p-8"
              >
                <Icon
                  className="text-cyan-400"
                  size={34}
                />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-400 break-all">
                  {item.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            Ready to collaborate?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            I'm passionate about designing cloud-native platforms,
            automating infrastructure, deploying AI workloads, and
            solving complex DevOps challenges.
          </p>

          <a
            href="/resume/Raju_Jena_Final.pdf"
            download
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}