"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import { Container } from "@/components/layout/container";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

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

export function Navbar() {
  const { scrolled } = useScroll(20);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio
          );

        const currentSection = visibleSections[0];

        if (currentSection) {
          setActiveSection(currentSection.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileOpen]);

  const scrollToSection = (href: string) => {
    const section = document.querySelector<HTMLElement>(href);

    if (!section) return;

    const navbarOffset = 80;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: href === "#hero" ? 0 : sectionPosition,
      behavior: "smooth",
    });
  };

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    setMobileOpen(false);
    setActiveSection(href.replace("#", ""));
    scrollToSection(href);
  };

  const headerIsVisible = scrolled || mobileOpen;

  return (
    <>
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.55,
          ease: "easeOut",
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          headerIsVisible
            ? "border-b border-border/60 bg-background/85 shadow-sm shadow-black/5 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <motion.a
              href="#hero"
              onClick={(event) => handleNavigation(event, "#hero")}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              aria-label="Voltar ao início da página"
              className="inline-flex items-center font-display text-lg font-bold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
            >
              Jeferson
              <span className="text-primary">.dev</span>
            </motion.a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-1 md:flex"
            >
              {navLinks.map(({ label, href }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(event) => handleNavigation(event, href)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-navigation"
                        aria-hidden="true"
                        className="absolute inset-0 rounded-lg bg-primary/10"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}

                    <span className="relative z-10">{label}</span>
                  </a>
                );
              })}

              <a
                href="https://github.com/JefersonPinho"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar o GitHub de Jeferson Pinho"
                className="group ml-3 inline-flex items-center gap-2 rounded-lg border border-border/70 bg-card/70 px-4 py-2 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <FiGithub size={16} aria-hidden="true" />
                GitHub
                <FiArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              aria-label={
                mobileOpen
                  ? "Fechar menu de navegação"
                  : "Abrir menu de navegação"
              }
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-transparent text-muted-foreground transition-colors hover:border-border hover:bg-card hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    transition={{
                      duration: 0.15,
                    }}
                  >
                    <HiX size={23} aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    transition={{
                      duration: 0.15,
                    }}
                  >
                    <HiMenuAlt3 size={23} aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Fechar menu"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 top-16 z-40 bg-background/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                y: -16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -16,
              }}
              transition={{
                duration: 0.22,
                ease: "easeOut",
              }}
              className="fixed inset-x-0 top-16 z-50 border-b border-border/70 bg-background/95 shadow-xl shadow-black/10 backdrop-blur-xl md:hidden"
            >
              <Container>
                <nav
                  aria-label="Navegação mobile"
                  className="flex flex-col py-4"
                >
                  {navLinks.map(({ label, href }, index) => {
                    const sectionId = href.replace("#", "");
                    const isActive = activeSection === sectionId;

                    return (
                      <motion.a
                        key={href}
                        href={href}
                        onClick={(event) => handleNavigation(event, href)}
                        initial={{
                          opacity: 0,
                          x: -12,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                          duration: 0.25,
                        }}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-3 py-3.5 text-base font-medium transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-card hover:text-foreground"
                        )}
                      >
                        <span className="flex items-center gap-3">
                          <span className="font-mono text-xs text-primary/70">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          {label}
                        </span>

                        {isActive && (
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                          />
                        )}
                      </motion.a>
                    );
                  })}

                  <div className="my-3 h-px bg-border/70" />

                  <a
                    href="https://github.com/JefersonPinho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg border border-border/70 bg-card/60 px-4 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    <span className="flex items-center gap-3">
                      <FiGithub
                        size={18}
                        aria-hidden="true"
                        className="text-primary"
                      />
                      Ver perfil no GitHub
                    </span>

                    <FiArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    />
                  </a>
                </nav>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
