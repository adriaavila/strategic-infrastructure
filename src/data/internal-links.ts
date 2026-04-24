import type { BlogPost } from "@/data/blog";
import { getPseoBySlug, pseoData } from "@/data/pseo";
import {
  getFeaturedFamiliesForIndustry,
  getPseoPageContext,
  pseoFamilyMeta,
  pseoFamilyOrder,
  pseoIndustryMeta,
  pseoIndustryOrder,
  pseoLocationMeta,
  pseoLocationOrder,
  type PseoFamilyKey,
  type PseoIndustryKey,
} from "@/data/pseo-taxonomy";

export type InternalLinkItem = {
  title: string;
  description: string;
  href: string;
  eyebrow?: string;
};

const familyKeywordMap: Record<PseoFamilyKey, string[]> = {
  "ai-agent": ["ia", "ai", "inteligencia artificial", "agente", "revenue", "priorizacion"],
  "whatsapp-automation": ["whatsapp", "business api", "mensajeria", "canal conversacional"],
  "appointment-booking": ["agenda", "cita", "citas", "booking", "calendar", "calendario", "reunion"],
  "crm-integration": ["crm", "integracion", "integraciones", "pipeline", "stack", "datos", "trazabilidad"],
  "customer-support": ["soporte", "atencion", "cliente", "ticket", "faq"],
  "lead-generation": ["lead", "leads", "captacion", "conversion", "embudo", "demanda"],
  "sales-automation": ["ventas", "seguimiento", "forecast", "comercial", "pipeline", "ingresos"],
  chatbot: ["chatbot", "bot", "conversacional"],
};

const industryKeywordMap: Partial<Record<PseoIndustryKey, string[]>> = {
  agencies: ["agencia", "agencias"],
  clinics: ["clinica", "clinicas", "salud"],
  ecommerce: ["ecommerce", "comercio electronico"],
  finance: ["finanzas", "financiero"],
  "law-firms": ["legal", "abogado", "abogados"],
  "real-estate": ["inmobiliario", "real estate", "bienes raices"],
  retail: ["retail", "tienda", "tiendas"],
  schools: ["escuela", "escuelas"],
};

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const cleanTitle = (value: string) => value.replace(/^[^\p{L}\p{N}]+/u, "");

const matchesKeywords = (corpus: string, keywords: string[]) =>
  keywords.some((keyword) => corpus.includes(normalizeText(keyword)));

const buildPseoLinkItem = (slug: string, eyebrow?: string): InternalLinkItem | null => {
  const page = getPseoBySlug(slug);

  if (!page) {
    return null;
  }

  const context = getPseoPageContext(page.slug);
  const defaultEyebrow =
    eyebrow ||
    (context.kind !== "unknown"
      ? context.kind === "family"
        ? pseoFamilyMeta[context.familyKey].shortLabel
        : context.kind === "industry"
          ? pseoIndustryMeta[context.industryKey].label
          : pseoLocationMeta[context.locationKey].label
      : undefined);

  return {
    title: cleanTitle(page.h1),
    description: page.description,
    href: `/${page.slug}`,
    eyebrow: defaultEyebrow,
  };
};

const compactLinks = (items: Array<InternalLinkItem | null>) =>
  items.filter((item): item is InternalLinkItem => Boolean(item));

export const solutionHubLinks = compactLinks(
  pseoFamilyOrder.map((familyKey) => buildPseoLinkItem(familyKey, pseoFamilyMeta[familyKey].shortLabel)),
);

export const servicesInternalLinks: InternalLinkItem[] = [
  {
    title: "Presencia digital",
    description: "Websites, landing pages y activos digitales diseñados para explicar mejor la oferta y convertir mejor.",
    href: "/marketing",
    eyebrow: "Core",
  },
  {
    title: "Automatizaciones",
    description: "Segunda fase para sumar integraciones, IA o automatización cuando la base digital ya está lista.",
    href: "/automatizaciones",
    eyebrow: "Fase 2",
  },
  {
    title: "Soluciones por industria",
    description: "Explora el cluster completo por vertical para entender qué soluciones podrían activarse más adelante según el tipo de negocio.",
    href: "/industrias",
    eyebrow: "Directorio",
  },
  ...compactLinks([
    buildPseoLinkItem("lead-generation"),
    buildPseoLinkItem("crm-integration"),
    buildPseoLinkItem("whatsapp-automation"),
  ]),
];

export const automationInternalLinks = compactLinks([
  buildPseoLinkItem("ai-agent"),
  buildPseoLinkItem("whatsapp-automation"),
  buildPseoLinkItem("crm-integration"),
  buildPseoLinkItem("sales-automation"),
  buildPseoLinkItem("customer-support"),
  buildPseoLinkItem("appointment-booking"),
]);

export const marketingInternalLinks = compactLinks([
  buildPseoLinkItem("lead-generation"),
  buildPseoLinkItem("chatbot"),
  buildPseoLinkItem("sales-automation"),
  buildPseoLinkItem("ai-agent-agencies"),
  buildPseoLinkItem("sales-automation-ecommerce"),
  buildPseoLinkItem("lead-generation-real-estate"),
]);

export const blogHubLinks = compactLinks([
  buildPseoLinkItem("ai-agent"),
  buildPseoLinkItem("whatsapp-automation"),
  buildPseoLinkItem("crm-integration"),
  buildPseoLinkItem("sales-automation"),
  buildPseoLinkItem("lead-generation"),
  buildPseoLinkItem("customer-support"),
]);

export const footerSolutionLinks = solutionHubLinks.slice(0, 4);

