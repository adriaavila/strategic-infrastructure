import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Cómo la IA está transformando la gestión de ingresos",
    excerpt: "Descubre las últimas tendencias en automatización y cómo pueden impulsar tu negocio hacia el futuro.",
    author: "María García",
    date: "28 Dic 2024",
    readTime: "5 min",
    category: "IA & Automatización",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "5 integraciones esenciales para tu stack de ventas",
    excerpt: "Las herramientas que todo equipo de ventas necesita para maximizar su productividad.",
    author: "Carlos López",
    date: "25 Dic 2024",
    readTime: "7 min",
    category: "Integraciones",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Guía completa de WhatsApp Business API",
    excerpt: "Todo lo que necesitas saber para implementar WhatsApp en tu estrategia de comunicación.",
    author: "Ana Martínez",
    date: "22 Dic 2024",
    readTime: "10 min",
    category: "Guías",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "El futuro del CRM: Tendencias 2025",
    excerpt: "Prepara tu negocio para las nuevas tendencias en gestión de relaciones con clientes.",
    author: "Roberto Sánchez",
    date: "20 Dic 2024",
    readTime: "6 min",
    category: "Tendencias",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Automatiza tu proceso de facturación",
    excerpt: "Reduce errores y ahorra tiempo con flujos de facturación inteligentes.",
    author: "Laura Torres",
    date: "18 Dic 2024",
    readTime: "4 min",
    category: "Automatización",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Métricas clave para medir el éxito de tu equipo",
    excerpt: "Los KPIs que realmente importan para evaluar el rendimiento comercial.",
    author: "Diego Fernández",
    date: "15 Dic 2024",
    readTime: "8 min",
    category: "Métricas",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ideas y recursos para <span className="text-primary">crecer</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Artículos, guías y tendencias sobre automatización, IA y gestión de ingresos.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <article className="group relative rounded-3xl overflow-hidden bg-card border border-border/50">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4 w-fit">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Leer artículo <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article 
                key={post.id}
                className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/20 transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
