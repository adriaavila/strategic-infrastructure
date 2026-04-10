export type ServiceType =
  | "landing-page"
  | "whatsapp-automation"
  | "lead-capture-system"
  | "mvp-web-app";

export type ComplexityLevel = "S" | "M" | "L" | "XL";

export type AnswerType = "single" | "short";

export interface BuilderQuestionOption {
  value: string;
  label: string;
  hint?: string;
  priceMin?: number;
  priceMax?: number;
  recurringMin?: number;
  recurringMax?: number;
  timelineMin?: number;
  timelineMax?: number;
  complexity?: number;
  scopeAdditions?: string[];
  detectedModules?: string[];
}

export interface BuilderQuestion {
  id: string;
  question: string;
  answerType: AnswerType;
  placeholder?: string;
  options?: BuilderQuestionOption[];
  reason: string;
}

export interface ServiceTemplate {
  serviceType: ServiceType;
  label: string;
  shortLabel: string;
  description: string;
  heroPrompt: string;
  basePrice: [number, number];
  baseTimelineWeeks: [number, number];
  deliverables: string[];
  exclusions: string[];
  optionals: string[];
  questions: BuilderQuestion[];
}

export interface BuilderClassification {
  primaryServiceType: ServiceType;
  secondaryNeeds: string[];
  businessContext: string;
  likelyModules: string[];
  missingInfo: string[];
  intent: string;
  complexityLevel: ComplexityLevel;
  confidenceScore: number;
  needsReview: boolean;
  xlReason?: string;
}

export interface ProposalPricingLine {
  label: string;
  amount: string;
}

export interface BuilderProposal {
  title: string;
  summary: string;
  objective: string;
  scope: string[];
  exclusions: string[];
  timelineText: string;
  priceText: string;
  pricingLines: ProposalPricingLine[];
  optionals: string[];
  nextSteps: string[];
  serviceType: ServiceType;
  serviceLabel: string;
  complexityLevel: ComplexityLevel;
  confidenceScore: number;
  notes: string[];
}

export const serviceTypeLabels: Record<ServiceType, string> = {
  "landing-page": "Landing Page",
  "whatsapp-automation": "WhatsApp Automation",
  "lead-capture-system": "Lead Capture System",
  "mvp-web-app": "MVP Web App Simple",
};

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s/-]/g, " ");

const toTitleCase = (value: string) =>
  value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const formatMoney = (amount: number) => usdFormatter.format(Math.round(amount));

const formatMoneyRange = (min: number, max: number) => `${formatMoney(min)} - ${formatMoney(max)}`;

const formatWeeks = (min: number, max: number) =>
  min === max ? `${min} semana${min === 1 ? "" : "s"}` : `${min}-${max} semanas`;

const complexityRank: Record<ComplexityLevel, number> = {
  S: 1,
  M: 2,
  L: 3,
  XL: 4,
};

