import { CheckCircle2, Radar, Wrench } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const principles = [
  {
    title: "Implementacion antes que discurso",
    description:
      "La conversación arranca por el cuello de botella real: ventas, seguimiento, atención o coordinación operativa.",
    icon: Wrench,
  },
  {
    title: "IA con criterio de negocio",
    description:
      "No todo necesita un agente. Se construye la capa justa para ahorrar tiempo, ordenar información y mejorar respuesta.",
    icon: Radar,
  },
  {
    title: "Founder-led y directo",
    description:
      "Trabajas con quien diseña y construye el sistema. Menos intermediarios, menos ruido, más velocidad.",
    icon: CheckCircle2,
  },
];

export const IdealClient = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-10">
          <motion.div
            className="section-shell p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative z-10">
              <div className="eyebrow mb-6">por que creativv</div>
              <h2 className="max-w-[12ch] font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink md:text-5xl">
                IA util, criterio tecnico y foco en operacion.
              </h2>
              <p className="mt-5 max-w-[34rem] text-lg leading-relaxed text-foreground/72">
                Creativv se posiciona más cerca de un partner de implementación que de una
                agencia tradicional. El objetivo no es llenar la pantalla de features. Es
                ayudarte a operar mejor con sistemas que de verdad se usan.
              </p>

              <div className="mt-8 rounded-[1.6rem] border border-border bg-white/86 p-6 shadow-sm">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Lo que cambia en la práctica
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    "Menos tareas repetitivas y menos pasos manuales.",
                    "Seguimiento comercial más constante y menos leads perdidos.",
                    "Una operación más clara para decidir con datos y no con intuición suelta.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/72">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-primary/80" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.article
                  key={principle.title}
                  className="rounded-[1.75rem] border border-border bg-white/82 p-6 shadow-sm"
                  initial={{ opacity: 0, x: 24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.12 + index * 0.08,
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-brand-primary/12 bg-brand-primary/10 text-brand-secondary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-brand-ink">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-foreground/70">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}

            <motion.div
              className="rounded-[1.75rem] border border-brand-primary/12 bg-[#F4F0FB] p-6 shadow-sm"
              initial={{ opacity: 0, x: 24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.38, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Founder-led
              </div>
              <p className="mt-3 max-w-[42rem] text-lg leading-relaxed text-brand-ink">
                El valor de Creativv está en estudiar, probar y aterrizar herramientas nuevas
                todos los días, pero siempre con una regla: si no mejora la operación, no entra.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
