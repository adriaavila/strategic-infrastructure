import { Globe2, LayoutTemplate, MonitorSmartphone, Sparkles, Workflow } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const offers = [
  {
    number: "01",
    title: "Websites corporativos",
    description:
      "Sitios claros, bien estructurados y orientados a conversion para presentar tu negocio con mas seriedad y ayudar a que mas personas entiendan rapidamente lo que ofreces.",
    outcome: "Una presencia digital mas solida para vender, cotizar o abrir mejores conversaciones.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Landing pages",
    description:
      "Paginas enfocadas en una oferta concreta, diseñadas para reducir ruido, ordenar el mensaje y mover al visitante hacia una accion clara.",
    outcome: "Mas claridad, mejor conversion y menos fuga de atencion.",
    icon: LayoutTemplate,
  },
  {
    number: "03",
    title: "Web apps a medida",
    description:
      "Herramientas web para ordenar procesos, centralizar informacion y darle mas estructura a la operacion diaria.",
    outcome: "Menos caos operativo y sistemas que acompañan el trabajo real.",
    icon: MonitorSmartphone,
  },
  {
    number: "04",
    title: "Integraciones y automatizacion ligera",
    description:
      "Conexiones entre formularios, CRM, dashboards y herramientas clave para que la web o el sistema no queden aislados.",
    outcome: "Una operacion mas conectada desde el dia uno.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "IA y automatizacion avanzada",
    description:
      "Automatizaciones, asistentes o capas de IA cuando de verdad aportan velocidad, orden o retorno.",
    outcome: "La IA entra como multiplicador, no como adorno.",
    icon: Sparkles,
  },
];

const connectiveSignals = [
  "Website",
  "Landing pages",
  "Web app",
  "Paneles internos",
  "CRM",
  "Automatización después",
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
            <div className="eyebrow mb-6">servicios</div>
            <h2 className="max-w-[10ch] font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink md:text-5xl">
              Lo que puedo construir para que tu negocio tenga una base digital mas clara y mas util.
            </h2>
            <p className="mt-5 max-w-[34rem] text-lg leading-relaxed text-foreground/72">
              El foco está en websites, landing pages y sistemas web pensados para ventas, captacion y operacion. La automatizacion y la IA pueden entrar despues, cuando la base ya tiene sentido.
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
