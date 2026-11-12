import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes plain HTML to out/, so it can be hosted anywhere.
  output: "export",
  // Write each route as <route>/index.html, which every static host serves without rewrites.
  trailingSlash: true,
  transpilePackages: ["@jigsaw-ds/design-system"],
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  webpack: (config) => {
    // Prefer Phosphor's ESM entry: its CommonJS root breaks under Next's SSR build.
    // See "Next.js + Phosphor icons" in Jigsaw's docs/using-jigsaw.md.
    const conditions: string[] = config.resolve.conditionNames ?? [
      "browser",
      "module",
      "require",
      "default",
    ];
    config.resolve.conditionNames = ["import", ...conditions.filter((c) => c !== "import")];
    return config;
  },
};

export default nextConfig;
