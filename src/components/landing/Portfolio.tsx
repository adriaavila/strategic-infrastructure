import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="relative py-24 md:py-32 scroll-mt-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto" ref={containerRef}>
          {/* Title */}
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Proyectos
          </motion.h2>

          {/* Copy */}
          <motion.p 
            className="text-muted-foreground text-center mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Cada proyecto empieza con un problema concreto y termina en un sistema funcional.
          </motion.p>

          <motion.p 
            className="text-muted-foreground text-center mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Mostramos contexto, decisiones y resultados.
            <br />
            No solo pantallas bonitas.
          </motion.p>

          {/* Placeholder for cases */}
          <motion.div 
            className="bg-card border border-foreground/[0.08] rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-muted-foreground italic">
              (Casos reales)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
