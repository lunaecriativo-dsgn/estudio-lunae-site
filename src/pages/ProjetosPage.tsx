import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, ArrowRight, Eye, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import paperTexture from "@/assets/paper-texture.jpg";

interface ProjectItem {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  tag: string;
}

const projectsList: ProjectItem[] = [
  {
    slug: "onyx-personal-trainer",
    name: "Onyx Personal Trainer",
    category: "Branding & Presença Digital",
    description: "Criação de identidade visual clara, estruturação estratégica de Instagram e desenvolvimento de site para personal trainer.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    tag: "Saúde & Disciplina"
  },
  {
    slug: "camila-ramos",
    name: "Camila Ramos",
    category: "Identidade Visual & Instagram",
    description: "Reposicionamento completo de marca e canal digital profissional para especialista em psicologia infantil.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
    tag: "Saúde & Acolhimento"
  },
  {
    slug: "mari-locacoes",
    name: "Mari Locações",
    category: "Social Media & Identidade Visual",
    description: "Gestão estratégica de marketing, copywriting, design de carrosséis e redes sociais para locação de imóveis em Santos/SP.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tag: "Mercado Imobiliário"
  }
];

const ProjetosPage = () => {
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Nosso Portfólio de Cases | Lunae Estúdio Criativo",
    "description": "Veja os projetos reais desenvolvidos pelo Estúdio Lunae: Onyx Personal Trainer, Camila Ramos e Mari Locações. Design estratégico e tecnologia integrados.",
    "publisher": {
      "@type": "Organization",
      "name": "Lunae Estúdio Criativo",
      "logo": "https://lunaestudio.com.br/assets/logo-lunae.png"
    }
  };

  return (
    <>
      <SEO 
        title="Casos de Sucesso | Portfólio Lunae" 
        description="Explore nossos principais casos de branding, redes sociais e desenvolvimento web para empreendedoras e marcas de sucesso."
        schema={projectsSchema}
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
                <span className="text-primary font-medium" aria-current="page">Projetos</span>
              </nav>

              {/* Title Section */}
              <div className="text-center max-w-4xl mx-auto mb-20">
                <span className="font-body font-bold text-secondary tracking-widest uppercase text-xs md:text-sm block mb-3">
                  ✦ NOSSOS CASOS DE SUCESSO
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary leading-tight mb-6">
                  Nosso Portfólio
                </h1>
                <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed">
                  Trabalhos autorais repletos de intenção estratégica, criados para gerar conexão profunda e impulsionar o faturamento de marcas femininas.
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                {projectsList.map((project) => (
                  <article 
                    key={project.slug}
                    className="group bg-white rounded-3xl border border-[#443A94]/15 overflow-hidden hover:border-secondary/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
                  >
                    <div>
                      {/* Image container */}
                      <div className="relative overflow-hidden aspect-[4/3] bg-[#443A94]/5 border-b border-muted">
                        <img 
                          src={project.image} 
                          alt={`Capa do projeto ${project.name}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 bg-[#FA7C9C] text-white font-body text-[11px] font-bold uppercase px-3 py-1.5 rounded-full shadow-sm">
                          {project.tag}
                        </div>
                      </div>

                      {/* Info body */}
                      <div className="p-8 space-y-4">
                        <span className="font-body text-xs font-semibold text-secondary tracking-wider block">
                          {project.category}
                        </span>
                        <h2 className="text-2xl font-display font-bold text-primary leading-tight group-hover:text-secondary transition-colors">
                          {project.name}
                        </h2>
                        <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed font-light">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-8 pb-8 pt-2">
                      <Link
                        to={`/projetos/${project.slug}`}
                        className="inline-flex items-center gap-2 font-body font-bold text-xs md:text-sm text-primary group-hover:text-secondary transition-colors min-h-[44px]"
                      >
                        Explorar Case completo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>



              {/* Conversion CTA */}
              <section className="bg-[#443A94] rounded-3xl p-8 md:p-16 text-white text-center shadow-lg relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                  Construa um case de sucesso de sua própria marca
                </h2>
                <p className="font-body text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                  Vamos estruturar juntos sua presença visual e web de alto nível. Fale direto com as fundadoras.
                </p>
                <a
                  href="https://wa.me/5513991598181?text=Olá! Visitei seu portfólio de projetos e gostaria de falar sobre as soluções para minha empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-body font-bold text-sm md:text-base bg-[#FA7C9C] text-white hover:bg-white hover:text-primary py-4 px-10 rounded-full transition-all duration-300 shadow-md"
                >
                  Criar Projeto Conosco ✦
                </a>
              </section>

            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProjetosPage;
