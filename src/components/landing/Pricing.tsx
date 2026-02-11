import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Layers, Cpu } from "lucide-react";

const investmentFactors = [
  {
    num: "01",
    label: "Complejidad de la Arquitectura",
    detail: "Cuántos sistemas conectamos y qué tan profunda es la integración.",
    icon: <Layers className="w-4 h-4" />,
  },
  {
    num: "02",
    label: "Volumen de Datos a Procesar",
    detail: "El scale de operaciones define la infraestructura necesaria.",
    icon: <Cpu className="w-4 h-4" />,
  },
  {
    num: "03",
    label: "Nivel de Autonomía Requerido",
    detail: "Desde alertas inteligentes hasta agentes que ejecutan decisiones.",
    icon: <TrendingUp className="w-4 h-4" />,
  },
];

export const Pricing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="precios"
      className="relative py-24 md:py-32 scroll-mt-20 gradient-mesh-subtle overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-primary/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-brand-secondary/[0.06] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto" ref={containerRef}>
          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Cada Dólar Invertido{" "}
            <span className="text-brand-secondary">Vuelve Multiplicado.</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{
              delay: 0.1,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            No vendemos horas de desarrollo. Diseñamos sistemas cuyo retorno se
            mide en eficiencia operativa y crecimiento real.
          </motion.p>

          {/* Main Content Card — with glowing border */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Animated border glow */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-brand-secondary/20 via-brand-primary/20 to-brand-secondary/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            <div className="relative bg-card border border-foreground/[0.08] rounded-2xl p-8 md:p-12 shadow-architectural">
              {/* Inner top gradient line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-secondary/40 to-transparent" />

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 font-heading">
                    Enfoque 100% en ROI
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cada implementación está diseñada para retornar su inversión
                    mediante eficiencia operativa y crecimiento en ventas.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    No cobramos por funcionalidades. Cobramos por{" "}
                    <span className="text-foreground font-medium">
                      resultados medibles
                    </span>{" "}
                    que impactan tu negocio desde el primer mes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6 font-heading">
                    Qué define la inversión:
                  </h3>
                  <ul className="space-y-4">
                    {investmentFactors.map((factor, index) => (
                      <motion.li
                        key={index}
                        className="group/item flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-foreground/[0.06] transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          delay: 0.3 + index * 0.1,
                          duration: 0.4,
                        }}
                      >
                        {/* Number + icon */}
                        <div className="flex flex-col items-center gap-1 shrink-0">
                          <span className="text-brand-secondary font-mono text-xs font-bold">
                            {factor.num}
                          </span>
                          <span className="text-foreground/30 group-hover/item:text-brand-secondary/60 transition-colors">
                            {factor.icon}
                          </span>
                        </div>
                        <div>
                          <span className="text-foreground/90 font-medium text-sm block mb-0.5">
                            {factor.label}
                          </span>
                          <span className="text-muted-foreground text-xs leading-relaxed">
                            {factor.detail}
                          </span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Gradient divider */}
              <div className="mt-8 mb-8 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

              {/* Bottom CTA area */}
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Diseñamos una propuesta a medida para tu negocio.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Si no ves retorno en 90 días, revisamos la estrategia sin
                  costo.
                </p>
                <Button
                  size="lg"
                  variant="hero"
                  asChild
                  className="group relative shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <a href="#contacto">
                    <span className="absolute inset-0 rounded-[inherit] bg-brand-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    Hablemos de tu Proyecto
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
