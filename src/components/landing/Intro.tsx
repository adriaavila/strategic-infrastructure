import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const whenWeWork = [
  "hay flujos propios",
  "hay lógica particular",
  "hay procesos que ordenar o escalar"
];

export const Intro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="intro" className="relative py-24 md:py-32 scroll-mt-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto" ref={containerRef}>
          {/* Title */}
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            No hacemos "páginas web". Construimos sistemas.
          </motion.h2>

          {/* Copy */}
          <motion.div 
            className="space-y-6 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              Allok Servicios Creativos es un estudio especializado en <strong className="text-foreground">diseño y desarrollo de sistemas digitales personalizados</strong> para negocios que ya operan y necesitan soluciones específicas.
            </p>

            <p>
              Trabajamos cuando:
            </p>

            <ul className="space-y-2 ml-6">
              {whenWeWork.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                >
                  <span className="text-emerald-600 mt-1.5">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <p className="pt-2">
              Si tu proyecto no encaja en una plantilla, acá es donde empezamos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
