#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const username = process.env.GITHUB_ACTOR || "emanuwells";
const token = process.env.GITHUB_TOKEN?.trim();
const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(repositoryRoot, ".github/assets/profile-metrics.svg");

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "emanuwells-profile-metrics",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

async function github(path) {
  const response = await fetch(`https://api.github.com${path}`, { headers });
  if (!response.ok) {
    throw new Error(`GitHub API ${response.status} while requesting ${path}`);
  }
  return response.json();
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const [profile, repositories] = await Promise.all([
  github(`/users/${username}`),
  github(`/users/${username}/repos?per_page=100&type=owner&sort=updated`),
]);

const publicRepositories = repositories.filter((repository) => !repository.fork && !repository.archived);
const stars = publicRepositories.reduce((sum, repository) => sum + repository.stargazers_count, 0);
const forks = publicRepositories.reduce((sum, repository) => sum + repository.forks_count, 0);
const languages = Object.entries(
  publicRepositories.reduce((counts, repository) => {
    if (repository.language) counts[repository.language] = (counts[repository.language] || 0) + 1;
    return counts;
  }, {}),
)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .slice(0, 5)
  .map(([language]) => language);

const updated = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "short",
  day: "2-digit",
  timeZone: "Europe/Lisbon",
}).format(new Date());

const metrics = [
  [profile.public_repos, "repositórios públicos"],
  [stars, "estrelas recebidas"],
  [forks, "forks públicos"],
  [profile.followers, "seguidores"],
];

const cards = metrics
  .map(
    ([value, label], index) => `
      <g transform="translate(${30 + index * 195} 92)">
        <rect width="175" height="88" rx="14" fill="#111827" stroke="#263449"/>
        <text x="16" y="38" class="value">${escapeXml(value)}</text>
        <text x="16" y="64" class="label">${escapeXml(label)}</text>
      </g>`,
  )
  .join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="820" height="250" viewBox="0 0 820 250" role="img" aria-labelledby="title description">
  <title id="title">Public GitHub overview for ${escapeXml(username)}</title>
  <desc id="description">${metrics.map(([value, label]) => `${value} ${label}`).join(", ")}. Main repository languages: ${escapeXml(languages.join(", ") || "not available")}.</desc>
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#07111f"/>
      <stop offset="1" stop-color="#0f1f2f"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#22d3ee"/>
      <stop offset="1" stop-color="#34d399"/>
    </linearGradient>
    <style>
      .heading { fill: #f8fafc; font: 700 22px ui-monospace, SFMono-Regular, Consolas, monospace; }
      .value { fill: #67e8f9; font: 700 25px ui-monospace, SFMono-Regular, Consolas, monospace; }
      .label { fill: #a8b5c7; font: 500 12px system-ui, -apple-system, Segoe UI, sans-serif; }
      .meta { fill: #9fb0c5; font: 500 12px system-ui, -apple-system, Segoe UI, sans-serif; }
    </style>
  </defs>
  <rect x="1" y="1" width="818" height="248" rx="20" fill="url(#background)" stroke="#263449" stroke-width="2"/>
  <rect x="30" y="31" width="54" height="5" rx="2.5" fill="url(#accent)"/>
  <text x="30" y="70" class="heading">SINAIS PÚBLICOS DE BUILD</text>
  ${cards}
  <text x="30" y="218" class="meta">Linguagens nos repositórios públicos originais: ${escapeXml(languages.join(" · ") || "Indisponível")}</text>
  <text x="790" y="218" text-anchor="end" class="meta">Actualizado ${escapeXml(updated)}</text>
</svg>
`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, svg, "utf8");
console.log(`Updated ${outputPath}`);