const templateCatalog: Record<ServiceType, ServiceTemplate> = {
  "landing-page": {
    serviceType: "landing-page",
    label: "Landing Page",
    shortLabel: "Landing",
    description:
      "Una pagina enfocada en captar interes, explicar la oferta y mover al lead a WhatsApp, formulario o llamada.",
    heroPrompt: "Quiero una landing para captar leads para mi clinica y que me escriban por WhatsApp.",
    basePrice: [900, 1800],
    baseTimelineWeeks: [2, 4],
    deliverables: [
      "1 pagina responsive con estructura UX clara",
      "Copy estructural base para el mensaje principal",
      "CTA a formulario, WhatsApp o llamada",
      "Setup tecnico inicial y QA basico",
    ],
    exclusions: [
      "Branding completo o rebranding profundo",
      "Campanas pagas, SEO avanzado o estrategia de contenidos",
      "Integraciones enterprise o automatizaciones multi-canal",
    ],
    optionals: [
      "Version con copywriting comercial completo",
      "Tracking de conversiones y analytics",
      "Secuencia de follow-up conectada a CRM o Sheets",
    ],
    questions: [
      {
        id: "landing_goal",
        question: "Que quieres que haga la pagina apenas alguien llegue?",
        answerType: "single",
        reason: "Define estructura, jerarquia del mensaje y salida de conversion.",
        options: [
          {
            value: "lead-capture",
            label: "Captar leads",
            hint: "Formulario o WhatsApp para interesados.",
            scopeAdditions: ["Seccion de prueba social y captura principal"],
          },
          {
            value: "book-calls",
            label: "Agendar llamadas",
            hint: "Ideal para ventas consultivas.",
            priceMin: 180,
            priceMax: 420,
            timelineMin: 0,
            timelineMax: 1,
            complexity: 1,
            scopeAdditions: ["Bloque de agenda o CTA a llamada"],
          },
          {
            value: "sell-offer",
            label: "Vender una oferta puntual",
            hint: "Mas foco en claridad, objeciones y CTA comercial.",
            priceMin: 220,
            priceMax: 520,
            timelineMin: 0,
            timelineMax: 1,
            complexity: 1,
            scopeAdditions: ["Bloque de oferta, objeciones y comparativa"],
          },
        ],
      },
      {
        id: "branding_state",
        question: "Ya tienes branding y assets listos para construir?",
        answerType: "single",
        reason: "Impacta velocidad, alcance visual y necesidad de apoyo previo.",
        options: [
          {
            value: "ready",
            label: "Si, ya tenemos base visual",
            hint: "Logo, colores, fotos o referencias claras.",
          },
          {
            value: "partial",
            label: "Tenemos algo, pero esta flojo",
            hint: "Hay material, pero requiere criterio.",
            priceMin: 180,
            priceMax: 420,
            timelineMin: 0,
            timelineMax: 1,
            complexity: 1,
            scopeAdditions: ["Curaduria visual y refinamiento ligero de marca"],
          },
          {
            value: "none",
            label: "No, necesitamos direccion visual",
            hint: "Necesita un frente visual mas armado.",
            priceMin: 320,
            priceMax: 760,
            timelineMin: 1,
            timelineMax: 1,
            complexity: 2,
            scopeAdditions: ["Direccion visual inicial para levantar la pagina"],
          },
        ],
      },
      {
        id: "copy_support",
        question: "Necesitas que tambien estructuremos o escribamos el copy?",
        answerType: "single",
        reason: "Cambia el esfuerzo comercial de la entrega.",
        options: [
          { value: "no", label: "No, ya tenemos mensajes base", hint: "Trabajamos con tu material." },
          {
            value: "structure",
            label: "Si, copy estructural",
            hint: "Ordenar propuesta, secciones y CTA.",
            priceMin: 220,
            priceMax: 520,
            timelineMin: 0,
            timelineMax: 1,
            complexity: 1,
            scopeAdditions: ["Copy estructural de secciones principales"],
          },
          {
            value: "full",
            label: "Si, copy comercial completo",
            hint: "Mensajes mas pulidos y orientados a conversion.",
            priceMin: 380,
            priceMax: 900,
            timelineMin: 1,
            timelineMax: 1,
            complexity: 2,
            scopeAdditions: ["Copywriting comercial completo para la landing"],
          },
        ],
      },
      {
        id: "landing_integrations",
        question: "Necesitas integraciones o medicion desde el dia uno?",
        answerType: "single",
        reason: "Define setup tecnico y handoff comercial.",
        options: [
          { value: "none", label: "No, solo la pagina", hint: "Salida simple a CTA o formulario." },
          {
            value: "analytics",
            label: "Si, analytics y eventos",
            hint: "Medicion basica de conversion.",
            priceMin: 160,
            priceMax: 340,
            timelineMin: 0,
            timelineMax: 1,
            complexity: 1,
            scopeAdditions: ["Tracking de eventos y conversion basica"],
            detectedModules: ["analytics"],
          },
          {
            value: "crm",
            label: "Si, CRM o Sheets",
            hint: "Enviar leads a una base operativa.",
            priceMin: 260,
            priceMax: 640,
            timelineMin: 1,
            timelineMax: 1,
            complexity: 2,
            scopeAdditions: ["Integracion de leads con CRM o Sheets"],
            detectedModules: ["crm"],
          },
          {
            value: "both",
            label: "Si, medicion e integracion",
            hint: "Captura y visibilidad operativa desde el inicio.",
            priceMin: 420,
            priceMax: 920,
            timelineMin: 1,
            timelineMax: 2,
            complexity: 3,
            scopeAdditions: ["Tracking de eventos y conexion con CRM o Sheets"],
            detectedModules: ["analytics", "crm"],
          },
        ],
      },
      {
        id: "timeline_pressure",
        question: "Que tan urgente es salir con esto?",
        answerType: "single",
        reason: "Impacta planificacion y ajuste de prioridad.",
        options: [
          { value: "flexible", label: "Flexible", hint: "Sin urgencia fuerte." },
          {
            value: "this-month",
            label: "Este mes",
            hint: "Hay una fecha comercial cercana.",
            priceMin: 140,
            priceMax: 320,
            complexity: 1,
          },
          {
            value: "urgent",
            label: "Urgente",
            hint: "Necesita prioridad alta.",
            priceMin: 280,
            priceMax: 720,
            complexity: 2,
          },
        ],
      },
    ],
  },
  "whatsapp-automation": {
    serviceType: "whatsapp-automation",
    label: "WhatsApp Automation",
    shortLabel: "WhatsApp",
    description:
      "Un flujo conversacional para responder, captar datos, calificar y derivar a humano o agenda.",
    heroPrompt: "Quiero automatizar WhatsApp para responder preguntas y agendar.",
    basePrice: [1200, 2600],
    baseTimelineWeeks: [2, 5],
    deliverables: [
      "Flujo FAQ y captacion base en WhatsApp",
      "Preguntas de calificacion y handoff a humano",
      "Integracion simple si aplica",
      "QA basico y entrega operativa inicial",
    ],
    exclusions: [
      "Agente omnicanal avanzado o IA abierta sin guardrails",
      "Automatizaciones complejas en mas de un canal dentro del MVP",
      "Soporte enterprise con multiples equipos y permisos avanzados",
    ],
    optionals: [
      "Agenda conectada al flujo",
      "CRM y scoring comercial",
      "Mas de un flujo o mas de un canal",
    ],
    questions: [
      {
        id: "wa_main_flow",
        question: "Que deberia resolver primero la automatizacion?",
        answerType: "single",
        reason: "Marca el flujo principal y su profundidad.",
        options: [
          {
            value: "faq",
            label: "Responder preguntas frecuentes",
            hint: "Orientacion basica y handoff simple.",
          },
          {
            value: "capture",
            label: "Captar y calificar leads",
            hint: "Mas foco en preguntas y datos utiles.",
            priceMin: 220,
            priceMax: 520,
            complexity: 1,
            scopeAdditions: ["Calificacion inicial y captura de datos comerciales"],
          },
          {
            value: "booking",
            label: "Responder y agendar",
            hint: "Ideal para clinicas, servicios o discovery calls.",
            priceMin: 360,
            priceMax: 820,
            timelineMin: 1,
            timelineMax: 1,
            complexity: 2,
            scopeAdditions: ["Bloque de agenda conectado al flujo"],
            detectedModules: ["agenda"],
          },
          {
            value: "multi-flow",
            label: "Varias rutas segun tipo de cliente",
            hint: "Mas de una intencion principal.",
            priceMin: 540,
            priceMax: 1200,
            timelineMin: 1,
            timelineMax: 2,
            complexity: 3,
            scopeAdditions: ["Rutas diferenciadas segun intencion o segmento"],
            detectedModules: ["multi-flow"],
          },
        ],
      },
      {
        id: "wa_stack",
        question: "Con que deberia hablar WhatsApp por detras?",
        answerType: "single",
        reason: "Define integraciones y persistencia operativa.",
        options: [
          { value: "none", label: "Nada por ahora", hint: "Solo WhatsApp y handoff." },
          {
            value: "sheets",
            label: "Google Sheets o Airtable",
            hint: "Guardar leads y estados basicos.",
            priceMin: 180,
            priceMax: 420,
            timelineMin: 0,
            timelineMax: 1,
            complexity: 1,
            scopeAdditions: ["Persistencia simple de leads en base operativa"],
            detectedModules: ["storage"],
          },
          {
            value: "crm",
            label: "CRM",
            hint: "Empujar datos a una herramienta comercial.",
            priceMin: 320,
            priceMax: 860,
            timelineMin: 1,
            timelineMax: 1,
            complexity: 2,
            scopeAdditions: ["Integracion con CRM para handoff comercial"],
            detectedModules: ["crm"],
          },
          {
            value: "custom",
            label: "Sistema propio o API",
            hint: "Mas dependencia tecnica e integracion.",
            priceMin: 520,
            priceMax: 1280,
            timelineMin: 1,
            timelineMax: 2,
            complexity: 3,
            scopeAdditions: ["Conexion tecnica con sistema o API existente"],
            detectedModules: ["api"],
          },
        ],
      },
      {
        id: "wa_handoff",
        question: "Cuando entra una pregunta sensible, que deberia pasar?",
        answerType: "single",
        reason: "Afecta reglas de escalamiento y experiencia del lead.",
        options: [
          { value: "manual", label: "Pasar a humano manualmente", hint: "Regla basica." },
          {
            value: "smart",
            label: "Derivar automaticamente segun respuesta",
            hint: "Mas orden comercial.",
            priceMin: 200,
            priceMax: 460,
            complexity: 1,
            scopeAdditions: ["Reglas de handoff automatico a humano"],
          },
          {
            value: "team-routing",
            label: "Derivar a persona o equipo correcto",
            hint: "Necesita routing por criterio.",
            priceMin: 320,
            priceMax: 720,
            timelineMin: 0,
            timelineMax: 1,
            complexity: 2,
            scopeAdditions: ["Routing basico por equipo o tipo de consulta"],
            detectedModules: ["routing"],
          },
        ],
      },
      {
        id: "wa_channels",
        question: "Esto vivira solo en WhatsApp o tambien en otro canal?",
        answerType: "single",
        reason: "Multiples canales cambian el alcance del MVP.",
        options: [
          { value: "whatsapp", label: "Solo WhatsApp", hint: "Encaje ideal para MVP." },
          {
            value: "whatsapp-plus-web",
            label: "WhatsApp y web",
            hint: "Mismo flujo con dos entradas.",
            priceMin: 280,
            priceMax: 640,
            timelineMin: 0,
            timelineMax: 1,
            complexity: 2,
            scopeAdditions: ["Entrada secundaria desde web al mismo flujo"],
            detectedModules: ["multi-channel"],
          },
          {
            value: "multi-channel",
            label: "WhatsApp mas otros canales",
            hint: "Puede pedir revision.",
            priceMin: 480,
            priceMax: 1100,
            timelineMin: 1,
            timelineMax: 2,
            complexity: 3,
            scopeAdditions: ["Coordinacion inicial entre mas de un canal"],
            detectedModules: ["multi-channel"],
          },
        ],
      },
      {
        id: "timeline_pressure",
        question: "Hay una fecha comercial o un lanzamiento encima?",
        answerType: "single",
        reason: "Ajusta prioridad y riesgo operativo.",
        options: [
          { value: "flexible", label: "No, podemos hacerlo bien", hint: "Plan normal." },
          {
            value: "this-month",
            label: "Si, este mes",
            hint: "Fecha comercial cercana.",
            priceMin: 180,
            priceMax: 420,
            complexity: 1,
          },
          {
            value: "urgent",
            label: "Si, es urgente",
            hint: "Puede requerir version base priorizada.",
            priceMin: 320,
            priceMax: 820,
            complexity: 2,
          },
        ],
      },
    ],
  },
  "lead-capture-system": {
    serviceType: "lead-capture-system",
    label: "Lead Capture System",
    shortLabel: "Lead System",
    description:
      "Una base operativa para captar, calificar, seguir y mover leads sin depender de ida y vuelta manual.",
    heroPrompt: "Quiero un sistema para captar, calificar y seguir leads.",
    basePrice: [1800, 3800],
    baseTimelineWeeks: [3, 6],
    deliverables: [
      "Landing o entrada de captacion base",
      "Formulario o captura estructurada",
      "Follow-up inicial por WhatsApp o email",
      "Almacenamiento y visibilidad basica de leads",
    ],
    exclusions: [
      "CRM enterprise full custom o reporting avanzado",
      "Campanas pagas y operacion media completa",
      "Automatizaciones profundas entre multiples equipos y herramientas",
    ],
    optionals: [
      "Routing por score o equipo",
      "Dashboards y reportes operativos",
      "Secuencias de nurture o remarketing",
    ],
    questions: [
      {
        id: "lead_origin",
        question: "De donde llegan hoy o quieres que lleguen esos leads?",
        answerType: "single",
        reason: "Alinea la entrada principal y el tipo de captura.",
        options: [
          { value: "organic", label: "Organico", hint: "Web, redes o referido." },
          {
            value: "ads",
            label: "Campanas pagas",
            hint: "Mas volumen y mas necesidad de orden.",
            priceMin: 240,
            priceMax: 560,
            complexity: 1,
            scopeAdditions: ["Entrada preparada para trafico de campanas"],
          },
          {
            value: "mixed",
            label: "Varias fuentes",
            hint: "Puede necesitar mas trazabilidad.",
            priceMin: 320,
            priceMax: 760,
            timelineMin: 0,
            timelineMax: 1,
            complexity: 2,
            scopeAdditions: ["Clasificacion inicial de leads por origen"],
            detectedModules: ["multi-source"],
          },
        ],
      },
      {
        id: "follow_up_type",
        question: "Como deberia ocurrir el seguimiento inicial?",
        answerType: "single",
        reason: "Cambia canales, mensajes y persistencia.",
        options: [
          { value: "manual", label: "Manual por ahora", hint: "Solo base y handoff." },
          {
            value: "whatsapp",
            label: "WhatsApp",
            hint: "Salida rapida hacia conversacion.",
            priceMin: 220,
            priceMax: 520,
            complexity: 1,
            scopeAdditions: ["Follow-up basico por WhatsApp"],
            detectedModules: ["whatsapp-follow-up"],
          },
          {
            value: "email",
            label: "Email",
            hint: "Mas util si ya hay proceso comercial por correo.",
            priceMin: 220,
            priceMax: 520,
            complexity: 1,
            scopeAdditions: ["Secuencia inicial de email follow-up"],
            detectedModules: ["email-follow-up"],
          },
          {
            value: "both",
            label: "WhatsApp y email",
            hint: "Mas cobertura, mas reglas.",
            priceMin: 420,
            priceMax: 980,
            timelineMin: 1,
            timelineMax: 1,
            complexity: 2,
            scopeAdditions: ["Follow-up coordinado en WhatsApp y email"],
            detectedModules: ["whatsapp-follow-up", "email-follow-up"],
          },
        ],
      },
      {
        id: "lead_storage",
        question: "Donde necesitas ver o guardar los leads?",
        answerType: "single",
        reason: "Afecta la complejidad tecnica y el admin interno.",
        options: [
          { value: "sheets", label: "Sheets o Airtable", hint: "Rapido y suficiente para MVP." },
          {
            value: "crm",
            label: "CRM",
            hint: "Si ya trabajas con pipeline comercial.",
            priceMin: 320,
            priceMax: 760,
            timelineMin: 0,
            timelineMax: 1,
            complexity: 2,
            scopeAdditions: ["Integracion con CRM existente"],
            detectedModules: ["crm"],
          },
          {
            value: "dashboard",
            label: "Panel propio",
            hint: "Mas control, mas alcance.",
            priceMin: 680,
            priceMax: 1600,
            timelineMin: 1,
            timelineMax: 2,
            complexity: 3,
            scopeAdditions: ["Vista propia para revisar leads y estados"],
            detectedModules: ["dashboard"],
          },
        ],
      },
      {
        id: "lead_routing",
        question: "Los leads deben repartirse o calificarse automaticamente?",
        answerType: "single",
        reason: "Define si es solo captura o tambien operacion.",
        options: [
          { value: "none", label: "No, solo capturar bien", hint: "Base simple." },
          {
            value: "basic",
            label: "Si, con reglas simples",
            hint: "Por interes, zona o tipo de lead.",
            priceMin: 240,
            priceMax: 620,
            complexity: 1,
            scopeAdditions: ["Routing basico segun reglas definidas"],
            detectedModules: ["routing"],
          },
          {
            value: "scoring",
            label: "Si, con score o prioridad",
            hint: "Mas criterio de negocio.",
            priceMin: 420,
            priceMax: 980,
            timelineMin: 1,
            timelineMax: 1,
            complexity: 2,
            scopeAdditions: ["Calificacion y priorizacion de leads"],
            detectedModules: ["scoring"],
          },
        ],
      },
      {
        id: "timeline_pressure",
        question: "Necesitas esto listo para una campana o fecha concreta?",
        answerType: "single",
        reason: "Puede priorizar un release base y dejar extras para fase 2.",
        options: [
          { value: "flexible", label: "No, prioridad normal", hint: "Sin fecha dura." },
          {
            value: "this-month",
            label: "Si, este mes",
            hint: "Deadline comercial cercano.",
            priceMin: 220,
            priceMax: 520,
            complexity: 1,
          },
          {
            value: "urgent",
            label: "Si, urgente",
            hint: "Puede requerir recorte de alcance.",
            priceMin: 380,
            priceMax: 920,
            complexity: 2,
          },
        ],
      },
    ],
  },
  "mvp-web-app": {
    serviceType: "mvp-web-app",
    label: "MVP Web App Simple",
    shortLabel: "Web App",
    description:
      "Una app web simple con login, panel basico, una entidad principal y operacion clara para validar el producto.",
    heroPrompt: "Necesito una web donde mis clientes puedan registrarse y pagar.",
    basePrice: [3500, 6800],
    baseTimelineWeeks: [4, 8],
    deliverables: [
      "Login simple y flujo base de acceso",
      "Panel o workspace inicial",
      "Una entidad principal con CRUD base",
      "Admin basico para revisar informacion",
    ],
    exclusions: [
      "Marketplace completo, app movil o ecosistema multi-producto",
      "Arquitectura enterprise, multi-tenant avanzada o reporting complejo",
      "Automatizaciones profundas o IA fuera del catalogo del MVP",
    ],
    optionals: [
      "Pagos integrados",
      "Notificaciones y estados",
      "Roles y permisos adicionales",
    ],
    questions: [
      {
        id: "core_entity",
        question: "Cual es la pieza principal que el usuario debe crear o gestionar?",
        answerType: "short",
        placeholder: "Ej. reservas, solicitudes, clientes, propiedades, ordenes",
        reason: "Ayuda a definir el nucleo del MVP y evitar construir de mas.",
      },
      {
        id: "user_roles",
        question: "Cuantos tipos de usuario necesitas en el MVP?",
        answerType: "single",
        reason: "Mas roles implican mas logica y mas review interna.",
        options: [
          { value: "one", label: "Solo un tipo", hint: "Caso mas simple." },
          {
            value: "two",
            label: "Dos tipos",
            hint: "Ej. admin y cliente.",
            priceMin: 520,
            priceMax: 1180,
            timelineMin: 1,
            timelineMax: 1,
            complexity: 2,
            scopeAdditions: ["Permisos diferenciados para dos tipos de usuario"],
            detectedModules: ["roles"],
          },
          {
            value: "three-plus",
            label: "Tres o mas",
            hint: "Puede empujar el caso a revision.",
            priceMin: 880,
            priceMax: 2100,
            timelineMin: 1,
            timelineMax: 2,
            complexity: 3,
            scopeAdditions: ["Matriz inicial de permisos y vistas por rol"],
            detectedModules: ["roles"],
          },
        ],
      },
      {
        id: "payments_need",
        question: "El MVP necesita pagos dentro de la app?",
        answerType: "single",
        reason: "Pagos cambian flujos, validaciones y testing.",
        options: [
          { value: "no", label: "No por ahora", hint: "Primero validar uso." },
          {
            value: "one-time",
            label: "Si, pago simple",
            hint: "Checkout o cobro puntual.",
            priceMin: 680,
            priceMax: 1600,
            timelineMin: 1,
            timelineMax: 2,
            complexity: 2,
            scopeAdditions: ["Integracion de pagos simples dentro del MVP"],
            detectedModules: ["payments"],
          },
          {
            value: "subscription",
            label: "Si, suscripcion o renovacion",
            hint: "Mas estados y reglas.",
            priceMin: 980,
            priceMax: 2400,
            timelineMin: 2,
            timelineMax: 2,
            complexity: 3,
            scopeAdditions: ["Manejo inicial de suscripciones o renovaciones"],
            detectedModules: ["payments", "subscription"],
          },
        ],
      },
      {
        id: "notifications",
        question: "Necesitas avisos o notificaciones operativas?",
        answerType: "single",
        reason: "Define si la app solo guarda datos o tambien mueve acciones.",
        options: [
          { value: "none", label: "No por ahora", hint: "App base y limpia." },
          {
            value: "email",
            label: "Si, email",
            hint: "Notificaciones de estados o acciones.",
            priceMin: 260,
            priceMax: 620,
            complexity: 1,
            scopeAdditions: ["Notificaciones basicas por email"],
            detectedModules: ["notifications"],
          },
          {
            value: "whatsapp",
            label: "Si, WhatsApp",
            hint: "Mas sensible y operativo.",
            priceMin: 420,
            priceMax: 980,
            timelineMin: 0,
            timelineMax: 1,
            complexity: 2,
            scopeAdditions: ["Avisos operativos conectados a WhatsApp"],
            detectedModules: ["notifications", "whatsapp"],
          },
        ],
      },
      {
        id: "timeline_pressure",
        question: "Que tan urgente es tener una version usable?",
        answerType: "single",
        reason: "Ayuda a decidir si proponemos release base y fase 2.",
        options: [
          { value: "flexible", label: "Flexible", hint: "Se puede priorizar calidad." },
          {
            value: "this-month",
            label: "Este mes",
            hint: "Hay necesidad de version corta.",
            priceMin: 420,
            priceMax: 980,
            complexity: 1,
          },
          {
            value: "urgent",
            label: "Urgente",
            hint: "Puede requerir recorte fuerte de alcance.",
            priceMin: 720,
            priceMax: 1800,
            complexity: 2,
          },
        ],
      },
    ],
  },
};

