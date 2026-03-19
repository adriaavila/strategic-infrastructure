import { ArrowRight, Bot, Building2, CalendarCheck2, MessageSquareMore, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const clusters = [
  {
    title: "WhatsApp y atencion automatizada",
    description: "Entradas de alta intencion para negocios que necesitan responder, calificar y activar seguimiento sin perder contexto.",
    icon: <MessageSquareMore className="h-5 w-5" />,
    links: [
      { label: "WhatsApp para clinicas", href: "/whatsapp-automation-clinics" },
      { label: "WhatsApp para bufetes", href: "/whatsapp-automation-law-firms" },
      { label: "WhatsApp para restaurantes", href: "/whatsapp-automation-restaurants" },
    ],
  },
  {
    title: "Agentes IA por industria",
    description: "Paginas pensadas para descubrir demanda por vertical y conectar cada necesidad con una propuesta clara.",
    icon: <Bot className="h-5 w-5" />,
    links: [
      { label: "Agente IA para inmobiliarias", href: "/ai-agent-real-estate" },
      { label: "Agente IA para agencias", href: "/ai-agent-agencies" },
      { label: "Agente IA para ecommerce", href: "/ai-agent-ecommerce" },
    ],
  },
  {
    title: "Reservas, citas e integraciones",
    description: "Clusters que ayudan a capturar busquedas operativas mas cercanas a conversion y necesidad inmediata.",
    icon: <CalendarCheck2 className="h-5 w-5" />,
    links: [
      { label: "Citas para dental", href: "/appointment-booking-dental" },
      { label: "Integracion CRM en consultoria", href: "/crm-integration-consulting" },
      { label: "Automatizacion de ventas para seguros", href: "/sales-automation-insurance" },
    ],
  },
];

const supportLinks = [
  {
    title: "Explorar industrias",
    description: "Un hub con rutas internas hacia las categorias que mas nos interesan posicionar.",
    href: "/industrias",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    title: "Ver soluciones salud y bienestar",
    description: "Una forma rapida de entrar al cluster clinicas, dental, veterinarias y gimnasios.",
    href: "/whatsapp-automation-clinics",
    icon: <Stethoscope className="h-5 w-5" />,
  },
];

type SolutionClustersProps = {
  title?: string;
  description?: string;
};

export function SolutionClusters({
  title = "Soluciones conectadas a la estrategia SEO",
  description = "No dependemos solo del sitemap. Estas rutas ayudan a que Google y los usuarios lleguen a los clusters comerciales mas importantes desde paginas de alta autoridad interna.",
}: SolutionClustersProps) {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary">Clusters SEO</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white light:text-slate-950 md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-brand-slate light:text-slate-600">
          {description}
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="grid gap-6 md:grid-cols-3">
          {clusters.map((cluster) => (
            <article
              key={cluster.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.16)] backdrop-blur-sm light:border-slate-300 light:bg-white light:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-secondary/20 bg-brand-secondary/10 text-brand-secondary light:border-emerald-200 light:bg-emerald-50 light:text-emerald-700">
                {cluster.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white light:text-slate-950">{cluster.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate light:text-slate-600">{cluster.description}</p>

              <ul className="mt-5 space-y-3">
                {cluster.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-white/88 transition-colors hover:text-brand-secondary light:text-slate-800 light:hover:text-emerald-700"
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="grid gap-6">
          {supportLinks.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="group rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 transition-colors hover:border-brand-secondary/30 light:border-slate-300 light:from-white light:to-slate-50"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-primary/20 bg-brand-primary/10 text-brand-primary light:border-violet-200 light:bg-violet-50 light:text-violet-700">
                {item.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white light:text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate light:text-slate-600">{item.description}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-primary light:text-violet-700">
                Ir ahora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
