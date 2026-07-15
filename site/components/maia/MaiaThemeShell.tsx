"use client";

export default function MaiaThemeShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="maia-page min-h-screen" data-brand="maia">
      {children}
    </div>
  );
}
