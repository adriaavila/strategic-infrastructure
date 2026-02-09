import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pricingFactors = [
  "complejidad de la arquitectura",
  "volumen de datos a procesar",
  "nivel de autonomía requerido"
];

export const Pricing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="precios" className="relative py-24 md:py-32 scroll-mt-20 gradient-mesh-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto" ref={containerRef}>
          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Inversión, no Gasto.
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Tarifas que se pagan solas mediante el ahorro operativo y el crecimiento generado.
          </motion.p>

          {/* Main Content Card */}
          <motion.div
            className="bg-card border border-foreground/[0.08] rounded-2xl p-8 md:p-12 shadow-architectural"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4 font-heading">Por qué inversión por ROI</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Un proyecto de IA bien implementado puede ahorrar miles de dólares en costos operativos. Nuestra tarifa se alinea con ese ahorro y el valor estratégico que aportamos.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 font-heading">Factores que definen el presupuesto:</h3>
                <ul className="space-y-4">
                  {pricingFactors.map((factor, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    >
                      <span className="text-brand-secondary mt-1 font-bold text-lg">•</span>
                      <span className="text-foreground/80 leading-relaxed">{factor}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Outcome */}
            <div className="pt-8 mt-8 border-t border-foreground/10 text-center">
              <p className="text-lg font-semibold text-foreground">
                Cada proyecto es único. Agenda una llamada para obtener una propuesta a medida.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
