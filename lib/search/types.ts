export type SearchAction =
  | "navigate"
  | "scroll"
  | "external"
  | "github"
  | "linkedin";

export type SearchItem = {
  id: string;
  title: string;
  titleEn: string;
  subtitle?: string;
  subtitleEn?: string;
  category: string;
  categoryEn: string;
  searchBlob: string;
  acao: SearchAction;
  url?: string;
  sectionId?: string;
  priority?: boolean;
};

export type SearchResult = SearchItem & { score?: number };
