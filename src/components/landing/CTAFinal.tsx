import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { getWhatsAppUrl } from "@/config/contact";

export const CTAFinal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="relative py-24 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="section-shell px-8 py-10 md:px-12 md:py-14">
          <div className="absolute inset-0 gradient-mesh-subtle opacity-90" />

          <div className="relative z-10 max-w-3xl">
            <div className="eyebrow mb-6">siguiente paso</div>
            <motion.h2
              className="max-w-[13ch] font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink md:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Si tu negocio necesita una pagina mas clara para vender mejor, podemos empezar por ahi.
            </motion.h2>

            <motion.p
              className="mt-5 max-w-[40rem] text-lg leading-relaxed text-foreground/72"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Una landing page bien planteada puede ayudarte a explicar mejor tu oferta, dar una mejor primera impresion y facilitar que mas personas te escriban o pidan informacion.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button variant="hero" size="lg" asChild className="justify-center">
                <a href="/brief?source=landing-page-sprint">
                  Solicitar landing page
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="justify-center">
                <a
                  href={getWhatsAppUrl("Hola, quiero hablar sobre una landing page para mi negocio.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hablar por WhatsApp
                  <MessageCircleMore className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.p
              className="mt-5 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.26, duration: 0.6 }}
            >
              Pagina enfocada · 24–72h · Proceso simple
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
