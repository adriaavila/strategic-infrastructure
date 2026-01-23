import { Layout, Settings, ShoppingCart } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

// Custom Website Visual - shows custom architecture with fluid looping animation
const CustomWebsiteVisual = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const containerVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        repeat: shouldReduceMotion ? 0 : Infinity,
        repeatType: "loop" as const,
        repeatDelay: 7.5
      }
    }
  };

  return (
    <div className="bg-foreground/[0.03] border-t border-foreground/[0.08] p-5 h-52 overflow-hidden">
      <div className="space-y-3">
        <motion.div 
          className="rounded-lg border border-foreground/10 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-1.5 px-3 py-2 bg-foreground/5 border-b border-foreground/10">
            <div className="w-2 h-2 rounded-full bg-red-400/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
            <div className="w-2 h-2 rounded-full bg-green-400/60" />
            <div className="flex-1 mx-2 h-4 rounded bg-foreground/5" />
          </div>
          <div className="p-3 space-y-2">
            <motion.div 
              className="h-8 rounded bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ 
                delay: 0.3, 
                duration: 0.9, 
                ease: [0.16, 1, 0.3, 1],
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                repeatDelay: 7.5
              }}
            />
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-12 rounded bg-foreground/5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.6 + i * 0.15, 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    repeat: shouldReduceMotion ? 0 : Infinity,
                    repeatType: "loop",
                    repeatDelay: 7.5
                  }}
                />
              ))}
            </div>
            <motion.div 
              className="h-4 rounded bg-gradient-to-r from-blue-500/10 to-emerald-500/10"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ 
                delay: 1.1, 
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                repeatDelay: 7.5
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Web Apps Visual - shows dashboard/workflow tools with slower looping animation
const WebAppsVisual = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
      <div className="space-y-2">
        {/* Dashboard header */}
        <motion.div 
          className="flex items-center justify-between p-2 rounded-lg bg-foreground/5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.5, 
            duration: 0.8,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
            repeatDelay: 12,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <motion.div 
            className="h-2 w-16 rounded bg-foreground/10"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ 
              delay: 0.7, 
              duration: 0.8,
              repeat: shouldReduceMotion ? 0 : Infinity,
              repeatType: "loop",
              repeatDelay: 12,
              ease: [0.16, 1, 0.3, 1]
            }}
          />
          <motion.div 
            className="w-6 h-6 rounded-full bg-emerald-500/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 0.9, 
              type: "spring",
              stiffness: 100,
              damping: 15,
              repeat: shouldReduceMotion ? 0 : Infinity,
              repeatType: "loop",
              repeatDelay: 12
            }}
          />
        </motion.div>
        
        {/* Data flow visualization */}
        <div className="grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="rounded-lg border border-foreground/10 p-2 bg-foreground/5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 1.2 + i * 0.2, 
                duration: 0.6, 
                type: "spring",
                stiffness: 150,
                damping: 20,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                repeatDelay: 12
              }}
            >
              <motion.div 
                className="h-2 w-full rounded bg-foreground/10 mb-1"
                initial={{ width: 0 }}
                animate={{ 
                  width: ["0%", "100%", "60%", "100%", "0%"],
                }}
                transition={{ 
                  delay: 1.4 + i * 0.2, 
                  duration: 4,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  repeatType: "loop",
                  ease: [0.16, 1, 0.3, 1]
                }}
              />
              <motion.div 
                className="h-1 w-3/4 rounded bg-foreground/5"
                initial={{ width: 0 }}
                animate={{ 
                  width: ["0%", "75%", "50%", "75%", "0%"],
                }}
                transition={{ 
                  delay: 1.5 + i * 0.2, 
                  duration: 4,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  repeatType: "loop",
                  ease: [0.16, 1, 0.3, 1]
                }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Connection lines */}
        <motion.div 
          className="flex items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: 2.5,
            duration: 0.8,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
            repeatDelay: 12,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ 
                scaleX: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0]
              }}
              transition={{ 
                delay: 2.7 + i * 0.3, 
                duration: 3,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                ease: [0.16, 1, 0.3, 1]
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// E-commerce Visual - shows custom checkout flow with fluid looping animation
const EcommerceVisual = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
      <div className="space-y-2">
        {/* Product cards */}
        <div className="flex gap-2">
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-lg border border-foreground/10 p-2 bg-foreground/5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.3 + i * 0.25, 
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                repeatDelay: 10
              }}
            >
              <motion.div 
                className="h-8 rounded bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 0.4 + i * 0.25, 
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  repeatType: "loop",
                  repeatDelay: 10
                }}
              />
              <motion.div 
                className="h-1 w-full rounded bg-foreground/10"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ 
                  delay: 0.5 + i * 0.25, 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  repeatType: "loop",
                  repeatDelay: 10
                }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Checkout flow */}
        <motion.div 
          className="rounded-lg border border-foreground/10 p-2 bg-foreground/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.9, 
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
            repeatDelay: 10
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <motion.div 
              className="h-2 w-12 rounded bg-foreground/10"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ 
                delay: 1, 
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                repeatDelay: 10
              }}
            />
            <motion.div 
              className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0, 1, 1.1, 1],
              }}
              transition={{ 
                delay: 1.1, 
                type: "spring",
                stiffness: 200,
                damping: 15,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                repeatDelay: 10,
                times: [0, 0.3, 0.5, 1]
              }}
            >
              <ShoppingCart className="w-3 h-3 text-emerald-600" />
            </motion.div>
          </div>
          <motion.div 
            className="h-6 rounded bg-gradient-to-r from-emerald-500/20 to-blue-500/20"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              delay: 1.2, 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              repeat: shouldReduceMotion ? 0 : Infinity,
              repeatType: "loop",
              repeatDelay: 10
            }}
          />
        </motion.div>
        
        {/* Payment icons */}
        <motion.div 
          className="flex gap-1 justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: 1.4,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "loop",
            repeatDelay: 10
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-6 h-4 rounded bg-foreground/10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0]
              }}
              transition={{ 
                delay: 1.5 + i * 0.15, 
                duration: 1,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                repeatDelay: 10,
                ease: [0.16, 1, 0.3, 1]
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Sitios Web Personalizados",
    subtitle: "Cuando la web tiene que cumplir una función real.",
    description: (
      <>
        <p className="mb-3">
          Construimos sitios web con Next.js, shadcn/ui y un enfoque centrado en UX.
        </p>
        <ul className="space-y-2 mb-3 ml-4">
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 mt-1">•</span>
            <span>Next.js para performance y SEO</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 mt-1">•</span>
            <span>shadcn/ui para componentes accesibles</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 mt-1">•</span>
            <span>UX research y testing de usabilidad</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 mt-1">•</span>
            <span>Optimización de conversión</span>
          </li>
        </ul>
        <p className="font-medium text-foreground">
          Ideal para proyectos que necesitan velocidad, calidad y resultados medibles.
        </p>
      </>
    ),
    icon: <Layout className="w-5 h-5 text-foreground/70" />,
    visual: <CustomWebsiteVisual />,
    className: "lg:col-span-1",
    delay: 200
  },
  {
    title: "Webapps & Herramientas Internas",
    subtitle: "Sistemas para operar mejor.",
    description: (
      <>
        <p className="mb-3">
          Diseñamos y desarrollamos webapps que reemplazan procesos manuales, hojas de cálculo o soluciones mal adaptadas.
        </p>
        <ul className="space-y-2 mb-3 ml-4">
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 mt-1">•</span>
            <span>MVPs funcionales</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 mt-1">•</span>
            <span>Paneles administrativos</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 mt-1">•</span>
            <span>Dashboards operativos</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 mt-1">•</span>
            <span>Automatización de flujos</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 mt-1">•</span>
            <span>Integraciones con APIs y servicios externos</span>
          </li>
        </ul>
        <p className="font-medium text-foreground">
          Ideal para equipos que necesitan orden, control y eficiencia.
        </p>
      </>
    ),
    icon: <Settings className="w-5 h-5 text-foreground/70" />,
    visual: <WebAppsVisual />,
    className: "lg:col-span-1",
    delay: 300
  },
  {
    title: "E-commerce a Medida",
    subtitle: "Cuando vender online requiere algo más que un checkout estándar.",
    description: (
      <>
        <p className="mb-3">
          Construimos sistemas de e-commerce adaptados a reglas reales de negocio.
        </p>
        <ul className="space-y-2 mb-3 ml-4">
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 mt-1">•</span>
            <span>Lógica de productos personalizada</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 mt-1">•</span>
            <span>Flujos de compra no convencionales</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 mt-1">•</span>
            <span>Integraciones con pagos, logística y sistemas existentes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 mt-1">•</span>
            <span>Optimización de performance y escalabilidad</span>
          </li>
        </ul>
        <p className="font-medium text-foreground">
          Ideal para catálogos complejos, marketplaces y negocios con restricciones propias.
        </p>
      </>
    ),
    icon: <ShoppingCart className="w-5 h-5 text-foreground/70" />,
    visual: <EcommerceVisual />,
    className: "lg:col-span-1",
    delay: 400
  }
];

export const ServicePillars = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section id="pilares" className="relative py-24 md:py-32 scroll-mt-20" ref={containerRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Pilares de Servicio
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            No vendemos paquetes. Diseñamos y construimos sistemas adaptados a tu negocio.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
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
          {services.map((service, index) => (
            <BentoCard
              key={service.title}
              title={service.title}
              subtitle={service.subtitle}
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

// Export legacy name for backwards compatibility
export const BentoGrid = ServicePillars;
