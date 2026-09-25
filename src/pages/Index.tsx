import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  // Home Page Schema.org JSON-LD structured data
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Lunae Estúdio Criativo",
    "url": "https://lunaestudio.com.br",
    "description": "Estúdio de design e estratégia focado em impulsionar o empreendedorismo feminino através de identidade visual autoral e sites de alta performance.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://lunaestudio.com.br/faq?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEO 
        title="Home" 
        description="Estúdio de design e tecnologia focado em impulsionar o empreendedorismo feminino através de identidade visual de luxo, Instagram estratégico e sites ultra-velozes."
        schema={homeSchema}
      />

      <div 
        className="min-h-screen relative paper-bg"
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-background/[0.64] pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">
          <Header />
          <main id="main-content">
            <HeroSection />
            <ImpactSection />
            <ServicesSection />
            <AboutSection />
            <CTASection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
