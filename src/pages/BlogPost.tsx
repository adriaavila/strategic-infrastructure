import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { InternalLinksSection } from "@/components/seo/InternalLinksSection";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { getRelatedInternalLinksForBlogPost } from "@/data/internal-links";
import { useSEO } from "@/lib/seo";
import { ArrowRight, Calendar, ChevronLeft, Clock, User } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useSEO({
    title: post?.seoTitle || "Blog | Creativv",
    description: post?.seoDescription || "Ideas y sistemas para vender, automatizar y crecer mejor.",
    path: post ? `/blog/${post.slug}` : "/blog",
    type: "article",
  });

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const relatedInternalLinks = getRelatedInternalLinksForBlogPost(post, 4);

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-primary/30 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <article className="container mx-auto px-6 max-w-6xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-secondary transition-colors mb-10"
          >
            <ChevronLeft className="w-4 h-4" />
            Volver al blog
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end mb-12">
            <div className="max-w-4xl">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary bg-brand-primary/10 border border-brand-primary/20 rounded-full backdrop-blur-md inline-block">
                  {post.category}
                </span>
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/70 bg-white/5 border border-white/10 rounded-full backdrop-blur-md inline-block">
                  {post.primaryKeyword}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl text-balance">
                {post.title}
              </h1>
              <p className="text-lg md:text-xl text-brand-slate leading-relaxed max-w-3xl mb-8">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-5 text-sm text-brand-slate border-y border-white/10 py-5">
                <span className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{post.date}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</span>
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 h-fit">
              <div className="text-[11px] uppercase tracking-[0.24em] text-brand-secondary/85 font-semibold mb-3">
                Dirigido a
              </div>
              <p className="text-white/80 leading-relaxed mb-6">{post.audience}</p>

              <div className="text-[11px] uppercase tracking-[0.24em] text-brand-secondary/85 font-semibold mb-3">
                Qué resuelve
              </div>
              <p className="text-white/72 leading-relaxed">{post.outcome}</p>
            </aside>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_310px]">
            <div className="space-y-8">
              <section className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8">
                <div className="text-[11px] uppercase tracking-[0.24em] text-brand-secondary/85 font-semibold mb-4">
                  Contexto
                </div>
                <p className="text-base md:text-lg text-white/80 leading-8">{post.problem}</p>
              </section>

              {post.sections.map((section) => (
                <section key={section.heading} className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-white">{section.heading}</h2>
                  <div className="space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base md:text-lg text-white/80 leading-8">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              {post.bullets && (
                <section className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8">
                  <h2 className="text-2xl font-semibold mb-4">Puntos clave</h2>
                  <ul className="space-y-3 text-white/80">
                    {post.bullets.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-secondary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="rounded-3xl border border-brand-secondary/20 bg-gradient-to-br from-brand-primary/10 via-white/5 to-brand-secondary/10 p-7 md:p-8">
                <div className="text-[11px] uppercase tracking-[0.24em] text-brand-secondary font-semibold mb-3">
                  Siguiente paso
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{post.ctaTitle}</h2>
                <p className="text-base md:text-lg text-white/80 leading-8 mb-6">{post.ctaBody}</p>
                <Link
                  to="/brief?source=contacto"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-secondary text-brand-dark text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Solicitar proyecto
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </section>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 h-fit">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold mb-4">Resumen ejecutivo</h3>
                <div className="space-y-4 text-sm text-white/75">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-brand-secondary/85 font-semibold mb-1">Problema</div>
                    <p className="leading-relaxed">{post.problem}</p>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-brand-secondary/85 font-semibold mb-1">Resultado esperado</div>
                    <p className="leading-relaxed">{post.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold mb-4">Más artículos</h3>
                <div className="space-y-4">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/blog/${item.slug}`}
                      className="block rounded-2xl border border-white/8 bg-white/[0.03] p-4 hover:border-brand-secondary/30 transition-colors"
                    >
                      <div className="text-[10px] uppercase tracking-wider text-brand-secondary mb-2">{item.category}</div>
                      <div className="text-sm font-medium leading-relaxed text-white">{item.title}</div>
                      <div className="text-xs text-brand-slate mt-2">{item.date}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>

        <div className="container mx-auto px-6 max-w-6xl mt-14">
          <InternalLinksSection
            eyebrow="Rutas sugeridas"
            title="Páginas conectadas con este artículo"
            description="Estos enlaces siguen la intención principal del contenido y ayudan a mover la lectura editorial hacia hubs comerciales y páginas SEO más específicas."
            items={relatedInternalLinks}
            variant="dark"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
