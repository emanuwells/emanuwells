/** Maps display labels to simple-icons slugs (https://simpleicons.org). */
export const TECH_ICON_SLUGS: Record<string, string> = {
  Python: "python",
  PHP: "php",
  MySQL: "mysql",
  "MySQL/MariaDB": "mysql",
  MariaDB: "mariadb",
  Postgres: "postgresql",
  PostgreSQL: "postgresql",
  TypeScript: "typescript",
  JavaScript: "javascript",
  React: "react",
  Vite: "vite",
  Docker: "docker",
  Nginx: "nginx",
  Linux: "linux",
  "Power BI": "powerbi",
  DAX: "powerbi",
  "Power Query M": "powerbi",
  SharePoint: "microsoftsharepoint",
  "Microsoft Forms": "microsoftforms",
  Slack: "slack",
  SSH: "gnubash",
  REST: "openapiinitiative",
  "REST API": "openapiinitiative",
  "REST APIs": "openapiinitiative",
  GeoJSON: "geojson",
  NGSI: "fiware",
  "NGSI-LD": "fiware",
  Tkinter: "python",
  SQL: "mysql",
  ETL: "apacheairflow",
  "ETL/ELT": "apacheairflow",
  GitHub: "github",
  Next: "nextdotjs",
  "Next.js": "nextdotjs",
};

export function techIconSlug(label: string): string | null {
  return TECH_ICON_SLUGS[label] ?? TECH_ICON_SLUGS[label.replace(/\s+/g, " ").trim()] ?? null;
}

export const PIPELINE_ICONS: Record<string, string> = {
  paladin: "mysql",
  ine: "python",
  medidata: "mysql",
  forms: "microsoftsharepoint",
  traffic: "fiware",
  risk: "php",
};
