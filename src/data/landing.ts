import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Building2,
  CalendarDays,
  Check,
  Clock3,
  Database,
  Handshake,
  Hospital,
  MessageCircleMore,
  PhoneCall,
  Salad,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Store,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { CONTACT_INFO, getWhatsAppUrl } from "@/config/contact";

export type NavItem = { label: string; href: string };
export type CardItem = { title: string; body: string };
export type StepItem = { step: string; title: string; body: string };
export type FeatureItem = { icon: LucideIcon; title: string; body: string };
export type IndustryItem = {
  icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
  benefit: string;
};
export type PlanItem = {
  name: string;
  price: string;
  audience: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};
export type FAQItem = { q: string; a: string };
export type StatItem = { value: string; label: string };
export type HighlightItem = { icon: LucideIcon; text: string };

export const landingCtas = {
  primary: getWhatsAppUrl("Hola, quiero una demo del agente de WhatsApp con IA."),
  secondary: "/brief",
  directLine: CONTACT_INFO.phoneNumber,
};

export const navItems: NavItem[] = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Funciones", href: "#funciones" },
  { label: "Casos de uso", href: "#industrias" },
  { label: "Precios", href: "#precios" },
  { label: "Preguntas", href: "#faqs" },
];

export const heroHighlights: HighlightItem[] = [
  { icon: Clock3, text: "Respuesta inmediata" },
  { icon: ShieldCheck, text: "Implementación guiada" },
  { icon: PhoneCall, text: "Escalado a humano" },
];

export const heroStats: StatItem[] = [
  { value: "24/7", label: "Atención continua sin depender del horario del equipo" },
  { value: "< 1 min", label: "Tiempo de primera respuesta cuando antes todo era manual" },
  { value: "1 canal", label: "WhatsApp como punto central de ventas y atención" },
];

export const trustedBy = ["Clínicas", "Restaurantes", "Inmobiliarias", "Academias", "Ecommerce", "Servicios locales"];

export const problemCards: CardItem[] = [
  {
    title: "Se pierden ventas por responder tarde",
    body: "Cuando el negocio tarda en contestar, el cliente escribe a otro lado. El problema no es la demanda: es el tiempo de respuesta.",
  },
  {
    title: "El equipo repite lo mismo todo el día",
    body: "Horarios, precios, ubicación, disponibilidad, métodos de pago, políticas. Las mismas preguntas consumen horas que no escalan.",
  },
  {
    title: "No hay filtro ni orden en los chats",
    body: "Todos los contactos parecen iguales. Nadie sabe quién está listo para comprar, quién quiere agendar y quién solo está pidiendo información.",
  },
  {
    title: "La atención depende demasiado de una persona",
    body: "Si alguien falta, se satura o sale del horario, el WhatsApp del negocio se frena. Eso afecta ventas, atención y seguimiento.",
  },
];

export const benefits = [
  "Responde en segundos aunque tu equipo no esté disponible",
  "Captura datos clave antes de pasar la conversación a un humano",
  "Califica leads y separa consultas útiles de chats poco relevantes",
  "Agenda citas y solicitudes sin ir y venir en la conversación",
  "Mantiene un tono consistente con la información real de tu negocio",
  "Reduce carga operativa sin volver más fría la atención",
];

export const howItWorks: StepItem[] = [
  {
    step: "01",
    title: "Conectamos tu canal",
    body: "Configuramos el agente para trabajar con tu operación de WhatsApp Business y definimos los objetivos del flujo: vender, atender, agendar o filtrar.",
  },
  {
    step: "02",
    title: "Entrenamos con tu información",
    body: "Cargamos preguntas frecuentes, servicios, horarios, zonas, precios orientativos, políticas, catálogos o procesos para que responda con contexto real.",
  },
  {
    step: "03",
    title: "Automatizamos conversaciones útiles",
    body: "Diseñamos respuestas, captura de datos, pasos de calificación, handoff a humano y acciones concretas según el tipo de consulta.",
  },
  {
    step: "04",
    title: "Sales con un flujo listo para operar",
    body: "Tu negocio empieza a responder mejor desde el primer día y luego iteramos sobre conversaciones reales para mejorar conversión y precisión.",
  },
];