export const footerIndustryLinks = compactLinks(
  ["agencies", "clinics", "ecommerce", "real-estate"].map((industryKey) =>
    buildPseoLinkItem(
      getFeaturedFamiliesForIndustry(industryKey as PseoIndustryKey)[0]?.slug || "",
      pseoIndustryMeta[industryKey as PseoIndustryKey].label,
    ),
  ),
);

export const footerCityLinks = compactLinks(
  pseoLocationOrder.slice(0, 4).map((locationKey) => buildPseoLinkItem(`whatsapp-automation-${locationKey}`, pseoLocationMeta[locationKey].label)),
);

export const footerResourceLinks: InternalLinkItem[] = [
  {
    title: "Blog",
    description: "Artículos sobre IA, automatización, CRM y sistemas comerciales.",
    href: "/blog",
    eyebrow: "Contenido",
  },
  {
    title: "Servicios",
    description: "Panorama completo de oferta, prioridades y resultados esperados.",
    href: "/servicios",
    eyebrow: "Comercial",
  },
  {
    title: "Mapa del sitio",
    description: "HTML sitemap para navegar hubs, industrias, ciudades y contenido clave.",
    href: "/mapa-del-sitio",
    eyebrow: "Arquitectura",
  },
  {
    title: "Contacto",
    description: "Entrada directa para explorar si conviene activar alguna de estas rutas.",
    href: "/contacto",
    eyebrow: "Conversacion",
  },
];

export const topLevelSiteLinks: InternalLinkItem[] = [
  {
    title: "Inicio",
    description: "Página principal con posicionamiento, prueba social y servicios base.",
    href: "/",
    eyebrow: "Core",
  },
  {
    title: "Servicios",
    description: "Detalle de las tres líneas principales de trabajo.",
    href: "/servicios",
    eyebrow: "Core",
  },
  {
    title: "Automatizaciones",
    description: "Visión comercial de flujos, asistentes e integraciones.",
    href: "/automatizaciones",
    eyebrow: "Core",
  },
  {
    title: "Presencia digital",
    description: "Webs y activos de captación conectados a sistemas comerciales.",
    href: "/marketing",
    eyebrow: "Core",
  },
  {
    title: "Industrias",
    description: "Directorio completo del cluster por vertical.",
    href: "/industrias",
    eyebrow: "Hub",
  },
  {
    title: "Ciudades",
    description: "Directorio local para las landings geográficas de WhatsApp.",
    href: "/ciudades",
    eyebrow: "Hub",
  },
];

export const sitemapIndustryLinks = pseoIndustryOrder
  .map((industryKey) => {
    const firstPage = getFeaturedFamiliesForIndustry(industryKey)[0];
    return firstPage ? buildPseoLinkItem(firstPage.slug, pseoIndustryMeta[industryKey].label) : null;
  })
  .filter((item): item is InternalLinkItem => Boolean(item));

export const sitemapCityLinks = pseoLocationOrder
  .map((locationKey) => buildPseoLinkItem(`whatsapp-automation-${locationKey}`, pseoLocationMeta[locationKey].label))
  .filter((item): item is InternalLinkItem => Boolean(item));

export const getRelatedInternalLinksForBlogPost = (post: BlogPost, limit = 4): InternalLinkItem[] => {
  const corpus = normalizeText(
    [
      post.title,
      post.excerpt,
      post.primaryKeyword,
      post.category,
      post.problem,
      post.outcome,
      post.audience,
      post.seoTitle,
    ].join(" "),
  );

  const matchedFamilies = pseoFamilyOrder.filter((familyKey) => matchesKeywords(corpus, familyKeywordMap[familyKey]));
  const matchedIndustryPages = Object.entries(industryKeywordMap)
    .filter(([, keywords]) => keywords && matchesKeywords(corpus, keywords))
    .flatMap(([industryKey]) => getFeaturedFamiliesForIndustry(industryKey as PseoIndustryKey).slice(0, 1));

  const deduped = new Map<string, InternalLinkItem>();

  for (const familyKey of matchedFamilies) {
    const item = buildPseoLinkItem(familyKey, pseoFamilyMeta[familyKey].shortLabel);
    if (item) {
      deduped.set(item.href, item);
    }
  }

  for (const page of matchedIndustryPages) {
    const item = buildPseoLinkItem(page.slug);
    if (item) {
      deduped.set(item.href, item);
    }
  }

  if (corpus.includes("whatsapp")) {
    deduped.set("/ciudades", {
      title: "Ciudades y mercados",
      description: "Directorio de landings locales para automatización de WhatsApp.",
      href: "/ciudades",
      eyebrow: "Hub local",
    });
  }

  if (deduped.size < limit) {
    for (const item of blogHubLinks) {
      deduped.set(item.href, item);
      if (deduped.size >= limit) {
        break;
      }
    }
  }

  if (deduped.size < limit) {
    deduped.set("/industrias", {
      title: "Soluciones por industria",
      description: "Cluster completo por vertical para seguir navegando el sistema.",
      href: "/industrias",
      eyebrow: "Hub",
    });
  }

  return Array.from(deduped.values()).slice(0, limit);
};

export const allPseoLinks: InternalLinkItem[] = pseoData.map((page) => ({
  title: page.h1.replace(/^[^\p{L}\p{N}]+/u, ""),
  description: page.description,
  href: `/${page.slug}`,
  eyebrow: getPseoPageContext(page.slug).kind !== "unknown" ? getPseoPageContext(page.slug).kind : undefined,
}));
