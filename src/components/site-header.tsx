"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { LinkButton } from "@jigsaw-ds/design-system/link";
import {
  MobileNavigation,
  Navigation,
  NavigationActions,
  NavigationBrand,
  NavigationInner,
  NavigationLink,
  NavigationLinks,
} from "@jigsaw-ds/design-system/navigation";
import { contactHref, navItems, site } from "@/content/site";

function isCurrent(pathname: string, matches?: string[]) {
  return matches?.some((prefix) => pathname.startsWith(prefix)) ?? false;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <Navigation aria-label="Main" className="border-border-subtle bg-surface-default">
        <NavigationInner className="h-18">
          <NavigationBrand href="/" className="gap-3">
            <span
              aria-hidden="true"
              className="bg-interactive-primary text-foreground-inverse font-heading flex size-9 items-center justify-center rounded-md text-sm font-bold"
            >
              JH
            </span>
            <span className="font-heading">{site.name}</span>
          </NavigationBrand>

          <NavigationLinks>
            {navItems.map((item) => (
              <NavigationLink
                key={item.href}
                href={item.href}
                isCurrent={isCurrent(pathname, item.matches)}
              >
                {item.label}
              </NavigationLink>
            ))}
          </NavigationLinks>

          <NavigationActions>
            <LinkButton href={contactHref} variant="primary" className="hidden md:inline-flex">
              Get in touch
            </LinkButton>
            <MobileNavigation
              isOpen={isMenuOpen}
              onOpenChange={setIsMenuOpen}
              links={[
                ...navItems.map((item) => ({
                  href: item.href,
                  label: item.label,
                  isCurrent: isCurrent(pathname, item.matches),
                })),
                { href: contactHref, label: "Get in touch" },
              ]}
            />
          </NavigationActions>
        </NavigationInner>
      </Navigation>
    </header>
  );
}
