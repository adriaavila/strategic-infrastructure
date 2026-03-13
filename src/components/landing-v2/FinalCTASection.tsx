import { Button } from "@/components/ui/button";
import { finalCtaHighlights, landingCtas } from "@/data/landing";
import { SectionEyebrow, SectionShell } from "./shared";

export function FinalCTASection() {
  return (
    <SectionShell className="pb-24 pt-8 lg:pb-32">
      <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(139,92,246,0.16))] p-[1px] shadow-[0_20px_120px_rgba(16,185,129,0.12)]">
        <div className="rounded-[33px] bg-[#07101b]/95 px-8 py-12 md:px-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionEyebrow>CTA final</SectionEyebrow>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Si tu negocio ya usa WhatsApp para vender o atender, esta es la forma más clara de ordenarlo y escalarlo
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/66 md:text-lg">
                Empieza con una demo o deja tu implementación solicitada. El objetivo no es venderte una plataforma abstracta, sino dejar un flujo útil que responda, filtre y mueva conversaciones hacia una acción real.
              </p>
            </div>
            <div className="space-y-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              {finalCtaHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-start gap-3 text-sm text-white/72">
                    <Icon className="mt-1 h-4 w-4 text-emerald-300" />
                    {item.text}
                  </div>
                );
              })}
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <a href={landingCtas.primary} target="_blank" rel="noreferrer" className="flex-1">
                  <Button size="lg" className="w-full rounded-2xl bg-emerald-400 text-[#032415] hover:bg-emerald-300">
                    Agendar demo
                  </Button>
                </a>
                <a href={landingCtas.secondary} className="flex-1">
                  <Button variant="outline" size="lg" className="w-full rounded-2xl border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06]">
                    Solicitar implementación
                  </Button>
                </a>
              </div>
              <p className="text-xs text-white/42">También puedes escribir directo a WhatsApp: {landingCtas.directLine}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
