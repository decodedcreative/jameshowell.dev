// Placeholder: proves the Jigsaw wiring. Replaced by the real home page in step 3.
// Presentational components come from subpaths so they render as Server Components;
// Button is a client component and creates its own boundary.
import { Badge } from "@jigsaw-ds/design-system/badge";
import { Button } from "@jigsaw-ds/design-system/button";
import { Heading } from "@jigsaw-ds/design-system/heading";
import { Text } from "@jigsaw-ds/design-system/text";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-8">
      <div>
        <Badge variant="success">Built on Jigsaw 0.3</Badge>
      </div>
      <Heading as="h1">James Howell</Heading>
      <Text as="p" muted classNameOverrides={{ component: "font-body" }}>
        Frontend and design systems engineer. The full site is on its way.
      </Text>
      <div>
        <Button variant="primary">It works</Button>
      </div>
    </main>
  );
}
