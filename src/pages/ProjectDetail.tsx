import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Lock } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { getProjectBySlug } from "@/data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  if (!project) {
    return <Navigate to="/proyectos" replace />;
  }

  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : [];

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="noise-overlay" />
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-14 md:pt-40 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-50" />
          <div className="absolute inset-0 architectural-grid opacity-20" />

          <div className="relative z-10 container mx-auto px-6">
            <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
              <Link
                to="/proyectos"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-secondary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver a proyectos
              </Link>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              {/* Left – Metadata */}
              <motion.div
                {...fadeUp}
                transition={{ delay: 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-3xl"
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-card/60 backdrop-blur-sm text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse-soft" />
                    Case study
                  </span>
                  {project.visibility === "private" && (
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-600 dark:text-amber-200 text-xs uppercase tracking-wider">
                      <Lock className="w-3.5 h-3.5" />
                      Repo privado
                    </span>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 font-heading">
                  {project.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-foreground/[0.07] border border-foreground/10 text-foreground/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-secondary text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-brand-secondary/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver proyecto
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Right – Hero Image */}
              <motion.div
                {...fadeUp}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative lg:mt-0 mt-12"
              >
                <div className={`absolute -inset-6 rounded-[2rem] bg-gradient-to-br ${project.accent} blur-3xl opacity-30 dark:opacity-60`} />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-muted shadow-2xl shadow-foreground/10 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/[0.08] to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* ── Gallery ── */}
        {gallery.length > 0 && (
          <section className="py-20 md:py-28 overflow-hidden bg-foreground/[0.02] border-y border-foreground/[0.05]">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 md:mb-16"
              >
                <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">Interfaz y Detalles</h2>
                <div className="w-12 h-1 bg-brand-secondary rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {gallery.map((img, index) => (
                  <motion.div
                    key={img}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    onClick={() => setGalleryIndex(index)}
                    className={`relative overflow-hidden rounded-2xl border border-foreground/[0.08] bg-muted group shadow-md hover:shadow-xl transition-shadow duration-300 cursor-zoom-in ${
                      index === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[16/10]"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/[0.04] transition-colors duration-300 pointer-events-none" />
                    {/* Image number badge */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-foreground/10 text-muted-foreground">
                        {index + 1}/{gallery.length}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Lightbox ── */}
        <AnimatePresence>
          {galleryIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setGalleryIndex(null)}
            >
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={gallery[galleryIndex]}
                  alt={`${project.title} screenshot ${galleryIndex + 1}`}
                  className="w-full h-auto object-contain"
                />
                {/* Prev / Next */}
                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => setGalleryIndex((prev) => ((prev ?? 0) - 1 + gallery.length) % gallery.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setGalleryIndex((prev) => ((prev ?? 0) + 1) % gallery.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => setGalleryIndex(null)}
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all text-lg leading-none"
                  >
                    ×
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Content Cards ── */}
        <section className="pb-24 md:pb-32 pt-16">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                {...fadeUp}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="rounded-3xl border border-foreground/[0.07] bg-card/60 backdrop-blur-sm p-7 md:p-8"
              >
                <span className="text-xs uppercase tracking-[0.25em] text-brand-secondary font-semibold">
                  El reto
                </span>
                <p className="mt-4 text-base leading-relaxed text-foreground/80">{project.challenge}</p>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="rounded-3xl border border-foreground/[0.07] bg-card/60 backdrop-blur-sm p-7 md:p-8"
              >
                <span className="text-xs uppercase tracking-[0.25em] text-brand-secondary font-semibold">
                  Qué aporta
                </span>
                <ul className="mt-4 space-y-3 text-foreground/80">
                  {project.outcomes.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-base">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-secondary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] mt-6">
              <motion.div
                {...fadeUp}
                transition={{ delay: 0.3, duration: 0.55 }}
                className="rounded-3xl border border-foreground/[0.07] bg-card/60 backdrop-blur-sm p-7 md:p-8"
              >
                <span className="text-xs uppercase tracking-[0.25em] text-brand-secondary font-semibold">
                  Cómo se resolvió
                </span>
                <ul className="mt-5 space-y-4 text-foreground/80">
                  {project.solution.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-base">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-secondary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ delay: 0.4, duration: 0.55 }}
                className="rounded-3xl border border-foreground/[0.07] bg-card/60 backdrop-blur-sm p-7 md:p-8"
              >
                <span className="text-xs uppercase tracking-[0.25em] text-brand-secondary font-semibold">
                  Stack
                </span>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-2 rounded-xl bg-foreground/[0.05] border border-foreground/10 text-sm text-foreground/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
