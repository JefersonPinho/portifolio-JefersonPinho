"use client";

import { motion, type Variants } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const navbarOffset = 80;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-[90vh] items-center overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute bottom-1/4 right-1/4 h-[460px] w-[460px] translate-x-1/2 translate-y-1/2 rounded-full bg-accent/10 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(
                90deg,
                hsl(var(--foreground)) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl py-32"
        >
          <motion.div variants={itemVariants} className="mb-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Disponível para oportunidades
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={itemVariants}
            className="max-w-5xl font-display text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Desenvolvo aplicações web para{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              operações reais.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Desenvolvedor Frontend especializado em React, Next.js e TypeScript,
            com atuação em plataformas SaaS, integrações e funcionalidades de
            backend.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              Ver projetos
              <FiArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              <FiMail size={16} aria-hidden="true" />
              Entrar em contato
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
