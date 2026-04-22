"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheck } from "react-icons/fi";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jefersonpinhodev",
    icon: FiLinkedin,
    description: "Vamos nos conectar profissionalmente",
  },
  {
    label: "GitHub",
    href: "https://github.com/JefersonPinho",
    icon: FiGithub,
    description: "Confira meu código",
  },
  {
    label: "Email",
    href: "mailto:jefersonpinho.dev@gmail.com",
    icon: FiMail,
    description: "jefersonpinho.dev@gmail.com",
  },
];

export function ContactSection() {
  const { ref, isInView } = useRevealAnimation();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");

    setTimeout(() => {
      setStatus("idle");
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-sm text-primary">06. Contato</span>
          </div>

          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Vamos contruir algo
                <span className="text-primary"> grandioso</span>.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Tem um projeto em mente ou quer discutir uma oportunidade?
                Envie-me uma mensagem e entrarei em contato com você em até 24
                horas.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                {socialLinks.map(({ label, href, icon: Icon, description }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                        {label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      placeholder="Seu nome"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      placeholder="seuemail@exemplo.com"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    placeholder="Conte-me sobre seu projeto..."
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading" || status === "success"}
                  className="w-full sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                      Enviando...
                    </>
                  ) : status === "success" ? (
                    <>
                      <FiCheck size={16} />
                      Mensagem enviada!
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
