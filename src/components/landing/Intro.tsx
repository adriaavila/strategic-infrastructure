import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const painPoints = [
  {
    num: "01",
    text: "Sitios invisibles: Tu web actual no atrae clientes y parece obsoleta en lugar de inspirar confianza.",
  },
  {
    num: "02",
    text: "Trabajo manual: Pierdes horas en tareas operativas, moviendo datos y con equipos usando Excel.",
  },
  {
    num: "03",
    text: "Sin respuestas: No sabes exactamente de dónde vienen tus ventas o en qué falla tu proceso.",
  },
];

export const Intro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="intro"
      className="relative py-24 md:py-32 scroll-mt-20 bg-muted/20 gradient-mesh-subtle"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto" ref={containerRef}>
          {/* Asymmetric Layout */}
          <div className="layout-asymmetric items-start">
            {/* Left Column - Main Content */}
            <div className="space-y-6">
              {/* Title */}
              <motion.h2
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Menos burocracia.
                <br />
                <span className="text-brand-secondary">
                  Mejores ventas.
                </span>
              </motion.h2>

              {/* Main Copy */}
              <motion.div
                className="space-y-6 text-muted-foreground leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  delay: 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <p>
                  Creamos websites, automatizaciones y herramientas digitales para negocios que quieren {" "}
                  <span className="text-foreground/90 font-medium">
                    vender más y operar mejor.
                  </span>{" "}
                  Soluciones prácticas, entrega rápida y comunicación directa, sin procesos corporativos lentos.
                </p>
                <p className="text-foreground/80 font-semibold">
                  Ideal para: Negocios locales, marcas personales, pymes y equipos que usan Excel.
                </p>
              </motion.div>
            </div>

            {/* Right Column - Numbered Pain Points */}
            <motion.div
              className="layout-offset-right"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ul className="space-y-4">
                {painPoints.map((item, index) => (
                  <motion.li
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-foreground/5 hover:border-brand-secondary/20 transition-all duration-300 relative overflow-hidden"
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
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-secondary/50 to-brand-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Number */}
                    <span className="text-brand-secondary font-mono text-sm font-bold mt-0.5 shrink-0">
                      {item.num}
                    </span>
                    <span className="text-foreground/80 leading-relaxed">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Gradient Divider */}
          <motion.div
            className="mt-12 h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Outcome Statement */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              delay: 0.7,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="text-xl font-semibold text-foreground text-center">
              Resultado:{" "}
              <span className="text-brand-secondary">
                Web profesional, control de ventas, procesos ordenados
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
