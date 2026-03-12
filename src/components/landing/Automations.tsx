import { MessageSquare, FileSpreadsheet, Users, Zap, ArrowRight, Check } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ParticleBackground } from "@/components/particles/ParticleBackground";
import { Button } from "@/components/ui/button";
import { BentoCard } from "./BentoCard";
import { getWhatsAppUrl } from "@/config/contact";

// ────────────────────────────────────────────────
// Chat Visual — Realistic chat UI with typing indicator
// ────────────────────────────────────────────────
const ChatVisual = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-foreground/[0.03] border-t border-foreground/[0.08] p-5 h-52 overflow-hidden">
      <div className="space-y-2.5">
        {/* Incoming message */}
        <motion.div
          className="flex gap-2.5"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [-20, 0, 0, -20],
          }}
          transition={{
            duration: 5,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="w-7 h-7 rounded-full bg-foreground/10 flex-shrink-0 flex items-center justify-center">
            <span className="text-[10px] font-medium text-foreground/60">
              U
            </span>
          </div>
          <div className="bg-foreground/[0.08] rounded-2xl rounded-tl-sm px-3 py-2 max-w-[75%]">
            <p className="text-xs text-foreground/80 leading-relaxed">
              Hola, me interesa automatizar ventas
            </p>
          </div>
        </motion.div>

        {/* Typing indicator */}
        <motion.div
          className="flex gap-2.5 justify-end"
          animate={{
            opacity: [0, 0, 1, 0, 0],
          }}
          transition={{
            delay: 1,
            duration: 5,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
          }}
        >
          <div className="bg-neutral-800 rounded-2xl rounded-tr-sm px-3 py-2.5">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-white/50"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bot response */}
        <motion.div
          className="flex gap-2.5 justify-end"
          animate={{
            opacity: [0, 0, 0, 1, 1, 0],
            x: [20, 20, 20, 0, 0, 20],
          }}
          transition={{
            delay: 1.8,
            duration: 5,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="bg-neutral-800 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[75%]">
            <p className="text-xs leading-relaxed text-white">
              ¡Hola! Soy el asistente de INTEGRA. Agendá tu consulta aquí ↓
            </p>
          </div>
        </motion.div>

        {/* CTA button */}
        <motion.div
          className="flex justify-end"
          animate={{
            opacity: [0, 0, 0, 0, 1, 0],
            scale: [0.9, 0.9, 0.9, 0.9, 1, 0.9],
          }}
          transition={{
            delay: 2.8,
            duration: 5,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="bg-brand-secondary text-white rounded-xl px-3 py-1.5 flex items-center gap-1.5">
            <Zap className="w-3 h-3" />
            <span className="text-[10px] font-medium">Agendar →</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────
// Data Visual — Document processing with completion
// ────────────────────────────────────────────────
const DataVisual = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-5 h-52 overflow-hidden">
      <div className="space-y-2.5">
        {/* Source file */}
        <motion.div
          className="flex items-center gap-2.5 p-2.5 rounded-lg bg-foreground/[0.05] border border-foreground/[0.06]"
          animate={{
            opacity: [0, 1, 1, 1, 0],
            x: [-15, 0, 0, 0, -15],
          }}
          transition={{
            duration: 6,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="w-7 h-8 rounded bg-foreground/10 flex items-center justify-center">
            <FileSpreadsheet className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <div className="text-[10px] font-medium">factura_2024.pdf</div>
            <div className="text-[9px] text-muted-foreground">124 KB</div>
          </div>
        </motion.div>

        {/* Processing indicator */}
        <motion.div
          className="flex flex-col items-center gap-1 py-1"
          animate={{
            opacity: [0, 0, 1, 1, 0],
          }}
          transition={{
            delay: 1,
            duration: 6,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
          }}
        >
          <div className="w-0.5 h-3 bg-foreground/10 rounded" />
          <motion.div
            className="w-5 h-5 rounded-full bg-brand-secondary/20 flex items-center justify-center"
            animate={{
              scale: [0.8, 1, 0.8],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <Zap className="w-2.5 h-2.5 text-brand-secondary" />
          </motion.div>
          <div className="w-0.5 h-3 bg-foreground/10 rounded" />
        </motion.div>

        {/* Output table */}
        <motion.div
          className="rounded-lg border border-foreground/[0.08] overflow-hidden"
          animate={{
            opacity: [0, 0, 0, 1, 0],
            y: [10, 10, 10, 0, 10],
          }}
          transition={{
            delay: 2.5,
            duration: 6,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="grid grid-cols-3 text-[9px] bg-foreground/[0.05] px-2.5 py-1.5 font-medium uppercase tracking-wider text-muted-foreground">
            <span>Concepto</span>
            <span>Monto</span>
            <span>Fecha</span>
          </div>
          <div className="grid grid-cols-3 text-[10px] px-2.5 py-2 border-t border-foreground/[0.05]">
            <span className="text-muted-foreground">Software</span>
            <span className="text-brand-secondary font-mono">$2,400</span>
            <span className="text-muted-foreground font-mono">15/01</span>
          </div>
          {/* Checkmark */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-brand-secondary/5 border-t border-brand-secondary/10">
            <Check className="w-3 h-3 text-brand-secondary" />
            <span className="text-[9px] text-brand-secondary font-medium">
              Procesado
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────
// Pipeline Visual — Horizontal funnel with counts
// ────────────────────────────────────────────────
const PipelineVisual = () => {
  const shouldReduceMotion = useReducedMotion();
  const stages = [
    { name: "Nuevo", count: 24, color: "bg-foreground/10 text-foreground/60" },
    { name: "Contactado", count: 18, color: "bg-blue-500/20 text-blue-400" },
    { name: "Calificado", count: 9, color: "bg-amber-500/20 text-amber-400" },
    {
      name: "Cerrado",
      count: 5,
      color:
        "bg-brand-secondary/20 text-brand-secondary ring-1 ring-brand-secondary/30",
    },
  ];

  return (
    <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-5 h-52 overflow-hidden">
      <div className="flex flex-col h-full justify-center gap-3">
        {/* Funnel bars */}
        {stages.map((stage, i) => {
          const widthPct = 100 - i * 18;
          return (
            <motion.div
              key={stage.name}
              className="flex items-center gap-2.5"
              animate={{
                opacity: [0, 1, 1, 0],
                x: [-20, 0, 0, -20],
              }}
              transition={{
                delay: i * 0.3,
                duration: 6,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="text-[9px] text-muted-foreground w-16 shrink-0 text-right">
                {stage.name}
              </span>
              <motion.div
                className={`h-6 rounded-md flex items-center px-2 ${stage.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${widthPct}%` }}
                transition={{
                  delay: 0.5 + i * 0.3,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <span className="text-[10px] font-mono font-bold">
                  {stage.count}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────
// Reactivation Visual — Contact list with activity
// ────────────────────────────────────────────────
const ReactivationVisual = () => {
  const shouldReduceMotion = useReducedMotion();
  const contacts = [
    { name: "María G.", status: "Contactado", color: "bg-blue-400" },
    { name: "Carlos R.", status: "Respondió", color: "bg-amber-400" },
    { name: "Ana P.", status: "Llamada agendada", color: "bg-brand-secondary" },
  ];

  return (
    <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-5 h-52 overflow-hidden">
      <div className="space-y-2">
        {contacts.map((contact, i) => {
          const baseDelay = i * 0.35;
          const cycleDuration = 5.5;

          return (
            <motion.div
              key={contact.name}
              className="flex items-center gap-3 p-2.5 rounded-lg bg-foreground/[0.04] border border-foreground/[0.06] hover:border-foreground/[0.1] transition-colors"
              animate={{
                opacity: [0, 1, 1, 1, 0],
                x: [-20, 0, 0, 0, -20],
              }}
              transition={{
                delay: baseDelay,
                duration: cycleDuration,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="w-7 h-7 rounded-full bg-foreground/10 flex items-center justify-center text-[10px] font-medium">
                {contact.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium">{contact.name}</div>
                <div className="text-[9px] text-muted-foreground truncate">
                  {contact.status}
                </div>
              </div>
              {/* Activity pulse */}
              <motion.div
                className={`w-2 h-2 rounded-full ${contact.color}`}
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  delay: baseDelay + 0.2,
                  duration: 2,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────
const automations = [
  {
    title: "Captador Autónomo",
    subtitle: "Ventas 24/7 sin intervención humana",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Atendé consultas, calificá leads y agendá reuniones automáticamente —
          mientras tu equipo descansa.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Para negocios que pierden oportunidades por no responder a tiempo.
        </p>
      </>
    ),
    icon: <MessageSquare className="w-5 h-5 text-foreground/70" />,
    visual: <ChatVisual />,
    className: "lg:col-span-2",
    delay: 200,
    accent: "emerald" as const,
  },
  {
    title: "Procesamiento Documental",
    subtitle: "Cero carga de datos manual",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Facturas, recibos y documentos que se procesan, clasifican y registran
          solos — con precisión de máquina.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Para equipos que pierden horas en tareas repetitivas.
        </p>
      </>
    ),
    icon: <FileSpreadsheet className="w-5 h-5 text-foreground/70" />,
    visual: <DataVisual />,
    className: "",
    delay: 300,
    accent: "blue" as const,
  },
  {
    title: "Pipeline de Conversión",
    subtitle: "Visibilidad total de tu embudo",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Vista clara de cada oportunidad con alertas inteligentes — sabé
          exactamente dónde poner el foco para cerrar más.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Para equipos de ventas que necesitan priorizar mejor su tiempo.
        </p>
      </>
    ),
    icon: <Users className="w-5 h-5 text-foreground/70" />,
    visual: <PipelineVisual />,
    className: "",
    delay: 400,
    accent: "purple" as const,
  },
  {
    title: "Reactivación de Base de Datos",
    subtitle: "Recuperá clientes dormidos en automático",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Tu base vieja tiene oro. Reactivala con secuencias personalizadas que
          suenan a vos — sin esfuerzo manual.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Para negocios con contactos que no saben cómo reconectar.
        </p>
      </>
    ),
    icon: <Zap className="w-5 h-5 text-foreground/70" />,
    visual: <ReactivationVisual />,
    className: "lg:col-span-2",
    delay: 500,
    accent: "emerald" as const,
  },
];

export const Automations = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-30" />
        <div className="absolute inset-0 gradient-mesh" />
        <ParticleBackground />

        <div
          className="relative z-10 container mx-auto px-6 pt-32 pb-24"
          ref={heroRef}
        >
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-card/80 backdrop-blur-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse-soft" />
              <span className="text-sm text-muted-foreground font-medium">
                Infraestructura Autónoma
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6 text-balance font-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={
                heroInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                delay: 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Eliminá el trabajo repetitivo.
              <br />
              <span className="text-brand-secondary">
                Tu negocio opera solo.
              </span>
            </motion.h1>

            {/* Subheader */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Sistemas que capturan leads, procesan datos y cierran ventas — sin
              que tu equipo mueva un dedo.
            </motion.p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </section>

      {/* Automations Grid */}
      <section
        id="automatizaciones"
        className="relative py-24 md:py-32 scroll-mt-20 gradient-mesh-subtle"
        ref={containerRef}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {automations.map((automation, index) => (
              <BentoCard
                key={automation.title}
                title={automation.title}
                subtitle={automation.subtitle}
                description={automation.description}
                icon={automation.icon}
                visual={automation.visual}
                className={automation.className}
                delay={automation.delay}
                index={index}
                accent={automation.accent}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 md:py-40 scroll-mt-20 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 architectural-grid opacity-20" />

        {/* Decorative gradient orbs */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand-secondary/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-brand-primary/[0.08] rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center" ref={ctaRef}>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={
                ctaInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              ¿Listo para que tu negocio
              <br />
              <span className="text-brand-secondary">
                trabaje sin vos?
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={
                ctaInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                delay: 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Sin configuración compleja. Sin meses de desarrollo. Sistemas que
              funcionan desde el día uno.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={
                ctaInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Button
                variant="hero"
                size="lg"
                className="group relative shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                asChild
              >
                <a href={getWhatsAppUrl("Hola, me interesa automatizar mis procesos de negocio.")} target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0 rounded-[inherit] bg-brand-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  Diagnosticar Mi Operación
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-muted-foreground mt-6"
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Llamada de 15 min · Identificamos tus oportunidades de
              automatización.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};
