import { useEffect } from "react";

type SEOOptions = {
  title: string;
  description: string;
  path?: string;
  type?: string;
};

const SITE_NAME = "servicioscreativos.online";
const SITE_URL = "https://servicioscreativos.online";

export const useSEO = ({ title, description, path = "", type = "website" }: SEOOptions) => {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

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
    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card' }).setAttribute("content", "summary_large_image");
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' }).setAttribute("content", title);
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description' }).setAttribute("content", description);
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}${path}`;
  }, [title, description, path, type]);
};
