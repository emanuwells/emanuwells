import type { SearchItem } from "./types";

export function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

export function executeSearchAction(item: SearchItem): boolean {
  if (!item.acao) return false;
  switch (item.acao) {
    case "scroll":
      if (item.sectionId) {
        document.getElementById(item.sectionId)?.scrollIntoView({ behavior: "smooth" });
        return true;
      }
      return false;
    case "navigate":
      if (item.url) {
        window.location.href = item.url;
        return true;
      }
      return false;
    case "github":
    case "linkedin":
    case "external":
      if (item.url) {
        window.open(item.url, "_blank", "noopener,noreferrer");
        return true;
      }
      return false;
    default:
      return false;
  }
}
