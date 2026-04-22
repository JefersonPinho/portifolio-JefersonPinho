"use client";

import { motion } from "framer-motion";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  const { ref, isInView } = useRevealAnimation();

  return (
    <section id="experience" className="py-24 lg:py-32">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-sm text-primary">
              04. Experiência
            </span>
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Histórico de trabalho
            <span className="text-primary">.</span>
          </h2>

          <div className="relative mt-12">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

            <div className="flex flex-col gap-0">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  className={`relative pb-12 pl-8 md:w-1/2 md:pl-0 ${
                    index % 2 === 0
                      ? "md:self-start md:pr-16"
                      : "md:ml-auto md:self-end md:pl-16"
                  }`}
                >
                  <div
                    className={`absolute top-1 h-3 w-3 rounded-full border-2 border-primary bg-background ${
                      index % 2 === 0
                        ? "left-[-5px] md:left-auto md:right-[-7px]"
                        : "left-[-5px] md:left-[-7px]"
                    }`}
                  >
                    {exp.current && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
                    )}
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <div className="mt-1 flex items-center gap-2">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-primary hover:underline"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            <span className="text-sm font-medium text-primary">
                              {exp.company}
                            </span>
                          )}
                          {exp.current && (
                            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="default">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
