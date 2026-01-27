import { Palette, Megaphone, PenTool, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { ParticleBackground } from "@/components/particles/ParticleBackground";
import { Button } from "@/components/ui/button";

// Branding Visual - color palette, typography, logo
const BrandingVisual = () => (
  <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
    <div className="flex items-center justify-center h-full gap-4">
      <motion.div 
        className="space-y-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {[
          { color: "bg-neutral-900", delay: 0.9 },
          { color: "bg-brand-secondary", delay: 1 },
          { color: "bg-slate-200", delay: 1.1 }
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`w-8 h-8 rounded-lg ${item.color}`}
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: item.delay, duration: 0.4, type: "spring" }}
          />
        ))}
      </motion.div>
      
      <motion.div 
        className="w-20 h-20 rounded-2xl border-2 border-dashed border-foreground/20 flex items-center justify-center"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
      >
        <motion.span 
          className="text-2xl font-bold text-foreground/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          A
        </motion.span>
      </motion.div>
      
      <motion.div 
        className="space-y-1"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <motion.div 
          className="text-xs font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Aa
        </motion.div>
        <motion.div 
          className="text-[10px] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          Inter
        </motion.div>
        <motion.div 
          className="text-[8px] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          ABCDEFGH
        </motion.div>
      </motion.div>
    </div>
  </div>
);

// Marketing Visual - metrics without fake percentages
const MarketingVisual = () => {
  const metrics = [
    { label: 'Alcance', color: 'bg-brand-secondary/20' },
    { label: 'Conversiones', color: 'bg-blue-500/20' },
    { label: 'Engagement', color: 'bg-purple-500/20' },
  ];

  return (
    <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
      <div className="space-y-3">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            className="flex flex-col gap-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.4, type: "spring" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{metric.label}</span>
            </div>
            <motion.div 
              className={`h-2 rounded-full ${metric.color}`}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1 + i * 0.15, duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Content Visual - social media posts
const ContentVisual = () => (
  <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
    <div className="space-y-2">
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          className="rounded-lg border border-foreground/10 p-3"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8 + i * 0.2, duration: 0.5, type: "spring" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <motion.div 
              className={`w-6 h-6 rounded-full ${i === 0 ? 'bg-gradient-to-br from-pink-500 to-orange-500' : 'bg-blue-500'}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.2, type: "spring" }}
            />
            <motion.div 
              className={`h-2 ${i === 0 ? 'w-16' : 'w-20'} rounded bg-foreground/10`}
              initial={{ width: 0 }}
              animate={{ width: i === 0 ? 64 : 80 }}
              transition={{ delay: 1.1 + i * 0.2, duration: 0.4 }}
            />
          </div>
          {i === 0 && (
            <motion.div 
              className="h-16 rounded bg-gradient-to-br from-purple-500/20 to-pink-500/20"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 64, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
          )}
          {i === 1 && (
            <motion.div 
              className="h-2 w-full rounded bg-foreground/5"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.3, duration: 0.5 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  </div>
);

const marketingServices = [
  {
    title: "Creación de Contenido",
    subtitle: "Tu voz en redes, sin que vos tengas que estar ahí",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Redes activas y alineadas con tu marca, sin que tengas que crear todo vos.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Ideal para quien sabe que debe estar en redes pero no tiene tiempo (ni ganas) de convertirse en community manager.
        </p>
      </>
    ),
    icon: <PenTool className="w-5 h-5 text-foreground/70" />,
    visual: <ContentVisual />,
    className: "lg:col-span-2",
    delay: 200,
    accent: "emerald" as const, /* maps to brand-secondary in BentoCard */
  },
  {
    title: "Branding & Identidad",
    subtitle: "Una marca que la gente recuerda",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Que tu proyecto se vea tan sólido como tu propuesta. Una identidad coherente que comunique quién sos y por qué importás.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Ideal para negocios que quieren verse profesionales y memorables desde el primer contacto.
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
    title: "Marketing Digital",
    subtitle: "Clientes reales, no solo likes",
    description: (
      <>
        <p className="mb-3 text-foreground/80">
          Un plan claro para que tu negocio crezca online y atraiga a la gente que realmente necesita lo que ofrecés.
        </p>
        <p className="font-semibold text-foreground pt-2 border-t border-foreground/10 text-sm">
          Ideal para quienes quieren crecer en digital pero no saben por dónde empezar.
        </p>
      </>
    ),
    icon: <Megaphone className="w-5 h-5 text-foreground/70" />,
    visual: <MarketingVisual />,
    className: "",
    delay: 400,
    accent: "blue" as const,
  }
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
              <span className="text-sm text-muted-foreground font-medium">Marketing que convierte</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6 text-balance font-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Marketing que trae clientes,
              <br />
              <span className="text-brand-secondary">no solo likes.</span>
            </motion.h1>

            {/* Subheader */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Marca que impacta. Crecimiento con rumbo. Contenido que suena a vos.
            </motion.p>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </section>

      {/* Services Grid Section */}
      <section id="marketing" className="relative py-24 md:py-32 scroll-mt-20 gradient-mesh-subtle" ref={containerRef}>
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
              Listo para destacar
              <br />
              <span className="text-brand-secondary">en el mundo digital?</span>
            </motion.h2>

            {/* Copy */}
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Sin agencias grandes. Sin contratos largos. Solo marketing que funciona para tu negocio.
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
