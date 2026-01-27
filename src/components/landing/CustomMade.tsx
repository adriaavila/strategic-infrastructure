import { X, Check } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const dontDo = [
  "Plantillas que te limitan desde el día uno",
  "Parches sobre herramientas que no encajan con tu negocio",
  "Cosas que suenan bien pero nadie usa"
];

const doDo = [
  "Definimos todo antes de construir — sabés qué vas a recibir",
  "Soluciones claras que tu equipo entiende",
  "Sistemas pensados para durar, no para parchear"
];

export const CustomMade = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="a-medida" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto" ref={containerRef}>
          {/* Title */}
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Qué significa "a medida"
          </motion.h2>

          {/* Main Copy */}
          <motion.div 
            className="space-y-4 text-muted-foreground leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg font-medium text-foreground">
              A medida no es personalizar una plantilla.
            </p>
            <p>
              Es diseñar desde cero alrededor de cómo funciona tu negocio y qué procesos vale la pena automatizar.
            </p>
          </motion.div>

          {/* Two Columns with Visual Connector */}
          <div className="grid md:grid-cols-2 gap-6 relative">
            {/* Visual Arrow Connector */}
            <motion.div
              className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r from-red-500/20 via-foreground/20 to-brand-secondary/20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
            <motion.div
              className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-6 border-l-2 border-dashed border-foreground/20"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            />

            {/* No hacemos */}
            <motion.div
              className="bg-card border-2 border-red-500/20 rounded-2xl p-6 shadow-architectural hover:border-red-500/30 hover:shadow-lg transition-all"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold font-heading">No hacemos</h3>
              </div>
              <ul className="space-y-3">
                {dontDo.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-foreground/70 p-2 rounded hover:bg-red-500/5 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  >
                    <span className="text-red-600 mt-1 font-bold">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Sí hacemos */}
            <motion.div
              className="bg-card border-2 border-brand-secondary/30 rounded-2xl p-6 shadow-architectural hover:border-brand-secondary/40 hover:shadow-lg transition-all relative overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Subtle gradient background */}
              <div className="absolute inset-0 gradient-mesh-subtle opacity-20" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center border border-brand-secondary/30">
                    <Check className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <h3 className="text-xl font-bold font-heading">Sí hacemos</h3>
                </div>
                <ul className="space-y-3">
                  {doDo.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-foreground/80 p-2 rounded hover:bg-brand-secondary/5 transition-colors"
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

          {/* Outcome Statement */}
          <motion.div 
            className="mt-12 pt-8 border-t border-foreground/10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl font-bold text-foreground font-heading">
              Resultado: <span className="text-brand-secondary">sistemas que crecen con vos</span>, no limitaciones que te frenan.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
