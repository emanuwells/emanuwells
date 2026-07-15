"use client";

export default function MaiaThemeShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="maia-page min-h-screen" data-maia-phase="terminal">
      {children}
    </div>
  );
}
