import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";
import { landingCtas, navItems } from "@/data/landing";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 md:px-5",
          scrolled ? "border-white/10 bg-[#090d13]/80 shadow-2xl backdrop-blur-xl" : "border-white/8 bg-white/[0.03] backdrop-blur-md"
        )}
      >
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-violet-500 text-[#04120c] shadow-lg shadow-emerald-500/10">
            <MessageCircleMore className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight">servicioscreativos.online</div>
            <div className="text-xs text-white/45">Agente de WhatsApp con IA</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-white/65 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a href={landingCtas.secondary}>
            <Button variant="outline" size="sm" className="border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06]">
              Solicitar implementación
            </Button>
          </a>
          <a href={landingCtas.primary} target="_blank" rel="noreferrer">
            <Button size="sm" className="rounded-xl bg-emerald-400 text-[#032415] hover:bg-emerald-300">
              Agendar demo
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