export const serviceTemplates = Object.values(templateCatalog);

export const examplePrompts = [
  "Quiero una landing para captar leads y que me escriban por WhatsApp.",
  "Necesito automatizar WhatsApp para responder preguntas y agendar.",
  "Quiero un sistema para captar, calificar y seguir leads.",
  "Necesito una web donde mis clientes puedan registrarse y pagar.",
];

const keywordWeights: Record<ServiceType, Array<{ keyword: string; weight: number }>> = {
  "landing-page": [
    { keyword: "landing", weight: 4 },
    { keyword: "pagina", weight: 3 },
    { keyword: "web", weight: 1 },
    { keyword: "home", weight: 2 },
    { keyword: "captar leads", weight: 3 },
    { keyword: "conversion", weight: 2 },
    { keyword: "marca", weight: 1 },
    { keyword: "whatsapp", weight: 1 },
  ],
  "whatsapp-automation": [
    { keyword: "whatsapp", weight: 5 },
    { keyword: "bot", weight: 3 },
    { keyword: "automatizar", weight: 3 },
    { keyword: "automatizacion", weight: 3 },
    { keyword: "faq", weight: 2 },
    { keyword: "agendar", weight: 3 },
    { keyword: "responder", weight: 2 },
    { keyword: "mensajes", weight: 2 },
  ],
  "lead-capture-system": [
    { keyword: "lead", weight: 4 },
    { keyword: "captar", weight: 2 },
    { keyword: "calificar", weight: 3 },
    { keyword: "seguimiento", weight: 3 },
    { keyword: "pipeline", weight: 2 },
    { keyword: "crm", weight: 2 },
    { keyword: "formulario", weight: 2 },
    { keyword: "dash", weight: 1 },
  ],
  "mvp-web-app": [
    { keyword: "app", weight: 4 },
    { keyword: "web app", weight: 4 },
    { keyword: "registro", weight: 3 },
    { keyword: "login", weight: 3 },
    { keyword: "panel", weight: 2 },
    { keyword: "dashboard", weight: 2 },
    { keyword: "clientes puedan", weight: 2 },
    { keyword: "pagar", weight: 3 },
    { keyword: "crud", weight: 3 },
    { keyword: "portal", weight: 2 },
  ],
};

