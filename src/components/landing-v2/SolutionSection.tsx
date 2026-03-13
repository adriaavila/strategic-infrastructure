import { Check } from "lucide-react";
import { benefits } from "@/data/landing";
import { SectionEyebrow, SectionShell } from "./shared";

export function SolutionSection() {
  return (
    <SectionShell id="solucion">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-emerald-400/18 bg-gradient-to-b from-emerald-400/10 to-transparent p-8">
          <SectionEyebrow>La solución</SectionEyebrow>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Un agente que responde como parte de tu operación, no como un widget desconectado del negocio
          </h2>
          <p className="mt-5 text-base leading-7 text-white/66 md:text-lg">
            El producto combina automatización, criterio comercial y estructura conversacional para que cada chat sirva para avanzar: informar, filtrar, captar datos, agendar o escalar al equipo.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((item) => (
            <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-emerald-400/15 p-2 text-emerald-200">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-sm leading-7 text-white/72">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
