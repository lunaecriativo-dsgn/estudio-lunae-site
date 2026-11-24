import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
    <SEO title="Página não encontrada" description="Esta página não existe. Volte para o início do site da Lunae Estúdio Criativo." noindex />
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Página não encontrada</p>
        <a href="/" className="text-primary hover:text-primary/80 underline">
          Voltar para o Início
        </a>
      </div>
    </div>
    </>
  );
};

export default NotFound;
