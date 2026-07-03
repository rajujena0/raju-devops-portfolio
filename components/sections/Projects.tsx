"use client";

import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="Featured Engineering Projects"
          subtitle="Cloud, Kubernetes and AI infrastructure projects demonstrating production-ready DevOps practices."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
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