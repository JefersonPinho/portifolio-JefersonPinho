import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "core-tech",
    role: "Desenvolvedor Full Stack",
    company: "Core Tech — Core Manager",
    companyUrl: "https://core-manager.vercel.app/login",
    period: "2026 — Atual",
    description:
      "Atuo no desenvolvimento do Core Manager, um CRM operacional SaaS para gestão de clientes, leads, atividades e processos comerciais. Trabalho no frontend e backend, desenvolvendo interfaces, dashboards, validações, rotas de API, autenticação, regras de negócio, banco de dados e recursos de Inteligência Artificial.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "NextAuth",
      "Zod",
    ],
    current: true,
  },
  {
    id: "pastoreio",
    role: "Desenvolvedor Full Stack",
    company: "Pastore.io",
    companyUrl: "https://pastoreio-front.vercel.app/login",
    period: "2025 — Atual",
    description:
      "Desenvolvimento de uma plataforma SaaS para gestão de igrejas e células, com módulos de membros, encontros, frequência, organograma, acompanhamento pastoral e multiplicação. Atuo na criação de interfaces, componentes reutilizáveis, Server Actions, regras de negócio e integração com o Supabase.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "Supabase",
      "Server Actions",
      "Figma",
      "Trello",
    ],
    current: true,
  },
  {
    id: "freelancer",
    role: "Desenvolvedor Frontend",
    company: "Projetos Freelancer",
    period: "2024 — Atual",
    description:
      "Desenvolvimento de sites institucionais, landing pages e e-commerces para clientes reais. Atuação desde a implementação de layouts responsivos até integrações, configuração de domínio, SEO básico, publicação, manutenção e conexão com sistemas de gestão.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
      "Loja Integrada",
      "eGestor",
    ],
    current: true,
  },
];
