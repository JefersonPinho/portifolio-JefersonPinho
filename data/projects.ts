import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "core-manager",
    title: "Core Manager",
    description:
      "CRM operacional SaaS para gestão de clientes, leads, atividades e processos comerciais, com dashboard, funil de vendas, calendário e recursos de Inteligência Artificial.",
    longDescription:
      "Plataforma SaaS desenvolvida pela Core Tech para centralizar a operação comercial de empresas. Atuo no frontend e backend, desenvolvendo interfaces, validações, rotas de API, autenticação, regras de negócio e integração com banco de dados.",
    image: "/images/projects/core-manager.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Prisma",
      "Supabase",
      "PostgreSQL",
      "NextAuth",
      "Zod",
    ],
    liveUrl: "https://core-manager.vercel.app/login",
    featured: true,
    year: "2026",
  },
  {
    id: "pastoreio",
    title: "Pastore.io",
    description:
      "Plataforma SaaS para gestão de igrejas e células, com acompanhamento de membros, encontros, frequência, organograma e processos de multiplicação.",
    longDescription:
      "Sistema de gestão desenvolvido em equipe para apoiar líderes no acompanhamento de células e membros. Atuo no frontend e backend, desenvolvendo interfaces, dashboards, componentes reutilizáveis, Server Actions, regras de negócio e integração com Supabase.",
    image: "/images/projects/pastoreio.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "Supabase",
      "Server Actions",
      "Figma",
    ],
    liveUrl: "https://pastoreio-front.vercel.app/login",
    featured: true,
    year: "2026",
  },
  {
    id: "pinho-nuts",
    title: "Pinho Nuts",
    description:
      "Projeto que evoluiu de um site institucional com catálogo e chatbot para um e-commerce integrado ao eGestor para gestão de produtos, pedidos e estoque.",
    longDescription:
      "Criei inicialmente o site institucional da Pinho Nuts utilizando Next.js, TypeScript e Tailwind CSS. Posteriormente, desenvolvi a nova loja virtual na Loja Integrada, configurando catálogo, páginas institucionais, domínio, SEO básico e integração com o eGestor.",
    image: "/images/projects/pinho-nuts.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Loja Integrada",
      "eGestor",
      "Vercel",
      "SEO",
    ],
    liveUrl: "https://www.pinhonuts.com.br/",
    featured: true,
    year: "2025–2026",
  },
  {
    id: "veloz-lubrificantes",
    title: "Veloz Lubrificantes",
    description:
      "Site institucional responsivo desenvolvido a partir de um layout criado em parceria com designer UI/UX, com catálogo de produtos e animações.",
    longDescription:
      "Projeto institucional desenvolvido para apresentar a empresa, suas linhas de produtos e canais de contato. Trabalhei na implementação do layout criado no Figma, na responsividade das páginas e em animações com Framer Motion.",
    image: "/images/projects/veloz-lubrificantes.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Figma",
    ],
    liveUrl: "https://velozlubrificantes.com.br/",
    featured: false,
    year: "2026",
  },
  {
    id: "paz-church-maracanau",
    title: "Paz Church Maracanaú",
    description:
      "Landing page desenvolvida em equipe, com interface responsiva e integração com a API do Google Maps para exibição de pontos de encontro.",
    longDescription:
      "Projeto desenvolvido para a Paz Church Maracanaú, com foco na apresentação da Rede Amarela e localização dos pontos de encontro. Atuei na construção da interface, responsividade e integração com o Google Maps.",
    image: "/images/projects/paz-church-maracanau.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Google Maps API",
    ],
    liveUrl: "https://maracanau.redeamarela.com/",
    featured: false,
    year: "2025",
  },
];
