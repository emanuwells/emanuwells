"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { searchSite, getSearchResultKey } from "@/lib/search/fuseSearch";
import { addRecentSearch, getRecentSearches } from "@/lib/search/searchRecentStorage";
import { executeSearchAction } from "@/lib/search/searchActions";
import type { SearchItem } from "@/lib/search/types";

const MIN_QUERY = 2;
const DEBOUNCE_MS = 140;

function useDebounced<T>(value: T, ms: number) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = window.setTimeout(() => setDebounced(value), ms);
    return () => window.clearTimeout(id);
  }, [value, ms]);
  return debounced;
}

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="search-highlight">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function WellsSearchBar({ className = "" }: { className?: string }) {
  const { lang } = useLang();
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const [recent, setRecent] = useState<string[]>(() => (typeof window !== "undefined" ? getRecentSearches() : []));
  const debounced = useDebounced(query, DEBOUNCE_MS);

  const results = useMemo(() => {
    if (debounced.trim().length < MIN_QUERY) return [];
    return searchSite(debounced, 6);
  }, [debounced]);

  const showResults = open && query.trim().length >= MIN_QUERY;
  const showRecent = focused && query.trim().length < MIN_QUERY;

  const pick = useCallback(
    (item: SearchItem) => {
      addRecentSearch(query || item.title);
      setRecent(getRecentSearches());
      setOpen(false);
      setQuery("");
      executeSearchAction(item);
    },
    [query]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (!showResults || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => (h + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => (h - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      pick(results[highlight]);
    }
  };

  const placeholder =
    lang === "pt" ? "Pesquisar projetos, Maia, consola…" : "Search projects, Maia, console…";

  const modalOpen = open && (showResults || showRecent);

  return (
    <>
      {modalOpen && (
        <div className="search-modal-backdrop" aria-hidden onClick={() => setOpen(false)} />
      )}
    <div ref={rootRef} className={`relative w-full max-w-xl search-root ${modalOpen ? "search-root--open" : ""} ${className}`}>
      <div className="glass-card flex items-center gap-2 px-3 py-2">
        <Search size={18} className="text-[var(--theme-text-muted)] shrink-0" aria-hidden />
        <input
          ref={inputRef}
          type="search"
          role="combobox"
          aria-expanded={showResults || showRecent}
          aria-controls={listId}
          aria-autocomplete="list"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setHighlight(0);
          }}
          onFocus={() => {
            setFocused(true);
            setOpen(true);
          }}
          onBlur={() => setFocused(false)}
          onKeyDown={onInputKey}
          className="flex-1 bg-transparent border-0 outline-none text-sm text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)]"
        />
        <kbd className="hidden sm:inline font-[family-name:var(--font-mono)] text-[10px] text-[var(--theme-text-muted)] border border-[var(--theme-glass-border)] rounded px-1.5 py-0.5">
          ⌘K
        </kbd>
      </div>

      {(showResults || showRecent) && (
        <ul
          id={listId}
          role="listbox"
          className="search-modal-panel absolute z-50 mt-2 w-full glass-panel py-2 max-h-72 overflow-y-auto"
        >
          {showRecent &&
            recent.map((r) => (
              <li key={r}>
                <button
                  type="button"
                  className="w-full text-left px-4 py-2 text-sm hover:bg-[var(--theme-card-hover)]"
                  onMouseDown={() => {
                    setQuery(r);
                    setOpen(true);
                  }}
                >
                  {r}
                </button>
              </li>
            ))}
          {showResults &&
            results.map((item, i) => {
              const title = lang === "pt" ? item.title : item.titleEn;
              const cat = lang === "pt" ? item.category : item.categoryEn;
              return (
                <li key={getSearchResultKey(item)} role="option" aria-selected={i === highlight}>
                  <button
                    type="button"
                    className={`w-full text-left px-4 py-2.5 ${i === highlight ? "bg-[var(--theme-card-hover)]" : ""}`}
                    onMouseDown={() => pick(item)}
                  >
                    <span className="block text-sm font-medium">
                      <Highlight text={title} query={query} />
                    </span>
                    <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase text-[var(--theme-text-muted)]">
                      {cat}
                    </span>
                  </button>
                </li>
              );
            })}
        </ul>
      )}
    </div>
    </>
  );
}
