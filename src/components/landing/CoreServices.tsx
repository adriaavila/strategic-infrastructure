import { Code2, BarChart3, Workflow, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { ParticleBackground } from "@/components/particles/ParticleBackground";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const WebDevVisual = () => {
    return (
        <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-5 h-52 overflow-hidden">
            <div className="space-y-3">
                {/* Mock Window Header */}
                <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                {/* Mock Code Block */}
                <motion.div
                    className="rounded-lg border border-foreground/[0.08] bg-[#0A0A0B] p-3 font-mono text-[10px] space-y-2 text-foreground/70"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-brand-secondary">
                        <span className="text-purple-400">export const</span> <span className="text-blue-400">EscalabilityEngine</span> = () =&gt; {"{"}
                    </div>
                    <div className="pl-4">const data = useData();</div>
                    <div className="pl-4">return &lt;Dashboard data={"{"}data{"}"} /&gt;;</div>
                    <div>{"}"}</div>
                </motion.div>
                {/* Mock UI Element */}
                <motion.div
                    className="h-8 rounded border border-foreground/[0.08] bg-card/50 px-3 flex items-center justify-between"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <div className="w-16 h-2 rounded bg-foreground/10" />
                    <div className="w-8 h-4 rounded bg-brand-primary/20" />
                </motion.div>
            </div>
        </div>
    );
};

const BIVisual = () => {
    const shouldReduceMotion = useReducedMotion();
    const metrics = [
        { label: "Ingresos", val: "$2.4M", color: "text-brand-secondary" },
        { label: "Margen", val: "42%", color: "text-brand-primary" },
        { label: "CAC", val: "$350", color: "text-amber-500" },
    ];

    return (
        <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-5 h-52 overflow-hidden">
            <div className="space-y-5">
                <div className="flex gap-2">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={m.label}
                            className="flex-1 rounded-md bg-foreground/[0.04] border border-foreground/[0.06] p-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <div className={`text-[12px] font-mono font-bold ${m.color}`}>{m.val}</div>
                            <div className="text-[9px] text-muted-foreground uppercase tracking-wide mt-0.5">{m.label}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex items-end gap-2 h-16 pt-2">
                    {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 bg-brand-secondary/20 rounded-t"
                            initial={{ height: 0 }}
                            animate={shouldReduceMotion ? { height: `${h}%` } : { height: `${h}%` }}
                            transition={{ delay: 0.5 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const AutomationVisual = () => {
    const shouldReduceMotion = useReducedMotion();
    const nodes = [
        { label: "WhatsApp", icon: "💬", color: "bg-green-500/20 text-green-400 border-green-500/30" },
        { label: "n8n", icon: "⚡", color: "bg-brand-secondary/20 text-brand-secondary border-brand-secondary/30" },
        { label: "Excel", icon: "📊", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
    ];

    return (
        <div className="bg-foreground/[0.03] border-t border-foreground/[0.08] overflow-hidden h-52 p-5">
            <div className="flex flex-col h-full justify-center gap-5">
                {/* Workflow nodes row */}
                <div className="flex items-center justify-between gap-2 relative z-10">
                    {nodes.map((node, i) => (
                        <motion.div
                            key={node.label}
                            className="flex flex-col items-center gap-2 flex-1 relative bg-card rounded-xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-[11px] font-bold ${node.color} shadow-sm backdrop-blur-sm bg-background/50`}>
                                {node.icon}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Connection lines running BEHIND the nodes conceptually */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-[45px] flex items-center justify-center pointer-events-none px-[15%]">
                    <div className="w-full flex">
                        {[0, 1].map((i) => (
                            <div key={i} className="flex-1 h-px bg-foreground/10 relative overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-transparent via-brand-secondary/80 to-transparent"
                                    animate={{ x: shouldReduceMotion ? 0 : ["-100%", "400%"] }}
                                    transition={{ delay: i * 0.4, duration: 2.5, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="text-center mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-[10px] text-brand-secondary font-medium">
                        Sincronización Continua · 0 Errores
                    </span>
                </motion.div>
            </div>
        </div>
    );
};

const pillarServices = [
    {
        title: "Desarrollo Web",
        subtitle: "Landing pages, websites corporativos y ecommerce",
        description: (
            <>
                <p className="mb-3 text-foreground/80">
                    Diseño profesional y enfoque en conversión para negocios que necesitan verse profesionales y convertir visitas en clientes recurrentes.
                </p>
                <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
                    React · Next.js · Interfaces Optimizadas
                </p>
            </>
        ),
        icon: <Code2 className="w-5 h-5 text-foreground/70" />,
        visual: <WebDevVisual />,
        className: "lg:col-span-2",
        delay: 200,
        accent: "blue" as const,
    },
    {
        title: "Dashboards y Automatización",
        subtitle: "Control operacional y ventas",
        description: (
            <>
                <p className="mb-3 text-foreground/80">
                    Organiza tu operación, automatiza tareas repetitivas y visualiza métricas clave en tiempo real. Te ayudamos a ahorrar tiempo y reducir tareas manuales.
                </p>
                <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
                    KPIs en Tiempo Real · Seguimiento Automatizado
                </p>
            </>
        ),
        icon: <BarChart3 className="w-5 h-5 text-foreground/70" />,
        visual: <BIVisual />,
        className: "",
        delay: 300,
        accent: "emerald" as const,
    },
    {
        title: "Software e IA",
        subtitle: "Productos y soluciones inteligentes",
        description: (
            <>
                <p className="mb-3 text-foreground/80">
                    Creamos soluciones con inteligencia artificial, herramientas a medida y sistemas que automatizan decisiones y acompañan el crecimiento estratégico de tu empresa.
                </p>
                <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
                    IA · Herramientas Internas · Integraciones
                </p>
            </>
        ),
        icon: <Workflow className="w-5 h-5 text-foreground/70" />,
        visual: <AutomationVisual />,
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
            {/* Hero Section */}
            <section id="servicios" className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                {/* Architectural Grid Overlay */}
                <div className="absolute inset-0 architectural-grid opacity-30" />

                {/* Gradient Mesh Background */}
                <div className="absolute inset-0 gradient-mesh" />

                {/* Particle Animation Background */}
                <ParticleBackground />

                {/* Content */}
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
                                Arquitectura Tecnológica Escalable
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
                            Websites, automatizaciones,
                            <br />
                            <span className="text-brand-secondary">y software.</span>
                        </motion.h1>

                        {/* Subheader */}
                        <motion.p
                            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
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
                            Diseñamos páginas web, dashboards y soluciones digitales para empresas que quieren vender más y trabajar mejor.
                        </motion.p>
                    </div>
                </div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </section>

            {/* Services Grid Section */}
            <section
                className="relative pb-32 scroll-mt-20 gradient-mesh-subtle"
                ref={containerRef}
            >
                <div className="container mx-auto px-6">
                    {/* Bento Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
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
                        {pillarServices.map((service, index) => (
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
        </>
    );
};
