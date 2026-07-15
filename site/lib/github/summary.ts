export const GITHUB_USERNAME = "emanuwells";

export type GitHubSummary = {
  username: string;
  publicRepos: number;
  stars: number;
  forks: number;
  followers: number;
  languages: { name: string; count: number; percentage: number }[];
  activity: { week: string; contributions: number }[];
  updatedAt: string;
  source: "live" | "fallback";
};

export const FALLBACK_SUMMARY: GitHubSummary = {
  username: GITHUB_USERNAME,
  publicRepos: 4,
  stars: 4,
  forks: 0,
  followers: 6,
  languages: [
    { name: "JavaScript", count: 2, percentage: 50 },
    { name: "Python", count: 1, percentage: 25 },
    { name: "TypeScript", count: 1, percentage: 25 },
  ],
  activity: [
    { week: "S1", contributions: 2 },
    { week: "S2", contributions: 0 },
    { week: "S3", contributions: 1 },
    { week: "S4", contributions: 3 },
    { week: "S5", contributions: 0 },
    { week: "S6", contributions: 2 },
    { week: "S7", contributions: 1 },
    { week: "S8", contributions: 4 },
  ],
  updatedAt: new Date().toISOString(),
  source: "fallback",
};

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3776ab",
  PHP: "#777bb4",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Shell: "#89e051",
  Go: "#00add8",
  Rust: "#dea584",
};

export function languageColor(name: string): string {
  return LANGUAGE_COLORS[name] ?? "#22d3ee";
}

type GitHubRepo = {
  fork: boolean;
  archived: boolean;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

type GitHubEvent = {
  type: string;
  created_at: string;
};

async function githubFetch<T>(path: string): Promise<T> {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "emanuwells-portfolio",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`GitHub API ${response.status} for ${path}`);
  }

  return response.json() as Promise<T>;
}

function buildLanguageBreakdown(repositories: GitHubRepo[]) {
  const counts = repositories.reduce<Record<string, number>>((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] ?? 0) + 1;
    }
    return acc;
  }, {});

  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 6)
    .map(([name, count]) => ({
      name,
      count,
      percentage: total > 0 ? Math.round((count / total) * 100) : 0,
    }));
}

function buildActivityFromEvents(events: GitHubEvent[]) {
  const contributionTypes = new Set([
    "PushEvent",
    "PullRequestEvent",
    "IssuesEvent",
    "CreateEvent",
    "PullRequestReviewEvent",
  ]);

  const buckets = Array.from({ length: 8 }, (_, index) => {
    const end = new Date();
    end.setDate(end.getDate() - index * 7);
    const start = new Date(end);
    start.setDate(start.getDate() - 6);
    return {
      week: `S${8 - index}`,
      contributions: 0,
      start,
      end,
    };
  }).reverse();

  for (const event of events) {
    if (!contributionTypes.has(event.type)) continue;
    const created = new Date(event.created_at);
    const bucket = buckets.find((item) => created >= item.start && created <= item.end);
    if (bucket) bucket.contributions += 1;
  }

  return buckets.map(({ week, contributions }) => ({ week, contributions }));
}

export async function fetchGitHubSummary(): Promise<GitHubSummary> {
  try {
    const [profile, repositories, events] = await Promise.all([
      githubFetch<{ public_repos: number; followers: number }>(`/users/${GITHUB_USERNAME}`),
      githubFetch<GitHubRepo[]>(
        `/users/${GITHUB_USERNAME}/repos?per_page=100&type=owner&sort=updated`,
      ),
      githubFetch<GitHubEvent[]>(`/users/${GITHUB_USERNAME}/events/public?per_page=100`),
    ]);

    const publicRepositories = repositories.filter((repo) => !repo.fork && !repo.archived);
    const stars = publicRepositories.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const forks = publicRepositories.reduce((sum, repo) => sum + repo.forks_count, 0);
    const languages = buildLanguageBreakdown(publicRepositories);
    const activity = buildActivityFromEvents(events);

    return {
      username: GITHUB_USERNAME,
      publicRepos: profile.public_repos,
      stars,
      forks,
      followers: profile.followers,
      languages: languages.length > 0 ? languages : FALLBACK_SUMMARY.languages,
      activity: activity.some((item) => item.contributions > 0)
        ? activity
        : FALLBACK_SUMMARY.activity,
      updatedAt: new Date().toISOString(),
      source: "live",
    };
  } catch {
    return {
      ...FALLBACK_SUMMARY,
      updatedAt: new Date().toISOString(),
      source: "fallback",
    };
  }
}
