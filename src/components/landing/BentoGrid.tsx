import { MessageSquare, FileSpreadsheet, Users, Zap } from "lucide-react";
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

// Chat Animation Visual
const ChatVisual = () => (
  <div className="bg-foreground/[0.03] border-t border-foreground/[0.08] p-5 h-52 overflow-hidden">
    <div className="space-y-3">
      {/* Incoming message */}
      <div className="flex gap-3 animate-fade-up" style={{ animationDelay: '100ms' }}>
        <div className="w-8 h-8 rounded-full bg-foreground/10 flex-shrink-0 flex items-center justify-center">
          <span className="text-xs font-medium text-foreground/60">U</span>
        </div>
        <div className="bg-foreground/[0.08] rounded-2xl rounded-tl-md px-4 py-2.5 max-w-[75%] shadow-sm">
          <p className="text-sm text-foreground/80 leading-relaxed">Hola, me interesa su servicio de automatización</p>
        </div>
      </div>
      
      {/* AI Response */}
      <div className="flex gap-3 justify-end animate-fade-up" style={{ animationDelay: '400ms' }}>
        <div className="bg-foreground text-background rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[75%] shadow-sm">
          <p className="text-sm leading-relaxed">¡Hola! Soy el asistente de Allok. ¿En qué área necesitas automatizar?</p>
        </div>
      </div>

      {/* Calendar suggestion */}
      <div className="flex gap-3 justify-end animate-fade-up" style={{ animationDelay: '700ms' }}>
        <div className="bg-emerald-600 text-white rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-sm hover:bg-emerald-700 transition-colors cursor-pointer">
          <Zap className="w-4 h-4" />
          <p className="text-sm font-medium">Agendar llamada →</p>
        </div>
      </div>
    </div>
  </div>
);

// Data Entry Visual
const DataVisual = () => (
  <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
    <div className="space-y-2">
      {/* Receipt icon */}
      <div className="flex items-center gap-3 p-2 rounded-lg bg-foreground/5 animate-fade-up" style={{ animationDelay: '100ms' }}>
        <div className="w-8 h-10 rounded bg-foreground/10 flex items-center justify-center">
          <FileSpreadsheet className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <div className="text-xs font-medium">factura_2024.pdf</div>
          <div className="text-[10px] text-muted-foreground">Procesando...</div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center py-1 animate-fade-up" style={{ animationDelay: '400ms' }}>
        <div className="w-0.5 h-4 bg-foreground/10" />
      </div>

      {/* Data rows */}
      <div className="rounded-lg border border-foreground/[0.08] overflow-hidden animate-fade-up" style={{ animationDelay: '600ms' }}>
        <div className="grid grid-cols-3 text-[10px] bg-foreground/5 px-2 py-1 font-medium">
          <span>Concepto</span>
          <span>Monto</span>
          <span>Fecha</span>
        </div>
        <div className="grid grid-cols-3 text-[10px] px-2 py-1.5 border-t border-foreground/[0.05]">
          <span className="text-muted-foreground">Software</span>
          <span>$2,400</span>
          <span className="text-muted-foreground">15/01</span>
        </div>
      </div>
    </div>
  </div>
);

// Sales Pipeline Visual
const PipelineVisual = () => (
  <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
    <div className="flex items-center gap-2 h-full">
      {['Frío', 'Tibio', 'Caliente', 'Cerrado'].map((stage, i) => (
        <div key={stage} className="flex-1 flex flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: `${i * 150}ms` }}>
          <div 
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
              i === 3 
                ? 'bg-emerald-500/20 text-emerald-600 ring-2 ring-emerald-500/30' 
                : i >= 2 
                  ? 'bg-amber-500/20 text-amber-600' 
                  : 'bg-foreground/5 text-muted-foreground'
            }`}
          >
            <Users className="w-3 h-3" />
          </div>
          <span className="text-[9px] text-muted-foreground text-center">{stage}</span>
          {i < 3 && (
            <div className="absolute top-1/2 -right-2 w-4 h-0.5 bg-foreground/10" />
          )}
        </div>
      ))}
    </div>
  </div>
);

// Reactivation Visual  
const ReactivationVisual = () => (
  <div className="bg-foreground/[0.02] border-t border-foreground/[0.05] p-4 h-48 overflow-hidden">
    <div className="space-y-2">
      {[
        { name: 'María G.', status: 'Contactado', active: true },
        { name: 'Carlos R.', status: 'Respondió', active: true },
        { name: 'Ana P.', status: 'Llamada agendada', active: true },
      ].map((contact, i) => (
        <div 
          key={contact.name}
          className="flex items-center gap-3 p-2 rounded-lg bg-foreground/5 animate-fade-up"
          style={{ animationDelay: `${i * 200}ms` }}
        >
          <div className="w-7 h-7 rounded-full bg-foreground/10 flex items-center justify-center text-[10px] font-medium">
            {contact.name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium">{contact.name}</div>
            <div className="text-[10px] text-muted-foreground">{contact.status}</div>
          </div>
          <div className={`w-2 h-2 rounded-full ${contact.active ? 'bg-emerald-500' : 'bg-foreground/20'}`} />
        </div>
      ))}
    </div>
  </div>
);

export const BentoGrid = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            Ofertas irracionales
          </h2>
          <p className="text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Soluciones que transforman la manera en que operas tu negocio
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 - Spans 2 columns */}
          <BentoCard
            className="lg:col-span-2"
            title="Caza-Prospectos 24/7"
            description="Tu vendedor que nunca duerme. Respuesta inmediata, calificación de prospectos y agendamiento automático."
            icon={<MessageSquare className="w-5 h-5 text-foreground/70" />}
            visual={<ChatVisual />}
            delay={200}
          />

          {/* Card 2 */}
          <BentoCard
            title="Operador Invisible"
            description="Data-entry automático. Convierte facturas y recibos en reportes financieros en tiempo real."
            icon={<FileSpreadsheet className="w-5 h-5 text-foreground/70" />}
            visual={<DataVisual />}
            delay={300}
          />

          {/* Card 3 */}
          <BentoCard
            title="Pipeline Inteligente"
            description="Visualiza y gestiona tu embudo de ventas con inteligencia artificial predictiva."
            icon={<Users className="w-5 h-5 text-foreground/70" />}
            visual={<PipelineVisual />}
            delay={400}
          />

          {/* Card 4 - Spans 2 columns */}
          <BentoCard
            className="lg:col-span-2"
            title="Bóveda de Ventas"
            description="Dinero olvidado. Reactivamos tu base de datos vieja con campañas personalizadas de IA."
            icon={<Zap className="w-5 h-5 text-foreground/70" />}
            visual={<ReactivationVisual />}
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};
