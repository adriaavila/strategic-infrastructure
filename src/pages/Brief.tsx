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
  "Landing page",
  "Website corporativo",
  "Ecommerce",
  "Dashboard interno",
  "Automatización",
  "Integración con WhatsApp/API",
  "Otro",
];

const sourceLabels: Record<string, string> = {
  hero: "Solicitud desde el hero principal",
  historia: "Brief iniciado desde la página Historia",
  contacto: "Solicitud desde la sección de contacto",
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
    projectType: "Landing page",
    budget: "",
    timeline: "",
    goals: "",
    scope: "",
    references: "",
  });

  useSEO({
    title: "Solicitar proyecto",
    description: "Completa el brief para compartir objetivos, alcance y datos de contacto de tu próximo proyecto.",
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
      `Qué necesita el proyecto: ${form.scope || "No indicado"}`,
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
              Brief de proyecto
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">Cuéntame qué necesitas construir</h1>
            <p className="text-lg text-brand-slate leading-relaxed">
              Este flujo está pensado para acelerar discovery. Recojo lo esencial del proyecto y luego puedes enviarlo por WhatsApp o por correo con un solo clic.
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
                <div><label className="text-sm text-white/80 mb-2 block">Presupuesto estimado</label><Input value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} placeholder="Ej. 1.500 - 3.000 USD" /></div>
                <div><label className="text-sm text-white/80 mb-2 block">Tiempo esperado</label><Input value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} placeholder="Ej. 3 semanas" /></div>
              </div>

              <div>
                <label className="text-sm text-white/80 mb-2 block">Objetivo principal</label>
                <Textarea value={form.goals} onChange={(e) => setForm({ ...form, goals: e.target.value })} placeholder="¿Qué quieres lograr con este proyecto?" className="min-h-[110px]" />
              </div>
              <div>
                <label className="text-sm text-white/80 mb-2 block">Qué necesita el proyecto</label>
                <Textarea value={form.scope} onChange={(e) => setForm({ ...form, scope: e.target.value })} placeholder="Páginas, funcionalidades, integraciones, embudos, automatizaciones, etc." className="min-h-[140px]" />
              </div>
              <div>
                <label className="text-sm text-white/80 mb-2 block">Referencias</label>
                <Textarea value={form.references} onChange={(e) => setForm({ ...form, references: e.target.value })} placeholder="Links de referencia, competidores, notas, inspiración visual" className="min-h-[100px]" />
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 md:p-8 h-fit lg:sticky lg:top-28">
              <h2 className="text-2xl font-semibold mb-4">Enviar brief</h2>
              <p className="text-sm text-brand-slate leading-relaxed mb-6">
                Elige el canal principal para que podamos responderte. El mensaje se genera con toda la información del formulario.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <button type="button" onClick={() => setContactPreference("whatsapp")} className={`rounded-2xl border px-4 py-3 text-sm transition-colors ${contactPreference === "whatsapp" ? "border-brand-secondary bg-brand-secondary/15 text-brand-secondary" : "border-white/10 text-white/70 bg-white/5 light:text-foreground/70 light:bg-white/70 light:border-foreground/10"}`}>WhatsApp</button>
                <button type="button" onClick={() => setContactPreference("email")} className={`rounded-2xl border px-4 py-3 text-sm transition-colors ${contactPreference === "email" ? "border-brand-secondary bg-brand-secondary/15 text-brand-secondary" : "border-white/10 text-white/70 bg-white/5 light:text-foreground/70 light:bg-white/70 light:border-foreground/10"}`}>Correo</button>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 mb-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-brand-secondary/80 font-semibold mb-2">Origen</div>
                <p className="text-sm text-white/75">{sourceLabels[source] || "Solicitud general de proyecto"}</p>
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
                <p className="flex items-start gap-2"><Send className="w-4 h-4 mt-0.5 text-brand-secondary" />Recomendación: mientras más claro sea el brief, más rápido puedo proponerte alcance, tiempos y estructura del proyecto.</p>
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
