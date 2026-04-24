import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const SITE_URL = "https://servicioscreativos.online";
const SITE_NAME = "servicioscreativos.online";
const TODAY = new Date().toISOString().slice(0, 10);
const TITLE_SEPARATORS = ["|", "-", "·"];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, "..");
const distDir = path.join(projectRoot, "dist");

const sourceFiles = {
  pseo: path.join(projectRoot, "src", "data", "pseo.ts"),
  blog: path.join(projectRoot, "src", "data", "blog.ts"),
  projects: path.join(projectRoot, "src", "data", "projects.ts"),
};

if (!fs.existsSync(distDir)) {
  console.error("No dist directory found. Did you run vite build?");
  process.exit(1);
}

const extractArrayLiteral = (filePath, constName) => {
  const source = fs.readFileSync(filePath, "utf-8");
  const pattern = new RegExp(`export const ${constName}(?::[^=]+)? = (\\[[\\s\\S]*?\\n\\]);`);
  const match = source.match(pattern);

  if (!match) {
    throw new Error(`Could not parse ${constName} from ${path.relative(projectRoot, filePath)}`);
  }

  return vm.runInNewContext(match[1]);
};

const xmlEscape = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const toAbsoluteUrl = (pathname) => `${SITE_URL}${pathname}`;

const buildDocumentTitle = (title) => {
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

const writeFile = (relativePath, content) => {
  const targetPath = path.join(distDir, relativePath);
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, content);
};

const renderUrlSet = (entries) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${xmlEscape(toAbsoluteUrl(entry.path))}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const renderSitemapIndex = (files) => `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${files
  .map(
    (fileName) => `  <sitemap>
    <loc>${xmlEscape(toAbsoluteUrl(`/${fileName}`))}</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>
