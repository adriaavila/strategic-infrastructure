import { Code2, BarChart3, Workflow } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { ParticleBackground } from "@/components/particles/ParticleBackground";

const pillarServices = [
  {
    title: "Presencia digital",
    subtitle: "Webs y ecommerce diseñados para convertir",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Rápidas, responsivas y hechas para que el visitante tomé acción: agendar, comprar o escribirte.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Webs corporativas · Ecommerce · Landing pages
        </p>
      </>
    ),
    icon: <Code2 className="w-5 h-5 text-foreground/70" />,
    visual: <div className="h-52 border-t border-foreground/[0.05] bg-gradient-to-br from-brand-primary/10 to-transparent p-5"><div className="h-full rounded-2xl border border-foreground/10 bg-card/60 p-4"><div className="h-6 w-24 rounded bg-foreground/10 mb-4" /><div className="grid grid-cols-2 gap-3 h-[calc(100%-2.5rem)]"><div className="rounded-xl bg-foreground/[0.05]" /><div className="space-y-3"><div className="h-4 rounded bg-foreground/[0.08]" /><div className="h-4 w-4/5 rounded bg-foreground/[0.06]" /><div className="h-10 w-28 rounded-xl bg-brand-secondary/20" /></div></div></div></div>,
    className: "lg:col-span-2",
    delay: 200,
    accent: "blue" as const,
  },
  {
    title: "Automatización con IA",
    subtitle: "Procesos que eliminan trabajo manual",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Responden clientes por WhatsApp, organizan pedidos y conectan tus herramientas. Sin intervención manual.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Flujos con IA · Integraciones · Automatización operativa
        </p>
      </>
    ),
    icon: <Workflow className="w-5 h-5 text-foreground/70" />,
    visual: <div className="h-52 border-t border-foreground/[0.05] bg-gradient-to-br from-brand-secondary/10 to-transparent p-5"><div className="flex h-full items-center justify-between gap-3"><div className="flex-1 rounded-2xl border border-foreground/10 bg-card/60 p-3 text-center text-sm">WhatsApp</div><div className="w-10 h-px bg-brand-secondary/40" /><div className="flex-1 rounded-2xl border border-foreground/10 bg-card/60 p-3 text-center text-sm">IA</div><div className="w-10 h-px bg-brand-secondary/40" /><div className="flex-1 rounded-2xl border border-foreground/10 bg-card/60 p-3 text-center text-sm">CRM</div></div></div>,
    className: "",
    delay: 300,
    accent: "emerald" as const,
  },
  {
    title: "Inteligencia del negocio",
    subtitle: "Dashboards y análisis para decidir mejor",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Tableros con los números que importan: ventas, costos, leads y tiempos de entrega. Sin Excel, actualizado en tiempo real.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Dashboards · KPIs · Reporting operativo
        </p>
      </>
    ),
    icon: <BarChart3 className="w-5 h-5 text-foreground/70" />,
    visual: <div className="h-52 border-t border-foreground/[0.05] bg-gradient-to-br from-brand-primary/10 to-transparent p-5"><div className="grid grid-cols-3 gap-2 mb-3">{["Ventas","Horas","Leads"].map((label)=><div key={label} className="rounded-xl border border-foreground/10 bg-card/60 p-2 text-center text-[10px]">{label}<div className="mt-1 h-4 rounded bg-brand-secondary/20" /></div>)}</div><div className="flex items-end gap-2 h-24">{[35,55,45,70,60,82].map((h,i)=><div key={i} className="flex-1 rounded-t bg-brand-secondary/20" style={{height:`${h}%`}} />)}</div></div>,
    className: "lg:col-span-3",
    delay: 400,
    accent: "purple" as const,
  },
];

export const CoreServices = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <>
      <section id="servicios" className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 architectural-grid opacity-30" />
        <div className="absolute inset-0 gradient-mesh" />
        <ParticleBackground />

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-24" ref={heroRef}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] mb-4 text-balance font-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Servicios
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Tres soluciones que funcionan solas o conectadas entre sí.
            </motion.p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent hidden dark:block" />
      </section>

      <section className="relative pb-32 scroll-mt-20 gradient-mesh-subtle" ref={containerRef}>
        <div className="container mx-auto px-6">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" initial="hidden" animate={isInView ? "show" : "hidden"}>
            {pillarServices.map((service, index) => (
              <BentoCard key={service.title} title={service.title} subtitle={service.subtitle} description={service.description} icon={service.icon} visual={service.visual} className={service.className} delay={service.delay} index={index} accent={service.accent} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
