import { useMemo, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Github, Lock, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { projects, ProjectEntry } from "@/data/projects";
import { getTagColor } from "@/lib/project-utils";


const ProjectCard = ({ project, index, isInView }: { project: ProjectEntry; index: number; isInView: boolean }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = useMemo(() => {
    const gallery = project.gallery || [];
    return [project.image, ...gallery.filter(img => img !== project.image)];
  }, [project.image, project.gallery]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{
        delay: 0.1 + index * 0.04,
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group rounded-[1.75rem] overflow-hidden border border-foreground/[0.08] bg-card hover:border-brand-secondary/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-secondary/5"
    >
      <div className="flex flex-col h-full">
        <div className="relative aspect-[16/10] w-full overflow-hidden shrink-0 bg-muted">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              loading="lazy"
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-40 mix-blend-screen pointer-events-none`} />

          {/* Slider Controls */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black z-10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black z-10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentImageIndex(i);
                    }}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i === currentImageIndex ? "bg-brand-secondary w-4" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="absolute left-5 right-5 bottom-8 flex flex-wrap gap-2 pointer-events-none">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getTagColor(tag)} backdrop-blur-md shadow-sm`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-7 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold tracking-tight font-heading group-hover:text-brand-secondary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2">
                {project.shortDescription}
              </p>
            </div>
            {project.visibility === "private" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-500 dark:text-amber-200 text-[10px] uppercase tracking-wider shrink-0">
                <Lock className="w-3 h-3" />
                Privado
              </span>
            )}
          </div>

          <div className="rounded-2xl bg-foreground/[0.03] border border-foreground/[0.05] p-4 mb-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand-secondary/80 font-bold mb-2">
              El reto
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3">
              {project.challenge}
            </p>
          </div>

          <div className="mb-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand-secondary/80 font-bold mb-3">
              Stack principal
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 5).map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-lg bg-foreground/[0.03] border border-foreground/5 text-[11px] font-medium text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-foreground/[0.05]">
            <Link
              to={`/proyectos/${project.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-secondary text-brand-dark text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Leer caso
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-brand-secondary hover:underline transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Ver en vivo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const allTags = [
  "Todos",
  ...Array.from(new Set(projects.flatMap((project) => project.tags))).sort(),
];

const Proyectos = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [activeTag, setActiveTag] = useState("Todos");

  const visibleProjects = useMemo(() => {
    if (activeTag === "Todos") return projects;
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="relative min-h-screen bg-background transition-colors duration-300">
      <div className="noise-overlay" />
      <Navbar />

      <main>
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-50" />
          <div className="absolute inset-0 architectural-grid opacity-20" />

          <div className="relative z-10 container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-secondary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Link>
            </motion.div>

            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 font-heading">
                Proyectos con <span className="text-brand-secondary">propósito</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Una selección de soluciones digitales enfocadas en resolver retos reales 
                de negocio mediante tecnología, diseño y estrategia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap gap-8 mt-12 border-t border-foreground/5 pt-12"
            >
              {[
                { value: `${projects.length}+`, label: "Casos publicados" },
                {
                  value: `${projects.filter((project) => project.liveUrl).length}+`,
                  label: "Demos públicas",
                },
                { value: "Full Stack", label: "Capacidad técnica" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <div className="text-3xl font-bold text-brand-secondary font-heading">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
        </section>

        <section className="pb-24 md:pb-32" ref={containerRef}>
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading">
                  Biblioteca de proyectos
                </h2>
                <p className="text-muted-foreground mt-2 max-w-2xl">
                  Unifiqué las entradas para que la UX sea más clara: misma estructura,
                  mejor escaneo visual y acceso directo a cada caso.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/40 px-4 py-2 text-sm text-muted-foreground">
                <Search className="w-4 h-4" />
                Filtra por categoría
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {allTags.map((tag) => {
                const active = tag === activeTag;
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActiveTag(tag)}
                    className={`px-4 py-2 rounded-full border text-xs md:text-sm transition-colors ${
                      active
                        ? "bg-brand-secondary text-brand-dark border-brand-secondary"
                        : "bg-foreground/5 text-muted-foreground border-foreground/10 hover:border-brand-secondary/30 hover:text-brand-secondary"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} isInView={isInView} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Proyectos;
