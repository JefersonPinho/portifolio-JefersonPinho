"use client";

import { motion, type Variants } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
} from "react-icons/fi";
import type { IconType } from "react-icons";

import { Container } from "@/components/layout/container";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: IconType;
};

const contactLinks: ContactLink[] = [
  {
    label: "E-mail",
    value: "jefersonpinho.dev@gmail.com",
    href: "mailto:jefersonpinho.dev@gmail.com?subject=Contato pelo portfólio",
    icon: FiMail,
  },
  {
    label: "WhatsApp",
    value: "Conversar diretamente",
    href: "https://wa.me/5585982255592?text=Olá%20Jeferson%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.",
    icon: FiMessageCircle,
  },
  {
    label: "LinkedIn",
    value: "jefersonpinhodev",
    href: "https://linkedin.com/in/jefersonpinhodev",
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "JefersonPinho",
    href: "https://github.com/JefersonPinho",
    icon: FiGithub,
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

export function ContactSection() {
  const { ref, isInView } = useRevealAnimation();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
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
              05. Contato
            </span>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <motion.div variants={itemVariants}>
              <h2
                id="contact-title"
                className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl"
              >
                Vamos conversar sobre uma{" "}
                <span className="text-primary">oportunidade ou projeto.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Estou disponível para oportunidades profissionais, projetos
                freelance e parcerias. Entre em contato para apresentar o
                contexto, os objetivos e como posso contribuir.
              </p>

              <div className="mt-8 flex items-start gap-3 text-sm text-muted-foreground">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FiMapPin size={17} aria-hidden="true" />
                </div>

                <div>
                  <span className="block font-medium text-foreground">
                    Maracanaú, Ceará
                  </span>

                  <span className="mt-1 block">
                    Disponível para oportunidades remotas e presenciais.
                  </span>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="mailto:jefersonpinho.dev@gmail.com?subject=Contato pelo portfólio"
                  className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
                >
                  Enviar um e-mail
                  <FiArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid gap-4 sm:grid-cols-2"
            >
              {contactLinks.map(({ label, value, href, icon: Icon }) => {
                const isEmail = href.startsWith("mailto:");

                return (
                  <motion.a
                    key={label}
                    variants={itemVariants}
                    href={href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    aria-label={`${label}: ${value}`}
                    className="group flex min-h-36 flex-col justify-between rounded-2xl border border-border/70 bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                        <Icon size={18} aria-hidden="true" />
                      </div>

                      <FiArrowUpRight
                        size={17}
                        aria-hidden="true"
                        className="text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      />
                    </div>

                    <div className="mt-6">
                      <span className="block text-sm font-semibold text-foreground">
                        {label}
                      </span>

                      <span className="mt-1 block break-all text-sm text-muted-foreground">
                        {value}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
