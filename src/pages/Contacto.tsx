import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { useSEO } from "@/lib/seo";
import { Calendar, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/config/contact";

const Contacto = () => {
  useSEO({
    title: "Contacto",
    description: "Agenda una llamada o contacta por correo y WhatsApp para explorar el sistema digital que más sentido tiene para tu negocio.",
    path: "/contacto",
  });

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col font-sans selection:bg-brand-primary/30 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 relative">
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <div className="mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Hablemos de tu sistema digital</h1>
            <p className="text-lg text-brand-slate max-w-2xl">
              Si quieres mejorar tu presencia, automatizar procesos o construir una operación más clara con IA, podemos revisar qué tiene más sentido para tu negocio.
            </p>
          </div>

          <div className="flex flex-col gap-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <a href="/brief?source=contact-page" className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="w-12 h-12 rounded-lg bg-brand-primary/20 text-brand-primary flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Agendar una llamada</h3>
                  <p className="text-sm text-brand-slate">Cuéntame tu contexto y definimos qué sistema conviene construir primero.</p>
                </div>
              </div>
              <Button variant="ghost" className="group-hover:text-brand-primary px-0 hover:bg-transparent">
                Ir al brief <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>

            <a href={`mailto:${siteConfig.email}`} className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="w-12 h-12 rounded-lg bg-white/5 text-brand-slate flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Correo</h3>
                  <p className="text-sm text-brand-slate">{siteConfig.email}</p>
                </div>
              </div>
              <Button variant="ghost" className="text-brand-slate group-hover:text-white px-0 hover:bg-transparent">
                Enviar mensaje <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>

            <a href={getWhatsAppUrl("Hola, quiero hablar sobre un sistema digital con IA para mi negocio.")} target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="w-12 h-12 rounded-lg bg-white/5 text-brand-slate flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">WhatsApp</h3>
                  <p className="text-sm text-brand-slate">Canal directo para una conversación rápida.</p>
                </div>
              </div>
              <Button variant="ghost" className="text-brand-slate group-hover:text-white px-0 hover:bg-transparent">
                Iniciar chat <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
