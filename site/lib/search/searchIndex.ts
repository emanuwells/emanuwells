import { portfolioNavItems, projects, contact, githubSignals } from "@/lib/content/portfolio";
import { maiaNavItems } from "@/lib/content/maia";
import { pipelines } from "@/lib/content/maia-system";
import type { SearchItem } from "./types";

function blob(...parts: string[]) {
  return parts.join(" ").toLowerCase();
}

export function buildSearchIndex(): { priority: SearchItem[]; extended: SearchItem[] } {
  const priority: SearchItem[] = [];
  const extended: SearchItem[] = [];

  for (const nav of portfolioNavItems) {
    priority.push({
      id: `nav-${nav.id}`,
      title: nav.label.pt,
      titleEn: nav.label.en,
      category: "Navegação",
      categoryEn: "Navigation",
      searchBlob: blob(nav.label.pt, nav.label.en, nav.id),
      acao: "scroll",
      sectionId: nav.id,
      priority: true,
    });
  }

  priority.push({
    id: "section-signals",
    title: githubSignals.title.pt,
    titleEn: githubSignals.title.en,
    subtitle: githubSignals.intro.pt,
    subtitleEn: githubSignals.intro.en,
    category: "Perfil",
    categoryEn: "Profile",
    searchBlob: blob(
      githubSignals.title.pt,
      githubSignals.title.en,
      githubSignals.intro.pt,
      githubSignals.intro.en,
      "github",
      "estatisticas",
      "stats",
      "signals",
    ),
    acao: "scroll",
    sectionId: "signals",
    priority: true,
  });

  for (const p of projects.items) {
    priority.push({
      id: `project-${p.id}`,
      title: p.name.pt,
      titleEn: p.name.en,
      subtitle: p.description.pt,
      subtitleEn: p.description.en,
      category: "Projeto",
      categoryEn: "Project",
      searchBlob: blob(p.name.pt, p.name.en, p.description.pt, p.description.en, ...(p.tags ?? [])),
      acao: p.id === "wells-os" ? "external" : "scroll",
      url: p.id === "wells-os" ? "https://wells-os.vercel.app" : undefined,
      sectionId: "projects",
      priority: true,
    });
  }

  for (const ch of maiaNavItems) {
    priority.push({
      id: `maia-${ch.id}`,
      title: ch.label.pt,
      titleEn: ch.label.en,
      category: "Maia",
      categoryEn: "Maia",
      searchBlob: blob(ch.label.pt, ch.label.en, "maia", "case study"),
      acao: "navigate",
      url: `/maia#${ch.id}`,
      priority: true,
    });
  }

  priority.push(
    {
      id: "route-maia",
      title: "Case study Maia",
      titleEn: "Maia case study",
      category: "Maia",
      categoryEn: "Maia",
      searchBlob: blob("maia", "camara", "câmara", "case study"),
      acao: "navigate",
      url: "/maia",
      priority: true,
    },
    {
      id: "link-github",
      title: "GitHub",
      titleEn: "GitHub",
      category: "Contacto",
      categoryEn: "Contact",
      searchBlob: blob("github", "codigo", "repositorio"),
      acao: "github",
      url: contact.github,
      priority: true,
    },
    {
      id: "link-linkedin",
      title: "LinkedIn",
      titleEn: "LinkedIn",
      category: "Contacto",
      categoryEn: "Contact",
      searchBlob: blob("linkedin", "contacto", "rede"),
      acao: "linkedin",
      url: contact.linkedin,
      priority: true,
    }
  );

  for (const pipe of pipelines.items) {
    extended.push({
      id: `pipe-${pipe.id}`,
      title: pipe.name,
      titleEn: pipe.name,
      subtitle: pipe.problem.pt,
      subtitleEn: pipe.problem.en,
      category: "Pipeline",
      categoryEn: "Pipeline",
      searchBlob: blob(pipe.name, pipe.problem.pt, pipe.problem.en, pipe.role.pt, ...(pipe.tags ?? [])),
      acao: "navigate",
      url: "/maia#invisible",
    });
  }

  return { priority, extended };
}
