import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ParticleBackground } from "@/components/particles/ParticleBackground";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Animation Background */}
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-card mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Servicios creativos y digitales</span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 opacity-0 animate-fade-up text-balance"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            Tu equipo creativo, sin el costo de un equipo.
          </h1>

          {/* Subheader */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            Diseño, desarrollo web y marketing digital para empresas que quieren crecer sin complicaciones.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            <Button variant="hero" size="lg" className="group">
              Ver servicios
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="lg">
              <MessageCircle className="w-4 h-4" />
              Solicitar cotización
            </Button>
          </div>

          {/* Stats Row */}
          <div 
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-foreground/5 max-w-xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight">48h</div>
              <div className="text-sm text-muted-foreground mt-1">Tiempo de entrega</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Soporte</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
