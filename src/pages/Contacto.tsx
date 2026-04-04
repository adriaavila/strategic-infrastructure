import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { siteConfig } from "@/data/site";
import { useSEO } from "@/lib/seo";
import { Calendar, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/config/contact";

const Contacto = () => {
  useSEO({
    title: "Contacto",
    description:
      "Habla con Creativv para explorar agentes de IA, automatizaciones de WhatsApp, workflows o sistemas web para tu negocio.",
    path: "/contacto",
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-primary/20 selection:text-foreground">
      <div className="noise-overlay" />
      <Navbar />

      <main className="relative flex-1 overflow-hidden pb-24 pt-32 md:pt-40">
        <div className="absolute inset-0 gradient-mesh-subtle opacity-90" />
        <div className="absolute inset-0 architectural-grid opacity-[0.16]" />

        <div className="container relative z-10 mx-auto max-w-5xl px-6">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">contacto</div>
            <h1 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink md:text-6xl">
              Hablemos de la pagina o sistema que hoy puede ayudarte a vender mejor.
            </h1>
            <p className="mt-5 max-w-[40rem] text-lg leading-relaxed text-foreground/72">
              Si necesitas una landing page, una web mas clara o una herramienta digital que ayude a ordenar mejor tu operacion, aqui tienes la forma mas directa de empezar.
            </p>
          </div>

          <div className="mt-12 grid gap-5">
            <a
              href="/brief?source=contact-page"
              className="group section-shell p-6 md:p-7"
            >
              <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[1.35rem] border border-brand-primary/12 bg-brand-primary/10 text-brand-secondary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-brand-ink">
                      Solicitar diagnostico
                    </h3>
                    <p className="mt-2 max-w-[38rem] text-base leading-relaxed text-foreground/70">
                      Comparte el contexto de tu negocio y te diré cuál es la mejor forma de resolverlo: una landing page, una web más completa o una siguiente fase.
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary transition-colors group-hover:text-brand-primary">
                  Completar brief
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group section-shell p-6 md:p-7"
            >
              <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[1.35rem] border border-border bg-white/88 text-brand-ink">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-brand-ink">Correo</h3>
                    <p className="mt-2 text-base leading-relaxed text-foreground/70">{siteConfig.email}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary transition-colors group-hover:text-brand-primary">
                  Enviar mensaje
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>

            <a
              href={getWhatsAppUrl("Hola, quiero hablar sobre una automatización o sistema con IA para mi negocio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group section-shell p-6 md:p-7"
            >
              <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[1.35rem] border border-border bg-white/88 text-brand-ink">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-brand-ink">WhatsApp</h3>
                    <p className="mt-2 max-w-[38rem] text-base leading-relaxed text-foreground/70">
                      Canal directo para resolver dudas, revisar tu caso y definir el siguiente paso con rapidez.
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary transition-colors group-hover:text-brand-primary">
                  Iniciar chat
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
