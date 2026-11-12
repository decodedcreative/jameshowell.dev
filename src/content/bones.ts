// Copy for the Bones case study at /work/bones, taken from the "Case study" artboard on the
// "James Howell — Portfolio" Claude Design canvas. Step 4 builds the page from this.
//
// Rules for this page (James's): Bella + Duke is named. Leave out people's names, Jira keys,
// repo and Storybook URLs, costs and release-credential detail, and don't add counts of
// findings, decision records or migrated apps.

export const bonesMeta = {
  title: "Bones at Bella + Duke",
  description:
    "Reviewing Bella + Duke's design system and leading the build of its replacement, Bones.",
};

export const bonesHero = {
  eyebrow: "Case study · Consultancy · 2026 – present",
  title: "Bones: rebuilding Bella + Duke's design system",
  intro:
    "One component library served React customer apps and a WordPress marketing site. It had drifted from Figma, had no tests or pull-request checks, and was released by hand. I was brought in to assess it and define where it should go, then to prove and build its replacement, Bones.",
  facts: [
    { label: "Client", value: "Bella + Duke" },
    { label: "Role", value: "Design Systems Consultant (contract)" },
    { label: "Scope", value: "Review, target state, roadmap, proof of concept, build" },
    {
      label: "Stack",
      value:
        "React, TypeScript, React Aria, Tailwind, CVA, Style Dictionary, Storybook, Vitest, Changesets, GitHub Actions",
    },
  ],
};

export const bonesContext = {
  title: "Where it started",
  paragraphs: [
    "The marketing pages existed before the library did, so components were extracted from those pages rather than pages being built from components. The legacy pages stayed the reference: when a page and a component disagreed, nothing said which one was right.",
    "Phase one was discovery. I ran structured questions with engineering and design, mapped the current architecture and processes, and read the code end to end, so every finding is backed by what's actually in the repo rather than opinion.",
  ],
};

export const bonesFindings = {
  eyebrow: "Assess",
  title: "What the review found",
  intro:
    "Each one logged with its area, evidence and impact, then paired with a direction for fixing it.",
  areas: [
    "Architecture",
    "Delivery",
    "Styling",
    "Quality",
    "Documentation",
    "Design tokens",
    "Accessibility",
    "Design → code",
    "Process",
  ],
  highlights: [
    {
      area: "Design tokens",
      title: "Only colour was defined as tokens",
      body: "Type, spacing, radii and breakpoints were literals or framework defaults, and font families were copied into three stylesheets. With no token source, Figma could only be compared by eye.",
    },
    {
      area: "Architecture",
      title: "Two hand-kept copies of every component",
      body: "Each WordPress block rebuilt its React component's markup by hand in a PHP template. Nothing checked that the two still matched.",
    },
    {
      area: "Architecture",
      title: "Layouts became components",
      body: "The page builder couldn't nest components, so every new arrangement of the same UI was a new component — and product journeys lived inside the design-system package.",
    },
    {
      area: "Quality",
      title: "No tests, and no gate on merge",
      body: "No unit, interaction, visual or accessibility tests, and every pipeline was started by hand — so a change could merge without a build.",
    },
    {
      area: "Accessibility",
      title: "Interactive patterns hand-rolled each time",
      body: "Tabs, dialogs, disclosures and toggles were each written separately, so ARIA wiring and keyboard support differed from one component to the next.",
    },
    {
      area: "Delivery",
      title: "Every release hit every page at once",
      body: 'Versions were typed in by hand with no changelog, and WordPress loaded an overwritten "latest" asset path — no page could stay on a known version, and caches could mix old and new.',
    },
  ],
};

export const bonesRecommendations = {
  eyebrow: "Recommend",
  title: "Five principles, three workstreams",
  intro:
    "Agreed direction first, then work tracked as tickets so progress is visible to everyone. The current package keeps shipping until the new one is ready.",
  principles: [
    "Marketing pages stay on WordPress; customer flows stay in React.",
    "Publish the rebuild as a new package, so consumers move once.",
    "Components are content shells: content comes in through props and children.",
    "The system owns generic patterns; product journeys stay with the product.",
    "Sync code and Figma by hand until the automated token sync is in place.",
  ],
  workstreams: [
    {
      title: "WordPress landing pages",
      body: "The block editor renders the real React component and saves its HTML; live pages serve that HTML without React. Interactive parts ship their own data hooks and vanilla behaviour — no more hand-copied templates.",
    },
    {
      title: "React applications",
      body: "A new monorepo with a theme package and a component package on a headless base, styles beside each component, and build, tests, accessibility and visual checks on every pull request.",
    },
    {
      title: "Design ↔ development alignment",
      body: "Tokens defined once. Designers edit Figma variables; a custom plugin opens a pull request that engineering and design review together. Each release records the Figma version it matches.",
    },
  ],
};

