import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionShell({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={cn("px-4 py-20 sm:px-6 lg:px-8 lg:py-28", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70">
      <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({ title, subtitle, center = false }: { title: string; subtitle: string; center?: boolean }) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-pretty text-base leading-7 text-white/64 md:text-lg">{subtitle}</p>
    </div>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
      <div className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{value}</div>
      <div className="mt-1 text-sm text-white/58">{label}</div>
    </div>
  );
}
