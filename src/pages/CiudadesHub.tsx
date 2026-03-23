import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, MapPin, MessageCircleMore } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { getLocationPages, pseoIndustryMeta, pseoLocationMeta, pseoLocationOrder } from "@/data/pseo-taxonomy";

const regionOrder = ["Norteamerica", "Latam Andina", "Latam Sur", "Europa"] as const;

export default function CiudadesHub() {
  useSEO({
    title: "Ciudades y mercados para automatización de WhatsApp",
    description:
      "Directorio de páginas locales para automatización de WhatsApp e IA en ciudades clave de Latinoamérica, Estados Unidos y España.",
    path: "/ciudades",
  });

  const locationPages = getLocationPages();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf7f1] text-slate-950">
      <div className="noise-overlay opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.86),transparent_26%),radial-gradient(circle_at_85%_0%,rgba(209,250,229,0.38),transparent_20%),linear-gradient(180deg,#faf7f1_0%,#f8fafc_48%,#f3f4f6_100%)]" />

      <Navbar />

      <main className="relative z-10 pt-28 pb-24">
        <section className="mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/88 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(209,250,229,0.52),rgba(255,255,255,0.78),rgba(226,232,240,0.62))]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                <Globe2 className="h-4 w-4" />
                Directorio local
              </div>
              <h1 className="mt-6 max-w-4xl font-heading text-4xl tracking-[-0.04em] text-slate-950 md:text-6xl">
                Páginas locales para automatización de WhatsApp
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                Este hub conecta las páginas por ciudad para que la capa local tenga contexto, enlaces internos y una navegación más clara entre mercados.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" variant="hero">
                  <a href="#ciudades-lista">
                    Ver ciudades
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/industrias">
                    Ir a industrias
                    <MessageCircleMore className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="ciudades-lista" className="mx-auto mt-20 max-w-6xl px-6">
          <div className="space-y-16">
            {regionOrder.map((region) => {
              const items = pseoLocationOrder.filter((locationKey) => pseoLocationMeta[locationKey].region === region);

              if (items.length === 0) {
                return null;
              }

              return (
                <div key={region}>
                  <div className="mb-8 flex items-end justify-between gap-4">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">{region}</div>
                      <h2 className="mt-3 font-heading text-3xl tracking-[-0.03em] text-slate-950 md:text-4xl">
                        Ciudades en {region}
                      </h2>
                    </div>
                    <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium text-slate-600">
                      {items.length} páginas
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((locationKey, index) => {
                      const location = pseoLocationMeta[locationKey];
                      const page = locationPages.find((entry) => entry.slug === `whatsapp-automation-${locationKey}`);

                      if (!page) {
                        return null;
                      }

                      return (
                        <motion.article
                          key={locationKey}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.03 }}
                          className="rounded-[32px] border border-slate-200 bg-white/92 p-7 shadow-[0_24px_60px_rgba(15,23,42,0.05)]"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                                <MapPin className="h-3.5 w-3.5" />
                                {location.country}
                              </div>
                              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{location.label}</h3>
                            </div>
                          </div>

                          <p className="mt-4 text-sm leading-7 text-slate-600">{location.marketNote}</p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {location.priorityIndustries.map((industryKey) => (
                              <span key={industryKey} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800">
                                {pseoIndustryMeta[industryKey].label}
                              </span>
                            ))}
                          </div>

                          <Link
                            to={`/${page.slug}`}
                            className="group mt-6 inline-flex items-center text-sm font-semibold text-emerald-700"
                          >
                            Abrir landing local
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </motion.article>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
