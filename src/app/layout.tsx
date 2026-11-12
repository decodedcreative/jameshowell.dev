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
      <body className="bg-surface-default text-foreground-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