/** The target-architecture diagram: a pipeline row, then packages, then consumers. */
export const bonesArchitecture = {
  eyebrow: "Target architecture",
  title: "One source, every consumer",
  pipeline: [
    { kind: "Design", name: "Figma variables" },
    { kind: "Custom plugin", name: "Opens a pull request on GitHub" },
    {
      kind: "Source of truth",
      name: "Token JSON",
      note: "reviewed by eng + design",
      emphasis: true,
    },
    { kind: "Build", name: "Style Dictionary", note: "Tailwind theme · CSS vars" },
  ],
  packages: [
    { name: "bones-tokens", note: "spacing, type, radii, shadow" },
    { name: "bones-theme", note: "colours, Tailwind theme, fonts" },
    { name: "bones-icons", note: "synced from Figma" },
    { name: "bones-react", note: "components on React Aria" },
  ],
  consumers: [
    {
      kind: "Consumer",
      name: "React customer apps",
      note: "account and sign-up journeys — each compiles Tailwind in its own build",
    },
    {
      kind: "Consumer",
      name: "WordPress marketing pages",
      note: "editor renders React, saves HTML; served without React",
    },
    { kind: "Docs", name: "Storybook", note: "foundations pages read the built tokens" },
  ],
  caption:
    "Simplified. Works on any Figma plan through the Plugin API — no Enterprise upgrade needed for the sync.",
};

export const bonesDecisions = {
  eyebrow: "Decisions on the record",
  title: "Decision records, so the “why” survives",
  intro:
    "Every technical choice gets a page: context, options, decision, consequences. When the team pushed back — on tooling, on styling rules — the record was superseded openly rather than quietly ignored.",
  examples: [
    "Align monorepo tooling with the team's conventions",
    "Styles beside each component, one variant call per part",
    "Name component parts with data attributes for CSS and analytics",
    "Keep components to Figma's spacing steps, enforced by a test",
    "Apps take design values from the theme, not framework defaults",
  ],
  featured: {
    status: "Complete",
    impact: "High impact",
    title: "Components have their own API, independent of the base library",
    sections: [
      {
        label: "Context",
        body: "Components sit on a third-party headless library, and the business wants to be able to swap it later without touching every app.",
      },
      {
        label: "Decision",
        // Render `onClick` and `disabled` as inline code.
        body: "Components take the props developers know from HTML — onClick, disabled — and map them onto the library inside.",
      },
      {
        label: "Enforced by",
        body: "A package check that fails the build if the base library's types leak into the public API.",
      },
    ],
  },
};

export const bonesProve = {
  eyebrow: "Prove",
  title: "From proof of concept to first releases",
  intro:
    "I started with a handful of components, taken from Figma through build, tests, docs and release, to test the whole life of a component before covering everything. Once the approach was proven, Bones moved into build: it now ships to npm, runs on GitHub with checks on every pull request, and is being adopted by the apps. Work is planned in two-week sprints and logged openly.",
  accessibility: {
    title: "Accessibility, automated",
    body: "Every story runs as a test against WCAG 2.2 AA with axe, plus checks that used to be manual:",
    checks: [
      "Target size",
      "Visible focus",
      "Reflow at 320px",
      "Text spacing",
      "High contrast mode",
      "Reduced motion",
      "Screen reader output",
    ],
  },
  cards: [
    {
      title: "Tokens checked against Figma",
      body: "Every token compared with the live Figma variables. It surfaced values that disagreed between pages of the design file, and a documented warning colour that failed text contrast — fixed in code, with the questions grouped for design to answer.",
    },
    {
      title: "A playground that road-tests it",
      body: "An app set up the way a product team would, consuming, extending and overriding the system. What it found — like width tokens that silently broke container queries — became tickets and fixes.",
    },
    {
      title: "Docs that can't drift",
      body: "Storybook lives beside the components, rebuilds the theme within a second of a token change, publishes on every merge and captures visual baselines for regression.",
    },
    {
      title: "Conventions for people and agents",
      body: "One conventions file the whole team and AI coding agents follow — naming, file layout, testing behaviour not implementation, and an accessibility checklist.",
    },
    {
      title: "Built in the team's own tooling",
      body: "I started with my preferred stack, then switched to the team's existing conventions after talking it through — adoption matters more than my preferences.",
    },
  ],
};

export const bonesShipped = {
  title: "Shipped so far",
  items: [
    {
      lead: "Released to npm.",
      body: "Tokens, theme, icons and components versioned and published together, with a changelog per package written from its own changes.",
    },
    {
      lead: "First components.",
      body: "Button with icons and other media, Text, Heading, and Icon, each matched to Figma.",
    },
    {
      lead: "Icons owned, synced from Figma.",
      body: "One command exports, cleans and checks every icon, including that it looks the same after cleaning, and lists what design needs to fix.",
    },
    {
      lead: "Nothing merges unchecked.",
      body: "Lint, types, every story as a browser test, unit tests on React 18 as well as 19, and a check of the built package run on each pull request.",
    },
    {
      lead: "Releases tested as apps get them.",
      body: "The packed packages are installed into a copy of the playground before publishing, and only CI can publish, through npm trusted publishing.",
    },
    {
      lead: "Moved to GitHub",
      body: "with CI, Chromatic and releases on GitHub Actions, and guides to working on Bones built into the playground.",
    },
  ],
  inProgress: {
    label: "In progress",
    title: "Figma → code token sync",
    body: "A Figma plugin that turns a designer's variable changes into token file changes and opens them as a pull request, with code names shown in Dev Mode.",
  },
  next: {
    label: "Next",
    body: "Form fields, adopting Bones in the customer portal, WordPress, Card and Accordion.",
  },
};

export const bonesTakeaway = {
  quote:
    "A design system fails on process before it fails on components. The work is giving every change — a colour, a spacing step, a release — a defined path from design to production.",
  attribution: "What I took from it",
};

export const bonesCta = {
  title: "Hiring for this kind of work?",
  primary: { label: "Get in touch", href: "/#contact" },
  secondary: { label: "See Jigsaw", href: "/jigsaw" },
};
