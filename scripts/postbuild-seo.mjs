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

console.log(`Generating ${pseoData.length} static HTML entry points...`);

for (const page of pseoData) {
  const pageDir = path.join(distDir, page.slug);
  fs.mkdirSync(pageDir, { recursive: true });

  const canonicalUrl = toAbsoluteUrl(`/${page.slug}`);
  const replaceTag = (html, pattern, replacement) => {
    const nextHtml = html.replace(pattern, replacement);

    if (nextHtml === html) {
      console.warn(`Warning: could not replace pattern ${pattern} for ${page.slug}`);
    }

    return nextHtml;
  };
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
  { path: "/automatizaciones", lastmod: TODAY, changefreq: "weekly", priority: "0.9" },
  { path: "/marketing", lastmod: TODAY, changefreq: "weekly", priority: "0.8" },
  { path: "/historia", lastmod: TODAY, changefreq: "monthly", priority: "0.6" },
  { path: "/servicios", lastmod: TODAY, changefreq: "weekly", priority: "0.8" },
  { path: "/industrias", lastmod: TODAY, changefreq: "weekly", priority: "0.8" },
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

console.log(
  `Generated sitemap index with ${pageEntries.length + blogEntries.length + projectEntries.length + pseoEntries.length} URLs across ${Object.keys(sitemapFiles).length} sitemap files.`
);
console.log("Successfully generated all pSEO entry points for static hosting!");
