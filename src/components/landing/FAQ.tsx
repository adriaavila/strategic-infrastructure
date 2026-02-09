import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Proceso",
    questions: [
      {
        question: "¿Cómo determinan el alcance?",
        answer: "En una reunión corta entendemos tu necesidad, qué usas hoy y tus restricciones. Te mandamos una propuesta clara con alcance y plazos. Todo definido antes de construir."
      },
      {
        question: "¿Qué pasa si cambian los requisitos?",
        answer: "Ajustamos alcance, plazos y presupuesto con transparencia. Cambios chicos dentro de lo acordado no suman costo extra."
      },
      {
        question: "¿Qué necesito tener listo?",
        answer: "El problema que quieres resolver y qué herramientas usas hoy. No hace falta tener todo cerrado; parte del trabajo es ayudarte a definirlo."
      }
    ]
  },
  {
    category: "Expectativas",
    questions: [
      {
        question: "¿Trabajan con equipos sin conocimientos técnicos?",
        answer: "Sí. Lo importante es que conozcas tu negocio y puedas decir qué necesitas lograr. Nosotros llevamos la parte técnica y te explicamos todo en claro."
      },
      {
        question: "¿Pueden trabajar con sistemas existentes?",
        answer: "Sí. Vemos qué se mantiene, qué hay que cambiar y cómo conectar todo. Trabajar con lo que ya tienes es parte de nuestro enfoque."
      },
      {
        question: "¿Qué pasa si estamos bloqueados por plataformas no-code?",
        answer: "Construimos lo que necesitas: reemplazar la plataforma o integrarla. Ese tipo de límites es lo que resolvemos."
      }
    ]
  },
  {
    category: "Implementación",
    questions: [
      {
        question: "¿Ofrecen mantenimiento post-lanzamiento?",
        answer: "Sí, con alcance claro. No hacemos mantenimiento abierto sin definir qué incluye. Proyectos de mejora o soporte puntual, siempre con acuerdo previo."
      },
      {
        question: "¿Pueden construir sobre plataformas existentes?",
        answer: "Sí. Podemos sumar sobre lo que ya usas o armar algo nuevo. Lo definimos en la etapa de descubrimiento."
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
            Respuestas directas sobre cómo trabajamos
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
                    <AccordionContent className="text-muted-foreground text-sm pb-4 leading-relaxed">
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
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors"
          >
            Hablamos
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
