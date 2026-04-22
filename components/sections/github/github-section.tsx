import { Container } from "@/components/layout/container";
import { getGitHubRepos } from "@/lib/github";
import { FiGithub, FiStar, FiGitBranch, FiExternalLink } from "react-icons/fi";

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  CSS: "bg-pink-500",
  HTML: "bg-orange-500",
  "C#": "bg-purple-500",
  Java: "bg-red-500",
};

export async function GitHubSection() {
  const repos = await getGitHubRepos();

  return (
    <section id="github" className="py-24 lg:py-32">
      <Container>
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-12 bg-primary" />
          <span className="font-mono text-sm text-primary">
            05. Código aberto
          </span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Atividade GitHub
              <span className="text-primary">.</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Alguns dos meus repositórios públicos e contribuições de código
              aberto.
            </p>
          </div>
          <a
            href="https://github.com/JefersonPinho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            <FiGithub size={14} />
            Ver perfil →
          </a>
        </div>

        {repos.length > 0 ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <FiGithub
                        size={15}
                        className="flex-shrink-0 text-muted-foreground"
                      />
                      <h3 className="font-mono text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                        {repo.name}
                      </h3>
                    </div>
                    <FiExternalLink
                      size={14}
                      className="flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </div>

                  {repo.description && (
                    <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      {repo.description}
                    </p>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-4">
                  {repo.language && (
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${languageColors[repo.language] ?? "bg-muted-foreground"}`}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <FiStar size={12} />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <FiGitBranch size={12} />
                    {repo.forks_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-border bg-card py-20 text-center">
            <FiGithub size={40} className="text-muted-foreground/40" />
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
              GITHUB_USERNAME
            </code>
            <a
              href="https://github.com/JefersonPinho"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              <FiGithub size={14} />
              Ver no GitHub →
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}
