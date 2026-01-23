import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-sm text-muted-foreground">Diseño de Soluciones + Ejecución</span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 opacity-0 animate-fade-up text-balance"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            Diseñamos y construimos sistemas web a medida.
          </h1>

          {/* Subheader */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            Websites, webapps y e-commerce creados desde la lógica de tu negocio.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            <Button variant="hero" size="lg" className="group">
              Definir mi proyecto
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
