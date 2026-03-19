import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { SolutionClusters } from "@/components/landing/SolutionClusters";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { ArrowRight, Bot, Workflow, MessageSquare } from "lucide-react";

const Automatizaciones = () => {
  useSEO({
    title: "Automatización con IA",
    description: "Automatización con IA para negocios que quieren responder más rápido, reducir trabajo manual y operar con más eficiencia.",
    path: "/automatizaciones",
  });

  return (
    <div className="relative min-h-screen bg-brand-dark text-white">
      <div className="noise-overlay" />
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="max-w-3xl mb-14">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-5">Automatización con IA para operaciones más eficientes</h1>
            <p className="text-lg text-brand-slate leading-relaxed">
              Diseño flujos, integraciones y asistentes que ayudan a responder más rápido, reducir tareas manuales y dar más estructura a la operación diaria.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <Bot className="w-8 h-8 text-brand-secondary mb-4" />
              <h2 className="text-xl font-semibold mb-3">Atención y ventas</h2>
              <p className="text-brand-slate">Automatizaciones para responder mejor, capturar leads y mover conversaciones hacia una acción clara.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <Workflow className="w-8 h-8 text-brand-secondary mb-4" />
              <h2 className="text-xl font-semibold mb-3">Procesos internos</h2>
              <p className="text-brand-slate">Flujos que conectan herramientas, eliminan pasos manuales y mejoran la consistencia operativa.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <MessageSquare className="w-8 h-8 text-brand-secondary mb-4" />
              <h2 className="text-xl font-semibold mb-3">Canales conectados</h2>
              <p className="text-brand-slate">Integraciones con WhatsApp, formularios, CRMs y sistemas existentes para operar con menos fricción.</p>
            </div>
          </div>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 text-center">
            <h2 className="text-3xl font-semibold mb-4">¿Quieres automatizar una parte crítica de tu negocio?</h2>
            <p className="text-brand-slate max-w-2xl mx-auto mb-8">
              Cuéntame qué proceso consume más tiempo hoy y te diré si conviene resolverlo con IA, automatización o una combinación de ambas.
            </p>
            <Button asChild size="lg" variant="hero">
              <a href="/brief?source=automatizaciones-page">
                Analizar mi negocio
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </section>

        <SolutionClusters
          title="Rutas internas hacia las soluciones que queremos posicionar"
          description="Estas entradas conectan la pagina de automatizacion con clusters de alta intencion comercial para que el descubrimiento no dependa solo del sitemap ni de enlaces aislados."
        />
      </main>

      <Footer />
    </div>
  );
};

export default Automatizaciones;
