import { pseoData } from "@/data/pseo";

export type PseoFamilyKey =
  | "ai-agent"
  | "whatsapp-automation"
  | "appointment-booking"
  | "crm-integration"
  | "customer-support"
  | "lead-generation"
  | "sales-automation"
  | "chatbot";

export type PseoIndustryKey =
  | "agencies"
  | "automotive"
  | "clinics"
  | "construction"
  | "consulting"
  | "dental"
  | "ecommerce"
  | "education"
  | "finance"
  | "gyms"
  | "hotels"
  | "insurance"
  | "law-firms"
  | "logistics"
  | "real-estate"
  | "restaurants"
  | "retail"
  | "salons"
  | "schools"
  | "veterinary";

export type PseoLocationKey =
  | "barcelona"
  | "bogota"
  | "buenos-aires"
  | "caracas"
  | "guatemala"
  | "lima"
  | "madrid"
  | "medellin"
  | "mexico-city"
  | "miami"
  | "panama"
  | "quito"
  | "san-jose"
  | "santiago"
  | "santo-domingo";

type PseoSectorKey =
  | "b2b"
  | "commerce"
  | "education"
  | "finance"
  | "health"
  | "hospitality"
  | "local-services"
  | "property";

export type PseoPageContext =
  | {
      kind: "family";
      slug: string;
      familyKey: PseoFamilyKey;
    }
  | {
      kind: "industry";
      slug: string;
      familyKey: PseoFamilyKey;
      industryKey: PseoIndustryKey;
    }
  | {
      kind: "location";
      slug: string;
      familyKey: "whatsapp-automation";
      locationKey: PseoLocationKey;
    }
  | {
      kind: "unknown";
      slug: string;
    };

type PseoFamilyMeta = {
  label: string;
  shortLabel: string;
  category: string;
  intro: string;
  promise: string;
  accent: "violet" | "emerald" | "amber" | "blue" | "rose" | "slate";
  capabilities: string[];
  outcomes: string[];
  implementationSteps: string[];
  stack: string[];
};

type PseoIndustryMeta = {
  label: string;
  category: string;
  sector: PseoSectorKey;
  summary: string;
  pains: string[];
  useCases: string[];
  featuredFamilies: PseoFamilyKey[];
};

type PseoLocationMeta = {
  label: string;
  country: string;
  region: "Norteamerica" | "Latam Andina" | "Latam Sur" | "Europa";
  marketNote: string;
  priorityIndustries: PseoIndustryKey[];
};

type PseoSectorMeta = {
  label: string;
  decisionDrivers: string[];
  positioning: string;
};

export const pseoFamilyOrder: PseoFamilyKey[] = [
  "ai-agent",
  "whatsapp-automation",
  "appointment-booking",
  "crm-integration",
  "customer-support",
  "lead-generation",
  "sales-automation",
  "chatbot",
];

export const pseoIndustryOrder: PseoIndustryKey[] = [
  "agencies",
  "automotive",
  "clinics",
  "construction",
  "consulting",
  "dental",
  "ecommerce",
  "education",
  "finance",
  "gyms",
  "hotels",
  "insurance",
  "law-firms",
  "logistics",
  "real-estate",
  "restaurants",
  "retail",
  "salons",
  "schools",
  "veterinary",
];

export const pseoLocationOrder: PseoLocationKey[] = [
  "barcelona",
  "bogota",
  "buenos-aires",
  "caracas",
  "guatemala",
  "lima",
  "madrid",
  "medellin",
  "mexico-city",
  "miami",
  "panama",
  "quito",
  "san-jose",
  "santiago",
  "santo-domingo",
];

