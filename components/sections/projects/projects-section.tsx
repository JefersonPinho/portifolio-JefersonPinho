"use client";

import { motion } from "framer-motion";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "./project-card";
import { projects } from "@/data/projects";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export function ProjectsSection() {
  const { ref, isInView } = useRevealAnimation();

  return (
    <section id="projects" className="py-24 lg:py-32">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-sm text-primary">03. Projetos</span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Trabalho selecionado
                <span className="text-primary">.</span>
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                sunt provident perferendis officia ex omnis explicabo.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Ver todos os projetos <FiArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
