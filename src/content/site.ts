// Site-wide content: navigation, contact links and footer.
// Pages import copy from src/content so their components stay layout-only.

export const site = {
  name: "James Howell",
  email: "jhowell.1985@gmail.com",
  github: "https://github.com/decodedcreative",
  // TODO: add the LinkedIn profile URL.
  linkedin: null as string | null,
  sourceRepo: "https://github.com/decodedcreative/jameshowell.dev",
  jigsawRepo: "https://github.com/decodedcreative/jigsaw",
};

export type NavItem = {
  label: string;
  href: string;
  /** Path prefixes that mark this item as the current page. */
  matches?: string[];
};

export const navItems: NavItem[] = [
  { label: "What I solve", href: "/#problems" },
  { label: "Work", href: "/#work", matches: ["/work"] },
  { label: "Jigsaw", href: "/jigsaw", matches: ["/jigsaw"] },
  { label: "Experience", href: "/#experience" },
];

export const contactHref = "/#contact";