export const pseoSectorMeta = {
  b2b: {
    label: "Servicios B2B",
    decisionDrivers: [
      "calificar mejor oportunidades antes de que entren al equipo",
      "mantener seguimiento consistente entre propuesta y cierre",
      "integrar WhatsApp, formularios, pipeline y reporting en un mismo flujo",
    ],
    positioning:
      "La prioridad no es responder por responder, sino hacer que cada conversación llegue mejor preparada al siguiente paso comercial.",
  },
  commerce: {
    label: "Comercio y retail",
    decisionDrivers: [
      "responder dudas de producto sin frenar la compra",
      "recuperar conversaciones caidas y carritos abandonados",
      "sincronizar ventas, soporte y remarketing con el canal correcto",
    ],
    positioning:
      "El sistema debe acelerar la compra, reducir fricción en postventa y sostener volumen sin quemar al equipo.",
  },
  education: {
    label: "Educacion y formacion",
    decisionDrivers: [
      "filtrar interesados por programa, sede o modalidad",
      "recordar documentos, entrevistas o clases informativas",
      "ordenar el seguimiento entre marketing, admisiones y atencion",
    ],
    positioning:
      "Cada lead necesita una ruta clara desde la primera pregunta hasta la inscripcion o matricula.",
  },
  finance: {
    label: "Finanzas y seguros",
    decisionDrivers: [
      "capturar informacion sensible sin perder contexto",
      "segmentar prospectos segun urgencia, producto y elegibilidad",
      "mantener trazabilidad de seguimiento y handoff a asesores",
    ],
    positioning:
      "La automatizacion debe apoyar cumplimiento, contexto y velocidad comercial al mismo tiempo.",
  },
  health: {
    label: "Salud y bienestar",
    decisionDrivers: [
      "resolver preguntas repetitivas antes de saturar recepcion",
      "recordar citas, reactivar pacientes y reducir ausencias",
      "mover casos delicados al humano correcto sin perder tiempo",
    ],
    positioning:
      "Aqui la experiencia importa tanto como la eficiencia: la automatizacion tiene que ordenar la operacion sin deshumanizarla.",
  },
  hospitality: {
    label: "Hospitalidad y experiencia",
    decisionDrivers: [
      "responder rapido en momentos de alta intencion",
      "gestionar reservas, cambios y preguntas frecuentes sin cuello de botella",
      "mantener atencion consistente fuera del horario operativo",
    ],
    positioning:
      "El canal conversacional debe sentirse agil y confiable, especialmente cuando la decision ocurre en minutos.",
  },
  "local-services": {
    label: "Servicios locales",
    decisionDrivers: [
      "atender volumen irregular de consultas sin perder oportunidades",
      "organizar cotizaciones, visitas o disponibilidad del equipo",
      "hacer seguimiento automatico cuando el cliente se enfria",
    ],
    positioning:
      "La ganancia real viene de responder mejor, ordenar el trabajo interno y no dejar conversaciones sueltas.",
  },
  property: {
    label: "Inmobiliario y proyectos",
    decisionDrivers: [
      "precalificar interesados antes de una visita o llamada",
      "coordinar seguimiento entre captacion, asesores y agenda",
      "activar recordatorios y recontacto cuando el lead aun no decide",
    ],
    positioning:
      "Hace falta un sistema que filtre, priorice y mueva al prospecto correcto sin cargar a ventas con ruido.",
  },
} satisfies Record<PseoSectorKey, PseoSectorMeta>;

