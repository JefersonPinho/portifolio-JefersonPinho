"use client";

import { motion, type Variants } from "framer-motion";
import type { IconType } from "react-icons";
import { FiCode, FiDatabase, FiTool } from "react-icons/fi";

import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

type SkillGroup = {
  icon: IconType;
  title: string;
  description: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    icon: FiCode,
    title: "Frontend",
    description:
      "Interfaces responsivas, componentes reutilizáveis e aplicações web modernas.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Material UI",
      "ShadCN UI",
      "Framer Motion",
      "React Hook Form",
    ],
  },
  {
    icon: FiDatabase,
    title: "Backend e dados",
    description:
      "APIs, autenticação, validações, regras de negócio e persistência de dados.",
    skills: [
      "Server Actions",
      "APIs REST",
      "Supabase",
      "PostgreSQL",
      "Prisma ORM",
      "NextAuth",
      "Zod",
    ],
  },
  {
    icon: FiTool,
    title: "Ferramentas",
    description:
      "Desenvolvimento, colaboração, publicação e integração de projetos.",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Figma",
      "Trello",
      "Google Maps API",
      "Loja Integrada",
      "eGestor",
    ],
  },
];

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

export function SkillsSection() {
  const { ref, isInView } = useRevealAnimation();

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
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
              02. Tecnologias
            </span>
          </motion.div>

          <div className="max-w-2xl">
            <motion.h2
              id="skills-title"
              variants={itemVariants}
              className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Tecnologias que fazem parte dos meus{" "}
              <span className="text-primary">projetos.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Ferramentas utilizadas no desenvolvimento de interfaces,
              plataformas SaaS, integrações e aplicações em produção.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="mt-10 grid gap-4 lg:grid-cols-3"
          >
            {skillGroups.map(({ icon: Icon, title, description, skills }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="h-full"
              >
                <Card
                  hover
                  className="group h-full border-border/70 bg-card/60 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                      <Icon
                        size={19}
                        aria-hidden="true"
                        className="text-primary"
                      />
                    </div>

                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-md border border-border/70 bg-background/50 px-2.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-primary"
                        />

                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
