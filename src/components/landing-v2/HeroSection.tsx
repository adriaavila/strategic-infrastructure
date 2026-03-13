import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroChatMockup } from "./ChatUI";
import { SectionEyebrow, StatCard } from "./shared";
import { heroHighlights, heroStats, landingCtas } from "@/data/landing";

export function HeroSection() {
  return (
    <section className="relative px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(520px,0.98fr)] lg:gap-16">
        <div className="relative z-10">
          <SectionEyebrow>Software B2B para negocios que venden y atienden por WhatsApp</SectionEyebrow>

          <div className="max-w-3xl">
            <h1 className="text-balance text-[2.6rem] font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl xl:text-[4.7rem]">
              Convierte tu WhatsApp en un canal que responde, filtra y agenda por ti
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-[1.04rem] leading-8 text-white/68 md:text-xl">
              Un agente de WhatsApp con IA entrenado con la información de tu negocio para responder al instante, capturar datos, calificar oportunidades y pasar la conversación a tu equipo cuando toca cerrar.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:max-w-xl sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/72">
              <div className="font-medium text-white">Pensado para ventas y atención</div>
              <div className="mt-1 text-white/52">No es un bot genérico. Está orientado a conversaciones que tienen que avanzar.</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/72">
              <div className="font-medium text-white">Implementación enfocada</div>
              <div className="mt-1 text-white/52">Empiezas con un flujo útil y mejoras sobre conversaciones reales.</div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={landingCtas.primary} target="_blank" rel="noreferrer">
              <Button size="xl" className="w-full min-w-[220px] rounded-2xl bg-emerald-400 px-7 text-[#032415] shadow-[0_20px_80px_rgba(16,185,129,0.26)] hover:bg-emerald-300 sm:w-auto">
                Agendar demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href={landingCtas.secondary}>
              <Button variant="outline" size="xl" className="w-full min-w-[220px] rounded-2xl border-white/12 bg-white/[0.03] px-7 text-white hover:bg-white/[0.06] sm:w-auto">
                Solicitar implementación
              </Button>
            </a>
          </div>

          <div className="mt-4 flex flex-col gap-2 text-sm text-white/52 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              Respuesta inmediata
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              Captura de datos y calificación
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              Escalado a humano con contexto
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2.5 text-sm text-white/48">
            {heroHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a1220]/85 px-3 py-1.5 backdrop-blur-sm">
                  <Icon className="h-4 w-4 text-emerald-300" />
                  <span className="text-white/64">{item.text}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroStats.map((item) => (
              <StatCard key={item.value + item.label} value={item.value} label={item.label} />
            ))}
          </div>
        </div>

        <HeroChatMockup />
      </div>
    </section>
  );
}
