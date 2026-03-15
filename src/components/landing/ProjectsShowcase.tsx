import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects, ProjectEntry } from "@/data/projects";
import { getTagColor } from "@/lib/project-utils";

const ProjectCard = ({ project, index, featured, isInView }: { 
  project: ProjectEntry; 
  index: number; 
  featured: boolean;
  isInView: boolean;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.gallery && project.gallery.length > 0 
    ? [project.image, ...project.gallery.filter(img => img !== project.image)]
    : [project.image];

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

  const className = featured ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1";

  return (
    <motion.div
      className={`group relative rounded-2xl overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
      <div className="absolute inset-0 rounded-2xl border border-white/[0.08] group-hover:border-brand-secondary/30 transition-colors duration-500" />

      {/* Slider Controls */}
      {images.length > 1 && (
        <>
          <div className="absolute top-1/2 -translate-y-1/2 left-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <button 
              onClick={prevImage}
              className="p-1.5 rounded-full bg-white text-brand-dark shadow-lg border border-white/20 hover:bg-brand-secondary hover:text-brand-dark transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <button 
              onClick={nextImage}
              className="p-1.5 rounded-full bg-white text-brand-dark shadow-lg border border-white/20 hover:bg-brand-secondary hover:text-brand-dark transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute top-4 right-4 flex gap-1 z-20">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? "bg-brand-secondary w-4" : "bg-white/30"}`}
              />
            ))}
          </div>
        </>
      )}

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, featured ? 4 : 3).map((tag) => (
            <span key={tag} className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border rounded-full ${getTagColor(tag)}`}>
              {tag}
            </span>
          ))}
        </div>
        <h3 className={`font-bold tracking-tight text-white mb-1.5 ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className={`text-white/70 leading-relaxed ${featured ? "text-sm md:text-base max-w-lg" : "text-sm line-clamp-2"}`}>
          {project.shortDescription}
        </p>
        
        <div className="mt-5 flex items-center gap-4">
          <Link 
            to={`/proyectos/${project.slug}`} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs md:text-sm font-medium transition-all"
          >
            Leer caso
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-secondary text-brand-dark hover:opacity-90 text-xs md:text-sm font-bold transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Ver proyecto
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section id="casos" className="relative py-24 md:py-32 scroll-mt-20" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Casos de éxito
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Proyectos donde el foco estuvo en conversión, eficiencia y construcción de sistemas digitales útiles para el negocio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[340px] md:auto-rows-[300px]">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              index={index} 
              featured={index === 0}
              isInView={isInView}
            />
          ))}
        </div>

        <motion.div className="mt-12 text-center" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
          <Link to="/proyectos" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card/60 backdrop-blur-sm border border-foreground/[0.08] hover:border-brand-secondary/30 text-foreground/80 hover:text-brand-secondary transition-all duration-300 text-sm font-medium">
            Ver todos los proyectos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
