// Pré-renderização: depois do build, gera um HTML completo para cada página
// (texto, links, título, descrição, canonical e dados estruturados já no arquivo).
// Assim o Google e os robôs de IA leem o site sem precisar executar JavaScript.
// Também gera o sitemap.xml e o 404.html.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE_URL = "https://lunaecriativo.com.br";

// Páginas públicas. Ao criar uma página nova (blog, cases, /santos), acrescente aqui.
const routes = [
  { path: "/", priority: "1.0" },
  { path: "/servicos", priority: "0.9" },
  { path: "/servicos/identidade-visual", priority: "0.9" },
  { path: "/servicos/presenca-digital", priority: "0.9" },
  { path: "/servicos/instagram-estrategico", priority: "0.9" },
  { path: "/servicos/gestao-de-redes-sociais", priority: "0.8" },
  { path: "/servicos/portfolio", priority: "0.8" },
  { path: "/servicos/complementos-ilustrados", priority: "0.8" },
  { path: "/servicos/materiais-graficos", priority: "0.8" },
  { path: "/servicos/gestao-de-leads", priority: "0.7" },
  { path: "/processo", priority: "0.7" },
  { path: "/sobre", priority: "0.7" },
  { path: "/sobre/manifesto", priority: "0.5" },
  { path: "/sobre/equipe", priority: "0.6" },
  { path: "/faq", priority: "0.7" },
  { path: "/contato", priority: "0.8" },
];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const headTags = (h) => [
  `<title>${esc(h.title)}</title>`,
  `<meta name="description" content="${esc(h.description)}" />`,
  `<meta name="robots" content="${h.noindex ? "noindex, follow" : "index, follow"}" />`,
  h.noindex ? "" : `<link rel="canonical" href="${esc(h.canonical)}" />`,
  `<meta property="og:title" content="${esc(h.title)}" />`,
  `<meta property="og:description" content="${esc(h.description)}" />`,
  h.noindex ? "" : `<meta property="og:url" content="${esc(h.canonical)}" />`,
  `<meta property="og:type" content="website" />`,
  `<meta property="og:site_name" content="Lunae Estúdio Criativo" />`,
  `<meta property="og:locale" content="pt_BR" />`,
  `<meta property="og:image" content="${SITE_URL}/logo-lunae.png" />`,
  h.schema
    ? `<script type="application/ld+json" id="json-ld-schema">${JSON.stringify(h.schema).replace(/</g, "\\u003c")}</script>`
    : "",
].filter(Boolean).join("\n    ");

const { render } = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8")
  .replace(/\s*<title>[\s\S]*?<\/title>/, "")
  .replace(/\s*<meta name="description"[^>]*>/, "");

const page = (url) => {
  const { html, head } = render(url);
  if (!head) throw new Error(`A página ${url} não registrou <SEO>.`);
  return template
    .replace("</head>", `    ${headTags(head)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
};

for (const r of routes) {
  const file = r.path === "/" ? path.join(dist, "index.html") : path.join(dist, r.path.slice(1), "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(r.path));
  console.log("pré-renderizado:", r.path);
}

fs.writeFileSync(path.join(dist, "404.html"), page("/pagina-nao-encontrada"));
console.log("pré-renderizado: 404.html");

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${SITE_URL}${r.path}</loc><lastmod>${today}</lastmod><priority>${r.priority}</priority></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
console.log("sitemap.xml com", routes.length, "páginas");

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
