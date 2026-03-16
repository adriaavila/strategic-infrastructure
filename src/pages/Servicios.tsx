import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Bot, 
  Workflow, 
  MessageSquare, 
  Globe, 
  ShoppingCart, 
  LineChart,
  Zap,
  Target,
  Sparkles
} from "lucide-react";
import { BentoCard } from "@/components/landing/BentoCard";
import { ParticleBackground } from "@/components/particles/ParticleBackground";

const FloatingOrb = ({ className, delay = 0 }: { className?: string, delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-[120px] opacity-20 pointer-events-none ${className}`}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ 
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.25, 0.1],
      x: [0, 20, 0],
      y: [0, -20, 0]
    }}
    transition={{ 
      duration: 10, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
  />
);

const Servicios = () => {
  useSEO({
    title: "Servicios | Automatización con IA y Marketing Digital",
    description: "Soluciones de automatización con IA y marketing digital diseñadas para optimizar operaciones y escalar el crecimiento de tu negocio.",
    path: "/servicios",
  });

  const automationServices = [
    {
      title: "Atención y ventas",
      subtitle: "IA conversacional",
      description: "Asistentes inteligentes que responden en segundos, califican leads y cierran agendas de forma autónoma.",
      icon: <Bot className="w-5 h-5 text-foreground/70" />,
      visual: (
        <div className="h-48 border-t border-foreground/[0.05] bg-gradient-to-br from-brand-secondary/10 to-transparent p-6 overflow-hidden">
          <div className="flex flex-col gap-3">
            <div className="flex justify-end">
              <div className="bg-brand-secondary/20 rounded-2xl rounded-tr-none px-4 py-2 text-[10px] max-w-[80%] border border-brand-secondary/20">
                ¿Cómo puedo optimizar mis ventas?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-foreground/5 rounded-2xl rounded-tl-none px-4 py-2 text-[10px] max-w-[80%] border border-foreground/10">
                Podemos automatizar tu WhatsApp y CRM...
              </div>
            </div>
            <div className="mt-2 flex gap-1 justify-center">
              <div className="h-1 w-8 rounded-full bg-brand-secondary animate-pulse" />
              <div className="h-1 w-4 rounded-full bg-brand-secondary/40" />
            </div>
          </div>
        </div>
      ),
      className: "md:col-span-2",
      accent: "emerald" as const,
    },
    {
      title: "Procesos internos",
      subtitle: "Flujos automáticos",
      description: "Conectamos tus sistemas para que el dato fluya sin errores humanos.",
      icon: <Workflow className="w-5 h-5 text-foreground/70" />,
      visual: (
        <div className="h-48 border-t border-foreground/[0.05] bg-gradient-to-br from-brand-secondary/10 to-transparent p-6 flex items-center justify-center">
          <div className="relative w-full max-w-[120px]">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-card border border-white/10 flex items-center justify-center shadow-lg"><Zap className="w-4 h-4 text-brand-secondary" /></div>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-brand-secondary/50 to-transparent rounded-full" />
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="h-10 rounded-xl bg-foreground/5 border border-foreground/10" />
              <div className="h-10 rounded-xl bg-foreground/5 border border-foreground/10" />
            </div>
          </div>
        </div>
      ),
      accent: "emerald" as const,
    },
    {
      title: "Canales conectados",
      subtitle: "Ecosistema Digital",
      description: "WhatsApp, CRMs y Formularios comunicándose en tiempo real.",
      icon: <Zap className="w-5 h-5 text-foreground/70" />,
      visual: (
        <div className="h-48 border-t border-foreground/[0.05] bg-gradient-to-br from-brand-secondary/10 to-transparent p-6 overflow-hidden">
          <div className="grid grid-cols-2 gap-3 opacity-40">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-8 rounded-lg border border-foreground/10 bg-foreground/[0.02]" />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-secondary/10 border border-brand-secondary/30 backdrop-blur-sm flex items-center justify-center animate-bounce-subtle">
              <MessageSquare className="w-8 h-8 text-brand-secondary" />
            </div>
          </div>
        </div>
      ),
      accent: "emerald" as const,
    }
  ];

  const marketingServices = [
    {
      title: "Webs corporativas",
      subtitle: "Diseño & Autoridad",
      description: "Arquitecturas pensadas para posicionar tu marca como lider en su sector.",
      icon: <Globe className="w-5 h-5 text-foreground/70" />,
      visual: (
        <div className="h-48 border-t border-foreground/[0.05] bg-gradient-to-br from-brand-primary/10 to-transparent p-6">
          <div className="h-full rounded-xl border border-foreground/10 bg-card/60 relative overflow-hidden shadow-2xl">
            <div className="h-3 border-b border-foreground/5 bg-foreground/5 flex items-center px-2 gap-1">
              <div className="w-1 h-1 rounded-full bg-red-400/50" />
              <div className="w-1 h-1 rounded-full bg-amber-400/50" />
              <div className="w-1 h-1 rounded-full bg-emerald-400/50" />
            </div>
            <div className="p-4 space-y-3">
              <div className="h-2 w-2/3 bg-brand-primary/20 rounded-full" />
              <div className="h-12 w-full bg-foreground/5 rounded-lg" />
              <div className="flex gap-2">
                <div className="h-6 w-12 bg-brand-primary/10 rounded-md" />
                <div className="h-6 w-12 bg-foreground/5 rounded-md" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brand-primary/10 blur-2xl" />
          </div>
        </div>
      ),
      accent: "blue" as const,
    },
    {
      title: "Ecommerce Pro",
      subtitle: "Ventas Sin Pausa",
      description: "Tiendas escalables con experiencias de compra fluidas y rápidas.",
      icon: <ShoppingCart className="w-5 h-5 text-foreground/70" />,
      visual: (
        <div className="h-48 border-t border-foreground/[0.05] bg-gradient-to-br from-brand-primary/10 to-transparent p-6">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="rounded-xl border border-foreground/10 bg-card/40 p-3 flex flex-col justify-between">
              <div className="w-full aspect-square bg-foreground/5 rounded-lg" />
              <div className="h-2 w-full bg-brand-primary/20 rounded-full" />
            </div>
            <div className="rounded-xl border border-foreground/10 bg-card/40 p-3 flex flex-col justify-between">
              <div className="w-full aspect-square bg-foreground/5 rounded-lg" />
              <div className="h-2 w-full bg-brand-primary/20 rounded-full" />
            </div>
          </div>
        </div>
      ),
      accent: "blue" as const,
    },
    {
      title: "Embudo y captación",
      subtitle: "Conversión de Alto Nivel",
      description: "Landing pages optimizadas para maximizar el retorno de tu inversión publicitaria.",
      icon: <Target className="w-5 h-5 text-foreground/70" />,
      visual: (
        <div className="h-48 border-t border-foreground/[0.05] bg-gradient-to-br from-brand-primary/10 to-transparent p-6 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[160px] h-32 flex flex-col items-center">
             <div className="w-full h-8 bg-brand-primary/5 border border-brand-primary/20 rounded-t-2xl flex items-center justify-center text-[10px] text-brand-primary/60">TRÁFICO</div>
             <div className="w-[85%] h-10 bg-brand-primary/10 border-x border-brand-primary/20 flex items-center justify-center text-[10px] text-brand-primary/80">INTERÉS</div>
             <div className="w-[70%] h-12 bg-brand-primary/20 border-x border-brand-primary/20 flex items-center justify-center text-[10px] font-bold text-brand-primary">VENTA</div>
             <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                {[1,2,3].map(i => <motion.div key={i} className="w-1 h-1 rounded-full bg-brand-secondary" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }} />)}
             </div>
          </div>
        </div>
      ),
      className: "md:col-span-2",
      accent: "blue" as const,
    }
  ];

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <ParticleBackground />
      
      {/* Floating Orbs */}
      <FloatingOrb className="bg-brand-primary w-[500px] h-[500px] -top-48 -left-48" delay={0} />
      <FloatingOrb className="bg-brand-secondary w-[400px] h-[400px] top-1/2 -right-48" delay={2} />
      <FloatingOrb className="bg-brand-primary w-[300px] h-[300px] bottom-12 left-1/4" delay={5} />

      <Navbar />

      <main className="relative z-10 pt-40 pb-32">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-32">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-secondary mb-8 backdrop-blur-md"
            >
              <Sparkles className="w-3 h-3" />
              <span>Sistemas que trabajan por ti</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] mb-8 font-heading text-balance"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Potenciamos tu negocio <br /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-[length:200%_auto] animate-gradient-slow shadow-sm">
                con tecnología humana
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-brand-slate max-w-2xl mx-auto mb-12 text-balance leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              No solo hacemos software. Diseñamos el puente entre donde estás hoy y la eficiencia absoluta que permite el crecimiento real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button asChild size="lg" variant="hero" className="rounded-2xl px-10 h-14 text-base">
                <a href="#proyectos">Explorar soluciones</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Automaciones Section */}
        <section className="container mx-auto px-6 mb-40 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-brand-secondary text-sm font-bold uppercase tracking-widest mb-4">Módulo A</div>
                <h2 className="text-4xl md:text-5xl font-semibold font-heading tracking-tight">Automatización <br /> & Sistemas de IA</h2>
              </motion.div>
              <motion.p 
                className="text-brand-slate max-w-md text-lg leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Libera a tu equipo de la carga operativa. Creamos flujos digitales que trabajan 24/7 sin distracciones.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {automationServices.map((service, index) => (
                <BentoCard key={service.title} {...service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Marketing/Presence Section */}
        <section className="container mx-auto px-6 mb-40 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse md:items-end justify-between gap-6 mb-16">
              <motion.div
                className="text-right"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-brand-primary text-sm font-bold uppercase tracking-widest mb-4">Módulo B</div>
                <h2 className="text-4xl md:text-5xl font-semibold font-heading tracking-tight">Presencia Digital <br /> & Conversión</h2>
              </motion.div>
              <motion.p 
                className="text-brand-slate max-w-md text-lg leading-relaxed text-left md:text-right"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Tu sitio web es tu mejor vendedor. Lo diseñamos para que cada pixel esté alineado con tus objetivos de negocio.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {marketingServices.map((service, index) => (
                <BentoCard key={service.title} {...service} index={index + 3} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="container mx-auto px-6 pt-20">
          <motion.div 
            className="max-w-5xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-2xl p-12 md:p-20 text-center relative overflow-hidden shadow-architectural"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 gradient-mesh-subtle opacity-10 pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-secondary/20 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-primary/20 blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 font-heading tracking-tight text-balance">
                Construye el futuro de <br /> tu empresa hoy
              </h2>
              <p className="text-xl text-brand-slate mb-12 max-w-2xl mx-auto text-balance font-light">
                No esperes a que la competencia se automatice primero. Toma la delantera con un sistema diseñado a medida.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button asChild size="lg" variant="hero" className="rounded-2xl px-12 h-16 text-lg group shadow-xl shadow-brand-secondary/10">
                  <a href="/brief?source=servicios-cta">
                    Comenzar ahora
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Link to="/contacto">
                   <Button variant="outline" size="lg" className="rounded-2xl px-10 h-16 text-lg border-white/10 hover:bg-white/5 bg-transparent backdrop-blur-md">
                     Hablar con un experto
                   </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicios;
