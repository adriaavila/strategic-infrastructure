import { Palette, Megaphone, PenTool, Layout } from "lucide-react";
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

// Web Design Visual with Framer Motion
const WebDesignVisual = () => (
  <div className="bg-foreground/[0.03] border-t border-foreground/[0.08] p-5 h-52 overflow-hidden">
    <div className="space-y-3">
      <motion.div 
        className="rounded-lg border border-foreground/10 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="flex items-center gap-1.5 px-3 py-2 bg-foreground/5 border-b border-foreground/10">
          <div className="w-2 h-2 rounded-full bg-red-400/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <div className="w-2 h-2 rounded-full bg-green-400/60" />
          <div className="flex-1 mx-2 h-4 rounded bg-foreground/5" />
        </div>
        <div className="p-3 space-y-2">
          <motion.div 
            className="h-8 rounded bg-gradient-to-r from-emerald-500/20 to-blue-500/20"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          />
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-12 rounded bg-foreground/5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Branding Visual with animations
const BrandingVisual = () => (
  <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
    <div className="flex items-center justify-center h-full gap-4">
      <motion.div 
        className="space-y-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {[
          { color: "bg-neutral-900", delay: 0.9 },
          { color: "bg-emerald-500", delay: 1 },
          { color: "bg-slate-200", delay: 1.1 }
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`w-8 h-8 rounded-lg ${item.color}`}
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: item.delay, duration: 0.4, type: "spring" }}
          />
        ))}
      </motion.div>
      
      <motion.div 
        className="w-20 h-20 rounded-2xl border-2 border-dashed border-foreground/20 flex items-center justify-center"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
      >
        <motion.span 
          className="text-2xl font-bold text-foreground/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          A
        </motion.span>
      </motion.div>
      
      <motion.div 
        className="space-y-1"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <motion.div 
          className="text-xs font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Aa
        </motion.div>
        <motion.div 
          className="text-[10px] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          Inter
        </motion.div>
        <motion.div 
          className="text-[8px] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          ABCDEFGH
        </motion.div>
      </motion.div>
    </div>
  </div>
);

// Marketing Visual with stagger animations
const MarketingVisual = () => {
  const stats = [
    { label: 'Alcance', value: '+240%', color: 'text-emerald-500' },
    { label: 'Conversiones', value: '+85%', color: 'text-blue-500' },
    { label: 'Engagement', value: '+120%', color: 'text-purple-500' },
  ];

  return (
    <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
      <div className="space-y-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex items-center justify-between p-2 rounded-lg bg-foreground/5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.4, type: "spring" }}
          >
            <span className="text-xs text-muted-foreground">{stat.label}</span>
            <motion.span 
              className={`text-sm font-semibold ${stat.color}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.15, duration: 0.3, type: "spring" }}
            >
              {stat.value}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Content Visual with animations
const ContentVisual = () => (
  <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
    <div className="space-y-2">
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          className="rounded-lg border border-foreground/10 p-3"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8 + i * 0.2, duration: 0.5, type: "spring" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <motion.div 
              className={`w-6 h-6 rounded-full ${i === 0 ? 'bg-gradient-to-br from-pink-500 to-orange-500' : 'bg-blue-500'}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.2, type: "spring" }}
            />
            <motion.div 
              className={`h-2 ${i === 0 ? 'w-16' : 'w-20'} rounded bg-foreground/10`}
              initial={{ width: 0 }}
              animate={{ width: i === 0 ? 64 : 80 }}
              transition={{ delay: 1.1 + i * 0.2, duration: 0.4 }}
            />
          </div>
          {i === 0 && (
            <motion.div 
              className="h-16 rounded bg-gradient-to-br from-purple-500/20 to-pink-500/20"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 64, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
          )}
          {i === 1 && (
            <motion.div 
              className="h-2 w-full rounded bg-foreground/5"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.3, duration: 0.5 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  </div>
);

const services = [
  {
    title: "Diseño Web",
    description: "Sitios web modernos, rápidos y optimizados para convertir visitantes en clientes. Desde landing pages hasta tiendas online.",
    icon: <Layout className="w-5 h-5 text-foreground/70" />,
    visual: <WebDesignVisual />,
    className: "lg:col-span-2",
    delay: 200
  },
  {
    title: "Branding & Identidad",
    description: "Logotipos, paletas de colores y guías de marca que comunican la esencia de tu negocio.",
    icon: <Palette className="w-5 h-5 text-foreground/70" />,
    visual: <BrandingVisual />,
    className: "",
    delay: 300
  },
  {
    title: "Marketing Digital",
    description: "Estrategias de redes sociales, campañas de ads y SEO para aumentar tu visibilidad online.",
    icon: <Megaphone className="w-5 h-5 text-foreground/70" />,
    visual: <MarketingVisual />,
    className: "",
    delay: 400
  },
  {
    title: "Creación de Contenido",
    description: "Posts, stories, reels y todo el contenido que necesitas para mantener tus redes activas y atractivas.",
    icon: <PenTool className="w-5 h-5 text-foreground/70" />,
    visual: <ContentVisual />,
    className: "lg:col-span-2",
    delay: 500
  }
];

export const MarketingServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section id="producto" className="relative py-24 md:py-32 scroll-mt-20" ref={containerRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Servicios de Marketing
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Todo lo que necesitas para destacar en el mundo digital
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <BentoCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              visual={service.visual}
              className={service.className}
              delay={service.delay}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Export legacy name for backwards compatibility if needed
export const BentoGrid = MarketingServices;
