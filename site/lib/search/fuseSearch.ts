import Fuse from "fuse.js";
import { buildSearchIndex } from "./searchIndex";
import { expandQueryWithSynonyms } from "./searchSynonyms";
import type { SearchItem, SearchResult } from "./types";

const FUSE_OPTIONS = {
  keys: [{ name: "searchBlob", weight: 1 }],
  threshold: 0.42,
  ignoreLocation: true,
  minMatchCharLength: 2,
  includeScore: true,
  distance: 80,
};

let fusePriority: Fuse<SearchItem> | null = null;
let fuseExtended: Fuse<SearchItem> | null = null;

function getFuses() {
  if (!fusePriority || !fuseExtended) {
    const { priority, extended } = buildSearchIndex();
    fusePriority = new Fuse(priority, FUSE_OPTIONS);
    fuseExtended = new Fuse(extended, FUSE_OPTIONS);
  }
  return { fusePriority, fuseExtended };
}

export function searchSite(query: string, max = 8): SearchResult[] {
  const q = expandQueryWithSynonyms(query).trim();
  if (q.length < 2) return [];
  const { fusePriority, fuseExtended } = getFuses();
  const priorityHits = fusePriority.search(q).map((r) => ({ ...r.item, score: r.score }));
  const extendedHits =
    q.length >= 3 ? fuseExtended.search(q).map((r) => ({ ...r.item, score: (r.score ?? 0) + 0.1 })) : [];
  const seen = new Set<string>();
  const merged: SearchResult[] = [];
  for (const hit of [...priorityHits, ...extendedHits].sort((a, b) => (a.score ?? 0) - (b.score ?? 0))) {
    if (seen.has(hit.id)) continue;
    seen.add(hit.id);
    merged.push(hit);
    if (merged.length >= max) break;
  }
  return merged;
}

export function getSearchResultKey(item: SearchItem) {
  return item.id;
}