`;

const pseoData = extractArrayLiteral(sourceFiles.pseo, "pseoData");
const blogPosts = extractArrayLiteral(sourceFiles.blog, "blogPosts");
const projects = extractArrayLiteral(sourceFiles.projects, "projects");

const baseHtmlPath = path.join(distDir, "index.html");

if (!fs.existsSync(baseHtmlPath)) {
  console.error("dist/index.html not found");
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, "utf-8");

const extraRoutes = [
  {
    slug: "embedded-whatsapp",
    h1: "WhatsApp Embedded Signup • Onboarding Oficial",
    title: "Configuración de WhatsApp Business API | Creativv",
    description: "Conecta tu número actual a la API Cloud de WhatsApp mediante el flujo oficial de Embedded Signup y Coexistence de Meta.",
    paragraphs: [
      "Gestiona el onboarding oficial de tu cuenta de WhatsApp Business directamente con Meta.",
      "Habilita la capacidad de automatización sin perder la aplicación móvil original.",
      "Configuración técnica de WABA y Cloud API para empresas de alto crecimiento."
    ],
    h2s: ["Requisitos de Meta", "Flujo de Coexistencia", "Activación de API"]
  },
  {
    slug: "agente",
    h1: "Agente de IA Conversacional • Demo en Vivo",
    title: "Prueba nuestro Agente de IA | Creativv",
    description: "Demostración en tiempo real de un agente de IA capaz de entender contexto, manejar objeciones y agendar citas.",
    paragraphs: [
      "Interactúa con una inteligencia artificial diseñada para la conversión.",
      "Observa cómo el sistema procesa datos y responde con tono de marca.",
      "Tecnología basada en modelos de lenguaje avanzados optimizados para negocios."
    ],
    h2s: ["Capacidades del Agente", "Integración con CRM", "Analítica de Conversación"]
  }
];

const allPages = [...pseoData, ...extraRoutes];

console.log(`Generating ${allPages.length} static HTML entry points...`);

for (const page of allPages) {
  const pageDir = path.join(distDir, page.slug);
  fs.mkdirSync(pageDir, { recursive: true });

  const publicPath = path.join(projectRoot, "public", page.slug, "index.html");
  if (fs.existsSync(publicPath)) {
    // If purely static HTML exists, keep it for faster SEO indexation!
    // We just inject Google Analytics to track visits if missing.
    const staticHtmlPath = path.join(pageDir, "index.html");
    if (fs.existsSync(staticHtmlPath)) {
      let staticHtml = fs.readFileSync(staticHtmlPath, "utf-8");
      
      if (!staticHtml.includes("googletagmanager.com/gtag/js")) {
         const gaMatch = baseHtml.match(/<!-- Google tag \(gtag\.js\) -->[\s\S]*?<\/script>\s*<script>[\s\S]*?<\/script>/);
         if (gaMatch) {
            staticHtml = staticHtml.replace("</head>", `  ${gaMatch[0]}\n</head>`);
            fs.writeFileSync(staticHtmlPath, staticHtml);
         }
      }
    }
    continue; // Skip overwriting it with the blank SPA shell
  }


  const canonicalUrl = toAbsoluteUrl(`/${page.slug}`);
  const replaceTag = (html, pattern, replacement) => {
    const nextHtml = html.replace(pattern, replacement);

    if (nextHtml === html && !html.includes(replacement)) {
      console.warn(`Warning: could not replace pattern ${pattern} for ${page.slug}`);
    }

    return nextHtml;
  };

  // Build the content to inject into #root for crawlers
  const pageIndex = pseoData.findIndex(p => p.slug === page.slug);
  const relatedPages = pseoData
    .filter((_, idx) => (idx >= pageIndex - 4 && idx <= pageIndex + 4) && idx !== pageIndex)
    .slice(0, 6);

  const staticContent = `
    <div id="root">
      <header>
        <nav><a href="/">Inicio</a> | <a href="/mapa-del-sitio">Mapa del sitio</a></nav>
      </header>
      <main>
        <article>
          <h1>${xmlEscape(page.h1)}</h1>
          <div class="content">
            ${(page.paragraphs || []).map(p => `<p>${xmlEscape(p)}</p>`).join('\n            ')}
            ${(page.h2s || []).map(h2 => `<h2>${xmlEscape(h2)}</h2>`).join('\n            ')}
          </div>
        </article>
        
        <section id="related">
          <h3>Soluciones y Rutas Relacionadas</h3>
          <ul>
            ${relatedPages.map(rp => `<li><a href="/${rp.slug}">${xmlEscape(rp.h1.replace(/^[^\p{L}\p{N}]+/u, ""))}</a></li>`).join('\n            ')}
          </ul>
        </section>
      </main>
      <footer>
        <p>© ${new Date().getFullYear()} ${SITE_NAME}</p>
        <nav>
          <a href="/mapa-del-sitio">Directorio Completo</a> | 
          <a href="/industrias">Hub de Industrias</a> | 
          <a href="/ciudades">Hub de Ciudades</a>
        </nav>
      </footer>
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "${xmlEscape(page.h1)}",
          "description": "${xmlEscape(page.description)}",
          "provider": {
            "@type": "Organization",
            "name": "Creativv",
            "url": "${SITE_URL}"
          }
        }
      </script>
    </div>
  `;

  let newHtml = replaceTag(baseHtml, /<title>.*?<\/title>/, `<title>${xmlEscape(buildDocumentTitle(page.title))}</title>`);
  newHtml = replaceTag(
    newHtml,
    /<meta name="description" content=".*?"\s*\/?>/,
    `<meta name="description" content="${xmlEscape(page.description)}" />`
  );
  newHtml = replaceTag(
    newHtml,
    /<meta property="og:title" content=".*?"\s*\/?>/,
    `<meta property="og:title" content="${xmlEscape(page.title)}" />`
  );
  newHtml = replaceTag(
    newHtml,
    /<meta property="og:description" content=".*?"\s*\/?>/,
    `<meta property="og:description" content="${xmlEscape(page.description)}" />`
  );
  newHtml = replaceTag(
    newHtml,
    /<meta property="og:url" content=".*?"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  newHtml = replaceTag(
    newHtml,
    /<link rel="canonical" href=".*?"\s*\/?>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Inject content into #root for better SEO
  newHtml = newHtml.replace('<div id="root"></div>', staticContent);

  if (!/<meta name="robots" /i.test(newHtml)) {
    newHtml = newHtml.replace("</head>", '    <meta name="robots" content="index,follow" />\n  </head>');
  } else {
    newHtml = replaceTag(
      newHtml,
      /<meta name="robots" content=".*?"\s*\/?>/,
      '<meta name="robots" content="index,follow" />'
    );
  }

  fs.writeFileSync(path.join(pageDir, "index.html"), newHtml);
}

const pageEntries = [
  { path: "/", lastmod: TODAY, changefreq: "weekly", priority: "1.0" },
  { path: "/blog", lastmod: TODAY, changefreq: "daily", priority: "0.9" },
  { path: "/contacto", lastmod: TODAY, changefreq: "monthly", priority: "0.8" },
  { path: "/proyectos", lastmod: TODAY, changefreq: "weekly", priority: "0.8" },
  { path: "/industrias", lastmod: TODAY, changefreq: "weekly", priority: "0.9" },
  { path: "/ciudades", lastmod: TODAY, changefreq: "weekly", priority: "0.9" },
  { path: "/mapa-del-sitio", lastmod: TODAY, changefreq: "weekly", priority: "0.9" },
  { path: "/embedded-whatsapp", lastmod: TODAY, changefreq: "weekly", priority: "0.9" },
  { path: "/agente", lastmod: TODAY, changefreq: "weekly", priority: "0.9" },
  { path: "/automatizaciones", lastmod: TODAY, changefreq: "weekly", priority: "0.9" },
  { path: "/marketing", lastmod: TODAY, changefreq: "weekly", priority: "0.8" },
  { path: "/historia", lastmod: TODAY, changefreq: "monthly", priority: "0.6" },
  { path: "/servicios", lastmod: TODAY, changefreq: "weekly", priority: "0.8" },
  { path: "/industrias", lastmod: TODAY, changefreq: "weekly", priority: "0.8" },
  { path: "/ciudades", lastmod: TODAY, changefreq: "weekly", priority: "0.7" },
  { path: "/mapa-del-sitio", lastmod: TODAY, changefreq: "weekly", priority: "0.6" },
];

const blogEntries = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  lastmod: post.isoDate || TODAY,
  changefreq: "monthly",
  priority: "0.7",
}));

const projectEntries = projects
  .filter((project) => project.visibility !== "private")
  .map((project) => ({
    path: `/proyectos/${project.slug}`,
    lastmod: TODAY,
    changefreq: "monthly",
    priority: "0.7",
  }));

const pseoEntries = pseoData.map((page) => ({
  path: `/${page.slug}`,
  lastmod: TODAY,
  changefreq: "weekly",
  priority: "0.7",
}));

const sitemapFiles = {
  "sitemap-pages.xml": pageEntries,
  "sitemap-blog.xml": blogEntries,
  "sitemap-projects.xml": projectEntries,
  "sitemap-pseo.xml": pseoEntries,
};

for (const [fileName, entries] of Object.entries(sitemapFiles)) {
  writeFile(fileName, renderUrlSet(entries));
}

writeFile("sitemap.xml", renderSitemapIndex(Object.keys(sitemapFiles)));

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
writeFile("robots.txt", robotsTxt);

console.log(
  `Generated sitemap index with ${pageEntries.length + blogEntries.length + projectEntries.length + pseoEntries.length} URLs across ${Object.keys(sitemapFiles).length} sitemap files.`
);
console.log("Successfully generated all pSEO entry points and robots.txt!");

