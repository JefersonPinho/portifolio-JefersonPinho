"use client";

import type { MouseEvent } from "react";
import type { IconType } from "react-icons";
import {
  FiArrowUp,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import { Container } from "@/components/layout/container";

const navLinks = [
  {
    label: "Sobre",
    href: "#about",
  },
  {
    label: "Tecnologias",
    href: "#skills",
  },
  {
    label: "Projetos",
    href: "#projects",
  },
  {
    label: "Experiência",
    href: "#experience",
  },
  {
    label: "Contato",
    href: "#contact",
  },
];

type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/JefersonPinho",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jefersonpinhodev",
    icon: FiLinkedin,
  },
  {
    label: "E-mail",
    href: "mailto:jefersonpinho.dev@gmail.com",
    icon: FiMail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const section = document.querySelector<HTMLElement>(href);

    if (!section) return;

    const navbarOffset = 80;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-border/70 bg-card/20">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:gap-12 lg:py-14">
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao início da página"
              className="inline-flex font-display text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
            >
              Jeferson
              <span className="text-primary">.dev</span>
            </button>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Desenvolvedor Frontend com atuação na criação de plataformas SaaS,
              sistemas de gestão, sites e e-commerces.
            </p>

            <a
              href="mailto:jefersonpinho.dev@gmail.com?subject=Contato pelo portfólio"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Entrar em contato
              <FiArrowUpRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Navegação</h2>

            <nav
              aria-label="Navegação do rodapé"
              className="mt-4 flex flex-col items-start gap-3"
            >
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(event) => scrollToSection(event, href)}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">
              Conecte-se
            </h2>

            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => {
                const isExternal = href.startsWith("http");

                return (
                  <a
                    key={label}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={`Acessar ${label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-background/40 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Icon size={17} aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Voltar ao topo
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border/70 transition-all group-hover:border-primary/30 group-hover:bg-primary/5">
                <FiArrowUp
                  size={13}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5"
                />
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border/70 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Jeferson Pinho. Todos os direitos reservados.</p>

          <p>
            Desenvolvido com{" "}
            <span className="font-medium text-foreground">Next.js</span>,{" "}
            <span className="font-medium text-foreground">TypeScript</span> e{" "}
            <span className="font-medium text-foreground">Tailwind CSS</span>.
          </p>
        </div>
      </Container>
    </footer>
  );
}
