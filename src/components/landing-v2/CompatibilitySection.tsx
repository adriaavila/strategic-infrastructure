import { Check } from "lucide-react";
import { integrations } from "@/data/landing";
import { SectionEyebrow, SectionShell } from "./shared";

export function CompatibilitySection() {
  return (
    <SectionShell id="compatibilidad">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <SectionEyebrow>Compatibilidad e implementación</SectionEyebrow>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Se adapta a cómo ya opera tu negocio
          </h2>
          <p className="mt-5 text-base leading-7 text-white/66 md:text-lg">
            No necesitas rehacer toda tu operación para empezar. El objetivo es montar un primer flujo útil sobre lo que ya atiendes por WhatsApp y mejorar desde ahí.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {integrations.map((item) => (
            <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-violet-400/15 p-2 text-violet-200">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-sm leading-7 text-white/70">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
