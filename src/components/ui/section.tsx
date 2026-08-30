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
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          {eyebrow ? <p className="font-mono text-sm uppercase tracking-[0.18em] text-sky-300">{eyebrow}</p> : null}
          <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{description}</p> : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}