import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const whenWeWork = [
  "tenés datos, pero no inteligencia aplicada a decisiones",
  "tu equipo pierde horas en procesos manuales y costosos",
  "las decisiones llegan tarde o se toman a ciegas"
];

export const Intro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="intro" className="relative py-24 md:py-32 scroll-mt-20 bg-muted/20 gradient-mesh-subtle">
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
                No vendemos IA como buzzword.
                <br />
                <span className="text-brand-secondary">Implementamos sistemas que se usan.</span>
              </motion.h2>

              {/* Main Copy */}
              <motion.div 
                className="space-y-6 text-muted-foreground leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <p>
                  Diseñamos inteligencia de negocio aplicada: datos limpios, automatización y modelos de IA trabajando juntos.
                </p>
                <p className="text-foreground/80 font-medium">
                  Trabajamos cuando:
                </p>
              </motion.div>
            </div>

            {/* Right Column - List with offset */}
            <motion.div 
              className="layout-offset-right"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <ul className="space-y-4">
                {whenWeWork.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-foreground/5 hover:border-foreground/10 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  >
                    <span className="text-brand-secondary mt-1 font-bold text-xl">•</span>
                    <span className="text-foreground/80 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Outcome Statement */}
          <motion.div 
            className="mt-12 pt-8 border-t border-foreground/10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl font-semibold text-foreground text-center">
              Resultado: <span className="text-brand-secondary">inteligencia aplicada</span> que impacta costos, ventas y decisiones.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
