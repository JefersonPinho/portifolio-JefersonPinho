"use client";

import { motion } from "framer-motion";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { FiCode, FiZap, FiLayout, FiShield } from "react-icons/fi";

const highlights = [
  {
    icon: FiCode,
    title: "Clean Architecture",
    description:
      "Writing scalable, maintainable code with clear separation of concerns and strong TypeScript typing.",
  },
  {
    icon: FiZap,
    title: "Performance First",
    description:
      "Achieving Lighthouse scores above 90 through optimized images, lazy loading, and critical path optimization.",
  },
  {
    icon: FiLayout,
    title: "Modern Tooling",
    description:
      "Leveraging the latest in the React ecosystem — Next.js App Router, Tailwind, Framer Motion — for premium results.",
  },
  {
    icon: FiShield,
    title: "Accessibility & SEO",
    description:
      "Building inclusive experiences with semantic HTML, ARIA attributes, and structured data for search engines.",
  },
];

export function AboutSection() {
  const { ref, isInView } = useRevealAnimation();

  return (
    <section id="about" className="py-24 lg:py-32">
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
              01. Sobre
            </span>
          </div>

          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-4xl">
                Criando experiências digitais
                <span className="text-primary">.</span>
              </h2>

              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Sou Jeferson Pinho, desenvolvedor front-end focado em criar aplicativos web
                  modernos e de alto desempenho. Minha abordagem combina
                  arquitetura limpa, design cuidadoso e melhores práticas de
                  engenharia para fornecer produtos que tenham ótima aparência e
                  funcionem perfeitamente.
                </p>
                <p>
                  I specialize in the React and Next.js ecosystem, with a strong
                  emphasis on TypeScript, accessibility, and Core Web Vitals. I
                  care deeply about code quality — every component is built to
                  be reusable, tested, and maintainable.
                </p>
                <p>
                  Currently building{" "}
                  <a
                    href="https://pastore.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Pastore.io
                  </a>{" "}
                  and taking on freelance projects with a focus on delivering
                  measurable business outcomes through exceptional front-end
                  engineering.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Let&apos;s work together →
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                >
                  <Card hover className="h-full">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
