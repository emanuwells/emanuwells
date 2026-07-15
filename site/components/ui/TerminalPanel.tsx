"use client";

import type { ReactNode } from "react";

export default function TerminalPanel({
  children,
  title,
  className = "",
}: {
  children: ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div className={`terminal-chrome scanlines relative overflow-hidden ${className}`}>
      <div className="terminal-titlebar">
        <span className="terminal-dot terminal-dot--red" aria-hidden />
        <span className="terminal-dot terminal-dot--yellow" aria-hidden />
        <span className="terminal-dot terminal-dot--green" aria-hidden />
        <span className="ml-2">{title ?? "wells@portfolio ~"}</span>
      </div>
      <div className="p-5 sm:p-8 font-[family-name:var(--font-mono)]">{children}</div>
    </div>
  );
}
