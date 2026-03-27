import { Button } from "@/components/ui/button";
import { ArrowRight, PencilRuler, Route, Rocket, RefreshCcw } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Aclarar el objetivo",
    description: "Definimos si hace falta una web, una landing o una web app según el problema real.",
    icon: PencilRuler,
  },
  {
    number: "02",
    title: "Diseñar la estructura",
    description: "Ordenamos contenido, experiencia, arquitectura y flujo para que la solución tenga sentido.",
    icon: Route,
  },
  {
    number: "03",
    title: "Implementar",
    description: "Construyo y dejo una versión lista para operar, mostrar o vender.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Iterar con uso real",
    description: "Ajustamos según respuesta del mercado, fricción real y próximos pasos del negocio.",
    icon: RefreshCcw,
  },
];

export const EngagementModel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="metodo" className="relative py-24 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">método</div>
          <motion.h2
            className="max-w-[12ch] font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink md:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Del problema real a una presencia digital o herramienta web que sí sirve.
          </motion.h2>
          <motion.p
            className="mt-5 max-w-[40rem] text-lg leading-relaxed text-foreground/72"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            El proceso está pensado para avanzar rápido sin improvisar. Primero se define qué conviene construir. Después se diseña, se implementa y se afina con uso real.
          </motion.p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.number}
                  className="rounded-[1.75rem] border border-border bg-white/84 p-6 shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.12 + index * 0.08,
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                      {step.number}
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-primary/12 bg-brand-primary/10 text-brand-secondary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground/70">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.44, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="/brief?source=process-home">
                Solicitar diagnóstico
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
