import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const pricingPlans = [
  {
    name: "Landing page",
    price: "$150",
    idealFor: "marca personal, negocio local, validación rápida",
    features: [
      "Diseño responsive",
      "1 página (One-pager)",
      "Copy estructurado para ventas",
      "Botón de WhatsApp flotante",
      "Formulario de contacto",
      "SEO básico",
      "Entrega rápida",
    ],
    recommended: false,
  },
  {
    name: "Website empresa",
    price: "$300",
    idealFor: "empresas pequeñas, servicios, constructoras, agencias",
    features: [
      "Hasta 5 secciones o páginas",
      "Diseño profesional",
      "Formularios de captación",
      "Integración total con WhatsApp",
      "SEO básico",
      "Panel editable (si aplica)",
    ],
    recommended: true,
  },
  {
    name: "Ecommerce",
    price: "$600",
    idealFor: "tiendas pequeñas, venta directa, catálogos online",
    features: [
      "Catálogo de productos",
      "Carrito y Checkout",
      "Configuración inicial",
      "Carga de productos base",
      "Integración de pasarela de pagos",
      "Capacitación breve",
    ],
    recommended: false,
  },
];

export const Pricing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section
      id="precios"
      className="relative py-24 md:py-32 scroll-mt-20 gradient-mesh-subtle overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={containerRef}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Diseño y desarrollo web para negocios que necesitan verse{" "}
            <span className="text-brand-secondary">profesionales y convertir.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-card rounded-2xl p-8 border ${plan.recommended
                  ? "border-brand-secondary/50 shadow-[0_0_30px_rgba(235,94,40,0.15)] transform md:-translate-y-4"
                  : "border-foreground/[0.08]"
                }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-secondary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Más Popular
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold font-heading">{plan.price}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">
                <span className="font-semibold text-foreground">Ideal para:</span> {plan.idealFor}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.recommended ? "hero" : "outline"}
                className="w-full"
                asChild
              >
                <a href="/#contacto">Elegir Paquete</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center max-w-2xl mx-auto p-6 bg-card/50 border border-foreground/[0.05] rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h4 className="text-lg font-bold mb-2">Automatización, Dashboards y Soluciones SaaS</h4>
          <p className="text-muted-foreground mb-4">
            Los precios varían según la complejidad de la integración y el volumen de datos.
          </p>
          <Button variant="link" asChild className="text-brand-secondary hover:text-brand-secondary/80">
            <a href="/#contacto">
              Solicitar Cotización Personalizada <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
