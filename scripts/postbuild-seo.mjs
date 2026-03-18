import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const dataFile = path.join(projectRoot, 'src', 'data', 'pseo.ts');

if (!fs.existsSync(distDir)) {
  console.error("No dist directory found. Did you run vite build?");
  process.exit(1);
}

// Very basic extraction of the object from ts file
const tsContent = fs.readFileSync(dataFile, 'utf-8');
const match = tsContent.match(/export const pseoData: PseoData\[\] = (\[[\s\S]*?\]);/);

if (!match) {
  console.error("Could not parse pseoData from src/data/pseo.ts");
  process.exit(1);
}

let pseoData;
try {
  pseoData = JSON.parse(match[1]);
} catch (e) {
  console.error("Failed to parse JSON from pseo.ts:", e);
  process.exit(1);
}

const baseHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(baseHtmlPath)) {
  console.error("dist/index.html not found");
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

console.log(`Generating ${pseoData.length} static HTML entry points...`);

for (const page of pseoData) {
  const pageDir = path.join(distDir, page.slug);
  fs.mkdirSync(pageDir, { recursive: true });
  
  // Replace basic meta tags
  let newHtml = baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${page.title} | Servicios Creativos</title>`)
    .replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${page.description}">`)
    .replace(/<meta property="og:title" content=".*?">/, `<meta property="og:title" content="${page.title}">`)
    .replace(/<meta property="og:description" content=".*?">/, `<meta property="og:description" content="${page.description}">`)
    .replace(/<meta property="og:url" content=".*?">/, `<meta property="og:url" content="https://servicioscreativos.online/${page.slug}">`);
    
  fs.writeFileSync(path.join(pageDir, 'index.html'), newHtml);
}

console.log("Successfully generated all pSEO entry points for static hosting!");
