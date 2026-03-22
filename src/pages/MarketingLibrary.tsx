import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { useSEO } from "@/lib/seo";
import { ArrowUpRight, CalendarDays, FileText, Megaphone } from "lucide-react";

import blog0317 from "../../content/blog/2026-03-17-automatizacion-whatsapp-para-empresas.md?raw";
import blog0319 from "../../content/blog/2026-03-19-whatsapp-crm-automation.md?raw";
import blog0320 from "../../content/blog/2026-03-20-ai-agents-for-business.md?raw";
import blog0321 from "../../content/blog/2026-03-21-business-automation.md?raw";
import blog0322 from "../../content/blog/2026-03-22-ai-agents-for-business.md?raw";

import social0317 from "../../content/social/2026-03-17-automatizacion-whatsapp-para-empresas.md?raw";
import social0318 from "../../content/social/2026-03-18-automatizacion-whatsapp-para-empresas.md?raw";
import social0319 from "../../content/social/2026-03-19-whatsapp-crm-automation.md?raw";
import social0320 from "../../content/social/2026-03-20-ai-agents-for-business.md?raw";
import social0321 from "../../content/social/2026-03-21-business-automation.md?raw";
import social0322 from "../../content/social/2026-03-22-ai-agents-for-business.md?raw";

type ContentItem = {
  id: string;
  date: string;
  title: string;
  topic: string;
  type: "Blog" | "Social";
  description: string;
  content: string;
};

const blogItems: ContentItem[] = [
  {
    id: "blog-2026-03-22-ai-agents-for-business",
    date: "2026-03-22",
    title: "AI agents for business: cómo vender más y operar mejor sin sumar más caos",
    topic: "AI agents",
    type: "Blog",
    description: "Artículo SEO completo orientado a conversión para explicar cómo agentes de IA mejoran ventas, seguimiento y operación.",
    content: blog0322,
  },
  {
    id: "blog-2026-03-21-business-automation",
    date: "2026-03-21",
    title: "Business Automation: cómo vender más y operar mejor sin llenar tu empresa de tareas manuales",
    topic: "Business automation",
    type: "Blog",
    description: "Pieza enfocada en automatización de procesos comerciales y operativos con enfoque práctico para empresas en crecimiento.",
    content: blog0321,
  },
  {
    id: "blog-2026-03-20-ai-agents-for-business",
    date: "2026-03-20",
    title: "AI Agents for Business: cómo automatizar ventas, soporte y operaciones sin crecer tu equipo",
    topic: "AI agents",
    type: "Blog",
    description: "Artículo educativo para posicionar servicios de agentes de IA aplicados a ventas, soporte y operaciones.",
    content: blog0320,
  },
  {
    id: "blog-2026-03-19-whatsapp-crm-automation",
    date: "2026-03-19",
    title: "WhatsApp CRM Automation: cómo convertir más conversaciones en ventas sin saturar a tu equipo",
    topic: "WhatsApp + CRM",
    type: "Blog",
    description: "Contenido SEO sobre integración de WhatsApp con CRM, seguimiento y orden comercial.",
    content: blog0319,
  },
  {
    id: "blog-2026-03-17-automatizacion-whatsapp",
    date: "2026-03-17",
    title: "Automatización de WhatsApp para Empresas: Cómo Dejar de Perder Ventas y Atender 24/7",
    topic: "WhatsApp automation",
    type: "Blog",
    description: "Artículo de captación sobre atención 24/7, velocidad de respuesta y automatización comercial en WhatsApp.",
    content: blog0317,
  },
];