export const pseoFamilyMeta = {
  "ai-agent": {
    label: "Agentes de IA",
    shortLabel: "IA aplicada",
    category: "Sistemas conversacionales con criterio operativo",
    intro:
      "Disenados para atender, clasificar, resumir y ejecutar tareas reales dentro del negocio.",
    promise:
      "Cuando un negocio necesita algo mas que respuestas automaticas, un agente de IA puede entender contexto, activar procesos y dejar al equipo humano solo donde mas aporta valor.",
    accent: "violet",
    capabilities: [
      "calificacion inicial con reglas y contexto",
      "resumen de conversaciones y handoff al equipo",
      "activacion de tareas y flujos segun intencion",
      "atencion 24/7 con escalamiento cuando conviene",
    ],
    outcomes: [
      "menos friccion en la entrada de leads",
      "respuesta consistente incluso con volumen alto",
      "mejor calidad de informacion para ventas y soporte",
    ],
    implementationSteps: [
      "mapear decisiones que hoy dependen de mensajes manuales",
      "definir prompts, guardrails y criterios de escalamiento",
      "conectar el agente a tus canales, CRM y automatizaciones",
    ],
    stack: ["WhatsApp", "sitio web", "CRM", "formularios", "email", "bases de conocimiento"],
  },
  "whatsapp-automation": {
    label: "Automatizacion de WhatsApp",
    shortLabel: "Canal conversacional",
    category: "Flujos comerciales y operativos sobre el canal con mas respuesta",
    intro:
      "Ideal para negocios que reciben volumen por mensajes y necesitan velocidad sin perder orden.",
    promise:
      "WhatsApp sigue siendo el punto de entrada mas comun para ventas, reservas y soporte. La diferencia esta en tener un sistema que capture, enrute y haga seguimiento sin depender de memoria humana.",
    accent: "emerald",
    capabilities: [
      "respuestas iniciales y formularios conversacionales",
      "derivacion por area, servicio o prioridad",
      "recordatorios, reactivacion y seguimiento automatico",
      "integracion con CRMs, agendas y hojas operativas",
    ],
    outcomes: [
      "mas conversaciones atendidas a tiempo",
      "menos fugas entre mensaje inicial y cierre",
      "mejor trazabilidad para ventas y operacion",
    ],
    implementationSteps: [
      "ordenar tu flujo actual de captacion o soporte",
      "definir rutas, etiquetas, disparadores y mensajes utiles",
      "medir respuestas, derivaciones y conversion por etapa",
    ],
    stack: ["WhatsApp Business", "CRM", "calendar", "formularios", "email", "dashboards"],
  },
  "appointment-booking": {
    label: "Reserva de citas",
    shortLabel: "Agenda automatizada",
    category: "Confirmaciones, disponibilidad y seguimiento de agenda",
    intro:
      "Para equipos que venden o atienden con agenda y pierden tiempo coordinando manualmente.",
    promise:
      "La automatizacion de agenda funciona mejor cuando filtra, ofrece horarios validos y reduce idas y vueltas antes de la cita.",
    accent: "amber",
    capabilities: [
      "precalificacion antes de agendar",
      "sincronizacion de disponibilidad y recordatorios",
      "reagendado y confirmacion automatica",
      "seguimiento despues de la reunion o consulta",
    ],
    outcomes: [
      "menos no-shows y menos coordinacion manual",
      "agenda mas limpia y mejor aprovechada",
      "transicion mas ordenada hacia ventas o servicio",
    ],
    implementationSteps: [
      "definir quienes califican para una cita",
      "conectar disponibilidad y reglas de agenda",
      "automatizar confirmaciones, recordatorios y post-cita",
    ],
    stack: ["Google Calendar", "Calendly", "WhatsApp", "CRM", "email"],
  },
  "crm-integration": {
    label: "Integracion CRM",
    shortLabel: "Datos conectados",
    category: "Conectar conversaciones, formularios y pipeline en un mismo sistema",
    intro:
      "Pensado para negocios donde la oportunidad se pierde entre herramientas aisladas.",
    promise:
      "Integrar CRM no es solo mandar datos a otro sistema. Es asegurar que cada lead llegue limpio, clasificado y con seguimiento posible.",
    accent: "blue",
    capabilities: [
      "captura automatica desde formularios y mensajes",
      "enriquecimiento y clasificacion inicial",
      "asignacion por pipeline, vendedor o sede",
      "reporting operativo con estados consistentes",
    ],
    outcomes: [
      "menos trabajo duplicado en el equipo",
      "pipeline con mejor higiene y contexto",
      "reportes mas confiables para decidir",
    ],
    implementationSteps: [
      "mapear fuentes y estados criticos del pipeline",
      "normalizar campos, etiquetas y reglas de asignacion",
      "conectar automatizaciones para seguimiento y reporting",
    ],
    stack: ["HubSpot", "Pipedrive", "Zoho", "GoHighLevel", "Airtable", "webhooks"],
  },
  "customer-support": {
    label: "Soporte al cliente",
    shortLabel: "Experiencia y soporte",
    category: "Atencion repetible sin abandonar casos delicados",
    intro:
      "Util para equipos saturados por preguntas repetitivas, tickets simples o derivaciones lentas.",
    promise:
      "Un buen sistema de soporte combina respuestas utiles, contexto historico y reglas claras para que el humano entre cuando realmente hace falta.",
    accent: "rose",
    capabilities: [
      "respuesta automatica a FAQs y estados comunes",
      "clasificacion por urgencia, tema o cuenta",
      "handoff con contexto y resumen del caso",
      "encuestas y seguimiento post-atencion",
    ],
    outcomes: [
      "menos tiempo resolviendo preguntas repetitivas",
      "mejor experiencia incluso fuera de horario",
      "menos desgaste en el equipo de soporte",
    ],
    implementationSteps: [
      "identificar tickets repetitivos y puntos de friccion",
      "crear rutas de resolucion y escalamiento claras",
      "medir tiempos, motivos y calidad de handoff",
    ],
    stack: ["WhatsApp", "email", "help desk", "CRM", "base de conocimiento"],
  },
  "lead-generation": {
    label: "Generacion de leads",
    shortLabel: "Captacion y calificacion",
    category: "Sistemas para capturar mejor y no dejar oportunidades tibias",
    intro:
      "Cuando el problema no es solo atraer trafico, sino convertirlo en conversaciones utiles.",
    promise:
      "La generacion de leads mejora mucho cuando el contacto inicial no termina en un formulario frio, sino en una experiencia que filtra, orienta y activa seguimiento.",
    accent: "violet",
    capabilities: [
      "formularios conversacionales y lead magnets utiles",
      "calificacion inicial por necesidad, presupuesto o urgencia",
      "enrutamiento automatico al canal o asesor correcto",
      "reactivacion de interesados que no cerraron en primera visita",
    ],
    outcomes: [
      "mas leads con informacion accionable",
      "mejor tasa de contacto y seguimiento",
      "menos desperdicio de inversion en trafico",
    ],
    implementationSteps: [
      "revisar puntos de entrada y fuga en la captacion",
      "definir preguntas de calificacion y scoring basico",
      "activar seguimiento segun etapa o temperatura",
    ],
    stack: ["landing pages", "Meta Ads", "Google Ads", "WhatsApp", "CRM", "email"],
  },
  "sales-automation": {
    label: "Automatizacion de ventas",
    shortLabel: "Seguimiento comercial",
    category: "Para negocios que venden consultivamente y necesitan constancia",
    intro:
      "Pensado para acortar tiempos de respuesta y dar continuidad a cada oportunidad.",
    promise:
      "Vender mejor casi siempre significa responder antes, seguir con consistencia y priorizar bien. La automatizacion ayuda a que ese estandar no dependa del dia que tenga el equipo.",
    accent: "slate",
    capabilities: [
      "secuencias de seguimiento por etapa o intencion",
      "alertas y tareas para oportunidades calientes",
      "reactivacion automatica de prospectos inactivos",
      "visibilidad de pipeline y proxima accion",
    ],
    outcomes: [
      "menos leads olvidados en la mitad del proceso",
      "mejor ritmo comercial sin microgestion constante",
      "cierres mejor apoyados por datos y contexto",
    ],
    implementationSteps: [
      "ordenar etapas, triggers y proximas acciones",
      "definir mensajes y cadencias por tipo de lead",
      "medir conversion, aging y reactivacion en el pipeline",
    ],
    stack: ["CRM", "WhatsApp", "email", "calendar", "dashboards", "automatizadores"],
  },
  chatbot: {
    label: "Chatbots para negocios",
    shortLabel: "Asistencia inicial",
    category: "Conversaciones guiadas para filtrar, orientar y responder rapido",
    intro:
      "Un punto de entrada util cuando aun no necesitas la complejidad de un agente con mas autonomia.",
    promise:
      "Un chatbot bien planteado no intenta fingir inteligencia infinita. Hace bien su trabajo: orientar, resolver lo repetitivo y mover a la persona hacia el siguiente paso correcto.",
    accent: "amber",
    capabilities: [
      "menus y rutas conversacionales simples",
      "respuestas a preguntas frecuentes",
      "captura de datos y necesidades iniciales",
      "derivacion a agenda, venta o humano segun contexto",
    ],
    outcomes: [
      "menos friccion en el primer contacto",
      "mejor filtro antes de que entre el equipo",
      "mayor consistencia en la atencion inicial",
    ],
    implementationSteps: [
      "definir preguntas frecuentes y rutas principales",
      "construir decision trees utiles, no laberintos",
      "medir donde la gente avanza, abandona o necesita ayuda",
    ],
    stack: ["web chat", "WhatsApp", "FAQ", "formularios", "CRM"],
  },
} satisfies Record<PseoFamilyKey, PseoFamilyMeta>;

