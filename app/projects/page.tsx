import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/sections/projects/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    " Uma coleção de aplicações web e produtos digitais que eu construí.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pb-24 pt-32">
      <Container>
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-12 bg-primary" />
          <span className="font-mono text-sm text-primary">
            Todos os Projetos
          </span>
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Tudo que eu construí
          <span className="text-primary">.</span>
        </h1>

        <p className="mt-4 max-w-xl text-muted-foreground">
          Uma lista completa de projetos — desde trabalho freelance até projetos
          paralelos e contribuições de código aberto.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </div>
  );
}
