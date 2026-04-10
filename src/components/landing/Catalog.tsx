import { motion } from "framer-motion";
import { MessageSquare, Calendar, Stethoscope, Briefcase, Zap, Activity } from "lucide-react";
import { getWhatsAppUrl } from "@/config/contact";

const agents = [
  {
    title: "Agente de Ventas IG",
    description: "Cierra ventas automáticamente en los DMs de Instagram, respondiendo dudas frecuentes y enviando links de pago 24/7.",
    icon: MessageSquare,
    tag: "E-Commerce",
  },
  {
    title: "Asistente Médico de Reservas",
    description: "Califica pacientes, responde preguntas sobre tratamientos y agenda citas automáticamente sincronizadas con tu calendario.",
    icon: Stethoscope,
    tag: "Salud",
  },
  {
    title: "B2B Lead Qualifier",
    description: "Filtra prospectos B2B en frío, califica leads en tiempo real a través de WhatsApp y los asigna al ejecutivo correcto.",
    icon: Briefcase,
    tag: "B2B",
  },
  {
    title: "Customer Success Bot",
    description: "Atiende reclamos, rastrea pedidos y resuelve problemas comunes sin intervención humana, escalando solo cuando es necesario.",
    icon: Activity,
    tag: "Soporte",
  },
];

export const Catalog = () => {
  return (
    <section id="catalogo" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[#0a0a0c]" />
      
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6"
            >
              <Zap className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Catálogo</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-semibold text-white tracking-tight"
            >
              Empleados digitales <br />
              listos para integrar.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-sm md:text-right"
          >
            Sistemas pre-entrenados y personalizables para operar la fricción de tu negocio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <motion.a
                href={getWhatsAppUrl(`Hola, me interesa el agente "${agent.title}". ¿Podrían darme más detalles sobre cómo implementarlo?`)}
                target="_blank"
                rel="noopener noreferrer"
                key={agent.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col justify-between p-6 h-full min-h-[300px] rounded-3xl bg-[#111116] border border-white/5 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(255,255,255,0.04)] transition-all duration-500 overflow-hidden cursor-pointer no-underline"
              >
                {/* Minimal grain / noise for premium feel */}
                <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-white/10 text-white/50 bg-black/50 bg-clip-padding backdrop-filter backdrop-blur-sm">
                      {agent.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-medium text-white mb-2">{agent.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {agent.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-4 border-t border-white/5 flex items-center text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                  Contactar para este servicio
                  <svg className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
