import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Precios",
    questions: [
      {
        question: "¿Puedo cambiar de plan en cualquier momento?",
        answer: "Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplicarán inmediatamente y ajustaremos la facturación de forma proporcional."
      },
      {
        question: "¿Hay algún costo oculto?",
        answer: "No, nuestros precios son completamente transparentes. Lo que ves es lo que pagas, sin sorpresas ni cargos adicionales."
      },
      {
        question: "¿Ofrecen descuentos para startups o ONGs?",
        answer: "Sí, ofrecemos descuentos especiales del 50% para startups en etapa temprana y organizaciones sin fines de lucro. Contáctanos para más información."
      }
    ]
  },
  {
    category: "Funcionalidades",
    questions: [
      {
        question: "¿Qué integraciones están disponibles?",
        answer: "Nos integramos con más de 100 herramientas populares incluyendo Slack, Gmail, Google Sheets, Notion, HubSpot, Salesforce, y muchas más. También ofrecemos una API para integraciones personalizadas."
      },
      {
        question: "¿Necesito conocimientos técnicos para usar la plataforma?",
        answer: "No, nuestra plataforma está diseñada para ser intuitiva y fácil de usar. Cualquier persona puede crear automatizaciones usando nuestro editor visual sin escribir código."
      },
      {
        question: "¿Puedo probar la plataforma antes de comprar?",
        answer: "Absolutamente. Ofrecemos una prueba gratuita de 14 días con acceso completo a todas las funcionalidades. No se requiere tarjeta de crédito."
      }
    ]
  },
  {
    category: "Soporte",
    questions: [
      {
        question: "¿Qué tipo de soporte ofrecen?",
        answer: "Ofrecemos soporte por email para todos los planes, chat en vivo para el plan Growth, y soporte prioritario con un gerente de cuenta dedicado para el plan Enterprise."
      },
      {
        question: "¿Cuál es el tiempo de respuesta del soporte?",
        answer: "Para el plan Starter respondemos en menos de 24 horas. El plan Growth tiene respuestas en menos de 4 horas, y Enterprise cuenta con soporte 24/7 con respuesta inmediata."
      },
      {
        question: "¿Ofrecen capacitación o onboarding?",
        answer: "Sí, todos los planes incluyen acceso a nuestra academia con tutoriales y webinars. Los planes Growth y Enterprise incluyen sesiones de onboarding personalizadas."
      }
    ]
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestra plataforma
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {category.category.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.category}
                </h3>
              </div>

              {/* Accordion */}
              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${categoryIndex}-${index}`}
                    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl px-4 overflow-hidden data-[state=open]:bg-card/80 transition-colors"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:no-underline py-4 text-sm font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            ¿No encuentras lo que buscas?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors"
          >
            Contáctanos
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
