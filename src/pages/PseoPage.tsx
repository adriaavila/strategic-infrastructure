import { useParams, Link } from "react-router-dom";
import { getPseoBySlug } from "@/data/pseo";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { useSEO } from "@/lib/seo";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import NotFound from "./NotFound";
import { RelatedSolutions } from "@/components/landing/RelatedSolutions";

export default function PseoPage() {
  const { slug } = useParams();
  const data = slug ? getPseoBySlug(slug) : undefined;

  useSEO({
    title: data?.title || "Servicios Creativos",
    description: data?.description || "Automatización y optimización para negocios",
    path: `/${slug}`,
  });

  if (!data) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] light:bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-6 sm:px-12 max-w-5xl mx-auto w-full text-white light:text-slate-900">
        <Link to="/" className="inline-flex items-center text-[#71717a] light:text-slate-500 hover:text-white light:hover:text-slate-900 transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a Servicios Creativos
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/70 light:from-slate-900 light:via-slate-800 light:to-slate-600">
            {data.h1}
          </h1>

          <p className="text-xl md:text-2xl text-[#a1a1aa] light:text-slate-600 mb-12 max-w-3xl leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_300px] gap-12 mt-12">
          {/* Main Content Area */}
          <div className="space-y-8">
            {data.paragraphs.map((p, i) => (
              <p key={i} className="text-[#d4d4d8] light:text-slate-600 leading-relaxed text-lg">
                {p}
              </p>
            ))}

            {data.h2s && data.h2s.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-semibold mb-6 text-white light:text-slate-900">Beneficios clave</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {data.h2s.map((h2, i) => (
                    <div key={i} className="bg-[#18181b] light:bg-white border border-[#27272a] light:border-slate-200 rounded-xl p-6 flex items-start space-x-4">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0" />
                      <span className="text-[#e4e4e7] light:text-slate-700 font-medium">{h2}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA Area */}
          <div className="md:border-l md:border-[#27272a] md:light:border-slate-200 md:pl-12">
            <div className="sticky top-32 bg-gradient-to-b from-[#18181b] to-[#121214] border border-[#27272a] light:from-white light:to-slate-50 light:border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white light:text-slate-900 mb-4">¿Listo para transformar tu negocio?</h3>
              <p className="text-[#a1a1aa] light:text-slate-500 mb-6 text-sm">
                Agenda una sesión estratégica gratuita con nuestro equipo de expertos para evaluar tus necesidades.
              </p>
              <Link to="/contacto">
                <Button className="w-full bg-[#fafafa] text-[#0a0a0a] hover:bg-neutral-200 light:bg-brand-primary light:text-white light:hover:bg-brand-primary/90">
                  Solicitar demo gratuita
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <RelatedSolutions currentSlug={slug!} />
      <Footer />
    </div>
  );
}
