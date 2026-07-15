import type { Metadata } from "next";
import { siteMeta } from "@/lib/content";
import WellsHeader from "@/components/layout/WellsHeader";
import MaiaChapters from "@/components/maia/MaiaChapters";
import MaiaThemeShell from "@/components/maia/MaiaThemeShell";
import "./maia-theme.css";

export const metadata: Metadata = {
  title: siteMeta.maiaTitle.pt,
  description: siteMeta.maiaDescription.pt,
};

export default function MaiaPage() {
  return (
    <>
      <WellsHeader variant="maia" />
      <MaiaThemeShell>
        <main className="pt-28">
          <MaiaChapters />
        </main>
      </MaiaThemeShell>
    </>
  );
}
