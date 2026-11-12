#!/usr/bin/env node
// Link the site to a local Jigsaw checkout, so Jigsaw fixes can be tried here before they're released.
//
//   npm run jigsaw:link      build local Jigsaw and symlink its packages into node_modules
//   npm run jigsaw:unlink    reinstall the published packages from npm
//
// package.json is never changed: CI and hosting always use the published versions.
// Set JIGSAW_DIR if your checkout isn't at ../jigsaw.
import { execSync } from "node:child_process";
import { existsSync, lstatSync, rmSync, symlinkSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const jigsawDir = resolve(root, process.env.JIGSAW_DIR ?? "../jigsaw");

// npm package name → folder in the Jigsaw monorepo
const packages = {
  "@jigsaw-ds/design-system": "packages/design-system",
  "@jigsaw-ds/tokens": "packages/tokens",
  "@jigsaw-ds/theme-default": "packages/themes/default",
  "@jigsaw-ds/theme-portfolio": "packages/themes/portfolio",
};

const run = (cmd, cwd) =>
  execSync(cmd, { cwd, stdio: "inherit", env: { ...process.env, TURBO_TELEMETRY_DISABLED: "1" } });

function link() {
  if (!existsSync(join(jigsawDir, "turbo.json"))) {
    console.error(`No Jigsaw checkout at ${jigsawDir}. Clone it there or set JIGSAW_DIR.`);
    process.exit(1);
  }
  console.log(`Building Jigsaw packages in ${jigsawDir}…`);
  const filters = Object.keys(packages)
    .map((name) => `--filter=${name}`)
    .join(" ");
  run(`npx turbo run build ${filters}`, jigsawDir);

  for (const [name, folder] of Object.entries(packages)) {
    const target = join(jigsawDir, folder);
    const link = join(root, "node_modules", name);
    rmSync(link, { recursive: true, force: true });
    symlinkSync(relative(dirname(link), target), link, "dir");
    console.log(`linked ${name} → ${target}`);
  }
  console.log("\nLinked. Restart `npm run dev`. After changing Jigsaw, run this again to rebuild.");
}

function unlink() {
  const linked = Object.keys(packages).filter((name) => {
    const path = join(root, "node_modules", name);
    return existsSync(path) && lstatSync(path).isSymbolicLink();
  });
  for (const name of linked) rmSync(join(root, "node_modules", name), { force: true });
  run("npm install --no-audit --no-fund", root);
  console.log("Unlinked. Using the published Jigsaw packages from npm.");
}

if (process.argv[2] === "unlink") unlink();
else link();