export const pseoIndustryMeta = {
  agencies: {
    label: "Agencias",
    category: "B2B",
    sector: "b2b",
    summary: "Procesos comerciales y de onboarding con mas velocidad, trazabilidad y menos seguimiento manual.",
    pains: ["briefs incompletos", "leads frios sin seguimiento", "handoff desordenado a ejecucion"],
    useCases: ["calificacion inicial", "agenda de discovery", "seguimiento de propuestas"],
    featuredFamilies: ["lead-generation", "sales-automation", "crm-integration"],
  },
  automotive: {
    label: "Automotriz",
    category: "Servicios locales",
    sector: "local-services",
    summary: "Captacion y seguimiento para ventas, mantenimiento o cotizaciones con respuesta mas rapida.",
    pains: ["cotizaciones sin continuidad", "consultas repetitivas", "dificultad para priorizar intencion alta"],
    useCases: ["solicitud de cotizacion", "agenda de inspeccion", "reactivacion de interesados"],
    featuredFamilies: ["whatsapp-automation", "lead-generation", "sales-automation"],
  },
  clinics: {
    label: "Clinicas y salud",
    category: "Salud",
    sector: "health",
    summary: "Atencion mas ordenada para reservas, dudas frecuentes y seguimiento de pacientes.",
    pains: ["recepcion saturada", "ausencias a citas", "triage manual repetitivo"],
    useCases: ["confirmacion de citas", "FAQ clinica", "reactivacion de pacientes"],
    featuredFamilies: ["appointment-booking", "customer-support", "whatsapp-automation"],
  },
  construction: {
    label: "Construccion",
    category: "Servicios locales",
    sector: "local-services",
    summary: "Organiza solicitudes, visitas tecnicas y seguimiento comercial en proyectos de mayor ticket.",
    pains: ["leads sin contexto", "cotizaciones lentas", "visitas tecnicas mal coordinadas"],
    useCases: ["precalificacion de proyecto", "agenda de visita", "seguimiento de propuesta"],
    featuredFamilies: ["lead-generation", "sales-automation", "crm-integration"],
  },
  consulting: {
    label: "Consultoria",
    category: "B2B",
    sector: "b2b",
    summary: "Captura mejor el contexto del lead y sostiene el seguimiento hasta discovery o propuesta.",
    pains: ["briefs superficiales", "pipeline manual", "seguimiento irregular"],
    useCases: ["intake de prospectos", "agenda de discovery", "pipeline con contexto"],
    featuredFamilies: ["crm-integration", "sales-automation", "ai-agent"],
  },
  dental: {
    label: "Odontologia",
    category: "Salud",
    sector: "health",
    summary: "Gestiona reservas, recordatorios y preguntas frecuentes sin saturar al front desk.",
    pains: ["confirmaciones manuales", "pacientes que no llegan", "repeticion de dudas de tratamientos"],
    useCases: ["agenda de citas", "recordatorios", "seguimiento post-consulta"],
    featuredFamilies: ["appointment-booking", "customer-support", "whatsapp-automation"],
  },
  ecommerce: {
    label: "Comercio electronico",
    category: "Comercio",
    sector: "commerce",
    summary: "Acelera compras, soporte y recuperacion de oportunidades perdidas.",
    pains: ["preguntas antes de comprar", "carritos frios", "soporte postventa lento"],
    useCases: ["recomendacion inicial", "recuperacion de carrito", "estado de pedido"],
    featuredFamilies: ["whatsapp-automation", "customer-support", "sales-automation"],
  },
  education: {
    label: "Educacion",
    category: "Educacion",
    sector: "education",
    summary: "Seguimiento ordenado de interesados por programa, modalidad y etapa de decision.",
    pains: ["leads sin segmentacion", "matriculas perdidas por demora", "admisiones con demasiadas tareas manuales"],
    useCases: ["precalificacion academica", "recordatorio de documentos", "agenda informativa"],
    featuredFamilies: ["lead-generation", "appointment-booking", "crm-integration"],
  },
  finance: {
    label: "Finanzas",
    category: "Finanzas",
    sector: "finance",
    summary: "Filtra solicitudes, enruta mejor prospectos y mejora trazabilidad comercial.",
    pains: ["intake manual", "seguimiento fragmentado", "datos incompletos para asesoria"],
    useCases: ["calificacion inicial", "asignacion a asesor", "seguimiento de oportunidad"],
    featuredFamilies: ["ai-agent", "crm-integration", "sales-automation"],
  },
  gyms: {
    label: "Gimnasios",
    category: "Salud y bienestar",
    sector: "health",
    summary: "Capta mas interesados, programa visitas y reactiva miembros sin friccion.",
    pains: ["leads por DM sin orden", "tours no confirmados", "baja reactivacion de miembros"],
    useCases: ["agenda de visita", "reactivacion", "FAQ de planes"],
    featuredFamilies: ["lead-generation", "appointment-booking", "whatsapp-automation"],
  },
  hotels: {
    label: "Hoteles",
    category: "Hospitalidad",
    sector: "hospitality",
    summary: "Automatiza preguntas frecuentes, solicitudes y reservas con mejor experiencia de huesped.",
    pains: ["consultas repetidas", "demora en respuesta", "cambios y solicitudes manuales"],
    useCases: ["consulta de disponibilidad", "reserva", "soporte pre y post estancia"],
    featuredFamilies: ["customer-support", "appointment-booking", "whatsapp-automation"],
  },
  insurance: {
    label: "Seguros",
    category: "Finanzas",
    sector: "finance",
    summary: "Organiza captacion y seguimiento segun producto, urgencia y perfil del prospecto.",
    pains: ["muchas preguntas previas", "leads sin priorizacion", "seguimiento discontinuo"],
    useCases: ["captura de informacion", "cotizacion asistida", "seguimiento comercial"],
    featuredFamilies: ["sales-automation", "crm-integration", "ai-agent"],
  },
  "law-firms": {
    label: "Bufetes de abogados",
    category: "B2B",
    sector: "b2b",
    summary: "Filtra casos, ordena intake y mejora respuesta inicial sin perder criterio.",
    pains: ["consultas sin contexto", "tiempo perdido en pre-calificacion", "seguimiento irregular de casos nuevos"],
    useCases: ["intake legal", "agenda de consulta", "handoff a abogado"],
    featuredFamilies: ["ai-agent", "appointment-booking", "crm-integration"],
  },
  logistics: {
    label: "Logistica",
    category: "Servicios locales",
    sector: "local-services",
    summary: "Mejora coordinacion de solicitudes, seguimiento y soporte operativo en canales rapidos.",
    pains: ["demasiadas consultas por estado", "pedidos sin clasificar", "seguimiento manual"],
    useCases: ["captura de solicitud", "FAQ operativo", "derivacion por tipo de envio"],
    featuredFamilies: ["customer-support", "crm-integration", "whatsapp-automation"],
  },
  "real-estate": {
    label: "Bienes raices",
    category: "Inmobiliario",
    sector: "property",
    summary: "Precalifica leads y coordina visitas sin perder contexto entre captacion y cierre.",
    pains: ["leads muy frios", "visitas mal agendadas", "seguimiento inconsistente"],
    useCases: ["filtro por presupuesto", "agenda de visita", "reactivacion de prospectos"],
    featuredFamilies: ["lead-generation", "appointment-booking", "sales-automation"],
  },
  restaurants: {
    label: "Restaurantes",
    category: "Hospitalidad",
    sector: "hospitality",
    summary: "Centraliza reservas, preguntas frecuentes y pedidos con respuesta mas consistente.",
    pains: ["muchas consultas repetitivas", "reservas por confirmar", "saturacion en hora pico"],
    useCases: ["reservas", "FAQ", "seguimiento de pedidos o eventos"],
    featuredFamilies: ["chatbot", "appointment-booking", "whatsapp-automation"],
  },
  retail: {
    label: "Retail",
    category: "Comercio",
    sector: "commerce",
    summary: "Atencion y conversion mas agiles entre inventario, preguntas de producto y seguimiento.",
    pains: ["preguntas de stock", "atencion dispersa", "fugas despues del primer contacto"],
    useCases: ["asistencia comercial", "seguimiento", "estado de pedido"],
    featuredFamilies: ["customer-support", "sales-automation", "whatsapp-automation"],
  },
  salons: {
    label: "Salones y belleza",
    category: "Salud y bienestar",
    sector: "health",
    summary: "Agenda, confirmaciones y reactivacion de clientes recurrentes sin sobrecargar recepcion.",
    pains: ["citas perdidas", "reagendados manuales", "baja reactivacion"],
    useCases: ["agenda", "recordatorios", "campanas de regreso"],
    featuredFamilies: ["appointment-booking", "whatsapp-automation", "sales-automation"],
  },
  schools: {
    label: "Escuelas",
    category: "Educacion",
    sector: "education",
    summary: "Ordena consultas por nivel, cupos y proceso de admision para dar seguimiento real.",
    pains: ["consultas repetitivas", "falta de seguimiento", "documentacion dispersa"],
    useCases: ["filtro inicial", "agenda informativa", "seguimiento de documentos"],
    featuredFamilies: ["lead-generation", "appointment-booking", "customer-support"],
  },
  veterinary: {
    label: "Veterinarias",
    category: "Salud",
    sector: "health",
    summary: "Gestiona citas, recordatorios y dudas frecuentes para atender mejor con menos friccion.",
    pains: ["recordatorios manuales", "consultas repetitivas", "agenda desordenada"],
    useCases: ["citas", "FAQ de preparacion", "seguimiento post-atencion"],
    featuredFamilies: ["appointment-booking", "customer-support", "whatsapp-automation"],
  },
} satisfies Record<PseoIndustryKey, PseoIndustryMeta>;

