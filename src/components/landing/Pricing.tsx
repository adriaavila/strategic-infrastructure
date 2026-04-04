import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const offers = [
  {
    name: "$99 Landing Page Sprint",
    detail: "Para negocios que necesitan una pagina clara para presentar su oferta y convertir visitas en contactos reales",
    items: ["Hasta 5 secciones bien estructuradas", "1 CTA principal a WhatsApp, formulario o contacto", "Entrega en 24–72 horas con una revision"],
  },
  {
    name: "Web corporativa",
    detail: "Para negocios que ya necesitan una presencia digital mas completa y mejor organizada",
    items: ["Arquitectura y copy orientados a conversion", "Diseno y desarrollo a medida", "Base lista para crecer y medir"],
  },
  {
    name: "Sistemas y automatizacion",
    detail: "Para equipos que necesitan ordenar procesos, conectar herramientas y operar con menos friccion",
    items: ["Automatizacion de tareas manuales", "Integracion con herramientas existentes", "Dashboards y flujos conectados al negocio"],
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
            Una forma rapida de salir con una pagina clara y lista para convertir
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            Si hoy tu negocio necesita explicar mejor lo que ofrece, generar mas confianza y facilitar el siguiente paso, una landing page bien resuelta suele ser la manera mas directa de empezar.
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
          <h4 className="text-lg font-bold mb-2">¿Necesitas una pagina que explique mejor tu oferta y te ayude a captar mas contactos?</h4>
          <p className="text-muted-foreground mb-4">
            Si lo que hace falta es una pagina enfocada, clara y facil de activar, este sprint es una forma simple de avanzar sin convertirlo en un proyecto eterno.
          </p>
          <Button variant="link" asChild className="text-brand-secondary hover:text-brand-secondary/80">
            <a href="/brief?source=oferta-landing-99">
              Ver si mi caso encaja <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
