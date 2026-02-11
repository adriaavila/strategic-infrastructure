import { Palette, Megaphone, PenTool, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { ParticleBackground } from "@/components/particles/ParticleBackground";
import { Button } from "@/components/ui/button";

// ────────────────────────────────────────────────
// Branding Visual — Style-guide specimen
// ────────────────────────────────────────────────
const BrandingVisual = () => {
  const palette = [
    { color: "bg-[#0A0A0B]", label: "Dark" },
    { color: "bg-brand-secondary", label: "Mint" },
    { color: "bg-[#E2E8F0]", label: "Light" },
  ];

  return (
    <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-5 h-52 overflow-hidden">
      <div className="space-y-4">
        {/* Color tokens row */}
        <div className="flex items-center gap-3">
          {palette.map((p, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-1.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
            >
              <div
                className={`w-10 h-10 rounded-lg ${p.color} border border-foreground/10 shadow-sm`}
              />
              <span className="text-[9px] text-muted-foreground font-mono">
                {p.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Typography specimen */}
        <motion.div
          className="rounded-lg border border-foreground/[0.08] bg-card/50 p-3 space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold tracking-tight">Aa</span>
            <span className="text-sm text-muted-foreground font-medium">
              Inter · 700
            </span>
          </div>
          <div className="flex gap-4 text-[10px] text-muted-foreground font-mono tracking-wider">
            <span>ABCDEFGHIJ</span>
            <span>abcdefghij</span>
            <span>0123456789</span>
          </div>
        </motion.div>

        {/* Logo placeholder */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.4 }}
        >
          <div className="w-6 h-6 rounded-md border border-dashed border-foreground/20 flex items-center justify-center">
            <span className="text-[10px] font-bold text-foreground/30">✦</span>
          </div>
          <div className="h-1.5 w-16 rounded bg-foreground/[0.06]" />
        </motion.div>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────
// Marketing Visual — Mini analytics dashboard
// ────────────────────────────────────────────────
const MarketingVisual = () => {
  const channels = [
    { label: "Orgánico", value: 64, color: "bg-brand-secondary" },
    { label: "Pago", value: 45, color: "bg-brand-primary" },
    { label: "Directo", value: 28, color: "bg-amber-500" },
  ];

  return (
    <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-5 h-52 overflow-hidden">
      <div className="space-y-3">
        {/* Mini chart header */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
            Canales
          </span>
          <span className="text-[10px] text-brand-secondary font-mono">
            Últimos 30d
          </span>
        </motion.div>

        {/* Bar chart */}
        {channels.map((ch, i) => (
          <motion.div
            key={ch.label}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.12, duration: 0.4 }}
          >
            <span className="text-[10px] text-muted-foreground w-14 shrink-0">
              {ch.label}
            </span>
            <div className="flex-1 h-5 rounded bg-foreground/[0.05] overflow-hidden">
              <motion.div
                className={`h-full rounded ${ch.color}/30`}
                initial={{ width: 0 }}
                animate={{ width: `${ch.value}%` }}
                transition={{
                  delay: 1.1 + i * 0.12,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />
            </div>
            <span className="text-[10px] font-mono text-foreground/60 w-6 text-right">
              {ch.value}%
            </span>
          </motion.div>
        ))}

        {/* KPI row */}
        <motion.div
          className="flex gap-2 pt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.4 }}
        >
          {[
            { label: "CTR", val: "3.2%" },
            { label: "CPA", val: "$12" },
            { label: "ROAS", val: "4.1x" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="flex-1 rounded-md bg-foreground/[0.04] border border-foreground/[0.06] p-1.5 text-center"
            >
              <div className="text-[10px] text-brand-secondary font-mono font-bold">
                {kpi.val}
              </div>
              <div className="text-[8px] text-muted-foreground uppercase">
                {kpi.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────
// Content Visual — Social feed with engagement
// ────────────────────────────────────────────────
const ContentVisual = () => (
  <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-5 h-52 overflow-hidden">
    <div className="space-y-2.5">
      {/* Post 1 — image post */}
      <motion.div
        className="rounded-lg border border-foreground/[0.08] bg-card/50 p-2.5"
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 to-orange-500" />
          <div className="h-1.5 w-12 rounded bg-foreground/[0.08]" />
          <div className="ml-auto text-[8px] text-brand-secondary font-mono">
            IG
          </div>
        </div>
        <div className="h-14 rounded-md bg-gradient-to-br from-purple-500/15 to-pink-500/15 mb-2" />
        <div className="flex gap-3 text-[9px] text-muted-foreground">
          <span>♥ 342</span>
          <span>💬 28</span>
          <span>↗ 89</span>
        </div>
      </motion.div>

      {/* Post 2 — text post */}
      <motion.div
        className="rounded-lg border border-foreground/[0.08] bg-card/50 p-2.5"
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.5, type: "spring" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-blue-500" />
          <div className="h-1.5 w-16 rounded bg-foreground/[0.08]" />
          <div className="ml-auto text-[8px] text-brand-primary font-mono">
            LI
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded bg-foreground/[0.06]" />
          <div className="h-1.5 w-3/4 rounded bg-foreground/[0.04]" />
        </div>
      </motion.div>
    </div>
  </div>
);

const marketingServices = [
  {
    title: "Motor de Contenido Autónomo",
    subtitle: "Presencia constante sin esfuerzo manual",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Redes activas, alineadas con tu marca, publicando con la frecuencia y
          el tono que convierten — sin que vos tengas que crear nada.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Para quien sabe que debe estar en redes pero no tiene tiempo de ser
          community manager.
        </p>
      </>
    ),
    icon: <PenTool className="w-5 h-5 text-foreground/70" />,
    visual: <ContentVisual />,
    className: "lg:col-span-2",
    delay: 200,
    accent: "emerald" as const,
  },
  {
    title: "Identidad que Cierra Ventas",
    subtitle: "Primera impresión que transmite autoridad",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Que tu proyecto se vea tan sólido como tu propuesta. Identidad visual
          coherente que genera confianza desde el primer contacto.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Para negocios que quieren verse profesionales y memorables.
        </p>
      </>
    ),
    icon: <Palette className="w-5 h-5 text-foreground/70" />,
    visual: <BrandingVisual />,
    className: "",
    delay: 300,
    accent: "purple" as const,
  },
  {
    title: "Máquina de Captación Digital",
    subtitle: "Clientes reales, no solo métricas de vanidad",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Un sistema claro para atraer, nutrir y convertir leads calificados —
          con datos que te dicen exactamente qué funciona.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Para quienes quieren crecer en digital con un plan probado.
        </p>
      </>
    ),
    icon: <Megaphone className="w-5 h-5 text-foreground/70" />,
    visual: <MarketingVisual />,
    className: "",
    delay: 400,
    accent: "blue" as const,
  },
];

export const MarketingServices = () => {
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
                Sistemas de Adquisición de Clientes
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
              Marketing que trae clientes,
              <br />
              <span className="text-brand-secondary">no solo likes.</span>
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
              Marca que impacta. Crecimiento con rumbo. Contenido que suena a
              vos — y que convierte.
            </motion.p>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </section>

      {/* Services Grid Section */}
      <section
        id="marketing"
        className="relative py-24 md:py-32 scroll-mt-20 gradient-mesh-subtle"
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
            {marketingServices.map((service, index) => (
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

      {/* CTA Section */}
      <section className="relative py-32 md:py-40 scroll-mt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 architectural-grid opacity-20" />

        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-secondary/[0.08] rounded-full blur-[80px] pointer-events-none" />

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center" ref={ctaRef}>
            {/* Headline */}
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
              ¿Listo para que tu marca
              <br />
              <span className="text-brand-secondary">
                trabaje por vos?
              </span>
            </motion.h2>

            {/* Copy */}
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
              Sin agencias infladas. Sin contratos largos. Solo marketing que
              genera clientes reales para tu negocio.
            </motion.p>

            {/* CTA */}
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
              >
                <span className="absolute inset-0 rounded-[inherit] bg-brand-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
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
              Sin compromiso · Sin presión · Solo una conversación para entender
              tu proyecto.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};
