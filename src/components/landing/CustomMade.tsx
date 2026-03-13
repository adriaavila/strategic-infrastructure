import { Check, Sparkles } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const principles = [
  "Diagnóstico claro antes de construir",
  "Diseño, automatización e integración conectados con la operación real",
  "Sistemas pensados para que tu equipo los use con claridad",
];

const outcomes = [
  "Más claridad sobre procesos y prioridades",
  "Mejor visibilidad para seguimiento y decisiones",
  "Una base digital lista para crecer con más consistencia",
];

export const CustomMade = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="a-medida" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto" ref={containerRef}>
          <motion.h2
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Qué significa una solución bien diseñada
          </motion.h2>

          <motion.div
            className="space-y-4 text-muted-foreground leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg font-medium text-foreground">
              Una buena solución digital combina criterio técnico, claridad funcional y una experiencia alineada con tu negocio.
            </p>
            <p>
              El objetivo no es sumar herramientas sin dirección, sino construir una base útil para vender mejor, operar con más orden y sostener el crecimiento con una infraestructura más clara.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 relative">
            <motion.div
              className="bg-card border border-brand-secondary/20 rounded-2xl p-6 shadow-architectural"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center border border-brand-secondary/20">
                  <Check className="w-6 h-6 text-brand-secondary" />
                </div>
                <h3 className="text-xl font-semibold font-heading">Principios de trabajo</h3>
              </div>
              <ul className="space-y-3">
                {principles.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-foreground/80 p-2 rounded"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  >
                    <span className="text-brand-secondary mt-1 font-bold">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-card border border-foreground/10 rounded-2xl p-6 shadow-architectural relative overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 gradient-mesh-subtle opacity-20" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Sparkles className="w-6 h-6 text-white/75" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading">Lo que mejora</h3>
                </div>
                <ul className="space-y-3">
                  {outcomes.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-foreground/80 p-2 rounded"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    >
                      <span className="text-brand-secondary mt-1 font-bold">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 pt-8 border-t border-foreground/10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl font-semibold text-foreground font-heading">
              Resultado: <span className="text-brand-secondary">una infraestructura digital más clara, útil y preparada para evolucionar con tu negocio.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
