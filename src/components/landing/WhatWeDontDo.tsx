import { X, Package, Layers, Wrench, DollarSign } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const dontDoItems = [
  {
    icon: Package,
    title: "Plantillas",
    description: "No usamos temas o plantillas genéricas. Cada sistema es único."
  },
  {
    icon: Layers,
    title: "Paquetes de talla única",
    description: "No vendemos soluciones que no se adaptan a tu negocio específico."
  },
  {
    icon: Wrench,
    title: "\"Mantenimiento\" indefinido",
    description: "No ofrecemos mantenimiento sin alcance claro. Todo tiene un propósito definido."
  },
  {
    icon: DollarSign,
    title: "Rediseños baratos",
    description: "No hacemos cambios cosméticos sin entender tu operación real."
  }
];

export const WhatWeDontDo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="no-hacemos" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16" ref={containerRef}>
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Nuestro Enfoque
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Para mantener la calidad y el enfoque, trabajamos solo con proyectos que requieren soluciones personalizadas.
          </motion.p>
        </div>

        {/* Grid of items */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {dontDoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="bg-card border border-foreground/[0.08] rounded-2xl p-6 hover:border-foreground/[0.15] transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  delay: index * 0.1 + 0.2,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