const keywordModules = [
  { keyword: "whatsapp", label: "WhatsApp" },
  { keyword: "crm", label: "CRM" },
  { keyword: "dashboard", label: "Dashboard" },
  { keyword: "pago", label: "Pagos" },
  { keyword: "agenda", label: "Agenda" },
  { keyword: "analytics", label: "Analytics" },
  { keyword: "email", label: "Email follow-up" },
  { keyword: "integracion", label: "Integraciones" },
];

const complexitySignals = [
  { keyword: "marketplace", weight: 5, xl: true, reason: "Un marketplace completo se sale del MVP." },
  { keyword: "mobile app", weight: 5, xl: true, reason: "App movil nativa mas sistema completo ya es caso de discovery." },
  { keyword: "app movil", weight: 5, xl: true, reason: "App movil nativa mas sistema completo ya es caso de discovery." },
  { keyword: "erp", weight: 5, xl: true, reason: "ERP o backoffice amplio requiere otra etapa de definicion." },
  { keyword: "ia propia", weight: 5, xl: true, reason: "IA propia o capacidades abiertas requieren discovery aparte." },
  { keyword: "multi tenant", weight: 4 },
  { keyword: "multi-tenant", weight: 4 },
  { keyword: "varios roles", weight: 3 },
  { keyword: "roles", weight: 2 },
  { keyword: "pagos", weight: 2 },
  { keyword: "integraciones", weight: 2 },
  { keyword: "api", weight: 2 },
  { keyword: "dashboard", weight: 2 },
  { keyword: "urgente", weight: 2 },
  { keyword: "este mes", weight: 1 },
  { keyword: "instagram", weight: 1 },
  { keyword: "email", weight: 1 },
];

