import { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_NAME, SITE_URL } from "@/lib/site";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: Record<string, any>;
  /** Use em páginas que não devem aparecer no Google (ex.: 404). */
  noindex?: boolean;
}

export interface SEOHead {
  title: string;
  description: string;
  canonical: string;
  schema?: Record<string, any>;
  noindex?: boolean;
}

/**
 * Durante a pré-renderização (scripts/prerender.ts), as páginas registram aqui
 * suas tags, que são gravadas no <head> do HTML gerado. No navegador fica vazio.
 */
export const SEOCollectorContext = createContext<((head: SEOHead) => void) | null>(null);

/** "Identidade Visual" -> "Identidade Visual | Lunae Estúdio Criativo" (sem repetir o nome). */
export const formatTitle = (title: string) =>
  title.includes("Lunae") ? title : `${title} | ${SITE_NAME}`;

/** URL canônica sem parâmetros e sem barra final (exceto na home). */
export const canonicalFor = (pathname: string) => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
  return `${SITE_URL}${clean === "/" ? "/" : clean}`;
};

const setMeta = (attr: "name" | "property", key: string, value: string) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const SEO = ({ title, description, canonical, schema, noindex }: SEOProps) => {
  const location = useLocation();
  const collect = useContext(SEOCollectorContext);
  const url = canonical || canonicalFor(location.pathname);
  const fullTitle = formatTitle(title);

  if (collect) collect({ title: fullTitle, description, canonical: url, schema, noindex });

  useEffect(() => {
    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "pt_BR");

    const scriptId = "json-ld-schema";
    document.getElementById(scriptId)?.remove();
    if (schema) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [fullTitle, description, url, schema, noindex]);

  return null;
};

export default SEO;
