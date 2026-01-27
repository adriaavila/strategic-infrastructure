import { Layout, Settings, ShoppingCart } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

// Shared visual container: unified height and chrome
const VISUAL_HEIGHT = "h-52";
const VISUAL_BASE = "bg-foreground/[0.03] border-t border-foreground/[0.08] overflow-hidden " + VISUAL_HEIGHT;

// Custom Website Visual - static browser + wireframe (hero, grid, CTA)
const CustomWebsiteVisual = () => {
  return (
    <div className={`${VISUAL_BASE} p-4`}>
      <div className="rounded-lg border border-foreground/[0.08] overflow-hidden bg-card/50">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-foreground/[0.05] border-b border-foreground/[0.08]">
          <div className="w-2 h-2 rounded-full bg-red-400/50" />
          <div className="w-2 h-2 rounded-full bg-amber-400/50" />
          <div className="w-2 h-2 rounded-full bg-brand-secondary/50" />
          <div className="flex-1 mx-2 h-3.5 rounded bg-foreground/[0.06]" />
        </div>
        {/* Wireframe content */}
        <div className="p-3 space-y-2">
          <div className="h-7 rounded-md bg-brand-secondary/15" />
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-11 rounded-md bg-foreground/[0.05] border border-foreground/[0.06]" />
            ))}
          </div>
          <div className="h-3.5 rounded-md bg-brand-primary/10" />
        </div>
      </div>
    </div>
  );
};

