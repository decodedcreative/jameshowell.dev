import type { ReactNode } from "react";
import { Heading } from "@jigsaw-ds/design-system/heading";
import { Text } from "@jigsaw-ds/design-system/text";

type SectionHeaderProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
};

/** Eyebrow, section heading and optional intro, as used by every home page section. */
export function SectionHeader({ id, eyebrow, title, intro }: SectionHeaderProps) {
  return (
    <div className="flex max-w-3xl flex-col gap-3.5">
      {eyebrow ? (
        <Text
          as="p"
          size="sm"
          weight="semibold"
          className="text-interactive-primary tracking-wider uppercase"
        >
          {eyebrow}
        </Text>
      ) : null}
      <Heading as="h2" id={id} className="text-4xl leading-tight sm:text-5xl">
        {title}
      </Heading>
      {intro ? (
        <Text as="p" size="lg" className="text-foreground-secondary leading-relaxed">
          {intro}
        </Text>
      ) : null}
    </div>
  );
}
