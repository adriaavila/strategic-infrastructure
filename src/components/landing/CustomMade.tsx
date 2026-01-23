import { X, Check } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const dontDo = [
  "templates",
  "parches sobre herramientas genéricas",
  "features que no se usan"
];

const doDo = [
  "diseño de sistema antes de desarrollo",
  "lógica clara y mantenible",
  "soluciones pensadas para durar"
];

export const CustomMade = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="a-medida" className="relative py-24 md:py-32 scroll-mt-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto" ref={containerRef}>
          {/* Title */}
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Qué significa "a medida"
          </motion.h2>

          {/* Main Copy */}
          <motion.div 
            className="space-y-6 text-muted-foreground leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg font-medium text-foreground">
              A medida no es personalizar una plantilla.
            </p>
            <p>
              Significa diseñar el sistema desde cero alrededor de:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1.5">•</span>
                <span>cómo funciona tu negocio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1.5">•</span>
                <span>qué decisiones necesita soportar</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1.5">•</span>
                <span>qué procesos vale la pena automatizar</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1.5">•</span>
                <span>qué debe escalar y qué no</span>
              </li>
            </ul>
          </motion.div>

          {/* Two Columns */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* No hacemos */}
            <motion.div
              className="bg-card border border-foreground/[0.08] rounded-2xl p-6"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold">No hacemos</h3>
              </div>
              <ul className="space-y-3">
                {dontDo.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  >
                    <span className="text-red-600 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Sí hacemos */}
            <motion.div
              className="bg-card border border-foreground/[0.08] rounded-2xl p-6"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold">Sí hacemos</h3>
              </div>
              <ul className="space-y-3">
                {doDo.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  >
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