const socialItems: ContentItem[] = [
  {
    id: "social-2026-03-22-ai-agents-for-business",
    date: "2026-03-22",
    title: "Paquete social: AI agents for business",
    topic: "AI agents",
    type: "Social",
    description: "Thread para X, post para LinkedIn y copy para Reddit derivados del artículo del 22 de marzo.",
    content: social0322,
  },
  {
    id: "social-2026-03-21-business-automation",
    date: "2026-03-21",
    title: "Paquete social: Business automation",
    topic: "Business automation",
    type: "Social",
    description: "Distribución social preparada para amplificar la pieza de automatización de negocio.",
    content: social0321,
  },
  {
    id: "social-2026-03-20-ai-agents-for-business",
    date: "2026-03-20",
    title: "Paquete social: AI agents for business",
    topic: "AI agents",
    type: "Social",
    description: "Versión de distribución social basada en la primera pieza sobre agentes de IA para negocio.",
    content: social0320,
  },
  {
    id: "social-2026-03-19-whatsapp-crm-automation",
    date: "2026-03-19",
    title: "Paquete social: WhatsApp CRM automation",
    topic: "WhatsApp + CRM",
    type: "Social",
    description: "Copys listos para publicar con foco en CRM, seguimiento y conversión desde WhatsApp.",
    content: social0319,
  },
  {
    id: "social-2026-03-18-automatizacion-whatsapp",
    date: "2026-03-18",
    title: "Paquete social: Automatización de WhatsApp para empresas",
    topic: "WhatsApp automation",
    type: "Social",
    description: "Material de distribución social para empujar la narrativa de atención 24/7 y respuesta inmediata.",
    content: social0318,
  },
  {
    id: "social-2026-03-17-automatizacion-whatsapp",
    date: "2026-03-17",
    title: "Paquete social: Automatización de WhatsApp para empresas",
    topic: "WhatsApp automation",
    type: "Social",
    description: "Primer paquete social asociado a la campaña de automatización de WhatsApp.",
    content: social0317,
  },
];

const allItems = [...blogItems, ...socialItems].sort((a, b) => b.date.localeCompare(a.date));

const MarketingLibrary = () => {
  useSEO({
    title: "Biblioteca pública de marketing",
    description:
      "Repositorio público para visualizar el contenido de marketing creado: artículos SEO, piezas sociales y campañas listas para revisar.",
    path: "/marketing/contenidos",
  });

  return (
    <div className="min-h-screen bg-background selection:bg-brand-primary/30 selection:text-foreground">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <section className="mb-14 max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-1.5 text-sm text-brand-primary">
              Biblioteca pública
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
              Todo el contenido de marketing en un solo lugar
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-brand-slate">
              Esta página reúne las piezas creadas para marketing dentro del proyecto: artículos SEO, paquetes de distribución social y material listo para revisar, compartir o reutilizar.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-3xl font-semibold text-foreground">{blogItems.length}</div>
                <div className="mt-1 text-sm text-brand-slate">artículos blog/SEO</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-3xl font-semibold text-foreground">{socialItems.length}</div>
                <div className="mt-1 text-sm text-brand-slate">paquetes sociales</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-3xl font-semibold text-foreground">{allItems.length}</div>
                <div className="mt-1 text-sm text-brand-slate">piezas visibles</div>
              </div>
            </div>
          </section>

          <section className="grid gap-6">
            {allItems.map((item) => (
              <article
                key={item.id}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-brand-slate">
                        <CalendarDays className="h-4 w-4" />
                        {item.date}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-brand-slate">
                        {item.type === "Blog" ? <FileText className="h-4 w-4" /> : <Megaphone className="h-4 w-4" />}
                        {item.type}
                      </span>
                      <span className="inline-flex rounded-full border border-brand-primary/20 bg-brand-primary/10 px-3 py-1 text-brand-primary">
                        {item.topic}
                      </span>
                    </div>

                    <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-foreground">{item.title}</h2>
                    <p className="mt-3 text-brand-slate leading-relaxed">{item.description}</p>
                  </div>

                  <a
                    href={`#${item.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary hover:text-brand-secondary"
                  >
                    Ir al contenido
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div id={item.id} className="mt-6 rounded-3xl border border-white/10 bg-brand-dark/60 p-4 md:p-6">
                  <pre className="whitespace-pre-wrap break-words text-sm leading-7 text-white/88 font-sans">
                    {item.content}
                  </pre>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MarketingLibrary;
