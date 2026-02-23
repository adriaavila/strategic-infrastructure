import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ChevronRight, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Cómo la IA está transformando la gestión de ingresos",
    excerpt:
      "Descubre las últimas tendencias en automatización y cómo pueden impulsar tu negocio hacia el futuro. Exploramos casos de uso reales y estrategias de implementación.",
    author: "Adrian Avila",
    date: "5 Ene 2026",
    readTime: "5 min",
    category: "IA & Automatización",
  },
  {
    id: 2,
    title: "5 integraciones esenciales para tu stack de ventas",
    excerpt:
      "Las herramientas que todo equipo de ventas necesita para maximizar su productividad y cerrar más acuerdos en menos tiempo.",
    author: "Adrian Avila",
    date: "9 Ene 2026",
    readTime: "7 min",
    category: "Integraciones",
  },
  {
    id: 3,
    title: "Guía completa de WhatsApp Business API",
    excerpt:
      "Todo lo que necesitas saber para implementar WhatsApp en tu estrategia de comunicación omnicanal y mejorar la retención de clientes.",
    author: "Adrian Avila",
    date: "14 Ene 2026",
    readTime: "10 min",
    category: "Guías",
  },
  {
    id: 4,
    title: "El futuro del CRM: Tendencias 2025",
    excerpt:
      "Prepara tu negocio para las nuevas tendencias en gestión de relaciones con clientes. Desde IA predictiva hasta hiper-personalización.",
    author: "Adrian Avila",
    date: "18 Ene 2026",
    readTime: "6 min",
    category: "Tendencias",
  },
  {
    id: 5,
    title: "Automatiza tu proceso de facturación",
    excerpt:
      "Reduce errores y ahorra tiempo con flujos de facturación inteligentes. Una guía paso a paso para modernizar tus finanzas.",
    author: "Adrian Avila",
    date: "22 Ene 2026",
    readTime: "4 min",
    category: "Automatización",
  },
  {
    id: 6,
    title: "Métricas clave para medir el éxito de tu equipo",
    excerpt:
      "Los KPIs que realmente importan para evaluar el rendimiento comercial y tomar decisiones basadas en datos concretos.",
    author: "Adrian Avila",
    date: "27 Ene 2026",
    readTime: "8 min",
    category: "Métricas",
  },
];

const TOPICS = [
  "Todos",
  "IA & Automatización",
  "Integraciones",
  "Guías",
  "Tendencias",
  "Automatización",
  "Métricas",
];

const Blog = () => {
  const [activeTopic, setActiveTopic] = useState("Todos");
  const filtered =
    activeTopic === "Todos"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeTopic);

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-primary/30 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header Section */}
          <header className="mb-16 text-center md:text-left max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                  Insights &
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                  Tendencias
                </span>
              </h1>
              <p className="text-lg md:text-xl text-brand-slate mb-10 leading-relaxed">
                Descubre estrategias accionables, guías profundas y las últimas novedades sobre automatización de procesos e inteligencia artificial para escalar tu negocio B2B.
              </p>
            </motion.div>

            {/* Topic filters with glassmorphism */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start"
            >
              {TOPICS.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(topic)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out border ${activeTopic === topic
                    ? "bg-brand-primary border-brand-primary text-white shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                    : "bg-white/5 border-white/10 text-brand-slate hover:bg-white/10 hover:text-white hover:border-white/20 backdrop-blur-sm"
                    }`}
                >
                  {topic}
                </button>
              ))}
            </motion.nav>
          </header>

          {/* Featured Post (First item if 'Todos' is selected) */}
          {activeTopic === "Todos" && filtered.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md group hover:border-brand-primary/50 transition-all duration-500"
            >
              <div className="grid grid-cols-1 gap-0 relative">
                {/* Decorative glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary bg-brand-primary/10 border border-brand-primary/20 rounded-full backdrop-blur-md inline-block">
                      Destacado · {filtered[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0 z-10" />
                      {filtered[0].title}
                    </a>
                  </h2>
                  <p className="text-brand-slate text-lg leading-relaxed mb-8">
                    {filtered[0].excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center p-[2px]">
                        <div className="w-full h-full bg-brand-dark rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-brand-slate" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{filtered[0].author}</p>
                        <div className="flex items-center gap-3 text-xs text-brand-slate mt-0.5">
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{filtered[0].date}</span>
                          <span className="w-1 h-1 rounded-full bg-brand-slate/50" />
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{filtered[0].readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto hidden sm:flex items-center text-brand-primary font-medium group/btn">
                      Leer artículo
                      <ChevronRight className="h-4 w-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid setup */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.slice(activeTopic === "Todos" ? 1 : 0).map((post, index) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, duration: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <a href="#" className="absolute inset-0 z-10 focus:outline-none">
                    <span className="sr-only">Leer {post.title}</span>
                  </a>

                  {/* Content Container */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 backdrop-blur-md rounded-full inline-block">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-brand-slate text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Footer / Meta */}
                    <div className="mt-auto pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <span className="text-xs font-semibold text-white">
                              {post.author.charAt(0)}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-medium text-white">{post.author}</span>
                            <span className="text-[10px] text-brand-slate flex items-center gap-1">
                              {post.date}
                            </span>
                          </div>
                        </div>
                        <div className="text-[10px] font-medium text-brand-slate flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
                          <Clock className="h-3 w-3" /> {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtle hover gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-brand-slate">
              <p className="text-xl">No se encontraron artículos en esta categoría.</p>
              <button
                onClick={() => setActiveTopic("Todos")}
                className="mt-4 text-brand-primary hover:text-white transition-colors"
              >
                Ver todos los artículos
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