export const pseoLocationMeta = {
  barcelona: {
    label: "Barcelona",
    country: "Espana",
    region: "Europa",
    marketNote: "Buena plaza para negocios que combinan inbound, WhatsApp y ventas consultivas remotas.",
    priorityIndustries: ["agencies", "real-estate", "clinics"],
  },
  bogota: {
    label: "Bogota",
    country: "Colombia",
    region: "Latam Andina",
    marketNote: "Mercado con alto uso de mensajeria para ventas, soporte y coordinacion comercial.",
    priorityIndustries: ["education", "finance", "retail"],
  },
  "buenos-aires": {
    label: "Buenos Aires",
    country: "Argentina",
    region: "Latam Sur",
    marketNote: "Ideal para operaciones con alto volumen conversacional y necesidad de seguimiento mas disciplinado.",
    priorityIndustries: ["agencies", "consulting", "ecommerce"],
  },
  caracas: {
    label: "Caracas",
    country: "Venezuela",
    region: "Latam Andina",
    marketNote: "WhatsApp sigue siendo el canal mas directo para captar, confirmar y dar soporte con rapidez.",
    priorityIndustries: ["retail", "clinics", "real-estate"],
  },
  guatemala: {
    label: "Ciudad de Guatemala",
    country: "Guatemala",
    region: "Latam Andina",
    marketNote: "Muy util para negocios que dependen de respuesta rapida y seguimiento conversacional.",
    priorityIndustries: ["schools", "construction", "retail"],
  },
  lima: {
    label: "Lima",
    country: "Peru",
    region: "Latam Andina",
    marketNote: "Buen terreno para automatizar captacion, soporte y coordinacion entre equipos comerciales.",
    priorityIndustries: ["finance", "education", "ecommerce"],
  },
  madrid: {
    label: "Madrid",
    country: "Espana",
    region: "Europa",
    marketNote: "Mercado maduro para flujos comerciales con CRM, IA y capas de seguimiento multicanal.",
    priorityIndustries: ["agencies", "consulting", "law-firms"],
  },
  medellin: {
    label: "Medellin",
    country: "Colombia",
    region: "Latam Andina",
    marketNote: "Alta adopcion de herramientas digitales y WhatsApp como primer contacto comercial.",
    priorityIndustries: ["real-estate", "clinics", "agencies"],
  },
  "mexico-city": {
    label: "Ciudad de Mexico",
    country: "Mexico",
    region: "Norteamerica",
    marketNote: "Contexto ideal para sistemas que filtren bien volumen alto antes de pasarlo al equipo.",
    priorityIndustries: ["finance", "education", "retail"],
  },
  miami: {
    label: "Miami",
    country: "Estados Unidos",
    region: "Norteamerica",
    marketNote: "Cruce natural entre equipos US y Latam, con fuerte uso de WhatsApp en ventas y soporte.",
    priorityIndustries: ["real-estate", "insurance", "hotels"],
  },
  panama: {
    label: "Ciudad de Panama",
    country: "Panama",
    region: "Latam Andina",
    marketNote: "Buen encaje para negocios que combinan operaciones de servicio, agenda y ventas consultivas.",
    priorityIndustries: ["logistics", "finance", "hotels"],
  },
  quito: {
    label: "Quito",
    country: "Ecuador",
    region: "Latam Andina",
    marketNote: "WhatsApp ayuda mucho a ordenar captacion local cuando la atencion entra por varios frentes.",
    priorityIndustries: ["clinics", "schools", "retail"],
  },
  "san-jose": {
    label: "San Jose",
    country: "Costa Rica",
    region: "Latam Andina",
    marketNote: "Ideal para procesos donde importan tiempo de respuesta, agenda y handoff limpio al equipo.",
    priorityIndustries: ["hotels", "agencies", "education"],
  },
  santiago: {
    label: "Santiago",
    country: "Chile",
    region: "Latam Sur",
    marketNote: "Buen fit para automatizacion comercial apoyada por CRM y reporting mas fino.",
    priorityIndustries: ["finance", "consulting", "real-estate"],
  },
  "santo-domingo": {
    label: "Santo Domingo",
    country: "Republica Dominicana",
    region: "Latam Andina",
    marketNote: "WhatsApp sigue siendo un gran canal de cierre y coordinacion en servicios y hospitalidad.",
    priorityIndustries: ["restaurants", "hotels", "retail"],
  },
} satisfies Record<PseoLocationKey, PseoLocationMeta>;

