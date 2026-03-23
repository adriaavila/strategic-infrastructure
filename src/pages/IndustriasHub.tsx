import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Globe2, Layers3, Sparkles } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { cn } from "@/lib/utils";
import {
  getFamilyBasePage,
  getFeaturedFamiliesForIndustry,
  pseoFamilyMeta,
  pseoFamilyOrder,
  pseoIndustryMeta,
  pseoIndustryOrder,
  type PseoFamilyKey,
} from "@/data/pseo-taxonomy";

const accentShells = {
  violet: "from-violet-200/60 via-white to-violet-50",
  emerald: "from-emerald-200/60 via-white to-emerald-50",
  amber: "from-amber-200/60 via-white to-amber-50",
  blue: "from-sky-200/60 via-white to-sky-50",
  rose: "from-rose-200/60 via-white to-rose-50",
  slate: "from-slate-200/70 via-white to-slate-50",
} as const;

const accentLinks = {
  violet: "text-violet-700",
  emerald: "text-emerald-700",
  amber: "text-amber-700",
  blue: "text-sky-700",
  rose: "text-rose-700",
  slate: "text-slate-800",
} as const;

function FamilyHubCard({ familyKey }: { familyKey: PseoFamilyKey }) {
  const family = pseoFamilyMeta[familyKey];
  const page = getFamilyBasePage(familyKey);

  if (!page) {
    return null;
  }

  return (
    <Link
      to={`/${page.slug}`}
      className={cn(
        "group relative overflow-hidden rounded-[30px] border border-white/80 p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.08)]",
        "bg-gradient-to-br",
        accentShells[family.accent],
      )}
    >
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">{family.shortLabel}</div>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{family.label}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{family.intro}</p>
      <div className={cn("mt-6 inline-flex items-center text-sm font-semibold", accentLinks[family.accent])}>
        Abrir hub
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export default function IndustriasHub() {
  useSEO({
    title: "Soluciones por industria",
    description:
      "Explora nuestras páginas de automatización, IA, soporte, CRM y captación organizadas por industria para entender mejor qué encaja en tu negocio.",
    path: "/industrias",
  });

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf7f1] text-slate-950">
      <div className="noise-overlay opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.86),transparent_26%),radial-gradient(circle_at_85%_0%,rgba(226,232,240,0.58),transparent_22%),linear-gradient(180deg,#faf7f1_0%,#f8fafc_50%,#f3f4f6_100%)]" />

      <Navbar />

      <main className="relative z-10 pt-28 pb-24">
        <section className="mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/88 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(241,245,249,0.9),rgba(255,255,255,0.72),rgba(237,233,254,0.6))]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                <Building2 className="h-4 w-4" />
                Cluster pSEO por industria
              </div>
              <h1 className="mt-6 max-w-4xl font-heading text-4xl tracking-[-0.04em] text-slate-950 md:text-6xl">
                El mapa completo de soluciones por industria
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                Cada industria tiene páginas conectadas para IA, WhatsApp, soporte, CRM, citas, leads, ventas y chatbots. La idea es que cada visita encuentre una entrada específica, pero dentro de un sistema de enlaces mucho más sólido.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" variant="hero">
                  <a href="#industrias-grid">
                    Ver industrias
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/ciudades">
                    Explorar ciudades
                    <Globe2 className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-[24px] border border-white/80 bg-white/78 p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Cobertura</div>
                  <p className="mt-3 text-sm leading-7 text-slate-700">20 industrias con rutas enlazadas por intención y por tipo de solución.</p>
                </div>
                <div className="rounded-[24px] border border-white/80 bg-white/78 p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Estructura</div>
                  <p className="mt-3 text-sm leading-7 text-slate-700">8 familias principales con hubs genéricos y páginas específicas por sector.</p>
                </div>
                <div className="rounded-[24px] border border-white/80 bg-white/78 p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Intención</div>
                  <p className="mt-3 text-sm leading-7 text-slate-700">Cada card conecta con páginas pensadas para captación, soporte, agenda, CRM o ventas.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="industrias-grid" className="mx-auto mt-20 max-w-6xl px-6">
          <div className="mb-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Industrias</div>
            <h2 className="mt-3 font-heading text-3xl tracking-[-0.03em] text-slate-950 md:text-4xl">
              Directorio de páginas por vertical
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pseoIndustryOrder.map((industryKey, index) => {
              const industry = pseoIndustryMeta[industryKey];
              const featuredPages = getFeaturedFamiliesForIndustry(industryKey);
              const primaryAccent = accentLinks[pseoFamilyMeta[industry.featuredFamilies[0]].accent];

              return (
                <motion.article
                  key={industryKey}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02 }}
                  className="rounded-[32px] border border-slate-200 bg-white/92 p-7 shadow-[0_24px_60px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">{industry.category}</div>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{industry.label}</h3>
                    </div>
                    <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                      8 rutas
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">{industry.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {industry.useCases.map((useCase) => (
                      <span key={useCase} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                        {useCase}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 space-y-3">
                    {featuredPages.map((page) => (
                      <Link
                        key={page.slug}
                        to={`/${page.slug}`}
                        className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 transition-colors hover:border-slate-300 hover:bg-white"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{page.h1.replace(/^[^\p{L}\p{N}]+/u, "")}</div>
                          <div className="text-xs text-slate-500">{page.description}</div>
                        </div>
                        <ArrowRight className={cn("h-4 w-4 transition-transform duration-300 group-hover:translate-x-1", primaryAccent)} />
                      </Link>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-6xl px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Hubs de solucion</div>
              <h2 className="mt-3 font-heading text-3xl tracking-[-0.03em] text-slate-950 md:text-4xl">
                Las familias base del cluster
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium text-slate-600">
              <Layers3 className="h-4 w-4" />
              Páginas puente para enlazar todo el sistema
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pseoFamilyOrder.map((familyKey) => (
              <FamilyHubCard key={familyKey} familyKey={familyKey} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-6xl px-6">
          <div className="rounded-[34px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.14)] md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
                  <Sparkles className="h-4 w-4" />
                  Cobertura geográfica
                </div>
                <h2 className="mt-4 font-heading text-3xl tracking-[-0.03em] text-white md:text-4xl">
                  Las páginas por ciudad ya tienen su propio hub
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
                  Eso ayuda a que las landings locales de WhatsApp dejen de quedar aisladas y pasen a formar parte de un subcluster con mejor navegación interna.
                </p>
              </div>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/ciudades">
                  Ir al hub de ciudades
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
