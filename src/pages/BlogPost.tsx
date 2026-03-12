import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { useSEO } from "@/lib/seo";
import { Calendar, ChevronLeft, Clock, User } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  useSEO({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    type: "article",
  });

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-primary/30 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <article className="container mx-auto px-6 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-secondary transition-colors mb-10">
            <ChevronLeft className="w-4 h-4" />
            Volver al blog
          </Link>

          <div className="mb-8">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary bg-brand-primary/10 border border-brand-primary/20 rounded-full backdrop-blur-md inline-block">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-3xl">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-brand-slate leading-relaxed max-w-3xl mb-10">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-brand-slate border-y border-white/10 py-5 mb-12">
            <span className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
            <div className="space-y-8">
              {post.content.map((paragraph) => (
                <p key={paragraph} className="text-base md:text-lg text-white/80 leading-8">
                  {paragraph}
                </p>
              ))}

              {post.bullets && (
                <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                  <h2 className="text-2xl font-semibold mb-4">Puntos clave</h2>
                  <ul className="space-y-3 text-white/80">
                    {post.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-secondary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <aside className="lg:sticky lg:top-28 h-fit rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold mb-4">Más artículos</h3>
              <div className="space-y-4">
                {related.map((item) => (
                  <Link key={item.slug} to={`/blog/${item.slug}`} className="block rounded-2xl border border-white/8 bg-white/[0.03] p-4 hover:border-brand-secondary/30 transition-colors">
                    <div className="text-[10px] uppercase tracking-wider text-brand-secondary mb-2">{item.category}</div>
                    <div className="text-sm font-medium leading-relaxed text-white">{item.title}</div>
                    <div className="text-xs text-brand-slate mt-2">{item.date}</div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
