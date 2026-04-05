import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { getWhatsAppUrl } from "@/config/contact";
import { Logo } from "@/components/ui/Logo";

export const Hero = () => {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden lg:h-[100svh]">
      <div className="absolute inset-0 overflow-hidden bg-background" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--brand-primary)_0%,transparent_50%)] opacity-[0.06] dark:opacity-[0.12]" />

        <div className="absolute inset-x-0 h-[120vh] md:h-[150vh] -top-[10vh] md:-top-[25vh] will-change-transform mix-blend-normal dark:mix-blend-screen opacity-90 md:opacity-100">
          <div className="hero-blob hero-blob-a absolute top-[10%] -right-[10%] h-[120vw] w-[120vw] rounded-full bg-brand-primary/10 blur-[100px] md:h-[800px] md:w-[800px] md:right-[5%] md:top-[5%] md:blur-[160px]" />
          <div className="hero-blob hero-blob-b absolute top-[30%] -left-[20%] h-[110vw] w-[110vw] rounded-full bg-brand-secondary/15 blur-[90px] md:left-auto md:right-[15%] md:top-[25%] md:h-[700px] md:w-[700px] md:blur-[140px]" />
          <div className="hero-blob hero-blob-c absolute bottom-[20%] right-[10%] h-[100vw] w-[100vw] rounded-full bg-accent-purple/15 blur-[90px] md:right-[25%] md:bottom-[25%] md:h-[600px] md:w-[600px] md:blur-[130px]" />
        </div>

        <div className="absolute inset-0 architectural-grid opacity-[0.25] dark:opacity-[0.12] [mask-image:radial-gradient(ellipse_120%_120%_at_50%_30%,#000_20%,transparent_70%)] md:[mask-image:radial-gradient(ellipse_100%_100%_at_70%_50%,#000_30%,transparent_100%)]" />

        <div className="absolute inset-0 md:left-[20%] lg:left-[30%] overflow-hidden pointer-events-none opacity-60 dark:opacity-40">
          <svg className="absolute w-[160%] h-[160%] -top-[30%] -left-[30%] md:w-[130%] md:h-[130%] md:-top-[15%] md:-left-[15%]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" className="text-brand-primary" stopOpacity="0" />
                <stop offset="50%" stopColor="currentColor" className="text-brand-primary" stopOpacity="0.6" />
                <stop offset="100%" stopColor="currentColor" className="text-brand-primary" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="line-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="currentColor" className="text-brand-secondary" stopOpacity="0" />
                <stop offset="50%" stopColor="currentColor" className="text-brand-secondary" stopOpacity="0.5" />
                <stop offset="100%" stopColor="currentColor" className="text-brand-secondary" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d="M 15 90 Q 40 55 65 70 T 100 15"
              pathLength="1"
              fill="none"
              stroke="url(#line-gradient-1)"
              strokeWidth="0.12"
              className="hero-path hero-path-a"
            />
            <path
              d="M 0 45 Q 45 45 55 65 T 115 85"
              pathLength="1"
              fill="none"
              stroke="url(#line-gradient-2)"
              strokeWidth="0.1"
              strokeDasharray="0.14 0.1"
              className="hero-path hero-path-b"
            />
            <path
              d="M 25 0 C 45 45 65 25 85 115"
              pathLength="1"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.08"
              style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
              className="hero-path hero-path-c text-brand-primary/30 dark:text-brand-primary/10"
            />

            <circle
              cx="65"
              cy="70"
              r="0.6"
              className="hero-node hero-node-a fill-brand-primary"
            />
            <circle
              cx="65"
              cy="70"
              r="2.5"
              className="hero-ring hero-ring-a fill-brand-primary/20"
            />

            <circle
              cx="55"
              cy="65"
              r="0.5"
              className="hero-node hero-node-b fill-brand-secondary"
            />
            <circle
              cx="55"
              cy="65"
              r="2"
              className="hero-ring hero-ring-b fill-brand-secondary/15"
            />
          </svg>
        </div>

        <div
          className="absolute inset-0 mix-blend-overlay pointer-events-none opacity-[0.25] dark:opacity-[0.1]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
        />

        <div className="hero-beam hero-beam-a absolute top-[40%] left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent mix-blend-plus-lighter md:left-[40%] md:w-[60%]" />
        <div className="hero-beam hero-beam-b absolute top-[60%] left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent-purple/10 to-transparent mix-blend-plus-lighter md:left-[30%] md:w-[50%]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 md:h-56 bg-gradient-to-t from-background via-background/80 md:via-background/70 to-transparent z-10" />

      <div className="relative z-10 flex min-h-[100svh] items-center lg:h-[100svh]">
        <div className="w-full px-6 pb-10 pt-28 md:px-10 md:pb-12 md:pt-32 lg:pt-28 xl:pt-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-[42rem]">
              <div className="hero-entry mt-0" style={{ animationDelay: "60ms" }}>
                <Logo className="text-[clamp(2.8rem,7vw,5.8rem)] xl:text-[clamp(3.2rem,7.6vw,6.1rem)]" symbolClassName="translate-y-[12%]" />
              </div>

              <h1
                className="hero-entry mt-2 max-w-[14ch] font-heading text-[clamp(2.1rem,4.8vw,4.35rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-balance text-foreground/92 lg:max-w-[15ch] xl:max-w-[16ch]"
                style={{ animationDelay: "140ms" }}
              >
                Websites, landing pages y sistemas web para negocios que necesitan vender con mas claridad.
              </h1>

              <p
                className="hero-entry mt-4 max-w-[40rem] text-[0.98rem] leading-7 text-foreground/76 md:text-base md:leading-7 lg:text-[1.02rem]"
                style={{ animationDelay: "240ms" }}
              >
                Diseño y construyo paginas y sistemas web que ayudan a presentar mejor tu oferta, generar confianza desde la primera visita y convertir mas interes en contactos reales.
              </p>

              <div
                className="hero-entry mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
                style={{ animationDelay: "320ms" }}
              >
                <Button variant="hero" size="lg" asChild className="justify-center">
                  <a href="/brief?source=hero-call">
                    Solicitar diagnostico
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild className="justify-center">
                  <a
                    href={getWhatsAppUrl("Hola, quiero hablar sobre una web o web app para mi negocio.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hablar por WhatsApp
                    <MessageSquareText className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
