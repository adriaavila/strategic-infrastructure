import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Básico",
    description: "Para emprendedores y startups",
    priceMonthly: 299,
    priceAnnual: 249,
    features: [
      "1 diseño web o landing page",
      "Identidad básica (logo + colores)",
      "3 posts para redes sociales",
      "Entrega en 5 días hábiles",
    ],
    cta: "Empezar proyecto",
    popular: false,
  },
  {
    name: "Profesional",
    description: "Para negocios en crecimiento",
    priceMonthly: 599,
    priceAnnual: 499,
    features: [
      "Sitio web completo (hasta 5 páginas)",
      "Branding completo + guía de marca",
      "10 posts + calendario de contenido",
      "Configuración básica de SEO",
      "2 rondas de revisiones",
      "Soporte por 30 días",
    ],
    cta: "Empezar proyecto",
    popular: true,
  },
  {
    name: "Premium",
    description: "Soluciones a medida",
    priceMonthly: null,
    priceAnnual: null,
    features: [
      "Diseño web ilimitado",
      "Estrategia de marketing completa",
      "Gestión de redes sociales mensual",
      "Campañas de publicidad digital",
      "Reuniones semanales",
      "Prioridad en entregas",
    ],
    cta: "Agendar llamada",
    popular: false,
  },
];

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="precios" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            Precios transparentes
          </h2>
          <p className="text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Sin sorpresas. Sin costos ocultos. Escala a tu ritmo.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <span className={`text-sm ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
            Mensual
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
              isAnnual ? 'bg-primary' : 'bg-foreground/10'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
            Anual
            <span className="ml-1.5 text-xs text-emerald-600 font-medium">-20%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 transition-all duration-300 opacity-0 animate-fade-up ${
                plan.popular
                  ? 'bg-card border-2 border-primary shadow-[0_0_60px_-15px_rgba(0,0,0,0.15)]'
                  : 'bg-card border border-foreground/[0.08] hover:border-foreground/[0.15]'
              }`}
              style={{ animationDelay: `${300 + i * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    Más popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                {plan.priceMonthly !== null ? (
                  <>
                    <span className="text-4xl font-semibold tracking-tight">
                      ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    <span className="text-muted-foreground">/mes</span>
                    {isAnnual && (
                      <div className="text-xs text-muted-foreground mt-1">
                        Facturado anualmente
                      </div>
                    )}
                  </>
                ) : (
                  <span className="text-2xl font-semibold">Personalizado</span>
                )}
              </div>

              {/* CTA */}
              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full mb-6"
                size="lg"
              >
                {plan.cta}
              </Button>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
