import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Historia", href: "/historia" },
  { label: "Blog", href: "/blog" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-brand-dark/80 backdrop-blur-xl border-b border-white/10"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - servicioscreativos.online with violet dot */}
          <a href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
            <img src="/logo.svg" alt="servicioscreativos.online" className="w-8 h-8 rounded-sm flex-shrink-0" />
            <span>servicioscreativos</span>
            <span className="text-brand-primary">.</span>
            <span>online</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-brand-slate hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="/contacto">
              <Button variant="hero" size="sm" className="rounded-lg">
                Contacto
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-brand-dark border-b border-white/10 py-4 animate-fade-in">
            <div className="container mx-auto px-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-brand-slate hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="hero" size="sm" className="w-full rounded-lg">
                  Contacto
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
