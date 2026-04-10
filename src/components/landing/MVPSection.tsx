import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const MVPSection = () => {
  return (
    <section id="mvp" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[#0a0a0c]" />
      
      {/* Background gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(217,124,71,0.08)_0%,transparent_50%)] pointer-events-none blur-3xl mix-blend-screen" />

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        <div className="rounded-[2.5rem] bg-[#111116] border border-white/10 p-8 md:p-16 overflow-hidden relative">
          
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-heading font-semibold text-white tracking-tight mb-6">
                  Tu MVP de IA en <span className="text-brand-primary">semanas</span>, no meses.
                </h2>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  Evita documentaciones infinitas y presupuestos inflados. Construimos el "Minimum Viable Product" necesario para que valides el impacto de la Inteligencia Artificial en tus ingresos reales desde el primer mes.
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    "Arquitectura escalable desde el día 1.",
                    "Integración total con tus APIs actuales.",
                    "Testing real con tus propios clientes.",
                    "Ajuste y re-entrenamiento continuo."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="hero" size="lg" className="bg-white text-black hover:bg-white/90 gap-2 rounded-full" asChild>
                  <Link to="/agente">
                    Iniciar mi Prueba de Concepto <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="relative aspect-square md:aspect-auto md:h-full min-h-[400px] w-full items-center justify-center hidden md:flex">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                    {/* Abstract tech representation */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full h-full relative"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-primary/20 blur-2xl rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-primary rounded-full shadow-[0_0_40px_rgba(217,124,71,0.8)]" />
                    </motion.div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
