import { MessageSquare, FileSpreadsheet, Users, Zap, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ParticleBackground } from "@/components/particles/ParticleBackground";
import { Button } from "@/components/ui/button";
import { BentoCard } from "./BentoCard";


// Chat Animation Visual with fluid looping animation
const ChatVisual = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <div className="bg-foreground/[0.03] border-t border-foreground/[0.08] p-5 h-52 overflow-hidden">
      <div className="space-y-3">
        <motion.div 
          className="flex gap-3"
          initial={{ opacity: 0, x: -30 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            x: [-30, 0, 0, -30]
          }}
          transition={{ 
            duration: 6,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <div className="w-8 h-8 rounded-full bg-foreground/10 flex-shrink-0 flex items-center justify-center">
            <span className="text-xs font-medium text-foreground/60">U</span>
          </div>
          <motion.div 
            className="bg-foreground/[0.08] rounded-2xl rounded-tl-md px-4 py-2.5 max-w-[75%] shadow-sm"
            animate={{ 
              scale: [0.8, 1, 1, 0.8],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              delay: 0.1,
              duration: 6,
              repeat: shouldReduceMotion ? 0 : Infinity,
              repeatType: "loop",
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <p className="text-sm text-foreground/80 leading-relaxed">Hola, me interesa su servicio de automatización</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex gap-3 justify-end"
          animate={{ 
            opacity: [0, 0, 1, 1, 0],
            x: [30, 30, 0, 0, 30]
          }}
          transition={{ 
            delay: 1.5,
            duration: 6,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <motion.div 
            className="bg-neutral-900 rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[75%] shadow-sm"
            animate={{ 
              scale: [0.8, 0.8, 1, 1, 0.8],
              opacity: [0, 0, 1, 1, 0]
            }}
            transition={{ 
              delay: 1.5,
              duration: 6,
              repeat: shouldReduceMotion ? 0 : Infinity,
              repeatType: "loop",
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <p className="text-sm leading-relaxed text-white">¡Hola! Soy el asistente de Allok. ¿En qué área necesitas automatizar?</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex gap-3 justify-end"
          animate={{ 
            opacity: [0, 0, 0, 1, 1, 0],
            scale: [0.8, 0.8, 0.8, 1, 1.05, 0.8]
          }}
          transition={{ 
            delay: 3,
            duration: 6,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <motion.div 
            className="bg-brand-primary text-white rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-sm cursor-pointer"
            animate={{
              backgroundColor: [
                "rgb(5, 150, 105)",
                "rgb(5, 150, 105)",
                "rgb(5, 150, 105)",
                "rgb(5, 150, 105)",
                "rgb(4, 120, 87)",
                "rgb(5, 150, 105)"
              ],
              scale: [1, 1, 1, 1, 1.05, 1]
            }}
            transition={{ 
              delay: 3,
              duration: 6,
              repeat: shouldReduceMotion ? 0 : Infinity,
              repeatType: "loop",
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <Zap className="w-4 h-4" />
            <p className="text-sm font-medium">Agendar llamada →</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Data Entry Visual with fluid looping animation
const DataVisual = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
      <div className="space-y-2">
        <motion.div 
          className="flex items-center gap-3 p-2 rounded-lg bg-foreground/5"
          animate={{ 
            opacity: [0, 1, 1, 1, 0],
            x: [-20, 0, 0, 0, -20]
          }}
          transition={{ 
            duration: 8,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <motion.div 
            className="w-8 h-10 rounded bg-foreground/10 flex items-center justify-center"
            animate={{ 
              scale: [0, 1, 1, 1, 0]
            }}
            transition={{ 
              delay: 0.1,
              duration: 8,
              repeat: shouldReduceMotion ? 0 : Infinity,
              repeatType: "loop",
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <FileSpreadsheet className="w-4 h-4 text-muted-foreground" />
          </motion.div>
          <div className="flex-1">
            <motion.div 
              className="text-xs font-medium"
              animate={{ 
                opacity: [0, 1, 1, 1, 0]
              }}
              transition={{ 
                delay: 0.2,
                duration: 8,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              factura_2024.pdf
            </motion.div>
            <motion.div 
              className="text-[10px] text-muted-foreground"
              animate={{ 
                opacity: [0, 1, 1, 0, 0]
              }}
              transition={{ 
                delay: 0.3,
                duration: 8,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              Procesando...
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="flex justify-center py-1"
          animate={{ 
            scaleY: [0, 1, 1, 1, 0]
          }}
          transition={{ 
            delay: 1.5,
            duration: 8,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <div className="w-0.5 h-4 bg-foreground/10" />
        </motion.div>

        <motion.div 
          className="rounded-lg border border-foreground/[0.08] overflow-hidden"
          animate={{ 
            opacity: [0, 0, 1, 1, 0],
            y: [20, 20, 0, 0, 20]
          }}
          transition={{ 
            delay: 2,
            duration: 8,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <div className="grid grid-cols-3 text-[10px] bg-foreground/5 px-2 py-1 font-medium">
            <span>Concepto</span>
            <span>Monto</span>
            <span>Fecha</span>
          </div>
          <motion.div 
            className="grid grid-cols-3 text-[10px] px-2 py-1.5 border-t border-foreground/[0.05]"
            animate={{ 
              opacity: [0, 0, 0, 1, 0]
            }}
            transition={{ 
              delay: 2.2,
              duration: 8,
              repeat: shouldReduceMotion ? 0 : Infinity,
              repeatType: "loop",
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <span className="text-muted-foreground">Software</span>
            <span>$2,400</span>
            <span className="text-muted-foreground">15/01</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Sales Pipeline Visual with fluid looping animation
const PipelineVisual = () => {
  const shouldReduceMotion = useReducedMotion();
  const stages = ['Frío', 'Tibio', 'Caliente', 'Cerrado'];
  
  return (
    <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
      <div className="flex items-center gap-2 h-full">
        {stages.map((stage, i) => {
          // Calculate animation timing for lead progression
          const baseDelay = i * 1.5; // Each stage activates 1.5s after previous
          const activeDuration = 2; // How long each stage stays active
          const totalCycle = 9; // Total cycle duration
          
          return (
            <motion.div 
              key={stage} 
              className="flex-1 flex flex-col items-center gap-2"
              animate={{ 
                opacity: [0, 0, 1, 1, 1, 0],
                y: [30, 30, 0, 0, 0, 30]
              }}
              transition={{ 
                delay: baseDelay,
                duration: totalCycle,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <motion.div 
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  i === 3 
                    ? 'bg-brand-secondary/20 text-brand-secondary ring-2 ring-brand-secondary/30' 
                    : i >= 2 
                      ? 'bg-amber-500/20 text-amber-600' 
                      : 'bg-foreground/5 text-muted-foreground'
                }`}
                animate={{ 
                  scale: [0, 0, 1, 1.2, 1, 0],
                  opacity: [0, 0, 1, 1, 1, 0]
                }}
                transition={{ 
                  delay: baseDelay + 0.1,
                  duration: totalCycle,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  repeatType: "loop",
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <Users className="w-3 h-3" />
              </motion.div>
              <span className="text-[9px] text-muted-foreground text-center">{stage}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Reactivation Visual with fluid looping animation
const ReactivationVisual = () => {
  const shouldReduceMotion = useReducedMotion();
  const contacts = [
    { name: 'María G.', status: 'Contactado', active: true },
    { name: 'Carlos R.', status: 'Respondió', active: true },
    { name: 'Ana P.', status: 'Llamada agendada', active: true },
  ];

  return (
    <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
      <div className="space-y-2">
        {contacts.map((contact, i) => {
          const baseDelay = i * 0.4;
          const cycleDuration = 7;
          
          return (
            <motion.div
              key={contact.name}
              className="flex items-center gap-3 p-2 rounded-lg bg-foreground/5"
              animate={{ 
                opacity: [0, 1, 1, 1, 0],
                x: [-30, 0, 0, 0, -30]
              }}
              transition={{ 
                delay: baseDelay,
                duration: cycleDuration,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <motion.div 
                className="w-7 h-7 rounded-full bg-foreground/10 flex items-center justify-center text-[10px] font-medium"
                animate={{ 
                  scale: [0, 1, 1, 1, 0]
                }}
                transition={{ 
                  delay: baseDelay + 0.1,
                  duration: cycleDuration,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  repeatType: "loop",
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {contact.name.charAt(0)}
              </motion.div>
              <div className="flex-1">
                <div className="text-xs font-medium">{contact.name}</div>
                <motion.div 
                  className="text-[10px] text-muted-foreground"
                  animate={{ 
                    opacity: [0, 1, 1, 1, 0]
                  }}
                  transition={{ 
                    delay: baseDelay + 0.2,
                    duration: cycleDuration,
                    repeat: shouldReduceMotion ? 0 : Infinity,
                    repeatType: "loop",
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {contact.status}
                </motion.div>
              </div>
              <motion.div 
                className={`w-2 h-2 rounded-full ${contact.active ? 'bg-brand-secondary' : 'bg-foreground/20'}`}
                animate={{ 
                  scale: [0, 1, 1.5, 1, 0],
                  opacity: [0, 1, 1, 1, 0]
                }}
                transition={{ 
                  delay: baseDelay + 0.3,
                  duration: cycleDuration,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  repeatType: "loop",
                  ease: [0.16, 1, 0.3, 1]
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const automations = [
  {
    title: "Caza-Prospectos 24/7",
    subtitle: "Tu vendedor que nunca duerme",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Que nadie espere. Atendé consultas y agendá reuniones automáticamente mientras vos dormís.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Ideal para negocios que pierden oportunidades por no responder rápido.
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
    title: "Operador Invisible",
    subtitle: "Dejá de cargar datos a mano",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Facturas, recibos y documentos que se procesan solos. Vos te dedicás a lo que importa.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Ideal para equipos que pierden horas en tareas repetitivas que deberían estar resueltas.
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
    title: "Pipeline Inteligente",
    subtitle: "Sabé dónde poner el foco",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Una vista clara de tu embudo y alertas cuando una oportunidad pide atención. Menos caos, más cierres.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Ideal para equipos de ventas que necesitan priorizar mejor su tiempo.
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
    title: "Bóveda de Ventas",
    subtitle: "Recuperá clientes que ya te conocían",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Tu base vieja tiene oro escondido. Reactivala con mensajes que suenan a vos, sin quemarte las pestañas.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Ideal para negocios con muchos contactos que no saben por dónde volver a conectarlos.
        </p>
      </>
    ),
    icon: <Zap className="w-5 h-5 text-foreground/70" />,
    visual: <ReactivationVisual />,
    className: "lg:col-span-2",
    delay: 500,
    accent: "emerald" as const,
  }
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
        {/* Architectural Grid Overlay */}
        <div className="absolute inset-0 architectural-grid opacity-30" />
        
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 gradient-mesh" />
        
        {/* Particle Animation Background */}
        <ParticleBackground />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-24" ref={heroRef}>
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-card/80 backdrop-blur-sm mb-8 opacity-0"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse-soft" />
              <span className="text-sm text-muted-foreground font-medium">Automatización que trabaja 24/7</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6 text-balance font-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Eliminá el trabajo manual.
              <br />
              <span className="text-brand-secondary">Automatizá lo que realmente importa.</span>
            </motion.h1>

            {/* Subheader */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Que tu negocio siga trabajando mientras vos descansás. Sin vivir pendiente del celular.
            </motion.p>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </section>

      {/* Automations Grid Section */}
      <section id="automatizaciones" className="relative py-24 md:py-32 scroll-mt-20 gradient-mesh-subtle" ref={containerRef}>
        <div className="container mx-auto px-6">
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
        {/* Background with gradient mesh */}
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 architectural-grid opacity-20" />
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center" ref={ctaRef}>
            {/* Headline */}
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Listo para automatizar
              <br />
              <span className="text-brand-secondary">tu negocio?</span>
            </motion.h2>

            {/* Copy */}
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Sin configuración compleja. Sin meses de desarrollo. Solo sistemas que funcionan desde el día uno.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button 
                variant="hero" 
                size="lg" 
                className="group shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Agendar Llamada de Descubrimiento
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Trust indicator */}
            <motion.p 
              className="text-sm text-muted-foreground mt-6"
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Sin compromiso. Sin presión. Solo una conversación para entender tu proyecto.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};
