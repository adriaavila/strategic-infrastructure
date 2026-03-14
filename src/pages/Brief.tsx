import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/site";
import { useSEO } from "@/lib/seo";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

type ContactPreference = "whatsapp" | "email";

const projectTypeOptions = [
  "Sistema web para ventas",
  "Website o landing page",
  "Ecommerce",
  "Automatización con IA",
  "Dashboard o sistema interno",
  "Integración con WhatsApp o API",
  "Otro",
];

const sourceLabels: Record<string, string> = {
  hero: "Solicitud desde el hero principal",
  "hero-call": "Llamada solicitada desde el hero",
  historia: "Solicitud desde Historia",
  contacto: "Solicitud desde contacto",
  "contact-page": "Solicitud desde la página de contacto",
  "cta-final": "Solicitud desde el CTA final",
  "oferta-home": "Solicitud desde la sección de oferta",
  "processo-home": "Solicitud desde cómo trabajo",
};

const Brief = () => {
  const [searchParams] = useSearchParams();
  const source = searchParams.get("source") || "hero";
  const [contactPreference, setContactPreference] = useState<ContactPreference>("whatsapp");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    website: "",
    projectType: "Sistema web para ventas",
    budget: "",
    timeline: "",
    goals: "",
    scope: "",
    references: "",
  });

  useSEO({
    title: "Solicitar proyecto",
    description: "Completa el brief para compartir objetivos, alcance y contexto de tu próximo sistema digital.",
    path: "/brief",
  });

  const message = useMemo(() => {
    const lines = [
      `Nuevo brief — ${sourceLabels[source] || source}`,
      `Nombre: ${form.name || "No indicado"}`,
      `Empresa: ${form.company || "No indicada"}`,
      `Correo: ${form.email || "No indicado"}`,
      `WhatsApp cliente: ${form.whatsapp || "No indicado"}`,
      `Sitio actual: ${form.website || "No indicado"}`,
      `Tipo de proyecto: ${form.projectType || "No indicado"}`,
      `Presupuesto estimado: ${form.budget || "No indicado"}`,
      `Tiempo esperado: ${form.timeline || "No indicado"}`,
      `Objetivo principal: ${form.goals || "No indicado"}`,
      `Qué necesita el sistema: ${form.scope || "No indicado"}`,
      `Referencias / links: ${form.references || "No indicado"}`,
      `Canal preferido del cliente: ${contactPreference === "whatsapp" ? "WhatsApp" : "Correo"}`,
    ];
    return lines.join("\n");
  }, [contactPreference, form, source]);

  const whatsappHref = `${siteConfig.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Nuevo brief desde ${siteConfig.name}`)}&body=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-card/60 backdrop-blur-sm mb-6 text-xs uppercase tracking-wider text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse-soft" />
              Brief de sistema digital
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">Cuéntame qué quieres construir</h1>
            <p className="text-lg text-brand-slate leading-relaxed">
              Este brief me ayuda a entender si el mayor impacto está en una web, una automatización con IA o un sistema más amplio para tu negocio.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 md:p-8 space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div><label className="text-sm text-white/80 mb-2 block">Nombre</label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" /></div>
                <div><label className="text-sm text-white/80 mb-2 block">Empresa</label><Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Empresa / marca" /></div>
                <div><label className="text-sm text-white/80 mb-2 block">Correo</label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@empresa.com" /></div>
                <div><label className="text-sm text-white/80 mb-2 block">WhatsApp</label><Input value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="+58..." /></div>
                <div><label className="text-sm text-white/80 mb-2 block">Sitio actual</label><Input value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} placeholder="https://..." /></div>
                <div>
                  <label className="text-sm text-white/80 mb-2 block">Tipo de proyecto</label>
                  <select value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })} className="w-full h-10 rounded-lg border border-white/10 bg-transparent px-3 text-sm text-white light:text-foreground light:border-foreground/10 light:bg-white/70">
                    {projectTypeOptions.map((option) => <option key={option} value={option} className="bg-brand-dark light:bg-white">{option}</option>)}
                  </select>
                </div>
                <div><label className="text-sm text-white/80 mb-2 block">Presupuesto estimado</label><Input value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} placeholder="Ej. 2.000 - 5.000 USD" /></div>
                <div><label className="text-sm text-white/80 mb-2 block">Tiempo esperado</label><Input value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} placeholder="Ej. 4 semanas" /></div>
              </div>

              <div>
                <label className="text-sm text-white/80 mb-2 block">Objetivo principal</label>
                <Textarea value={form.goals} onChange={(e) => setForm({ ...form, goals: e.target.value })} placeholder="¿Qué quieres mejorar en ventas, operación o eficiencia?" className="min-h-[110px]" />
              </div>
              <div>
                <label className="text-sm text-white/80 mb-2 block">Qué necesita el sistema</label>
                <Textarea value={form.scope} onChange={(e) => setForm({ ...form, scope: e.target.value })} placeholder="Páginas, automatizaciones, flujos, integraciones, dashboards, atención por WhatsApp, etc." className="min-h-[140px]" />
              </div>
              <div>
                <label className="text-sm text-white/80 mb-2 block">Referencias</label>
                <Textarea value={form.references} onChange={(e) => setForm({ ...form, references: e.target.value })} placeholder="Links de referencia, competidores, herramientas actuales, inspiración visual" className="min-h-[100px]" />
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 md:p-8 h-fit lg:sticky lg:top-28">
              <h2 className="text-2xl font-semibold mb-4">Enviar brief</h2>
              <p className="text-sm text-brand-slate leading-relaxed mb-6">
                Elige el canal principal y envía el resumen con un clic. Así puedo responderte con una propuesta más clara.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <button type="button" onClick={() => setContactPreference("whatsapp")} className={`rounded-2xl border px-4 py-3 text-sm transition-colors ${contactPreference === "whatsapp" ? "border-brand-secondary bg-brand-secondary/15 text-brand-secondary" : "border-white/10 text-white/70 bg-white/5 light:text-foreground/70 light:bg-white/70 light:border-foreground/10"}`}>WhatsApp</button>
                <button type="button" onClick={() => setContactPreference("email")} className={`rounded-2xl border px-4 py-3 text-sm transition-colors ${contactPreference === "email" ? "border-brand-secondary bg-brand-secondary/15 text-brand-secondary" : "border-white/10 text-white/70 bg-white/5 light:text-foreground/70 light:bg-white/70 light:border-foreground/10"}`}>Correo</button>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 mb-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-brand-secondary/80 font-semibold mb-2">Origen</div>
                <p className="text-sm text-white/75">{sourceLabels[source] || "Solicitud general"}</p>
              </div>

              <div className="space-y-3">
                <Button asChild size="lg" className="w-full">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" /> Enviar por WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full bg-transparent text-white border-white/15 hover:bg-white/10 light:text-foreground light:border-foreground/15 light:hover:bg-foreground/5">
                  <a href={emailHref}>
                    <Mail className="w-4 h-4" /> Enviar por correo
                  </a>
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 text-sm text-brand-slate leading-relaxed">
                <p className="flex items-start gap-2"><Send className="w-4 h-4 mt-0.5 text-brand-secondary" />Mientras más claro sea el contexto del negocio, más precisa será la recomendación sobre qué construir primero.</p>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Brief;
