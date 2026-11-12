# jameshowell.dev

James Howell's portfolio site: a static Next.js 15 site built on his own design system,
[Jigsaw](https://github.com/decodedcreative/jigsaw) (`@jigsaw-ds/*` on npm), in its portfolio theme.
It positions James for staff and senior frontend / design-systems roles, permanent or contract.

## How James likes to work

- **Work in steps and stop after each one.** Propose what a step will do, wait for a go-ahead,
  then do it, check it, commit it, and report back. Don't roll into the next step unasked.
- Frank, direct guidance. Flag problems and trade-offs plainly.
- When something in Jigsaw is wrong, raise or fix it in Jigsaw (see below), don't just work around it here.

## Stack and structure

- Next.js 15 App Router, React 19, TypeScript 5.9 (pinned `~5.9`), Tailwind v4, static export.
- `next.config.ts`: `output: "export"` + `trailingSlash: true` (each route is `<route>/index.html`,
  so any static host works), plus the Phosphor ESM fix from Jigsaw's `docs/using-jigsaw.md`.
- Fonts are self-hosted from Fontsource (`@fontsource-variable/*`), not `next/font`, so builds need no network.
  `globals.css` points Jigsaw's `--font-body` / `--font-heading` / `--font-mono` at them.
- Theme CSS is imported unlayered in `src/app/layout.tsx`, in Jigsaw's required order; `<html data-theme="portfolio">`.
- `src/app/providers.tsx`: React Aria `RouterProvider`, so Jigsaw links use Next's router.
- **Copy lives in `src/content/`** (`site.ts`, `home.ts`, `bones.ts`, `jigsaw-page.ts`). Components in `src/components/` are layout only.
- Use Jigsaw components (Heading, Text, Card, Badge, Link, LinkButton, Icon, Input, Navigation…) wherever they fit.
  Import presentational ones from subpaths (`@jigsaw-ds/design-system/heading`) so they stay Server Components.
  Components take `className` for outside layout and `classNameOverrides` for internal slots.
- Prefer semantic colour utilities (`bg-surface-raised`, `text-foreground-secondary`, `text-interactive-primary`).
  The dark bands use raw `bg-navy-900` because Jigsaw has no "sunken surface" token yet.

## Scripts

- `npm run dev` / `npm run build` (writes `out/`) / `npm run preview` (serves `out/`)
- `npm run typecheck`, `npm run lint`, `npm run format`
- `npm run jigsaw:link` / `npm run jigsaw:unlink` (below)

## Developing against a local Jigsaw

`npm run jigsaw:link` builds the Jigsaw checkout at `../jigsaw` (or `JIGSAW_DIR`) and symlinks its four
packages into `node_modules`; `jigsaw:unlink` reinstalls the published versions. `package.json` always keeps
the published version (`~0.4.0`), so CI and hosting are unaffected; never commit `file:` deps.

While linked: `next.config.ts` turns off webpack symlink resolution and `tsconfig.json` has
`preserveSymlinks`, so Jigsaw's dependencies (React, React Aria, their types) resolve from this site.
Without that there are two Reacts and Jigsaw links ignore the RouterProvider. After changing Jigsaw, run
`jigsaw:link` again to rebuild.

## Jigsaw conventions (from its CONTRIBUTING.md)

- Tickets live in Jira project **JSW** on `decodedcreative.atlassian.net`.
- One PR per ticket, branched from `main`, named `feat/jsw-XX-…` or `fix/jsw-XX-…`. No `.changeset/*.md` in PRs.
- James cuts releases himself (`npm run version-and-tag:*`). Plan: collect fixes found while building this site,
  then one Jigsaw release at the end, then bump this site to it and unlink.
- Open: [PR #97](https://github.com/decodedcreative/jigsaw/pull/97) fixes JSW-121 (MobileNavigation as a real
  modal). JSW-122 (axe in Jigsaw's unit tests) and JSW-18 (single responsive Navigation) are To Do.

## Before committing

1. `npm run typecheck && npm run lint && npm run build` all pass.
2. Look at the changed pages in a real browser at 1440px and 390px: no horizontal overflow, no console errors.
3. Run axe (WCAG 2.2 AA + best-practice) on changed pages at both widths; aim for zero violations.
4. Keyboard check anything interactive.

## Plan and status

1. ✅ Scaffold (Next.js, Jigsaw, portfolio theme, fonts)
2. ✅ Header, navigation (Jigsaw Navigation + MobileNavigation), footer, skip link
3. ✅ Home page: hero with live Jigsaw specimen, track record, common problems, selected work, Jigsaw product
   section, how I work, experience, contact
4. ⬜ Bones case study at `/work/bones` (placeholder page exists). **All copy is in `src/content/bones.ts`**
   (taken from the "Case study" artboard of James's Claude Design canvas, which Claude Code can't open; the
   canvas link is https://claude.ai/artifact/NdnEiJHwjTv3sUKvDxiySA if James wants to check the layout).
   Sections in order: hero + facts, where it started, findings, principles + workstreams, target-architecture
   diagram, decision records, prove, shipped so far, takeaway quote, CTA. Bella + Duke is named; leave out
   people's names, Jira keys, repo/Storybook URLs, costs and release-credential detail, and don't add counts
   of findings, decision records or migrated apps.
5. ⬜ Jigsaw page at `/jigsaw` (placeholder page exists). **Copy is in `src/content/jigsaw-page.ts`** (from
   the "Jigsaw" artboard). Generate swatches, the type specimen and the semantic → value table from the
   installed `@jigsaw-ds/*` tokens rather than hard-coding them.
6. ⬜ README, GitHub Actions CI (typecheck, lint, build on PRs), metadata and social card, favicon, phone-width pass.
7. ⬜ Hosting (static: GitHub Pages, Netlify or Vercel).

## Open TODOs

- CV PDF for "Download CV" (currently scrolls to contact): `src/content/home.ts`
- LinkedIn URL: `src/content/site.ts` (button hidden until set)
- Jigsaw Storybook URL: `src/content/home.ts` (button hidden until set)
- Favicon (step 6)
