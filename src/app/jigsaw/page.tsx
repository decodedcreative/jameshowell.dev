// Placeholder: replaced by the Jigsaw page in step 5.
import type { Metadata } from "next";
import { Heading } from "@jigsaw-ds/design-system/heading";
import { Container } from "@/components/container";

export const metadata: Metadata = { title: "Jigsaw" };

export default function JigsawPage() {
  return (
    <Container className="py-32">
      <Heading as="h1">Jigsaw</Heading>
    </Container>
  );
}
