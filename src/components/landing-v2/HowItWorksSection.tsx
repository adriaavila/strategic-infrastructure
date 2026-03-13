import { howItWorks } from "@/data/landing";
import { SectionHeading, SectionShell } from "./shared";

export function HowItWorksSection() {
  return (
    <SectionShell id="como-funciona">
      <SectionHeading
        title="Cómo funciona"
        subtitle="El objetivo es simple: que el agente entre a operar rápido, con información real y con flujos pensados para generar menos ruido y más conversaciones útiles."
        center
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-4">
        {howItWorks.map((item) => (
          <div key={item.step} className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
            <div className="text-sm font-medium text-emerald-300">{item.step}</div>
            <h3 className="mt-4 text-xl font-medium text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/62">{item.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
