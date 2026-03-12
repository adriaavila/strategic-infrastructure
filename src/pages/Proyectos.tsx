import { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Lock, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { projects } from "@/data/projects";

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
    <div className="relative min-h-screen bg-brand-dark">
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
              className="max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-card/60 backdrop-blur-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse-soft" />
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Portfolio completo
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 font-heading text-white">
                Proyectos con <span className="text-brand-secondary">contexto</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                No solo mostramos pantallas. Cada proyecto incluye el problema,
                el reto y la lógica detrás de la solución para que el valor del
                trabajo se entienda rápido.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
            >
              {[
                { value: `${projects.length}+`, label: "Casos publicados" },
                {
                  value: `${projects.filter((project) => project.liveUrl).length}+`,
                  label: "Demos / entornos con salida pública",
                },
                { value: "UX + estrategia", label: "Enfoque transversal" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/8 bg-card/30 backdrop-blur-sm p-5"
                >
                  <div className="text-2xl font-bold text-brand-secondary font-heading">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-dark to-transparent" />
        </section>

        <section className="pb-24 md:pb-32" ref={containerRef}>
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-heading">
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
                        : "bg-white/5 text-white/65 border-white/10 hover:border-brand-secondary/30 hover:text-brand-secondary"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {visibleProjects.map((project, index) => (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 36 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
                  transition={{
                    delay: 0.1 + index * 0.04,
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group rounded-[1.75rem] overflow-hidden border border-white/8 bg-card/30 backdrop-blur-sm hover:border-brand-secondary/25 transition-colors"
                >
                  <div className="grid lg:grid-cols-[1.05fr_0.95fr] h-full">
                    <div className="relative min-h-[280px] lg:min-h-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70 mix-blend-screen`} />
                      <div className="absolute left-5 right-5 bottom-5 flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/35 backdrop-blur-md border border-white/10 text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 md:p-7 flex flex-col">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold tracking-tight text-white font-heading">
                            {project.title}
                          </h3>
                          <p className="text-sm text-white/55 mt-2 leading-relaxed">
                            {project.shortDescription}
                          </p>
                        </div>
                        {project.visibility === "private" && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-200 text-[10px] uppercase tracking-wider shrink-0">
                            <Lock className="w-3 h-3" />
                            Privado
                          </span>
                        )}
                      </div>

                      <div className="rounded-2xl bg-white/[0.03] border border-white/6 p-4 mb-4">
                        <div className="text-[11px] uppercase tracking-[0.22em] text-brand-secondary/80 font-semibold mb-2">
                          El reto
                        </div>
                        <p className="text-sm text-white/72 leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>

                      <div className="mb-5">
                        <div className="text-[11px] uppercase tracking-[0.22em] text-brand-secondary/80 font-semibold mb-2">
                          Stack principal
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.slice(0, 5).map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1.5 rounded-xl bg-white/6 border border-white/10 text-xs text-white/78"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto flex flex-wrap items-center gap-3 pt-3 border-t border-white/8">
                        <Link
                          to={`/proyectos/${project.slug}`}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-secondary text-brand-dark text-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                          Leer caso
                        </Link>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-brand-secondary hover:text-brand-secondary/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Ver en vivo
                          </a>
                        )}
                        {project.githubUrl && project.visibility !== "private" && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white/80 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            Código
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
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
