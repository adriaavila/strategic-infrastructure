import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ParticleBackground } from "@/components/particles/ParticleBackground";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const headlineLines = [
  { text: "Tu Equipo Gasta Horas.", highlight: false },
  { text: "La IA Lo Resuelve", highlight: false },
  { text: "en Minutos.", highlight: true },
];

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark bg-hero-gradient"
    >
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 architectural-grid opacity-30" />

      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Particle Animation Background */}
      <ParticleBackground />

      {/* Radial glow behind CTA area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[600px] bg-brand-primary/[0.07] rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 pt-32 pb-24"
        style={{ y: headlineY, opacity }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline chip */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-card/80 backdrop-blur-sm mb-8 shadow-architectural"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse-soft" />
            <span className="text-sm text-white/70 font-medium tracking-wide">
              Automatización Inteligente para Empresas Serias
            </span>
          </motion.div>

          {/* Headline — staggered line-by-line */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 font-heading text-white">
            {headlineLines.map((line, i) => (
              <motion.span
                key={i}
                className={`block ${line.highlight ? "text-brand-secondary" : "text-white"}`}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : {}
                }
                transition={{
                  delay: 0.15 + i * 0.12,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line.text}
              </motion.span>
            ))}
          </h1>

          {/* Subhead */}
          <motion.p
            className="text-xl md:text-2xl text-brand-slate max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Implementamos agentes y automatizaciones que eliminan tareas repetitivas, reducen costos y liberan a tu equipo
            <span className="text-white font-medium"> — desde la primera semana.</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              variant="hero"
              size="lg"
              asChild
              className="group relative shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <a href="/#contacto">
                {/* Glow effect behind button */}
                <span className="absolute inset-0 rounded-[inherit] bg-brand-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                Diagnosticar Mi Operación — Gratis
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </a>
            </Button>
          </motion.div>

          {/* Trust micro-copy */}
          <motion.p
            className="text-sm text-white/30 mt-5"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Llamada de 15 min · Sin compromiso · Sin presión
          </motion.p>
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
    </section>
  );
};
