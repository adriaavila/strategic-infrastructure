import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Compass, MapPinned } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { InternalLinksSection } from "@/components/seo/InternalLinksSection";
import { blogPosts } from "@/data/blog";
import {
  allPseoLinks,
  sitemapCityLinks,
  sitemapIndustryLinks,
  solutionHubLinks,
  topLevelSiteLinks,
  type InternalLinkItem,
} from "@/data/internal-links";
import { useSEO } from "@/lib/seo";

const recentBlogLinks: InternalLinkItem[] = [...blogPosts]
  .sort((left, right) => right.isoDate.localeCompare(left.isoDate))
  .slice(0, 6)
  .map((post) => ({
    title: post.title,
    description: post.excerpt,
    href: `/blog/${post.slug}`,
    eyebrow: post.category,
  }));

export default function SiteMapPage() {
  useSEO({
    title: "Mapa del sitio",
    description:
      "Explora el mapa del sitio con páginas core, hubs de solución, directorios por industria, páginas por ciudad y artículos del blog.",
    path: "/mapa-del-sitio",
  });

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf7f1] text-slate-950">
      <div className="noise-overlay opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.88),transparent_24%),radial-gradient(circle_at_85%_0%,rgba(226,232,240,0.58),transparent_20%),linear-gradient(180deg,#faf7f1_0%,#f8fafc_46%,#f3f4f6_100%)]" />

      <Navbar />

      <main className="relative z-10 pt-28 pb-24">
        <section className="mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/88 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(241,245,249,0.9),rgba(255,255,255,0.76),rgba(220,252,231,0.5))]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                <MapPinned className="h-4 w-4" />
                HTML sitemap
              </div>
              <h1 className="mt-6 max-w-4xl font-heading text-4xl tracking-[-0.04em] text-slate-950 md:text-6xl">
                Mapa del sitio y hubs clave
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                Esta página conecta la arquitectura principal del sitio: páginas comerciales, hubs de solución, rutas por industria, páginas locales y contenido editorial.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" variant="hero">
                  <a href="#mapa-secciones">
                    Explorar mapa
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/industrias">
                    Ir a industrias
                    <Compass className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        <div id="mapa-secciones" className="mx-auto mt-20 max-w-6xl space-y-14 px-6">
          <InternalLinksSection
            eyebrow="Core"
            title="Páginas principales"
            description="Las entradas más importantes del sitio para usuarios y motores de búsqueda."
            items={topLevelSiteLinks}
            variant="light"
          />

          <InternalLinksSection
            eyebrow="Soluciones"
            title="Hubs de solución"
            description="Páginas base del cluster pSEO que agrupan la navegación por intención comercial."
            items={solutionHubLinks}
            variant="light"
          />

          <InternalLinksSection
            eyebrow="Industrias"
            title="Entradas por vertical"
            description="Páginas representativas por industria para seguir el mapa del sitio desde una necesidad más específica."
            items={sitemapIndustryLinks}
            variant="light"
          />

          <InternalLinksSection
            eyebrow="Ciudades"
            title="Páginas locales"
            description="Landings locales para WhatsApp Automation agrupadas por mercado."
            items={sitemapCityLinks}
            variant="light"
          />

          <InternalLinksSection
            eyebrow="Blog"
            title="Contenido editorial reciente"
            description="Artículos recientes que ahora también fortalecen el enlazado interno hacia los hubs comerciales."
            items={recentBlogLinks}
            variant="light"
          />

          <section className="rounded-[34px] border border-slate-200 bg-white/60 p-8 md:p-10">
            <div className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Archivo completo</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Directorio de todas las rutas pSEO</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Lista exhaustiva de todas las combinaciones de industria, solución y localización para asegurar la indexación completa del cluster.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {allPseoLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
