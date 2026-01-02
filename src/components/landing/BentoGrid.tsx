import { Palette, Megaphone, PenTool, Layout } from "lucide-react";
import { useEffect, useRef } from "react";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  visual: React.ReactNode;
  delay?: number;
}

const BentoCard = ({ title, description, icon, className, visual, delay = 0 }: BentoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group relative bg-card border border-foreground/[0.08] rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-foreground/[0.15] card-glow opacity-0 animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-foreground/5 mb-4">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

      {/* Visual */}
      <div className="mt-6 -mx-6 -mb-6">
        {visual}
      </div>
    </div>
  );
};

// Web Design Visual
const WebDesignVisual = () => (
  <div className="bg-foreground/[0.03] border-t border-foreground/[0.08] p-5 h-52 overflow-hidden">
    <div className="space-y-3">
      {/* Browser mockup */}
      <div className="rounded-lg border border-foreground/10 overflow-hidden animate-fade-up" style={{ animationDelay: '100ms' }}>
        <div className="flex items-center gap-1.5 px-3 py-2 bg-foreground/5 border-b border-foreground/10">
          <div className="w-2 h-2 rounded-full bg-red-400/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <div className="w-2 h-2 rounded-full bg-green-400/60" />
          <div className="flex-1 mx-2 h-4 rounded bg-foreground/5" />
        </div>
        <div className="p-3 space-y-2">
          <div className="h-8 rounded bg-gradient-to-r from-emerald-500/20 to-blue-500/20" />
          <div className="grid grid-cols-3 gap-2">
            <div className="h-12 rounded bg-foreground/5" />
            <div className="h-12 rounded bg-foreground/5" />
            <div className="h-12 rounded bg-foreground/5" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Branding Visual
const BrandingVisual = () => (
  <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
    <div className="flex items-center justify-center h-full gap-4">
      {/* Color palette */}
      <div className="space-y-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
        <div className="w-8 h-8 rounded-lg bg-neutral-900" />
        <div className="w-8 h-8 rounded-lg bg-emerald-500" />
        <div className="w-8 h-8 rounded-lg bg-slate-200" />
      </div>
      {/* Logo placeholder */}
      <div className="w-20 h-20 rounded-2xl border-2 border-dashed border-foreground/20 flex items-center justify-center animate-fade-up" style={{ animationDelay: '300ms' }}>
        <span className="text-2xl font-bold text-foreground/30">A</span>
      </div>
      {/* Typography */}
      <div className="space-y-1 animate-fade-up" style={{ animationDelay: '500ms' }}>
        <div className="text-xs font-bold">Aa</div>
        <div className="text-[10px] text-muted-foreground">Inter</div>
        <div className="text-[8px] text-muted-foreground">ABCDEFGH</div>
      </div>
    </div>
  </div>
);

// Marketing Visual
const MarketingVisual = () => (
  <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
    <div className="space-y-3">
      {/* Stats cards */}
      {[
        { label: 'Alcance', value: '+240%', color: 'text-emerald-500' },
        { label: 'Conversiones', value: '+85%', color: 'text-blue-500' },
        { label: 'Engagement', value: '+120%', color: 'text-purple-500' },
      ].map((stat, i) => (
        <div 
          key={stat.label}
          className="flex items-center justify-between p-2 rounded-lg bg-foreground/5 animate-fade-up"
          style={{ animationDelay: `${i * 150}ms` }}
        >
          <span className="text-xs text-muted-foreground">{stat.label}</span>
          <span className={`text-sm font-semibold ${stat.color}`}>{stat.value}</span>
        </div>
      ))}
    </div>
  </div>
);

// Content Visual
const ContentVisual = () => (
  <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
    <div className="space-y-2">
      {/* Social posts mockup */}
      <div className="rounded-lg border border-foreground/10 p-3 animate-fade-up" style={{ animationDelay: '100ms' }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-orange-500" />
          <div className="h-2 w-16 rounded bg-foreground/10" />
        </div>
        <div className="h-16 rounded bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
      </div>
      <div className="rounded-lg border border-foreground/10 p-3 animate-fade-up" style={{ animationDelay: '300ms' }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-blue-500" />
          <div className="h-2 w-20 rounded bg-foreground/10" />
        </div>
        <div className="h-2 w-full rounded bg-foreground/5" />
      </div>
    </div>
  </div>
);

export const BentoGrid = () => {
  return (
    <section id="producto" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            Servicios
          </h2>
          <p className="text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Todo lo que necesitas para destacar en el mundo digital
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 - Spans 2 columns */}
          <BentoCard
            className="lg:col-span-2"
            title="Diseño Web"
            description="Sitios web modernos, rápidos y optimizados para convertir visitantes en clientes. Desde landing pages hasta tiendas online."
            icon={<Layout className="w-5 h-5 text-foreground/70" />}
            visual={<WebDesignVisual />}
            delay={200}
          />

          {/* Card 2 */}
          <BentoCard
            title="Branding & Identidad"
            description="Logotipos, paletas de colores y guías de marca que comunican la esencia de tu negocio."
            icon={<Palette className="w-5 h-5 text-foreground/70" />}
            visual={<BrandingVisual />}
            delay={300}
          />

          {/* Card 3 */}
          <BentoCard
            title="Marketing Digital"
            description="Estrategias de redes sociales, campañas de ads y SEO para aumentar tu visibilidad online."
            icon={<Megaphone className="w-5 h-5 text-foreground/70" />}
            visual={<MarketingVisual />}
            delay={400}
          />

          {/* Card 4 - Spans 2 columns */}
          <BentoCard
            className="lg:col-span-2"
            title="Creación de Contenido"
            description="Posts, stories, reels y todo el contenido que necesitas para mantener tus redes activas y atractivas."
            icon={<PenTool className="w-5 h-5 text-foreground/70" />}
            visual={<ContentVisual />}
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};
