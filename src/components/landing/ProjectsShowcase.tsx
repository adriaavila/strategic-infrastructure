import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects } from "@/data/projects";

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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Proyectos <span className="text-brand-secondary">Realizados</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px] md:auto-rows-[260px]">
          {featuredProjects.map((project, index) => {
            const className = index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1";
            const featured = index === 0;

            return (
              <motion.div
                key={project.slug}
                className={`group relative rounded-2xl overflow-hidden ${className}`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
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
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 group-hover:via-black/50 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 rounded-2xl border border-white/[0.08] group-hover:border-brand-secondary/30 transition-colors duration-500" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, featured ? 4 : 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className={`font-bold tracking-tight text-white mb-1.5 ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
                    {project.title}
                  </h3>
                  <p className={`text-white/60 leading-relaxed ${featured ? "text-sm md:text-base max-w-lg" : "text-sm line-clamp-2"}`}>
                    {project.shortDescription}
                  </p>

                  <div className="mt-3 flex items-center gap-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-brand-secondary text-xs md:text-sm font-medium hover:text-brand-secondary/80 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Ver proyecto
                      </a>
                    )}
                    <Link
                      to={`/proyectos/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-white/65 text-xs md:text-sm font-medium hover:text-white transition-colors"
                    >
                      Leer caso
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/proyectos"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card/60 backdrop-blur-sm border border-foreground/[0.08] hover:border-brand-secondary/30 text-foreground/80 hover:text-brand-secondary transition-all duration-300 text-sm font-medium"
          >
            Ver todos los proyectos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
