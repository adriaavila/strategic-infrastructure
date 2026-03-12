import { CheckCircle2, XCircle } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const idealClientPoints = [
  "ya vendes y buscas más eficiencia, claridad operativa y crecimiento",
  "tienes datos, procesos o clientes, pero todavía no un sistema que lo ordene bien",
  "quieres automatización y herramientas que tu equipo realmente use"
];

const notFitPoints = [
  "solo quieres “probar IA” sin un objetivo de negocio claro",
  "buscas una solución genérica sin adaptación real a tu operación",
  "todavía no estás dispuesto a ordenar procesos, datos o responsables"
];

export const IdealClient = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="cliente-ideal" className="relative py-24 md:py-32 scroll-mt-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16" ref={containerRef}>
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Para quién es (y para quién no)
          </motion.h2>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Ideal Client */}
          <motion.div
            className="bg-card border border-brand-secondary/20 rounded-2xl p-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Es para vos si:</h3>
            </div>
            <ul className="space-y-4">
              {idealClientPoints.map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not a Fit */}
          <motion.div
            className="bg-card border border-foreground/10 rounded-2xl p-8"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-muted-foreground">No es para vos si:</h3>
            </div>
            <ul className="space-y-4">
              {notFitPoints.map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                >
                  <XCircle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
