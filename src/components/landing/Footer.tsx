import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getWhatsAppUrl } from "@/config/contact";
import { siteConfig } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import {
  footerCityLinks,
  footerIndustryLinks,
  footerResourceLinks,
  footerSolutionLinks,
} from "@/data/internal-links";

const footerLinks = [
  { label: "Builder", href: "/#builder" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Catalogo", href: "/#catalogo" },
  { label: "MVP", href: "/#mvp" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black py-10">
      <div className="container mx-auto px-6">
        <div className="section-shell px-6 py-8 md:px-8 md:py-10">
          <div className="relative z-10 grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
            <div>
              <div className="flex items-center gap-4">
                <div>
                  <Logo className="text-[2.2rem] mb-2" />
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    service builder para servicios digitales
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-[34rem] text-base leading-relaxed text-foreground/72">
                Convierte una necesidad ambigua en una propuesta estructurada para landing pages,
                automatizaciones de WhatsApp, sistemas de captacion y MVP web apps simples.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Navegacion
                </div>
                <div className="mt-4 space-y-3">
                  {footerLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block text-sm font-medium text-foreground/72 transition-colors hover:text-brand-secondary"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Soluciones
                </div>
                <div className="mt-4 space-y-3">
                  {footerSolutionLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block text-sm font-medium text-foreground/72 transition-colors hover:text-brand-secondary"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Industrias y ciudades
                </div>
                <div className="mt-4 space-y-3">
                  {[...footerIndustryLinks, ...footerCityLinks].map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block text-sm font-medium text-foreground/72 transition-colors hover:text-brand-secondary"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Recursos y contacto
                </div>
                <div className="mt-4 space-y-3 text-sm text-foreground/72">
                  {footerResourceLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block transition-colors hover:text-brand-secondary"
                    >
                      {link.title}
                    </Link>
                  ))}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="block transition-colors hover:text-brand-secondary"
                  >
                    {siteConfig.email}
                  </a>
                  <a
                    href={getWhatsAppUrl("Hola, quiero hablar sobre Service Builder y una propuesta para mi negocio.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-brand-secondary"
                  >
                    WhatsApp
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              Creativv · {siteConfig.legalName}
            </p>
            <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
