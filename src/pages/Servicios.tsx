import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { InternalLinksSection } from "@/components/seo/InternalLinksSection";
import { useSEO } from "@/lib/seo";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, LayoutTemplate, MonitorSmartphone, Sparkles } from "lucide-react";
import { servicesInternalLinks } from "@/data/internal-links";

type ServiceDetail = {
  title: string;
  subtitle: string;
  description: string;
  persuasion: string;
  includes: string[];
  outcomes: string[];
  icon: React.ReactNode;
  accent: "mint" | "violet";
  ctaLabel: string;
  ctaHref: string;
};

const services: ServiceDetail[] = [
  {
    title: "Websites",
    subtitle: "Sitios claros, serios y orientados a conversión",
    description:
      "Tu web no debe existir solo para verse bonita. Debe explicar bien lo que haces, generar confianza rápido y empujar al visitante a una acción concreta.",
    persuasion:
      "Si hoy tu web no ayuda a vender, presentar tu trabajo o abrir conversaciones de calidad, el problema no siempre es el tráfico. Muchas veces es estructura, mensaje y ejecución.",
    includes: [
      "Webs corporativas y de marca",
      "Sitios para servicios, portafolio o negocio local",
      "Rediseños enfocados en claridad, velocidad y percepción",
    ],
    outcomes: [
      "Mejor primera impresión y más confianza",
      "Oferta mejor explicada desde la home y páginas clave",
      "Una presencia digital más fuerte para vender o cotizar",
    ],
    icon: <Code2 className="h-5 w-5" />,
    accent: "violet",
    ctaLabel: "Ver presencia digital",
    ctaHref: "/marketing",
  },
  {
    title: "Landing pages",
    subtitle: "Páginas pensadas para captar y convertir mejor",
    description:
      "Cuando necesitas vender una oferta, validar una idea o apoyar una campaña, una landing page bien armada suele rendir más que una web genérica intentando hacer todo al mismo tiempo.",
    persuasion:
      "La mayoría de las páginas pierden conversión por exceso de ruido, falta de jerarquía o una propuesta mal explicada. Una landing bien hecha corrige eso y mueve mejor a la acción.",
    includes: [
      "Landing pages para campañas y captación",
      "Páginas para productos, servicios o lanzamientos",
      "Estructura, copy y secciones enfocadas en conversión",
    ],
    outcomes: [
      "Más claridad en la oferta principal",
      "Menos fuga entre anuncio, clic y contacto",
      "Mejor rendimiento de campañas y tráfico existente",
    ],
    icon: <LayoutTemplate className="h-5 w-5" />,
    accent: "mint",
    ctaLabel: "Solicitar landing",
    ctaHref: "/brief?source=landing-servicios",
  },
  {
    title: "Web apps",
    subtitle: "Herramientas web a medida para ordenar operación",
    description:
      "Cuando hojas sueltas, formularios desconectados y procesos manuales ya no alcanzan, una web app puede darte una forma más limpia de operar, coordinar y dar servicio.",
    persuasion:
      "No todo problema se resuelve con un plugin o una automatización. A veces hace falta una herramienta propia, más simple y más útil, adaptada al flujo real del negocio.",
    includes: [
      "Paneles internos y herramientas operativas",
      "Portales para clientes, equipos o procesos específicos",
      "Sistemas web conectados con formularios, CRM o datos base",
    ],
    outcomes: [
      "Menos caos operativo y menos retrabajo",
      "Mejor visibilidad del proceso y del estado de cada caso",
      "Una base sólida para integrar automatización después",
    ],
    icon: <MonitorSmartphone className="h-5 w-5" />,
    accent: "violet",
    ctaLabel: "Solicitar web app",
    ctaHref: "/brief?source=webapp-servicios",
  },
  {
    title: "Automatización e IA después",
    subtitle: "Una segunda capa, no el punto de partida",
    description:
      "Si más adelante hace sentido sumar automatizaciones, asistentes o integraciones más avanzadas, también puedo ayudarte. Pero entran cuando la base digital ya está bien resuelta.",
    persuasion:
      "Automatizar encima de una oferta confusa o una operación desordenada solo escala el desorden. Primero se construye bien la base. Después se acelera.",
    includes: [
      "Integraciones básicas entre herramientas",
      "Automatización puntual donde sí haya retorno claro",
      "Capa de IA o asistentes cuando el caso lo justifique",
    ],
    outcomes: [
      "Menos humo y más criterio técnico",
      "Automatización conectada a una base útil",
      "Mejor retorno cuando llegue el momento de escalar",
    ],
    icon: <Sparkles className="h-5 w-5" />,
    accent: "mint",
    ctaLabel: "Explorar segunda fase",
    ctaHref: "/automatizaciones",
  },
];

