// Home page copy. Components in src/components/home render this; edit wording here.

export const hero = {
  status: "Open to staff and senior roles · permanent or contract",
  titleLead: "I turn sprawling UI codebases into systems teams",
  titleAccent: "can build on.",
  intro:
    "I'm James, a frontend engineer with 15+ years in React and TypeScript. I work where design, accessibility and tooling meet: design systems, frontend architecture, and the processes that keep them honest.",
  primaryCta: { label: "See my work", href: "/#work" },
  // TODO: point at the hosted CV PDF once it's in /public.
  secondaryCta: { label: "Download CV", href: "/#contact" },
};

export const proofPoints = [
  { value: "15+ yrs", label: "Frontend across fintech, enterprise banking and agency work" },
  { value: "~40 → 5", label: "Components in Mosaic, used across five production regulatory apps" },
  { value: "WCAG AA", label: "Barclays Blueprint, across React, Angular, React Native and web" },
];

export const problems = {
  eyebrow: "What I solve",
  title: "Common problems I've solved",
  items: [
    {
      problem: "“Every app builds UI its own way.”",
      approach:
        "I replace per-project choices of dependencies and patterns with one shared component library and one way of building UI.",
      proof: "Mosaic at Droit — ~40 components, five production apps.",
    },
    {
      problem: "“Figma and the code don't match.”",
      approach:
        "Tokens defined once, built with Style Dictionary, and synced with Figma variables, so a design change has a reviewed path into code.",
      proof:
        "my own Figma sync plugin in Jigsaw; the Figma-to-code token sync for Bones at Bella + Duke.",
    },
    {
      problem: "“Accessibility is patchy, or bolted on at the end.”",
      approach:
        "Accessibility designed in from the start: working with accessibility specialists, building on proven headless behaviour, and running WCAG checks automatically.",
      proof:
        "Barclays Blueprint, WCAG AA with in-house accessibility specialists; Mosaic and Bones on React Aria; WCAG 2.2 AA checks on every story in Bones.",
    },
    {
      problem: "“Our stack makes it hard to hire.”",
      approach:
        "Incremental migration onto React and TypeScript, with component-driven practices introduced along the way.",
      proof: "moving apps from ClojureScript to React and TypeScript at Droit.",
    },
    {
      problem: "“Changes ship without a safety net.”",
      approach:
        "Unit, interaction and visual tests, checks on every pull request, and automated, documented releases in a TypeScript monorepo.",
      proof: "testing, CI and release pipelines for Mosaic, Jigsaw and Bones.",
    },
    {
      problem: "“Our data screens are a struggle.”",
      approach:
        "Complex workflow apps and data-dense interfaces built on AG Grid and TanStack Table, with performance and usability in mind.",
      proof: "regulatory workflow apps at Droit; my React Data Dashboard.",
    },
  ],
};

export type WorkItem = {
  meta: string;
  name: string;
  problem: string;
  did: string;
  outcomeLabel: string;
  outcome: string;
  href?: string;
};

export const work = {
  eyebrow: "Selected work",
  title: "Three design systems, three different problems.",
  items: [
    {
      meta: "Droit · Lead UI Engineer · 2022–2026",
      name: "Mosaic",
      problem: "Each regulatory app chose its own dependencies and UI approach.",
      did: "Led a React and TypeScript design system on React Aria and Tailwind, and built its testing, CI and automated releases in a monorepo.",
      outcomeLabel: "Outcome",
      outcome: "~40 components across five production apps, and one consistent way of building UI.",
    },
    {
      meta: "Barclays · Lead Front-End Engineer · 2018–2022",
      name: "Blueprint",
      problem:
        "One bank, many platforms, and strict accessibility, security and regulatory requirements.",
      did: "Built components across React, Angular, React Native and web with design and accessibility specialists, and supported teams adopting them.",
      outcomeLabel: "Outcome",
      outcome: "A WCAG AA system on Barclays Online Banking, Barclays.co.uk and Barclaycard.co.uk.",
    },
    {
      meta: "Bella + Duke · Design Systems Consultant · 2026 – now",
      name: "Bones",
      problem:
        "A component library shared by React apps and WordPress had drifted from Figma, with no tests and hand-run releases.",
      did: "Assessed it, set the target architecture and roadmap, proved the approach, and am now leading the build of its replacement.",
      outcomeLabel: "So far",
      outcome:
        "Packages released to npm, first components shipping, and every pull request checked before it can merge.",
      href: "/work/bones",
    },
  ] satisfies WorkItem[],
};

