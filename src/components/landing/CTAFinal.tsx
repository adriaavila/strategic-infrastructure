import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const CTAFinal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="relative py-32 md:py-40 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 architectural-grid opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center" ref={containerRef}>
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 font-heading" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            Si quieres construir un sistema digital que venda más y opere mejor, conversemos
          </motion.h2>

          <motion.p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            Cuéntame en qué etapa está tu negocio y te diré qué sistema conviene construir primero.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <Button variant="hero" size="lg" asChild className="group shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <a href="/brief?source=cta-final">
                Analizar mi negocio
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          <motion.p className="text-sm text-muted-foreground mt-6" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
            Brief claro · Diagnóstico rápido · Propuesta enfocada en impacto
          </motion.p>
        </div>
      </div>
    </section>
  );
}
