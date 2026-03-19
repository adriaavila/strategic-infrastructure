import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Navegación: [
    { label: "Servicios", href: "/#servicios" },
    { label: "Industrias", href: "/industrias" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Historia", href: "/historia" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Términos", href: "/terminos" },
    { label: "Privacidad", href: "/privacidad" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative bg-brand-dark text-white pt-14 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 items-start">
          <div className="md:col-span-2">
            <div className="flex flex-col gap-4 mb-4">
              <img src="/logo.svg" alt="Servicios Creativos Logo" className="w-14 h-14 rounded-xl" />
              <div>
                <div className="text-lg font-semibold tracking-tight text-white">
                  servicios<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">creativos</span>.online
                </div>
                <div className="text-sm text-white/42 mt-1 tracking-wider text-[10px] font-medium uppercase">Arquitectura Digital & IA</div>
              </div>
            </div>
            <p className="mt-4 text-brand-slate text-sm max-w-sm leading-relaxed">
              Agentes autónomos, automatización de WhatsApp y ecosistemas digitales para empresas que persiguen el escalado infinito.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-6">AI Agents</h3>
            <ul className="space-y-3">
              <li><a href="/ai-agent" className="text-sm text-brand-slate hover:text-white transition-colors">Agentes IA para negocios</a></li>
              <li><a href="/ai-agent-real-estate" className="text-sm text-brand-slate hover:text-white transition-colors">Bienes Raíces</a></li>
              <li><a href="/ai-agent-agencies" className="text-sm text-brand-slate hover:text-white transition-colors">Agencias y B2B</a></li>
              <li><a href="/ai-agent-ecommerce" className="text-sm text-brand-slate hover:text-white transition-colors">Ecommerce</a></li>
              <li><a href="/ai-agent-dental" className="text-sm text-brand-slate hover:text-white transition-colors">Odontología</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-6">WhatsApp Auto</h3>
            <ul className="space-y-3">
              <li><a href="/whatsapp-automation" className="text-sm text-brand-slate hover:text-white transition-colors">Automatización general</a></li>
              <li><a href="/whatsapp-automation-clinics" className="text-sm text-brand-slate hover:text-white transition-colors">Clínicas y Salud</a></li>
              <li><a href="/whatsapp-automation-law-firms" className="text-sm text-brand-slate hover:text-white transition-colors">Bufetes Legales</a></li>
              <li><a href="/whatsapp-automation-restaurants" className="text-sm text-brand-slate hover:text-white transition-colors">Restaurantes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="/#servicios" className="text-sm text-brand-slate hover:text-white transition-colors">Servicios</a></li>
              <li><a href="/industrias" className="text-sm text-brand-slate hover:text-white transition-colors font-medium text-brand-primary">Directorio Industrias</a></li>
              <li><a href="/historia" className="text-sm text-brand-slate hover:text-white transition-colors">Nuestra historia</a></li>
              <li><a href="/blog" className="text-sm text-brand-slate hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-brand-slate/80">servicioscreativos<span className="text-brand-primary">.</span>online · Allok LLC</p>
            <p className="text-xs text-brand-slate/80">© {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
