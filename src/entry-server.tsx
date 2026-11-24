import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppShell } from "./App";
import { SEOCollectorContext, type SEOHead } from "./components/SEO";

/** Gera o HTML de uma rota e as tags de <head> que a página registrou. */
export function render(url: string) {
  let head: SEOHead | null = null;
  const html = renderToString(
    <SEOCollectorContext.Provider value={(h) => { head = h; }}>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </SEOCollectorContext.Provider>,
  );
  return { html, head: head as SEOHead | null };
}
