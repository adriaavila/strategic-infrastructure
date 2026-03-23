import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const caseStudies = [
  {
    title: "Almacén VC",
    label: "Sistema operativo interno",
    description:
      "Pedidos, inventario y analítica operativa en una sola interfaz para ordenar una operación física compleja.",
    image: "/projects/portfolio/almacen-vc.png",
    bullets: ["Operación centralizada", "Menos errores manuales", "Visibilidad en tiempo real"],
    href: "/proyectos/almacen-vc",
  },
  {
    title: "Intrega",
    label: "Narrativa B2B y conversión",
    description:
      "Una landing con diagnóstico, autoridad y estructura comercial clara para una oferta compleja de transformación digital.",
    image: "/projects/gallery/intrega/hero.png",
    bullets: ["Propuesta más clara", "Mayor autoridad visual", "Recorrido de decisión más limpio"],
    href: "/proyectos/intrega",
  },
  {
    title: "Artistheway",
    label: "Ecommerce editorial",
    description:
      "Una tienda pensada como galería digital para elevar percepción, confianza y contexto de compra.",
    image: "/projects/gallery/artistheway/hero.png",
    bullets: ["Mejor valor percibido", "Storytelling integrado", "Experiencia premium de compra"],
    href: "/proyectos/artistheway",
  },
];

export const ProjectsShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section id="casos" className="relative py-24 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">casos</div>
          <motion.h2
            className="max-w-[11ch] font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink md:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Capacidad real para construir sistemas útiles.
          </motion.h2>
          <motion.p
            className="mt-5 max-w-[40rem] text-lg leading-relaxed text-foreground/72"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Los casos no son el centro de la marca, pero sí muestran algo importante: se pueden
            diseñar interfaces, flujos y sistemas complejos con criterio de negocio y buena ejecución.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              className="overflow-hidden rounded-[1.8rem] border border-border bg-white/84 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.14 + index * 0.08,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="relative aspect-[1.14/1] overflow-hidden border-b border-border bg-[#F2EFF7]">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-secondary shadow-sm">
                  {study.label}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold tracking-tight text-brand-ink">
                  {study.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/70">
                  {study.description}
                </p>

                <div className="mt-5 space-y-3">
                  {study.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/68">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-primary/80" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={study.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-secondary transition-colors hover:text-brand-primary"
                >
                  Ver caso
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.36, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/86 px-5 py-3 text-sm font-medium text-foreground/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/20 hover:text-brand-secondary"
          >
            Ver más proyectos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
