import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SITE_URL } from "@/lib/site";

const Index = () => {
  // Dados estruturados da home: quem é a Lunae, onde atende e o que oferece
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#lunae`,
        "name": "Lunae Estúdio Criativo",
        "alternateName": "Lunae",
        "url": `${SITE_URL}/`,
        "logo": `${SITE_URL}/logo-lunae.png`,
        "image": `${SITE_URL}/logo-lunae.png`,
        "description": "Estúdio criativo de Santos (SP) que cria identidade visual, Instagram estratégico e sites para mulheres empreendedoras, profissionais autônomas e pequenos negócios.",
        "email": "comercial@lunaecriativo.com.br",
        "telephone": "+55-13-99159-8181",
        "address": { "@type": "PostalAddress", "addressLocality": "Santos", "addressRegion": "SP", "addressCountry": "BR" },
        "areaServed": [
          { "@type": "City", "name": "Santos" },
          { "@type": "City", "name": "São Vicente" },
          { "@type": "City", "name": "Guarujá" },
          { "@type": "City", "name": "Praia Grande" },
          { "@type": "Country", "name": "Brasil" }
        ],
        "founder": [
          { "@type": "Person", "name": "Luiza Menezes", "jobTitle": "Cofundadora · UX/UI e Desenvolvimento" },
          { "@type": "Person", "name": "Nayla Prilla", "jobTitle": "Cofundadora · Ilustração e Design Visual" }
        ],
        "knowsAbout": ["identidade visual", "branding", "Instagram para negócios", "UX/UI", "criação de sites", "ilustração autoral"],
        "sameAs": [
          "https://www.instagram.com/lunae.estudiocriativo/",
          "https://www.linkedin.com/company/lunae-estudiocriativo/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#site`,
        "name": "Lunae Estúdio Criativo",
        "url": `${SITE_URL}/`,
        "inLanguage": "pt-BR",
        "publisher": { "@id": `${SITE_URL}/#lunae` }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Lunae Estúdio Criativo · Identidade Visual, Instagram e Sites"
        description="Estúdio criativo em Santos (SP) que cria identidade visual, Instagram estratégico e sites para empreendedoras e pequenos negócios. Atendimento em todo o Brasil."
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
