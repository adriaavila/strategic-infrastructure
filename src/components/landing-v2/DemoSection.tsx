import { Bot, Check, Sparkles } from "lucide-react";
import { demoChecklist } from "@/data/landing";
import { ChatBubble } from "./ChatUI";
import { SectionEyebrow, SectionShell } from "./shared";

export function DemoSection() {
  return (
    <SectionShell id="demo">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        <div>
          <SectionEyebrow>Demo conversacional</SectionEyebrow>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            El producto se entiende mejor cuando ves cómo la conversación avanza sola
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/66 md:text-lg">
            Aquí no se trata de contestar por contestar. El valor está en guiar al cliente, detectar intención, pedir la información justa y dejar al equipo solo las conversaciones que sí requieren intervención.
          </p>

          <div className="mt-8 space-y-3">
            {demoChecklist.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0b1220]/80 p-4">
                <div className="rounded-full bg-emerald-400/15 p-2 text-emerald-200">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-sm leading-7 text-white/70">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-violet-400/12 p-2 text-violet-200">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Qué hace que esta demo sea más creíble</p>
                <p className="mt-2 text-sm leading-7 text-white/60">
                  Muestra una conversación con intención comercial real, preguntas de calificación y un siguiente paso concreto. No parece un chat de demostración armado solo para verse bonito.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-[1px] shadow-[0_22px_90px_rgba(0,0,0,0.32)]">
          <div className="rounded-[31px] bg-[#09111b] p-4 md:p-6">
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-violet-500 text-[#051109] shadow-[0_8px_30px_rgba(16,185,129,0.18)]">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Escena de venta por WhatsApp</p>
                  <p className="text-xs text-white/45">Ejemplo para inmobiliaria</p>
                </div>
              </div>
              <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200">
                Flujo activo
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.06fr_0.94fr]">
              <div className="rounded-[24px] border border-white/10 bg-[#0d1522] p-4">
                <div className="space-y-3">
                  <ChatBubble side="left" time="11:02">Hola. Vi un apartamento en alquiler en La Castellana. ¿Sigue disponible?</ChatBubble>
                  <ChatBubble side="right" time="11:02" accent>Hola. Sí, todavía hay disponibilidad en esa zona. ¿Buscas alquiler residencial o uso comercial?</ChatBubble>
                  <ChatBubble side="left" time="11:03">Residencial. Sería para dos personas.</ChatBubble>
                  <ChatBubble side="right" time="11:03" accent>Perfecto. Para mostrarte opciones útiles, ¿en qué rango de presupuesto te gustaría buscar?</ChatBubble>
                  <ChatBubble side="left" time="11:04">Entre 500 y 700 al mes.</ChatBubble>
                  <ChatBubble side="right" time="11:04" accent>Tengo opciones dentro de ese rango. ¿Quieres que deje tu solicitud lista para que un asesor te envíe disponibilidad hoy mismo?</ChatBubble>
                  <ChatBubble side="left" time="11:05">Sí.</ChatBubble>
                  <ChatBubble side="right" time="11:05" accent>
                    Listo. Compárteme tu nombre y un horario en el que te puedan contactar. Así el asesor retoma con propiedades filtradas según presupuesto y zona.
                  </ChatBubble>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[22px] border border-emerald-400/18 bg-[linear-gradient(180deg,rgba(16,185,129,0.12),rgba(16,185,129,0.04))] p-4">
                  <p className="text-sm font-medium text-white">Resultado de la conversación</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    El agente no se limita a responder. Ordena la intención y prepara una oportunidad lista para seguimiento comercial.
                  </p>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm font-medium text-white">Datos capturados</p>
                  <div className="mt-3 space-y-2.5 text-sm text-white/62">
                    <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-2"><span>Tipo de lead</span><span className="text-white">Alquiler residencial</span></div>
                    <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-2"><span>Zona</span><span className="text-white">La Castellana</span></div>
                    <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-2"><span>Presupuesto</span><span className="text-white">USD 500–700</span></div>
                    <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-2"><span>Siguiente paso</span><span className="text-white">Asignar asesor</span></div>
                  </div>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm font-medium text-white">Por qué esto ahorra tiempo</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    El asesor recibe una conversación ya filtrada, con contexto comercial y sin tener que empezar de cero pidiendo datos básicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
