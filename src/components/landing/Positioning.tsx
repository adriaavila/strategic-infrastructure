import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Positioning = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="diferenciacion" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto" ref={containerRef}>
          <motion.h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            Construido con IA
          </motion.h2>

          <motion.div className="space-y-4 text-muted-foreground leading-relaxed text-lg" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <p>
              Gran parte de mi tiempo está dedicado a estudiar nuevas herramientas de inteligencia artificial, automatización y desarrollo para construir sistemas más eficientes.
            </p>
            <p>
              Ese es el verdadero diferenciador: no solo diseñar o programar, sino integrar tecnología moderna en soluciones que ahorran tiempo, mejoran la operación y aumentan la capacidad del negocio.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
