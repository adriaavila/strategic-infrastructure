import { useEffect } from "react";

type SEOOptions = {
  title: string;
  description: string;
  path?: string;
  type?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const SITE_NAME = "Creativv";
const SITE_URL = "https://servicioscreativos.online";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-share.png`;
const DEFAULT_OG_IMAGE_ALT = "Creativv con icono VV violeta y sistemas con IA para empresas";
const TITLE_SEPARATORS = ["|", "-", "·"];

const buildDocumentTitle = (title: string) => {
  const normalizedTitle = title.trim();
  const lowerSiteName = SITE_NAME.toLowerCase();
  const lowerTitle = normalizedTitle.toLowerCase();

  if (lowerTitle === lowerSiteName) {
    return SITE_NAME;
  }

  const alreadyContainsSiteName = TITLE_SEPARATORS.some((separator) =>
    lowerTitle.includes(`${separator} ${lowerSiteName}`)
  );

  return alreadyContainsSiteName ? normalizedTitle : `${normalizedTitle} | ${SITE_NAME}`;
};

export const useSEO = ({
  title,
  description,
  path = "",
  type = "website",
  structuredData,
}: SEOOptions) => {
  useEffect(() => {
    document.title = buildDocumentTitle(title);

    const ensureMeta = (selector: string, attrs: Record<string, string>) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        Object.entries(attrs).forEach(([key, value]) => element?.setAttribute(key, value));
        document.head.appendChild(element);
      }
      return element;
    };

    ensureMeta('meta[name="description"]', { name: 'description' }).setAttribute("content", description);
    ensureMeta('meta[property="og:title"]', { property: 'og:title' }).setAttribute("content", title);
    ensureMeta('meta[property="og:description"]', { property: 'og:description' }).setAttribute("content", description);
    ensureMeta('meta[property="og:type"]', { property: 'og:type' }).setAttribute("content", type);
    ensureMeta('meta[property="og:url"]', { property: 'og:url' }).setAttribute("content", `${SITE_URL}${path}`);
    ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name' }).setAttribute("content", SITE_NAME);
    ensureMeta('meta[property="og:image"]', { property: 'og:image' }).setAttribute("content", DEFAULT_OG_IMAGE);
    ensureMeta('meta[property="og:image:width"]', { property: 'og:image:width' }).setAttribute("content", "1200");
    ensureMeta('meta[property="og:image:height"]', { property: 'og:image:height' }).setAttribute("content", "630");
    ensureMeta('meta[property="og:image:alt"]', { property: 'og:image:alt' }).setAttribute("content", DEFAULT_OG_IMAGE_ALT);
    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card' }).setAttribute("content", "summary_large_image");
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' }).setAttribute("content", title);
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description' }).setAttribute("content", description);
    ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image' }).setAttribute("content", DEFAULT_OG_IMAGE);
    ensureMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt' }).setAttribute("content", DEFAULT_OG_IMAGE_ALT);
    ensureMeta('meta[name="robots"]', { name: "robots" }).setAttribute("content", "index,follow");
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}${path}`;

    const structuredDataId = "page-structured-data";
    const existingStructuredData = document.getElementById(structuredDataId);

    if (!structuredData || (Array.isArray(structuredData) && structuredData.length === 0)) {
      existingStructuredData?.remove();
      return;
    }

    const schemaScript = existingStructuredData ?? document.createElement("script");
    schemaScript.id = structuredDataId;
    schemaScript.setAttribute("type", "application/ld+json");
    schemaScript.textContent = JSON.stringify(structuredData);

    if (!existingStructuredData) {
      document.head.appendChild(schemaScript);
    }
  }, [title, description, path, structuredData, type]);
};
