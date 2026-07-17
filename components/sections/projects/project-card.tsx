"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const visibleTechnologies = project.technologies.slice(0, 6);
  const remainingTechnologies =
    project.technologies.length - visibleTechnologies.length;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="relative h-52 w-full overflow-hidden bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Interface do projeto ${project.title}`}
            fill
            priority={index < 2}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10">
            <span className="font-display text-5xl font-bold text-primary/20">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"
        />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          {project.featured && (
            <span className="rounded-md border border-primary/20 bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
              Destaque
            </span>
          )}

          <span className="rounded-md border border-white/10 bg-background/80 px-2.5 py-1 font-mono text-xs text-foreground backdrop-blur-md">
            {project.year}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-tight text-foreground">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {visibleTechnologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-border/70 bg-background/50 px-2.5 py-1.5 text-xs font-medium text-foreground"
            >
              {technology}
            </span>
          ))}

          {remainingTechnologies > 0 && (
            <span className="rounded-md border border-border/70 bg-background/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground">
              +{remainingTechnologies}
            </span>
          )}
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-border/70 pt-5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acessar o projeto ${project.title}`}
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Ver projeto
                <FiExternalLink
                  size={14}
                  aria-hidden="true"
                  className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver o código do projeto ${project.title} no GitHub`}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <FiGithub size={15} aria-hidden="true" />
                Código
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
