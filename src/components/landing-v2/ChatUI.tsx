import type { ReactNode } from "react";
import { Bot, Check, ChevronRight, Clock3, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChatBubble({ children, side, time, accent = false }: { children: ReactNode; side: "left" | "right"; time: string; accent?: boolean }) {
  return (
    <div className={cn("flex", side === "right" ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[86%] rounded-[22px] px-4 py-3 text-sm leading-6 shadow-[0_8px_30px_rgba(0,0,0,0.18)]",
          side === "right"
            ? accent
              ? "rounded-br-md bg-gradient-to-br from-emerald-400 via-emerald-400 to-emerald-500 text-[#042315]"
              : "rounded-br-md bg-white/10 text-white"
            : "rounded-bl-md border border-white/10 bg-[#101827] text-white/88"
        )}
      >
        <div>{children}</div>
        <div className={cn("mt-1.5 text-[11px]", side === "right" && accent ? "text-[#032415]/60" : "text-white/42")}>{time}</div>
      </div>
    </div>
  );
}

export function ReplyPill({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-center text-sm text-white/72 transition hover:border-white/15 hover:bg-white/[0.06]">
      {children}
    </div>
  );
}

function ChatWindowHeader({ title, subtitle, status = "En vivo" }: { title: string; subtitle: string; status?: string }) {
  return (
    <div className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-5 py-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-[#032415] shadow-[0_8px_30px_rgba(16,185,129,0.25)]">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">{title}</p>
            <p className="text-xs text-white/48">{subtitle}</p>
          </div>
        </div>
        <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200">
          {status}
        </div>
      </div>
    </div>
  );
}

function SignalCard({ icon: Icon, title, text }: { icon: typeof Clock3; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-white/[0.06] p-2 text-white/82">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <p className="text-sm font-medium text-white">{title}</p>
          <p className="mt-1 text-sm leading-6 text-white/56">{text}</p>
        </div>
      </div>
    </div>
  );
}

export function HeroChatMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[610px]">
      <div className="absolute -left-6 top-12 hidden h-32 w-32 rounded-full bg-emerald-400/16 blur-3xl lg:block" />
      <div className="absolute -right-8 top-20 hidden h-40 w-40 rounded-full bg-violet-500/16 blur-3xl lg:block" />
      <div className="absolute right-8 top-0 hidden h-20 w-20 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl lg:block" />

      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,14,24,0.96),rgba(8,12,20,0.96))] shadow-[0_30px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_60%)]" />
        <ChatWindowHeader title="Agente de WhatsApp con IA" subtitle="Responde, filtra y prepara el siguiente paso" />

        <div className="grid gap-4 p-5 lg:grid-cols-[1.12fr_0.88fr] lg:p-6">
          <div className="rounded-[26px] border border-white/10 bg-[#0c131f] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-white/45">
                <UserRound className="h-3.5 w-3.5" />
                Conversación activa
              </div>
              <div className="text-xs text-white/35">Tiempo real</div>
            </div>

            <div className="space-y-3">
              <ChatBubble side="left" time="09:14">Hola. Quiero saber si tienen citas esta semana para limpieza dental.</ChatBubble>
              <ChatBubble side="right" time="09:14" accent>Sí, puedo ayudarte. ¿Prefieres sede centro o sede norte?</ChatBubble>
              <ChatBubble side="left" time="09:15">Sede centro. Y quisiera saber el precio.</ChatBubble>
              <ChatBubble side="right" time="09:15" accent>
                La limpieza dental tiene un valor referencial desde USD 25. Para dejarte la cita lista necesito tu nombre y horario preferido.
              </ChatBubble>
              <div className="grid gap-2 sm:grid-cols-2">
                <ReplyPill>Hoy después de las 3 pm</ReplyPill>
                <ReplyPill>Mañana en la mañana</ReplyPill>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[24px] border border-emerald-400/18 bg-[linear-gradient(180deg,rgba(16,185,129,0.12),rgba(16,185,129,0.04))] p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-xl bg-emerald-400/15 p-2 text-emerald-200">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Lead listo para agendar</p>
                  <p className="mt-1 text-sm leading-6 text-white/62">
                    El agente ya detectó intención, sede, consulta de precio y horario preferido antes de pasar al equipo.
                  </p>
                </div>
              </div>
            </div>

            <SignalCard icon={Clock3} title="Respuesta inmediata" text="El cliente recibe contexto útil en segundos, incluso fuera del horario del equipo." />
            <SignalCard icon={ShieldCheck} title="Información controlada" text="Responde con datos entrenados del negocio en lugar de improvisar o dejar el chat sin atender." />

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium text-white">Resultado del flujo</p>
                <div className="rounded-full border border-white/10 px-2 py-1 text-[11px] text-white/42">Calificado</div>
              </div>
              <div className="space-y-2.5 text-sm text-white/64">
                <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-2"><span>Tipo de intención</span><span className="text-white">Agendar cita</span></div>
                <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-2"><span>Sede</span><span className="text-white">Centro</span></div>
                <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-2"><span>Prioridad</span><span className="text-white">Alta</span></div>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-200">
                Pasar al equipo con contexto
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
