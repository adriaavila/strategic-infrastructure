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
  content: string[];
  bullets?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ia-transformando-gestion-ingresos",
    title: "Cómo la IA está transformando la gestión de ingresos",
    excerpt: "Cómo usar automatización, scoring y análisis predictivo para crecer ingresos con menos fricción operativa.",
    author: "Adrian Avila",
    date: "1 Feb 2026",
    isoDate: "2026-02-01",
    readTime: "6 min",
    category: "IA & Automatización",
    seoTitle: "Cómo la IA transforma la gestión de ingresos B2B",
    seoDescription: "Casos y estrategias para aplicar IA en pricing, seguimiento comercial y crecimiento de ingresos en negocios B2B.",
    content: [
      "La mayoría de las empresas no pierde dinero por falta de esfuerzo, sino por falta de visibilidad. La IA aplicada a revenue management permite detectar oportunidades que antes se escapaban entre hojas de cálculo, CRM mal usados y decisiones tomadas demasiado tarde.",
      "Cuando se implementa bien, la IA ayuda a priorizar leads, detectar señales de abandono, mejorar forecast y automatizar seguimientos comerciales. No reemplaza criterio humano: lo amplifica.",
      "En proyectos B2B, el mayor impacto suele aparecer cuando la IA se conecta a procesos concretos: scoring comercial, clasificación automática de oportunidades, alertas sobre cuentas en riesgo y dashboards que muestren dónde se estanca el pipeline.",
      "La clave no es usar IA por moda. La clave es elegir una parte del proceso donde hoy se pierde tiempo, foco o margen, y convertirla en un sistema que aprenda del comportamiento del negocio.",
    ],
    bullets: ["forecast comercial", "priorización de leads", "alertas de riesgo", "visibilidad sobre pipeline"],
  },
  {
    slug: "integraciones-esenciales-stack-ventas",
    title: "5 integraciones esenciales para tu stack de ventas",
    excerpt: "Las integraciones que más reducen fricción entre marketing, ventas, atención y operación comercial.",
    author: "Adrian Avila",
    date: "8 Feb 2026",
    isoDate: "2026-02-08",
    readTime: "7 min",
    category: "Integraciones",
    seoTitle: "5 integraciones esenciales para un stack comercial moderno",
    seoDescription: "Qué sistemas conviene conectar primero para que ventas opere con menos fricción y más trazabilidad.",
    content: [
      "Un stack de ventas no falla por falta de herramientas; falla porque las herramientas no hablan entre sí. Cada salto manual entre formularios, CRM, WhatsApp, correo o facturación es una fuente de errores y retrasos.",
      "Las integraciones más rentables suelen conectar captura de leads, CRM, mensajería, agenda y facturación. Eso permite que el equipo deje de perseguir datos y se concentre en cerrar oportunidades.",
      "Una buena integración no solo mueve información: impone consistencia. Define qué dato entra, a dónde va, quién lo usa y qué acción se dispara después.",
      "Cuando ese mapa está bien diseñado, el negocio se siente más rápido, más profesional y mucho más medible.",
    ],
    bullets: ["formularios con CRM", "CRM con WhatsApp", "agenda con ventas", "facturación conectada", "reporting unificado"],
  },
  {
    slug: "guia-whatsapp-business-api",
    title: "Guía completa de WhatsApp Business API",
    excerpt: "Qué necesitas para usar WhatsApp como canal serio de captación, seguimiento y soporte en tu negocio.",
    author: "Adrian Avila",
    date: "15 Feb 2026",
    isoDate: "2026-02-15",
    readTime: "9 min",
    category: "Guías",
    seoTitle: "Guía de WhatsApp Business API para negocios y automatización",
    seoDescription: "Una guía práctica para implementar WhatsApp Business API con foco en operación, automatización y experiencia del cliente.",
    content: [
      "WhatsApp dejó de ser solo un canal informal. Para muchos negocios ya es el punto principal de entrada, seguimiento y cierre. La diferencia está en si se usa como chat improvisado o como infraestructura de comunicación.",
      "Con WhatsApp Business API puedes automatizar respuestas, enrutar conversaciones, capturar información útil, disparar flujos y conectar el canal con tu CRM o sistema interno.",
      "Pero también exige orden: plantillas aprobadas, manejo correcto de sesiones, trazabilidad y una experiencia de usuario que no se sienta robótica ni torpe.",
      "Las mejores implementaciones son las que respetan el canal, reducen tiempos de respuesta y mantienen contexto entre equipos, bots y clientes.",
    ],
    bullets: ["webhooks", "plantillas aprobadas", "multiagente", "CRM conectado"],
  },
  {
    slug: "futuro-del-crm-tendencias-2026",
    title: "El futuro del CRM: Tendencias 2026",
    excerpt: "De repositorio pasivo a sistema de decisiones: hacia dónde va el CRM moderno.",
    author: "Adrian Avila",
    date: "22 Feb 2026",
    isoDate: "2026-02-22",
    readTime: "6 min",
    category: "Tendencias",
    seoTitle: "Tendencias CRM 2026: automatización, IA y contexto real",
    seoDescription: "Qué cambios están redefiniendo el CRM y cómo prepararte para una operación comercial más inteligente.",
    content: [
      "Durante años, el CRM fue poco más que un archivo glorificado. Hoy está evolucionando hacia una capa operativa con automatización, contexto y capacidad de sugerir acciones.",
      "Las tendencias más claras apuntan a IA contextual, enrichment automático, seguimiento multicanal y dashboards que ya no solo muestran qué pasó, sino qué conviene hacer después.",
      "El CRM del futuro no será el lugar donde se guarda la información, sino el lugar donde esa información se convierte en movimiento.",
      "Eso obliga a rediseñar procesos comerciales, calidad de datos e integración entre sistemas. Si el dato entra mal, la inteligencia posterior también falla.",
    ],
    bullets: ["IA contextual", "datos enriquecidos", "acciones sugeridas", "multicanal"],
  },
  {
    slug: "automatiza-tu-facturacion",
    title: "Automatiza tu proceso de facturación",
    excerpt: "Cómo reducir errores, atrasos y retrabajo conectando ventas, operaciones y cobros.",
    author: "Adrian Avila",
    date: "1 Mar 2026",
    isoDate: "2026-03-01",
    readTime: "5 min",
    category: "Automatización",
    seoTitle: "Cómo automatizar facturación y cobrar con menos fricción",
    seoDescription: "Una guía para automatizar la facturación y reducir errores operativos entre ventas y administración.",
    content: [
      "La facturación manual genera dos problemas: errores visibles y retrasos invisibles. Lo primero molesta. Lo segundo drena caja. Cuando ventas, operaciones y administración no están conectados, el cobro se vuelve más lento e incierto.",
      "Automatizar facturación no significa solo emitir documentos más rápido. Significa que la información correcta llegue al momento correcto sin depender de copiar y pegar entre sistemas.",
      "Los mejores flujos parten del cierre comercial, verifican condiciones, generan comprobantes, notifican al cliente y dejan trazabilidad para conciliación y reporting.",
      "Ese tipo de automatización libera tiempo administrativo y mejora la percepción del cliente porque reduce fricción en una parte crítica del servicio.",
    ],
    bullets: ["menos errores", "cobro más rápido", "mejor conciliación", "flujo entre áreas"],
  },
  {
    slug: "metricas-clave-equipo-comercial",
    title: "Métricas clave para medir el éxito de tu equipo",
    excerpt: "Qué KPIs conviene seguir para no confundir actividad con avance comercial real.",
    author: "Adrian Avila",
    date: "8 Mar 2026",
    isoDate: "2026-03-08",
    readTime: "8 min",
    category: "Métricas",
    seoTitle: "KPIs comerciales que sí importan para crecer un equipo de ventas",
    seoDescription: "Las métricas que ayudan a mejorar seguimiento, conversión y eficiencia comercial en equipos B2B.",
    content: [
      "No todo lo medible importa, y no todo lo importante se está midiendo bien. Muchos equipos persiguen volumen de actividad cuando el verdadero problema está en conversión, calidad de oportunidades o velocidad de respuesta.",
      "Los KPIs más útiles suelen combinar embudo, tiempo y calidad: tasa de conversión por etapa, tiempo medio de contacto, valor promedio por oportunidad y porcentaje de deals estancados.",
      "Una métrica sirve cuando ayuda a decidir. Si solo genera ruido, se convierte en decoración analítica.",
      "La meta no es llenar dashboards; la meta es tener menos dudas sobre qué corregir en el proceso comercial.",
    ],
    bullets: ["conversión por etapa", "tiempo de respuesta", "valor por oportunidad", "deals estancados"],
  },
];

export const blogTopics = ["Todos", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

export const getBlogPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);