const accentClass = {
  mint: {
    pill: "text-brand-secondary",
    icon: "border-brand-secondary/20 bg-brand-secondary/10 text-brand-secondary light:border-emerald-200 light:bg-emerald-50 light:text-emerald-700",
    listDot: "bg-brand-secondary",
    sectionGlow: "from-brand-secondary/12 to-transparent light:from-emerald-100",
  },
  violet: {
    pill: "text-brand-primary light:text-violet-700",
    icon: "border-brand-primary/20 bg-brand-primary/10 text-brand-primary light:border-violet-200 light:bg-violet-50 light:text-violet-700",
    listDot: "bg-brand-primary",
    sectionGlow: "from-brand-primary/12 to-transparent light:from-violet-100",
  },
};

const cardClassName =
  "relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-7 md:p-9 backdrop-blur-sm shadow-[0_24px_60px_rgba(0,0,0,0.16)] light:border-slate-300 light:from-white light:to-slate-50 light:shadow-[0_22px_55px_rgba(15,23,42,0.09)]";

const Servicios = () => {
  useSEO({
    title: "Servicios | Websites, landing pages y web apps",
    description:
      "Servicios de websites, landing pages y web apps para negocios que necesitan una presencia digital más clara y sistemas web más útiles.",
    path: "/servicios",
  });

  return (
    <div className="relative min-h-screen bg-brand-dark text-white light:bg-slate-50 light:text-foreground">
      <div className="noise-overlay light:opacity-[0.03]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.12),transparent_28%)] light:bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.05),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05),transparent_24%)]" />

      <Navbar />

      <main className="pt-32 pb-24">
        <section className="container mx-auto max-w-6xl px-6">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-brand-secondary backdrop-blur-sm light:border-slate-300 light:bg-white">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Oferta principal: websites y web apps</span>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl light:text-slate-950">
              Servicios diseñados para construir una base digital clara antes de complicar el stack
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-slate light:text-slate-600">
              El foco está en websites, landing pages y web apps. La automatización y la IA siguen disponibles, pero como segunda fase cuando ya existe una base digital bien resuelta.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="hero">
                <a href="#detalle-servicios">
                  Ver detalle de servicios
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Link to="/brief">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/15 bg-transparent text-white hover:bg-white/10 light:border-slate-300 light:bg-white light:text-slate-900 light:hover:bg-slate-100"
                >
                  Cuéntame tu caso
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="detalle-servicios" className="container mx-auto mt-16 max-w-6xl px-6 space-y-7">
          {services.map((service) => {
            const accent = accentClass[service.accent];

            return (
              <article key={service.title} className={cardClassName}>
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.sectionGlow} opacity-60`} />

                <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${accent.icon}`}>
                        {service.icon}
                      </div>
                      <div className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${accent.pill}`}>{service.subtitle}</div>
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-white light:text-slate-950 md:text-4xl">{service.title}</h2>

                    <p className="mt-4 text-base leading-relaxed text-brand-slate light:text-slate-600">{service.description}</p>
                    <p className="mt-4 text-base leading-relaxed text-white/82 light:text-slate-700">{service.persuasion}</p>

                    <Link to={service.ctaHref} className={`mt-6 inline-flex items-center text-sm font-medium ${accent.pill} hover:opacity-80`}>
                      {service.ctaLabel}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-2xl border border-white/10 bg-black/10 p-5 light:border-slate-300 light:bg-white">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65 light:text-slate-700">Qué incluye</h3>
                      <ul className="mt-4 space-y-3">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-brand-slate light:text-slate-600">
                            <span className={`mt-2 block h-1.5 w-1.5 rounded-full ${accent.listDot}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/10 p-5 light:border-slate-300 light:bg-white">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65 light:text-slate-700">Impacto esperado</h3>
                      <ul className="mt-4 space-y-3">
                        {service.outcomes.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-brand-slate light:text-slate-600">
                            <span className={`mt-2 block h-1.5 w-1.5 rounded-full ${accent.listDot}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="container mx-auto mt-20 max-w-6xl px-6">
          <InternalLinksSection
            eyebrow="Explora la estructura"
            title="Páginas relacionadas para seguir bajando la oferta"
            description="Estas rutas ayudan a ordenar la propuesta principal de websites y web apps, y dejan la automatización como una segunda capa cuando haga sentido."
            items={servicesInternalLinks}
            variant="dark"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicios;
