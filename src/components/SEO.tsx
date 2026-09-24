import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: Record<string, any>;
}

const SEO = ({ title, description, canonical, schema }: SEOProps) => {
  const location = useLocation();
  const currentUrl = `https://lunaestudio.com.br${location.pathname}${location.search}`;

  useEffect(() => {
    // 1. Update Document Title
    const formattedTitle = `${title} | Lunae Estúdio Criativo`;
    document.title = formattedTitle;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // 3. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical || currentUrl);

    // 4. Update Open Graph Tags
    const ogTags = {
      "og:title": formattedTitle,
      "og:description": description,
      "og:url": canonical || currentUrl,
      "og:type": "website",
      "og:site_name": "Lunae Estúdio Criativo"
    };

    Object.entries(ogTags).forEach(([property, value]) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement("meta");
        ogMeta.setAttribute("property", property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute("content", value);
    });

    // 5. Inject JSON-LD Schema
    const scriptId = "json-ld-schema";
    let schemaScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = scriptId;
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }

    return () => {
      // Cleanup schema script on unmount to prevent duplicate schemas on other pages
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, canonical, schema, currentUrl]);

  return null;
};

export default SEO;
