import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-20", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          {eyebrow ? <p className="font-mono text-xs uppercase tracking-[0.12em] text-zinc-500">{eyebrow}</p> : null}
          <h2 className="mt-3 text-2xl font-semibold text-zinc-100 sm:text-3xl">{title}</h2>
          {description ? <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">{description}</p> : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}