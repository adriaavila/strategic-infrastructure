import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const allProjects = [
  {
    title: "Intrega",
    description:
      "Landing page para consultoría y transformación digital enfocada en el sector hospitalidad. Diseño moderno con foco en conversión y experiencia de usuario premium.",
    tags: ["React", "TypeScript", "UI/UX", "Consultoría"],
    githubUrl: "https://github.com/adriaavila/intrega-landing",
    liveUrl: "https://intrega-landing.vercel.app",
    image: "/projects/intrega.png",
    className: "md:col-span-2 md:row-span-2",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Almacen VC",
    description:
      "Sistema de control de almacén e inventario para la empresa Vistacampo. Dashboard completo con gestión de productos, reportes y analíticas.",
    tags: ["TypeScript", "Gestión", "Inventario", "Dashboard"],
    githubUrl: "https://github.com/adriaavila/almacen-vc",
    liveUrl: "https://almacen-vc.vercel.app",
    image: "/projects/almacen-vc.png",
    className: "md:col-span-1 md:row-span-1",
    accent: "from-blue-500/20 to-indigo-500/10",
  },
  {
    title: "Viaja Ven",
    description:
      "Plataforma de turismo gastronómico con diseño interactivo e intuitivo. Experiencia inmersiva para descubrir destinos culinarios.",
    tags: ["TypeScript", "Turismo", "Plataforma"],
    githubUrl: "https://github.com/adriaavila/viaja-ven",
    liveUrl: "https://viaja-ven.vercel.app",
    image: "/projects/viaja-ven.png",
    className: "md:col-span-1 md:row-span-1",
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    title: "Artist The Way",
    description:
      "Plataforma de E-commerce dedicada a exponer e impulsar artistas creativos. Tienda online con catálogo dinámico y checkout integrado.",
    tags: ["TypeScript", "E-commerce", "Artistas"],
    githubUrl: "https://github.com/adriaavila/artistheway",
    liveUrl: "https://artistheway.vercel.app",
    image: "/projects/artistheway.png",
    className: "md:col-span-1 md:row-span-2",
    accent: "from-purple-500/20 to-violet-500/10",
  },
  {
    title: "Creativv",
    description:
      "Sitio web elegante y minimalista para agencia de servicios creativos online. Branding sólido y copy orientado a conversión.",
    tags: ["TypeScript", "Agencia", "Landing"],
    githubUrl: "https://github.com/adriaavila/creativv",
    liveUrl: "https://creativv.vercel.app",
    image: "/projects/creativv.png",
    className: "md:col-span-1 md:row-span-1",
    accent: "from-brand-secondary/20 to-emerald-500/10",
  },
  {
    title: "Allok",
    description:
      "Landing page de agencia creativa integrando estéticas modernas y fluidas. Animaciones dinámicas y diseño de vanguardia.",
    tags: ["JavaScript", "Animaciones", "Landing"],
    githubUrl: "https://github.com/adriaavila/allok",
    liveUrl: "https://allok-nine.vercel.app",
    image: "/projects/allok.png",
    className: "md:col-span-1 md:row-span-1",
    accent: "from-rose-500/20 to-pink-500/10",
  },
];

const ProjectCard = ({
  project,
  index,
  isInView,
}: {
  project: (typeof allProjects)[0];
  index: number;
  isInView: boolean;
}) => {
  const isTall = project.className.includes("row-span-2");
  const isWide = project.className.includes("col-span-2");

  return (
    <motion.div
      className={`group relative rounded-2xl overflow-hidden ${project.className}`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.95 }
      }
      transition={{
        delay: 0.15 + index * 0.08,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 1.015,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
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

      {/* Multi-layered Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 group-hover:via-black/45 transition-all duration-500" />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-brand-secondary/25 transition-colors duration-500" />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-end">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, isTall || isWide ? 4 : 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          className={`font-bold tracking-tight text-white mb-2 ${
            isTall || isWide ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className={`text-white/55 leading-relaxed mb-4 ${
            isTall || isWide
              ? "text-sm md:text-base max-w-md"
              : "text-sm line-clamp-2"
          }`}
        >
          {project.description}
        </p>

        {/* Action Links */}
        <div className="flex items-center gap-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-brand-secondary text-sm font-medium hover:text-brand-secondary/80 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Ver en vivo
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/50 text-sm font-medium hover:text-white/80 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-3.5 h-3.5" />
              Código
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Proyectos = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <div className="relative min-h-screen bg-brand-dark">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 gradient-mesh opacity-50" />
          <div className="absolute inset-0 architectural-grid opacity-20" />

          <div className="relative z-10 container mx-auto px-6">
            {/* Back link */}
            <motion.a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-secondary transition-colors mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </motion.a>

            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-card/60 backdrop-blur-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse-soft" />
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Portfolio Completo
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 font-heading text-white">
                Nuestros{" "}
                <span className="text-brand-secondary">Proyectos</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Websites, dashboards, plataformas y herramientas digitales.
                Cada solución fue diseñada para resolver un problema real y
                generar resultados medibles.
              </p>
            </motion.div>
          </div>

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-dark to-transparent" />
        </section>

        {/* Projects Bento Grid */}
        <section
          className="relative pb-32 scroll-mt-20"
          ref={containerRef}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px] md:auto-rows-[300px]">
              {allProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* Stats / Social Proof (optional bottom section) */}
            <motion.div
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                delay: 0.8,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {[
                {
                  stat: "6+",
                  label: "Proyectos Entregados",
                },
                {
                  stat: "100%",
                  label: "Clientes Satisfechos",
                },
                {
                  stat: "<2 sem",
                  label: "Tiempo de Entrega Promedio",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center p-6 rounded-xl bg-card/30 border border-foreground/[0.06]"
                >
                  <div className="text-3xl font-bold text-brand-secondary mb-1 font-heading">
                    {item.stat}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Proyectos;
