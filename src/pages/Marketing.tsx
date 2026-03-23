import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { InternalLinksSection } from "@/components/seo/InternalLinksSection";
import { useSEO } from "@/lib/seo";
import { ArrowRight, Globe, ShoppingCart, LineChart } from "lucide-react";
import { marketingInternalLinks } from "@/data/internal-links";

const Marketing = () => {
  useSEO({
    title: "Presencia digital",
    description: "Webs, ecommerce y activos digitales pensados para convertir, posicionar mejor la marca y sostener crecimiento comercial.",
    path: "/marketing",
  });

  return (
    <div className="relative min-h-screen bg-brand-dark text-white">
      <div className="noise-overlay" />
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="max-w-3xl mb-14">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-5">Presencia digital construida para convertir</h1>
            <p className="text-lg text-brand-slate leading-relaxed">
              Webs, landing pages y ecommerce diseñados para presentar mejor la propuesta del negocio, captar oportunidades y acompañar el crecimiento comercial.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <Globe className="w-8 h-8 text-brand-secondary mb-4" />
              <h2 className="text-xl font-semibold mb-3">Webs corporativas</h2>
              <p className="text-brand-slate">Sitios claros, sólidos y bien estructurados para posicionar mejor la marca y explicar mejor la oferta.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <ShoppingCart className="w-8 h-8 text-brand-secondary mb-4" />
              <h2 className="text-xl font-semibold mb-3">Ecommerce</h2>
              <p className="text-brand-slate">Tiendas digitales con mejor experiencia, estructura de compra clara y foco en conversión.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <LineChart className="w-8 h-8 text-brand-secondary mb-4" />
              <h2 className="text-xl font-semibold mb-3">Embudo y captación</h2>
              <p className="text-brand-slate">Activos digitales conectados con campañas, formularios y seguimiento comercial para convertir mejor.</p>
            </div>
          </div>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 text-center">
            <h2 className="text-3xl font-semibold mb-4">¿Quieres mejorar tu presencia digital?</h2>
            <p className="text-brand-slate max-w-2xl mx-auto mb-8">
              Si tu web actual no explica bien tu propuesta o no ayuda a convertir, puedo ayudarte a rediseñar esa capa del sistema.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="hero">
                <a href="/brief?source=presencia-digital-page">
                  Solicitar proyecto
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/marketing/contenidos">
                  Ver biblioteca de contenidos
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-14">
            <InternalLinksSection
              eyebrow="Entradas para captación"
              title="Páginas relacionadas para atraer y convertir mejor"
              description="Estas rutas conectan presencia digital con generación de demanda, automatización de ventas y páginas específicas para sectores donde la captación necesita más estructura."
              items={marketingInternalLinks}
              variant="dark"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Marketing;
