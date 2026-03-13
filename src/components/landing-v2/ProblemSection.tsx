import { Zap } from "lucide-react";
import { problemCards } from "@/data/landing";
import { SectionHeading, SectionShell } from "./shared";

export function ProblemSection() {
  return (
    <SectionShell id="problema">
      <SectionHeading
        title="El problema no es WhatsApp. El problema es atenderlo de forma manual cuando el negocio ya tiene volumen."
        subtitle="La mayoría de negocios no pierde oportunidades porque falten clientes; las pierde porque responde tarde, depende de una persona y no convierte cada chat en un proceso claro."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {problemCards.map((card) => (
          <div key={card.title} className="group rounded-[24px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.05]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-emerald-400/20 text-white">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-medium text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/62">{card.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
