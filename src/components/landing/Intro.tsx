import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const valuePoints = [
  {
    num: "01",
    text: "Presencia digital. Webs y ecommerce diseñados para convertir visitantes en clientes.",
  },
  {
    num: "02",
    text: "Automatización con IA. Procesos que reducen trabajo manual y aceleran atención, ventas y operación.",
  },
  {
    num: "03",
    text: "Inteligencia del negocio. Dashboards y sistemas que ayudan a tomar decisiones con datos claros.",
  },
];

export const Intro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="intro" className="relative py-24 md:py-32 scroll-mt-20 bg-muted/20 gradient-mesh-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto" ref={containerRef}>
          <div className="layout-asymmetric items-start">
            <div className="space-y-6">
              <motion.h2
                className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 font-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Sistemas digitales para negocios construidos con IA y automatización
              </motion.h2>

              <motion.div
                className="space-y-6 text-muted-foreground leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <p>
                  En lugar de ofrecer servicios sueltos, diseño y construyo sistemas que conectan presencia digital, automatización e inteligencia operativa para que un negocio pueda crecer con más orden.
                </p>
                <p className="text-foreground/80 font-medium">
                  El foco no está en la tecnología por sí sola. Está en ventas, eficiencia y una operación que funciona mejor.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="layout-offset-right"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <ul className="space-y-4">
                {valuePoints.map((item, index) => (
                  <motion.li
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-foreground/5 hover:border-brand-secondary/20 transition-all duration-300 relative overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-secondary/50 to-brand-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-brand-secondary font-mono text-sm font-bold mt-0.5 shrink-0">{item.num}</span>
                    <span className="text-foreground/80 leading-relaxed">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