export const jigsaw = {
  badge: "Open source · MIT · on npm",
  title: "Jigsaw",
  intro:
    "My own design system, built in the open. It's where I prove ideas before using them at work, and where the best patterns from my client work end up. This site is built with it.",
  install: "npm install @jigsaw-ds/design-system @jigsaw-ds/tokens @jigsaw-ds/theme-default",
  releasesHref: "https://github.com/decodedcreative/jigsaw/releases",
  // TODO: add the hosted Storybook URL.
  storybookHref: null as string | null,
  features: [
    {
      title: "Tokens are the source",
      body: "One set of JSON, built by Style Dictionary into CSS variables, a Tailwind v4 theme and Figma's variables.",
    },
    {
      title: "Themes that layer",
      body: "A default light and dark theme, plus themes like this site's that layer on top through a data-theme attribute.",
    },
    {
      title: "Accessible components",
      body: "24 components on React Aria, styled with CVA variants over tokens, with every part overridable.",
    },
    {
      title: "Figma follows code",
      body: "My own Figma plugin syncs variables from the signed-off code, in place of Tokens Studio.",
    },
    {
      title: "Releases with a paper trail",
      body: "Packages versioned in lockstep. Publishing a GitHub Release documents the change and triggers CI to publish to npm.",
    },
    {
      title: "Proven, then reused",
      body: "Ideas get tried here first, and the best patterns from my client work are rebuilt here as they mature.",
    },
  ],
  usedBy: [
    { label: "This portfolio" },
    {
      label: "React Data Dashboard: Next.js, AG Grid, Prisma",
      href: "https://github.com/decodedcreative/react-data-dashboard",
    },
    { label: "A Next.js dogfood app and Storybook in the repo" },
  ],
};

export const howIWork = {
  eyebrow: "How I work",
  title: "What it's like to have me on the team.",
  intro:
    "I trained in graphic design as well as engineering, so I'm comfortable on both sides of the handoff.",
  points: [
    {
      title: "I write decisions down",
      body: "Decision records with the options and the reasoning, so anyone joining later knows why, not just what.",
    },
    {
      title: "Adoption beats my preferences",
      body: "I'll switch to the team's tooling if it means the work gets used. A system nobody adopts has failed.",
    },
    {
      title: "Quality from day one",
      body: "Tests, accessibility checks and CI go in before the second component, not after the fortieth.",
    },
    {
      title: "AI, used deliberately",
      body: "Claude Code and Cursor day to day, with repo conventions that people and agents both follow.",
    },
  ],
};

export const experience = {
  title: "Experience",
  roles: [
    { dates: "2026 – now", role: "Design Systems Consultant", org: "Bella + Duke (contract)" },
    { dates: "2022 – 2026", role: "Lead UI Engineer", org: "Droit Financial Technologies" },
    {
      dates: "2018 – 2022",
      role: "Lead Front-End Engineer",
      org: "Barclays Corporate & Investment Bank",
    },
    {
      dates: "2007 – 2017",
      role: "Front-end developer to senior",
      org: "AIA Worldwide, Maynard Malone, McCormack & Morrison, Amp Communications",
    },
  ],
};

export const contact = {
  title: "Hiring?",
  body: "I'm looking for staff and senior roles in frontend and design engineering, permanent or contract. Happy to talk through any of this work in more depth.",
};
