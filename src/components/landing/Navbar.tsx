import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getWhatsAppUrl } from "@/config/contact";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { label: "Soluciones", href: "/#soluciones" },
  { label: "Metodo", href: "/#metodo" },
  { label: "Casos", href: "/#casos" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let frameId = 0;

    const updateScrolledState = () => {
      frameId = 0;
      const nextIsScrolled = window.scrollY > 18;
      setIsScrolled((current) => (current === nextIsScrolled ? current : nextIsScrolled));
    };

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrolledState);
    };

    updateScrolledState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="container mx-auto px-4 pt-4 sm:px-6">
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "rounded-[2rem] border border-brand-platinum/90 bg-white/88 shadow-[0_22px_60px_rgba(17,19,27,0.08)] backdrop-blur-2xl"
              : "rounded-[2rem] border border-white/70 bg-white/76 shadow-[0_16px_40px_rgba(17,19,27,0.05)] backdrop-blur-xl"
          }`}
        >
          <div className="flex h-[76px] items-center justify-between px-4 sm:px-6">
            <Link to="/" className="flex items-center gap-3 min-w-0">
              <div className="min-w-0">
                <Logo className="text-[1.85rem]" />
              </div>
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={getWhatsAppUrl("Hola, quiero explorar una automatización o sistema con IA para mi negocio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-primary"
              >
                WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Button variant="hero" size="sm" asChild>
                <a href="/brief?source=navbar">Solicitar diagnostico</a>
              </Button>
            </div>

            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-brand-ink shadow-sm transition-colors hover:border-brand-primary/25 hover:text-brand-primary lg:hidden"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="animate-fade-in border-t border-border px-4 pb-5 pt-4 lg:hidden sm:px-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-brand-ink transition-colors hover:bg-secondary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-4 grid gap-3">
                <Button variant="hero" asChild className="w-full">
                  <a href="/brief?source=navbar-mobile">Solicitar diagnostico</a>
                </Button>
                <Button variant="hero-outline" asChild className="w-full">
                  <a
                    href={getWhatsAppUrl("Hola, quiero explorar una automatización o sistema con IA para mi negocio.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hablar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
