// Placeholder: replaced by the Bones case study in step 4.
import type { Metadata } from "next";
import { Heading } from "@jigsaw-ds/design-system/heading";
import { Container } from "@/components/container";

export const metadata: Metadata = { title: "Bones at Bella + Duke" };

export default function BonesPage() {
  return (
    <Container className="py-32">
      <Heading as="h1">Bones</Heading>
    </Container>
  );
}
