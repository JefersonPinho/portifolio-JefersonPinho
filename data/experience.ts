import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "pastore-io",
    role: "Frontend Developer",
    company: "Pastore.io",
    companyUrl: "https://pastore.io",
    period: "2025 — Present",
    description:
      "Building and maintaining a full-featured church management SaaS platform. Responsible for the complete dashboard interface, including data visualization with ApexCharts, role-based access control, and real-time data management with TypeScript and Next.js App Router.",
    technologies: ["Next.js", "TypeScript", "Material UI", "ApexCharts", "MySQL"],
    current: true,
  },
  {
    id: "freelance",
    role: "Frontend Developer",
    company: "Freelance",
    period: "2024 — Present",
    description:
      "Delivering high-performance web applications for clients across various industries. Focus on modern React/Next.js architecture, Core Web Vitals optimization, and SEO-first development. Clients include food brands, service businesses, and startups.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    current: true,
  },
];
