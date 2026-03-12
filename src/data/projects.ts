export type ProjectEntry = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  solution: string[];
  stack: string[];
  outcomes: string[];
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  accent: string;
  featured?: boolean;
  visibility?: "public" | "private";
};

export const projects: ProjectEntry[] = [
  {
    slug: "intrega",
    title: "Intrega",
    shortDescription:
      "Landing B2B para consultoría y transformación digital con narrativa de diagnóstico, autoridad y conversión.",
    overview:
      "Landing page para Intrega, una propuesta de consultoría y transformación digital enfocada en operaciones, integración de sistemas y mejora de procesos para negocios del sector hospitalidad.",
    challenge:
      "Convertir un servicio abstracto en una experiencia web que hiciera evidente el problema del cliente antes de vender la solución.",
    solution: [
      "Construí una experiencia tipo scrollytelling con una apertura visual fuerte.",
      "Organicé la página alrededor de diagnóstico, servicios y manifiesto.",
      "Usé motion y progresión narrativa para sostener atención y reforzar posicionamiento.",
      "Priorizé un lenguaje orientado a negocio: margen, riesgo, datos y operación.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel Analytics"],
    outcomes: [
      "Muestra capacidad para vender transformación, no solo mostrar una empresa.",
      "La web ayuda a que el visitante entienda el costo de no cambiar.",
    ],
    tags: ["B2B", "Consultoría", "Landing", "Scrollytelling"],
    image: "/projects/intrega.png",
    githubUrl: "https://github.com/adriaavila/intrega-landing",
    liveUrl: "https://intrega-landing.vercel.app",
    accent: "from-emerald-500/20 to-teal-500/10",
    featured: true,
    visibility: "public",
  },
  {
    slug: "almacen-vc",
    title: "Almacén VC",
    shortDescription:
      "Sistema interno para pedidos, inventario, mantenimiento y analítica operativa dentro de Vistacampo.",
    overview:
      "Aplicación web interna para centralizar control de stock, pedidos entre áreas, mantenimiento y métricas operativas dentro de Vistacampo Centro Terapéutico.",
    challenge:
      "Sustituir procesos manuales y dispersos por un sistema operativo, intuitivo y escalable sin requerir capacitación compleja.",
    solution: [
      "Diseñé una aplicación con roles diferenciados para solicitantes, administración, mantenimiento y owner.",
      "Incorporé flujo completo de pedidos internos, inventario editable con alertas y módulo de mantenimiento.",
      "Añadí dashboard gerencial con gráficos, filtros y exportación CSV para toma de decisiones.",
      "Mantuve la interfaz en español y orientada a rapidez de uso diario.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Convex", "Zustand", "Recharts"],
    outcomes: [
      "Ordena operación real entre áreas y mejora visibilidad del stock.",
      "Demuestra dominio de software interno con flujos multirol.",
    ],
    tags: ["Inventario", "Dashboard", "Operaciones", "Convex"],
    image: "/projects/portfolio/almacen-vc.png",
    githubUrl: "https://github.com/adriaavila/almacen-vc",
    accent: "from-blue-500/20 to-indigo-500/10",
    featured: true,
    visibility: "public",
  },
  {
    slug: "viaja-ven",
    title: "Viaja Ven",
    shortDescription:
      "Plataforma de turismo gastronómico que combina inspiración visual, rutas temáticas y planificación de experiencias.",
    overview:
      "Proyecto web de turismo gastronómico centrado en experiencias locales, rutas temáticas y planificación de recorridos en Colonia Tovar.",
    challenge:
      "Unir inspiración y utilidad en la misma interfaz sin que el producto se sintiera solo como una landing o solo como un catálogo.",
    solution: [
      "Diseñé una home con hero narrativo y microanimaciones para elevar la percepción del destino.",
      "Organicé las experiencias con tarjetas visuales, ratings y categorías.",
      "Incorporé rutas temáticas y lógica de plan para acercar la experiencia a una herramienta útil.",
      "Trabajé una estética cálida y editorial para reforzar la identidad gastronómica del lugar.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Componentes UI personalizados"],
    outcomes: [
      "Demuestra capacidad para diseñar experiencias orientadas a exploración y decisión.",
      "Equilibra contenido, descubrimiento y conversión en un mismo producto.",
    ],
    tags: ["Turismo", "Gastronomía", "UX", "Plataforma"],
    image: "/projects/portfolio/viaja-ven.png",
    githubUrl: "https://github.com/adriaavila/viaja-ven",
    liveUrl: "https://viaja-ven.vercel.app",
    accent: "from-amber-500/20 to-orange-500/10",
    featured: true,
    visibility: "public",
  },
  {
    slug: "artistheway",
    title: "Artistheway",
    shortDescription:
      "Ecommerce editorial que mezcla catálogo, storytelling cultural y dirección visual para arte y fotografía.",
    overview:
      "Ecommerce editorial para una colección de pinturas y fotografía inspirada en la herencia cultural de Tarija, Bolivia.",
    challenge:
      "Construir una tienda que vendiera piezas artísticas sin sentirse como un ecommerce genérico.",
    solution: [
      "Diseñé una home con fuerte dirección visual y narrativa de marca.",
      "Organicé el catálogo en colecciones y categorías para facilitar exploración.",
      "Trabajé el diseño de producto para que cada pieza se sintiera curada, no listada de forma mecánica.",
      "Combiné componentes de ecommerce con una estética editorial y artística.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Three.js", "React Three Fiber", "Vercel"],
    outcomes: [
      "Demuestra cómo un ecommerce puede construir universo de marca alrededor del producto.",
      "Refuerza el valor percibido desde la dirección visual y el storytelling.",
    ],
    tags: ["Ecommerce", "Arte", "Storytelling", "Branding"],
    image: "/projects/portfolio/artistheway.png",
    githubUrl: "https://github.com/adriaavila/artistheway",
    liveUrl: "https://artistheway.vercel.app",
    accent: "from-purple-500/20 to-violet-500/10",
    featured: true,
    visibility: "public",
  },

  {
    slug: "avepane",
    title: "AVEPANE",
    shortDescription:
      "Sitio institucional para una organización social, diseñado para comunicar impacto, programas y confianza con claridad.",
    overview:
      "Sitio web institucional para AVEPANE, una organización con más de 50 años de trabajo en inclusión, formación y oportunidades para personas con discapacidad intelectual en Venezuela.",
    challenge:
      "Comunicar una labor social profunda sin caer en una presentación fría, confusa o demasiado corporativa.",
    solution: [
      "Diseñé una landing con narrativa clara desde el primer bloque.",
      "Organicé los programas como piezas entendibles y accionables.",
      "Usé una interfaz visual limpia para reforzar inclusión, credibilidad y legibilidad.",
      "Estructuré el contenido para presentar mejor la organización ante familias, aliados y colaboradores.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "v0", "Vercel"],
    outcomes: [
      "Traduce impacto social en producto digital.",
      "Muestra sensibilidad para representar causas reales con estructura y criterio.",
    ],
    tags: ["Institucional", "Impacto social", "Accesibilidad", "Landing"],
    image: "/projects/portfolio/verona-saas.png",
    githubUrl: "https://github.com/adriaavila/avepane",
    accent: "from-cyan-500/20 to-sky-500/10",
    visibility: "public",
  },
  /*{
    slug: "verona-saas",
    title: "Verona SaaS",
    shortDescription:
      "Dashboard administrativo para condominios con reservas, residentes, finanzas y operación interna en una sola interfaz.",
    overview:
      "Dashboard SaaS para administración residencial, enfocado en reservas de amenidades, directorio de residentes, finanzas y operación interna.",
    challenge:
      "Dar forma de producto a una operación administrativa que normalmente vive fragmentada entre mensajes, hojas de cálculo y procesos manuales.",
    solution: [
      "Diseñé una estructura tipo dashboard con layout persistente y navegación móvil.",
      "Separé los flujos críticos en módulos claros: reservaciones, residentes, finanzas y ajustes.",
      "Trabajé componentes reutilizables para sostener consistencia en toda la interfaz.",
      "Enfoqué la experiencia en legibilidad, velocidad de uso y organización operacional.",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Router", "TanStack Query", "Lovable"],
    outcomes: [
      "Demuestra lógica de producto en interfaces SaaS multiárea.",
      "Hace visible una operación diaria compleja dentro de una experiencia ordenada.",
    ],
    tags: ["SaaS", "Dashboard", "Residencial", "Operaciones"],
    image: "/projects/portfolio/verona-saas.png",
    githubUrl: "https://github.com/adriaavila/verona-saas",
    accent: "from-fuchsia-500/20 to-purple-500/10",
    visibility: "private",
  },
  {
    slug: "sober-tech",
    title: "Sober Tech",
    shortDescription:
      "App de acompañamiento personal con check-ins, recovery curve y herramientas de soporte para contextos sensibles.",
    overview:
      "Aplicación web enfocada en acompañamiento de recuperación personal, check-ins diarios, visualización de señales emocionales y herramientas de apoyo en momentos críticos.",
    challenge:
      "Diseñar una herramienta sensible y útil para un contexto emocionalmente delicado, con fricción mínima y experiencia calmada.",
    solution: [
      "Organicé la app alrededor de check-ins, perfil, anclas personales e historial.",
      "Incorporé autenticación, onboarding y persistencia de estado para darle continuidad real al uso.",
      "Diseñé una interfaz calmada, mobile-first y orientada a hábitos.",
      "Incluí una visualización de recovery curve para traducir información emocional en algo más tangible.",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "React Router", "TanStack Query", "Framer Motion"],
    outcomes: [
      "Combina UX, producto y sensibilidad humana.",
      "Reduce fricción en acciones importantes para usuarios vulnerables.",
    ],
    tags: ["Wellness", "Mobile first", "Supabase", "Producto"],
    image: "/projects/portfolio/sober-tech.png",
    githubUrl: "https://github.com/adriaavila/sober-tech",
    accent: "from-lime-500/20 to-emerald-500/10",
    visibility: "private",
  },
  {
    slug: "taller-samer",
    title: "Taller Samer",
    shortDescription:
      "Sistema web para gestión operativa de un taller mecánico con dashboard, jornadas y control de trabajo.",
    overview:
      "Sistema web para gestión operativa de un taller mecánico, con foco en jornadas, órdenes de trabajo, planificación y control interno.",
    challenge:
      "Transformar la operación de un taller en una experiencia digital clara, rápida y accionable.",
    solution: [
      "Diseñé un dashboard orientado a operación diaria, no solo a visualización.",
      "Organicé accesos directos para registrar jornada, gestionar órdenes y revisar planificación.",
      "Incorporé indicadores y gráficos para dar contexto sin saturar la interfaz.",
      "Priorizé una estructura limpia para que el producto se sienta usable desde el primer vistazo.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"],
    outcomes: [
      "Muestra capacidad para ordenar trabajo real dentro de una herramienta interna.",
      "Demuestra enfoque en claridad operacional y velocidad de uso.",
    ],
    tags: ["Dashboard", "Operaciones", "Taller", "B2B"],
    image: "/projects/portfolio/taller-samer.png",
    githubUrl: "https://github.com/adriaavila/taller-samer",
    accent: "from-zinc-500/20 to-stone-500/10",
    visibility: "public",
  },
  {
    slug: "wasap-creativ",
    title: "Wasap Creativ",
    shortDescription:
      "Base SaaS para agentes de WhatsApp con IA, webhooks, multi-tenancy y arquitectura lista para producto.",
    overview:
      "Plataforma SaaS para agentes de WhatsApp con IA, integrada con backend en Convex y enfoque multi-organización.",
    challenge:
      "Conectar mensajería real, lógica de producto y backend moderno en una sola arquitectura confiable.",
    solution: [
      "Organicé el proyecto sobre Next.js + Convex para combinar UI y backend reactivo.",
      "Integré el flujo de webhook para Meta/WhatsApp.",
      "Planteé una arquitectura con scoping por organización para entornos multi-tenant.",
      "Dejé preparado el sistema para trabajar prompts dinámicos del agente y despliegue en Vercel.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Convex", "OpenAI API", "Clerk", "Tailwind CSS", "WhatsApp Cloud API"],
    outcomes: [
      "Combina IA, mensajería, producto SaaS y arquitectura backend.",
      "Funciona como base sólida para un producto conversacional real.",
    ],
    tags: ["WhatsApp", "IA", "SaaS", "Convex"],
    image: "/projects/portfolio/wasap-creativ.png",
    githubUrl: "https://github.com/adriaavila/wasap-creativ",
    accent: "from-green-500/20 to-emerald-500/10",
    visibility: "public",
  },
  {
    slug: "adrianavilamolina",
    title: "AdrianAvilaMolina",
    shortDescription:
      "Portfolio personal con narrativa profesional, journal y capa de interacción asistida por IA.",
    overview:
      "Portfolio personal y journal de construcción digital orientado a mostrar experiencia, proyectos, narrativa profesional y una capa de interacción asistida por IA.",
    challenge:
      "Crear un portfolio que no se sintiera como una hoja de vida estática.",
    solution: [
      "Organicé el contenido como una experiencia de marca personal, no solo como CV.",
      "Centralicé la información del portfolio en datos locales para facilitar mantenimiento.",
      "Estructuré la web para combinar presentación profesional, proyectos y journal.",
      "Incorporé una capa de AI Twin para hacer la experiencia más interactiva y distintiva.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Clerk", "OpenAI"],
    outcomes: [
      "Convierte el portfolio en un producto personal con identidad.",
      "Refuerza posicionamiento profesional más allá del historial laboral.",
    ],
    tags: ["Portfolio", "Marca personal", "IA", "Journal"],
    image: "/projects/portfolio/adrianavilamolina.png",
    githubUrl: "https://github.com/adriaavila/adrianavilamolina",
    accent: "from-slate-500/20 to-neutral-500/10",
    visibility: "public",
  },
  {
    slug: "vistacampo-redesign",
    title: "Vistacampo Redesign",
    shortDescription:
      "Sitio institucional multilingüe para un centro de rehabilitación, enfocado en confianza, claridad y accesibilidad.",
    overview:
      "Sitio web institucional para un centro especializado en rehabilitación de adicciones, con enfoque en confianza, accesibilidad, contenido multilingüe y presencia digital profesional.",
    challenge:
      "Diseñar una experiencia web sensible, creíble y bien estructurada para un tema profundamente delicado.",
    solution: [
      "Construí una arquitectura multilingüe para español e inglés.",
      "Organicé contenido institucional, blog, noticias, equipo e instalaciones en una estructura coherente.",
      "Incorporé MDX y rutas dinámicas para facilitar publicación de contenido.",
      "Trabajé una identidad visual sobria y profesional orientada a transmitir calma, credibilidad y acompañamiento.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MDX", "i18n", "Vercel Analytics"],
    outcomes: [
      "Demuestra capacidad para construir experiencias digitales para sectores sensibles.",
      "Une contenido, diseño y arquitectura para generar confianza real.",
    ],
    tags: ["Salud", "Multilenguaje", "Institucional", "SEO"],
    image: "/projects/portfolio/vistacampo-redesign.png",
    githubUrl: "https://github.com/adriaavila/vistacampo-redesign-4r",
    accent: "from-teal-500/20 to-cyan-500/10",
    visibility: "public",
  },
  */
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);



