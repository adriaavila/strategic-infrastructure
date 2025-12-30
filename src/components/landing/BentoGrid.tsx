import { MessageSquare, FileSpreadsheet, Users, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import chatAnimation from "@/assets/lottie/chat-animation.json";
import dataAnimation from "@/assets/lottie/data-processing.json";
import pipelineAnimation from "@/assets/lottie/pipeline-animation.json";
import reactivationAnimation from "@/assets/lottie/reactivation-animation.json";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  lottieData?: object;
  delay?: number;
}

const BentoCard = ({ title, description, icon, className, lottieData, delay = 0 }: BentoCardProps) => {
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
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-foreground/5 mb-4">
        {icon}
      </div>

      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

      {lottieData && (
        <div className="mt-6 -mx-6 -mb-6 h-48 bg-foreground/[0.02] border-t border-foreground/[0.05] flex items-center justify-center">
          <Lottie 
            animationData={lottieData} 
            loop={true}
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  );
};

export const BentoGrid = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            Ofertas irracionales
          </h2>
          <p className="text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Soluciones que transforman la manera en que operas tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BentoCard
            className="lg:col-span-2"
            title="Caza-Prospectos 24/7"
            description="Tu vendedor que nunca duerme. Respuesta inmediata, calificación de prospectos y agendamiento automático."
            icon={<MessageSquare className="w-5 h-5 text-foreground/70" />}
            lottieData={chatAnimation}
            delay={200}
          />

          <BentoCard
            title="Operador Invisible"
            description="Data-entry automático. Convierte facturas y recibos en reportes financieros en tiempo real."
            icon={<FileSpreadsheet className="w-5 h-5 text-foreground/70" />}
            lottieData={dataAnimation}
            delay={300}
          />

          <BentoCard
            title="Pipeline Inteligente"
            description="Visualiza y gestiona tu embudo de ventas con inteligencia artificial predictiva."
            icon={<Users className="w-5 h-5 text-foreground/70" />}
            lottieData={pipelineAnimation}
            delay={400}
          />

          <BentoCard
            className="lg:col-span-2"
            title="Bóveda de Ventas"
            description="Dinero olvidado. Reactivamos tu base de datos vieja con campañas personalizadas de IA."
            icon={<Zap className="w-5 h-5 text-foreground/70" />}
            lottieData={reactivationAnimation}
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};
