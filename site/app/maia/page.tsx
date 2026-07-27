import type { Metadata } from "next";
import { siteMeta } from "@/lib/content";
import { maiaNavItems } from "@/lib/content/maia";
import WellsHeader from "@/components/layout/WellsHeader";
import PageMotion from "@/components/layout/PageMotion";
import SectionNavFab from "@/components/layout/SectionNavFab";
import MaiaChapters from "@/components/maia/MaiaChapters";
import MaiaThemeShell from "@/components/maia/MaiaThemeShell";
import "./maia-theme.css";

export const metadata: Metadata = {
  title: siteMeta.maiaTitle.pt,
  description: siteMeta.maiaDescription.pt,
};

const sectionIds = maiaNavItems.map((i) => i.id);

export default function MaiaPage() {
  return (
    <MaiaThemeShell>
      <WellsHeader variant="maia" />
      <PageMotion>
        <main className="pt-28">
          <MaiaChapters />
        </main>
      </PageMotion>
      <SectionNavFab sectionIds={sectionIds} />
    </MaiaThemeShell>
  );
}
