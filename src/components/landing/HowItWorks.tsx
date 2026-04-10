import { motion } from "framer-motion";
import { Search, PenTool, Rocket, Bot } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Descubrimiento Operativo",
    description: "Analizamos tus cuellos de botella y diseñamos arquitecturas de IA para resolver problemas reales, no imaginarios.",
    icon: Search,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    id: 2,
    title: "Entrenamiento del Agente",
    description: "Conectamos tu base de conocimiento (documentos, FAQs, CRM) a modelos avanzados (GPT-4 / Claude) con tu voz de marca.",
    icon: Bot,
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
  },
  {
    id: 3,
    title: "Diseño e Integración",
    description: "Integramos los agentes directo a tu infraestructura: WhatsApp, Instagram, web nativa o software a la medida.",
    icon: PenTool,
    color: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/50",
  },
  {
    id: 4,
    title: "Despliegue del Servicio",
    description: "Lanzamos soluciones funcionales en semanas. Mides, validas y empiezas a automatizar desde el día uno.",
    icon: Rocket,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
  },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-semibold text-white tracking-tight"
          >
            Sistemas Complejos, <br className="hidden sm:block" />
            <span className="text-white/50">Procesos Simples.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-white/60 max-w-2xl mx-auto text-lg"
          >
            Nuestra metodología convierte problemas abstractos en agentes de IA operativos y medibles.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative rounded-3xl p-8 bg-[#111116] border border-white/10 transition-all duration-500 hover:bg-[#16161c] ${step.border}`}
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-white/80" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    <span className="text-white/30 mr-2 font-mono text-sm">{`0${step.id}`}</span>
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
