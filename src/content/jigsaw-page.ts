// Copy for the Jigsaw page at /jigsaw, taken from the "Jigsaw" artboard on the
// "James Howell — Portfolio" Claude Design canvas. Step 5 builds the page from this.
// (The home page's Jigsaw section has its own copy in home.ts.)
//
// Colour swatches, the type specimen and the semantic → value table should be generated from the
// installed @jigsaw-ds packages, not hard-coded, so the page can't drift from the real tokens.
// The values listed below are what the artboard showed, as a reference.

export const jigsawPageMeta = {
  title: "Jigsaw",
  description:
    "Jigsaw, my open-source design system: tokens as the single source, layered themes, accessible React Aria components and a Figma sync plugin.",
};

export const jigsawPageHero = {
  eyebrow: "Personal project · MIT licensed",
  title: "Jigsaw",
  intro:
    "My own design system, built to explore the workflow between design and code: tokens as the single source, themes layered on top, accessible components on React Aria, and Figma kept in step by a plugin I wrote. This site runs on it.",
  primaryCta: { label: "View the repo", href: "https://github.com/decodedcreative/jigsaw" },
  // TODO: Storybook URL (shares the TODO in home.ts). Hide the button until set.
  storybookHref: null as string | null,
};

export const jigsawPackages = {
  title: "A Turborepo of small, lockstep packages",
  items: [
    {
      name: "@jigsaw-ds/tokens",
      body: "Shared spacing, type, radius, shadow and motion; the Tailwind v4 theme CSS; Figma JSON.",
    },
    {
      name: "@jigsaw-ds/theme-default",
      body: "Light and dark semantic colour tokens as CSS variables.",
    },
    {
      name: "@jigsaw-ds/theme-portfolio",
      // Render [data-theme="portfolio"] as inline code.
      body: 'Layers on the default theme under [data-theme="portfolio"]. You\'re looking at it.',
    },
    {
      name: "@jigsaw-ds/design-system",
      body: "24 React components on React Aria, styled with CVA and tokens as Tailwind classes.",
    },
  ],
};

export const jigsawPipeline = {
  title: "Code is the signed-off source; Figma follows",
  intro:
    "I replaced Tokens Studio with my own Figma plugin, Jigsaw variable sync. Saving token JSON rebuilds the CSS, Storybook and the Figma payload in one go.",
  steps: [
    { kind: "Source", name: "Token JSON", note: "base + semantic", emphasis: true },
    { kind: "Build", name: "Style Dictionary", note: "watch mode in dev" },
    { kind: "Output", name: "CSS vars + Tailwind", note: "shared by DS and apps" },
    { kind: "Output", name: "Figma JSON", note: "→ variable sync plugin" },
    { kind: "Design", name: "Figma variables", note: "always match code" },
  ],
};

export const jigsawTheme = {
  title: "Portfolio theme",
  palettes: ["navy", "orange"], // scales 50–900, read from the tokens
  type: {
    headingLabel: "font.family.heading · Space Grotesk",
    headingSamples: ["Aa — 5xl / 3rem", "Section heading — 3xl"],
    bodyLabel: "font.family.body · Inter",
    bodySample: "Body copy at lg, relaxed line height, foreground.secondary on surface.raised.",
  },
  semanticTitle: "semantic → value",
  // As shown on the artboard; generate from the portfolio theme's semantic tokens.
  semanticExamples: [
    ["surface.default", "navy.800"],
    ["surface.raised", "navy.700"],
    ["foreground.primary", "navy.50"],
    ["interactive.primary", "orange.600"],
    ["link.default", "orange.500"],
    ["focus.ring", "orange.600"],
  ],
};

export const jigsawComponents = {
  title: "24 components",
  intro:
    "Behaviour and accessibility from React Aria, looks from CVA variants over tokens, and every part overridable through classNameOverrides.",
  // Ideally read from the design-system package's exports so the list stays current.
  names: [
    "Avatar",
    "Badge",
    "Button",
    "Card",
    "Checkbox",
    "Checkbox group",
    "Disclosure",
    "Form",
    "Heading",
    "Icon",
    "Input",
    "Link",
    "Modal",
    "Navigation",
    "Number field",
    "Radio group",
    "Search field",
    "Select",
    "Skeleton",
    "Tabs",
    "Text",
    "Textarea",
    "Toast",
    "Tooltip",
  ],
  codeSample: {
    filename: "button/Button.styles.ts",
    // Abridged from the real file in the Jigsaw repo.
    code: `export const buttonStyles = {
  component: cva([
    "inline-flex items-center font-medium",
    "focus-visible:ring-2 ring-interactive-accent",
    "data-disabled:opacity-50",
  ], {
    variants: {
      variant: {
        primary: "bg-interactive-primary …",
        outline: "border-border-strong …",
      },
      size: { sm, md, lg },
    },
  }),
};`,
  },
};

export const jigsawPractices = [
  {
    title: "Releases with a paper trail",
    body: "Maintainers version and tag from main; publishing a GitHub Release documents the change and triggers CI to publish to npm once tests and lint pass.",
  },
  {
    title: "Dogfooded by real apps",
    body: "A Next.js 15 app, Storybook, my React Data Dashboard and this portfolio all consume the published packages, so rough edges show up fast.",
  },
  {
    title: "A blueprint for client work",
    body: "The token pipeline, release process and conventions here are the patterns I take into consultancy — proven on my own system first.",
    cta: { label: "See it applied", href: "/work/bones" },
  },
];