// Web Apps Visual - static dashboard layout, scroll-triggered entry-only stagger
const WebAppsVisual = () => {
  const visualRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(visualRef, { once: true, margin: "-20px" });
  const shouldReduceMotion = useReducedMotion();

  const tiles = [
    { bar: "w-full", sub: "w-3/4", accent: false },
    { bar: "w-4/5", sub: "w-2/3", accent: false },
    { bar: "w-3/4", sub: "w-1/2", accent: true },
    { bar: "w-5/6", sub: "w-2/3", accent: false },
  ];

  const tileClassName = "rounded-lg border border-foreground/[0.08] p-2 bg-card/50";

  if (shouldReduceMotion) {
    return (
      <div ref={visualRef} className={`${VISUAL_BASE} p-4`}>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-2 rounded-lg bg-foreground/[0.05] border border-foreground/[0.08]">
            <div className="h-2 w-16 rounded bg-foreground/[0.08]" />
            <div className="w-5 h-5 rounded-full bg-brand-secondary/20" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {tiles.map((t, i) => (
              <div key={i} className={tileClassName}>
                <div className={`h-2 rounded bg-foreground/[0.08] mb-1.5 ${t.bar}`} />
                <div className={`h-1 rounded bg-foreground/[0.05] ${t.sub}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={visualRef} className={`${VISUAL_BASE} p-4`}>
      <div className="space-y-3">
        <motion.div
          className="flex items-center justify-between p-2 rounded-lg bg-foreground/[0.05] border border-foreground/[0.08]"
          initial={{ opacity: 0, y: -8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="h-2 w-16 rounded bg-foreground/[0.08]" />
          <div className="w-5 h-5 rounded-full bg-brand-secondary/20" />
        </motion.div>
        <div className="grid grid-cols-2 gap-2">
          {tiles.map((t, i) => (
            <motion.div
              key={i}
              className={`${tileClassName} ${t.accent ? "ring-1 ring-brand-secondary/20" : ""}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{
                delay: 0.08 + i * 0.06,
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={`h-2 rounded bg-foreground/[0.08] mb-1.5 ${t.bar}`} />
              <div className={`h-1 rounded bg-foreground/[0.05] ${t.sub}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// E-commerce Visual - static products + cart + checkout strip
const EcommerceVisual = () => {
  return (
    <div className={`${VISUAL_BASE} p-4`}>
      <div className="space-y-3">
        {/* Product thumbnails */}
        <div className="flex gap-2">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="flex-1 rounded-lg border border-foreground/[0.08] p-2 bg-card/50"
            >
              <div className="h-9 rounded-md bg-gradient-to-br from-brand-primary/15 to-brand-primary/30 mb-2" />
              <div className="h-1.5 w-full rounded bg-foreground/[0.06]" />
            </div>
          ))}
        </div>
        {/* Checkout strip */}
        <div className="rounded-lg border border-foreground/[0.08] p-2.5 bg-card/50">
          <div className="flex items-center justify-between mb-2">
            <div className="h-2 w-12 rounded bg-foreground/[0.08]" />
            <div className="w-6 h-6 rounded-full bg-brand-secondary/20 flex items-center justify-center">
              <ShoppingCart className="w-3 h-3 text-brand-secondary" />
            </div>
          </div>
          <div className="h-5 rounded-md bg-gradient-to-r from-brand-secondary/15 to-brand-primary/10" />
        </div>
        {/* Payment icons */}
        <div className="flex gap-1.5 justify-end">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-6 h-4 rounded bg-foreground/[0.06]" />
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Sitios Web Personalizados",
    subtitle: "Cuando la web tiene que cumplir una función real.",
    description: (
      <>
        <p className="mb-4 text-foreground/80">
          Construimos sitios web que cargan rápido, aparecen en Google y convierten visitantes en clientes.
        </p>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-3">
            <span className="text-brand-secondary mt-1 font-bold">•</span>
            <span className="text-foreground/70">Páginas que cargan en menos de 2 segundos y aparecen en los primeros resultados de búsqueda</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-secondary mt-1 font-bold">•</span>
            <span className="text-foreground/70">Interfaces accesibles que funcionan para todos tus usuarios</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-secondary mt-1 font-bold">•</span>
            <span className="text-foreground/70">Diseño basado en cómo tus usuarios realmente usan el sitio, no en suposiciones</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-secondary mt-1 font-bold">•</span>
            <span className="text-foreground/70">Más conversiones porque cada elemento está pensado para mover a la acción</span>
          </li>
        </ul>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10">
          Ideal para: negocios que necesitan resultados medibles, no solo páginas bonitas.
        </p>
      </>
    ),
    icon: <Layout className="w-5 h-5 text-foreground/70" />,
    visual: <CustomWebsiteVisual />,
    className: "lg:col-span-1",
    delay: 200,
    accent: "emerald" as const,
  },
  {
    title: "Webapps & Herramientas Internas",
    subtitle: "Sistemas para operar mejor.",
    description: (
      <>
        <p className="mb-4 text-foreground/80">
          Reemplazamos procesos manuales, hojas de cálculo y soluciones parcheadas con sistemas que realmente funcionan.
        </p>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-3">
            <span className="text-brand-secondary mt-1 font-bold">•</span>
            <span className="text-foreground/70">MVPs funcionales en semanas, no meses</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-secondary mt-1 font-bold">•</span>
            <span className="text-foreground/70">Paneles que te dan control real sobre tus operaciones</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-secondary mt-1 font-bold">•</span>
            <span className="text-foreground/70">Dashboards que muestran lo que importa, cuando lo necesitás</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-secondary mt-1 font-bold">•</span>
            <span className="text-foreground/70">Automatización que elimina trabajo repetitivo</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-secondary mt-1 font-bold">•</span>
            <span className="text-foreground/70">Integraciones que conectan todas tus herramientas sin fricción</span>
          </li>
        </ul>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10">
          Ideal para: equipos que están perdiendo tiempo en tareas que deberían estar automatizadas.
        </p>
      </>
    ),
    icon: <Settings className="w-5 h-5 text-foreground/70" />,
    visual: <WebAppsVisual />,
    className: "lg:col-span-1",
    delay: 300,
    accent: "blue" as const,
  },
  {
    title: "E-commerce a Medida",
    subtitle: "Cuando vender online requiere algo más que un checkout estándar.",
    description: (
      <>
        <p className="mb-4 text-foreground/80">
          Construimos tiendas online que funcionan con las reglas reales de tu negocio, no contra ellas.
        </p>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-3">
            <span className="text-brand-secondary mt-1 font-bold">•</span>
            <span className="text-foreground/70">Productos con lógica personalizada: precios dinámicos, descuentos complejos, inventario inteligente</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-secondary mt-1 font-bold">•</span>
            <span className="text-foreground/70">Flujos de compra que se adaptan a cómo realmente vendés</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-secondary mt-1 font-bold">•</span>
            <span className="text-foreground/70">Integraciones con tu sistema de pagos, logística y gestión existente</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-secondary mt-1 font-bold">•</span>
            <span className="text-foreground/70">Performance que aguanta picos de tráfico sin caerse</span>
          </li>
        </ul>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10">
          Ideal para: catálogos complejos, marketplaces, suscripciones y negocios con reglas propias que las plataformas genéricas no pueden manejar.
        </p>
      </>
    ),
    icon: <ShoppingCart className="w-5 h-5 text-foreground/70" />,
    visual: <EcommerceVisual />,
    className: "lg:col-span-1",
    delay: 400,
    accent: "purple" as const,
  }
];

export const ServicePillars = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section id="pilares" className="relative py-24 md:py-32 scroll-mt-20 gradient-mesh-subtle" ref={containerRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Pilares de Servicio
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            No vendemos paquetes. Diseñamos y construimos sistemas adaptados a tu negocio.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {services.map((service, index) => (
            <BentoCard
              key={service.title}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              icon={service.icon}
              visual={service.visual}
              className={service.className}
              delay={service.delay}
              index={index}
              accent={service.accent}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Export legacy name for backwards compatibility
export const BentoGrid = ServicePillars;
