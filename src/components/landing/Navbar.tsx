import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "Historia", href: "/historia" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Blog", href: "/blog" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-dark/78 dark:bg-brand-dark/78 backdrop-blur-2xl border-b border-foreground/10 light:bg-background/90" : "bg-transparent"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-3 text-white">
            <img src="/logo.svg" alt="servicioscreativos.online" className="w-9 h-9 rounded-sm flex-shrink-0" />
            <div className="leading-none">
              <div className="text-[15px] font-semibold tracking-tight text-white">servicioscreativos.online</div>
              <div className="text-[11px] text-white/44 light:text-slate-500">Sistemas digitales con IA para negocio</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} className="text-sm text-brand-slate hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link to="/contacto">
              <Button variant="hero" size="sm" className="rounded-xl px-4">
                Contacto
              </Button>
            </Link>
          </div>

          <button className="md:hidden p-2 -mr-2 text-brand-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[72px] left-0 right-0 bg-brand-dark/96 backdrop-blur-2xl border-b border-white/10 py-4 animate-fade-in">
            <div className="container mx-auto px-6 flex flex-col gap-4">
              <div className="flex justify-start"><ThemeToggle /></div>
              {navLinks.map((link) => (
                <Link key={link.label} to={link.href} className="text-sm text-brand-slate hover:text-white transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="hero" size="sm" className="w-full rounded-xl">Contacto</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
