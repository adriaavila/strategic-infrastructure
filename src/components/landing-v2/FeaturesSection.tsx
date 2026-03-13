import { features } from "@/data/landing";
import { SectionHeading, SectionShell } from "./shared";

export function FeaturesSection() {
  return (
    <SectionShell id="funciones">
      <SectionHeading
        title="Funciones que realmente ayudan a vender y atender mejor"
        subtitle="No hace falta una lista gigante de promesas. Lo que importa es que el agente resuelva bien lo repetitivo, ordene la intención del cliente y deje el trabajo humano para donde aporta más valor."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="rounded-[26px] border border-white/10 bg-[#09101b]/90 p-6 shadow-2xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-white/16">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 via-violet-500/20 to-emerald-400/20 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-medium text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">{feature.body}</p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
