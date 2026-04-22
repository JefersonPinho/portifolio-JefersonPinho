export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "react", level: 5 },
      { name: "Next.js", icon: "nextjs", level: 5 },
      { name: "TypeScript", icon: "typescript", level: 5 },
      { name: "Tailwind CSS", icon: "tailwind", level: 5 },
      { name: "Material UI", icon: "mui", level: 4 },
    ],
  },
  {
    category: "Ferramentas & Plataformas",
    skills: [
      { name: "Git", icon: "git", level: 5 },
      { name: "GitHub", icon: "github", level: 5 },
      { name: "Vercel", icon: "vercel", level: 5 },
      { name: "Figma", icon: "figma", level: 4 },
      { name: "Notion", icon: "notion", level: 4 },
    ],
  },
  {
    category: "Backend & Outros",
    skills: [
      { name: "Node.js", icon: "nodejs", level: 3 },
      { name: "MySQL", icon: "mysql", level: 3 },
    ],
  },
];
