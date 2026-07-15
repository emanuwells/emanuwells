"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function TypingText({
  phrases,
  className = "",
}: {
  phrases: string[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const currentPhrase = phrases[phraseIndex] ?? "";

  useEffect(() => {
    if (reduce) return;

    const isComplete = !deleting && charIndex === currentPhrase.length;
    const isEmpty = deleting && charIndex === 0;

    const delay = isComplete ? 1800 : isEmpty ? 500 : deleting ? 28 : 42;

    const timer = window.setTimeout(() => {
      if (!deleting && charIndex < currentPhrase.length) {
        setCharIndex((value) => value + 1);
        return;
      }

      if (!deleting && charIndex === currentPhrase.length) {
        setDeleting(true);
        return;
      }

      if (deleting && charIndex > 0) {
        setCharIndex((value) => value - 1);
        return;
      }

      setDeleting(false);
      setPhraseIndex((value) => (value + 1) % phrases.length);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [charIndex, currentPhrase.length, deleting, phrases.length, reduce]);

  const visibleText = reduce ? phrases[0] : currentPhrase.slice(0, charIndex);

  return (
    <span className={className} aria-live="polite">
      {visibleText}
      {!reduce && (
        <span className="inline-block w-[2px] h-[0.9em] ml-1 align-[-0.1em] bg-[var(--theme-accent)] animate-pulse" aria-hidden />
      )}
    </span>
  );
}
