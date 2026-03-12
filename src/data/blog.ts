export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  isoDate: string;
  readTime: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  audience: string;
  primaryKeyword: string;
  problem: string;
  outcome: string;
  sections: BlogSection[];
  bullets?: string[];
  ctaTitle: string;
  ctaBody: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ia-transformando-gestion-ingresos",
    title: "Cómo la IA está transformando la gestión de ingresos",
    excerpt:
      "Dónde sí genera retorno la IA cuando una empresa necesita más visibilidad comercial, mejor priorización y menos fuga de oportunidades.",
    author: "Adrian Avila",
    date: "1 Feb 2026",
    isoDate: "2026-02-01",
    readTime: "8 min",
    category: "IA & Automatización",
    seoTitle: "IA para gestión de ingresos B2B: dónde sí genera retorno",
    seoDescription:
      "Cómo aplicar IA en scoring, forecast y seguimiento comercial para mejorar ingresos sin añadir más fricción operativa.",
    audience: "Equipos directivos, operaciones, revenue y empresas B2B que ya venden pero tienen baja visibilidad del pipeline.",
    primaryKeyword: "IA para gestión de ingresos B2B",
    problem:
      "Muchas empresas ya tienen CRM, equipo comercial y canales activos, pero siguen perdiendo dinero porque las decisiones llegan tarde y el seguimiento depende demasiado de esfuerzo manual.",
    outcome:
      "Una implementación bien enfocada de IA permite priorizar mejor, detectar riesgo antes y convertir datos dispersos en acciones concretas para crecer ingresos.",
    sections: [
      {
        heading: "El problema no suele ser falta de esfuerzo, sino falta de visibilidad",
        paragraphs: [
          "En empresas que ya están en marcha, el cuello de botella rara vez es la ausencia de actividad. El problema real es que no hay una lectura clara de qué oportunidades merecen atención, dónde se está frenando el embudo y qué cuentas están entrando en riesgo sin que nadie lo note a tiempo.",
          "Cuando ventas, atención, marketing y operaciones trabajan con información fragmentada, el negocio se vuelve reactivo. La IA no arregla un proceso roto por arte de magia, pero sí puede convertirse en una capa de lectura y priorización mucho más potente que la intuición aislada de cada persona.",
        ],
      },
      {
        heading: "Dónde sí aporta valor la IA en revenue management",
        paragraphs: [
          "El mejor punto de entrada no es un chatbot espectacular ni un dashboard lleno de métricas vistosas. El mejor punto de entrada es una parte del proceso comercial donde hoy se pierda dinero por retraso, mala clasificación o falta de contexto.",
          "Ahí es donde la IA aporta de verdad: scoring comercial, priorización de leads, identificación de cuentas en riesgo, clasificación automática de oportunidades, resúmenes ejecutivos del pipeline y alertas que permitan actuar antes de que el problema escale.",
        ],
      },
      {
        heading: "Qué exige una implementación seria",
        paragraphs: [
          "Para que la IA genere retorno, necesita integrarse a un flujo operativo claro. Si los datos entran mal, si no existe responsabilidad sobre el seguimiento o si cada canal vive aislado, la capa inteligente se vuelve ruido caro.",
          "Por eso el trabajo importante no es solo el modelo o la API. Es diseñar la infraestructura: qué señales se leen, qué eventos disparan acciones, qué prioriza el sistema y cómo se convierte esa inteligencia en decisiones comerciales mejores.",
        ],
      },
    ],
    bullets: [
      "priorización de leads y cuentas",
      "forecast más útil para dirección",
      "alertas tempranas sobre riesgo",
      "menos dependencia de seguimiento manual",
    ],
    ctaTitle: "Si hoy tu pipeline depende demasiado de seguimiento manual",
    ctaBody:
      "Puedo ayudarte a convertir ese proceso en un sistema con mejor lectura, mejor priorización y mejor capacidad de respuesta.",
  },
  {
    slug: "integraciones-esenciales-stack-ventas",
    title: "5 integraciones esenciales para tu stack de ventas",
    excerpt:
      "Las integraciones que más impacto generan cuando una empresa necesita vender con menos fricción y más trazabilidad entre equipos.",
    author: "Adrian Avila",
    date: "8 Feb 2026",
    isoDate: "2026-02-08",
    readTime: "7 min",
    category: "Integraciones",
    seoTitle: "Integraciones esenciales para un stack de ventas B2B",
    seoDescription:
      "Qué sistemas conviene conectar primero para que ventas opere con menos fricción, más contexto y mejor trazabilidad.",
    audience: "Negocios B2B en crecimiento que ya usan varias herramientas pero todavía operan con demasiados saltos manuales.",
    primaryKeyword: "integraciones para stack de ventas B2B",
    problem:
      "El stack comercial suele fallar no por falta de herramientas, sino porque las herramientas no comparten contexto ni activan flujos coherentes.",
    outcome:
      "Cuando las integraciones correctas se diseñan bien, el equipo vende con más velocidad, menos retrabajo y mucha mejor trazabilidad.",
    sections: [
      {
        heading: "No necesitas más herramientas: necesitas menos fricción entre ellas",
        paragraphs: [
          "Muchas empresas acumulan software con la esperanza de volverse más eficientes. Lo que terminan acumulando es complejidad. Formularios, CRM, agenda, correo, WhatsApp, cotizaciones y facturación viven en piezas separadas, y el equipo hace de puente manual entre una y otra.",
          "Cada salto manual mete retrasos, errores y falta de contexto. Eso baja conversión, empeora la percepción del cliente y hace que la operación comercial se vuelva más cansada de lo necesario.",
        ],
      },
      {
        heading: "Las cinco integraciones que suelen generar más retorno",
        paragraphs: [
          "Primero: formularios o landing pages con CRM. Segundo: CRM con WhatsApp o mensajería operativa. Tercero: CRM con agenda o calendarización. Cuarto: ventas con cotización/facturación. Quinto: reporting unificado para dirección.",
          "Ese orden importa porque sigue la secuencia natural del ingreso: captación, seguimiento, coordinación, cierre y lectura de resultados.",
        ],
      },
      {
        heading: "Integrar no es mover datos; es diseñar comportamiento",
        paragraphs: [
          "Una integración rentable no se evalúa solo porque 'sincroniza'. Se evalúa porque reduce pasos, evita pérdidas de contexto y dispara la acción correcta sin intervención adicional.",
          "La pregunta clave no es qué herramientas usas, sino qué eventos del negocio deberían activar una acción automática y hoy todavía dependen de alguien recordarlo manualmente.",
        ],
      },
    ],
    bullets: [
      "captación conectada al CRM",
      "seguimiento conectado a WhatsApp",
      "agenda conectada al proceso comercial",
      "facturación sin retrabajo manual",
      "reporting útil para dirección",
    ],
    ctaTitle: "Si tu equipo vive copiando datos entre herramientas",
    ctaBody:
      "Podemos mapear el stack actual y definir qué integraciones tienen sentido primero para quitar fricción sin sobrecomplicar la operación.",
  },
  {
    slug: "guia-whatsapp-business-api",
    title: "Guía completa de WhatsApp Business API",
    excerpt:
      "Qué necesita una empresa para usar WhatsApp como canal serio de captación, seguimiento y operación, no como un chat improvisado.",
    author: "Adrian Avila",
    date: "15 Feb 2026",
    isoDate: "2026-02-15",
    readTime: "10 min",
    category: "Guías",
    seoTitle: "WhatsApp Business API para empresas: guía práctica y seria",
    seoDescription:
      "Cómo implementar WhatsApp Business API con foco en operación, automatización, trazabilidad y experiencia profesional del cliente.",
    audience: "Empresas que quieren convertir WhatsApp en canal comercial y operativo con estructura, compliance y continuidad.",
    primaryKeyword: "WhatsApp Business API para empresas",
    problem:
      "Muchas compañías ya venden o atienden por WhatsApp, pero lo hacen con procesos frágiles, sin trazabilidad y sin capacidad real de escalar el canal.",
    outcome:
      "Una implementación seria de WhatsApp Business API convierte el canal en infraestructura operativa: más rápida, más medible y más profesional.",
    sections: [
      {
        heading: "La diferencia entre usar WhatsApp y operar sobre WhatsApp",
        paragraphs: [
          "Responder mensajes no es lo mismo que diseñar una operación sobre el canal. Una empresa puede tener mucho volumen en WhatsApp y aun así funcionar mal: sin trazabilidad, sin ownership claro y sin integración con CRM, agenda o backoffice.",
          "WhatsApp Business API permite dejar atrás ese modelo improvisado y construir flujos con verificación, plantillas, automatización, asignación y contexto persistente.",
        ],
      },
      {
        heading: "Qué debe resolverse además del webhook",
        paragraphs: [
          "La parte técnica básica es apenas el inicio. Lo difícil está en diseñar la experiencia: qué mensajes salen, en qué momento, cómo se enruta la conversación, qué datos se capturan, qué eventos disparan acciones internas y cómo se conserva el contexto entre equipos y sistemas.",
          "Si eso no está bien pensado, el canal se siente robótico, torpe o invasivo. Y cuando eso pasa, el problema ya no es técnico, sino reputacional.",
        ],
      },
      {
        heading: "Qué valor espera tu ICP de este canal",
        paragraphs: [
          "Tu ICP no quiere 'tener WhatsApp'. Quiere responder más rápido, calificar mejor, no perder contexto, automatizar tareas repetitivas y mover conversaciones hacia una siguiente acción medible.",
          "Eso exige arquitectura, copy, automatización y criterio operativo. Ahí es donde realmente se diferencia una implementación seria de una improvisada.",
        ],
      },
    ],
    bullets: ["webhooks y eventos", "rutas de atención", "CRM conectado", "plantillas aprobadas", "trazabilidad real"],
    ctaTitle: "Si WhatsApp ya es un canal importante para tu negocio",
    ctaBody:
      "Puedo ayudarte a estructurarlo como una capa operativa confiable, integrable y lista para escalar sin perder experiencia de cliente.",
  },
  {
    slug: "futuro-del-crm-tendencias-2026",
    title: "El futuro del CRM: Tendencias 2026",
    excerpt:
      "Hacia dónde va el CRM cuando deja de ser solo repositorio y empieza a comportarse como sistema de decisiones.",
    author: "Adrian Avila",
    date: "22 Feb 2026",
    isoDate: "2026-02-22",
    readTime: "7 min",
    category: "Tendencias",
    seoTitle: "Tendencias CRM 2026: automatización, IA y contexto operativo",
    seoDescription:
      "Qué está cambiando en los CRM modernos y cómo prepararte para una operación comercial más conectada e inteligente.",
    audience: "Empresas que ya usan CRM pero quieren que se convierta en una herramienta que empuje decisiones reales, no solo almacenamiento.",
    primaryKeyword: "tendencias CRM 2026",
    problem:
      "En muchas compañías, el CRM sigue siendo un lugar donde se archiva información, no un sistema que empuje acciones con criterio.",
    outcome:
      "El CRM moderno se está moviendo hacia automatización, enriquecimiento y sugerencia operativa, siempre que los datos y procesos estén bien diseñados.",
    sections: [
      {
        heading: "El CRM dejó de competir por ser un archivo ordenado",
        paragraphs: [
          "El mercado ya no premia al CRM que simplemente almacena contactos y oportunidades. Lo que hoy gana relevancia es la capacidad de activar procesos, priorizar acciones y dar contexto útil a dirección y equipos operativos.",
          "Eso cambia la conversación: ya no se trata solo de licencias o dashboards, sino de arquitectura de proceso y calidad de datos.",
        ],
      },
      {
        heading: "Las tendencias que sí importan",
        paragraphs: [
          "Las más relevantes hoy son IA contextual, enriquecimiento automático, seguimiento multicanal, automatización de tareas repetitivas y mejores capas de reporting ejecutivo.",
          "Lo importante es que estas capacidades no generen más complejidad. Si se añaden sin criterio, el equipo termina alimentando software en vez de usarlo para vender mejor.",
        ],
      },
      {
        heading: "Qué debería hacer una empresa antes de cambiar de CRM",
        paragraphs: [
          "Antes de cambiar herramienta, conviene mapear proceso, ownership, definiciones de embudo y puntos de fuga. Muchas veces el problema no está en la plataforma actual, sino en la forma en que está siendo usada o en la ausencia de integraciones críticas.",
          "Cambiar de CRM sin resolver eso solo traslada el caos a una interfaz nueva.",
        ],
      },
    ],
    bullets: ["IA contextual", "mejor calidad de datos", "acciones sugeridas", "menos tareas repetitivas"],
    ctaTitle: "Si tu CRM hoy guarda datos pero no mueve decisiones",
    ctaBody:
      "Puedo ayudarte a revisar si el problema está en la herramienta, en el proceso o en la falta de una infraestructura mejor conectada alrededor del CRM.",
  },
  {
    slug: "automatiza-tu-facturacion",
    title: "Automatiza tu proceso de facturación",
    excerpt:
      "Cómo reducir errores, atrasos y retrabajo conectando ventas, operaciones y cobro en un mismo flujo.",
    author: "Adrian Avila",
    date: "1 Mar 2026",
    isoDate: "2026-03-01",
    readTime: "6 min",
    category: "Automatización",
    seoTitle: "Automatizar facturación para empresas: menos errores, mejor flujo",
    seoDescription:
      "Cómo automatizar facturación y cobro conectando ventas, operaciones y administración con menos fricción.",
    audience: "Negocios con volumen comercial creciente que ya sienten desgaste administrativo entre cierre, entrega y cobro.",
    primaryKeyword: "automatizar facturación para empresas",
    problem:
      "Cuando ventas cierra, operaciones entrega y administración cobra en sistemas separados, la facturación se vuelve lenta, propensa a errores y costosa de sostener.",
    outcome:
      "Un flujo bien diseñado mejora tiempos, reduce errores y hace que el cobro acompañe mejor el ritmo comercial del negocio.",
    sections: [
      {
        heading: "Facturación lenta no es solo un problema administrativo",
        paragraphs: [
          "Cada retraso en facturación impacta caja, percepción del cliente y capacidad de gestión interna. Cuando ese proceso depende de copiar y pegar entre herramientas, el margen se erosiona de forma silenciosa.",
          "El problema no es únicamente emitir documentos. El problema es cómo se transfiere la información entre cierre comercial, validación operativa y cobro.",
        ],
      },
      {
        heading: "Dónde suele romperse el flujo",
        paragraphs: [
          "Los puntos más comunes son cierre comercial sin estructura, datos incompletos, condiciones poco claras, aprobaciones informales y ausencia de trazabilidad entre áreas.",
          "Automatizar bien implica definir qué evento inicia el proceso, qué validaciones deben ocurrir, qué documento se genera y quién recibe qué información en cada paso.",
        ],
      },
      {
        heading: "Qué espera realmente una empresa de esta automatización",
        paragraphs: [
          "No espera solo velocidad. Espera menos fricción, menos errores, más claridad entre equipos y una operación administrativa que pueda crecer sin volverse un cuello de botella.",
          "Ese es el tipo de automatización que se traduce en retorno: menos desgaste interno y mejor continuidad entre venta y cobro.",
        ],
      },
    ],
    bullets: ["menos errores", "mejor continuidad entre áreas", "cobro más ordenado", "menos retrabajo administrativo"],
    ctaTitle: "Si tu facturación sigue dependiendo de demasiados pasos manuales",
    ctaBody:
      "Podemos diseñar un flujo que conecte mejor ventas, operación y administración para que el crecimiento no se convierta en caos interno.",
  },
  {
    slug: "metricas-clave-equipo-comercial",
    title: "Métricas clave para medir el éxito de tu equipo",
    excerpt:
      "Qué indicadores ayudan a mejorar decisiones comerciales y cuáles solo maquillan actividad sin impacto real.",
    author: "Adrian Avila",
    date: "8 Mar 2026",
    isoDate: "2026-03-08",
    readTime: "8 min",
    category: "Métricas",
    seoTitle: "KPIs comerciales que sí importan en equipos B2B",
    seoDescription:
      "Las métricas que ayudan a mejorar conversión, velocidad de respuesta y eficiencia comercial en equipos B2B.",
    audience: "Equipos comerciales y founders que necesitan mejor lectura de desempeño sin caer en dashboards decorativos.",
    primaryKeyword: "KPIs comerciales B2B",
    problem:
      "Muchos equipos miden actividad, pero no entienden con claridad qué parte del proceso comercial está frenando crecimiento o deteriorando conversión.",
    outcome:
      "Las métricas correctas ayudan a corregir proceso, asignar foco y elevar la calidad de decisiones en dirección y ventas.",
    sections: [
      {
        heading: "El error más común: medir volumen en lugar de progreso",
        paragraphs: [
          "No todo lo que se puede contar merece atención directiva. Reuniones, llamadas o mensajes pueden subir y aun así no mejorar el negocio. Cuando eso pasa, el equipo siente movimiento, pero no necesariamente avance.",
          "Las métricas útiles son las que explican por qué algo mejora o se frena dentro del proceso comercial.",
        ],
      },
      {
        heading: "Qué KPIs sí valen la pena",
        paragraphs: [
          "Conversión por etapa, tiempo medio de respuesta, edad de oportunidades abiertas, valor promedio por deal, porcentaje de deals estancados y velocidad entre hitos clave suelen ofrecer mucha más claridad que el conteo bruto de actividad.",
          "Esos indicadores ayudan a ver si el problema está en captación, seguimiento, cierre o calidad del pipeline.",
        ],
      },
      {
        heading: "Cómo evitar dashboards decorativos",
        paragraphs: [
          "Un dashboard vale cuando alguien lo usa para decidir. Si la lectura no cambia prioridades ni dispara acciones, se convierte en decoración analítica.",
          "Por eso conviene diseñar reporting con intención: qué necesita ver dirección, qué necesita ver ventas y qué señales deberían activar correcciones operativas.",
        ],
      },
    ],
    bullets: ["conversión por etapa", "tiempo de respuesta", "edad de oportunidades", "deals estancados"],
    ctaTitle: "Si hoy tus métricas no te dicen qué corregir",
    ctaBody:
      "Puedo ayudarte a redefinir el sistema de medición para que el dashboard sirva para decidir, no solo para reportar actividad.",
  },
];

export const blogTopics = ["Todos", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

export const getBlogPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);