export const features: FeatureItem[] = [
  {
    icon: MessageCircleMore,
    title: "Respuestas automáticas con contexto",
    body: "Contesta preguntas frecuentes, explica servicios y mantiene conversaciones útiles sin sonar como un bot genérico.",
  },
  {
    icon: Users,
    title: "Calificación de leads",
    body: "Hace preguntas clave para detectar intención, presupuesto, urgencia, ubicación o tipo de servicio antes de pasar el contacto.",
  },
  {
    icon: CalendarDays,
    title: "Agenda y preagenda",
    body: "Guía al cliente para reservar, solicitar cita o dejar una solicitud completa con datos listos para confirmar.",
  },
  {
    icon: Handshake,
    title: "Escalado a humano",
    body: "Cuando la conversación necesita intervención real, deriva con contexto para que el equipo continúe sin empezar desde cero.",
  },
  {
    icon: Database,
    title: "Captura de datos útil",
    body: "Recolecta nombre, teléfono, servicio de interés, sede, fecha preferida u otros datos necesarios para seguimiento.",
  },
  {
    icon: Workflow,
    title: "Flujos por tipo de negocio",
    body: "No es una automatización genérica. Se ajusta a procesos concretos de atención, ventas y operación por industria.",
  },
];

export const industries: IndustryItem[] = [
  {
    icon: Hospital,
    title: "Clínicas",
    problem: "Reciben consultas de especialidades, horarios, sedes, costos aproximados y disponibilidad; el equipo pierde tiempo antes de confirmar una cita.",
    solution: "El agente responde preguntas frecuentes, solicita datos del paciente, identifica especialidad y deja la solicitud lista para agendar.",
    benefit: "Menos carga administrativa y más citas confirmadas con menos fricción.",
  },
  {
    icon: Salad,
    title: "Restaurantes",
    problem: "Se acumulan mensajes por menú, pedidos, reservas, ubicación y horarios, especialmente en horas pico.",
    solution: "El agente atiende preguntas repetitivas, guía pedidos o reservas y filtra consultas antes de pasar al equipo.",
    benefit: "Respuestas rápidas incluso en momentos de alta demanda y menos interrupciones operativas.",
  },
  {
    icon: Building2,
    title: "Inmobiliarias",
    problem: "Entran muchos leads fríos preguntando por disponibilidad, precio o ubicación, pero pocos llegan bien calificados al asesor.",
    solution: "El agente identifica intención, presupuesto, zona de interés y tipo de inmueble para priorizar oportunidades reales.",
    benefit: "Más orden comercial y mejor uso del tiempo del equipo de ventas.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    problem: "Llegan preguntas constantes sobre stock, envíos, métodos de pago, cambios y seguimiento de compra.",
    solution: "El agente resuelve dudas frecuentes, orienta al cliente y reduce el volumen manual de soporte previo y posterior a la compra.",
    benefit: "Menos carga de soporte y más velocidad para cerrar ventas por WhatsApp.",
  },
  {
    icon: Store,
    title: "Servicios locales",
    problem: "Negocios de instalación, salud, educación o mantenimiento pierden leads porque no responden rápido ni filtran bien la necesidad.",
    solution: "El agente entiende el tipo de solicitud, captura datos y deriva al responsable con información clara para continuar.",
    benefit: "Mejor primera respuesta y menos oportunidades perdidas por desorden.",
  },
];

export const differentiators = [
  "Implementación enfocada en resultados de ventas y atención, no en una automatización decorativa",
  "Entrenamiento con información real del negocio para responder con criterio y no con plantillas vacías",
  "Escalado a humano con contexto para no romper la conversación ni repetir preguntas",
  "Diseño pensado para negocios de LATAM que ya venden por WhatsApp y necesitan ordenar la operación",
  "Flujos útiles para captar datos, calificar y agendar, no solo responder preguntas básicas",
  "Puesta en marcha rápida para empezar a operar y luego mejorar con conversaciones reales",
];

export const integrations = [
  "WhatsApp Business",
  "Catálogos, menús o documentos del negocio",
  "Formularios y briefs de implementación",
  "Flujos de atención y ventas existentes",
  "Escalado manual al equipo cuando hace falta",
];