const familyPrefixOrder = [...pseoFamilyOrder].sort((left, right) => right.length - left.length);

export const getPseoPageContext = (slug: string): PseoPageContext => {
  const familyKey = familyPrefixOrder.find((family) => slug === family || slug.startsWith(`${family}-`));

  if (!familyKey) {
    return {
      kind: "unknown",
      slug,
    };
  }

  if (slug === familyKey) {
    return {
      kind: "family",
      slug,
      familyKey,
    };
  }

  const remainder = slug.slice(familyKey.length + 1);

  if (familyKey === "whatsapp-automation" && remainder in pseoLocationMeta) {
    return {
      kind: "location",
      slug,
      familyKey,
      locationKey: remainder as PseoLocationKey,
    };
  }

  if (remainder in pseoIndustryMeta) {
    return {
      kind: "industry",
      slug,
      familyKey,
      industryKey: remainder as PseoIndustryKey,
    };
  }

  return {
    kind: "unknown",
    slug,
  };
};

export const getFamilyPages = (familyKey: PseoFamilyKey) =>
  pseoData.filter((page) => {
    const context = getPseoPageContext(page.slug);
    return context.kind !== "unknown" && context.familyKey === familyKey;
  });

export const getIndustryPages = (industryKey: PseoIndustryKey) =>
  pseoData.filter((page) => {
    const context = getPseoPageContext(page.slug);
    return context.kind === "industry" && context.industryKey === industryKey;
  });

