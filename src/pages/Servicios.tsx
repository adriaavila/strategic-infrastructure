import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Code2, Sparkles, Workflow } from "lucide-react";

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
    title: "Presencia digital",
    subtitle: "Webs y ecommerce diseniados para convertir",
    description:
      "Tu sitio no debe solo verse bien. Debe explicar tu oferta con claridad, generar confianza en minutos y mover al visitante a una accion concreta.",
    persuasion:
      "Si hoy tu web recibe visitas pero no genera suficientes conversaciones, cotizaciones o compras, no te falta trafico: te falta una estructura digital que guie bien la decision.",
    includes: [
      "Webs corporativas orientadas a conversion",
      "Landing pages para campanias y captacion",
      "Ecommerce con recorrido de compra claro",
    ],
    outcomes: [
      "Mejor percepcion de marca desde el primer contacto",
      "Mas consultas calificadas y menos rebote",
      "Mejor aprovechamiento del trafico que ya pagas",
    ],
    icon: <Code2 className="h-5 w-5" />,
    accent: "violet",
    ctaLabel: "Ver pagina de presencia digital",
    ctaHref: "/marketing",
  },
  {
    title: "Automatizacion con IA",
    subtitle: "Procesos que eliminan trabajo manual",
    description:
      "La operacion se frena cuando todo depende de seguimiento manual. Automatizo respuestas, flujos e integraciones para que el sistema avance con velocidad y consistencia.",
    persuasion:
      "Cuando ventas, atencion y operacion trabajan en silos, se pierden oportunidades y el equipo se desgasta. Una automatizacion bien planteada reduce friccion y libera horas de foco real.",
    includes: [
      "Flujos de atencion y ventas con IA",
      "Integraciones con CRM, formularios y canales",
      "Automatizacion de procesos operativos repetitivos",
    ],
    outcomes: [
      "Respuestas mas rapidas en momentos criticos",
      "Menos errores y menos retrabajo manual",
      "Seguimiento comercial mas ordenado y constante",
    ],
    icon: <Workflow className="h-5 w-5" />,
    accent: "mint",
    ctaLabel: "Ver pagina de automatizacion",
    ctaHref: "/automatizaciones",
  },
  {
    title: "Inteligencia del negocio",
    subtitle: "Dashboards y analisis para decidir mejor",
    description:
      "No se puede mejorar lo que no se mide bien. Construyo tableros y estructuras de datos para que tengas una lectura clara de ventas, operacion y rendimiento comercial.",
    persuasion:
      "Sin visibilidad real, cada decision depende de intuicion. Con datos accionables en un solo lugar, puedes priorizar mejor, reaccionar antes y escalar con menor riesgo.",
    includes: [
      "Dashboards ejecutivos y operativos",
      "Definicion de KPIs utiles para el negocio",
      "Reporting claro para seguimiento semanal o mensual",
    ],
    outcomes: [
      "Decisiones mas rapidas y mejor fundamentadas",
      "Deteccion temprana de cuellos de botella",
      "Mayor control sobre crecimiento y rentabilidad",
    ],
    icon: <BarChart3 className="h-5 w-5" />,
    accent: "violet",
    ctaLabel: "Solicitar este servicio",
    ctaHref: "/brief?source=inteligencia-negocio-servicios",
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
    title: "Servicios | Automatizacion con IA y Marketing Digital",
    description:
      "Servicios de presencia digital, automatizacion con IA e inteligencia del negocio para vender mejor, operar con menos friccion y decidir con datos claros.",
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
              <span>Servicios que se conectan y escalan contigo</span>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl light:text-slate-950">
              Servicios diseniados para mejorar conversion, operacion y decisiones
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-slate light:text-slate-600">
              En Home mostramos tres servicios clave. Aqui tienes el detalle completo de cada uno para que entiendas cuando conviene activarlo, que incluye y que impacto real puede tener en tu negocio.
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
                  Cuentame tu caso
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
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65 light:text-slate-700">Que incluye</h3>
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
          <div className={`${cardClassName} px-8 py-10 text-center md:px-10`}>
            <h2 className="text-3xl font-semibold text-white md:text-4xl light:text-slate-950">
              ¿Quieres definir por donde empezar primero?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-brand-slate light:text-slate-600">
              Si me compartes tu contexto actual, te recomiendo la prioridad correcta entre presencia digital, automatizacion o inteligencia del negocio para lograr impacto mas rapido.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="hero">
                <a href="/brief?source=servicios-page">
                  Solicitar proyecto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Link to="/contacto">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/15 bg-transparent text-white hover:bg-white/10 light:border-slate-300 light:bg-white light:text-slate-900 light:hover:bg-slate-100"
                >
                  Hablar conmigo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicios;
