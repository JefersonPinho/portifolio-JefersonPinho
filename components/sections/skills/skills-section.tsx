"use client";

import { motion } from "framer-motion";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { skills } from "@/data/skills";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiNotion,
  SiNodedotjs,
  SiMysql,
} from "react-icons/si";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  mui: SiMui,
  git: SiGit,
  github: SiGithub,
  vercel: SiVercel,
  figma: SiFigma,
  notion: SiNotion,
  nodejs: SiNodedotjs,
  mysql: SiMysql,
};

const colorMap: Record<string, string> = {
  react: "text-[#61DAFB]",
  nextjs: "text-foreground",
  typescript: "text-[#3178C6]",
  tailwind: "text-[#06B6D4]",
  mui: "text-[#007FFF]",
  git: "text-[#F05032]",
  github: "text-foreground",
  vercel: "text-foreground",
  figma: "text-[#F24E1E]",
  notion: "text-foreground",
  nodejs: "text-[#339933]",
  mysql: "text-[#4479A1]",
};

export function SkillsSection() {
  const { ref, isInView } = useRevealAnimation();

  return (
    <section id="skills" className="py-24 lg:py-32">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-sm text-primary">02. Skills</span>
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Tecnologias que utilizo
            <span className="text-primary">.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Ferramentas modernas usadas para criar aplicativos web,
            acessíveis e sustentáveis.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {skills.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              >
                <Card className="h-full">
                  <h3 className="mb-6 font-display text-lg font-semibold text-foreground">
                    {category.category}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {category.skills.map((skill, skillIndex) => {
                      const Icon = iconMap[skill.icon];
                      const color =
                        colorMap[skill.icon] ?? "text-muted-foreground";

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: catIndex * 0.1 + skillIndex * 0.05 + 0.2,
                          }}
                          className="group flex items-center gap-3"
                        >
                          <div
                            className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-background transition-colors group-hover:border-primary/30 group-hover:bg-primary/5 ${color}`}
                          >
                            {Icon && <Icon size={18} />}
                          </div>
                          <div className="flex-1">
                            <div className="mb-1 flex items-center justify-between">
                              <span className="text-sm font-medium text-foreground">
                                {skill.name}
                              </span>
                            </div>
                            <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={
                                  isInView
                                    ? { width: `${(skill.level / 5) * 100}%` }
                                    : {}
                                }
                                transition={{
                                  duration: 1,
                                  delay:
                                    catIndex * 0.1 + skillIndex * 0.05 + 0.4,
                                  ease: "easeOut",
                                }}
                                className="h-full rounded-full bg-primary"
                              />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
