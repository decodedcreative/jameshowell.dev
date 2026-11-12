import { Badge } from "@jigsaw-ds/design-system/badge";
import { Button } from "@jigsaw-ds/design-system/button";
import { Input } from "@jigsaw-ds/design-system/input";

const swatches = [
  "bg-navy-900",
  "bg-navy-700",
  "bg-navy-500",
  "bg-navy-300",
  "bg-navy-100",
  "bg-orange-800",
  "bg-orange-600",
  "bg-orange-500",
  "bg-orange-300",
  "bg-orange-100",
];

/**
 * A panel of real Jigsaw components in the portfolio theme. It's a showcase, not a form, so it's
 * `inert`: nothing in it can be focused or used, and the figure caption names it for screen readers.
 */
export function Specimen() {
  return (
    <figure className="border-border-default bg-surface-raised m-0 min-w-0 flex-[1_1_420px] overflow-hidden rounded-xl border">
      <figcaption className="border-border-default text-foreground-tertiary flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b px-4 py-3 font-mono text-xs">
        <span>Live Jigsaw components</span>
        <span className="text-interactive-primary">data-theme=&quot;portfolio&quot;</span>
      </figcaption>
      <div inert className="flex flex-col gap-6 p-6">
        <div className="flex flex-col gap-2.5">
          <span className="text-foreground-muted font-mono text-xs">Button / variant</span>
          <div className="flex flex-wrap gap-2.5">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="text-foreground-muted font-mono text-xs">color / navy · orange</span>
          <div className="grid grid-cols-10 gap-1">
            {swatches.map((swatch) => (
              <span
                key={swatch}
                className={`${swatch} border-border-default h-7 rounded-sm border`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="bg-surface-default border-border-default flex min-w-0 flex-[1_1_160px] flex-col rounded-lg border p-3.5">
            <Input label="Email" placeholder="you@company.com" />
          </div>
          <div className="bg-surface-default border-border-default flex min-w-0 flex-[1_1_160px] flex-col gap-2.5 rounded-lg border p-3.5">
            <span className="text-foreground-muted text-xs">Badge</span>
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="success" size="sm">
                Passing
              </Badge>
              <Badge variant="warning" size="sm">
                Review
              </Badge>
            </div>
            <span className="text-foreground-muted text-xs">
              Built on React Aria · WCAG AA target
            </span>
          </div>
        </div>
        <pre className="bg-navy-900 text-foreground-secondary m-0 overflow-x-auto rounded-lg px-4 py-3.5 font-mono text-xs leading-relaxed">
          <span className="text-foreground-muted">
            {"// this site is built on my own design system"}
          </span>
          {"\n"}
          <span className="text-link-default">&quot;interactive&quot;</span>
          {": { "}
          <span className="text-link-default">&quot;primary&quot;</span>
          {": "}
          <span className="text-navy-100">&quot;#ff6b35&quot;</span>
          {" }"}
        </pre>
      </div>
    </figure>
  );
}