const vaguePatterns = ["ayuda digital", "necesito ayuda", "algo digital", "quiero mejorar", "necesito algo"];

const missingInfoByService: Record<ServiceType, string[]> = {
  "landing-page": ["objetivo principal", "assets o branding", "copy", "integraciones"],
  "whatsapp-automation": ["flujo principal", "herramientas conectadas", "handoff", "deadline"],
  "lead-capture-system": ["origen de leads", "follow-up", "persistencia", "routing"],
  "mvp-web-app": ["entidad principal", "roles", "pagos", "release base"],
};

const intentByService: Record<ServiceType, string> = {
  "landing-page": "Convertir una oferta en una pagina comprensible y accionable.",
  "whatsapp-automation": "Responder mejor, captar datos y mover conversaciones sin friccion manual.",
  "lead-capture-system": "Ordenar captacion, calificacion y seguimiento para vender con mas consistencia.",
  "mvp-web-app": "Validar un producto digital simple con una primera version usable.",
};

const findQuestionOption = (question: BuilderQuestion, value: string) =>
  question.options?.find((option) => option.value === value);

const deriveBusinessContext = (prompt: string) => {
  const normalized = normalizeText(prompt);

  if (normalized.includes("clinica") || normalized.includes("salud")) {
    return "Negocio de servicios con necesidad de respuesta rapida y conversion clara.";
  }

  if (normalized.includes("leads") || normalized.includes("captar")) {
    return "Negocio enfocado en captacion comercial y seguimiento.";
  }

  if (normalized.includes("clientes") || normalized.includes("usuarios")) {
    return "Producto o servicio que necesita una experiencia mas estructurada para clientes.";
  }

  return "Solicitud inicial todavia ambigua; conviene aterrizar prioridad comercial y alcance.";
};

