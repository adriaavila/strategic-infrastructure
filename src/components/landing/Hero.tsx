import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ParticleBackground } from "@/components/particles/ParticleBackground";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { getWhatsAppUrl } from "@/config/contact";

const headlineLines = [
  { text: "Diseño, desarrollo y automatización", highlight: false },
  { text: "para negocios que buscan", highlight: false },
  { text: "crecer con una presencia más sólida.", highlight: true },
];

const trustItems = [
  "Websites corporativos",
  "Ecommerce y landing pages",
  "Dashboards y automatización",
];

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark bg-hero-gradient light:bg-[#F6F8FC]"
    >
      <div className="absolute inset-0 architectural-grid opacity-25" />
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <ParticleBackground />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[760px] h-[520px] bg-brand-primary/[0.07] rounded-full blur-[120px] pointer-events-none light:bg-brand-primary/[0.04]" />

      <motion.div
        className="relative z-10 container mx-auto px-6 pt-28 pb-24"
        style={{ y: headlineY, opacity }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-card/80 backdrop-blur-sm mb-8 shadow-architectural"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse-soft" />
            <span className="text-sm text-white/70 font-medium tracking-wide">
              Soluciones digitales para una operación más clara y profesional
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.03] mb-6 font-heading text-white">
            {headlineLines.map((line, i) => (
              <motion.span
                key={i}
                className={`block ${line.highlight ? "text-brand-secondary" : "text-white"}`}
                initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
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

          <motion.p
            className="text-lg md:text-xl text-brand-slate max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Desarrollamos websites, ecommerce, dashboards y automatizaciones con una ejecución cuidada, enfoque comercial y una experiencia digital alineada con el nivel de tu negocio.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {trustItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/68 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.75, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              variant="hero"
              size="lg"
              asChild
              className="group relative shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <a href={getWhatsAppUrl("Hola, ví su sitio web y me gustaría solicitar información.")} target="_blank" rel="noopener noreferrer">
                <span className="absolute inset-0 rounded-[inherit] bg-brand-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                Escríbeme por WhatsApp
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-transparent text-white border-white/20 hover:bg-white/10 light:text-foreground light:border-foreground/15 light:hover:bg-foreground/5"
            >
              <a href="/brief?source=hero">Solicitar proyecto</a>
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-white/36 mt-5 light:text-slate-700 light:font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.95, duration: 0.6 }}
          >
            Respuesta inicial en poco tiempo · Conversación clara desde el primer contacto
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent light:bg-gradient-to-t light:from-[#F6F8FC] light:via-[#F6F8FC] light:to-[#F6F8FC]/0" />
    </section>
  );
};
