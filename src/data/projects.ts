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
  gallery?: string[];
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
      "Una experiencia de scrollytelling diseñada para Intrega, una consultora de transformación digital. El objetivo era alejar el diseño de las webs corporativas genéricas y centrarlo en una narrativa de autoridad que diagnostica los problemas del sector hospitality antes de proponer la solución.",
    challenge:
      "Convertir un servicio estratégico y abstracto en una propuesta de valor tangible. El reto residía en equilibrar una estética premium con mensajes directos sobre eficiencia operativa, reducción de mermas y aumento de márgenes.",
    solution: [
      "Arquitectura de scrollytelling que guía al usuario desde el problema hasta la solución.",
      "Diseño visual minimalista con tipos de letra fuertes y alto contraste.",
      "Secciones dedicadas a diagnóstico operativo, manifiesto de marca y pilares de servicio.",
      "Micro-interacciones fluidas para mantener el engagement durante la navegación.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel Analytics"],
    outcomes: [
      "Incremento percibido en la autoridad de marca desde el primer contacto visual.",
      "Mejora en la retención de usuarios gracias a la estructura narrativa.",
      "Claridad total en la oferta de servicios complejos de consultoría.",
    ],
    tags: ["B2B", "Consultoría", "Landing", "Scrollytelling"],
    image: "/projects/intrega.png",
    gallery: [
      "/projects/gallery/intrega/hero.png",
      "/projects/gallery/intrega/diagnostic.png",
      "/projects/gallery/intrega/services.png",
      "/projects/gallery/intrega/footer.png",
    ],
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
      "Sistema operativo interno para pedidos, inventario, mantenimiento y analítica operativa en tiempo real.",
    overview:
      "Software a medida diseñado para centralizar la operación logística y de mantenimiento de Vistacampo. Esta aplicación sustituye procesos manuales dispersos por un flujo de trabajo digital que conecta diferentes áreas de la organización.",
    challenge:
      "Digitalizar una operación física compleja sin añadir fricción a los empleados. Se necesitaba una herramienta que fuera lo suficientemente potente para la gerencia (con métricas y control) pero extremadamente simple para los operarios de campo.",
    solution: [
      "Desarrollo de un backend reactivo con Convex para actualizaciones en tiempo real sin recarga.",
      "Sistema de roles granular: solicitantes, aprobadores, mantenimiento y administrador.",
      "Módulo de inventario inteligente con alertas de stock bajo y trazabilidad completa.",
      "Dashboard de analítica operativa con visualización de tendencias y exportación de datos.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Convex", "Zustand", "Recharts"],
    outcomes: [
      "Reducción drástica en errores de inventario y pedidos duplicados.",
      "Visibilidad total de los tiempos de respuesta en mantenimiento.",
      "Toma de decisiones basada en datos reales, no en estimaciones.",
    ],
    tags: ["Inventario", "Dashboard", "Operaciones", "Convex"],
    image: "/projects/portfolio/almacen-vc.png",
    gallery: [
      "/projects/gallery/almacen-vc/hero.png",
      "/projects/gallery/almacen-vc/details.png",
      "/projects/gallery/almacen-vc/full.png",
    ],
    githubUrl: "https://github.com/adriaavila/almacen-vc",
    accent: "from-blue-500/20 to-indigo-500/10",
    featured: true,
    visibility: "public",
  },
  {
    slug: "viaja-ven",
    title: "Viaja Ven",
    shortDescription:
      "Plataforma de turismo gastronómico que combina inspiración visual, rutas temáticas y descubrimiento sensorial.",
    overview:
      "Una plataforma web dedicada a elevar la experiencia del turismo gastronómico en la Colonia Tovar. Viaja Ven no es solo un catálogo, es una herramienta de descubrimiento que utiliza la dirección visual para vender el sabor y la cultura del destino.",
    challenge:
      "Unificar la inspiración visual con la utilidad práctica. El reto era crear una interfaz que 'abriera el apetito' al usuario mientras le proporcionaba las herramientas necesarias para planificar su visita de forma eficiente.",
    solution: [
      "Diseño orientado a la fotografía de alta calidad para destacar el producto gastronómico.",
      "Sistema de rutas curadas por categorías: café, repostería, platos fuertes.",
      "Filtros inteligentes por presupuesto, popularidad y tipo de experiencia.",
      "Arquitectura móvil primero (mobile-first) para uso en el destino.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    outcomes: [
      "Creación de un ecosistema digital que dignifica el turismo local.",
      "UX optimizada para la conversión: del descubrimiento al plan en 3 clics.",
      "Estética editorial que diferencia la marca de catálogos turísticos genéricos.",
    ],
    tags: ["Turismo", "Gastronomía", "UX", "Plataforma"],
    image: "/projects/portfolio/viaja-ven.png",
    gallery: [
      "/projects/gallery/viaja-ven/hero.png",
      "/projects/gallery/viaja-ven/trending.png",
      "/projects/gallery/viaja-ven/routes.png",
      "/projects/gallery/viaja-ven/footer.png",
    ],
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
      "Ecommerce editorial centrado en la herencia cultural chapaqueña y la curaduría de arte fino.",
    overview:
      "Una tienda online diseñada como una galería de arte digital. Artistheway comercializa piezas exclusivas de artistas de Tarija, Bolivia, utilizando el storytelling para dar contexto y valor a cada obra individual.",
    challenge:
      "Vender arte online requiere generar una confianza absoluta en la calidad y el origen. El reto fue diseñar un ecommerce que se sintiera como una galería de lujo, donde la interfaz no compite con la obra, sino que la enmarca.",
    solution: [
      "Fichas de producto enriquecidas con narrativa sobre el artista y la técnica.",
      "Integración de pasarela de pagos segura y optimizada para transacciones de alto valor.",
      "Layouts asimétricos y tipografía elegante para reforzar el carácter artístico.",
      "Optimización de imágenes para mantener la fidelidad visual sin penalizar el rendimiento.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Framer Motion"],
    outcomes: [
      "Digitalización de un mercado tradicionalmente físico y local.",
      "Elevación del valor percibido de las obras a través de la presentación digital.",
      "Alcance internacional para artistas locales gracias a una plataforma profesional.",
    ],
    tags: ["Ecommerce", "Arte", "Storytelling", "Branding"],
    image: "/projects/portfolio/artistheway.png",
    gallery: [
      "/projects/gallery/artistheway/hero.png",
      "/projects/gallery/artistheway/artworks.png",
      "/projects/gallery/artistheway/collections.png",
      "/projects/gallery/artistheway/footer.png",
    ],
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
      "Sitio institucional para una organización social, diseñado para comunicar impacto y transparencia.",
    overview:
      "Rediseño y desarrollo de la presencia digital de AVEPANE. El foco principal fue estructurar 50 años de historia y servicios en una interfaz que transmita profesionalismo, esperanza y facilidad de acceso para las familias.",
    challenge:
      "Organizar una gran cantidad de servicios institucionales y programas sociales en una jerarquía de información lógica que no abrume al visitante.",
    solution: [
      "Diseño basado en componentes modulares para facilitar la actualización de contenidos.",
      "Enfoque en accesibilidad (WCAG) para garantizar el uso por parte de toda la comunidad.",
      "Secciones de impacto visual que resumen la labor social en cifras y testimonios reales.",
      "Integración de formularios de contacto y donación optimizados.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "v0", "Vercel"],
    outcomes: [
      "Modernización total de la imagen institucional de la organización.",
      "Mejora en la captación de aliados y voluntarios a través del canal digital.",
      "UX simplificada para que los beneficiarios encuentren servicios rápidamente.",
    ],
    tags: ["Institucional", "Impacto social", "Accesibilidad", "Landing"],
    image: "/projects/portfolio/verona-saas.png",
    githubUrl: "https://github.com/adriaavila/avepane",
    accent: "from-cyan-500/20 to-sky-500/10",
    visibility: "public",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);



