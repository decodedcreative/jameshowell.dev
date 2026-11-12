import type { Metadata } from "next";
// Fonts are self-hosted from npm (Fontsource), so builds need no network access.
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";

// Theme CSS must load unlayered, in this order, before globals.css:
// shared primitives → default theme → portfolio theme. See Jigsaw's docs/using-jigsaw.md.
import "@jigsaw-ds/tokens/shared/base.css";
import "@jigsaw-ds/theme-default/base.css";
import "@jigsaw-ds/theme-default/semantic-light.css";
import "@jigsaw-ds/theme-default/semantic-dark.css";
import "@jigsaw-ds/theme-portfolio/base.css";
import "@jigsaw-ds/theme-portfolio/semantic.css";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "James Howell — Frontend and design systems engineer",
    template: "%s — James Howell",
  },
  description:
    "Frontend engineer with 15+ years in React and TypeScript, specialising in design systems, accessibility and frontend architecture.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" data-theme="portfolio">
      <body className="bg-surface-default text-foreground-primary font-body flex min-h-screen flex-col antialiased">
        <a
          href="#main"
          className="bg-interactive-primary text-foreground-inverse sr-only z-50 rounded-md font-medium focus:not-sr-only focus:fixed focus:px-4 focus:py-2 focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <Providers>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
