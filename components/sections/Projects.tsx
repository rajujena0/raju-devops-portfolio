"use client";

import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="PROJECTS"
          title="Featured Engineering Projects"
          subtitle="Cloud, Kubernetes and AI infrastructure projects demonstrating production-ready DevOps practices."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                highlights={project.highlights}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}