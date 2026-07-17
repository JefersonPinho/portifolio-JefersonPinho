"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import { Container } from "@/components/layout/container";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { projects } from "@/data/projects";

import { ProjectCard } from "./project-card";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function ProjectsSection() {
  const { ref, isInView } = useRevealAnimation();

  const selectedProjects = projects.slice(0, 6);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-24 lg:py-28"
    >
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 flex items-center gap-3"
          >
            <span aria-hidden="true" className="h-px w-12 bg-primary" />

            <span className="font-mono text-sm font-medium text-primary">
              03. Projetos
            </span>
          </motion.div>

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <motion.div variants={itemVariants} className="max-w-3xl">
              <h2
                id="projects-title"
                className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
              >
                Projetos desenvolvidos para{" "}
                <span className="text-primary">necessidades reais.</span>
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Uma seleção de plataformas SaaS, sistemas de gestão, sites
                institucionais e e-commerces desenvolvidos para empresas,
                organizações e operações reais.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 transition-colors hover:text-primary/80"
              >
                Ver todos os projetos
                <FiArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {selectedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
