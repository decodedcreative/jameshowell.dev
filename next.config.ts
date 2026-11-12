import { existsSync, lstatSync } from "node:fs";
import type { NextConfig } from "next";

// True while `npm run jigsaw:link` has symlinked a local Jigsaw checkout into node_modules.
const jigsawLinked = (() => {
  const path = "node_modules/@jigsaw-ds/design-system";
  return existsSync(path) && lstatSync(path).isSymbolicLink();
})();

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

    // When Jigsaw is linked, resolve its dependencies from this site's node_modules rather than
    // the checkout's, so there is one copy of React and React Aria (and one RouterProvider context).
    if (jigsawLinked) config.resolve.symlinks = false;

    return config;
  },
};

export default nextConfig;
