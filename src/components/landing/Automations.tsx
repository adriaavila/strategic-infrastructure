import { MessageSquare, FileSpreadsheet, Users, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  visual: React.ReactNode;
  delay?: number;
  index?: number;
}

const BentoCard = ({ title, description, icon, className, visual, delay = 0, index = 0 }: BentoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - cardCenterX;
      const distanceY = e.clientY - cardCenterY;
      
      mouseX.set((distanceX / rect.width) * 20);
      mouseY.set((distanceY / rect.height) * 20);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      className={`group relative bg-card border border-foreground/[0.08] rounded-2xl p-6 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ 
        scale: 1.02,
        borderColor: "hsl(var(--foreground) / 0.15)",
        transition: { duration: 0.3 }
      }}
      style={{ x, y }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--foreground) / 0.04), transparent 40%)"
        }}
      />

      {/* Icon */}
      <motion.div 
        className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-foreground/5 mb-4"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
      >
        {icon}
      </motion.div>

      {/* Content */}
      <motion.h3 
        className="text-lg font-medium mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-sm text-muted-foreground leading-relaxed"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
      >
        {description}
      </motion.p>

      {/* Visual */}
      <motion.div 
        className="mt-6 -mx-6 -mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
      >
        {visual}
      </motion.div>
    </motion.div>
  );
};

// Chat Animation Visual with Framer Motion
const ChatVisual = () => (
  <div className="bg-foreground/[0.03] border-t border-foreground/[0.08] p-5 h-52 overflow-hidden">
    <div className="space-y-3">
      <motion.div 
        className="flex gap-3"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
      >
        <div className="w-8 h-8 rounded-full bg-foreground/10 flex-shrink-0 flex items-center justify-center">
          <span className="text-xs font-medium text-foreground/60">U</span>
        </div>
        <motion.div 
          className="bg-foreground/[0.08] rounded-2xl rounded-tl-md px-4 py-2.5 max-w-[75%] shadow-sm"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4, type: "spring" }}
        >
          <p className="text-sm text-foreground/80 leading-relaxed">Hola, me interesa su servicio de automatización</p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="flex gap-3 justify-end"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
      >
        <motion.div 
          className="bg-neutral-900 rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[75%] shadow-sm"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.4, type: "spring" }}
        >
          <p className="text-sm leading-relaxed text-white">¡Hola! Soy el asistente de Allok. ¿En qué área necesitas automatizar?</p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex gap-3 justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.4, type: "spring" }}
      >
        <motion.div 
          className="bg-emerald-600 text-white rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-sm cursor-pointer"
          whileHover={{ scale: 1.05, backgroundColor: "rgb(5, 150, 105)" }}
          whileTap={{ scale: 0.95 }}
        >
          <Zap className="w-4 h-4" />
          <p className="text-sm font-medium">Agendar llamada →</p>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

// Data Entry Visual with animations
const DataVisual = () => (
  <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
    <div className="space-y-2">
      <motion.div 
        className="flex items-center gap-3 p-2 rounded-lg bg-foreground/5"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <motion.div 
          className="w-8 h-10 rounded bg-foreground/10 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, type: "spring" }}
        >
          <FileSpreadsheet className="w-4 h-4 text-muted-foreground" />
        </motion.div>
        <div className="flex-1">
          <motion.div 
            className="text-xs font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            factura_2024.pdf
          </motion.div>
          <motion.div 
            className="text-[10px] text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Procesando...
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="flex justify-center py-1"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.3, duration: 0.4 }}
      >
        <div className="w-0.5 h-4 bg-foreground/10" />
      </motion.div>

      <motion.div 
        className="rounded-lg border border-foreground/[0.08] overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <div className="grid grid-cols-3 text-[10px] bg-foreground/5 px-2 py-1 font-medium">
          <span>Concepto</span>
          <span>Monto</span>
          <span>Fecha</span>
        </div>
        <motion.div 
          className="grid grid-cols-3 text-[10px] px-2 py-1.5 border-t border-foreground/[0.05]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <span className="text-muted-foreground">Software</span>
          <span>$2,400</span>
          <span className="text-muted-foreground">15/01</span>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

// Sales Pipeline Visual with stagger
const PipelineVisual = () => {
  const stages = ['Frío', 'Tibio', 'Caliente', 'Cerrado'];
  
  return (
    <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
      <div className="flex items-center gap-2 h-full">
        {stages.map((stage, i) => (
          <motion.div 
            key={stage} 
            className="flex-1 flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.4, type: "spring" }}
          >
            <motion.div 
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                i === 3 
                  ? 'bg-emerald-500/20 text-emerald-600 ring-2 ring-emerald-500/30' 
                  : i >= 2 
                    ? 'bg-amber-500/20 text-amber-600' 
                    : 'bg-foreground/5 text-muted-foreground'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.9 + i * 0.15, type: "spring" }}
            >
              <Users className="w-3 h-3" />
            </motion.div>
            <span className="text-[9px] text-muted-foreground text-center">{stage}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Reactivation Visual with animations
const ReactivationVisual = () => {
  const contacts = [
    { name: 'María G.', status: 'Contactado', active: true },
    { name: 'Carlos R.', status: 'Respondió', active: true },
    { name: 'Ana P.', status: 'Llamada agendada', active: true },
  ];

  return (
    <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
      <div className="space-y-2">
        {contacts.map((contact, i) => (
          <motion.div
            key={contact.name}
            className="flex items-center gap-3 p-2 rounded-lg bg-foreground/5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.4, type: "spring" }}
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
          >
            <motion.div 
              className="w-7 h-7 rounded-full bg-foreground/10 flex items-center justify-center text-[10px] font-medium"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9 + i * 0.2, type: "spring" }}
            >
              {contact.name.charAt(0)}
            </motion.div>
            <div className="flex-1">
              <div className="text-xs font-medium">{contact.name}</div>
              <div className="text-[10px] text-muted-foreground">{contact.status}</div>
            </div>
            <motion.div 
              className={`w-2 h-2 rounded-full ${contact.active ? 'bg-emerald-500' : 'bg-foreground/20'}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.2 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const automations = [
  {
    title: "Caza-Prospectos 24/7",
    description: "Tu vendedor que nunca duerme. Respuesta inmediata, calificación de prospectos y agendamiento automático.",
    icon: <MessageSquare className="w-5 h-5 text-foreground/70" />,
    visual: <ChatVisual />,
    className: "lg:col-span-2",
    delay: 200
  },
  {
    title: "Operador Invisible",
    description: "Data-entry automático. Convierte facturas y recibos en reportes financieros en tiempo real.",
    icon: <FileSpreadsheet className="w-5 h-5 text-foreground/70" />,
    visual: <DataVisual />,
    className: "",
    delay: 300
  },
  {
    title: "Pipeline Inteligente",
    description: "Visualiza y gestiona tu embudo de ventas con inteligencia artificial predictiva.",
    icon: <Users className="w-5 h-5 text-foreground/70" />,
    visual: <PipelineVisual />,
    className: "",
    delay: 400
  },
  {
    title: "Bóveda de Ventas",
    description: "Dinero olvidado. Reactivamos tu base de datos vieja con campañas personalizadas de IA.",
    icon: <Zap className="w-5 h-5 text-foreground/70" />,
    visual: <ReactivationVisual />,
    className: "lg:col-span-2",
    delay: 500
  }
];

export const Automations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section id="automatizaciones" className="relative py-24 md:py-32 scroll-mt-20" ref={containerRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Automatizaciones
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Soluciones que transforman la manera en que operas tu negocio
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {automations.map((automation, index) => (
            <BentoCard
              key={automation.title}
              title={automation.title}
              description={automation.description}
              icon={automation.icon}
              visual={automation.visual}
              className={automation.className}
              delay={automation.delay}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
