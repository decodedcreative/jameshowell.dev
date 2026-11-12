import type { ReactNode } from "react";

/** Page-width wrapper. Matches the horizontal padding of Jigsaw's Navigation container. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={["mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}
