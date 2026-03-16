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
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-brand-dark bg-hero-gradient md:min-h-screen"
    >
      <div className="absolute inset-0 architectural-grid opacity-[0.16] light:opacity-[0.08]" />
      <div className="absolute inset-0 z-[1] overflow-hidden opacity-55 light:opacity-45">
        <ParticleBackground />
      </div>
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.10),transparent_62%)] pointer-events-none light:bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_58%)]" />
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[560px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-brand-primary/[0.06] blur-[120px] pointer-events-none light:bg-brand-primary/[0.03] sm:h-[520px] sm:w-[760px]" />

      <motion.div className="relative z-10 container mx-auto px-5 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-24" style={{ y: headlineY, opacity }}>
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            className="mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-white/10 bg-card/80 px-4 py-2.5 shadow-architectural backdrop-blur-sm sm:mb-8 sm:px-5"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse-soft" />
            <span className="text-[0.92rem] font-medium tracking-[0.01em] text-white/72 light:text-slate-700 sm:text-sm sm:tracking-wide">
              Webs · Automatización · Dashboards
            </span>
          </motion.div>

          <motion.h1
            className="mb-5 font-heading text-[clamp(2.8rem,12vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-white light:text-slate-950 sm:mb-6 sm:text-5xl sm:leading-[1.02] sm:tracking-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.15, duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block sm:inline">Una </span>
            <span className="block bg-gradient-to-r from-brand-primary via-purple-400 to-brand-secondary bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto] sm:inline-block">
              web que venda,
            </span>{" "}
            <span className="block sm:inline">procesos que </span>
            <motion.span
              className="relative mt-2 inline-block px-[0.08em] pb-[0.16em] text-white light:text-slate-950 sm:mt-0 sm:inline-block"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              no dependan de ti
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.span>{" "}
            <span className="mt-2 block sm:mt-0 sm:inline">
              y{" "}
              <span className="bg-gradient-to-r from-brand-secondary to-emerald-400 bg-clip-text text-transparent sm:inline-block">
                datos para decidir mejor
              </span>
            </span>
          </motion.h1>

          <motion.div
            className="mx-auto flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              variant="hero"
              size="lg"
              asChild
              className="group relative w-full justify-center overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl sm:w-auto"
            >
              <a href="/brief?source=hero-call">
                Solicitar diagnóstico
                <CalendarDays className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full justify-center border-white/20 bg-transparent text-white hover:bg-white/10 light:border-foreground/15 light:text-foreground light:hover:bg-foreground/5 sm:w-auto"
            >
              <a href="/proyectos">
                Ver casos de éxito
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>

          <motion.p
            className="mt-4 max-w-[24rem] text-sm text-white/42 light:font-medium light:text-slate-700 sm:mt-5 sm:max-w-none"
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