export const getLocationPages = () =>
  pseoData.filter((page) => getPseoPageContext(page.slug).kind === "location");

export const getFamilyBasePage = (familyKey: PseoFamilyKey) =>
  pseoData.find((page) => page.slug === familyKey);

export const getFamilyCrossLinks = (currentSlug: string, limit = 4) => {
  const context = getPseoPageContext(currentSlug);

  if (context.kind === "industry") {
    return getIndustryPages(context.industryKey)
      .filter((page) => page.slug !== currentSlug)
      .slice(0, limit);
  }

  if (context.kind === "location") {
    return getLocationPages()
      .filter((page) => page.slug !== currentSlug)
      .slice(0, limit);
  }

  if (context.kind === "family") {
    return getFamilyPages(context.familyKey)
      .filter((page) => page.slug !== currentSlug)
      .slice(0, limit);
  }

  return [];
};

export const getFeaturedFamiliesForIndustry = (industryKey: PseoIndustryKey) =>
  pseoIndustryMeta[industryKey].featuredFamilies
    .map((familyKey) => getFamilyPages(familyKey).find((page) => page.slug.endsWith(industryKey)))
    .filter((page): page is (typeof pseoData)[number] => Boolean(page));

export const getFeaturedLocationFamilies = (locationKey: PseoLocationKey) =>
  Array.from(
    new Map(
      pseoLocationMeta[locationKey].priorityIndustries
        .flatMap((industryKey) => getFeaturedFamiliesForIndustry(industryKey))
        .map((page) => [page.slug, page]),
    ).values(),
  ).slice(0, 6);
