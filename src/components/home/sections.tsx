import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@jigsaw-ds/design-system/badge";
import { Card } from "@jigsaw-ds/design-system/card";
import { Heading } from "@jigsaw-ds/design-system/heading";
import { Icon } from "@jigsaw-ds/design-system/icon";
import { Link, LinkButton } from "@jigsaw-ds/design-system/link";
import { Text } from "@jigsaw-ds/design-system/text";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import {
  contact,
  experience,
  howIWork,
  jigsaw,
  problems,
  proofPoints,
  work,
  type WorkItem,
} from "@/content/home";
import { site } from "@/content/site";

/** Shared Card styling for the home page: roomier padding, full height in grids. */
const cardOverrides = { content: "flex h-full flex-col gap-3.5 p-7" };

export function ProofStrip() {
  return (
    <section aria-label="Track record" className="border-border-subtle bg-navy-900 border-y">
      <Container className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 py-10">
        {proofPoints.map((point) => (
          <div key={point.value} className="flex flex-col gap-1.5">
            <span className="font-heading text-4xl leading-none font-bold">{point.value}</span>
            <Text as="span" size="base" className="text-foreground-tertiary">
              {point.label}
            </Text>
          </div>
        ))}
      </Container>
    </section>
  );
}

export function Problems() {
  return (
    <section id="problems" aria-labelledby="problems-h" className="scroll-mt-20 pt-28">
      <Container className="flex flex-col gap-12">
        <SectionHeader id="problems-h" eyebrow={problems.eyebrow} title={problems.title} />
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-5 p-0">
          {problems.items.map((item) => (
            <li key={item.problem}>
              <Card className="h-full" classNameOverrides={cardOverrides}>
                <Heading as="h3" className="text-xl leading-snug">
                  {item.problem}
                </Heading>
                <Text as="p" className="text-foreground-secondary leading-relaxed">
                  {item.approach}
                </Text>
                <Text
                  as="p"
                  size="sm"
                  className="border-border-default text-foreground-tertiary mt-auto border-t pt-3.5"
                >
                  <strong className="text-foreground-primary font-semibold">Proof:</strong>{" "}
                  {item.proof}
                </Text>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function WorkCard({ item }: { item: WorkItem }) {
  const rows = [
    { label: "Problem", text: item.problem, strong: false },
    { label: "What I did", text: item.did, strong: false },
    { label: item.outcomeLabel, text: item.outcome, strong: true },
  ];
  return (
    <Card className="h-full" classNameOverrides={{ content: "flex h-full flex-col gap-5 p-8" }}>
      <div className="flex flex-col gap-1.5">
        <Text as="p" size="sm" className="text-foreground-tertiary">
          {item.meta}
        </Text>
        <Heading as="h3" className="text-3xl">
          {item.href ? (
            // The heading link names the card for screen readers; the CTA below repeats it visually.
            <a
              href={item.href}
              className="hover:text-interactive-primary focus-visible:ring-interactive-focus rounded-sm outline-hidden focus-visible:ring-2"
            >
              {item.name}
            </a>
          ) : (
            item.name
          )}
        </Heading>
      </div>
      <dl className="m-0 flex flex-col gap-4">
        {rows.map((row) => (
          <div key={row.label} className="flex flex-col gap-1">
            <dt className="text-foreground-muted text-xs font-semibold tracking-wider uppercase">
              {row.label}
            </dt>
            <dd
              className={`m-0 text-[0.9375rem] leading-relaxed ${row.strong ? "text-foreground-primary" : "text-foreground-secondary"}`}
            >
              {row.text}
            </dd>
          </div>
        ))}
      </dl>
      {item.href ? (
        // Visual cue only: the heading link above is the card's one focusable link.
        <span
          aria-hidden="true"
          className="text-interactive-accent mt-auto inline-flex items-center gap-1 font-medium"
        >
          Read the case study <Icon icon={ArrowRightIcon} size="sm" />
        </span>
      ) : null}
    </Card>
  );
}

export function Work() {
  return (
    <section id="work" aria-labelledby="work-h" className="scroll-mt-20 pt-28">
      <Container className="flex flex-col gap-10">
        <SectionHeader id="work-h" eyebrow={work.eyebrow} title={work.title} />
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-5 p-0">
          {work.items.map((item) => (
            <li key={item.name}>
              <WorkCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function JigsawProduct() {
  return (
    <section
      id="jigsaw"
      aria-labelledby="jigsaw-h"
      className="border-border-subtle bg-navy-900 mt-28 scroll-mt-20 border-y"
    >
      <Container className="flex flex-col gap-12 py-24">
        <div className="flex flex-wrap items-end gap-12">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-5">
            <Badge variant="outline" className="self-start font-mono">
              {jigsaw.badge}
            </Badge>
            <Heading as="h2" id="jigsaw-h" className="text-5xl tracking-tight sm:text-6xl">
              {jigsaw.title}
            </Heading>
            <Text as="p" size="lg" className="text-foreground-secondary max-w-2xl leading-relaxed">
              {jigsaw.intro}
            </Text>
            <div className="flex flex-wrap gap-3">
              <LinkButton href={site.jigsawRepo} variant="primary" size="lg">
                View on GitHub
              </LinkButton>
              <LinkButton href="/jigsaw" variant="outline" size="lg">
                Explore the system
              </LinkButton>
              {jigsaw.storybookHref ? (
                <LinkButton href={jigsaw.storybookHref} variant="outline" size="lg">
                  Storybook
                </LinkButton>
              ) : null}
            </div>
          </div>
          <div className="border-border-default bg-surface-raised min-w-0 flex-[1_1_420px] overflow-hidden rounded-xl border">
            <div className="border-border-default text-foreground-tertiary border-b px-4 py-2.5 font-mono text-xs">
              Install
            </div>
            <pre className="text-navy-100 m-0 px-4 py-4 font-mono text-[0.8125rem] leading-loose break-all whitespace-pre-wrap">
              <span className="text-foreground-muted">$ </span>
              {jigsaw.install}
            </pre>
            <div className="border-border-default flex flex-wrap justify-between gap-3 border-t px-4 py-3 text-sm">
              <span className="text-foreground-tertiary">React · TypeScript · Tailwind v4</span>
              <Link
                href={jigsaw.releasesHref}
                variant="accent"
                size="md"
                className="no-underline hover:underline"
              >
                What&apos;s new <Icon icon={ArrowRightIcon} size="sm" aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4 p-0">
          {jigsaw.features.map((feature) => (
            <li key={feature.title}>
              <Card
                className="h-full"
                classNameOverrides={{ content: "flex flex-col gap-2.5 p-6" }}
              >
                <Heading as="h3" className="text-lg">
                  {feature.title}
                </Heading>
                <Text as="p" className="text-foreground-secondary text-[0.9375rem] leading-relaxed">
                  {feature.body}
                </Text>
              </Card>
            </li>
          ))}
        </ul>

        <div className="border-border-subtle flex flex-wrap items-center gap-x-7 gap-y-3 border-t pt-6">
          <Text as="span" muted>
            Used by
          </Text>
          {jigsaw.usedBy.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                variant="accent"
                size="lg"
                className="no-underline hover:underline"
              >
                {item.label} <Icon icon={ArrowRightIcon} size="sm" aria-hidden />
              </Link>
            ) : (
              <Text key={item.label} as="span" className="text-foreground-secondary">
                {item.label}
              </Text>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}

export function HowIWork() {
  return (
    <section id="how" aria-labelledby="how-h" className="scroll-mt-20 pt-28">
      <Container className="flex flex-wrap gap-12">
        <div className="min-w-0 flex-[1_1_340px]">
          <SectionHeader
            id="how-h"
            eyebrow={howIWork.eyebrow}
            title={howIWork.title}
            intro={howIWork.intro}
          />
        </div>
        <ul className="border-border-default m-0 grid min-w-0 flex-[2_1_560px] list-none grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-px overflow-hidden rounded-xl border bg-[var(--color-border-default)] p-0">
          {howIWork.points.map((point) => (
            <li key={point.title} className="bg-surface-raised flex flex-col gap-2 p-6">
              <span aria-hidden="true" className="text-interactive-primary">
                <Icon icon={CheckIcon} size="md" />
              </span>
              <Heading as="h3" className="text-lg">
                {point.title}
              </Heading>
              <Text as="p" className="text-foreground-secondary text-[0.9375rem] leading-relaxed">
                {point.body}
              </Text>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-h" className="scroll-mt-20 pt-28">
      <Container className="flex flex-col gap-8">
        <Heading as="h2" id="experience-h" className="text-4xl">
          {experience.title}
        </Heading>
        <ol className="border-border-default m-0 list-none border-t p-0">
          {experience.roles.map((role) => (
            <li
              key={role.dates}
              className="border-border-default flex flex-wrap items-baseline gap-x-8 gap-y-1 border-b py-5"
            >
              <span className="text-foreground-tertiary flex-[0_0_10rem] font-mono text-sm">
                {role.dates}
              </span>
              <span className="min-w-0 flex-[1_1_26rem]">
                <strong className="text-lg font-semibold">{role.role}</strong>{" "}
                <span className="text-foreground-tertiary">· {role.org}</span>
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-h" className="scroll-mt-20 py-28">
      <Container>
        <div className="border-border-default bg-surface-raised flex flex-wrap items-center justify-between gap-10 rounded-2xl border px-8 py-12 sm:px-12 sm:py-14">
          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-3.5">
            <Heading as="h2" id="contact-h" className="text-4xl">
              {contact.title}
            </Heading>
            <Text as="p" size="lg" className="text-foreground-secondary leading-relaxed">
              {contact.body}
            </Text>
          </div>
          <div className="flex flex-[0_1_20rem] flex-col gap-3">
            <LinkButton href={`mailto:${site.email}`} variant="primary" size="lg">
              {site.email}
            </LinkButton>
            <div className="flex gap-3">
              <LinkButton href={site.github} variant="outline" size="md" className="flex-1">
                GitHub
              </LinkButton>
              {site.linkedin ? (
                <LinkButton href={site.linkedin} variant="outline" size="md" className="flex-1">
                  LinkedIn
                </LinkButton>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
