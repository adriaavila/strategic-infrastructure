import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { landingCtas, plans } from "@/data/landing";
import { cn } from "@/lib/utils";
import { SectionHeading, SectionShell } from "./shared";

export function PricingSection() {
  return (
    <SectionShell id="precios">
      <SectionHeading
        title="Planes simples para empezar sin confusión"
        subtitle="La estructura de precios ayuda a comprar rápido: una entrada clara, un plan recomendado y una opción para operaciones más complejas."
        center
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative rounded-[30px] border p-7",
              plan.featured
                ? "border-emerald-400/40 bg-gradient-to-b from-emerald-400/12 to-white/[0.04] shadow-[0_24px_80px_rgba(16,185,129,0.16)]"
                : "border-white/10 bg-white/[0.035]"
            )}
          >
            {plan.featured && (
              <div className="absolute right-5 top-5 rounded-full border border-emerald-400/30 bg-emerald-400/12 px-3 py-1 text-xs font-medium text-emerald-200">
                Recomendado
              </div>
            )}
            <div className="text-sm font-medium text-white/48">{plan.name}</div>
            <div className="mt-4 text-4xl font-semibold tracking-tight text-white">
              {plan.price}
              <span className="ml-1 text-base font-normal text-white/45">/ mes</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/68">{plan.audience}</p>
            <p className="mt-3 text-sm leading-7 text-white/52">{plan.description}</p>
            <div className="my-6 h-px bg-white/10" />
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                  <div className="mt-0.5 rounded-full bg-white/8 p-1 text-emerald-200">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href={landingCtas.primary} target="_blank" rel="noreferrer" className="mt-8 block">
              <Button
                size="lg"
                className={cn(
                  "w-full rounded-2xl",
                  plan.featured ? "bg-emerald-400 text-[#032415] hover:bg-emerald-300" : "bg-white text-[#08111a] hover:bg-white/90"
                )}
              >
                {plan.cta}
              </Button>
            </a>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
