import { useMemo, useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ChevronRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts, blogTopics } from "@/data/blog";
import { useSEO } from "@/lib/seo";

const Blog = () => {
  const [activeTopic, setActiveTopic] = useState("Todos");
  useSEO({
    title: "Blog de automatización, IA y sistemas",
    description:
      "Artículos sobre IA, automatización, WhatsApp, CRM e infraestructura digital para negocios que quieren vender mejor y operar con claridad.",
    path: "/blog",
  });

  const filtered = useMemo(
    () =>
      activeTopic === "Todos"
        ? blogPosts
        : blogPosts.filter((p) => p.category === activeTopic),
    [activeTopic],
  );

  const featured = filtered[0];
  const gridPosts = filtered.slice(activeTopic === "Todos" ? 1 : 0);

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-primary/30 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
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
                Contenido pensado para equipos B2B que ya venden, pero necesitan mejor infraestructura comercial, automatización útil y sistemas que sostengan crecimiento sin caos operativo.
              </p>
            </motion.div>

            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start"
            >
              {blogTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(topic)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out border ${
                    activeTopic === topic
                      ? "bg-brand-primary border-brand-primary text-white shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                      : "bg-white/5 border-white/10 text-brand-slate hover:bg-white/10 hover:text-white hover:border-white/20 backdrop-blur-sm"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </motion.nav>
          </header>

          {featured && activeTopic === "Todos" && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md group hover:border-brand-primary/50 transition-all duration-500"
            >
              <div className="grid grid-cols-1 gap-0 relative">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary bg-brand-primary/10 border border-brand-primary/20 rounded-full backdrop-blur-md inline-block">
                      Destacado · {featured.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white transition-all duration-300">
                    <Link to={`/blog/${featured.slug}`} className="focus:outline-none hover:text-brand-primary">
                      {featured.title}
                    </Link>
                  </h2>
                  <p className="text-brand-slate text-lg leading-relaxed mb-8">{featured.excerpt}</p>

                  <div className="flex flex-wrap items-center gap-6 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center p-[2px]">
                        <div className="w-full h-full bg-brand-dark rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-brand-slate" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{featured.author}</p>
                        <div className="flex items-center gap-3 text-xs text-brand-slate mt-0.5">
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{featured.date}</span>
                          <span className="w-1 h-1 rounded-full bg-brand-slate/50" />
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{featured.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <Link to={`/blog/${featured.slug}`} className="ml-auto hidden sm:flex items-center text-brand-primary font-medium group/btn">
                      Leer artículo
                      <ChevronRight className="h-4 w-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {gridPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 backdrop-blur-md rounded-full inline-block">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-primary transition-colors duration-300 line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-brand-slate text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>

                    <div className="mt-auto pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <span className="text-xs font-semibold text-white">{post.author.charAt(0)}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-medium text-white">{post.author}</span>
                            <span className="text-[10px] text-brand-slate flex items-center gap-1">{post.date}</span>
                          </div>
                        </div>
                        <div className="text-[10px] font-medium text-brand-slate flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
                          <Clock className="h-3 w-3" /> {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
