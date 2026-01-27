import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Cómo la IA está transformando la gestión de ingresos",
    excerpt:
      "Descubre las últimas tendencias en automatización y cómo pueden impulsar tu negocio hacia el futuro.",
    author: "Adrian Avila",
    date: "5 Ene 2026",
    readTime: "5 min",
    category: "IA & Automatización",
  },
  {
    id: 2,
    title: "5 integraciones esenciales para tu stack de ventas",
    excerpt:
      "Las herramientas que todo equipo de ventas necesita para maximizar su productividad.",
    author: "Adrian Avila",
    date: "9 Ene 2026",
    readTime: "7 min",
    category: "Integraciones",
  },
  {
    id: 3,
    title: "Guía completa de WhatsApp Business API",
    excerpt:
      "Todo lo que necesitas saber para implementar WhatsApp en tu estrategia de comunicación.",
    author: "Adrian Avila",
    date: "14 Ene 2026",
    readTime: "10 min",
    category: "Guías",
  },
  {
    id: 4,
    title: "El futuro del CRM: Tendencias 2025",
    excerpt:
      "Prepara tu negocio para las nuevas tendencias en gestión de relaciones con clientes.",
    author: "Adrian Avila",
    date: "18 Ene 2026",
    readTime: "6 min",
    category: "Tendencias",
  },
  {
    id: 5,
    title: "Automatiza tu proceso de facturación",
    excerpt:
      "Reduce errores y ahorra tiempo con flujos de facturación inteligentes.",
    author: "Adrian Avila",
    date: "22 Ene 2026",
    readTime: "4 min",
    category: "Automatización",
  },
  {
    id: 6,
    title: "Métricas clave para medir el éxito de tu equipo",
    excerpt:
      "Los KPIs que realmente importan para evaluar el rendimiento comercial.",
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
    <div className="min-h-screen bg-brand-dark">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-white">
              Blog
            </h1>
            <p className="text-brand-slate mb-8">
              Artículos, guías y tendencias sobre automatización, IA y gestión de
              ingresos.
            </p>
            {/* Topic filters */}
            <nav className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
              {TOPICS.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(topic)}
                  className={
                    activeTopic === topic
                      ? "text-white font-medium"
                      : "text-brand-slate hover:text-white transition-colors"
                  }
                >
                  {topic.toLowerCase()}
                </button>
              ))}
            </nav>
          </header>

          {/* Post list */}
          <ul className="divide-y divide-border [&>li:first-child>article]:pt-0">
            {filtered.map((post) => (
              <li key={post.id}>
                <article className="py-8">
                  <a
                    href="#"
                    className="group block"
                  >
                    <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-brand-slate text-sm leading-relaxed mb-3">
                      {post.excerpt}
                    </p>
                    <p className="text-xs text-brand-slate">
                      {post.author} · {post.category} · {post.date}
                    </p>
                  </a>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
