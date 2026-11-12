import { ArrowDownIcon } from "@phosphor-icons/react/dist/ssr";
import { Heading } from "@jigsaw-ds/design-system/heading";
import { Icon } from "@jigsaw-ds/design-system/icon";
import { LinkButton } from "@jigsaw-ds/design-system/link";
import { Text } from "@jigsaw-ds/design-system/text";
import { Container } from "@/components/container";
import { hero } from "@/content/home";
import { Specimen } from "./specimen";

export function Hero() {
  return (
    <Container className="flex flex-wrap items-center gap-14 py-20 sm:py-24">
      <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-7">
        <p className="border-border-default bg-surface-raised text-foreground-secondary inline-flex items-center gap-2.5 self-start rounded-full border px-3.5 py-1.5 text-sm font-medium">
          <span aria-hidden="true" className="bg-state-success size-2 rounded-full" />
          {hero.status}
        </p>
        <Heading as="h1" className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.06] tracking-tight">
          {hero.titleLead} <span className="text-interactive-primary">{hero.titleAccent}</span>
        </Heading>
        <Text as="p" size="lg" className="text-foreground-secondary max-w-xl leading-relaxed">
          {hero.intro}
        </Text>
        <div className="flex flex-wrap gap-3.5">
          <LinkButton href={hero.primaryCta.href} variant="primary" size="lg">
            {hero.primaryCta.label}
          </LinkButton>
          <LinkButton href={hero.secondaryCta.href} variant="outline" size="lg">
            {hero.secondaryCta.label}
            <Icon icon={ArrowDownIcon} size="sm" aria-hidden />
          </LinkButton>
        </div>
      </div>
      <Specimen />
    </Container>
  );
}
