import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const offers = [
  {
    name: "Presencia digital",
    detail: "Landing pages, websites corporativos y ecommerce",
    items: ["Arquitectura y copy orientados a conversión", "Diseño y desarrollo a medida", "Base lista para crecer y medir"],
  },
  {
    name: "Automatización con IA",
    detail: "Procesos, integraciones y flujos conectados al negocio",
    items: ["Eliminación de tareas manuales", "Automatización de atención y operación", "Integración con herramientas existentes"],
  },
  {
    name: "Inteligencia del negocio",
    detail: "Dashboards, reporting y sistemas internos",
    items: ["Visualización de métricas clave", "Seguimiento comercial y operativo", "Decisiones basadas en datos"],
  },
];

export const Pricing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section id="oferta" className="relative py-24 md:py-32 scroll-mt-20 gradient-mesh-subtle overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={containerRef}>
          <motion.h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-heading" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            La oferta se vende mejor cuando se entiende como un sistema
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            Cada proyecto se define por objetivos, alcance y complejidad. El primer paso es entender dónde está el mayor impacto para tu negocio.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <motion.div key={offer.name} className="relative bg-card rounded-2xl p-8 border border-foreground/[0.08]" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}>
              <h3 className="text-xl font-bold mb-2">{offer.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{offer.detail}</p>
              <ul className="space-y-3 mb-8">
                {offer.items.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16 text-center max-w-2xl mx-auto p-6 bg-card/50 border border-foreground/[0.05] rounded-xl" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.6, duration: 0.5 }}>
          <h4 className="text-lg font-bold mb-2">¿Quieres saber qué sistema necesitas construir primero?</h4>
          <p className="text-muted-foreground mb-4">
            Puedo revisar tu caso y recomendarte la mejor combinación entre web, automatización e inteligencia operativa.
          </p>
          <Button variant="link" asChild className="text-brand-secondary hover:text-brand-secondary/80">
            <a href="/brief?source=oferta-home">
              Analizar mi negocio <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
