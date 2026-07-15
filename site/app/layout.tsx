import type { Metadata } from "next";
import { Nunito_Sans, Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import { getServerLang } from "@/lib/i18n-server";
import { getThemeBootScript } from "@/lib/design-system/theme-script";
import LangHtml from "@/components/LangHtml";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteMeta } from "@/lib/content";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: siteMeta.title.pt,
  description: siteMeta.description.pt,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLang = await getServerLang();

  return (
    <html lang={initialLang} data-theme="terminal" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: getThemeBootScript() }} />
      </head>
      <body
        className={`${nunito.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <LangProvider initialLang={initialLang}>
          <ThemeProvider>
            <LangHtml />
            {children}
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}
