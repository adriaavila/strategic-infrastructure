import { industries } from "@/data/landing";
import { SectionHeading, SectionShell } from "./shared";

export function IndustriesSection() {
  return (
    <SectionShell id="industrias">
      <SectionHeading
        title="Casos de uso por industria"
        subtitle="El mismo canal sirve a negocios distintos, pero la lógica de atención no puede ser igual para todos. Por eso el producto se adapta a procesos concretos por vertical."
        center
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-medium text-white">{item.title}</h3>
              <div className="mt-4 space-y-4 text-sm leading-7">
                <p><span className="font-medium text-white">Problema típico:</span> <span className="text-white/62">{item.problem}</span></p>
                <p><span className="font-medium text-white">Cómo ayuda:</span> <span className="text-white/62">{item.solution}</span></p>
                <p><span className="font-medium text-white">Beneficio esperado:</span> <span className="text-white/62">{item.benefit}</span></p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
