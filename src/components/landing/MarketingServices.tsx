import { Palette, Megaphone, PenTool } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BentoCard } from "./BentoCard";

// Branding Visual - color palette, typography, logo
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

// Marketing Visual - metrics without fake percentages
const MarketingVisual = () => {
  const metrics = [
    { label: 'Alcance', color: 'bg-emerald-500/20' },
    { label: 'Conversiones', color: 'bg-blue-500/20' },
    { label: 'Engagement', color: 'bg-purple-500/20' },
  ];

  return (
    <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
      <div className="space-y-3">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            className="flex flex-col gap-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.4, type: "spring" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{metric.label}</span>
            </div>
            <motion.div 
              className={`h-2 rounded-full ${metric.color}`}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1 + i * 0.15, duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Content Visual - social media posts
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

const marketingServices = [
  {
    title: "Branding & Identidad",
    description: "Logotipos, paletas de colores y guías de marca que comunican la esencia de tu negocio.",
    icon: <Palette className="w-5 h-5 text-foreground/70" />,
    visual: <BrandingVisual />,
    className: "",
    delay: 200
  },
  {
    title: "Marketing Digital",
    description: "Estrategias de redes sociales, campañas de ads y SEO para aumentar tu visibilidad online.",
    icon: <Megaphone className="w-5 h-5 text-foreground/70" />,
    visual: <MarketingVisual />,
    className: "",
    delay: 300
  },
  {
    title: "Creación de Contenido",
    description: "Posts, stories, reels y todo el contenido que necesitas para mantener tus redes activas y atractivas.",
    icon: <PenTool className="w-5 h-5 text-foreground/70" />,
    visual: <ContentVisual />,
    className: "lg:col-span-2",
    delay: 400
  }
];

export const MarketingServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section id="marketing" className="relative py-24 md:py-32 scroll-mt-20 bg-muted/30" ref={containerRef}>
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
            Soluciones para destacar en el mundo digital
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {marketingServices.map((service, index) => (
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
        </motion.div>
      </div>
    </section>
  );
};