const determineComplexityLevel = (score: number, xlReason?: string): ComplexityLevel => {
  if (xlReason || score >= 8) {
    return "XL";
  }

  if (score >= 5) {
    return "L";
  }

  if (score >= 3) {
    return "M";
  }

  return "S";
};

export const classifyPrompt = (prompt: string): BuilderClassification => {
  const normalized = normalizeText(prompt);
  const scoreMap = Object.entries(keywordWeights).reduce<Record<ServiceType, number>>((accumulator, [serviceType, rules]) => {
    accumulator[serviceType as ServiceType] = rules.reduce((score, rule) => {
      return normalized.includes(rule.keyword) ? score + rule.weight : score;
    }, 0);

    return accumulator;
  }, {} as Record<ServiceType, number>);

  const sorted = (Object.entries(scoreMap) as Array<[ServiceType, number]>).sort((left, right) => right[1] - left[1]);
  const [primaryServiceType, primaryScore] = sorted[0];
  const secondaryNeeds = keywordModules
    .filter((item) => normalized.includes(item.keyword))
    .map((item) => item.label)
    .slice(0, 4);

  const complexityEvaluation = complexitySignals.reduce<{ score: number; xlReason?: string }>(
    (state, signal) => {
      if (!normalized.includes(signal.keyword)) {
        return state;
      }

      return {
        score: state.score + signal.weight,
        xlReason: state.xlReason || signal.reason,
      };
    },
    { score: secondaryNeeds.length > 2 ? 2 : 0 },
  );

  const multipleStrongMatches = sorted.filter(([, value]) => value >= 4).length >= 3;
  const vaguePrompt = vaguePatterns.some((pattern) => normalized.includes(pattern)) || normalized.trim().split(/\s+/).length <= 4;
  const complexityLevel = determineComplexityLevel(
    complexityEvaluation.score + (multipleStrongMatches ? 2 : 0),
    complexityEvaluation.xlReason,
  );

  const totalScore = sorted.reduce((sum, [, value]) => sum + value, 0) || 1;
  const rawConfidence = Math.min(0.96, Math.max(0.46, primaryScore / totalScore + (vaguePrompt ? -0.12 : 0.08)));

  return {
    primaryServiceType,
    secondaryNeeds,
    businessContext: deriveBusinessContext(prompt),
    likelyModules: secondaryNeeds,
    missingInfo: missingInfoByService[primaryServiceType],
    intent: intentByService[primaryServiceType],
    complexityLevel,
    confidenceScore: Number(rawConfidence.toFixed(2)),
    needsReview: complexityLevel === "XL" || rawConfidence < 0.62 || multipleStrongMatches,
    xlReason: complexityEvaluation.xlReason,
  };
};

