"use client";

import { motion, type Variants } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { Container } from "@/components/layout/container";
import { experiences } from "@/data/experience";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

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
      staggerChildren: 0.1,
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

export function ExperienceSection() {
  const { ref, isInView } = useRevealAnimation();

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
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
              04. Experiência
            </span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.h2
              id="experience-title"
              variants={itemVariants}
              className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Experiência em produtos e{" "}
              <span className="text-primary">projetos reais.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Atuação em plataformas SaaS, sistemas de gestão e projetos para
              empresas, trabalhando com interfaces, regras de negócio,
              integrações e funcionalidades de backend.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="mt-12 divide-y divide-border/70 border-y border-border/70"
          >
            {experiences.map((experience) => (
              <motion.article
                key={experience.id}
                variants={itemVariants}
                className="group grid gap-5 py-8 md:grid-cols-[180px_1fr] md:gap-12 lg:py-10"
              >
                <div>
                  <span className="font-mono text-sm text-muted-foreground">
                    {experience.period}
                  </span>

                  {experience.current && (
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary"
                        />
                        Atual
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {experience.role}
                      </h3>

                      {experience.companyUrl ? (
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Acessar ${experience.company}`}
                          className="group/link mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                        >
                          {experience.company}

                          <FiArrowUpRight
                            size={14}
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </a>
                      ) : (
                        <span className="mt-1 block text-sm font-semibold text-primary">
                          {experience.company}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-border/70 bg-card/50 px-2.5 py-1.5 text-xs font-medium text-foreground transition-colors group-hover:border-border"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
