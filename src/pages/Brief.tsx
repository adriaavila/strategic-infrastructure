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
  "Agente IA",
  "Automatización de WhatsApp",
  "AI workflow / integraciones",
  "Website o landing",
  "Ecommerce",
  "Sistema interno o dashboard",
  "Otro",
];

const sourceLabels: Record<string, string> = {
  hero: "Solicitud desde la home",
  "hero-call": "Solicitud desde el hero",
  contacto: "Solicitud desde contacto",
  "contact-page": "Solicitud desde la página de contacto",
  "cta-final": "Solicitud desde el CTA final",
  "oferta-home": "Solicitud desde la sección de soluciones",
  "processo-home": "Solicitud desde el método",
  "process-home": "Solicitud desde el método",
  navbar: "Solicitud desde navegación",
  "navbar-mobile": "Solicitud desde navegación móvil",
  footer: "Solicitud desde footer",
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
    projectType: "Agente IA",
    budget: "",
    timeline: "",
    goals: "",
    scope: "",
    references: "",
  });

  useSEO({
    title: "Solicitar diagnostico",
    description:
      "Comparte el contexto de tu negocio y el tipo de sistema que necesitas. Creativv responde con una recomendación clara sobre qué conviene construir primero.",
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

  const inputClassName =
    "h-12 rounded-2xl border-border bg-white/86 px-4 text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:ring-brand-primary/20";
  const textareaClassName =
    "rounded-[1.35rem] border-border bg-white/86 px-4 py-3 text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:ring-brand-primary/20";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-primary/20 selection:text-foreground">
      <div className="noise-overlay" />
      <Navbar />
      <main className="relative overflow-hidden pb-24 pt-32 md:pt-40">
        <div className="absolute inset-0 gradient-mesh-subtle opacity-90" />
        <div className="absolute inset-0 architectural-grid opacity-[0.16]" />

        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">solicitar diagnostico</div>
            <h1 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink md:text-6xl">
              Cuéntame qué quieres resolver y qué parte del negocio hoy genera fricción.
            </h1>
            <p className="mt-5 max-w-[42rem] text-lg leading-relaxed text-foreground/72">
              Este brief toma unos minutos. Con esta información puedo decirte qué sistema conviene
              construir primero y por dónde tiene más sentido empezar.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="section-shell p-7 md:p-8">
              <div className="relative z-10 space-y-8">
                <section>
                  <div className="mb-5">
                    <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      Paso 1
                    </div>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-ink">
                      Contexto básico
                    </h2>
                    <p className="mt-2 text-sm text-foreground/68">
                      Lo necesario para entender el negocio, el momento y cómo responderte.
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground/78">Nombre</label>
                      <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" className={inputClassName} />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground/78">Empresa</label>
                      <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Empresa o marca" className={inputClassName} />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground/78">Correo</label>
                      <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@empresa.com" className={inputClassName} />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground/78">WhatsApp</label>
                      <Input value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="+58..." className={inputClassName} />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground/78">
                        Sitio actual <span className="text-muted-foreground">(opcional)</span>
                      </label>
                      <Input value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} placeholder="https://..." className={inputClassName} />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground/78">Tipo de proyecto</label>
                      <select
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                        className={`${inputClassName} w-full`}
                      >
                        {projectTypeOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="mb-5">
                    <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      Paso 2
                    </div>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-ink">
                      Objetivo y alcance
                    </h2>
                    <p className="mt-2 text-sm text-foreground/68">
                      Aquí se entiende dónde está el cuello de botella y qué tan cerca estás de resolverlo.
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground/78">
                        Presupuesto estimado <span className="text-muted-foreground">(opcional)</span>
                      </label>
                      <Input value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} placeholder="Ej. 2.000 - 5.000 USD" className={inputClassName} />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground/78">
                        Tiempo esperado <span className="text-muted-foreground">(opcional)</span>
                      </label>
                      <Input value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} placeholder="Ej. 4 semanas" className={inputClassName} />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-medium text-foreground/78">Objetivo principal</label>
                    <Textarea value={form.goals} onChange={(e) => setForm({ ...form, goals: e.target.value })} placeholder="¿Qué quieres mejorar en ventas, operación o eficiencia?" className={`${textareaClassName} min-h-[120px]`} />
                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-medium text-foreground/78">Qué necesita el sistema</label>
                    <Textarea value={form.scope} onChange={(e) => setForm({ ...form, scope: e.target.value })} placeholder="Flujos, integraciones, automatizaciones, dashboard, WhatsApp, ecommerce, etc." className={`${textareaClassName} min-h-[145px]`} />
                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-medium text-foreground/78">
                      Referencias <span className="text-muted-foreground">(opcional)</span>
                    </label>
                    <Textarea value={form.references} onChange={(e) => setForm({ ...form, references: e.target.value })} placeholder="Links, competidores, ejemplos o notas útiles" className={`${textareaClassName} min-h-[110px]`} />
                  </div>
                </section>
              </div>
            </div>

            <aside className="section-shell h-fit p-7 lg:sticky lg:top-28 md:p-8">
              <div className="relative z-10">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Paso 3
                </div>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-ink">
                  Enviar información
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/68">
                  Elige el canal principal y te responderé con una recomendación inicial sobre qué conviene construir primero.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setContactPreference("whatsapp")}
                    className={`rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${
                      contactPreference === "whatsapp"
                        ? "border-brand-primary/15 bg-brand-primary/10 text-brand-secondary"
                        : "border-border bg-white/72 text-foreground/70"
                    }`}
                  >
                    WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactPreference("email")}
                    className={`rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${
                      contactPreference === "email"
                        ? "border-brand-primary/15 bg-brand-primary/10 text-brand-secondary"
                        : "border-border bg-white/72 text-foreground/70"
                    }`}
                  >
                    Correo
                  </button>
                </div>

                <div className="mt-6 rounded-[1.35rem] border border-border bg-white/84 p-4 shadow-sm">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    Origen
                  </div>
                  <p className="mt-2 text-sm text-foreground/72">{sourceLabels[source] || "Solicitud general"}</p>
                </div>

                <div className="mt-6 space-y-3">
                  <Button asChild size="lg" variant="hero" className="w-full justify-center">
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" /> Enviar por WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="hero-outline" className="w-full justify-center">
                    <a href={emailHref}>
                      <Mail className="h-4 w-4" /> Enviar por correo
                    </a>
                  </Button>
                </div>

                <div className="mt-6 rounded-[1.35rem] border border-border bg-[#F7F4FB] p-4">
                  <div className="space-y-3 text-sm leading-relaxed text-foreground/70">
                    <p className="flex items-start gap-2">
                      <Send className="mt-0.5 h-4 w-4 text-brand-secondary" />
                      Respuesta inicial con recomendación, alcance probable y siguiente paso.
                    </p>
                    <p>Campos clave: nombre, empresa, objetivo principal y qué necesita el sistema.</p>
                  </div>
                </div>
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
