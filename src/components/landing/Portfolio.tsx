import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Intrega",
    description: "Landing page para consultoría y transformación digital enfocada en el sector hospitalidad.",
    tags: ["TypeScript", "Consultoría", "UI/UX"],
    githubUrl: "https://github.com/adriaavila/intrega-landing",
    liveUrl: "https://intrega-landing.vercel.app",
    image: "/projects/intrega.png"
  },
  {
    title: "Almacen VC",
    description: "Sistema de control de almacén e inventario para la empresa Vistacampo.",
    tags: ["TypeScript", "Gestión", "Inventario"],
    githubUrl: "https://github.com/adriaavila/almacen-vc",
    liveUrl: "https://almacen-vc.vercel.app",
    image: "/projects/almacen-vc.png"
  },
  {
    title: "Viaja Ven",
    description: "Plataforma de turismo gastronómico con diseño interactivo e intuitivo.",
    tags: ["TypeScript", "Turismo", "Plataforma"],
    githubUrl: "https://github.com/adriaavila/viaja-ven",
    liveUrl: "https://viaja-ven.vercel.app",
    image: "/projects/viaja-ven.png"
  },
  {
    title: "Artist The Way",
    description: "Plataforma de E-commerce dedicada a exponer e impulsar artistas creativos.",
    tags: ["TypeScript", "E-commerce"],
    githubUrl: "https://github.com/adriaavila/artistheway",
    liveUrl: "https://artistheway.vercel.app",
    image: "/projects/artistheway.png"
  },
  {
    title: "Creativv",
    description: "Sitio web elegante y minimalista para agencia de servicios creativos online.",
    tags: ["TypeScript", "Agencia", "Landing"],
    githubUrl: "https://github.com/adriaavila/creativv",
    liveUrl: "https://creativv.vercel.app",
    image: "/projects/creativv.png"
  },
  {
    title: "Allok",
    description: "Landing page de agencia creativa integrando estéticas modernas y fluidas.",
    tags: ["JavaScript", "Animaciones"],
    githubUrl: "https://github.com/adriaavila/allok",
    liveUrl: "https://allok-nine.vercel.app",
    image: "/projects/allok.png"
  }
];

export const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="relative py-24 md:py-32 scroll-mt-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto" ref={containerRef}>
          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Proyectos Destacados
          </motion.h2>

          {/* Copy */}
          <motion.p
            className="text-muted-foreground text-center mb-6 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Cada proyecto empieza con un problema concreto y termina en un sistema funcional y estéticamente cuidado.
          </motion.p>
          <motion.p
            className="text-muted-foreground text-center mb-16 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Estas son algunas de mis soluciones recientes.
          </motion.p>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative bg-card hover:bg-card/80 border border-foreground/[0.08] hover:border-foreground/[0.15] rounded-2xl transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Image Section */}
                {project.image && (
                  <div className="h-52 overflow-hidden relative border-b border-foreground/[0.08] bg-muted/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                )}

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-medium tracking-tight group-hover:text-foreground/90 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 text-muted-foreground">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub Repo">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Sitio en vivo">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-foreground/[0.04] border border-foreground/[0.08] rounded-md text-foreground/80 flex items-center justify-center"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
