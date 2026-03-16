import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, LineChart, Sparkles } from "lucide-react";

const milestones = [
  {
    title: "El Origen",
    body: "Nacimos para cerrar la brecha entre el diseño visual y la eficiencia técnica. Construimos productos que no solo se ven bien, sino que funcionan mejor.",
  },
  {
    title: "La Evolución",
    body: "Entendimos que una web o un software por sí solos no cubren la necesidad real. Los negocios necesitan infraestructuras donde presencia, operación y datos funcionen como un solo sistema.",
  },
  {
    title: "El Presente",
    body: "Hoy diseñamos la arquitectura del mañana: sistemas impulsados por IA que eliminan la carga operativa, aceleran tus procesos y multiplican tu capacidad de vender y decidir.",
  },
];


const startupSignals = [
  "Arquitectura técnica con enfoque en producto, automatización y experiencia de usuario.",
  "Exploración constante de herramientas de IA aplicadas a flujos reales de negocio.",
  "Tesis clara: convertir los activos digitales en sistemas escalables, medibles y rentables.",
  "Capacidad de integrar diseño, código y narrativa comercial en una sola entrega.",
];

const Historia = () => {
  useSEO({
    title: "Historia y visión de producto",
    description: "Historia, tesis y enfoque actual de servicioscreativos.online como constructor de sistemas digitales con IA.",
    path: "/historia",
  });

  return (
    <div className="relative min-h-screen bg-brand-dark text-white selection:bg-brand-primary/30">
      <div className="noise-overlay" />
      <Navbar />

      <main className="pt-32 pb-20 overflow-hidden relative">
        <div className="absolute top-40 left-1/4 w-[500px] h-[500px] bg-brand-primary/16 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-40 right-1/4 w-[400px] h-[400px] bg-brand-secondary/14 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-6 max-w-5xl">
          <section className="text-center mb-24 pt-10">
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-white light:text-slate-950">
              Nuestra Visión y Enfoque
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-xl md:text-2xl text-brand-slate max-w-3xl mx-auto leading-relaxed">
              Construyendo la infraestructura digital para los negocios que liderarán la próxima década a través de IA, automatización y diseño.
            </motion.p>
          </section>

          <section className="mb-24 grid gap-6 md:grid-cols-3">
            {milestones.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <div className="text-sm text-brand-secondary font-semibold mb-3">{item.title}</div>
                <p className="text-brand-slate leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </section>

          <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6 text-brand-slate text-lg leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2 light:text-foreground">
                El futuro de tu operación digital
              </h2>
              <p>
                Servicioscreativos.online nació con una misión clara: ayudar a las empresas con la última tecnología en IA para crear sistemas que funcionan de forma autónoma.
              </p>
              <p>
                Creemos que la tecnología debe ser invisible: tú te centras en la estrategia, y el sistema se encarga de la captura de leads, el seguimiento, la organización de datos y la entrega de reportes.
              </p>
              <p>
                Hoy, eso significa construir infraestructuras donde cada pieza (web, CRM, automatización) está alineada para un solo objetivo: que tu negocio crezca con menos fricción y más inteligencia.
              </p>
            </motion.div>

            <motion.div 
              initial={{ x: 30, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }} 
              className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 mix-blend-overlay z-10" />
              <img 
                src="/vision_abstract_v1.png" 
                alt="Infraestructura digital abstracta" 
                className="w-full h-full object-cover grayscale opacity-50 contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">

                <h4 className="text-xl font-semibold text-white drop-shadow-md">
                  Arquitectura impulsada por IA
                </h4>
              </div>
            </motion.div>
          </section>

          <section className="mb-24 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-sm">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <Brain className="w-8 h-8 text-brand-secondary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">IA aplicada</h3>
                <p className="text-brand-slate leading-relaxed">Exploración constante de herramientas de IA para resolver problemas reales de operación, atención, ventas y reporting.</p>
              </div>
              <div>
                <Cpu className="w-8 h-8 text-brand-secondary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Construcción técnica</h3>
                <p className="text-brand-slate leading-relaxed">Capacidad para diseñar, desarrollar e integrar soluciones sin depender de equipos fragmentados para cada parte del sistema.</p>
              </div>
              <div>
                <LineChart className="w-8 h-8 text-brand-secondary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Impacto en negocio</h3>
                <p className="text-brand-slate leading-relaxed">Enfoque en ventas, eficiencia, visibilidad operativa y decisiones más claras, no solo en entregar interfaces bonitas.</p>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">Señales para programas y partners</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {startupSignals.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-5 text-brand-slate leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="text-center py-20 border-t border-white/10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-semibold mb-6 text-white light:text-foreground">Cuéntame qué sistema quieres construir</h2>
              <p className="text-brand-slate text-lg mb-10">
                Si estás evaluando una web, una automatización o una solución más amplia para tu negocio, puedo ayudarte a definir qué tiene sentido construir primero.
              </p>
              <Button asChild size="lg" className="h-14 px-8 rounded-full text-lg shadow-[0_0_40px_-10px_rgba(157,123,247,0.5)] hover:shadow-[0_0_60px_-10px_rgba(157,123,247,0.7)] transition-all">
                <a href="/brief?source=historia">
                  Agendar una llamada
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Historia;
