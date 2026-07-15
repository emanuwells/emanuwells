import type { ReactNode } from "react";
import GlassPanel from "@/components/ui/GlassPanel";
import { SceneLabel, SceneTitle } from "@/components/ui/Typography";

export default function GlassChapter({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`maia-chapter px-4 sm:px-6 py-16 max-w-5xl mx-auto ${className}`}>
      <GlassPanel className="p-8 sm:p-10">
        {eyebrow && <SceneLabel>{eyebrow}</SceneLabel>}
        {title && (
          <div className="mb-8">
            <SceneTitle>{title}</SceneTitle>
          </div>
        )}
        {children}
      </GlassPanel>
    </section>
  );
}
