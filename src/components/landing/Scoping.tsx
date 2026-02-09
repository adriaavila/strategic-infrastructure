import { Button } from "@/components/ui/button";
import { ArrowRight, Search, FileText, Hammer, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const processSteps = [
  {
    step: "1",
    title: "Diagnóstico",
    duration: "30–60 min",
    description: "Entendemos datos, procesos actuales y objetivos de negocio.",
    icon: Search
  },
  {
    step: "2",
    title: "Definición",
    duration: "3–5 días",
    description: "Casos de uso, alcance y métricas. Todo claro antes de construir.",
    icon: FileText
  },
  {
    step: "3",
    title: "Alineación",
    duration: "Según necesidad",
    description: "Refinamos con tu feedback y dejamos el plan listo.",
    icon: CheckCircle2
  }
];

const factors = [
  {
    title: "Integraciones necesarias",
    description: "Sistemas que ya usás y hay que conectar"
  },
  {
    title: "Plazo y presupuesto",
    description: "Tus tiempos y recursos"
  },
  {
    title: "Madurez de datos",
    description: "Disponibilidad y calidad de la información"
  }
];

export const Scoping = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="alcance" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16" ref={containerRef}>
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Cómo Definimos el Alcance
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Alcance definido, sin paquetes fijos. Cada proyecto es distinto.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ 
                    delay: index * 0.15 + 0.2,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {/* Connection line (except for last) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-foreground/10 -z-10" style={{ width: 'calc(100% - 3rem)' }}>
                      <motion.div 
                        className="h-full bg-brand-secondary/30"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : { width: 0 }}
                        transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                      />
                    </div>
                  )}

                  <div className="bg-card border border-foreground/[0.08] rounded-2xl p-6 h-full hover:border-foreground/[0.15] transition-colors">
                    {/* Step number and icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary font-semibold"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                      >
                        {item.step}
                      </motion.div>
                      <motion.div
                        className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center"
                        initial={{ scale: 0, rotate: -90 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                        transition={{ delay: index * 0.15 + 0.4, type: "spring" }}
                      >
                        <Icon className="w-5 h-5 text-foreground/70" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <motion.h3 
                      className="text-lg font-semibold mb-1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.15 + 0.5, duration: 0.4 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-xs text-muted-foreground mb-3"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.15 + 0.6, duration: 0.4 }}
                    >
                      {item.duration}
                    </motion.p>
                    <motion.p 
                      className="text-sm text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.15 + 0.7, duration: 0.4 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Factors that affect scope */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.h3 
            className="text-xl font-semibold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Factores que Afectan el Alcance
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-4">
            {factors.map((factor, index) => (
              <motion.div
                key={factor.title}
                className="bg-card border border-foreground/[0.08] rounded-xl p-4 hover:border-foreground/[0.15] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
              >
                <h4 className="font-medium mb-1">{factor.title}</h4>
                <p className="text-sm text-muted-foreground">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="bg-card border border-foreground/[0.08] rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-3">¿Listo para empezar?</h3>
            <p className="text-muted-foreground mb-6">
              Una llamada para entender tu operación y darte claridad. Sin compromiso. Sin presión.
            </p>
            <Button variant="hero" size="lg" asChild className="group">
              <a href="/#contacto">
                Agendar Llamada de Descubrimiento
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
