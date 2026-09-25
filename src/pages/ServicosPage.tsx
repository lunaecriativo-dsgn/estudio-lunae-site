import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, ArrowRight, Paintbrush, Smartphone, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

interface ServiceIndexItem {
  id: string;
  title: string;
  shortDescription: string;
  iconComponent: React.ReactNode;
  url: string;
}

const servicesIndexList: ServiceIndexItem[] = [
  {
    id: "identidade-visual",
    title: "Identidade Visual",
    shortDescription: "Logotipo, cores e grafismos que traduzem sua essência e ficam na memória.",
    iconComponent: <Paintbrush className="w-6 h-6 text-secondary" />,
    url: "/servicos/identidade-visual"
  },
  {
    id: "instagram-estrategico",
    title: "Instagram Estratégico",
    shortDescription: "Bio, destaques e templates que organizam seu perfil e facilitam sua rotina.",
    iconComponent: <Smartphone className="w-6 h-6 text-secondary" />,
    url: "/servicos/instagram-estrategico"
  },
  {
    id: "presenca-digital",
    title: "Presença Digital",
    shortDescription: "Site rápido e estratégico que passa credibilidade e atrai as pessoas certas.",
    iconComponent: <Globe className="w-6 h-6 text-secondary" />,
    url: "/servicos/presenca-digital"
  }
];

const ServicosPage = () => {
  const servicosSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Nossos Serviços | Soluções Digitais Lunae",
    "description": "Descubra as soluções sob medida da Lunae para impulsionar seu negócio: Identidade Visual, Instagram Estratégico e Presença Digital de alto impacto.",
    "publisher": {
      "@type": "Organization",
      "name": "Lunae Estúdio Criativo",
      "logo": "https://lunaestudio.com.br/assets/logo-lunae.png"
    }
  };

  return (
    <>
      <SEO 
        title="Nossos Serviços | Lunae Estúdio Criativo" 
        description="Nossas soluções completas de design estratégico, branding de luxo e desenvolvimento web sob medida para impulsionar seu empreendimento feminino."
        schema={servicosSchema}
      />

      <div 
        className="min-h-screen relative paper-bg"
      >
        <div className="absolute inset-0 bg-background/[0.64] pointer-events-none" />
        
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
                <span className="text-primary font-medium" aria-current="page">Serviços</span>
              </nav>

              {/* Title Section */}
              <div className="text-center max-w-4xl mx-auto mb-20">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-3">
                  ✦ SOLUÇÕES ESTRATÉGICAS
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-primary leading-tight mb-6">
                  Nossas Soluções
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed">
                  Nada de arquivo solto. Entregamos ecossistemas completos, pensados de ponta a ponta.
                </p>
              </div>

              {/* Solutions List */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                {servicesIndexList.map((sol) => (
                  <article
                    key={sol.id}
                    className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-[#443A94]/10 hover:border-secondary/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-left"
                  >
                    <div className="space-y-6">
                      <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center">
                        {sol.iconComponent}
                      </div>

                      <h2 className="text-xl md:text-2xl font-display font-normal text-primary leading-tight">
                        {sol.title}
                      </h2>

                      <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                        {sol.shortDescription}
                      </p>
                    </div>

                    <div className="pt-8">
                      <Link
                        to={sol.url}
                        className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary hover:text-secondary transition-colors min-h-[44px]"
                        aria-label={`Ver mais detalhes sobre ${sol.title}`}
                      >
                        Ver detalhes do serviço <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Premium Integration Bundle Callout */}
              <section className="bg-gradient-to-br from-[#443A94] to-[#FA7C9C] rounded-3xl p-8 md:p-16 text-white text-center shadow-lg relative overflow-hidden max-w-4xl mx-auto">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <h2 className="text-2xl md:text-3xl font-display font-normal mb-4">
                  Pronta pra ocupar seu espaço de vez?
                </h2>
                <p className="font-body text-white/80 text-sm max-w-2xl mx-auto mb-8 leading-relaxed font-light">
                  Identidade Visual + Redes Sociais + Site, com condições especiais no Combo Lunae Completo.
                </p>
                <a
                  href="https://wa.me/5513991598181?text=Olá! Gostaria de consultar as condições e valores para o Combo Lunae Completo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-body font-bold text-sm bg-white text-[#443A94] hover:bg-[#FA7C9C] hover:text-white py-4 px-8 rounded-full transition-all duration-300"
                >
                  Consultar Combo Completo via WhatsApp ✦
                </a>
                <p className="block w-fit mx-auto font-display font-normal text-3xl md:text-5xl tracking-wide text-white/90 mt-10 origin-center cursor-default transition-transform duration-300 motion-safe:hover:scale-120 motion-reduce:transition-none">Conta com a gente!</p>
              </section>

            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ServicosPage;
