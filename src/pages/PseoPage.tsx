import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CalendarDays,
  Building2,
  CheckCircle2,
  Globe2,
  Headset,
  MapPin,
  MessageCircleMore,
  Network,
  Radar,
  Route,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSEO } from "@/lib/seo";
import { getPseoBySlug } from "@/data/pseo";
import {
  getFamilyBasePage,
  getFamilyCrossLinks,
  getFamilyPages,
  getFeaturedFamiliesForIndustry,
  getFeaturedLocationFamilies,
  getIndustryPages,
  getLocationPages,
  getPseoPageContext,
  pseoFamilyMeta,
  pseoFamilyOrder,
  pseoIndustryMeta,
  pseoLocationMeta,
  pseoSectorMeta,
  type PseoFamilyKey,
} from "@/data/pseo-taxonomy";
import NotFound from "./NotFound";

const familyIcons: Record<PseoFamilyKey, typeof Bot> = {
  "ai-agent": Bot,
  "whatsapp-automation": MessageCircleMore,
  "appointment-booking": CalendarDays,
  "crm-integration": Network,
  "customer-support": Headset,
  "lead-generation": Radar,
  "sales-automation": TrendingUp,
  chatbot: Sparkles,
};

const accentStyles = {
  violet: {
    badge: "border-violet-200 bg-violet-100/80 text-violet-800",
    card: "border-violet-200/80 bg-white/85",
    tint: "from-violet-200/70 via-white to-violet-50",
    glow: "bg-violet-300/30",
    icon: "bg-violet-600 text-white",
    link: "text-violet-700",
  },
  emerald: {
    badge: "border-emerald-200 bg-emerald-100/80 text-emerald-800",
    card: "border-emerald-200/80 bg-white/85",
    tint: "from-emerald-200/70 via-white to-emerald-50",
    glow: "bg-emerald-300/30",
    icon: "bg-emerald-600 text-white",
    link: "text-emerald-700",
  },
  amber: {
    badge: "border-amber-200 bg-amber-100/80 text-amber-800",
    card: "border-amber-200/80 bg-white/85",
    tint: "from-amber-200/70 via-white to-amber-50",
    glow: "bg-amber-300/30",
    icon: "bg-amber-600 text-white",
    link: "text-amber-700",
  },
  blue: {
    badge: "border-sky-200 bg-sky-100/80 text-sky-800",
    card: "border-sky-200/80 bg-white/85",
    tint: "from-sky-200/70 via-white to-sky-50",
    glow: "bg-sky-300/30",
    icon: "bg-sky-600 text-white",
    link: "text-sky-700",
  },
  rose: {
    badge: "border-rose-200 bg-rose-100/80 text-rose-800",
    card: "border-rose-200/80 bg-white/85",
    tint: "from-rose-200/70 via-white to-rose-50",
    glow: "bg-rose-300/30",
    icon: "bg-rose-600 text-white",
    link: "text-rose-700",
  },
  slate: {
    badge: "border-slate-200 bg-slate-100/90 text-slate-800",
    card: "border-slate-200/80 bg-white/85",
    tint: "from-slate-200/70 via-white to-slate-50",
    glow: "bg-slate-300/30",
    icon: "bg-slate-800 text-white",
    link: "text-slate-800",
  },
} as const;

type InfoCardProps = {
  title: string;
  body: string;
  className?: string;
};

function InfoCard({ title, body, className }: InfoCardProps) {
  return (
    <div className={cn("rounded-[28px] border p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]", className)}>
      <h3 className="text-lg font-semibold tracking-tight text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
    </div>
  );
}

type ExploreLinkCardProps = {
  href: string;
  title: string;
  description: string;
  accentClass: string;
};

