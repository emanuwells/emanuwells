import type { Metadata } from "next";
import WellsHeader from "@/components/layout/WellsHeader";
import PageMotion from "@/components/layout/PageMotion";
import SectionNavFab from "@/components/layout/SectionNavFab";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioProjects from "@/components/portfolio/PortfolioProjects";
import PortfolioSkills from "@/components/portfolio/PortfolioSkills";
import PortfolioExperience from "@/components/portfolio/PortfolioExperience";
import PortfolioAbout from "@/components/portfolio/PortfolioAbout";
import PortfolioContact from "@/components/portfolio/PortfolioContact";
import { siteMeta, portfolioNavItems } from "@/lib/content";

export const metadata: Metadata = {
  title: siteMeta.title.pt,
  description: siteMeta.description.pt,
};

const sectionIds = portfolioNavItems.map((i) => i.id);

export default function Home() {
  return (
    <>
      <WellsHeader variant="portfolio" />
      <PageMotion>
        <main>
          <PortfolioHero />
          <PortfolioProjects />
          <PortfolioSkills />
          <PortfolioExperience />
          <PortfolioAbout />
          <PortfolioContact />
        </main>
      </PageMotion>
      <SectionNavFab sectionIds={sectionIds} />
    </>
  );
}
