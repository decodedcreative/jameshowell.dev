import { Link } from "@jigsaw-ds/design-system/link";
import { Text } from "@jigsaw-ds/design-system/text";
import { Container } from "@/components/container";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-border-subtle border-t">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-8">
        <Text as="p" size="sm" muted>
          © {new Date().getFullYear()} {site.name}
        </Text>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href={site.github} variant="muted" size="md">
            GitHub
          </Link>
          <Link href={site.sourceRepo} variant="muted" size="md">
            Source for this site
          </Link>
          <Text as="p" size="sm" muted>
            Built with{" "}
            <Link href={site.jigsawRepo} variant="subtle" size="md">
              Jigsaw
            </Link>{" "}
            · <span className="font-mono">@jigsaw-ds/theme-portfolio</span>
          </Text>
        </div>
      </Container>
    </footer>
  );
}