export const plans: PlanItem[] = [
  {
    name: "Inicio",
    price: "USD 97",
    audience: "Para negocios que quieren responder mejor y ordenar preguntas frecuentes.",
    description: "Un punto de entrada simple para empezar a automatizar el canal sin complejidad innecesaria.",
    features: [
      "1 flujo principal de atención o ventas",
      "Entrenamiento inicial con preguntas frecuentes",
      "Captura básica de datos",
      "Handoff a humano",
      "Soporte de puesta en marcha",
    ],
    cta: "Iniciar implementación",
  },
  {
    name: "Crecimiento",
    price: "USD 197",
    audience: "Para negocios con volumen constante que necesitan filtrar mejor y convertir más.",
    description: "La opción recomendada para combinar atención automática, calificación y solicitudes listas para vender.",
    features: [
      "Hasta 3 flujos por intención",
      "Calificación de leads por reglas del negocio",
      "Captura de datos avanzada",
      "Agendado o preagendado",
      "Ajustes durante el primer mes",
    ],
    cta: "Solicitar demo",
    featured: true,
  },
  {
    name: "Escala",
    price: "USD 397",
    audience: "Para operaciones con varias líneas, sedes o procesos más complejos.",
    description: "Pensado para equipos que quieren un agente más robusto y flujos más específicos por servicio o unidad.",
    features: [
      "Flujos múltiples por sede, servicio o tipo de lead",
      "Lógica de atención más personalizada",
      "Priorización y derivación avanzada",
      "Acompañamiento de optimización",
      "Implementación guiada para equipos con más volumen",
    ],
    cta: "Conectar WhatsApp",
  },
];

export const faqs: FAQItem[] = [
  {
    q: "¿Funciona con WhatsApp Business?",
    a: "Sí. El enfoque está pensado para negocios que ya usan WhatsApp como canal principal de atención o ventas. La implementación se define según la operación actual del negocio y el nivel de automatización requerido.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Depende del nivel de complejidad, pero un flujo inicial puede quedar operativo en pocos días si el negocio ya tiene clara su información base: servicios, preguntas frecuentes, horarios, políticas y objetivos.",
  },
  {
    q: "¿Se puede personalizar para mi negocio?",
    a: "Sí. El agente se entrena con la información, tono y procesos del negocio. No se entrega como una plantilla cerrada; se ajusta a la realidad operativa de cada caso.",
  },
  {
    q: "¿Qué pasa si el agente no sabe responder?",
    a: "Puede redirigir la conversación a una persona o pedir más contexto según las reglas definidas. La idea no es fingir que sabe todo, sino resolver lo repetitivo y escalar bien lo sensible.",
  },
  {
    q: "¿Puede pasar la conversación a un humano?",
    a: "Sí. Ese punto es clave. El agente puede derivar cuando detecta intención alta, una excepción, una duda delicada o una solicitud que requiere intervención del equipo.",
  },
  {
    q: "¿Necesito saber programar?",
    a: "No. El proceso está planteado para que el negocio aporte su información y objetivos. La parte técnica de implementación se resuelve dentro del servicio.",
  },
  {
    q: "¿Cómo se entrena el agente?",
    a: "Con información real del negocio: preguntas frecuentes, servicios, precios orientativos, cobertura, horarios, sedes, menús, catálogos, políticas y ejemplos de conversación. Luego se mejora con casos reales.",
  },
  {
    q: "¿Sirve para mi tipo de negocio?",
    a: "Si recibes consultas repetitivas por WhatsApp, necesitas responder rápido y quieres ordenar mejor ventas o atención, probablemente sí. La demo sirve justamente para validar encaje antes de implementar.",
  },
];

export const demoChecklist = [
  "Responde en segundos con información útil del negocio",
  "Hace preguntas para entender intención y prioridad",
  "Pide solo los datos necesarios para avanzar",
  "Puede derivar al equipo con contexto para cerrar la conversación",
];

export const finalCtaHighlights: HighlightItem[] = [
  { icon: BarChart3, text: "Ver si tu operación actual encaja para atención, ventas, agendado o filtrado." },
  { icon: Workflow, text: "Definir el primer flujo útil para salir rápido y mejorar luego con conversaciones reales." },
  { icon: Bot, text: "Entrenar el agente con información real del negocio para que responda con contexto." },
];

export const icons = { Sparkles, Check, Zap, Star, Bot };
