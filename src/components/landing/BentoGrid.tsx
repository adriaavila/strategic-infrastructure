import { Building2, LineChart, FolderKanban, Users, Check, ArrowRight, Search } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

// Shared visual container
const VISUAL_HEIGHT = "h-52";
const VISUAL_BASE =
  "bg-foreground/[0.03] border-t border-foreground/[0.08] overflow-hidden " +
  VISUAL_HEIGHT;

// ────────────────────────────────────────────────
// Portal Inmobiliario Visual
// ────────────────────────────────────────────────
const PortalInmobiliarioVisual = () => {
  const shouldReduceMotion = useReducedMotion();
  const bookings = [
    { unit: "Unidad A-402", status: "Reserva Confirmada", color: "bg-emerald-500" },
    { unit: "Unidad B-105", status: "Pago Pendiente", color: "bg-amber-500" },
    { unit: "Unidad C-301", status: "Contrato Firmado", color: "bg-blue-500" },
  ];

  return (
    <div className={`${VISUAL_BASE} p-5`}>
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
            Pipeline de Reservas
          </span>
          <span className="text-[10px] text-brand-secondary font-mono font-bold">
            Actualizado
          </span>
        </div>

        {bookings.map((booking, i) => {
          const baseDelay = i * 0.35;
          return (
            <motion.div
              key={booking.unit}
              className="flex items-center gap-3 p-2.5 rounded-lg bg-foreground/[0.04] border border-foreground/[0.06]"
              animate={{
                opacity: [0, 1, 1, 1, 0],
                x: [-20, 0, 0, 0, -20],
              }}
              transition={{
                delay: baseDelay,
                duration: 5.5,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={`w-2 h-2 rounded-full ${booking.color}`} />
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium">{booking.unit}</div>
                <div className="text-[9px] text-muted-foreground truncate">
                  {booking.status}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────
// Flujo Automatizado Visual
// ────────────────────────────────────────────────
const FlujoTrabajoVisual = () => {
  const shouldReduceMotion = useReducedMotion();

  const nodes = [
    { label: "App", icon: "📱", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    { label: "N8N", icon: "⚡", color: "bg-brand-secondary/20 text-brand-secondary border-brand-secondary/30" },
    { label: "ERP", icon: "🏛️", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  ];

  return (
    <div className={`${VISUAL_BASE} p-5`}>
      <div className="flex flex-col h-full justify-center gap-4">
        {/* Workflow nodes row */}
        <div className="flex items-center justify-between gap-2">
          {nodes.map((node, i) => (
            <motion.div
              key={node.label}
              className="flex flex-col items-center gap-1.5 flex-1"
              initial={{ opacity: 0, y: 10 }}
              animate={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: [0, 1, 1, 0], y: [10, 0, 0, 10] }
              }
              transition={{
                delay: i * 0.3,
                duration: shouldReduceMotion ? 0.5 : 5,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center text-sm ${node.color}`}>
                {node.icon}
              </div>
              <span className="text-[9px] font-mono text-muted-foreground font-medium uppercase tracking-wider">
                {node.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Connection lines with flowing data */}
        <div className="flex items-center gap-0 px-6">
          {[0, 1].map((i) => (
            <div key={i} className="flex-1 h-px bg-foreground/10 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-brand-secondary/60 to-transparent"
                animate={{ x: shouldReduceMotion ? 0 : ["-100%", "400%"] }}
                transition={{ delay: i * 0.4, duration: 2, repeat: shouldReduceMotion ? 0 : Infinity, ease: "linear" }}
              />
            </div>
          ))}
        </div>

        {/* Status bar */}
        <motion.div
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-secondary/5 border border-brand-secondary/10"
          animate={{ opacity: shouldReduceMotion ? 1 : [0, 0, 1, 1, 0] }}
          transition={{ delay: 1.5, duration: 5, repeat: shouldReduceMotion ? 0 : Infinity, repeatType: "loop" }}
        >
          <Check className="w-3 h-3 text-brand-secondary" />
          <span className="text-[10px] text-brand-secondary font-medium">
            Multiplicando ventas sin error humano
          </span>
        </motion.div>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────
// Dashboard Financiero Visual
// ────────────────────────────────────────────────
const DashboardFinancieroVisual = () => {
  const shouldReduceMotion = useReducedMotion();
  const metrics = [
    { label: "Flujo Caja", before: "$12K", after: "$48K", increase: "300%" },
    { label: "Cobranza", before: "45d", after: "12d", increase: "73%" },
  ];

  return (
    <div className={`${VISUAL_BASE} p-5`}>
      <div className="space-y-4">
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
            Aceleración de Cobranza
          </span>
        </motion.div>

        <div className="space-y-3">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -15 }}
              animate={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: [0, 1, 1, 0], x: [-15, 0, 0, -15] }}
              transition={{ delay: 0.6 + i * 0.25, duration: shouldReduceMotion ? 0.4 : 6, repeat: shouldReduceMotion ? 0 : Infinity, repeatType: "loop", ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[9px] text-muted-foreground w-16 shrink-0">{m.label}</span>
              <div className="flex-1 h-5 rounded bg-foreground/5 flex items-center px-2">
                <span className="text-[9px] font-mono text-muted-foreground">{m.before}</span>
              </div>
              <ArrowRight className="w-3 h-3 text-foreground/30 shrink-0" />
              <div className="flex-1 h-5 rounded bg-brand-secondary/20 flex items-center px-2">
                <span className="text-[9px] font-mono text-brand-secondary">{m.after}</span>
              </div>
              <span className="text-[9px] font-mono font-bold text-brand-secondary bg-brand-secondary/10 rounded px-1.5 py-0.5 shrink-0">
                +{m.increase}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="rounded-lg bg-card border border-foreground/[0.08] p-2.5 text-center mt-2"
          animate={{ opacity: shouldReduceMotion ? 1 : [0, 0, 0, 1, 1, 0] }}
          transition={{ delay: 2, duration: 6, repeat: shouldReduceMotion ? 0 : Infinity, repeatType: "loop" }}
        >
          <div className="text-[11px] text-foreground/80 font-medium">Reportes que muestran tu rentabilidad</div>
        </motion.div>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────
// Portales VIP Visual
// ────────────────────────────────────────────────
const PortalAutogestionVisual = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`${VISUAL_BASE} p-5`}>
      <div className="space-y-3">
        {/* Search bar mock */}
        <motion.div
          className="flex items-center gap-2 px-3 py-2 rounded-lg border border-foreground/[0.1] bg-foreground/[0.04]"
          initial={{ opacity: 0, y: -5 }}
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: [0, 1, 1, 1, 0], y: [-5, 0, 0, 0, -5] }}
          transition={{ duration: shouldReduceMotion ? 0.5 : 6, repeat: shouldReduceMotion ? 0 : Infinity, repeatType: "loop", ease: [0.16, 1, 0.3, 1] }}
        >
          <Search className="w-3.5 h-3.5 text-foreground/30" />
          <span className="text-[11px] text-foreground/50">Buscar facturas o pedidos...</span>
        </motion.div>

        {/* Results */}
        {[
          { title: "Factura_Agosto_2024.pdf", size: "124 KB", status: "Pagada", alert: false },
          { title: "Orden de Compra #8992", size: "Pendiente", status: "Aprobación Requerida", alert: true },
        ].map((result, i) => (
          <motion.div
            key={result.title}
            className={`rounded-lg border ${result.alert ? 'border-amber-500/30 bg-amber-500/5' : 'border-foreground/[0.08] bg-card/50'} p-2.5`}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0, 0, 0, 1, 1, 0], y: [8, 8, 8, 0, 0, 8] }}
            transition={{ delay: 1.5 + i * 0.3, duration: 6, repeat: shouldReduceMotion ? 0 : Infinity, repeatType: "loop", ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-medium text-foreground/80">{result.title}</span>
              <span className={`text-[9px] font-mono font-bold ${result.alert ? 'text-amber-500' : 'text-brand-secondary'}`}>
                {result.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const useCases = [
  {
    title: "Sistema de Reservas Inmobiliario",
    subtitle: "Ventas sin fricción",
    description: "Plataforma a medida que conecta tu CRM con ventas, eliminando demoras y acelerando el cobro.",
    icon: <Building2 className="w-5 h-5 text-foreground/70" />,
    visual: <PortalInmobiliarioVisual />,
    className: "lg:col-span-2 lg:row-span-1",
    delay: 200,
    accent: "emerald" as const,
  },
  {
    title: "Dashboard Financiero Integrado",
    subtitle: "ROI Claro en Tiempo Real",
    description: "Visualiza la rentabilidad exacta de cada operación sin tener que abrir Excel nunca más.",
    icon: <LineChart className="w-5 h-5 text-foreground/70" />,
    visual: <DashboardFinancieroVisual />,
    className: "lg:col-span-1 lg:row-span-1",
    delay: 300,
    accent: "blue" as const,
  },
  {
    title: "Flujo de Órdenes Automatizado",
    subtitle: "Cero Trabajo Manual",
    description: "Procesa el triple de órdenes sin contratar más personal, conectando tu tienda directamente con logística.",
    icon: <FolderKanban className="w-5 h-5 text-foreground/70" />,
    visual: <FlujoTrabajoVisual />,
    className: "lg:col-span-1 lg:row-span-1",
    delay: 400,
    accent: "purple" as const,
  },
  {
    title: "Portales de Cliente y Autogestión",
    subtitle: "Experiencia Premium",
    description: "Portales con diseño obsesivo donde tus clientes pueden comprar y gestionarse solos, aumentando su lealtad.",
    icon: <Users className="w-5 h-5 text-foreground/70" />,
    visual: <PortalAutogestionVisual />,
    className: "lg:col-span-2 lg:row-span-1",
    delay: 500,
    accent: "amber" as const,
  },
];

export const ServicePillars = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section
      id="casos-uso"
      className="relative py-24 md:py-32 scroll-mt-20 gradient-mesh-subtle"
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Casos de Aplicación Reales
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Del problema operativo a la solución tecnológica desplegada.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-fr"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {useCases.map((useCase, index) => (
            <BentoCard
              key={useCase.title}
              title={useCase.title}
              subtitle={useCase.subtitle}
              description={useCase.description}
              icon={useCase.icon}
              visual={useCase.visual}
              className={useCase.className}
              delay={useCase.delay}
              index={index}
              accent={useCase.accent}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Export legacy name for backwards compatibility if still imported as BentoGrid directly anywhere
export const BentoGrid = ServicePillars;
