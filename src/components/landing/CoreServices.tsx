import { Bot, Globe2, MessageCircleMore, Sparkles, Workflow } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const offers = [
  {
    number: "01",
    title: "Agentes IA",
    description:
      "Asistentes que responden, califican, organizan y ayudan a tu equipo sin quedarse en una demo bonita.",
    outcome: "Menos carga manual y mejor continuidad comercial.",
    icon: Bot,
  },
  {
    number: "02",
    title: "Automatizacion de WhatsApp",
    description:
      "Flujos conversacionales para captar, responder, filtrar y hacer seguimiento desde el canal que tu cliente ya usa.",
    outcome: "WhatsApp como interfaz operativa real.",
    icon: MessageCircleMore,
  },
  {
    number: "03",
    title: "AI workflows",
    description:
      "Conecto formularios, CRM, documentos, bases de datos y herramientas internas para que la operacion deje de depender del caos.",
    outcome: "Procesos conectados y trazables.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Websites y ecommerce potenciados por IA",
    description:
      "Sitios y tiendas que venden mejor porque se integran al flujo completo: captacion, respuesta y conversion.",
    outcome: "Tu web deja de ser una pieza aislada.",
    icon: Globe2,
  },
  {
    number: "05",
    title: "Automatizacion operativa",
    description:
      "Sistemas a medida para inventario, seguimiento, reporting o coordinacion interna cuando las hojas sueltas ya no alcanzan.",
    outcome: "Mas claridad para operar y decidir.",
    icon: Sparkles,
  },
];

const connectiveSignals = [
  "Captacion",
  "Seguimiento",
  "Operacion interna",
  "Dashboards",
  "WhatsApp",
  "Integraciones",
];

export const CoreServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="soluciones" className="relative py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow mb-6">soluciones</div>
            <h2 className="max-w-[10ch] font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink md:text-5xl">
              Lo que implemento para que el negocio funcione mejor.
            </h2>
            <p className="mt-5 max-w-[34rem] text-lg leading-relaxed text-foreground/72">
              Creativv no vende “creatividad” genérica. Diseña y construye sistemas concretos
              para captar mejor, responder más rápido y reducir trabajo manual.
            </p>

            <div className="section-shell mt-8 p-6">
              <div className="relative z-10">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Lo que suele quedar conectado
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {connectiveSignals.map((signal) => (
                    <span
                      key={signal}
                      className="rounded-full border border-border bg-white/86 px-3 py-2 text-sm text-foreground/70 shadow-sm"
                    >
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="section-shell px-6 py-5 md:px-8 md:py-6">
            <div className="relative z-10">
              {offers.map((offer, index) => {
                const Icon = offer.icon;
                return (
                  <motion.article
                    key={offer.title}
                    className={`grid gap-4 py-6 md:grid-cols-[72px_1fr_220px] md:gap-6 ${
                      index !== offers.length - 1 ? "border-b border-border" : ""
                    }`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: 0.12 + index * 0.08,
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <div className="flex items-start gap-3 md:block">
                      <div className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                        {offer.number}
                      </div>
                      <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-primary/12 bg-brand-primary/10 text-brand-secondary">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-brand-ink">
                        {offer.title}
                      </h3>
                      <p className="mt-2 max-w-[44rem] text-base leading-relaxed text-foreground/70">
                        {offer.description}
                      </p>
                    </div>

                    <div className="flex items-start md:justify-end">
                      <p className="max-w-[18rem] rounded-[1.25rem] border border-border bg-white/86 px-4 py-4 text-sm leading-relaxed text-foreground/70 shadow-sm">
                        {offer.outcome}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