export const getClarificationQuestions = (classification: BuilderClassification) => {
  const template = templateCatalog[classification.primaryServiceType];
  return template.questions.slice(0, 5);
};

const getComplexityMultiplier = (level: ComplexityLevel) => {
  switch (level) {
    case "M":
      return 1.16;
    case "L":
      return 1.34;
    case "XL":
      return 1.5;
    default:
      return 1;
  }
};

const getAnswerEffects = (
  classification: BuilderClassification,
  answers: Record<string, string>,
) => {
  const template = templateCatalog[classification.primaryServiceType];
  const additions = {
    priceMin: 0,
    priceMax: 0,
    recurringMin: 0,
    recurringMax: 0,
    timelineMin: 0,
    timelineMax: 0,
    complexity: 0,
    scope: [] as string[],
    modules: [...classification.likelyModules],
  };

  template.questions.forEach((question) => {
    const value = answers[question.id];
    if (!value || question.answerType !== "single") {
      return;
    }

    const option = findQuestionOption(question, value);
    if (!option) {
      return;
    }

    additions.priceMin += option.priceMin || 0;
    additions.priceMax += option.priceMax || 0;
    additions.recurringMin += option.recurringMin || 0;
    additions.recurringMax += option.recurringMax || 0;
    additions.timelineMin += option.timelineMin || 0;
    additions.timelineMax += option.timelineMax || 0;
    additions.complexity += option.complexity || 0;

    if (option.scopeAdditions) {
      additions.scope.push(...option.scopeAdditions);
    }

    if (option.detectedModules) {
      additions.modules.push(...option.detectedModules);
    }
  });

  return additions;
};

const deriveFinalComplexity = (
  classification: BuilderClassification,
  answers: Record<string, string>,
  additionsComplexity: number,
): ComplexityLevel => {
  const baseRank = complexityRank[classification.complexityLevel];
  const answerValues = Object.values(answers);
  const urgencyBonus = answerValues.includes("urgent") ? 2 : answerValues.includes("this-month") ? 1 : 0;
  const score = baseRank + additionsComplexity + urgencyBonus;

  if (classification.complexityLevel === "XL") {
    return "XL";
  }

  if (score >= 7) {
    return "XL";
  }

  if (score >= 5) {
    return "L";
  }

  if (score >= 3) {
    return "M";
  }

  return "S";
};

const getCoverageNote = (answers: Record<string, string>, questionCount: number) => {
  const answered = Object.values(answers).filter(Boolean).length;

  if (answered <= 2) {
    return "Se genero una propuesta preliminar con rango amplio porque todavia faltan datos criticos.";
  }

  if (answered < questionCount) {
    return "La propuesta ya es util, pero todavia conserva margen amplio por informacion parcial.";
  }

  return "La propuesta ya tiene suficiente contexto para una conversacion comercial concreta.";
};

