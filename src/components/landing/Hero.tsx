import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";
import { ParticleBackground } from "@/components/particles/ParticleBackground";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";



export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark bg-hero-gradient"
    >
      <div className="absolute inset-0 architectural-grid opacity-[0.16] light:opacity-[0.08]" />
      <div className="absolute inset-0 z-[1] overflow-hidden opacity-55 light:opacity-45">
        <ParticleBackground />
      </div>
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.10),transparent_62%)] pointer-events-none light:bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_58%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[760px] h-[520px] bg-brand-primary/[0.06] rounded-full blur-[120px] pointer-events-none light:bg-brand-primary/[0.03]" />

      <motion.div className="relative z-10 container mx-auto px-6 pt-28 pb-24" style={{ y: headlineY, opacity }}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-card/80 backdrop-blur-sm mb-8 shadow-architectural"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse-soft" />
            <span className="text-sm text-white/72 font-medium tracking-wide light:text-slate-700">
              Webs · Automatización · Dashboards
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] mb-6 font-heading text-white light:text-slate-950"
            initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.15, duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            Una{" "}
            <span className="inline-block bg-gradient-to-r from-brand-primary via-purple-400 to-brand-secondary bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
              web que venda
            </span>
            , procesos que{" "}
            <span className="relative inline-block">
              <span className="relative z-10">no dependan de ti</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-brand-secondary to-brand-primary rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>{" "}
            y{" "}
            <span className="inline-block bg-gradient-to-r from-brand-secondary to-emerald-400 bg-clip-text text-transparent">
              datos para decidir mejor
            </span>
          </motion.h1>



          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button variant="hero" size="lg" asChild className="group relative shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <a href="/brief?source=hero-call">
                Solicitar diagnóstico
                <CalendarDays className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-transparent text-white border-white/20 hover:bg-white/10 light:text-foreground light:border-foreground/15 light:hover:bg-foreground/5"
            >
              <a href="/proyectos">
                Ver casos de éxito
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-white/42 mt-5 light:text-slate-700 light:font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            Sin compromiso · Brief de 2 minutos · Respuesta en 24h
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent hidden dark:block" />
    </section>
  );
}
