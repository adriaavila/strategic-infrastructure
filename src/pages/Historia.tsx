import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, LineChart, Sparkles } from "lucide-react";

const milestones = [
  {
    title: "Origen",
    body: "Servicioscreativos.online nace como una práctica de diseño y desarrollo enfocada en construir productos digitales con mejor criterio visual y técnico.",
  },
  {
    title: "Aprendizaje en producto",
    body: "El trabajo con websites, ecommerce y sistemas internos mostró que el mayor valor no estaba en entregar piezas aisladas, sino en diseñar sistemas que conectaran presencia, operación y datos.",
  },
  {
    title: "Enfoque actual",
    body: "Hoy la propuesta se posiciona como constructor de sistemas digitales con IA: productos que combinan interfaces, automatización e inteligencia operativa para ayudar a negocios a vender mejor y operar con más eficiencia.",
  },
];

const thesis = [
  "La mayoría de negocios no necesita más herramientas sueltas. Necesita sistemas claros que conecten mejor marketing, operación y datos.",
  "La IA y la automatización no son un extra decorativo. Son una capa práctica para reducir trabajo manual, acelerar procesos y ampliar capacidad.",
  "El diseño sigue siendo una ventaja competitiva. Una interfaz clara hace que la tecnología se entienda, se use y genere más valor.",
];

const startupSignals = [
  "Constructor técnico con foco en producto, automatización e interfaces.",
  "Exploración constante de herramientas de IA aplicadas a casos reales de negocio.",
  "Tesis clara: convertir servicios digitales en sistemas más escalables y medibles.",
  "Capacidad de diseñar, desarrollar y conectar producto, operación y narrativa comercial.",
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
              Historia y visión de producto
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-xl md:text-2xl text-brand-slate max-w-3xl mx-auto leading-relaxed">
              Una presentación más clara de servicioscreativos.online como constructor de sistemas digitales con IA, pensada para partners, clientes y programas como EmprendeLatam o YC.
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
                Qué estoy construyendo
              </h2>
              <p>
                Soy Adrian Avila. Mi trabajo ha evolucionado desde proyectos de diseño y desarrollo web hacia un enfoque más amplio: construir sistemas digitales donde presencia, automatización e inteligencia del negocio funcionen como una sola capa.
              </p>
              <p>
                La tesis central es simple: muchos negocios ya no necesitan solo una web o una automatización aislada. Necesitan una infraestructura digital que les permita vender mejor, reducir trabajo manual y operar con más claridad.
              </p>
              <p>
                Hoy eso se traduce en una propuesta clara para el cliente: diseñar y construir webs, automatizaciones y sistemas internos que ayuden a vender mejor y operar con menos fricción.
              </p>
            </motion.div>

            <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-5">Tesis de producto</h3>
              <div className="space-y-4">
                {thesis.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-brand-secondary mt-1 shrink-0" />
                    <p className="text-brand-slate leading-relaxed">{item}</p>
                  </div>
                ))}
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
