import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { InternalLinkItem } from "@/data/internal-links";

type InternalLinksSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: InternalLinkItem[];
  variant?: "dark" | "light";
  className?: string;
};

const shellClasses = {
  dark: "rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10",
  light: "rounded-[34px] border border-slate-200 bg-white/92 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.05)] md:p-10",
};

const eyebrowClasses = {
  dark: "text-brand-secondary/85",
  light: "text-slate-500",
};

const titleClasses = {
  dark: "text-white",
  light: "text-slate-950",
};

const descriptionClasses = {
  dark: "text-brand-slate",
  light: "text-slate-600",
};

const cardClasses = {
  dark: "border border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.06]",
  light: "border border-slate-200 bg-slate-50/75 hover:border-slate-300 hover:bg-white",
};

const cardTitleClasses = {
  dark: "text-white",
  light: "text-slate-950",
};

const cardDescriptionClasses = {
  dark: "text-white/72",
  light: "text-slate-600",
};

const linkClasses = {
  dark: "text-brand-secondary",
  light: "text-slate-900",
};

export function InternalLinksSection({
  eyebrow,
  title,
  description,
  items,
  variant = "dark",
  className,
}: InternalLinksSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className={cn(shellClasses[variant], className)}>
      <div className="max-w-3xl">
        <div className={cn("text-[11px] font-semibold uppercase tracking-[0.24em]", eyebrowClasses[variant])}>{eyebrow}</div>
        <h2 className={cn("mt-4 text-3xl font-semibold tracking-tight md:text-4xl", titleClasses[variant])}>{title}</h2>
        <p className={cn("mt-4 text-base leading-relaxed", descriptionClasses[variant])}>{description}</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn("group rounded-[26px] p-5 transition-all duration-300", cardClasses[variant])}
          >
            {item.eyebrow && (
              <div className={cn("text-[10px] font-semibold uppercase tracking-[0.22em]", descriptionClasses[variant])}>{item.eyebrow}</div>
            )}
            <h3 className={cn("mt-3 text-xl font-semibold tracking-tight", cardTitleClasses[variant])}>{item.title}</h3>
            <p className={cn("mt-3 text-sm leading-7", cardDescriptionClasses[variant])}>{item.description}</p>
            <div className={cn("mt-5 inline-flex items-center text-sm font-semibold", linkClasses[variant])}>
              Explorar
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
