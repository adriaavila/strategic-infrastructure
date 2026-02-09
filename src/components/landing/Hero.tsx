import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ParticleBackground } from "@/components/particles/ParticleBackground";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark bg-hero-gradient">
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 architectural-grid opacity-30" />

      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Particle Animation Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline chip - white border, Cyber Mint dot */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-card/80 backdrop-blur-sm mb-8 opacity-0 animate-fade-up shadow-architectural"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse-soft" />
            <span className="text-sm text-white font-medium">Sistemas de IA que ejecutan tu negocio</span>
          </div>

          {/* Headline - white + Cyber Mint highlight */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 opacity-0 animate-fade-up text-balance font-heading text-white"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            Menos teoría.
            <br />
            Mas Ejecución con IA.
            <br />
            <span className="text-brand-secondary text-4xl md:text-5xl lg:text-6xl block mt-3">Sistemas autónomos que liberan a tu equipo.</span>
          </h1>

          {/* Subhead - Slate */}
          <p
            className="text-xl md:text-2xl text-brand-slate max-w-3xl mx-auto mb-12 opacity-0 animate-fade-up leading-relaxed"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            Implementamos agentes, automatización y bases de conocimiento que resuelven tareas reales, hoy mismo.
          </p>

          {/* CTA - Electric Violet */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            <Button variant="hero" size="lg" asChild className="group shadow-lg hover:shadow-xl transition-all">
              <a href="/#contacto">
                Consultoría Gratuita de 15 min
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
    </section>
  );
};
