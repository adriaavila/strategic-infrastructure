import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Hammer } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Definición del Sistema",
    subtitle: "Etapa paga",
    description: "Diseñamos todo antes de construir. Así evitamos sorpresas.",
    bullets: [
      "entendemos el problema real, no solo lo que creés que necesitás",
      "cerramos alcance, tiempos y presupuesto sin ambigüedad"
    ],
    note: "Sabés exactamente qué vas a recibir, cuándo y a qué precio.",
    icon: FileText,
    color: "mint"
  },
  {
    number: "02",
    title: "Desarrollo",
    subtitle: "",
    description: "Construimos lo definido. Proyectos que terminan en tiempo y forma.",
    bullets: [
      "alcance cerrado desde el inicio",
      "entregas claras y a tiempo"
    ],
    note: "Sin proyectos eternos. Sin vueltas. Entregamos lo acordado.",
    icon: Hammer,
    color: "blue"
  }
];

export const EngagementModel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="proceso" className="relative py-24 md:py-32 scroll-mt-20 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16" ref={containerRef}>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Cómo Trabajamos
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Cada proyecto es diferente. Por eso no usamos plantillas.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Connecting Line */}
            <motion.div
              className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-brand-secondary/20 via-brand-primary/20 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-secondary/30"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.7, duration: 0.4, type: "spring" }}
            />
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ 
                    delay: index * 0.2 + 0.2,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <div className="bg-card border border-foreground/[0.08] rounded-2xl p-8 h-full hover:border-foreground/[0.15] transition-all shadow-architectural hover:shadow-lg">
                    {/* Number and Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className="text-5xl font-bold text-foreground/10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                      >
                        {step.number}
                      </motion.div>
                      <motion.div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          step.color === "mint" ? "bg-brand-secondary/10" : "bg-brand-primary/10"
                        }`}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                        transition={{ delay: index * 0.2 + 0.4, duration: 0.5, type: "spring" }}
                      >
                        <Icon className={`w-6 h-6 ${step.color === "mint" ? "text-brand-secondary" : "text-brand-primary"}`} />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <motion.h3 
                      className="text-2xl font-bold mb-2 font-heading"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.4 }}
                    >
                      {step.title}
                    </motion.h3>
                    {step.subtitle && (
                      <motion.p 
                        className="text-sm text-muted-foreground mb-4"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: index * 0.2 + 0.6, duration: 0.4 }}
                      >
                        {step.subtitle}
                      </motion.p>
                    )}
                    <motion.p 
                      className="text-muted-foreground leading-relaxed mb-4"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.2 + 0.7, duration: 0.4 }}
                    >
                      {step.description}
                    </motion.p>
                    {step.bullets && (
                      <motion.ul 
                        className="space-y-2 mb-4 ml-4"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: index * 0.2 + 0.75, duration: 0.4 }}
                      >
                        {step.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-brand-secondary mt-1">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                    <motion.p 
                      className="text-sm font-semibold text-foreground/90 pt-4 border-t border-foreground/10"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.2 + 0.8, duration: 0.4 }}
                    >
                      {step.note}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button variant="hero" size="lg" asChild className="group shadow-lg hover:shadow-xl">
              <a href="/#contacto">
                Agendar Llamada de Descubrimiento
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
