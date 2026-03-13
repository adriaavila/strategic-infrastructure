import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Navegación: [
    { label: "Servicios", href: "/#servicios" },
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
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.8fr_0.8fr] gap-10 mb-12 items-start">
          <div>
            <div className="flex flex-col gap-4 mb-4">
              <img src="/logo.svg" alt="Servicios Creativos Logo" className="w-14 h-14 rounded-xl" />
              <div>
                <div className="text-lg font-semibold tracking-tight text-white">servicioscreativos.online</div>
                <div className="text-sm text-white/42 mt-1">Diseño, desarrollo y automatización para negocios que buscan una presencia más sólida y una operación más clara.</div>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium mb-3 text-white/84">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="group text-sm text-brand-slate hover:text-white transition-colors inline-flex items-center gap-1">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-brand-slate/80">servicioscreativos.online · Allok LLC</p>
            <p className="text-xs text-brand-slate/80">© {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