export const buildProposal = (
  prompt: string,
  classification: BuilderClassification,
  answers: Record<string, string>,
): BuilderProposal => {
  const template = templateCatalog[classification.primaryServiceType];
  const additions = getAnswerEffects(classification, answers);
  const finalComplexity = deriveFinalComplexity(classification, answers, additions.complexity);
  const multiplier = getComplexityMultiplier(finalComplexity);

  const scopedPriceMin = (template.basePrice[0] + additions.priceMin) * multiplier;
  const scopedPriceMax = (template.basePrice[1] + additions.priceMax) * multiplier;
  const timelineMin = Math.max(1, Math.round(template.baseTimelineWeeks[0] + additions.timelineMin));
  const timelineMax = Math.max(timelineMin, Math.round(template.baseTimelineWeeks[1] + additions.timelineMax));
  const titleBase =
    classification.primaryServiceType === "landing-page"
      ? "Landing de captacion"
      : classification.primaryServiceType === "whatsapp-automation"
        ? "Automatizacion de WhatsApp"
        : classification.primaryServiceType === "lead-capture-system"
          ? "Sistema de captacion y seguimiento"
          : "MVP web app";

  const shortEntity = answers.core_entity ? toTitleCase(answers.core_entity.trim()) : "";
  const title = shortEntity ? `${titleBase} para ${shortEntity}` : `${titleBase} con alcance MVP`;
  const baseScope = [...template.deliverables, ...additions.scope];
  const scope = Array.from(new Set(baseScope));
  const exclusions = Array.from(
    new Set(
      finalComplexity === "XL"
        ? [...template.exclusions, "Se recomienda discovery guiado antes de comprometer pricing cerrado."]
        : template.exclusions,
    ),
  );

  const recurringFee =
    additions.recurringMin || additions.recurringMax
      ? ` + ${formatMoneyRange(additions.recurringMin, additions.recurringMax)}/mes`
      : "";

  const priceText =
    finalComplexity === "XL"
      ? "Caso fuera de rango MVP. Conviene alinear arquitectura, prioridades y release base en llamada."
      : `Estimado inicial: ${formatMoneyRange(scopedPriceMin, scopedPriceMax)}${recurringFee}`;

  const pricingLines: ProposalPricingLine[] =
    finalComplexity === "XL"
      ? [
          { label: "Diagnostico guiado", amount: "Recomendado" },
          { label: "Pricing detallado", amount: "Despues de revision" },
        ]
      : [
          { label: "Base del servicio", amount: formatMoneyRange(template.basePrice[0], template.basePrice[1]) },
          ...(additions.priceMax
            ? [
                {
                  label: "Modulos y ajustes",
                  amount: formatMoneyRange(additions.priceMin, additions.priceMax),
                },
              ]
            : []),
          {
            label: `Complejidad ${finalComplexity}`,
            amount: `${Math.round((multiplier - 1) * 100)}%`,
          },
          {
            label: "Timeline estimado",
            amount: formatWeeks(timelineMin, timelineMax),
          },
        ];

  const notes = [
    getCoverageNote(answers, template.questions.length),
    classification.needsReview ? "Vale una revision humana ligera antes de cerrar alcance." : "Encaja bien con el catalogo actual del MVP.",
  ];

  if (classification.xlReason) {
    notes.push(classification.xlReason);
  }

  return {
    title,
    summary: `Partiendo de "${prompt.trim()}", la recomendacion es un ${template.label.toLowerCase()} con foco en ${classification.intent.toLowerCase()}`,
    objective:
      classification.primaryServiceType === "landing-page"
        ? "Convertir una necesidad ambigua en una pagina clara que capture interes y empuje a la siguiente accion."
        : classification.primaryServiceType === "whatsapp-automation"
          ? "Reducir friccion operativa en conversaciones repetitivas sin perder contexto comercial."
          : classification.primaryServiceType === "lead-capture-system"
            ? "Estandarizar la captacion y el seguimiento para que el lead no dependa de recordatorios manuales."
            : "Definir una primera version usable del producto sin sobreconstruir la solucion.",
    scope,
    exclusions,
    timelineText:
      finalComplexity === "XL"
        ? "Proponer release base despues de llamada estrategica."
        : `Entrega estimada en ${formatWeeks(timelineMin, timelineMax)} con una primera definicion de alcance y una fase base clara.`,
    priceText,
    pricingLines,
    optionals: template.optionals,
    nextSteps:
      finalComplexity === "XL"
        ? [
            "Reservar llamada estrategica de discovery.",
            "Definir release base y recortar alcance fuera del MVP.",
            "Aprobar propuesta revisada con pricing mas preciso.",
          ]
        : [
            "Validar esta direccion y ajustar 1 o 2 supuestos de alcance.",
            "Reservar llamada corta o pedir version enviada por email.",
            "Pasar a anticipo o kickoff con version aprobada.",
          ],
    serviceType: classification.primaryServiceType,
    serviceLabel: template.label,
    complexityLevel: finalComplexity,
    confidenceScore: classification.confidenceScore,
    notes,
  };
};

export const getAnswerLabel = (
  classification: BuilderClassification | null,
  questionId: string,
  value: string,
) => {
  if (!classification) {
    return value;
  }

  const template = templateCatalog[classification.primaryServiceType];
  const question = template.questions.find((item) => item.id === questionId);
  if (!question) {
    return value;
  }

  if (question.answerType === "short") {
    return value;
  }

  return findQuestionOption(question, value)?.label || value;
};

export const getTemplateByService = (serviceType: ServiceType) => templateCatalog[serviceType];

export const buildDemoScenario = () => {
  const prompt = templateCatalog["landing-page"].heroPrompt;
  const classification = classifyPrompt(prompt);
  const answers = {
    landing_goal: "lead-capture",
    branding_state: "partial",
    copy_support: "structure",
    landing_integrations: "analytics",
    timeline_pressure: "this-month",
  };

  return {
    prompt,
    classification,
    questions: getClarificationQuestions(classification),
    proposal: buildProposal(prompt, classification, answers),
    answers,
  };
};
