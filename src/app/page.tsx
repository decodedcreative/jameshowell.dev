// Placeholder: replaced by the real home page in step 3.
import { Badge } from "@jigsaw-ds/design-system/badge";
import { Heading } from "@jigsaw-ds/design-system/heading";
import { Text } from "@jigsaw-ds/design-system/text";
import { Container } from "@/components/container";

export default function HomePage() {
  return (
    <Container className="flex flex-col gap-6 py-32">
      <Badge variant="success" className="self-start">
        Built on Jigsaw 0.4
      </Badge>
      <Heading as="h1">James Howell</Heading>
      <Text as="p" muted>
        Frontend and design systems engineer. The full site is on its way.
      </Text>
    </Container>
  );
}
