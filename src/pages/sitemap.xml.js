import { SITE } from "../data/portfolio";

const PUBLIC_ROUTES = ["/"];

export function GET() {
  const urls = PUBLIC_ROUTES.map((route) => {
    const url = new URL(route, SITE.url).toString();

    return `
  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.7"}</priority>
  </url>`;
  }).join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
