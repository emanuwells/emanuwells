"use client";

import { useLang, t } from "@/lib/i18n";
import Section, { Eyebrow } from "@/components/Section";
import Reveal from "@/components/Reveal";
import SiteFooterLinks from "@/components/layout/SiteFooterLinks";
import { contact } from "@/lib/content";

export default function PortfolioContact() {
  const { lang } = useLang();

  return (
    <Section id="contact" bare className="pb-16">
      <Reveal>
        <Eyebrow>{t(contact.eyebrow, lang)}</Eyebrow>
        <SiteFooterLinks className="mt-4" />
      </Reveal>
    </Section>
  );
}
