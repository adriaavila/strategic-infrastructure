import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Hammer, Cpu } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Me cuentas el problema. Yo te digo qué construir primero.",
    bullets: ["Objetivo del proyecto", "Oportunidades de mejora"],
    note: "Resultado: alcance y prioridad claros.",
    icon: FileText,
    color: "mint",
  },
  {
    number: "02",
    title: "Diseño del sistema",
    description: "Estructura, integraciones y flujo de uso de tu equipo.",
    bullets: ["Arquitectura funcional", "Integraciones y flujos"],
    note: "Resultado: solución pensada para operar.",
    icon: Hammer,
    color: "blue",
  },
  {
    number: "03",
    title: "Implementación y mejora",
    description: "Construyo, conecto, pruebo y entrego listo para usar.",
    bullets: ["Producción", "Optimización con datos"],
    note: "Resultado: sistema útil desde día uno.",
    icon: Cpu,
    color: "mint",
  },
];

export const EngagementModel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="proceso" className="relative py-24 md:py-32 scroll-mt-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={containerRef}>
          <motion.h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-heading" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            Cómo funciona
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            De la primera conversación a un sistema funcionando, en tres pasos.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.number} className="relative" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ delay: index * 0.2 + 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                  <div className="bg-card border border-foreground/[0.08] rounded-2xl p-8 h-full hover:border-foreground/[0.15] transition-all shadow-architectural hover:shadow-lg">
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-5xl font-bold text-foreground/10">{step.number}</div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.color === "mint" ? "bg-brand-secondary/10" : "bg-brand-primary/10"}`}>
                        <Icon className={`w-6 h-6 ${step.color === "mint" ? "text-brand-secondary" : "text-brand-primary"}`} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 font-heading">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                    <ul className="space-y-2 mb-4 ml-4">
                      {step.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-brand-secondary mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-semibold text-foreground/90 pt-4 border-t border-foreground/10">{step.note}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div className="text-center mt-12" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.6, duration: 0.6 }}>
            <Button variant="hero" size="lg" asChild className="group shadow-lg hover:shadow-xl">
              <a href="/brief?source=processo-home">
                Solicitar diagnóstico
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
