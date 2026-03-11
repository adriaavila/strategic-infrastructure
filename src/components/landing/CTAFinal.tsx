import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const CTAFinal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="relative py-32 md:py-40 scroll-mt-20 overflow-hidden">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 architectural-grid opacity-20" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center" ref={containerRef}>
          {/* Headline */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            ¿Necesitas una web,
            <br />
            <span className="text-brand-secondary">automatizar un proceso o desarrollar una herramienta digital?</span>
          </motion.h2>

          {/* Copy */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Hablemos hoy sobre cómo podemos ayudarte a vender más y trabajar mejor.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              variant="hero"
              size="lg"
              className="group shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Escríbeme por WhatsApp
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            className="text-sm text-muted-foreground mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Respuesta rápida. Sin burocracia.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
