import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getWhatsAppUrl } from "@/config/contact";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "Catálogo", href: "#catalogo" },
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
              ? "rounded-[2rem] border border-white/10 bg-black/50 shadow-[0_22px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
              : "rounded-[2rem] border border-white/5 bg-black/30 shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl"
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
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                  className="text-sm font-medium text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={getWhatsAppUrl("Hola, quiero hacer una consulta sobre Creativv.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-brand-primary/40 hover:text-brand-primary hover:bg-white/5"
              >
                Escríbenos
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white shadow-sm transition-colors hover:border-brand-primary/40 hover:text-brand-primary lg:hidden"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="animate-fade-in border-t border-white/10 px-4 pb-5 pt-4 lg:hidden sm:px-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (location.pathname === "/") {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-4 grid gap-3">
                <Button variant="hero-outline" asChild className="w-full">
                  <a
                    href={getWhatsAppUrl("Hola, quiero hacer una consulta sobre Creativv.")}
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
