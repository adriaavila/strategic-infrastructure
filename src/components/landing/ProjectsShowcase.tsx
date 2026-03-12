import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    title: "Intrega",
    description:
      "Landing page para consultoría y transformación digital enfocada en el sector hospitalidad.",
    tags: ["React", "TypeScript", "UI/UX"],
    liveUrl: "https://intrega-landing.vercel.app",
    image: "/projects/intrega.png",
    className: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    title: "Almacen VC",
    description:
      "Sistema de control de almacén e inventario para la empresa Vistacampo.",
    tags: ["TypeScript", "Gestión", "Dashboard"],
    liveUrl: "https://almacen-vc.vercel.app",
    image: "/projects/almacen-vc.png",
    className: "md:col-span-1 md:row-span-1",
    featured: false,
  },
  {
    title: "Viaja Ven",
    description:
      "Plataforma de turismo gastronómico con diseño interactivo e intuitivo.",
    tags: ["TypeScript", "Turismo", "Plataforma"],
    liveUrl: "https://viaja-ven.vercel.app",
    image: "/projects/viaja-ven.png",
    className: "md:col-span-1 md:row-span-1",
    featured: false,
  },
  {
    title: "Artist The Way",
    description:
      "Plataforma de E-commerce dedicada a exponer e impulsar artistas creativos.",
    tags: ["TypeScript", "E-commerce"],
    liveUrl: "https://artistheway.vercel.app",
    image: "/projects/artistheway.png",
    className: "md:col-span-1 md:row-span-1",
    featured: false,
  },
];

export const ProjectsShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="proyectos-showcase"
      className="relative py-24 md:py-32 scroll-mt-20"
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-card/60 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse-soft" />
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              delay: 0.1,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Proyectos{" "}
            <span className="text-brand-secondary">Realizados</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Cada proyecto empieza con un problema concreto y termina en un
            sistema funcional y estéticamente cuidado.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px] md:auto-rows-[260px]">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.className}`}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 40, scale: 0.95 }
              }
              transition={{
                delay: 0.3 + index * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.015,
                transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 },
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 group-hover:via-black/50 transition-all duration-500" />

              {/* Glassmorphism Border Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.08] group-hover:border-brand-secondary/30 transition-colors duration-500" />

              {/* Spotlight gradient on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-brand-secondary/10 via-transparent to-brand-primary/5" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3
                  className={`font-bold tracking-tight text-white mb-1.5 ${
                    project.featured
                      ? "text-2xl md:text-3xl"
                      : "text-xl"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-white/60 leading-relaxed ${
                    project.featured ? "text-sm md:text-base max-w-lg" : "text-sm line-clamp-2"
                  }`}
                >
                  {project.description}
                </p>

                {/* Link Indicator */}
                <div className="mt-3 flex items-center gap-1.5 text-brand-secondary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">Ver proyecto</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA to full projects page */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="/proyectos"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card/60 backdrop-blur-sm border border-foreground/[0.08] hover:border-brand-secondary/30 text-foreground/80 hover:text-brand-secondary transition-all duration-300 text-sm font-medium"
          >
            Ver todos los proyectos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
