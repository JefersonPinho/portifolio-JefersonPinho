import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "pinho-nuts",
    title: "Pinho Nuts",
    description:
      "Site institucional para uma marca de alimentos naturais com catálogo completo de produtos, otimização de SEO e arquitetura que prioriza o desempenho.",
    longDescription:
      "Um site institucional completo criado para uma marca premium de alimentos naturais. Com dados estruturados para resultados de pesquisa avançados.",
    image: "/images/projects/pinho-nuts.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "SEO", "Vercel"],
    liveUrl: "https://pinhonuts.com.br",
    featured: true,
    year: "2025",
  },
  {
    id: "paz-church-maracanau",
    title: "Paz Church Maracanau",
    description:
    "Site institucional para uma igreja local com informações sobre eventos, ministérios e membros.",
    longDescription:
    "Um site institucional completo criado para uma igreja local. Com dados estruturados para resultados de pesquisa avançados.",
    image: "/images/projects/paz-church-maracanau.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://maracanau.redeamarela.com/",
    featured: true,
    year: "2025",
  },
  {
    id: "veloz-lubrificantes",
    title: "Veloz Lubrificantes",
    description:
      "Site institucional para uma marca de lubrificantes com catálogo completo de produtos, otimização de SEO e arquitetura que prioriza o desempenho.",
    longDescription:
      "Um site institucional completo criado para uma marca premium de lubrificantes. Com dados estruturados para resultados de pesquisa avançados.",
    image: "/images/projects/veloz-lubrificantes.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "ApexCharts",
      "MySQL",
    ],
    liveUrl: "https://velozlubrificantes.com.br",
    featured: true,
    year: "2026",
  },
  {
    id: "core-manager",
    title: "Core Manager",
    description:
      "CRM operacional para empresas, com dashboard, gerenciamento de clientes e Leads, controle de atividades e controle de vendas.",
    longDescription:
      "Um sistema completo de gerenciamento criado para uma empresa de lubrificantes. Com dados estruturados para resultados de pesquisa avançados.",
    image: "/images/projects/core-manager.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "ApexCharts",
      "MySQL",
    ],
    liveUrl: "https://core-manager.vercel.app/login",
    featured: true,
    year: "2026",
  },
];
