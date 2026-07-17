"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FiCode, FiDatabase, FiLayers } from "react-icons/fi";

import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const highlights = [
  {
    icon: FiLayers,
    title: "Produtos SaaS",
    description:
      "Experiência com dashboards, CRMs e sistemas de gestão aplicados a operações reais.",
  },
  {
    icon: FiCode,
    title: "Frontend e backend",
    description:
      "Interfaces responsivas, Server Actions, APIs, autenticação e regras de negócio.",
  },
  {
    icon: FiDatabase,
    title: "Dados e integrações",
    description:
      "Integração com bancos de dados, serviços externos, e-commerces e sistemas de gestão.",
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

export function AboutSection() {
  const { ref, isInView } = useRevealAnimation();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-24 lg:py-28"
    >
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-12 bg-primary" />

            <span className="font-mono text-sm font-medium text-primary">
              01. Sobre
            </span>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
            <motion.div
              variants={itemVariants}
              className="relative mx-auto w-full max-w-[320px] lg:mx-0"
            >
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[28px] bg-primary/10 blur-2xl"
              />

              <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/jeferson-pinho.jpeg"
                    alt="Jeferson Pinho, desenvolvedor frontend"
                    fill
                    priority={false}
                    sizes="(max-width: 1024px) 320px, 320px"
                    className="object-cover object-[50%_35%]"
                  />
                </div>

                <div className="border-t border-border/70 bg-card/90 px-5 py-4 backdrop-blur">
                  <strong className="block font-display text-base font-semibold text-foreground">
                    Jeferson Pinho
                  </strong>

                  <span className="mt-1 block text-sm text-muted-foreground">
                    Desenvolvedor Frontend
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2
                id="about-title"
                className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl"
              >
                Desenvolvimento que vai além da{" "}
                <span className="text-primary">interface.</span>
              </h2>

              <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Sou Desenvolvedor Frontend especializado em React, Next.js e
                  TypeScript, com atuação também em APIs, autenticação, regras
                  de negócio e banco de dados.
                </p>

                <p>
                  Trabalho no desenvolvimento do Core Manager e do Pastore.io,
                  além de criar sites, landing pages e e-commerces para
                  empresas, acompanhando cada projeto da implementação ao
                  deploy.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            className="mt-14 grid gap-4 md:grid-cols-3"
          >
            {highlights.map(({ icon: Icon, title, description }) => (
              <motion.div key={title} variants={itemVariants}>
                <Card
                  hover
                  className="group h-full border-border/70 bg-card/60 p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon
                      size={19}
                      aria-hidden="true"
                      className="text-primary"
                    />
                  </div>

                  <h3 className="font-display text-base font-semibold text-foreground">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