function ExploreLinkCard({ href, title, description, accentClass }: ExploreLinkCardProps) {
  return (
    <Link
      to={href}
      className="group flex h-full flex-col justify-between rounded-[28px] border border-slate-200 bg-white/92 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_28px_70px_rgba(15,23,42,0.08)]"
    >
      <div>
        <h3 className="text-xl font-semibold tracking-tight text-slate-950">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      </div>
      <div className={cn("mt-6 inline-flex items-center text-sm font-semibold", accentClass)}>
        Explorar pagina
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

const sanitizeParagraphs = (paragraphs: string[]) => paragraphs.filter((paragraph) => !paragraph.startsWith("←"));

const buildBreadcrumbs = (slug: string) => {
  const context = getPseoPageContext(slug);

  if (context.kind === "industry") {
    return [
      { label: "Industrias", href: "/industrias" },
      { label: pseoIndustryMeta[context.industryKey].label },
      { label: pseoFamilyMeta[context.familyKey].label },
    ];
  }

  if (context.kind === "location") {
    return [
      { label: "Ciudades", href: "/ciudades" },
      { label: pseoLocationMeta[context.locationKey].label },
      { label: pseoFamilyMeta[context.familyKey].label },
    ];
  }

  if (context.kind === "family") {
    return [
      { label: "Servicios", href: "/servicios" },
      { label: pseoFamilyMeta[context.familyKey].label },
    ];
  }

  return [{ label: "Servicios", href: "/servicios" }];
};

const buildFaqs = (slug: string, description: string) => {
  const context = getPseoPageContext(slug);

  if (context.kind === "industry") {
    const family = pseoFamilyMeta[context.familyKey];
    const industry = pseoIndustryMeta[context.industryKey];

    return [
      {
        question: `¿Qué parte de ${family.label.toLowerCase()} suele implementarse primero en ${industry.label.toLowerCase()}?`,
        answer: `Normalmente arrancamos por el punto donde más se pierde tiempo o intención: ${industry.useCases[0]}, luego ordenamos handoff, seguimiento y métricas para que el sistema no quede aislado.`,
      },
      {
        question: `¿Se puede conectar con las herramientas que ya usa ${industry.label.toLowerCase()}?`,
        answer: `Sí. Este tipo de implementación suele convivir con ${family.stack.slice(0, 3).join(", ")} y otras herramientas del stack comercial u operativo sin obligarte a cambiar todo desde el día uno.`,
      },
      {
        question: `¿Cuándo no conviene automatizar todavía?`,
        answer: `Si el proceso base todavía cambia cada semana o no existe una ruta clara entre captación, atención y cierre, primero conviene ordenar criterio, mensajes y estados para luego automatizar con sentido.`,
      },
    ];
  }

  if (context.kind === "location") {
    const family = pseoFamilyMeta[context.familyKey];
    const location = pseoLocationMeta[context.locationKey];

    return [
      {
        question: `¿Trabajan con empresas en ${location.label} aunque la implementación sea remota?`,
        answer: `Sí. Diseñamos e implementamos de forma remota para negocios en ${location.label}, ${location.country}, conectando los flujos a WhatsApp, CRM, agenda o soporte según el caso.`,
      },
      {
        question: `¿Qué negocios suelen aprovechar mejor esta solución en ${location.label}?`,
        answer: `Suele encajar muy bien en negocios que dependen de rapidez conversacional, seguimiento comercial y orden operativo. En esta plaza vemos buen encaje especialmente para ${location.priorityIndustries
          .map((industryKey) => pseoIndustryMeta[industryKey].label.toLowerCase())
          .join(", ")}.`,
      },
      {
        question: `¿La automatización reemplaza al equipo humano?`,
        answer: `No. La idea es que ${family.label.toLowerCase()} absorba lo repetitivo, clasifique mejor y deje al equipo humano el trabajo donde hace falta criterio, cierre o atención sensible.`,
      },
    ];
  }

  if (context.kind === "family") {
    const family = pseoFamilyMeta[context.familyKey];

    return [
      {
        question: `¿Qué tipo de negocios suelen sacar más provecho de ${family.label.toLowerCase()}?`,
        answer: `Los que reciben volumen por mensajes, formularios o llamadas y necesitan más estructura para responder, calificar, seguir y medir sin depender de trabajo manual constante.`,
      },
      {
        question: `¿La implementación es genérica o se adapta al proceso actual?`,
        answer: `Siempre parte del proceso real del negocio. Adaptamos reglas, mensajes, integraciones y métricas a tu forma de vender, atender o coordinar operaciones.`,
      },
      {
        question: `¿Cómo se evita que la experiencia se sienta robótica?`,
        answer: `Definiendo bien qué resuelve el sistema, qué no, y en qué momento entra una persona. Un buen flujo tiene contexto, tono claro y handoff humano cuando suma valor.`,
      },
    ];
  }

  return [
    {
      question: "¿Qué incluye este tipo de implementación?",
      answer: description,
    },
  ];
};

const buildStructuredData = (slug: string, title: string, description: string, faqs: Array<{ question: string; answer: string }>) => {
  const breadcrumbs = buildBreadcrumbs(slug);
  const context = getPseoPageContext(slug);
  const serviceName =
    context.kind !== "unknown" ? pseoFamilyMeta[context.familyKey].label : "Soluciones de automatizacion";

  const serviceArea =
    context.kind === "location"
      ? {
          "@type": "City",
          name: pseoLocationMeta[context.locationKey].label,
        }
      : "Latinoamerica y equipos remotos";

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((breadcrumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: breadcrumb.label,
        item: breadcrumb.href ? `https://servicioscreativos.online${breadcrumb.href}` : `https://servicioscreativos.online/${slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      description,
      serviceType: serviceName,
      areaServed: serviceArea,
      provider: {
        "@type": "Organization",
        name: "Creativv",
        url: "https://servicioscreativos.online",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
};

export default function PseoPage() {
  const { slug } = useParams();
  const data = slug ? getPseoBySlug(slug) : undefined;

  const safeTitle = data?.title || "Servicios Creativos";
  const safeDescription = data?.description || "Automatización, IA y sistemas para negocios.";
  const safeStructuredData =
    data && slug ? buildStructuredData(slug, data.title, data.description, buildFaqs(slug, data.description)) : undefined;

  useSEO({
    title: safeTitle,
    description: safeDescription,
    path: slug ? `/${slug}` : "",
    structuredData: safeStructuredData,
  });

  if (!data || !slug) {
    return <NotFound />;
  }

  const context = getPseoPageContext(slug);
  const bodyParagraphs = sanitizeParagraphs(data.paragraphs);
  const breadcrumbs = buildBreadcrumbs(slug);
  const faqs = buildFaqs(slug, data.description);

  const family = context.kind !== "unknown" ? pseoFamilyMeta[context.familyKey] : undefined;
  const accent = family ? accentStyles[family.accent] : accentStyles.violet;
  const Icon = context.kind !== "unknown" ? familyIcons[context.familyKey] : Sparkles;
  const industry = context.kind === "industry" ? pseoIndustryMeta[context.industryKey] : undefined;
  const sector = industry ? pseoSectorMeta[industry.sector] : undefined;
  const location = context.kind === "location" ? pseoLocationMeta[context.locationKey] : undefined;

  const sameFamilyPages =
    context.kind !== "unknown"
      ? getFamilyPages(context.familyKey)
          .filter((page) => {
            if (page.slug === slug) {
              return false;
            }

            const pageContext = getPseoPageContext(page.slug);

            if (context.kind === "industry") {
              return pageContext.kind === "industry";
            }

            if (context.kind === "location") {
              return pageContext.kind === "location";
            }

            return true;
          })
          .slice(0, 6)
      : [];
  const sameIndustryPages = context.kind === "industry" ? getIndustryPages(context.industryKey).filter((page) => page.slug !== slug).slice(0, 6) : [];
  const otherLocationPages = context.kind === "location" ? getLocationPages().filter((page) => page.slug !== slug).slice(0, 6) : [];
  const featuredIndustryLinks =
    context.kind === "industry" ? getFeaturedFamiliesForIndustry(context.industryKey).filter((page) => page.slug !== slug) : [];
  const featuredLocationLinks = context.kind === "location" ? getFeaturedLocationFamilies(context.locationKey) : [];
  const familyBaseLinks =
    context.kind === "family"
      ? pseoFamilyOrder
          .filter((familyKey) => familyKey !== context.familyKey)
          .map((familyKey) => getFamilyBasePage(familyKey))
          .filter((page): page is NonNullable<ReturnType<typeof getFamilyBasePage>> => Boolean(page))
          .slice(0, 6)
      : [];
  const crossLinks = getFamilyCrossLinks(slug, 4);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf7f1] text-slate-950">
      <div className="noise-overlay opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_26%),radial-gradient(circle_at_80%_0%,rgba(226,232,240,0.6),transparent_22%),linear-gradient(180deg,#faf7f1_0%,#f8fafc_48%,#f3f4f6_100%)]" />
      <div className={cn("pointer-events-none absolute left-[-6rem] top-24 h-72 w-72 rounded-full blur-3xl", accent.glow)} />
      <div className={cn("pointer-events-none absolute right-[-5rem] top-56 h-80 w-80 rounded-full blur-3xl", accent.glow)} />

      <Navbar />

      <main className="relative z-10 pt-28 pb-24">
        <section className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 transition-colors hover:text-slate-900">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
            <span className="text-slate-300">/</span>
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={`${breadcrumb.label}-${index}`} className="inline-flex items-center gap-3">
                {index > 0 && <span className="text-slate-300">/</span>}
                {breadcrumb.href ? (
                  <Link to={breadcrumb.href} className="transition-colors hover:text-slate-900">
                    {breadcrumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-700">{breadcrumb.label}</span>
                )}
              </div>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/88 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-10"
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", accent.tint)} />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <div className={cn("inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]", accent.badge)}>
                    <Icon className="h-4 w-4" />
                    {family?.shortLabel || "Solucion"}
                  </div>
                  {industry && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium text-slate-700">
                      <Building2 className="h-3.5 w-3.5" />
                      {industry.label}
                    </div>
                  )}
                  {location && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium text-slate-700">
                      <MapPin className="h-3.5 w-3.5" />
                      {location.label}, {location.country}
                    </div>
                  )}
                </div>

                <h1 className="mt-6 max-w-4xl font-heading text-4xl leading-tight tracking-[-0.04em] text-slate-950 md:text-6xl">
                  {data.h1}
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                  {data.description}
                </p>

                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
                  {industry?.summary || location?.marketNote || family?.promise}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" variant="hero">
                    <a href={`/brief?source=${slug}`}>
                      Solicitar diagnostico
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contacto">Hablar del proyecto</Link>
                  </Button>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {(context.kind === "industry"
                    ? [
                        {
                          title: "Uso principal",
                          body: industry?.useCases[0] || family?.capabilities[0] || "",
                        },
                        {
                          title: "Categoria",
                          body: sector?.label || industry?.category || family?.category || "",
                        },
                        {
                          title: "Stack habitual",
                          body: family?.stack.slice(0, 3).join(" · ") || "",
                        },
                      ]
                    : context.kind === "location"
                      ? [
                          {
                            title: "Plaza",
                            body: `${location?.label}, ${location?.country}`,
                          },
                          {
                            title: "Mejor encaje",
                            body:
                              location?.priorityIndustries
                                .slice(0, 2)
                                .map((industryKey) => pseoIndustryMeta[industryKey].label)
                                .join(" · ") || "",
                          },
                          {
                            title: "Canales",
                            body: family?.stack.slice(0, 3).join(" · ") || "",
                          },
                        ]
                      : [
                          {
                            title: "Enfoque",
                            body: family?.category || "",
                          },
                          {
                            title: "Mejor para",
                            body: family?.outcomes[0] || "",
                          },
                          {
                            title: "Capas conectadas",
                            body: family?.stack.slice(0, 3).join(" · ") || "",
                          },
                        ]).map((item) => (
                    <div key={item.title} className="rounded-[24px] border border-white/70 bg-white/72 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-sm">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">{item.title}</div>
                      <p className="mt-3 text-sm leading-7 text-slate-800">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="grid gap-5"
            >
              <div className={cn("rounded-[32px] border p-7 shadow-[0_28px_70px_rgba(15,23,42,0.06)]", accent.card)}>
                <div className={cn("inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg", accent.icon)}>
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                  {family?.label || "Sistema hecho a medida"}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{family?.intro || data.description}</p>

                <div className="mt-6 space-y-3">
                  {(family?.outcomes || data.h2s).slice(0, 3).map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/86 px-4 py-3">
                      <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", accent.link)} />
                      <span className="text-sm leading-6 text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_30px_90px_rgba(15,23,42,0.16)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">Integraciones</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(family?.stack || []).map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-white/75">
                  Diseñamos la capa conversacional, la capa operativa y el handoff para que esto viva dentro del negocio y no como un experimento suelto.
                </p>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[32px] border border-slate-200 bg-white/88 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.05)] md:p-10">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Contexto de la pagina</div>
              <div className="mt-5 space-y-5">
                {bodyParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-slate-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              {(context.kind === "industry"
                ? [
                    {
                      title: `Qué se suele romper en ${industry?.label.toLowerCase()}`,
                      body: industry?.pains.join(", ") || "",
                    },
                    {
                      title: "Qué mueve la decision",
                      body: sector?.positioning || "",
                    },
                    {
                      title: "Siguiente paso correcto",
                      body: family?.implementationSteps[0] || "",
                    },
                  ]
                : context.kind === "location"
                  ? [
                      {
                        title: `Por qué ${location?.label} importa`,
                        body: location?.marketNote || "",
                      },
                      {
                        title: "Sectores con mejor fit",
                        body:
                          location?.priorityIndustries
                            .map((industryKey) => pseoIndustryMeta[industryKey].label)
                            .join(", ") || "",
                      },
                      {
                        title: "Implementacion",
                        body: family?.implementationSteps[1] || "",
                      },
                    ]
                  : [
                      {
                        title: "Que resuelve",
                        body: family?.capabilities.slice(0, 2).join(", ") || "",
                      },
                      {
                        title: "Promesa operativa",
                        body: family?.promise || "",
                      },
                      {
                        title: "Primer paso",
                        body: family?.implementationSteps[0] || "",
                      },
                    ]).map((item) => (
                <InfoCard key={item.title} title={item.title} body={item.body} className="border-slate-200 bg-white/88" />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Diseno del sistema</div>
              <h2 className="mt-3 font-heading text-3xl tracking-[-0.03em] text-slate-950 md:text-4xl">
                {context.kind === "industry"
                  ? `Como aterrizar ${family?.label.toLowerCase()} en ${industry?.label.toLowerCase()}`
                  : context.kind === "location"
                    ? `Como se implementa en ${location?.label}`
                    : `Como se construye ${family?.label.toLowerCase()}`}
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {(context.kind === "industry"
              ? [
                  ...(industry?.useCases || []),
                  ...(sector?.decisionDrivers.slice(0, 1) || []),
                ].slice(0, 3)
              : context.kind === "location"
                ? [
                    ...(family?.capabilities.slice(0, 2) || []),
                    `Adaptado a equipos y negocios en ${location?.label}`,
                  ]
                : family?.implementationSteps || []).slice(0, 3).map((item, index) => (
              <div
                key={item}
                className="rounded-[30px] border border-slate-200 bg-white/92 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
              >
                <div className={cn("inline-flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold shadow-lg", accent.icon)}>
                  0{index + 1}
                </div>
                <p className="mt-5 text-base leading-8 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-slate-200 bg-white/92 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.05)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Capacidades</div>
              <div className="mt-5 grid gap-3">
                {(family?.capabilities || data.h2s).slice(0, 4).map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3">
                    <Route className={cn("mt-0.5 h-4 w-4 shrink-0", accent.link)} />
                    <span className="text-sm leading-7 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">FAQ visible</div>
              <div className="mt-5 space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <h3 className="text-base font-semibold leading-7 text-white">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/72">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {context.kind === "industry" && sameIndustryPages.length > 0 && (
          <section className="mx-auto mt-20 max-w-6xl px-6">
            <div className="mb-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Cluster por industria</div>
              <h2 className="mt-3 font-heading text-3xl tracking-[-0.03em] text-slate-950 md:text-4xl">
                Otras soluciones para {industry?.label.toLowerCase()}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {sameIndustryPages.map((page) => (
                <ExploreLinkCard
                  key={page.slug}
                  href={`/${page.slug}`}
                  title={page.h1.replace(/^[^\p{L}\p{N}]+/u, "")}
                  description={page.description}
                  accentClass={accent.link}
                />
              ))}
            </div>
          </section>
        )}

        {context.kind === "industry" && sameFamilyPages.length > 0 && (
          <section className="mx-auto mt-20 max-w-6xl px-6">
            <div className="mb-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Cluster por solución</div>
              <h2 className="mt-3 font-heading text-3xl tracking-[-0.03em] text-slate-950 md:text-4xl">
                {family?.label} en otras industrias
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {sameFamilyPages.map((page) => (
                <ExploreLinkCard
                  key={page.slug}
                  href={`/${page.slug}`}
                  title={page.h1.replace(/^[^\p{L}\p{N}]+/u, "")}
                  description={page.description}
                  accentClass={accent.link}
                />
              ))}
            </div>
          </section>
        )}

        {context.kind === "location" && featuredLocationLinks.length > 0 && (
          <section className="mx-auto mt-20 max-w-6xl px-6">
            <div className="mb-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Sectores con mas fit</div>
              <h2 className="mt-3 font-heading text-3xl tracking-[-0.03em] text-slate-950 md:text-4xl">
                Soluciones relacionadas para negocios en {location?.label}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featuredLocationLinks.map((page) => (
                <ExploreLinkCard
                  key={page.slug}
                  href={`/${page.slug}`}
                  title={page.h1.replace(/^[^\p{L}\p{N}]+/u, "")}
                  description={page.description}
                  accentClass={accent.link}
                />
              ))}
            </div>
          </section>
        )}

        {context.kind === "family" && sameFamilyPages.length > 0 && (
          <section className="mx-auto mt-20 max-w-6xl px-6">
            <div className="mb-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Paginas del cluster</div>
              <h2 className="mt-3 font-heading text-3xl tracking-[-0.03em] text-slate-950 md:text-4xl">
                Industrias donde esta solucion suele encajar mejor
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {sameFamilyPages.map((page) => (
                <ExploreLinkCard
                  key={page.slug}
                  href={`/${page.slug}`}
                  title={page.h1.replace(/^[^\p{L}\p{N}]+/u, "")}
                  description={page.description}
                  accentClass={accent.link}
                />
              ))}
            </div>
          </section>
        )}

        {context.kind === "location" && crossLinks.length > 0 && (
          <section className="mx-auto mt-20 max-w-6xl px-6">
            <div className="mb-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Rutas cercanas</div>
              <h2 className="mt-3 font-heading text-3xl tracking-[-0.03em] text-slate-950 md:text-4xl">
                Mas ciudades dentro del cluster de WhatsApp
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {crossLinks.map((page) => (
                <ExploreLinkCard
                  key={page.slug}
                  href={`/${page.slug}`}
                  title={page.h1.replace(/^[^\p{L}\p{N}]+/u, "")}
                  description={page.description}
                  accentClass={accent.link}
                />
              ))}
            </div>
          </section>
        )}

        {context.kind === "family" && familyBaseLinks.length > 0 && (
          <section className="mx-auto mt-20 max-w-6xl px-6">
            <div className="mb-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Otros hubs</div>
              <h2 className="mt-3 font-heading text-3xl tracking-[-0.03em] text-slate-950 md:text-4xl">
                El resto del mapa de soluciones
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {familyBaseLinks.map((page) => (
                <ExploreLinkCard
                  key={page.slug}
                  href={`/${page.slug}`}
                  title={page.h1}
                  description={page.description}
                  accentClass={accent.link}
                />
              ))}
            </div>
          </section>
        )}

        {context.kind === "location" && otherLocationPages.length > 0 && (
          <section className="mx-auto mt-20 max-w-6xl px-6">
            <div className="rounded-[34px] border border-slate-200 bg-white/90 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.05)] md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Cobertura</div>
                  <h2 className="mt-3 font-heading text-3xl tracking-[-0.03em] text-slate-950 md:text-4xl">
                    Otras ciudades del cluster
                  </h2>
                </div>
                <Button asChild variant="outline">
                  <Link to="/ciudades">
                    Ver directorio de ciudades
                    <Globe2 className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {otherLocationPages.map((page) => (
                  <Link
                    key={page.slug}
                    to={`/${page.slug}`}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-white hover:text-slate-950"
                  >
                    {page.h1.replace(/^[^\p{L}\p{N}]+/u, "")}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {context.kind === "industry" && featuredIndustryLinks.length > 0 && (
          <section className="mx-auto mt-20 max-w-6xl px-6">
            <div className="rounded-[34px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.14)] md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">Entrada rapida</div>
                  <h2 className="mt-3 font-heading text-3xl tracking-[-0.03em] text-white md:text-4xl">
                    Paginas clave para {industry?.label.toLowerCase()}
                  </h2>
                </div>
                <Button asChild variant="hero-outline">
                  <Link to="/industrias">Ver mapa completo</Link>
                </Button>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {featuredIndustryLinks.map((page) => (
                  <Link
                    key={page.slug}
                    to={`/${page.slug}`}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/8"
                  >
                    <h3 className="text-lg font-semibold tracking-tight text-white">{page.h1.replace(/^[^\p{L}\p{N}]+/u, "")}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/70">{page.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
