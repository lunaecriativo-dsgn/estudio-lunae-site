import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, ShieldAlert, FileText, Users, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import paperTexture from "@/assets/paper-texture.jpg";

const SobrePage = () => {
  const indexSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sobre a Lunae | Estúdio Criativo",
    "description": "Estúdio de design e estratégia focado em impulsionar o empreendedorismo feminino através de identidade visual autoral e sites de alta performance.",
    "publisher": {
      "@type": "Organization",
      "name": "Lunae Estúdio Criativo",
      "logo": "https://lunaestudio.com.br/assets/logo-lunae.png"
    }
  };

  return (
    <>
      <SEO 
        title="Sobre a Lunae | Estúdio Criativo" 
        description="Conheça a Lunae. Oferecemos design estratégico de alta qualidade e tecnologia premium para destacar seu empreendimento feminino no digital."
        schema={indexSchema}
      />

      <div 
        className="min-h-screen relative"
        style={{ 
          backgroundImage: `url(${paperTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/80 pointer-events-none" />
        
        <div className="relative z-10">
          <Header />
          
          <main id="main-content" className="pt-28 md:pt-36 pb-20">
            <div className="max-w-6xl mx-auto px-6">
              
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs md:text-sm font-body text-muted-foreground">
                <Link to="/" className="hover:text-secondary flex items-center gap-1 transition-colors min-h-[44px] px-1 inline-flex items-center">
                  <Home size={14} />
                  Home
                </Link>
                <ChevronRight size={12} className="text-muted-foreground/50" />
                <span className="text-primary font-medium" aria-current="page">Sobre</span>
              </nav>

              {/* Header Title block */}
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-3">
                  ✦ AREA INSTITUCIONAL
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-primary leading-tight mb-6">
                  Sobre a Lunae
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed">
                  Acreditamos na força, inteligência e autonomia comercial de mulheres líderes. Unimos a exatidão metodológica com a magia da arte autoral.
                </p>
              </div>

              {/* Sub-sections Quick Grid */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto mb-20">
                {/* Card 1: Manifesto */}
                <article className="group flex flex-col justify-between p-8 md:p-10 bg-white border border-[#443A94]/15 rounded-3xl hover:border-secondary/40 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-left">
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-secondary" />
                    </div>
                    <h2 className="text-2xl font-display font-normal text-primary leading-tight">
                      Manifesto
                    </h2>
                    <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                      Nossos pilares, valores e visão pra fortalecer sua presença no mercado.
                    </p>
                  </div>
                  <div className="pt-8">
                    <Link
                      to="/sobre/manifesto"
                      className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary group-hover:text-secondary transition-colors min-h-[44px]"
                    >
                      Ler nosso manifesto <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>

                {/* Card 2: Equipe */}
                <article className="group flex flex-col justify-between p-8 md:p-10 bg-white border border-[#443A94]/15 rounded-3xl hover:border-secondary/40 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-left">
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <h2 className="text-2xl font-display font-normal text-primary leading-tight">
                      Equipe
                    </h2>
                    <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                      Quem faz a Lunae: Luiza Menezes, Nayla Prilla e nossa filosofia de co-criação.
                    </p>
                  </div>
                  <div className="pt-8">
                    <Link
                      to="/sobre/equipe"
                      className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary group-hover:text-secondary transition-colors min-h-[44px]"
                    >
                      Conhecer a equipe <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              </div>

              {/* Core Vision Overview Block */}
              <section className="bg-[#443A94]/5 border border-[#443A94]/10 rounded-3xl p-8 md:p-12 text-left max-w-4xl mx-auto">
                <h3 className="text-2xl font-display font-normal text-primary mb-4">Nossa Missão Coletiva</h3>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                  Acreditamos que independência financeira não é só um número. É a capacidade de tomar as rédeas da própria narrativa. Por isso, uma marca precisa de mais que estética: precisa de alma, estratégia e presença.
                </p>
              </section>

            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SobrePage;
