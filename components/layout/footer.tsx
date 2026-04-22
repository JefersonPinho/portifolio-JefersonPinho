import { Container } from "@/components/layout/container";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
  { label: "Contato", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/JefersonPinho", icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jefersonpinhodev",
    icon: FiLinkedin,
  },
  { label: "Email", href: "mailto:jeffersonpinho130@gmail.com", icon: FiMail },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <a href="#" className="font-display text-xl font-bold tracking-tight">
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">dev</span>
            <span className="text-primary">/&gt;</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Construído com <span className="text-primary">Next.js</span>,{" "}
            <span className="text-primary">TypeScript</span> &{" "}
            <span className="text-primary">Tailwind CSS</span>.
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} Jeferson Pinho. Todos os direitos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
